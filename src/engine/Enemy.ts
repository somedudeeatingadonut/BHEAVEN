// src/engine/Enemy.ts

import { EliteModifier, MonsterRarity, StatusAilment } from '../types/combat';

export class Enemy {
  public id: string;
  public name: string;
  public monsterType: string;
  public rarity: MonsterRarity;
  public level: number;
  public x: number;
  public y: number;
  public vx: number = 0;
  public vy: number = 0;
  public radius: number = 16;
  public speed: number = 110;

  public maxLife: number;
  public currentLife: number;
  public armor: number;
  public fireRes: number = 10;
  public coldRes: number = 10;
  public lightningRes: number = 10;
  public chaosRes: number = 0;

  public baseDamage: number;
  public attackCooldown: number = 1.0;
  public attackTimer: number = 0;
  public attackRange: number = 35;
  public isRanged: boolean = false;

  public eliteModifiers: EliteModifier[] = [];
  public activeAilments: StatusAilment[] = [];
  public shockTakenMultiplier: number = 0;

  // Boss specific
  public isBoss: boolean = false;
  public bossTitle: string = '';
  public bossPhase: number = 1;
  public maxPhases: number = 1;
  public specialAttackTimer: number = 0;

  // Visuals
  public color: string = '#ef4444';
  public glowColor: string = '#f87171';
  public visualScale: number = 1.0;
  public hitFlashTimer: number = 0;
  public facingAngle: number = 0;
  public knockbackX: number = 0;
  public knockbackY: number = 0;
  public shape: 'circle' | 'hex' | 'triangle' | 'diamond' | 'square' = 'circle';

  constructor(
    id: string,
    name: string,
    monsterType: string,
    rarity: MonsterRarity,
    level: number,
    x: number,
    y: number,
    isBoss: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.monsterType = monsterType;
    this.rarity = rarity;
    this.level = level;
    this.x = x;
    this.y = y;
    this.isBoss = isBoss;

    const baseLifeForLevel = 45 + Math.pow(level, 1.8) * 12;
    const lifeMult = isBoss ? 35 : rarity === 'rare' ? 5.5 : rarity === 'magic' ? 2.4 : 1.0;
    this.maxLife = Math.round(baseLifeForLevel * lifeMult);
    this.currentLife = this.maxLife;

    this.baseDamage = Math.round((8 + level * 3.5) * (isBoss ? 2.5 : rarity === 'rare' ? 1.5 : 1.0));
    this.armor = Math.round(level * 15 * (rarity === 'rare' ? 2.0 : 1.0));

    this.setupMonsterType(monsterType);

    if (rarity === 'rare') {
      this.rollEliteModifiers(2);
      this.visualScale = 1.35;
      this.radius = 22;
    } else if (rarity === 'magic') {
      this.rollEliteModifiers(1);
      this.visualScale = 1.15;
      this.radius = 18;
    }
  }

  private setupMonsterType(type: string): void {
    switch (type) {
      case 'drowned_mariner':
      case 'crypt_ghoul':
      case 'skeleton_phalanx':
        this.speed = 85 + Math.random() * 20;
        this.color = '#94a3b8';
        this.glowColor = '#cbd5e1';
        this.radius = 16;
        this.shape = 'square';
        break;

      case 'armored_crab':
      case 'crystal_golem':
      case 'lava_colossus':
        this.speed = 70 + Math.random() * 15;
        this.armor *= 2.5;
        this.color = '#0284c7';
        this.glowColor = '#38bdf8';
        this.radius = 20;
        this.shape = 'hex';
        break;

      case 'ashen_scavenger':
      case 'bog_stalker':
      case 'magma_hound':
        this.speed = 140 + Math.random() * 30;
        this.color = '#ea580c';
        this.glowColor = '#fb923c';
        this.radius = 14;
        this.shape = 'triangle';
        break;

      case 'spore_spitter':
      case 'mire_leech':
      case 'pyro_fiend':
      case 'cursed_priest':
        this.speed = 95;
        this.isRanged = true;
        this.attackRange = 320;
        this.attackCooldown = 1.8;
        this.color = '#16a34a';
        this.glowColor = '#4ade80';
        this.radius = 15;
        this.shape = 'diamond';
        break;

      case 'cavern_bat':
      case 'void_walker':
        this.speed = 160 + Math.random() * 25;
        this.color = '#8b5cf6';
        this.glowColor = '#c084fc';
        this.radius = 12;
        this.shape = 'triangle';
        break;

      default:
        this.speed = 100;
        this.color = '#dc2626';
        this.glowColor = '#ef4444';
        this.shape = 'circle';
        break;
    }

    if (this.rarity === 'magic') {
      this.color = '#3b82f6';
      this.glowColor = '#60a5fa';
    } else if (this.rarity === 'rare') {
      this.color = '#eab308';
      this.glowColor = '#fde047';
    }
  }

