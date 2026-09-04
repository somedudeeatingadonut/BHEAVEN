// src/types/character.ts

export type SaveSlotId = 'slot_1' | 'slot_2' | 'slot_3';

export interface CharacterAppearance {
  auraColor: string;
  glowColor: string;
  styleName: string;
}

export interface CharacterAttributes {
  vigor: number;        // Max HP, Health regen, Phys ailment resistance
  intelligence: number; // Max Mana, Mana regen, Magic ailment resistance
  strength: number;     // Heavy damage, Equip load, Resource/Stamina reduction
  dexterity: number;    // Light damage, Move speed, Stamina recharge rate
  wisdom: number;       // Magical damage, Status effect chance & damage
  luck: number;         // Evasion, Crit chance, Higher damage rolls (min-max distribution)
  willpower: number;    // Minion stats, Energy Shield, +0.05 to all other stats per point
}

export interface CharacterStats {
  // Core Vitals
  maxLife: number;
  currentLife: number;
  lifeRegen: number;
  lifeRegenPercent: number;
  lifeLeechPercent: number;

  maxMana: number;
  currentMana: number;
  manaRegen: number;
  manaRegenPercent: number;

  maxEnergyShield: number;
  currentEnergyShield: number;
  energyShieldRechargeRate: number;
  energyShieldRechargeDelay: number;

  // Stamina & Equip Load
  maxStamina: number;
  currentStamina: number;
  staminaRechargeRate: number;
  staminaCostMultiplier: number;
  equipLoad: number;
  maxEquipLoad: number;

  // Defenses & Resistances
  armor: number;
  evasion: number;
  chanceToEvade: number;
  fireResistance: number;
  coldResistance: number;
  lightningResistance: number;
  chaosResistance: number;
  holyResistance: number;
  arcaneResistance: number;
  maxResistCap: number;
  blockChance: number;
  spellBlockChance: number;
  damageReduction: number;
  physicalAilmentResistance: number; // % reduced phys ailment chance
  magicAilmentResistance: number;    // % reduced magic ailment chance

  // Offense Scaling by Class of Damage
  heavyDamageMultiplier: number;   // from Strength
  lightDamageMultiplier: number;   // from Dexterity
  magicalDamageMultiplier: number; // from Wisdom
  damageRollLuckFactor: number;    // from Luck (skews random roll towards max)

  // Global Offense
  increasedDamage: number;
  moreDamageMultiplier: number;
  critChance: number;
  critMultiplier: number;
  attackSpeedMultiplier: number;
  castSpeedMultiplier: number;
  movementSpeed: number;

  // Damage Types (All 9 Types!)
  increasedPhysicalDamage: number;
  increasedFireDamage: number;
  increasedColdDamage: number;
  increasedLightningDamage: number;
  increasedChaosDamage: number;
  increasedHolyDamage: number;
  increasedArcaneDamage: number;
  increasedAcidDamage: number;
  increasedSonicDamage: number;
  increasedElementalDamage: number;
  increasedSpellDamage: number;
  increasedAttackDamage: number;
  increasedAreaDamage: number;
  increasedProjectileDamage: number;
  increasedMinionDamage: number;
  increasedDamageOverTime: number;

  // Flat Added Damages
  addedPhysicalDamageMin: number;
  addedPhysicalDamageMax: number;
  addedFireDamageMin: number;
  addedFireDamageMax: number;
  addedColdDamageMin: number;
  addedColdDamageMax: number;
  addedLightningDamageMin: number;
  addedLightningDamageMax: number;
  addedChaosDamageMin: number;
  addedChaosDamageMax: number;
  addedHolyDamageMin: number;
  addedHolyDamageMax: number;
  addedArcaneDamageMin: number;
  addedArcaneDamageMax: number;
  addedAcidDamageMin: number;
  addedAcidDamageMax: number;
  addedSonicDamageMin: number;
  addedSonicDamageMax: number;

  // Mechanics
  extraProjectiles: number;
  pierceCount: number;
  chainCount: number;
  forkChance: number;
  areaOfEffectMultiplier: number;
  projectileSpeedMultiplier: number;
  cooldownRecoveryRate: number;

  // Ailments & Penetration
  chanceToIgnite: number;
  chanceToFreeze: number;
  chanceToShock: number;
  chanceToBleed: number;
  chanceToPoison: number;
  chanceToConsecrate: number;
  chanceToCorrode: number;
  chanceToStagger: number;
  statusEffectDamageMultiplier: number;
  firePenetration: number;
  coldPenetration: number;
  lightningPenetration: number;
  holyPenetration: number;
  arcanePenetration: number;

