// src/types/maps.ts

export type ZoneAct = 'act1' | 'act2' | 'atlas_maps';

export type BiomeType =
  | 'coast'
  | 'swamp'
  | 'cavern'
  | 'ruins'
  | 'volcano'
  | 'graveyard'
  | 'temple'
  | 'celestial_arena'
  | 'town';

export interface ZoneModifier {
  id: string;
  name: string;
  description: string;
  increasedMonsterPackSize?: number;
  increasedMonsterLife?: number;
  increasedMonsterDamage?: number;
  extraColdDamage?: number;
  extraFireDamage?: number;
  extraLightningDamage?: number;
  monsterSpeedBonus?: number;
  increasedQuantity?: number;
  increasedRarity?: number;
}

export interface ZoneDefinition {
  id: string;
  name: string;
  act: ZoneAct;
  tier?: number; // For atlas endgame maps (T1 - T16)
  monsterLevel: number;
  biome: BiomeType;
  description: string;
  isTown?: boolean;
  hasWaypoint: boolean;
  requiredLevel: number;
  prerequisiteZoneIds: string[];
  
  // World bounds
  mapWidth: number; // e.g. 3000px
  mapHeight: number; // e.g. 3000px

  // Monster Spawning config
  monsterTypes: string[];
  targetKillCount: number; // Kills required to spawn or unlock boss portal / encounter
  spawnRateMultiplier: number;
  maxActiveMonsters: number;
  elitePackChance: number;

  // Boss
  bossDefinition: {
    id: string;
    name: string;
    title: string;
    level: number;
    baseLife: number;
    baseArmor: number;
    attacks: string[];
    phases: number;
    visualScale: number;
    tint: string;
    bossMusic?: string;
  };

  // Environmental visuals & colors
  backgroundColor: string;
  gridColor: string;
  ambientLight: string;
  obstacleType: 'rocks' | 'trees' | 'ruins_pillars' | 'lava_pits' | 'crystals' | 'none';
  obstacleCount: number;

  // Loot scaling
  baseItemQuantity: number; // 1.0 base
  baseItemRarity: number; // 1.0 base
  dropTierBonus: number;
}
