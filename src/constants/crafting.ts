// src/constants/crafting.ts

import { Currencies } from '../types/character';

export interface CurrencyInfo {
  id: keyof Currencies;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'very_rare';
  icon: string;
  color: string;
  description: string;
  flavor: string;
  craftActionText: string;
  applicableRarities: ('normal' | 'magic' | 'rare' | 'unique')[];
}

export const CURRENCY_DEFINITIONS: { [id in keyof Currencies]?: CurrencyInfo } = {
  aetherShard: {
    id: 'aetherShard',
    name: 'Aether Shard',
    rarity: 'common',
    icon: 'Sparkles',
    color: '#8888ff',
    description: 'Upgrades a Normal item into an Enriched item with 1–2 affixes.',
    flavor: 'A crystalline fragment pulsing with nascent astral energy.',
    craftActionText: 'Enrich item',
    applicableRarities: ['normal'],
  },
  reshapingPrism: {
    id: 'reshapingPrism',
    name: 'Reshaping Prism',
    rarity: 'common',
    icon: 'RefreshCw',
    color: '#8888ff',
    description: 'Reforges an Enriched item with new random affixes.',
    flavor: 'Reflects astral light into entirely new harmonic configurations.',
    craftActionText: 'Reroll Enriched affixes',
    applicableRarities: ['magic'],
  },
  infusionCore: {
    id: 'infusionCore',
    name: 'Infusion Core',
    rarity: 'common',
    icon: 'PlusCircle',
    color: '#8888ff',
    description: 'Infuses an Enriched item with an additional affix if space remains.',
    flavor: 'Fuses an extra thread of power into receptive equipment.',
    craftActionText: 'Infuse extra affix',
    applicableRarities: ['magic'],
  },
  catalystOfCreation: {
    id: 'catalystOfCreation',
    name: 'Catalyst of Creation',
    rarity: 'uncommon',
    icon: 'Sun',
    color: '#ffff77',
    description: 'Upgrades a Normal item into an Ascended item with 4–6 affixes.',
    flavor: 'An ancient spark capable of forging legendary armaments in an instant.',
    craftActionText: 'Ascend into Rare item',
    applicableRarities: ['normal'],
  },
  entropySigil: {
    id: 'entropySigil',
    name: 'Entropy Sigil',
    rarity: 'rare',
    icon: 'Disc',
    color: '#eab308',
    description: 'Reforges an Ascended item with all new random affixes (4–6 modifiers).',
    flavor: 'A whirling vortex of chaotic potential, unraveling and re-knitting enchantments.',
    craftActionText: 'Reforge Ascended item',
    applicableRarities: ['rare'],
  },
  sovereignRune: {
    id: 'sovereignRune',
    name: 'Sovereign Rune',
    rarity: 'very_rare',
    icon: 'Crown',
    color: '#f59e0b',
    description: 'Empowers an Ascended item with an additional high-tier random affix.',
    flavor: 'The seal of ancient kings, crowning great relics into true masterpieces.',
    craftActionText: 'Slam new affix',
    applicableRarities: ['rare'],
  },
  cleansingDust: {
    id: 'cleansingDust',
    name: 'Cleansing Dust',
    rarity: 'uncommon',
    icon: 'Trash2',
    color: '#cbd5e1',
    description: 'Purges all modifiers from an item, returning it to its pristine Normal base form.',
    flavor: 'Wipes clean all enchantments without harming the core structure.',
    craftActionText: 'Purge all modifiers',
    applicableRarities: ['magic', 'rare'],
  },
  regalMatrix: {
    id: 'regalMatrix',
    name: 'Regal Matrix',
    rarity: 'rare',
    icon: 'Shield',
    color: '#38bdf8',
    description: 'Upgrades an Enriched item to Ascended, preserving existing affixes and adding 1 new affix.',
    flavor: 'Infuses nobility into common enchantments.',
    craftActionText: 'Upgrade Enriched to Ascended',
    applicableRarities: ['magic'],
  },
  divinePrism: {
    id: 'divinePrism',
    name: 'Harmonic Prism',
    rarity: 'very_rare',
    icon: 'Eye',
    color: '#a855f7',
    description: 'Randomizes the numerical values of all existing explicit affixes on an item.',
    flavor: 'Harmonizes resonant frequencies to maximize roll potency.',
    craftActionText: 'Reroll affix roll numbers',
    applicableRarities: ['magic', 'rare', 'unique'],
  },
  mnemonicRune: {
    id: 'mnemonicRune',
    name: 'Mnemonic Rune',
    rarity: 'uncommon',
    icon: 'RotateCcw',
    color: '#64748b',
    description: 'Consume to grant 1 Passive Constellation Respec Point.',
    flavor: 'Unbinds forgotten choices from the astral weave.',
    craftActionText: 'Gain Respec Point',
    applicableRarities: [],
  },
  temperingOil: {
    id: 'temperingOil',
    name: 'Tempering Oil',
    rarity: 'common',
    icon: 'Hammer',
    color: '#94a3b8',
    description: 'Improves the Quality of a Weapon by up to +20%, increasing its base Physical Damage.',
    flavor: 'Refines metal blades to razor-sharp perfection.',
    craftActionText: 'Hone Weapon Quality',
    applicableRarities: ['normal', 'magic', 'rare', 'unique'],
  },
  wardReinforcement: {
    id: 'wardReinforcement',
    name: 'Ward Reinforcement',
    rarity: 'common',
    icon: 'Shield',
    color: '#94a3b8',
    description: 'Improves the Quality of an Armour piece by up to +20%, boosting its Armor/Evasion/ES.',
    flavor: 'Reinforces plates against lethal impact.',
    craftActionText: 'Reinforce Armour Quality',
    applicableRarities: ['normal', 'magic', 'rare', 'unique'],
  },
};