  private rollEliteModifiers(count: number): void {
    const pool: EliteModifier[] = [
      'Haste',
      'Extra_Projectiles',
      'Molten_Shield',
      'Frost_Nova',
      'Vampiric',
      'Shocking_Aura',
      'Plated_Armor',
    ];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    this.eliteModifiers = shuffled.slice(0, count);

    this.eliteModifiers.forEach((mod) => {
      if (mod === 'Haste') this.speed *= 1.4;
      if (mod === 'Plated_Armor') this.armor *= 2.0;
    });
  }

  public update(
    dt: number,
    targetX: number,
    targetY: number,
    onRangedAttack?: (enemy: Enemy, dirX: number, dirY: number) => void
  ): boolean {
    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer = Math.max(0, this.hitFlashTimer - dt);
    }

    let isFrozen = false;
    let chillSlow = 0;
    this.shockTakenMultiplier = 0;

    for (let i = this.activeAilments.length - 1; i >= 0; i--) {
      const a = this.activeAilments[i];
      a.duration -= dt;

      if (a.damagePerSecond > 0) {
        this.currentLife -= a.damagePerSecond * dt;
      }

      if (a.type === 'freeze') isFrozen = true;
      if (a.type === 'chill') chillSlow = Math.max(chillSlow, a.magnitude);
      if (a.type === 'shock') this.shockTakenMultiplier = Math.max(this.shockTakenMultiplier, a.magnitude);

      if (a.duration <= 0) {
        this.activeAilments.splice(i, 1);
      }
    }

    if (this.currentLife <= 0) return true;
    if (isFrozen) {
      this.x += this.knockbackX * dt;
      this.y += this.knockbackY * dt;
      this.knockbackX *= Math.exp(-10 * dt);
      this.knockbackY *= Math.exp(-10 * dt);
      return false;
    }

    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const dist = Math.hypot(dx, dy);

    const effectiveSpeed = this.speed * (1 - chillSlow);

    if (this.speed <= 0) {
      this.vx = 0;
      this.vy = 0;
    } else if (this.isRanged && dist < this.attackRange && dist > 140) {
      this.vx = 0;
      this.vy = 0;
    } else if (dist > 18) {
      const nx = dx / dist;
      const ny = dy / dist;
      this.vx = nx * effectiveSpeed;
      this.vy = ny * effectiveSpeed;
      this.facingAngle = Math.atan2(ny, nx);
    } else {
      this.vx *= 0.4;
      this.vy *= 0.4;
    }

    this.x += this.vx * dt + this.knockbackX * dt;
    this.y += this.vy * dt + this.knockbackY * dt;
    this.knockbackX *= Math.exp(-8 * dt);
    this.knockbackY *= Math.exp(-8 * dt);

    if (this.attackTimer > 0) {
      this.attackTimer = Math.max(0, this.attackTimer - dt);
    } else if (this.isRanged && dist <= this.attackRange && onRangedAttack) {
      this.attackTimer = this.attackCooldown;
      onRangedAttack(this, dx / dist, dy / dist);
    }

    if (this.isBoss) {
      this.specialAttackTimer += dt;
    }

    return false;
  }
}
