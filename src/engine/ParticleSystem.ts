// src/engine/ParticleSystem.ts

import { Particle } from '../types/combat';

export class ParticleSystem {
  public particles: Particle[] = [];
  private maxParticles: number = 800;

  public emit(
    x: number,
    y: number,
    count: number,
    color: string,
    speed: number = 100,
    size: number = 4,
    decay: number = 1.5,
    shape: 'circle' | 'spark' | 'ring' | 'star' | 'smoke' = 'circle'
  ): void {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }

      const angle = Math.random() * Math.PI * 2;
      const spd = speed * (0.4 + Math.random() * 0.8);
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        color,
        size: size * (0.6 + Math.random() * 0.8),
        alpha: 1.0,
        decay: decay * (0.8 + Math.random() * 0.4),
        shape,
      });
    }
  }

  public emitExplosion(x: number, y: number, radius: number, primaryColor: string, secondaryColor: string): void {
    this.emit(x, y, 20, primaryColor, radius * 2.2, 5, 2.0, 'spark');
    this.emit(x, y, 12, secondaryColor, radius * 1.5, 7, 1.4, 'circle');
  }

  public emitLevelUp(x: number, y: number): void {
    this.emit(x, y, 45, '#facc15', 250, 6, 0.8, 'star');
    this.emit(x, y, 30, '#ffffff', 180, 4, 1.0, 'spark');
  }

  public update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha -= p.decay * dt;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number): void {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const sx = p.x - cameraX;
      const sy = p.y - cameraY;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.shape === 'spark') {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1, p.size * 0.45);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx - p.vx * 0.018, sy - p.vy * 0.018);
        ctx.stroke();
      } else if (p.shape === 'ring') {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sx, sy, p.size * (2 - p.alpha), 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(sx, sy, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }
}
