// src/types/combat.ts

import { SkillDamageType } from './skills';
import { Item } from './items';

export interface Vector2D {
  x: number;
  y: number;
}

export type MonsterRarity = 'normal' | 'magic' | 'rare' | 'boss';

export type EliteModifier =
  | 'Haste'
  | 'Extra_Projectiles'
  | 'Molten_Shield'
  | 'Frost_Nova'
  | 'Vampiric'
  | 'Shocking_Aura'
  | 'Plated_Armor'
  | 'Soul_Eater';

export interface StatusAilment {
  type: 'ignite' | 'freeze' | 'chill' | 'shock' | 'bleed' | 'poison' | 'consecrate' | 'corrode' | 'stagger';
  duration: number;
  totalDuration: number;
  damagePerSecond: number;
  magnitude: number;
  sourceId: string;
}

export interface DamageInstance {
  physical: number;
  fire: number;
  cold: number;
  lightning: number;
  chaos: number;
  holy?: number;
  arcane?: number;
  acid?: number;
  sonic?: number;
  isCrit: boolean;
  critMultiplier: number;
  sourceEntityId: string;
  sourcePosition: Vector2D;
  penalties?: {
    firePenetration?: number;
    coldPenetration?: number;
    lightningPenetration?: number;
    holyPenetration?: number;
    arcanePenetration?: number;
  };
  bleedChance?: number;
  poisonChance?: number;
  igniteChance?: number;
  freezeChance?: number;
  shockChance?: number;
  consecrateChance?: number;
  corrodeChance?: number;
  staggerChance?: number;
}

export interface FloatingText {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: number;
  isCrit: boolean;
  opacity: number;
  lifetime: number;
  maxLifetime: number;
  vx: number;
  vy: number;
}

export interface GroundLoot {
  id: string;
  item: Item;
  x: number;
  y: number;
  allocatedToPlayer: boolean;
  pickupRadius: number;
  createdAt: number;
  isHovered?: boolean;
}

export interface ShrineEntity {
  id: string;
  name: string;
  type: 'massive' | 'acceleration' | 'echoing' | 'diamond' | 'resplendent';
  x: number;
  y: number;
  radius: number;
  isActivated: boolean;
  duration: number;
  description: string;
  color: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
  gravity?: number;
  shape?: 'circle' | 'spark' | 'ring' | 'star' | 'smoke';
}
