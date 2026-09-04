// src/constants/affixes.ts

import { ItemAffix, ItemCategory } from '../types/items';

export interface AffixDefinition {
  id: string;
  name: string;
  type: 'prefix' | 'suffix';
  statKey: string;
  tiers: {
    tier: number;
    reqLevel: number;
    minValue: number;
    maxValue: number;
    secondMinValue?: number;
    secondMaxValue?: number;
    textTemplate: (min: number, max: number) => string;
  }[];
  allowedCategories: ItemCategory[];
}

export const AFFIX_DEFINITIONS: AffixDefinition[] = [
  // --- PREFIXES ---
  {
    id: 'flat_phys',
    name: 'Heavy',
    type: 'prefix',
    statKey: 'addedPhysicalDamageMax',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_dagger', 'accessory_ring', 'accessory_amulet'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 2, maxValue: 5, textTemplate: (min, max) => `Adds ${min} to ${max} Physical Damage` },
      { tier: 2, reqLevel: 10, minValue: 5, maxValue: 12, textTemplate: (min, max) => `Adds ${min} to ${max} Physical Damage` },
      { tier: 3, reqLevel: 25, minValue: 12, maxValue: 26, textTemplate: (min, max) => `Adds ${min} to ${max} Physical Damage` },
      { tier: 4, reqLevel: 45, minValue: 25, maxValue: 50, textTemplate: (min, max) => `Adds ${min} to ${max} Physical Damage` },
    ],
  },
  {
    id: 'inc_phys',
    name: 'Serrated',
    type: 'prefix',
    statKey: 'increasedPhysicalDamage',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_dagger'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 15, maxValue: 29, textTemplate: (min, max) => `+${min}% increased Physical Damage` },
      { tier: 2, reqLevel: 15, minValue: 30, maxValue: 49, textTemplate: (min, max) => `+${min}% increased Physical Damage` },
      { tier: 3, reqLevel: 30, minValue: 50, maxValue: 79, textTemplate: (min, max) => `+${min}% increased Physical Damage` },
      { tier: 4, reqLevel: 50, minValue: 80, maxValue: 120, textTemplate: (min, max) => `+${min}% increased Physical Damage` },
    ],
  },
  {
    id: 'flat_fire',
    name: 'Flaming',
    type: 'prefix',
    statKey: 'addedFireDamageMax',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_wand', 'weapon_dagger', 'accessory_ring', 'accessory_amulet'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 3, maxValue: 8, textTemplate: (min, max) => `Adds ${min} to ${max} Fire Damage` },
      { tier: 2, reqLevel: 15, minValue: 8, maxValue: 18, textTemplate: (min, max) => `Adds ${min} to ${max} Fire Damage` },
      { tier: 3, reqLevel: 35, minValue: 20, maxValue: 40, textTemplate: (min, max) => `Adds ${min} to ${max} Fire Damage` },
    ],
  },
  {
    id: 'flat_cold',
    name: 'Frosted',
    type: 'prefix',
    statKey: 'addedColdDamageMax',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_wand', 'weapon_dagger', 'accessory_ring', 'accessory_amulet'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 2, maxValue: 7, textTemplate: (min, max) => `Adds ${min} to ${max} Cold Damage` },
      { tier: 2, reqLevel: 15, minValue: 7, maxValue: 16, textTemplate: (min, max) => `Adds ${min} to ${max} Cold Damage` },
      { tier: 3, reqLevel: 35, minValue: 18, maxValue: 36, textTemplate: (min, max) => `Adds ${min} to ${max} Cold Damage` },
    ],
  },
  {
    id: 'flat_lightning',
    name: 'Sparking',
    type: 'prefix',
    statKey: 'addedLightningDamageMax',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_wand', 'weapon_dagger', 'accessory_ring', 'accessory_amulet'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 1, maxValue: 12, textTemplate: (min, max) => `Adds ${min} to ${max} Lightning Damage` },
      { tier: 2, reqLevel: 15, minValue: 2, maxValue: 25, textTemplate: (min, max) => `Adds ${min} to ${max} Lightning Damage` },
      { tier: 3, reqLevel: 35, minValue: 4, maxValue: 55, textTemplate: (min, max) => `Adds ${min} to ${max} Lightning Damage` },
    ],
  },
  {
    id: 'inc_spell_damage',
    name: 'Aetheric',
    type: 'prefix',
    statKey: 'increasedSpellDamage',
    allowedCategories: ['weapon_wand', 'weapon_dagger', 'weapon_staff', 'armour_shield', 'accessory_amulet'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 15, maxValue: 29, textTemplate: (min, max) => `+${min}% increased Spell Damage` },
      { tier: 2, reqLevel: 18, minValue: 30, maxValue: 49, textTemplate: (min, max) => `+${min}% increased Spell Damage` },
      { tier: 3, reqLevel: 38, minValue: 50, maxValue: 75, textTemplate: (min, max) => `+${min}% increased Spell Damage` },
    ],
  },
  {
    id: 'flat_max_life',
    name: 'Vigorous',
    type: 'prefix',
    statKey: 'maxLife',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 15, maxValue: 29, textTemplate: (min, max) => `+${min} to Maximum Life` },
      { tier: 2, reqLevel: 12, minValue: 30, maxValue: 49, textTemplate: (min, max) => `+${min} to Maximum Life` },
      { tier: 3, reqLevel: 25, minValue: 50, maxValue: 79, textTemplate: (min, max) => `+${min} to Maximum Life` },
      { tier: 4, reqLevel: 45, minValue: 80, maxValue: 120, textTemplate: (min, max) => `+${min} to Maximum Life` },
    ],
  },
  {
    id: 'flat_energy_shield',
    name: 'Astral',
    type: 'prefix',
    statKey: 'maxEnergyShield',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 10, maxValue: 20, textTemplate: (min, max) => `+${min} to Maximum Energy Shield` },
      { tier: 2, reqLevel: 15, minValue: 21, maxValue: 40, textTemplate: (min, max) => `+${min} to Maximum Energy Shield` },
      { tier: 3, reqLevel: 35, minValue: 41, maxValue: 75, textTemplate: (min, max) => `+${min} to Maximum Energy Shield` },
    ],
  },
  {
    id: 'flat_armor',
    name: 'Plated',
    type: 'prefix',
    statKey: 'armor',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 20, maxValue: 45, textTemplate: (min, max) => `+${min} to Armor` },
      { tier: 2, reqLevel: 15, minValue: 50, maxValue: 95, textTemplate: (min, max) => `+${min} to Armor` },
      { tier: 3, reqLevel: 35, minValue: 100, maxValue: 180, textTemplate: (min, max) => `+${min} to Armor` },
    ],
  },
  {
    id: 'flat_evasion',
    name: 'Shadowy',
    type: 'prefix',
    statKey: 'evasion',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 25, maxValue: 55, textTemplate: (min, max) => `+${min} to Evasion Rating` },
      { tier: 2, reqLevel: 15, minValue: 60, maxValue: 110, textTemplate: (min, max) => `+${min} to Evasion Rating` },
      { tier: 3, reqLevel: 35, minValue: 120, maxValue: 220, textTemplate: (min, max) => `+${min} to Evasion Rating` },
    ],
  },

  // --- SUFFIXES: RESISTANCES & SPEED ---
  {
    id: 'fire_res',
    name: 'of the Flame Ward',
    type: 'suffix',
    statKey: 'fireResistance',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 10, maxValue: 19, textTemplate: (min, max) => `+${min}% to Fire Resistance` },
      { tier: 2, reqLevel: 14, minValue: 20, maxValue: 29, textTemplate: (min, max) => `+${min}% to Fire Resistance` },
      { tier: 3, reqLevel: 30, minValue: 30, maxValue: 42, textTemplate: (min, max) => `+${min}% to Fire Resistance` },
    ],
  },
  {
    id: 'cold_res',
    name: 'of the Frost Ward',
    type: 'suffix',
    statKey: 'coldResistance',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 10, maxValue: 19, textTemplate: (min, max) => `+${min}% to Cold Resistance` },
      { tier: 2, reqLevel: 14, minValue: 20, maxValue: 29, textTemplate: (min, max) => `+${min}% to Cold Resistance` },
      { tier: 3, reqLevel: 30, minValue: 30, maxValue: 42, textTemplate: (min, max) => `+${min}% to Cold Resistance` },
    ],
  },
  {
    id: 'lightning_res',
    name: 'of the Storm Ward',
    type: 'suffix',
    statKey: 'lightningResistance',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 10, maxValue: 19, textTemplate: (min, max) => `+${min}% to Lightning Resistance` },
      { tier: 2, reqLevel: 14, minValue: 20, maxValue: 29, textTemplate: (min, max) => `+${min}% to Lightning Resistance` },
      { tier: 3, reqLevel: 30, minValue: 30, maxValue: 42, textTemplate: (min, max) => `+${min}% to Lightning Resistance` },
    ],
  },
  {
    id: 'chaos_res',
    name: 'of the Void Ward',
    type: 'suffix',
    statKey: 'chaosResistance',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'armour_quiver', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 15, minValue: 8, maxValue: 14, textTemplate: (min, max) => `+${min}% to Chaos Resistance` },
      { tier: 2, reqLevel: 35, minValue: 15, maxValue: 24, textTemplate: (min, max) => `+${min}% to Chaos Resistance` },
      { tier: 3, reqLevel: 55, minValue: 25, maxValue: 35, textTemplate: (min, max) => `+${min}% to Chaos Resistance` },
    ],
  },
  {
    id: 'attack_speed',
    name: 'of Celerity',
    type: 'suffix',
    statKey: 'attackSpeedMultiplier',
    allowedCategories: ['weapon_melee_1h', 'weapon_melee_2h', 'weapon_bow', 'weapon_wand', 'weapon_dagger', 'armour_gloves', 'armour_quiver'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 5, maxValue: 9, textTemplate: (min, max) => `+${min}% increased Attack Speed` },
      { tier: 2, reqLevel: 16, minValue: 10, maxValue: 15, textTemplate: (min, max) => `+${min}% increased Attack Speed` },
      { tier: 3, reqLevel: 36, minValue: 16, maxValue: 25, textTemplate: (min, max) => `+${min}% increased Attack Speed` },
    ],
  },
  {
    id: 'movement_speed',
    name: 'of Fleetness',
    type: 'suffix',
    statKey: 'movementSpeed',
    allowedCategories: ['armour_boots'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 10, maxValue: 15, textTemplate: (min, max) => `+${min}% increased Movement Speed` },
      { tier: 2, reqLevel: 15, minValue: 16, maxValue: 25, textTemplate: (min, max) => `+${min}% increased Movement Speed` },
      { tier: 3, reqLevel: 35, minValue: 26, maxValue: 35, textTemplate: (min, max) => `+${min}% increased Movement Speed` },
    ],
  },

  // --- SUFFIXES: THE 7 CORE ATTRIBUTES ---
  {
    id: 'vigor',
    name: 'of Vigor',
    type: 'suffix',
    statKey: 'vigor',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Vigor` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Vigor` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Vigor` },
    ],
  },
  {
    id: 'intelligence',
    name: 'of Intelligence',
    type: 'suffix',
    statKey: 'intelligence',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Intelligence` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Intelligence` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Intelligence` },
    ],
  },
  {
    id: 'strength',
    name: 'of Strength',
    type: 'suffix',
    statKey: 'strength',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Strength` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Strength` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Strength` },
    ],
  },
  {
    id: 'dexterity',
    name: 'of Dexterity',
    type: 'suffix',
    statKey: 'dexterity',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Dexterity` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Dexterity` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Dexterity` },
    ],
  },
  {
    id: 'wisdom',
    name: 'of Wisdom',
    type: 'suffix',
    statKey: 'wisdom',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Wisdom` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Wisdom` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Wisdom` },
    ],
  },
  {
    id: 'luck',
    name: 'of Fortune',
    type: 'suffix',
    statKey: 'luck',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Luck` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Luck` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Luck` },
    ],
  },
  {
    id: 'willpower',
    name: 'of Willpower',
    type: 'suffix',
    statKey: 'willpower',
    allowedCategories: ['armour_body', 'armour_helmet', 'armour_gloves', 'armour_boots', 'armour_shield', 'accessory_ring', 'accessory_amulet', 'accessory_belt'],
    tiers: [
      { tier: 1, reqLevel: 1, minValue: 8, maxValue: 15, textTemplate: (min, max) => `+${min} to Willpower` },
      { tier: 2, reqLevel: 18, minValue: 16, maxValue: 28, textTemplate: (min, max) => `+${min} to Willpower` },
      { tier: 3, reqLevel: 38, minValue: 29, maxValue: 45, textTemplate: (min, max) => `+${min} to Willpower` },
    ],
  },
];