  // Summons
  minionHealthMultiplier: number;
  minionDamageMultiplier: number;
  minionSpeedMultiplier: number;

  // Utility & Magic Find
  increasedItemRarity: number;
  increasedItemQuantity: number;
  increasedExperienceGain: number;
  pickupRadius: number;

  // Charges
  enduranceCharges: number;
  maxEnduranceCharges: number;
  frenzyCharges: number;
  maxFrenzyCharges: number;
  powerCharges: number;
  maxPowerCharges: number;

  // ALL 50+ UNIQUE KEYSTONE FLAGS (Every Element x Attribute combination!)
  // Generic / Foundation
  hemomancy?: boolean;
  nullSoulForm?: boolean;
  immovableBastion?: boolean;
  prismaticSurge?: boolean;
  closeQuartersBallistics?: boolean;
  phantomVeil?: boolean;
  voraciousFeast?: boolean;
  unyieldingResolve?: boolean;
  galeformStance?: boolean;
  omnipotentHarmony?: boolean;
  monolithicFocus?: boolean;
  fortunesFavor?: boolean;
  heavyConduit?: boolean;
  acrobaticSorcery?: boolean;
  titanicVitality?: boolean;
  astralCommander?: boolean;

  // Strength x Elements
  colossusEarthbreaker?: boolean;
  volcanicJuggernaut?: boolean;
  glacialFortress?: boolean;
  stormforgedAnvil?: boolean;
  entropicTitan?: boolean;
  crusadersPurge?: boolean;
  aetherBastion?: boolean;
  causticColossus?: boolean;
  tremorKing?: boolean;

  // Dexterity x Elements
  bladeFlurryTempest?: boolean;
  cinderDancerVolley?: boolean;
  rimeStalkerNeedle?: boolean;
  electroAcrobat?: boolean;
  venomousAssassin?: boolean;
  solarDeadeye?: boolean;
  aetherWeaverRapier?: boolean;
  corrosiveFangs?: boolean;
  sonicWindShear?: boolean;

  // Wisdom x Elements
  incandescentArchon?: boolean;
  glacialSovereign?: boolean;
  overchargedConduit?: boolean;
  plaguebringerSceptre?: boolean;
  purifyingArchon?: boolean;
  astralSingularity?: boolean;
  alchemicalCatalyst?: boolean;
  harmonicResonance?: boolean;
  geomanticEarthSurge?: boolean;
  pyreticAscendancy?: boolean;

  // Luck x Elements
  fortunesDecapitation?: boolean;
  wildfireGamble?: boolean;
  frostbiteRoulette?: boolean;
  highVoltageJackpot?: boolean;
  twistedDestiny?: boolean;
  divineSerendipity?: boolean;
  astralGambler?: boolean;
  causticFortune?: boolean;
  cacophonyFortune?: boolean;

  // Willpower x Elements
  golemTitanGarrison?: boolean;
  infernalLegionVanguard?: boolean;
  frostBoundPhantoms?: boolean;
  stormElementalConduit?: boolean;
  abyssalHiveMind?: boolean;
  seraphHostAstris?: boolean;
  aetherShroudNexus?: boolean;
  causticBroodmother?: boolean;
  bansheeResonance?: boolean;
}

export interface Currencies {
  gold: number;
  aetherShard: number;
  reshapingPrism: number;
  infusionCore: number;
  catalystOfCreation: number;
  entropySigil: number;
  sovereignRune: number;
  cleansingDust: number;
  regalMatrix: number;
  divinePrism: number;
  mnemonicRune: number;
  temperingOil: number;
  wardReinforcement: number;
}

export interface CharacterSaveData {
  id: string;
  slotId: SaveSlotId;
  name: string;
  startNodeId: string;
  appearance: CharacterAppearance;
  level: number;
  experience: number;
  attributes: CharacterAttributes;
  currentZoneId: string;
  unlockedZoneIds: string[];
  allocatedPassiveNodeIds: string[];
  availablePassivePoints: number;
  availableRespecPoints: number;
  currencies: Currencies;
  inventory: (import('./items').Item | null)[];
  equipment: { [slot in import('./items').EquipmentSlot]?: import('./items').Item | null };
  stash: (import('./items').Item | null)[];
  equippedSkills: (import('./skills').EquippedSkill | null)[];
  completedQuestIds: string[];
  createdAt: number;
  lastPlayedAt: number;
  playtimeSeconds: number;
  monstersKilled: number;
  bossesDefeated: number;
  deaths: number;
}
