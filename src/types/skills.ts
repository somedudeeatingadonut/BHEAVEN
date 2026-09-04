// src/types/skills.ts

export type SkillDamageType =
  | 'physical'
  | 'fire'
  | 'cold'
  | 'lightning'
  | 'chaos'
  | 'holy'
  | 'arcane'
  | 'acid'
  | 'sonic';

export type WeaponScalingAttribute = 'strength' | 'dexterity' | 'wisdom' | 'luck' | 'willpower';

export type SkillDamageScaling = 'heavy' | 'light' | 'magical' | 'weapon_dependent' | 'hybrid';

export type SkillTag =
  | 'Attack'
  | 'Spell'
  | 'Projectile'
  | 'AoE'
  | 'Melee'
  | 'Bow'
  | 'Polearm'
  | 'Fist'
  | 'Staff'
  | 'Fire'
  | 'Cold'
  | 'Lightning'
  | 'Chaos'
  | 'Holy'
  | 'Arcane'
  | 'Acid'
  | 'Sonic'
  | 'Physical'
  | 'Minion'
  | 'Aura'
  | 'Guard'
  | 'Movement'
  | 'Nova'
  | 'Chaining'
  | 'Heavy'
  | 'Light'
  | 'Magical';

export interface SupportGemEffect {
  id: string;
  name: string;
  description: string;
  tags: SkillTag[];
  manaMultiplier: number;
  modifiers: {
    moreDamage?: number;
    extraProjectiles?: number;
    pierceCount?: number;
    chainCount?: number;
    forkChance?: number;
    areaMultiplier?: number;
    castSpeedMultiplier?: number;
    critChanceBonus?: number;
    critMultiplierBonus?: number;
    lifeLeechPercent?: number;
    chanceToIgnite?: number;
    chanceToFreeze?: number;
    chanceToShock?: number;
    chanceToPoison?: number;
    chanceToBleed?: number;
  };
}

export interface SkillDefinition {
  id: string;
  name: string;
  icon: string;
  description: string;
  tags: SkillTag[];
  scalingType: SkillDamageScaling;
  baseCooldown: number;
  baseManaCost: number;
  baseStaminaCost?: number;
  baseDamageMin: number;
  baseDamageMax: number;
  damageScalingPerLevel: number;
  damageType: SkillDamageType;
  castTime: number;
  autoCastInterval: number;
  
  projectileCount: number;
  projectileSpeed: number;
  projectileLifetime: number;
  projectileSpread: number;
  pierceCount: number;
  chainCount: number;
  aoeRadius: number;
  range: number;

  projectileColor: string;
  projectileGlowColor: string;
  projectileRadius: number;
  projectileStyle?:
    | 'generic_bolt'
    | 'shockwave_slam'
    | 'steel_cyclone'
    | 'arrow_bolt'
    | 'spore_pod'
    | 'fire_orb'
    | 'spark_bolt'
    | 'holy_smite'
    | 'frost_shard'
    | 'glaive_ring'
    | 'lightning_arc'
    | 'solar_aura'
    | 'blaze_trail'
    | 'enemy_bolt';

  behaviorType:
    | 'straight_projectile'
    | 'spread_projectile'
    | 'nova_projectiles'
    | 'orbiting_blades'
    | 'chain_lightning'
    | 'ground_slam_aoe'
    | 'righteous_fire_aura'
    | 'spark_bouncing'
    | 'summon_minion'
    | 'dash_movement'
    | 'blade_vortex'
    | 'toxic_rain'
    | 'holy_smite'
    | 'sonic_shockwave'
    | 'acid_burst'
    | 'arcane_barrage';
}

export interface EquippedSkill {
  id: string;
  skillDefId: string;
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  slotIndex: number;
  isAutoCast: boolean;
  cooldownTimer: number;
  supportGemIds: string[];
}
