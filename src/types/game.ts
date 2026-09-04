// src/types/game.ts

export type ActivePanel =
  | 'none'
  | 'inventory'
  | 'passiveTree'
  | 'characterSheet'
  | 'worldMap'
  | 'skills'
  | 'crafting'
  | 'stash'
  | 'quests'
  | 'settings'
  | 'characterSelect'
  | 'deathModal'
  | 'victoryModal';

export interface GameSettings {
  masterVolume: number;
  sfxVolume: number;
  musicVolume: number;
  showDamageNumbers: boolean;
  showHealthBars: boolean;
  autoPickupGold: boolean;
  autoPickupCurrencies: boolean;
  lootFilterMinRarity: 'normal' | 'magic' | 'rare' | 'unique';
  screenShake: boolean;
  particleDensity: 'low' | 'medium' | 'high';
}

export interface KeyBindings {
  moveUp: string;
  moveDown: string;
  moveLeft: string;
  moveRight: string;
  skill1: string; // Left Click or Q
  skill2: string; // Right Click or W
  skill3: string; // E
  skill4: string; // R
  dash: string;   // Space
  flask1: string; // 1
  flask2: string; // 2
  flask3: string; // 3
  flask4: string; // 4
  flask5: string; // 5
  inventory: string; // I
  passiveTree: string; // P
  characterSheet: string; // C
  worldMap: string; // M
  skillsMenu: string; // K
  questLog: string; // L
}
