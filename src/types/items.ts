// src/types/items.ts

export type ItemRarity = 'normal' | 'magic' | 'rare' | 'unique' | 'currency' | 'gem' | 'map';

export type WeaponScalingStat = 'strength' | 'dexterity' | 'wisdom' | 'luck' | 'willpower';

export interface WeaponScalingGrade {
  stat: WeaponScalingStat;
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
  percentPerPoint: number; // e.g. 0.035 = 3.5% damage bonus per stat point
}

export type EquipmentSlot =
  | 'mainHand'
  | 'offHand'
  | 'helmet'
  | 'bodyArmor'
  | 'gloves'
  | 'boots'
  | 'amulet'
  | 'ring1'
  | 'ring2'
  | 'belt'
  | 'flask1'
  | 'flask2'
  | 'flask3'
  | 'flask4'
  | 'flask5';

export type ItemCategory =
  | 'weapon_melee_1h'
  | 'weapon_melee_2h'
  | 'weapon_bow'
  | 'weapon_greatbow'
  | 'weapon_wand'
  | 'weapon_dagger'
  | 'weapon_staff'
  | 'weapon_polearm'
  | 'weapon_quarterstaff'
  | 'weapon_fist'
  | 'weapon_curved_greatsword'
  | 'weapon_poleaxe'
  | 'weapon_poleblade'
  | 'weapon_flail'
  | 'weapon_warhammer'
  | 'weapon_scythe'
  | 'weapon_spellblade'
  | 'weapon_relic_focus'
  | 'armour_shield'
  | 'armour_quiver'
  | 'armour_helmet'
  | 'armour_body'
  | 'armour_gloves'
  | 'armour_boots'
  | 'accessory_amulet'
  | 'accessory_ring'
  | 'accessory_belt'
  | 'flask'
  | 'currency'
  | 'gem'
  | 'map';

export interface ItemAffix {
  id: string;
  name: string;
  tier: number;
  type: 'prefix' | 'suffix';
  statKey: string;
  text: string;
  minValue: number;
  maxValue: number;
  actualValue: number;
  secondMinValue?: number;
  secondMaxValue?: number;
  secondActualValue?: number;
}

export interface ItemBase {
  id: string;
  name: string;
  category: ItemCategory;
  slot: EquipmentSlot | 'ring' | 'flask' | 'none';
  scalingClass?: 'heavy' | 'light' | 'magical' | 'hybrid';
  baseScalings?: WeaponScalingGrade[]; // Default baseline scalings for this weapon type
  equipLoad: number; // weight added to character load
  width: number;
  height: number;
  reqLevel: number;
  reqStr: number;
  reqDex: number;
  reqInt: number;
  icon: string;
  color?: string;
  implicit?: {
    text: string;
    statKey: string;
    minValue: number;
    maxValue: number;
  };
  baseStats: {
    armor?: number;
    evasion?: number;
    energyShield?: number;
    physicalDamageMin?: number;
    physicalDamageMax?: number;
    attackSpeed?: number;
    critChance?: number;
    blockChance?: number;
  };
  flavor?: string;
}

export interface Item {
  id: string;
  baseId: string;
  name: string;
  baseName: string;
  rarity: ItemRarity;
  category: ItemCategory;
  slot: EquipmentSlot | 'ring' | 'flask' | 'none';
  scalingClass?: 'heavy' | 'light' | 'magical' | 'hybrid';
  scalings?: WeaponScalingGrade[]; // Exact randomized scaling values for this item
  equipLoad: number;
  itemLevel: number;
  reqLevel: number;
  reqStr: number;
  reqDex: number;
  reqInt: number;
  quality: number;
  isIdentified: boolean;
  isCorrupted?: boolean;

  armor?: number;
  evasion?: number;
  energyShield?: number;
  physicalDamageMin?: number;
  physicalDamageMax?: number;
  attackSpeed?: number;
  critChance?: number;
  blockChance?: number;

  implicit?: {
    text: string;
    statKey: string;
    value: number;
  };
  prefixes: ItemAffix[];
  suffixes: ItemAffix[];

  uniqueModifiers?: string[];
  flavorText?: string;

  icon: string;
  iconColor?: string;

  flaskCharges?: number;
  maxFlaskCharges?: number;
  flaskChargesPerUse?: number;
  flaskDuration?: number;
  flaskEffectText?: string;

  mapTier?: number;
  mapModifiers?: {
    text: string;
    statKey: string;
    value: number;
  }[];
  mapQuantityBonus?: number;
  mapRarityBonus?: number;
  mapPackSizeBonus?: number;

  stackSize?: number;
  maxStackSize?: number;
  currencyType?: string;
}
