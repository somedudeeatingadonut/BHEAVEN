// src/engine/Projectile.ts

import { DamageInstance } from '../types/combat';
import { SkillDefinition } from '../types/skills';

export class Projectile {
  public id: string;
  public sourceId: string; // 'player' or enemy ID
  public x: number;
  public y: number;
  public vx: number;
  public vy: number;
  public radius: number;
  public lifetime: number;
  public maxLifetime: number;
  public pierceLeft: number;
  public chainLeft: number;
  public aoeRadius: number;
  public damage: DamageInstance;
  public color: string;
  public glowColor: string;
  public behaviorType: string;
  public style: string; // visual shader key
  public age: number; // seconds alive for animation
  public seed: number; // per-projectile randomness
  public hitEntityIds: Set<string> = new Set();
  public orbitAngle: number = 0;
  public orbitDistance: number = 75;
  public hitResetTimer: number = 0;

  constructor(
    id: string,
    sourceId: string,
    x: number,
    y: number,
    vx: number,
    vy: number,
    radius: number,
    lifetime: number,
    pierceCount: number,
    chainCount: number,
    aoeRadius: number,
    damage: DamageInstance,
    color: string,
    glowColor: string,
    behaviorType: string = 'straight_projectile',
    style: string = 'generic_bolt'
  ) {
    this.id = id;
    this.sourceId = sourceId;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.lifetime = lifetime;
    this.maxLifetime = lifetime;
    this.pierceLeft = pierceCount;
    this.chainLeft = chainCount;
    this.aoeRadius = aoeRadius;
    this.damage = damage;
    this.color = color;
    this.glowColor = glowColor;
    this.behaviorType = behaviorType;
    this.style = style;
    this.age = 0;
    this.seed = Math.random() * 1000;
  }

  public update(dt: number, playerX?: number, playerY?: number): boolean {
    this.lifetime -= dt;
    this.age += dt;
    if (this.lifetime <= 0) return true; // Expired

    if ((this.behaviorType === 'orbiting_blades' || this.behaviorType === 'blade_vortex') && playerX !== undefined && playerY !== undefined) {
      this.orbitAngle += dt * 6.4;
      this.vx = -Math.sin(this.orbitAngle) * this.orbitDistance * 6.4;
      this.vy = Math.cos(this.orbitAngle) * this.orbitDistance * 6.4;
      this.x = playerX + Math.cos(this.orbitAngle) * this.orbitDistance;
      this.y = playerY + Math.sin(this.orbitAngle) * this.orbitDistance;
      this.hitResetTimer += dt;
      if (this.hitResetTimer > 0.22) {
        this.hitEntityIds.clear();
        this.hitResetTimer = 0;
      }
    } else if (this.behaviorType === 'spark_bouncing') {
      // Add chaotic wandering
      this.vx += (Math.random() - 0.5) * 800 * dt;
      this.vy += (Math.random() - 0.5) * 800 * dt;
      this.x += this.vx * dt;
      this.y += this.vy * dt;
    } else {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
    }

    return false;
  }
}
