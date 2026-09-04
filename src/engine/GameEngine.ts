// src/engine/GameEngine.ts
// Mutagenic-inspired ARPG + survivor combat: WASD move, mouse aim, auto-firing skills.

import { ACTIVE_SKILLS } from '../constants/skillGems';
import { QUESTS } from '../constants/quests';
import { ZONES } from '../constants/mapsData';
import { Currencies, SaveSlotId } from '../types/character';
import { DamageInstance, FloatingText, GroundLoot, MonsterRarity, Vector2D } from '../types/combat';
import { EquipmentSlot } from '../types/items';
import { ZoneDefinition } from '../types/maps';
import { EquippedSkill, SkillDefinition } from '../types/skills';
import { DamageSystem } from './DamageSystem';
import { Enemy } from './Enemy';
import { LootSystem } from './LootSystem';
import { ParticleSystem } from './ParticleSystem';
import { Player } from './Player';
import { Projectile } from './Projectile';
import { SaveSystem } from './SaveSystem';
import { SoundSystem } from './SoundSystem';
import { SpatialGrid } from './SpatialGrid';

export interface MapObstacle {
  x: number;
  y: number;
  radius: number;
  type: string;
}

interface XpOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: number;
  radius: number;
  color: string;
}

interface Afterimage {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  color: string;
}

const MOVEMENT_SKILLS = new Set(['dash_movement']);
const AURA_SKILLS = new Set(['orbiting_blades', 'blade_vortex', 'righteous_fire_aura']);

export class GameEngine {
  public canvas: HTMLCanvasElement | null = null;
  public ctx: CanvasRenderingContext2D | null = null;

  public currentSlotId: SaveSlotId = 'slot_1';
  public player: Player;
  public enemies: Enemy[] = [];
  public projectiles: Projectile[] = [];
  public groundLoot: GroundLoot[] = [];
  public floatingTexts: FloatingText[] = [];
  public obstacles: MapObstacle[] = [];
  public xpOrbs: XpOrb[] = [];
  public afterimages: Afterimage[] = [];

  public enemyGrid = new SpatialGrid<Enemy>(140);
  public particleSystem = new ParticleSystem();
  public soundSystem = new SoundSystem();

  public currentZone: ZoneDefinition;
  public unlockedZoneIds: string[] = ['town_havens_watch', 'ashen_coast'];
  public completedQuestIds: string[] = [];
  public currentZoneKills: number = 0;
  public isBossSpawned: boolean = false;
  public isZoneCleared: boolean = false;

  public cameraX: number = 0;
  public cameraY: number = 0;
  public viewportWidth: number = window.innerWidth || 1280;
  public viewportHeight: number = window.innerHeight || 720;
  public shakeTime: number = 0;
  public shakeMag: number = 0;
  public renderShakeX: number = 0;
  public renderShakeY: number = 0;

  public keysDown: { [key: string]: boolean } = {};
  public mousePos: Vector2D = { x: 0, y: 0 };
  public mouseScreen: Vector2D = { x: 0, y: 0 };
  public isMouseDown: boolean = false;
  public isRightMouseDown: boolean = false;
  public hasMovedOnce: boolean = false;

  public timeScale: number = 1;
  public isFocusTime: boolean = false;
  public moveDirX: number = 1;
  public moveDirY: number = 0;

  private lastTime: number = 0;
  private animationFrameId: number | null = null;
  public isPaused: boolean = false;
  private spawnTimer: number = 0;
  private autoSaveTimer: number = 0;
  public gameTime: number = 0;
  private lastAttackSound: number = 0;
  private walkDustTimer: number = 0;
  private zoneBannerTime: number = 2.4;

  public onUIUpdate?: () => void;
  public onPlayerDeath?: () => void;
  public onZoneVictory?: (zone: ZoneDefinition) => void;
  public onBossSpawned?: (bossName: string) => void;

  constructor(
    slotId: SaveSlotId = 'slot_1',
    characterName: string = 'Vaelor',
    startNodeId: string = 'node_center_hub'
  ) {
    this.currentSlotId = slotId;
    this.player = new Player(characterName, startNodeId);
    this.currentZone = ZONES['town_havens_watch'] || ZONES['ashen_coast'];
    this.initMap(this.currentZone);
  }

  public bindCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.resize(window.innerWidth, window.innerHeight);
    if (this.animationFrameId === null) {
      this.startLoop();
    }
  }

  public resize(width: number, height: number): void {
    this.viewportWidth = Math.max(300, width);
    this.viewportHeight = Math.max(300, height);
    if (this.canvas) {
      this.canvas.width = this.viewportWidth;
      this.canvas.height = this.viewportHeight;
    }
  }

  public initMap(zone: ZoneDefinition): void {
    this.currentZone = zone;
    this.enemies = [];
    this.projectiles = [];
    this.groundLoot = [];
    this.floatingTexts = [];
    this.xpOrbs = [];
    this.afterimages = [];
    this.currentZoneKills = 0;
    this.isBossSpawned = false;
    this.isZoneCleared = false;
    this.enemyGrid.clear();
    this.zoneBannerTime = 2.6;
    this.spawnTimer = 0;

    this.player.x = zone.mapWidth / 2;
    this.player.y = zone.mapHeight / 2;
    this.player.vx = 0;
    this.player.vy = 0;
    this.cameraX = this.player.x - this.viewportWidth / 2;
    this.cameraY = this.player.y - this.viewportHeight / 2;

    this.obstacles = [];
    const obstacleCount = zone.isTown ? 6 : zone.obstacleCount;
    for (let i = 0; i < obstacleCount; i++) {
      const ox = 180 + Math.random() * (zone.mapWidth - 360);
      const oy = 180 + Math.random() * (zone.mapHeight - 360);
      if (Math.hypot(ox - this.player.x, oy - this.player.y) > 220) {
        this.obstacles.push({
          x: ox,
          y: oy,
          radius: zone.isTown ? 22 + Math.random() * 14 : 28 + Math.random() * 28,
          type: zone.obstacleType,
        });
      }
    }

    if (zone.isTown) {
      const dummy1 = new Enemy(
        'dummy_1',
        'Training Dummy (Armored)',
        'crystal_golem',
        'normal',
        1,
        this.player.x + 240,
        this.player.y - 110,
        false
      );
      dummy1.maxLife = 999999;
      dummy1.currentLife = 999999;
      dummy1.speed = 0;
      dummy1.color = '#71717a';
      dummy1.glowColor = '#a1a1aa';
      dummy1.shape = 'square';
      this.enemies.push(dummy1);

      const dummy2 = new Enemy(
        'dummy_2',
        'Training Dummy (Elemental)',
        'gem_shard_elemental',
        'magic',
        1,
        this.player.x + 240,
        this.player.y + 110,
        false
      );
      dummy2.maxLife = 999999;
      dummy2.currentLife = 999999;
      dummy2.speed = 0;
      dummy2.color = '#38bdf8';
      dummy2.glowColor = '#7dd3fc';
      dummy2.shape = 'hex';
      this.enemies.push(dummy2);
    } else {
      for (let i = 0; i < 18; i++) {
        this.spawnMonster(false, i < 8 ? 380 + Math.random() * 160 : 520 + Math.random() * 280);
      }
    }

    if (!this.unlockedZoneIds.includes(zone.id)) {
      this.unlockedZoneIds.push(zone.id);
    }

    this.onUIUpdate?.();
  }

  public changeZone(zoneId: string): void {
    const targetZone = ZONES[zoneId];
    if (!targetZone) return;
    this.initMap(targetZone);
    this.saveGame();
  }

  private startLoop(): void {
    this.lastTime = performance.now();
    const tick = (now: number) => {
      const rawDt = Math.min(0.05, (now - this.lastTime) / 1000);
      this.lastTime = now;
      this.gameTime += rawDt;

      if (
        this.canvas &&
        (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight)
      ) {
        this.resize(window.innerWidth, window.innerHeight);
      }

      this.isFocusTime = !!(this.keysDown['shift'] && !this.currentZone.isTown && !this.isPaused);
      this.timeScale = this.isFocusTime ? 0.38 : 1;

      if (!this.isPaused) {
        this.update(rawDt * this.timeScale, rawDt);
      }
      this.render();

      this.animationFrameId = requestAnimationFrame(tick);
    };
    this.animationFrameId = requestAnimationFrame(tick);
  }

  public destroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public releaseAllInput(): void {
    this.keysDown = {};
    this.isMouseDown = false;
    this.isRightMouseDown = false;
    this.player.vx = 0;
    this.player.vy = 0;
  }

  public handleKeyDown(key: string): void {
    const lower = key.toLowerCase();
    this.keysDown[lower] = true;
    if (key === ' ' || lower === 'space' || key === 'Spacebar') {
      this.triggerDash();
    }
    if (['1', '2', '3', '4', '5'].includes(key)) {
      const slot = `flask${key}` as EquipmentSlot;
      this.useFlask(slot);
    }
  }

  public handleKeyUp(key: string): void {
    this.keysDown[key.toLowerCase()] = false;
  }

  public handleMouseMove(screenX: number, screenY: number): void {
    this.mouseScreen = { x: screenX, y: screenY };
    this.mousePos = {
      x: screenX + this.cameraX,
      y: screenY + this.cameraY,
    };
  }

  public handleMouseDown(screenX: number, screenY: number, button: number = 0): void {
    this.handleMouseMove(screenX, screenY);
    if (button === 2) {
      this.isRightMouseDown = true;
      this.castEquippedSkill(1);
      return;
    }
    if (button !== 0) return;
    this.isMouseDown = true;
    const clickedLoot = this.groundLoot.find(
      (loot) => Math.hypot(loot.x - this.mousePos.x, loot.y - this.mousePos.y) < 36
    );
    if (clickedLoot) {
      this.pickupLoot(clickedLoot);
    } else {
      this.castEquippedSkill(0);
    }
  }

  public handleMouseUp(button?: number): void {
    if (button === 2) this.isRightMouseDown = false;
    else if (button === 0) this.isMouseDown = false;
    else {
      this.isMouseDown = false;
      this.isRightMouseDown = false;
    }
  }

  private update(dt: number, rawDt: number): void {
    this.handlePlayerMovement(dt);
    this.player.update(dt);
    this.resolvePlayerCollision();
    this.updateAim();

    if (this.zoneBannerTime > 0) this.zoneBannerTime -= rawDt;
    if (this.shakeTime > 0) {
      this.shakeTime = Math.max(0, this.shakeTime - rawDt);
    }

    this.handleAutoSkillCasting();
    if (this.isMouseDown) this.castEquippedSkill(0);
    if (this.isRightMouseDown) this.castEquippedSkill(1);

    if (!this.currentZone.isTown) {
      this.spawnTimer += dt;
      const interval = 0.55 / Math.max(0.4, this.currentZone.spawnRateMultiplier);
      if (this.spawnTimer >= interval) {
        this.spawnTimer = 0;
        if (this.enemies.length < this.currentZone.maxActiveMonsters) {
          this.spawnMonster(false);
        }
      }
    }

    this.enemyGrid.clear();
    this.enemies.forEach((e) => this.enemyGrid.insert(e));
    this.separateEnemies();

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      const isDead = enemy.update(dt, this.player.x, this.player.y, (e, dx, dy) => {
        this.spawnEnemyProjectile(e, dx, dy);
      });

      if (isDead || enemy.currentLife <= 0) {
        if (this.currentZone.isTown && enemy.speed <= 0) {
          enemy.currentLife = enemy.maxLife;
          this.particleSystem.emit(enemy.x, enemy.y, 8, enemy.color, 70, 3, 1.5, 'spark');
          continue;
        }
        this.onEnemyKilled(enemy);
        this.enemies.splice(i, 1);
        continue;
      }

      this.collideCircleWithObstacles(enemy);

      if (!enemy.isRanged && Math.hypot(enemy.x - this.player.x, enemy.y - this.player.y) <= enemy.attackRange + this.player.radius) {
        if (enemy.attackTimer <= 0 && !this.currentZone.isTown && enemy.speed > 0) {
          enemy.attackTimer = enemy.attackCooldown;
          this.damagePlayer(enemy.baseDamage, enemy.name);
        }
      }
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      const expired = proj.update(dt, this.player.x, this.player.y);

      if (expired) {
        if (proj.aoeRadius > 0 && proj.sourceId === 'player' && proj.behaviorType !== 'orbiting_blades' && proj.behaviorType !== 'blade_vortex') {
          this.triggerAoeExplosion(proj.x, proj.y, proj.aoeRadius, proj.damage, proj.color);
        }
        this.projectiles.splice(i, 1);
        continue;
      }

      if (proj.sourceId === 'player') {
        const hits = this.enemyGrid.queryRadius(proj.x, proj.y, proj.radius + 16);
        for (const enemy of hits) {
          if (proj.hitEntityIds.has(enemy.id)) continue;
          proj.hitEntityIds.add(enemy.id);

          const dmgResult = DamageSystem.applyDamageToTarget(proj.damage, enemy);
          enemy.currentLife -= dmgResult.lifeDamage;
          enemy.hitFlashTimer = 0.12;
          this.applyKnockback(enemy, proj.x, proj.y, proj.damage.isCrit ? 280 : 160);
          dmgResult.ailmentsApplied.forEach((a) => enemy.activeAilments.push(a));
          this.addFloatingDamageText(enemy.x, enemy.y - 15, dmgResult.totalDamage, dmgResult.isCrit, proj.color);

          if (this.player.stats.lifeLeechPercent > 0 && dmgResult.totalDamage > 0) {
            const leech = dmgResult.totalDamage * (this.player.stats.lifeLeechPercent / 100);
            this.player.stats.currentLife = Math.min(this.player.stats.maxLife, this.player.stats.currentLife + leech);
          }

          if (dmgResult.isCrit) {
            this.soundSystem.playCritHit();
            this.addShake(0.12, 7);
          } else if (this.gameTime - this.lastAttackSound > 0.08) {
            this.soundSystem.playHit();
          }

          this.particleSystem.emit(enemy.x, enemy.y, 5, proj.color, 90, 3.4, 1.8, 'spark');

          if (proj.aoeRadius > 18 && proj.behaviorType !== 'orbiting_blades' && proj.behaviorType !== 'blade_vortex') {
            this.triggerAoeExplosion(enemy.x, enemy.y, proj.aoeRadius, proj.damage, proj.color);
          }

          if (proj.pierceLeft > 0) {
            proj.pierceLeft--;
          } else if (proj.chainLeft > 0) {
            proj.chainLeft--;
            proj.hitEntityIds.add(enemy.id);
            const nextTarget = this.enemyGrid.findClosest(enemy.x, enemy.y, 320);
            if (nextTarget && nextTarget.id !== enemy.id && !proj.hitEntityIds.has(nextTarget.id)) {
              const cdx = nextTarget.x - enemy.x;
              const cdy = nextTarget.y - enemy.y;
              const cdist = Math.hypot(cdx, cdy) || 1;
              const spd = Math.max(220, Math.hypot(proj.vx, proj.vy));
              proj.vx = (cdx / cdist) * spd;
              proj.vy = (cdy / cdist) * spd;
              proj.x = enemy.x;
              proj.y = enemy.y;
            } else {
              this.projectiles.splice(i, 1);
              break;
            }
          } else if (proj.behaviorType !== 'orbiting_blades' && proj.behaviorType !== 'blade_vortex' && proj.behaviorType !== 'righteous_fire_aura') {
            this.projectiles.splice(i, 1);
            break;
          }
        }
      } else {
        const dist = Math.hypot(proj.x - this.player.x, proj.y - this.player.y);
        if (dist <= proj.radius + this.player.radius) {
          this.damagePlayer(
            proj.damage.physical + proj.damage.fire + proj.damage.cold + proj.damage.lightning + (proj.damage.chaos || 0),
            'Monster Projectile'
          );
          this.projectiles.splice(i, 1);
        }
      }
    }

    for (let i = this.groundLoot.length - 1; i >= 0; i--) {
      const loot = this.groundLoot[i];
      const dist = Math.hypot(loot.x - this.player.x, loot.y - this.player.y);
      if (dist <= this.player.stats.pickupRadius) {
        this.pickupLoot(loot);
      }
    }

    this.updateXpOrbs(dt);

    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.x += ft.vx * dt;
      ft.y += ft.vy * dt;
      ft.lifetime -= dt;
      ft.opacity = Math.max(0, ft.lifetime / ft.maxLifetime);
      if (ft.lifetime <= 0) this.floatingTexts.splice(i, 1);
    }

    for (let i = this.afterimages.length - 1; i >= 0; i--) {
      this.afterimages[i].life -= dt;
      if (this.afterimages[i].life <= 0) this.afterimages.splice(i, 1);
    }

    this.particleSystem.update(dt);
    this.updateCamera(rawDt);

    this.autoSaveTimer += rawDt;
    if (this.autoSaveTimer >= 10) {
      this.autoSaveTimer = 0;
      this.saveGame();
    }
  }

  private updateAim(): void {
    const dx = this.mousePos.x - this.player.x;
    const dy = this.mousePos.y - this.player.y;
    if (Math.hypot(dx, dy) > 6) {
      this.player.facingAngle = Math.atan2(dy, dx);
    }
  }

  private handlePlayerMovement(dt: number): void {
    let mx = 0;
    let my = 0;

    if (this.keysDown['w'] || this.keysDown['arrowup']) my -= 1;
    if (this.keysDown['s'] || this.keysDown['arrowdown']) my += 1;
    if (this.keysDown['a'] || this.keysDown['arrowleft']) mx -= 1;
    if (this.keysDown['d'] || this.keysDown['arrowright']) mx += 1;

    const len = Math.hypot(mx, my);
    const flaskSpeed = this.player.activeFlaskEffects['quicksilver'] ? 1.4 : 1;
    const speed = (this.player.stats.movementSpeed || 260) * flaskSpeed;

    if (len > 0) {
      this.hasMovedOnce = true;
      this.player.vx = (mx / len) * speed;
      this.player.vy = (my / len) * speed;
      this.moveDirX = mx / len;
      this.moveDirY = my / len;
      this.walkDustTimer += dt;
      if (this.walkDustTimer > 0.07) {
        this.walkDustTimer = 0;
        this.particleSystem.emit(this.player.x, this.player.y + 10, 1, '#94a3b8', 30, 2.2, 3.2, 'smoke');
      }
      if (this.gameTime * 18 % 1 < dt * 18) {
        this.afterimages.push({
          x: this.player.x,
          y: this.player.y,
          life: 0.18,
          maxLife: 0.18,
          color: this.player.appearance.auraColor || '#38bdf8',
        });
      }
    } else {
      this.player.vx = 0;
      this.player.vy = 0;
    }
  }

  private resolvePlayerCollision(): void {
    this.player.x = Math.max(28, Math.min(this.currentZone.mapWidth - 28, this.player.x));
    this.player.y = Math.max(28, Math.min(this.currentZone.mapHeight - 28, this.player.y));
    this.collideCircleWithObstacles(this.player);

    for (const enemy of this.enemies) {
      if (enemy.speed <= 0) continue;
      const dx = this.player.x - enemy.x;
      const dy = this.player.y - enemy.y;
      const dist = Math.hypot(dx, dy);
      const minDist = this.player.radius + enemy.radius - 2;
      if (dist > 0 && dist < minDist) {
        const push = (minDist - dist) * 0.35;
        this.player.x += (dx / dist) * push;
        this.player.y += (dy / dist) * push;
      }
    }
  }

  private collideCircleWithObstacles(entity: { x: number; y: number; radius: number }): void {
    for (const obs of this.obstacles) {
      const dx = entity.x - obs.x;
      const dy = entity.y - obs.y;
      const dist = Math.hypot(dx, dy);
      const minDist = entity.radius + obs.radius;
      if (dist < minDist && dist > 0.001) {
        const push = minDist - dist;
        entity.x += (dx / dist) * push;
        entity.y += (dy / dist) * push;
      }
    }
  }

  private separateEnemies(): void {
    for (let i = 0; i < this.enemies.length; i++) {
      const a = this.enemies[i];
      if (a.speed <= 0) continue;
      const nearby = this.enemyGrid.queryRadius(a.x, a.y, a.radius * 3.2);
      for (const b of nearby) {
        if (a.id === b.id) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        const minDist = a.radius + b.radius + 4;
        if (dist > 0 && dist < minDist) {
          const push = (minDist - dist) * 0.5;
          a.x += (dx / dist) * push;
          a.y += (dy / dist) * push;
        }
      }
    }
  }

  private updateCamera(rawDt: number): void {
    const targetX = this.player.x - this.viewportWidth / 2;
    const targetY = this.player.y - this.viewportHeight / 2;
    const lerp = 1 - Math.exp(-10 * rawDt);
    this.cameraX += (targetX - this.cameraX) * lerp;
    this.cameraY += (targetY - this.cameraY) * lerp;

    const maxX = Math.max(0, this.currentZone.mapWidth - this.viewportWidth);
    const maxY = Math.max(0, this.currentZone.mapHeight - this.viewportHeight);
    this.cameraX = Math.max(0, Math.min(maxX, this.cameraX));
    this.cameraY = Math.max(0, Math.min(maxY, this.cameraY));

    if (this.shakeTime > 0) {
      const mag = this.shakeMag * (this.shakeTime / 0.18);
      this.renderShakeX = (Math.random() - 0.5) * mag;
      this.renderShakeY = (Math.random() - 0.5) * mag;
    } else {
      this.renderShakeX = 0;
      this.renderShakeY = 0;
    }
  }

  private addShake(time: number, mag: number): void {
    this.shakeTime = Math.max(this.shakeTime, time);
    this.shakeMag = Math.max(this.shakeMag, mag);
  }

  public triggerDash(): void {
    if (this.player.dashCooldownTimer > 0 || this.isPaused) return;
    this.player.dashCooldownTimer = 1.65 / (this.player.stats.cooldownRecoveryRate || 1.0);
    this.player.invulnerabilityTimer = 0.28;

    const moving = Math.hypot(this.player.vx, this.player.vy) > 8;
    const angle = moving ? Math.atan2(this.moveDirY, this.moveDirX) : this.player.facingAngle;
    const dashDist = 210;
    const ox = this.player.x;
    const oy = this.player.y;
    this.player.x += Math.cos(angle) * dashDist;
    this.player.y += Math.sin(angle) * dashDist;
    this.resolvePlayerCollision();

    for (let t = 0; t < 6; t++) {
      this.afterimages.push({
        x: ox + (this.player.x - ox) * (t / 6),
        y: oy + (this.player.y - oy) * (t / 6),
        life: 0.28,
        maxLife: 0.28,
        color: this.player.appearance.auraColor || '#f97316',
      });
    }

    this.soundSystem.playDash();
    this.particleSystem.emit(this.player.x, this.player.y, 18, this.player.appearance.auraColor || '#f97316', 140, 4.5, 1.4, 'spark');
    this.onUIUpdate?.();
  }

  public useFlask(slot: EquipmentSlot): void {
    const item = this.player.equipment[slot];
    if (!item || item.category !== 'flask') return;

    this.soundSystem.playPotionUse();
    this.particleSystem.emit(this.player.x, this.player.y, 15, item.iconColor || '#38bdf8', 100, 4, 1.0, 'ring');

    if (item.baseId.includes('life')) {
      const heal = item.baseId === 'large_life_flask' ? 450 : 150;
      this.player.stats.currentLife = Math.min(this.player.stats.maxLife, this.player.stats.currentLife + heal);
      this.addFloatingDamageText(this.player.x, this.player.y - 25, `+${heal} Life`, false, '#22c55e');
    } else if (item.baseId === 'quicksilver_flask') {
      this.player.activeFlaskEffects['quicksilver'] = { duration: 4.0, type: 'speed' };
    }

    this.onUIUpdate?.();
  }

  private handleAutoSkillCasting(): void {
    this.player.equippedSkills.forEach((equippedSkill) => {
      if (!equippedSkill || !equippedSkill.isAutoCast) return;
      const skillDef = ACTIVE_SKILLS[equippedSkill.skillDefId];
      if (!skillDef) return;
      if (MOVEMENT_SKILLS.has(skillDef.behaviorType)) return;
      if (equippedSkill.cooldownTimer > 0) return;
      this.executeSkill(equippedSkill, skillDef);
    });
  }

  public castEquippedSkill(slotIndex: number): void {
    const equippedSkill = this.player.equippedSkills[slotIndex];
    if (!equippedSkill) return;
    const skillDef = ACTIVE_SKILLS[equippedSkill.skillDefId];
    if (!skillDef) return;
    if (equippedSkill.cooldownTimer > 0) return;
    this.executeSkill(equippedSkill, skillDef);
  }

  private executeSkill(equippedSkill: EquippedSkill, skillDef: SkillDefinition): void {
    const isAura = AURA_SKILLS.has(skillDef.behaviorType);
    const isPrimary = equippedSkill.slotIndex === 0;
    const manaCost = isPrimary || isAura ? 0 : skillDef.baseManaCost;

    if (this.player.stats.hemomancy) {
      if (this.player.stats.currentLife <= manaCost + 1) return;
      if (manaCost > 0) this.player.stats.currentLife -= manaCost;
    } else if (!isPrimary && !isAura) {
      if (this.player.stats.currentMana < manaCost) return;
      this.player.stats.currentMana -= manaCost;
    }

    const speedMult = skillDef.tags.includes('Spell')
      ? this.player.stats.castSpeedMultiplier || 1
      : this.player.stats.attackSpeedMultiplier || 1;
    const cd = Math.max(0.08, skillDef.baseCooldown / Math.max(0.4, speedMult));
    equippedSkill.cooldownTimer = cd;

    const dmg = DamageSystem.createPlayerDamageInstance(
      this.player.stats,
      skillDef,
      equippedSkill.level,
      this.player.equipment.mainHand,
      this.player.attributes
    );
    dmg.sourcePosition = { x: this.player.x, y: this.player.y };

    const aim = this.getAim();
    this.player.facingAngle = Math.atan2(aim.dirY, aim.dirX);

    if (skillDef.behaviorType === 'dash_movement') {
      this.triggerDash();
      this.triggerAoeExplosion(this.player.x, this.player.y, skillDef.aoeRadius || 70, dmg, skillDef.projectileColor);
      return;
    }

    if (isAura) {
      const existing = this.projectiles.find(
        (p) => p.sourceId === 'player' && (p.behaviorType === skillDef.behaviorType || p.behaviorType === 'orbiting_blades')
      );
      if (existing) {
        existing.lifetime = Math.max(existing.lifetime, skillDef.projectileLifetime);
        existing.damage = dmg;
        existing.orbitDistance = Math.max(70, skillDef.aoeRadius * 0.7);
        return;
      }
    }

    if (this.gameTime - this.lastAttackSound > 0.14) {
      this.lastAttackSound = this.gameTime;
      if (skillDef.tags.includes('Spell')) {
        this.soundSystem.playSpellCast(
          skillDef.damageType === 'cold' ? 'cold' : skillDef.damageType === 'lightning' ? 'lightning' : 'fire'
        );
      } else {
        this.soundSystem.playAttack();
      }
    }

    if (skillDef.behaviorType === 'holy_smite') {
      const tx = aim.target ? aim.target.x : this.player.x + aim.dirX * Math.min(skillDef.range, 280);
      const ty = aim.target ? aim.target.y : this.player.y + aim.dirY * Math.min(skillDef.range, 280);
      this.triggerAoeExplosion(tx, ty, skillDef.aoeRadius, dmg, skillDef.projectileColor);
      this.particleSystem.emit(tx, ty, 28, '#fbbf24', 180, 6, 1.4, 'spark');
      return;
    }

    if (skillDef.behaviorType === 'righteous_fire_aura' || skillDef.behaviorType === 'ground_slam_aoe' || skillDef.behaviorType === 'sonic_shockwave') {
      const tx = this.player.x + aim.dirX * (skillDef.behaviorType === 'righteous_fire_aura' ? 0 : 70);
      const ty = this.player.y + aim.dirY * (skillDef.behaviorType === 'righteous_fire_aura' ? 0 : 70);
      this.triggerAoeExplosion(tx, ty, skillDef.aoeRadius, dmg, skillDef.projectileColor);
      return;
    }

    if (skillDef.behaviorType === 'orbiting_blades' || skillDef.behaviorType === 'blade_vortex') {
      const blades = skillDef.behaviorType === 'blade_vortex' ? 3 : 2;
      const bladeStyle = skillDef.projectileStyle || (skillDef.behaviorType === 'blade_vortex' ? 'glaive_ring' : 'steel_cyclone');
      for (let b = 0; b < blades; b++) {
        const p = new Projectile(
          `proj_${Date.now()}_${b}_${Math.random()}`,
          'player',
          this.player.x,
          this.player.y,
          0,
          0,
          Math.max(12, skillDef.projectileRadius * 0.18),
          skillDef.projectileLifetime,
          99,
          0,
          0,
          dmg,
          skillDef.projectileColor,
          skillDef.projectileGlowColor,
          'orbiting_blades',
          bladeStyle
        );
        p.orbitAngle = (b / blades) * Math.PI * 2;
        p.orbitDistance = Math.max(58, skillDef.aoeRadius * 0.65);
        this.projectiles.push(p);
      }
      return;
    }

    let numProjectiles = skillDef.projectileCount + (this.player.stats.extraProjectiles || 0);
    if (equippedSkill.supportGemIds.includes('multiplex_barrage')) numProjectiles += 4;
    if (skillDef.behaviorType === 'nova_projectiles') numProjectiles = Math.max(8, numProjectiles);

    const spreadRads = ((skillDef.projectileSpread || 30) * Math.PI) / 180;
    const baseAngle = Math.atan2(aim.dirY, aim.dirX);
    const startAngle = numProjectiles > 1 ? baseAngle - spreadRads / 2 : baseAngle;
    const angleStep = numProjectiles > 1 ? spreadRads / Math.max(1, numProjectiles - 1) : 0;

    for (let pIdx = 0; pIdx < numProjectiles; pIdx++) {
      const curAngle =
        skillDef.behaviorType === 'nova_projectiles'
          ? (pIdx / numProjectiles) * Math.PI * 2
          : numProjectiles > 1
          ? startAngle + pIdx * angleStep
          : baseAngle;
      const spd = (skillDef.projectileSpeed || 420) * (this.player.stats.projectileSpeedMultiplier || 1.0);
      const vx = Math.cos(curAngle) * spd;
      const vy = Math.sin(curAngle) * spd;

      const proj = new Projectile(
        `proj_${Date.now()}_${pIdx}_${Math.random()}`,
        'player',
        this.player.x + Math.cos(curAngle) * 16,
        this.player.y + Math.sin(curAngle) * 16,
        vx,
        vy,
        skillDef.projectileRadius,
        skillDef.projectileLifetime,
        skillDef.pierceCount + (this.player.stats.pierceCount || 0),
        skillDef.chainCount + (this.player.stats.chainCount || 0),
        skillDef.aoeRadius,
        dmg,
        skillDef.projectileColor,
        skillDef.projectileGlowColor,
        skillDef.behaviorType,
        skillDef.projectileStyle || 'generic_bolt'
      );
      this.projectiles.push(proj);
    }
  }

  private getAim(): { dirX: number; dirY: number; target: Enemy | null } {
    const target = this.enemyGrid.findClosest(this.player.x, this.player.y, 720);
    const dx = this.mousePos.x - this.player.x;
    const dy = this.mousePos.y - this.player.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 8) {
      return { dirX: dx / dist, dirY: dy / dist, target };
    }
    if (target) {
      const tdx = target.x - this.player.x;
      const tdy = target.y - this.player.y;
      const td = Math.hypot(tdx, tdy) || 1;
      return { dirX: tdx / td, dirY: tdy / td, target };
    }
    return { dirX: Math.cos(this.player.facingAngle), dirY: Math.sin(this.player.facingAngle), target: null };
  }

  private triggerAoeExplosion(x: number, y: number, radius: number, dmg: DamageInstance, color: string): void {
    const hits = this.enemyGrid.queryRadius(x, y, radius);
    hits.forEach((enemy) => {
      const res = DamageSystem.applyDamageToTarget(dmg, enemy);
      enemy.currentLife -= res.lifeDamage;
      enemy.hitFlashTimer = 0.12;
      this.applyKnockback(enemy, x, y, 140);
      res.ailmentsApplied.forEach((a) => enemy.activeAilments.push(a));
      this.addFloatingDamageText(enemy.x, enemy.y - 15, res.totalDamage, res.isCrit, color);
    });
    this.particleSystem.emitExplosion(x, y, radius, color, '#ffffff');
  }

  private applyKnockback(enemy: Enemy, fromX: number, fromY: number, force: number): void {
    if (enemy.speed <= 0) return;
    const dx = enemy.x - fromX;
    const dy = enemy.y - fromY;
    const dist = Math.hypot(dx, dy) || 1;
    enemy.knockbackX += (dx / dist) * force;
    enemy.knockbackY += (dy / dist) * force;
  }

  private spawnMonster(isBoss: boolean = false, spawnDistOverride?: number): void {
    if (this.currentZone.isTown) return;

    const angle = Math.random() * Math.PI * 2;
    const spawnDist = spawnDistOverride ?? 480 + Math.random() * 260;
    let sx = this.player.x + Math.cos(angle) * spawnDist;
    let sy = this.player.y + Math.sin(angle) * spawnDist;
    sx = Math.max(80, Math.min(this.currentZone.mapWidth - 80, sx));
    sy = Math.max(80, Math.min(this.currentZone.mapHeight - 80, sy));

    const monsterTypes = this.currentZone.monsterTypes;
    const chosenType = monsterTypes[Math.floor(Math.random() * monsterTypes.length)] || 'drowned_mariner';

    let rarity: MonsterRarity = 'normal';
    const rRoll = Math.random();
    if (rRoll < this.currentZone.elitePackChance) {
      rarity = rRoll < this.currentZone.elitePackChance * 0.35 ? 'rare' : 'magic';
    }

    const enemy = new Enemy(
      `enemy_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      rarity === 'rare' ? `Dread ${chosenType.replace(/_/g, ' ')}` : chosenType.replace(/_/g, ' '),
      chosenType,
      rarity,
      this.currentZone.monsterLevel,
      sx,
      sy,
      false
    );
    this.enemies.push(enemy);
  }

  public spawnZoneBoss(): void {
    if (this.isBossSpawned || this.currentZone.isTown) return;
    this.isBossSpawned = true;

    const bossDef = this.currentZone.bossDefinition;
    if (!bossDef || bossDef.id === 'none') return;

    const angle = Math.random() * Math.PI * 2;
    const sx = this.player.x + Math.cos(angle) * 420;
    const sy = this.player.y + Math.sin(angle) * 420;

    const boss = new Enemy(`boss_${bossDef.id}`, bossDef.name, bossDef.id, 'boss', bossDef.level, sx, sy, true);
    boss.bossTitle = bossDef.title;
    boss.visualScale = bossDef.visualScale;
    boss.radius = 35 * bossDef.visualScale;
    boss.color = bossDef.tint;
    boss.glowColor = '#ffffff';
    boss.shape = 'hex';

    this.enemies.push(boss);
    this.onBossSpawned?.(bossDef.name);
    this.particleSystem.emitLevelUp(sx, sy);
    this.addShake(0.4, 14);
  }

  private spawnEnemyProjectile(enemy: Enemy, dirX: number, dirY: number): void {
    const spd = 260;
    const proj = new Projectile(
      `eproj_${Date.now()}_${Math.random()}`,
      enemy.id,
      enemy.x,
      enemy.y,
      dirX * spd,
      dirY * spd,
      8,
      2.5,
      0,
      0,
      0,
      {
        physical: enemy.baseDamage,
        fire: 0,
        cold: 0,
        lightning: 0,
        chaos: 0,
        isCrit: false,
        critMultiplier: 1.0,
        sourceEntityId: enemy.id,
        sourcePosition: { x: enemy.x, y: enemy.y },
      },
      enemy.color,
      enemy.glowColor,
      'straight_projectile',
      'enemy_bolt'
    );
    this.projectiles.push(proj);
  }

  private damagePlayer(rawDamage: number, sourceName: string): void {
    if (this.player.invulnerabilityTimer > 0) return;

    if (Math.random() * 100 < this.player.stats.chanceToEvade) {
      this.addFloatingDamageText(this.player.x, this.player.y - 20, 'EVADE', false, '#38bdf8');
      return;
    }

    const armor = this.player.stats.armor;
    const reduction = armor > 0 ? armor / (armor + 5 * rawDamage) : 0;
    const mitigated = Math.max(1, Math.round(rawDamage * (1 - Math.min(0.85, reduction + (this.player.stats.damageReduction || 0) / 100))));

    if (this.player.stats.currentEnergyShield > 0) {
      const absorbed = Math.min(this.player.stats.currentEnergyShield, mitigated);
      this.player.stats.currentEnergyShield -= absorbed;
      this.player.stats.currentLife -= mitigated - absorbed;
    } else {
      this.player.stats.currentLife -= mitigated;
    }

    this.player.invulnerabilityTimer = 0.22;
    this.addFloatingDamageText(this.player.x, this.player.y - 20, `-${mitigated}`, false, '#ef4444');
    this.soundSystem.playHit();
    this.particleSystem.emit(this.player.x, this.player.y, 8, '#ef4444', 80, 3, 1.0, 'spark');
    this.addShake(0.16, 8);

    if (this.player.stats.currentLife <= 0) {
      this.player.stats.currentLife = 0;
      this.player.onDeath();
      this.onPlayerDeath?.();
      this.saveGame();
    }

    this.onUIUpdate?.();
  }

  private onEnemyKilled(enemy: Enemy): void {
    if (enemy.speed <= 0 && this.currentZone.isTown) {
      this.particleSystem.emit(enemy.x, enemy.y, 10, enemy.color, 80, 3, 1.4, 'spark');
      enemy.currentLife = enemy.maxLife;
      return;
    }

    this.player.killsCount++;
    this.currentZoneKills++;

    const xp = enemy.level * (enemy.isBoss ? 250 : enemy.rarity === 'rare' ? 45 : enemy.rarity === 'magic' ? 18 : 8);
    this.spawnXpOrbs(enemy.x, enemy.y, xp, enemy.rarity);

    const { groundLoot, currenciesAwarded } = LootSystem.rollMonsterLoot(
      enemy.rarity,
      enemy.level,
      enemy.x,
      enemy.y,
      this.player.stats
    );
    this.groundLoot.push(...groundLoot);

    Object.keys(currenciesAwarded).forEach((k) => {
      const key = k as keyof Currencies;
      const amt = currenciesAwarded[key] || 0;
      if (amt > 0) {
        this.player.currencies[key] = (this.player.currencies[key] || 0) + amt;
        if (key === 'gold') this.addFloatingDamageText(enemy.x, enemy.y - 30, `+${amt} Gold`, false, '#eab308');
        else this.soundSystem.playItemDrop('currency');
      }
    });

    this.particleSystem.emit(enemy.x, enemy.y, enemy.isBoss ? 40 : 12, enemy.glowColor, 140, 4, 1.3, 'spark');

    if (!this.isBossSpawned && this.currentZoneKills >= this.currentZone.targetKillCount) {
      this.spawnZoneBoss();
    }

    if (enemy.isBoss) {
      this.player.bossesKilled++;
      this.isZoneCleared = true;
      this.onBossDefeated(enemy);
    }
  }

  private spawnXpOrbs(x: number, y: number, xp: number, rarity: MonsterRarity): void {
    const count = rarity === 'boss' ? 8 : rarity === 'rare' ? 4 : rarity === 'magic' ? 2 : 1;
    const each = Math.max(1, Math.round(xp / count));
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      this.xpOrbs.push({
        x: x + Math.cos(ang) * 12,
        y: y + Math.sin(ang) * 12,
        vx: Math.cos(ang) * 90,
        vy: Math.sin(ang) * 90,
        value: each,
        radius: rarity === 'boss' ? 7 : 4.5,
        color: rarity === 'boss' ? '#fbbf24' : rarity === 'rare' ? '#facc15' : '#38bdf8',
      });
    }
  }

  private updateXpOrbs(dt: number): void {
    const magnet = Math.max(140, this.player.stats.pickupRadius + 50);
    for (let i = this.xpOrbs.length - 1; i >= 0; i--) {
      const orb = this.xpOrbs[i];
      const dx = this.player.x - orb.x;
      const dy = this.player.y - orb.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 22) {
        const leveledUp = this.player.addExperience(orb.value);
        if (leveledUp) {
          this.soundSystem.playLevelUp();
          this.particleSystem.emitLevelUp(this.player.x, this.player.y);
          this.addFloatingDamageText(this.player.x, this.player.y - 45, 'LEVEL UP!', true, '#facc15');
          this.onUIUpdate?.();
        }
        this.xpOrbs.splice(i, 1);
        continue;
      }
      if (dist < magnet) {
        const pull = 520 * (1 - dist / magnet);
        orb.vx += (dx / dist) * pull * dt;
        orb.vy += (dy / dist) * pull * dt;
      }
      orb.vx *= 0.92;
      orb.vy *= 0.92;
      orb.x += orb.vx * dt;
      orb.y += orb.vy * dt;
    }
  }

  private onBossDefeated(boss: Enemy): void {
    Object.values(QUESTS).forEach((quest) => {
      if (quest.requiredBossId === boss.id && !this.completedQuestIds.includes(quest.id)) {
        this.completedQuestIds.push(quest.id);
        this.player.availablePassivePoints += quest.rewards.passivePoints;
        this.player.availableRespecPoints += quest.rewards.respecPoints;
        Object.keys(quest.rewards.currencies).forEach((k) => {
          const curKey = k as keyof Currencies;
          const amt = quest.rewards.currencies[curKey] || 0;
          this.player.currencies[curKey] = (this.player.currencies[curKey] || 0) + amt;
        });
        if (quest.rewards.unlockZoneId && !this.unlockedZoneIds.includes(quest.rewards.unlockZoneId)) {
          this.unlockedZoneIds.push(quest.rewards.unlockZoneId);
        }
      }
    });
    this.onZoneVictory?.(this.currentZone);
    this.saveGame();
  }

  public pickupLoot(loot: GroundLoot): void {
    const emptyIdx = this.player.inventory.findIndex((slot) => slot === null);
    if (emptyIdx !== -1) {
      this.player.inventory[emptyIdx] = loot.item;
      this.soundSystem.playItemDrop(loot.item.rarity as any);
      this.particleSystem.emit(loot.x, loot.y, 10, loot.item.iconColor || '#eab308', 90, 4, 1.2, 'spark');
      const idx = this.groundLoot.findIndex((l) => l.id === loot.id);
      if (idx !== -1) this.groundLoot.splice(idx, 1);
      this.onUIUpdate?.();
    }
  }

  private addFloatingDamageText(x: number, y: number, text: string | number, isCrit: boolean, color: string): void {
    this.floatingTexts.push({
      id: `ft_${Date.now()}_${Math.random()}`,
      x,
      y,
      text: text.toString(),
      color: isCrit ? '#facc15' : color,
      fontSize: isCrit ? 20 : 14,
      isCrit,
      opacity: 1.0,
      lifetime: 0.8,
      maxLifetime: 0.8,
      vx: (Math.random() - 0.5) * 40,
      vy: -60 - Math.random() * 30,
    });
  }

  public saveGame(): void {
    const saveData = this.player.toSaveData(this.currentZone.id, this.unlockedZoneIds, this.completedQuestIds);
    SaveSystem.saveCharacterToSlot(this.currentSlotId, saveData);
  }

  private render(): void {
    const ctx = this.ctx;
    if (!ctx) return;

    const camX = this.cameraX + this.renderShakeX;
    const camY = this.cameraY + this.renderShakeY;

    ctx.clearRect(0, 0, this.viewportWidth, this.viewportHeight);
    ctx.fillStyle = this.currentZone.backgroundColor || '#0f172a';
    ctx.fillRect(0, 0, this.viewportWidth, this.viewportHeight);

    const gridSize = 96;
    const startX = -((camX % gridSize) + gridSize) % gridSize;
    const startY = -((camY % gridSize) + gridSize) % gridSize;
    ctx.strokeStyle = this.currentZone.gridColor || '#1e293b';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    for (let x = startX; x < this.viewportWidth; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.viewportHeight);
    }
    for (let y = startY; y < this.viewportHeight; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.viewportWidth, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;

    this.renderBiomeDecor(ctx, camX, camY);

    if (this.currentZone.isTown) this.renderTown(ctx, camX, camY);

    this.obstacles.forEach((obs) => {
      const sx = obs.x - camX;
      const sy = obs.y - camY;
      if (sx < -120 || sx > this.viewportWidth + 120 || sy < -120 || sy > this.viewportHeight + 120) return;
      ctx.beginPath();
      ctx.arc(sx, sy, obs.radius, 0, Math.PI * 2);
      ctx.fillStyle = obs.type === 'lava_pits' ? '#7f1d1d' : obs.type === 'trees' ? '#14532d' : obs.type === 'crystals' ? '#312e81' : '#1e293b';
      ctx.fill();
      ctx.strokeStyle = obs.type === 'lava_pits' ? '#f97316' : obs.type === 'trees' ? '#22c55e' : obs.type === 'crystals' ? '#818cf8' : '#475569';
      ctx.lineWidth = 2.4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(sx - obs.radius * 0.28, sy - obs.radius * 0.28, obs.radius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fill();
    });

    this.groundLoot.forEach((loot) => {
      const sx = loot.x - camX;
      const sy = loot.y - camY;
      if (sx < -80 || sx > this.viewportWidth + 80) return;
      const color =
        loot.item.rarity === 'unique' ? '#af6025' : loot.item.rarity === 'rare' ? '#ffff77' : loot.item.rarity === 'magic' ? '#8888ff' : '#e4e4e7';
      if (loot.item.rarity === 'unique') {
        const grad = ctx.createLinearGradient(sx, sy, sx, sy - 120);
        grad.addColorStop(0, 'rgba(175, 96, 37, 0.8)');
        grad.addColorStop(1, 'rgba(175, 96, 37, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(sx - 10, sy - 120, 20, 120);
      }
      ctx.font = '11px Inter, sans-serif';
      const textWidth = ctx.measureText(loot.item.name).width;
      ctx.fillStyle = 'rgba(15, 17, 23, 0.92)';
      ctx.fillRect(sx - textWidth / 2 - 8, sy - 12, textWidth + 16, 20);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(sx - textWidth / 2 - 8, sy - 12, textWidth + 16, 20);
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(loot.item.name, sx, sy - 2);
    });

    this.xpOrbs.forEach((orb) => {
      const sx = orb.x - camX;
      const sy = orb.y - camY;
      ctx.beginPath();
      ctx.arc(sx, sy, orb.radius, 0, Math.PI * 2);
      ctx.fillStyle = orb.color;
      ctx.shadowColor = orb.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    this.enemies.forEach((enemy) => this.renderEnemy(ctx, enemy, camX, camY));

    this.afterimages.forEach((img) => {
      const sx = img.x - camX;
      const sy = img.y - camY;
      ctx.globalAlpha = (img.life / img.maxLife) * 0.35;
      ctx.beginPath();
      ctx.arc(sx, sy, this.player.radius, 0, Math.PI * 2);
      ctx.fillStyle = img.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    this.renderPlayer(ctx, camX, camY);

    this.projectiles.forEach((proj) => this.renderProjectile(ctx, proj, camX, camY));
    this.particleSystem.render(ctx, camX, camY);

    this.floatingTexts.forEach((ft) => {
      const sx = ft.x - camX;
      const sy = ft.y - camY;
      ctx.save();
      ctx.globalAlpha = ft.opacity;
      ctx.font = `${ft.isCrit ? 'bold ' : ''}${ft.fontSize}px ${ft.isCrit ? 'Cinzel' : 'Inter'}, sans-serif`;
      ctx.fillStyle = ft.color;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 4;
      ctx.fillText(ft.text, sx, sy);
      ctx.restore();
    });

    this.renderAimReticle(ctx);
    this.renderZoneBanner(ctx);
    if (this.isFocusTime) this.renderFocusOverlay(ctx);
  }

  private renderBiomeDecor(ctx: CanvasRenderingContext2D, camX: number, camY: number): void {
    ctx.save();
    const seed = this.currentZone.id.length * 17;
    for (let i = 0; i < 40; i++) {
      const wx = ((i * 173 + seed * 13) % this.currentZone.mapWidth);
      const wy = ((i * 97 + seed * 29) % this.currentZone.mapHeight);
      const sx = wx - camX;
      const sy = wy - camY;
      if (sx < -40 || sy < -40 || sx > this.viewportWidth + 40 || sy > this.viewportHeight + 40) continue;
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = this.currentZone.ambientLight || '#38bdf8';
      ctx.beginPath();
      ctx.arc(sx, sy, 3 + (i % 4), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private renderTown(ctx: CanvasRenderingContext2D, camX: number, camY: number): void {
    const townCenterX = this.currentZone.mapWidth / 2 - camX;
    const townCenterY = this.currentZone.mapHeight / 2 - camY;

    ctx.beginPath();
    ctx.arc(townCenterX, townCenterY, 320, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(30, 41, 59, 0.45)';
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.save();
    ctx.translate(townCenterX, townCenterY);
    ctx.rotate(this.gameTime * 0.8);
    ctx.beginPath();
    ctx.arc(0, 0, 70, 0, Math.PI * 2);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 45, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
    ctx.fill();
    ctx.strokeStyle = '#e0f2fe';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].forEach((ang) => {
      const tx = townCenterX + Math.cos(ang) * 160;
      const ty = townCenterY + Math.sin(ang) * 160;
      const torchGlow = ctx.createRadialGradient(tx, ty, 5, tx, ty, 60);
      torchGlow.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
      torchGlow.addColorStop(1, 'rgba(251, 191, 36, 0)');
      ctx.fillStyle = torchGlow;
      ctx.beginPath();
      ctx.arc(tx, ty, 60, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(tx, ty, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
    });
  }

  private renderEnemy(ctx: CanvasRenderingContext2D, enemy: Enemy, camX: number, camY: number): void {
    const sx = enemy.x - camX;
    const sy = enemy.y - camY;
    if (sx < -100 || sx > this.viewportWidth + 100 || sy < -100 || sy > this.viewportHeight + 100) return;
    ctx.save();
    if (enemy.rarity === 'rare' || enemy.isBoss) {
      ctx.beginPath();
      ctx.arc(sx, sy, enemy.radius + 10, 0, Math.PI * 2);
      ctx.fillStyle = enemy.glowColor;
      ctx.globalAlpha = 0.22;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    ctx.translate(sx, sy);
    ctx.rotate(enemy.facingAngle);
    ctx.fillStyle = enemy.hitFlashTimer > 0 ? '#ffffff' : enemy.color;
    ctx.strokeStyle = enemy.glowColor;
    ctx.lineWidth = enemy.isBoss || enemy.rarity === 'rare' ? 3 : 1.6;
    ctx.beginPath();
    const r = enemy.radius;
    if (enemy.shape === 'triangle') {
      ctx.moveTo(r, 0);
      ctx.lineTo(-r * 0.7, r * 0.75);
      ctx.lineTo(-r * 0.7, -r * 0.75);
      ctx.closePath();
    } else if (enemy.shape === 'hex') {
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
        else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
    } else if (enemy.shape === 'diamond') {
      ctx.moveTo(r, 0);
      ctx.lineTo(0, r * 0.7);
      ctx.lineTo(-r, 0);
      ctx.lineTo(0, -r * 0.7);
      ctx.closePath();
    } else if (enemy.shape === 'square') {
      ctx.rect(-r, -r, r * 2, r * 2);
    } else {
      ctx.arc(0, 0, r, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    if (!this.currentZone.isTown || enemy.speed === 0) {
      const barW = Math.max(30, enemy.radius * 2);
      const lifeRatio = Math.max(0, enemy.currentLife / enemy.maxLife);
      if (!this.currentZone.isTown) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(sx - barW / 2, sy - enemy.radius - 12, barW, 5);
        ctx.fillStyle = enemy.isBoss ? '#f59e0b' : '#ef4444';
        ctx.fillRect(sx - barW / 2, sy - enemy.radius - 12, barW * lifeRatio, 5);
      }
    }

    if (enemy.isBoss || enemy.rarity === 'rare' || this.currentZone.isTown) {
      ctx.font = '10px Cinzel, serif';
      ctx.fillStyle = enemy.glowColor;
      ctx.textAlign = 'center';
      ctx.fillText(enemy.name, sx, sy - enemy.radius - 16);
    }
  }

  private renderPlayer(ctx: CanvasRenderingContext2D, camX: number, camY: number): void {
    const psx = this.player.x - camX;
    const psy = this.player.y - camY;
    const aura = this.player.appearance.auraColor || '#38bdf8';
    const glow = this.player.appearance.glowColor || '#ffffff';
    const r = this.player.radius;
    const pulse = 1 + Math.sin(this.gameTime * 5) * 0.06;

    const light = ctx.createRadialGradient(psx, psy, 12, psx, psy, 200);
    light.addColorStop(0, this.hexAlpha(aura, 0.22));
    light.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = light;
    ctx.beginPath();
    ctx.arc(psx, psy, 200, 0, Math.PI * 2);
    ctx.fill();

    if (this.player.invulnerabilityTimer > 0) {
      ctx.globalAlpha = 0.45 + Math.sin(this.gameTime * 30) * 0.25;
    }

    ctx.beginPath();
    ctx.arc(psx, psy, (r + 9) * pulse, 0, Math.PI * 2);
    ctx.fillStyle = this.hexAlpha(aura, 0.32);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(psx, psy, r, 0, Math.PI * 2);
    ctx.fillStyle = aura;
    ctx.fill();
    ctx.strokeStyle = glow;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(psx, psy, r * 0.42, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    const ang = this.player.facingAngle;
    ctx.strokeStyle = glow;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(psx + Math.cos(ang) * (r - 2), psy + Math.sin(ang) * (r - 2));
    ctx.lineTo(psx + Math.cos(ang) * (r + 20), psy + Math.sin(ang) * (r + 20));
    ctx.stroke();
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(psx + Math.cos(ang) * (r + 20), psy + Math.sin(ang) * (r + 20), 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
  }

  private hexAlpha(hex: string, alpha: number): string {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  private renderProjectile(ctx: CanvasRenderingContext2D, proj: Projectile, camX: number, camY: number): void {
    const sx = proj.x - camX;
    const sy = proj.y - camY;
    if (sx < -120 || sx > this.viewportWidth + 120 || sy < -120 || sy > this.viewportHeight + 120) return;

    ctx.save();
    ctx.translate(sx, sy);
    const spd = Math.hypot(proj.vx, proj.vy);
    const angle = Math.atan2(proj.vy, proj.vx);
    const t = proj.age + proj.seed;
    const r = Math.max(3, proj.radius);
    const color = proj.color;
    const glow = proj.glowColor;
    const lifeRatio = Math.max(0, Math.min(1, proj.lifetime / proj.maxLifetime));

    const style = proj.style || 'generic_bolt';

    switch (style) {
      // ======================= PHYSICAL / MELEE =======================
      case 'shockwave_slam': {
        // Tectonic Quake — expanding brown-orange shock ring with spike fractures
        const expand = 1 - lifeRatio;
        const rr = r + expand * 70;
        ctx.save();
        ctx.rotate(t * 0.6);
        ctx.strokeStyle = color;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 5 * lifeRatio + 2;
        ctx.beginPath();
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2;
          const spike = 1 + Math.sin(a * 4 + t * 4) * 0.25;
          const px = Math.cos(a) * rr * spike;
          const py = Math.sin(a) * rr * spike;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        // Inner molten glow
        ctx.fillStyle = this.hexAlpha(glow, 0.35 * lifeRatio);
        ctx.beginPath();
        ctx.arc(0, 0, rr * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
      }

      case 'steel_cyclone': {
        // Whirlwind of Steel — silvery slashes around the player
        ctx.save();
        ctx.rotate(t * 18);
        ctx.strokeStyle = color;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 14;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        for (let i = 0; i < 3; i++) {
          ctx.save();
          ctx.rotate((i / 3) * Math.PI * 2);
          ctx.beginPath();
          ctx.moveTo(-r, -3);
          ctx.quadraticCurveTo(0, -r * 0.7, r * 1.2, 0);
          ctx.quadraticCurveTo(0, r * 0.7, -r, 3);
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();
        break;
      }

      // ======================= RANGED / ARROWS =======================
      case 'arrow_bolt': {
        // Volley Barrage — green-fletched arrow with pointed tip + fins
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 10;
        const len = r * 3.2;
        // Trail taper
        const grad = ctx.createLinearGradient(-len, 0, len, 0);
        grad.addColorStop(0, this.hexAlpha(color, 0));
        grad.addColorStop(0.5, this.hexAlpha(glow, 0.6));
        grad.addColorStop(1, color);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-len, 0);
        ctx.lineTo(len * 0.7, 0);
        ctx.stroke();
        // Arrow head
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.moveTo(len, 0);
        ctx.lineTo(len * 0.55, -r * 0.7);
        ctx.lineTo(len * 0.55, r * 0.7);
        ctx.closePath();
        ctx.fill();
        // Fletching
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(-len * 0.6, 0);
        ctx.lineTo(-len, -r * 0.9);
        ctx.lineTo(-len * 0.3, 0);
        ctx.lineTo(-len, r * 0.9);
        ctx.closePath();
        ctx.fill();
        break;
      }

      // ======================= FIRE =======================
      case 'fire_orb': {
        // Firestorm Orb — roiling molten fireball with dark core and licking flames
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 22;
        // Outer flame corona (4 lobes)
        const pulse = 1 + Math.sin(t * 18) * 0.12;
        ctx.fillStyle = this.hexAlpha(glow, 0.55);
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const a = (i / 10) * Math.PI * 2;
          const lobes = 1 + Math.sin(a * 4 + t * 10) * 0.3;
          const rr = r * 1.6 * pulse * lobes;
          const px = Math.cos(a) * rr;
          const py = Math.sin(a) * rr;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        // Main body
        const bodyGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        bodyGrad.addColorStop(0, '#fff7ed');
        bodyGrad.addColorStop(0.45, glow);
        bodyGrad.addColorStop(1, color);
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        // Dark ember core
        ctx.fillStyle = '#7f1d1d';
        ctx.beginPath();
        ctx.arc(-r * 0.25, -r * 0.15, r * 0.35, 0, Math.PI * 2);
        ctx.fill();
        // Trailing flame tail
        ctx.fillStyle = this.hexAlpha('#fb923c', 0.65);
        ctx.beginPath();
        ctx.moveTo(-r * 0.5, 0);
        ctx.quadraticCurveTo(-r * 3, -r * 0.8, -r * 5, 0);
        ctx.quadraticCurveTo(-r * 3, r * 0.8, -r * 0.5, 0);
        ctx.fill();
        break;
      }

      case 'blaze_trail': {
        // Blazing Step dash — phoenix-wing flame burst
        const expand = 1 - lifeRatio;
        ctx.save();
        ctx.scale(1 + expand * 0.8, 1);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 25;
        // Wing shape
        ctx.fillStyle = this.hexAlpha('#fb923c', 0.55 * lifeRatio);
        ctx.beginPath();
        ctx.moveTo(r, 0);
        ctx.quadraticCurveTo(-r * 0.5, -r * 1.6, -r * 2, -r * 0.5);
        ctx.quadraticCurveTo(-r * 1.2, 0, -r * 2, r * 0.5);
        ctx.quadraticCurveTo(-r * 0.5, r * 1.6, r, 0);
        ctx.fill();
        ctx.fillStyle = this.hexAlpha('#fde047', 0.7 * lifeRatio);
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
      }

      case 'solar_aura': {
        // Radiant Pyre aura — pulsing sunfire ring with flame tongues
        ctx.shadowColor = glow;
        ctx.shadowBlur = 28;
        const pulse = 1 + Math.sin(t * 4) * 0.08;
        ctx.strokeStyle = this.hexAlpha(glow, 0.5);
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(0, 0, r * pulse, 0, Math.PI * 2);
        ctx.stroke();
        // Flame tongues
        ctx.fillStyle = this.hexAlpha(color, 0.45);
        for (let i = 0; i < 12; i++) {
          const a = (i / 12) * Math.PI * 2 + t * 0.8;
          const len = r * (0.9 + Math.sin(t * 6 + i) * 0.15);
          ctx.save();
          ctx.rotate(a);
          ctx.beginPath();
          ctx.moveTo(len, -6);
          ctx.quadraticCurveTo(len + r * 0.3, 0, len, 6);
          ctx.quadraticCurveTo(len - r * 0.2, 0, len, -6);
          ctx.fill();
          ctx.restore();
        }
        // Inner sun core
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.6);
        grad.addColorStop(0, 'rgba(255,241,180,0.75)');
        grad.addColorStop(1, 'rgba(234,88,12,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      // ======================= COLD =======================
      case 'frost_shard': {
        // Frostbite Wave — crystalline ice shard with hexagonal facets + sparkle trail
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 16;
        // Ice crystal body
        ctx.fillStyle = '#e0f2fe';
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(r * 1.8, 0);
        ctx.lineTo(r * 0.4, -r * 0.9);
        ctx.lineTo(-r * 1.2, -r * 0.6);
        ctx.lineTo(-r * 1.5, 0);
        ctx.lineTo(-r * 1.2, r * 0.6);
        ctx.lineTo(r * 0.4, r * 0.9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Facet highlights
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(r * 1.8, 0);
        ctx.lineTo(-r * 1.5, 0);
        ctx.moveTo(r * 0.4, -r * 0.9);
        ctx.lineTo(-r * 1.2, r * 0.6);
        ctx.moveTo(r * 0.4, r * 0.9);
        ctx.lineTo(-r * 1.2, -r * 0.6);
        ctx.stroke();
        // Ice trail
        ctx.fillStyle = this.hexAlpha(glow, 0.4);
        ctx.beginPath();
        ctx.moveTo(-r * 1.2, 0);
        ctx.lineTo(-r * 3.5, -r * 0.6);
        ctx.lineTo(-r * 5, 0);
        ctx.lineTo(-r * 3.5, r * 0.6);
        ctx.closePath();
        ctx.fill();
        break;
      }

      // ======================= LIGHTNING =======================
      case 'spark_bolt': {
        // Volt Jolt — jagged blue lightning bolt with forks
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 18;
        const len = r * 3.5;
        const segments = 6;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        const drawJagged = (width: number, color: string | CanvasGradient, amp: number) => {
          ctx.strokeStyle = color;
          ctx.lineWidth = width;
          ctx.beginPath();
          ctx.moveTo(-len, 0);
          for (let i = 1; i <= segments; i++) {
            const px = -len + (i / segments) * (len * 2);
            const py = (Math.sin(t * 20 + i * 1.7 + proj.seed) * amp);
            ctx.lineTo(px, py);
          }
          ctx.stroke();
        };
        drawJagged(7, this.hexAlpha(color, 0.6), r * 0.9);
        drawJagged(3.5, glow, r * 0.7);
        drawJagged(1.5, '#ffffff', r * 0.5);
        // Spark tip
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(len, 0, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'lightning_arc': {
        // Thunderchain — thick chain-bolt with a branching head
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 22;
        const len = r * 5;
        ctx.lineCap = 'round';
        const drawChain = (w: number, col: string, amp: number) => {
          ctx.strokeStyle = col;
          ctx.lineWidth = w;
          ctx.beginPath();
          ctx.moveTo(-len, 0);
          const segs = 8;
          for (let i = 1; i <= segs; i++) {
            const px = -len + (i / segs) * (len * 2);
            const py = Math.sin(t * 30 + i * 2.1 + proj.seed) * amp;
            ctx.lineTo(px, py);
          }
          ctx.stroke();
        };
        drawChain(10, this.hexAlpha(color, 0.45), r * 1.2);
        drawChain(5, glow, r);
        drawChain(2, '#ffffff', r * 0.7);
        // Arc tips (small forks)
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(len, 0);
        ctx.lineTo(len + r, -r * 0.8);
        ctx.moveTo(len, 0);
        ctx.lineTo(len + r, r * 0.8);
        ctx.stroke();
        break;
      }

      // ======================= HOLY =======================
      case 'holy_smite': {
        // Celestial Retribution — radiant cross/sigil with sunburst (drawn at impact point)
        const expand = 1 - lifeRatio;
        const rr = r * (0.5 + expand * 1.2);
        ctx.save();
        ctx.rotate(t * 1.2);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 28;
        // Sunburst rays
        ctx.strokeStyle = this.hexAlpha('#fef08a', 0.9 * lifeRatio);
        ctx.lineWidth = 3;
        for (let i = 0; i < 12; i++) {
          const a = (i / 12) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * rr * 0.5, Math.sin(a) * rr * 0.5);
          ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
          ctx.stroke();
        }
        // Inner sun
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rr * 0.5);
        g.addColorStop(0, 'rgba(255,255,255,0.95)');
        g.addColorStop(0.5, this.hexAlpha(glow, 0.7));
        g.addColorStop(1, this.hexAlpha(color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, rr * 0.5, 0, Math.PI * 2);
        ctx.fill();
        // Cross
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4 * lifeRatio + 1;
        ctx.beginPath();
        ctx.moveTo(-rr * 0.35, 0); ctx.lineTo(rr * 0.35, 0);
        ctx.moveTo(0, -rr * 0.35); ctx.lineTo(0, rr * 0.35);
        ctx.stroke();
        ctx.restore();
        break;
      }

      // ======================= CHAOS / POISON =======================
      case 'spore_pod': {
        // Sporefall Barrage — sickly green bulbous pod with dripping spores
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 14;
        // Body
        const podGrad = ctx.createRadialGradient(-r * 0.2, -r * 0.3, 0, 0, 0, r);
        podGrad.addColorStop(0, '#d9f99d');
        podGrad.addColorStop(0.5, glow);
        podGrad.addColorStop(1, color);
        ctx.fillStyle = podGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.1, r * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();
        // Dark spots
        ctx.fillStyle = '#365314';
        for (let i = 0; i < 4; i++) {
          const a = i * 1.9 + t;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * r * 0.4, Math.sin(a) * r * 0.3, r * 0.18, 0, Math.PI * 2);
          ctx.fill();
        }
        // Dripping trail
        ctx.fillStyle = this.hexAlpha(color, 0.55);
        ctx.beginPath();
        ctx.moveTo(-r * 0.3, r * 0.3);
        ctx.quadraticCurveTo(-r * 1.8, r * 0.6, -r * 3, 0);
        ctx.quadraticCurveTo(-r * 1.6, -r * 0.2, -r * 0.3, -r * 0.2);
        ctx.closePath();
        ctx.fill();
        break;
      }

      // ======================= ORBITING =======================
      case 'glaive_ring': {
        // Orbiting Glaives — crescent moon glaive shape
        ctx.save();
        ctx.rotate(t * 8);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 14;
        // Crescent blade
        ctx.strokeStyle = '#f1f5f9';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.4, Math.PI * 0.25, Math.PI * 1.75);
        ctx.stroke();
        // Blade edge highlight
        ctx.strokeStyle = glow;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.4, Math.PI * 0.3, Math.PI * 1.7);
        ctx.stroke();
        // Hilt/handle
        ctx.fillStyle = color;
        ctx.fillRect(-r * 0.3, -2, r * 1.6, 4);
        ctx.restore();
        break;
      }

      // ======================= ENEMY =======================
      case 'enemy_bolt': {
        // Chaotic dark red/purple bolt with wobble
        ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 10;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(r * 1.5, 0);
        ctx.lineTo(-r * 0.6, -r * 0.7);
        ctx.lineTo(-r * 1.2, 0);
        ctx.lineTo(-r * 0.6, r * 0.7);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = this.hexAlpha(glow, 0.7);
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      // ======================= GENERIC FALLBACK =======================
      default: {
        if (spd > 20) ctx.rotate(angle);
        ctx.shadowColor = glow;
        ctx.shadowBlur = 12;
        ctx.fillStyle = color;
        ctx.beginPath();
        if (spd > 20) {
          ctx.ellipse(0, 0, Math.max(r * 1.8, 10), r * 0.7, 0, 0, Math.PI * 2);
        } else {
          ctx.arc(0, 0, r, 0, Math.PI * 2);
        }
        ctx.fill();
        break;
      }
    }

    ctx.restore();
  }

  private renderAimReticle(ctx: CanvasRenderingContext2D): void {
    const x = this.mouseScreen.x;
    const y = this.mouseScreen.y;
    ctx.save();
    ctx.strokeStyle = this.isFocusTime ? '#fbbf24' : 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(x, y, 9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 14, y);
    ctx.lineTo(x - 5, y);
    ctx.moveTo(x + 5, y);
    ctx.lineTo(x + 14, y);
    ctx.moveTo(x, y - 14);
    ctx.lineTo(x, y - 5);
    ctx.moveTo(x, y + 5);
    ctx.lineTo(x, y + 14);
    ctx.stroke();
    ctx.restore();
  }

  private renderZoneBanner(ctx: CanvasRenderingContext2D): void {
    if (this.zoneBannerTime <= 0) return;
    const a = Math.min(1, this.zoneBannerTime / 0.6, (2.6 - this.zoneBannerTime) / 0.4);
    ctx.save();
    ctx.globalAlpha = Math.max(0, a);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 28px Cinzel, serif';
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 8;
    ctx.fillText(this.currentZone.name, this.viewportWidth / 2, 92);
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(this.currentZone.isTown ? 'SAFE HAVEN  •  WASD to move  •  Skills auto-fire' : 'SURVIVE THE SWARM  •  Hold SHIFT for Focus Time', this.viewportWidth / 2, 116);
    ctx.restore();
  }

  private renderFocusOverlay(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.12)';
    ctx.fillRect(0, 0, this.viewportWidth, this.viewportHeight);
    ctx.font = '700 11px Inter, sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.fillText('FOCUS TIME', this.viewportWidth / 2, 140);
    ctx.restore();
  }
}
