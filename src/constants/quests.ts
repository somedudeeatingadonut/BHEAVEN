// src/constants/quests.ts

import { Currencies } from '../types/character';

export interface QuestReward {
  passivePoints: number;
  respecPoints: number;
  currencies: Partial<Currencies>;
  rewardItemBaseId?: string;
  rewardItemRarity?: 'magic' | 'rare' | 'unique';
  unlockZoneId?: string;
  description: string;
}

export interface QuestDefinition {
  id: string;
  name: string;
  act: string;
  giver: string;
  description: string;
  objectiveText: string;
  targetZoneId: string;
  requiredBossId: string;
  rewards: QuestReward;
}

export const QUESTS: { [id: string]: QuestDefinition } = {
  quest_shore_incursion: {
    id: 'quest_shore_incursion',
    name: 'Shoreline Incursion',
    act: 'Act 1',
    giver: 'Captain Roderick',
    description: 'A hulking drowned mariner named Ghal-Mor terrorizes the Ashen Coast and blocks our scouts from exploring.',
    objectiveText: 'Vanquish Ghal-Mor the Drowned Brute on The Ashen Coast.',
    targetZoneId: 'ashen_coast',
    requiredBossId: 'boss_ghal_mor',
    rewards: {
      passivePoints: 1,
      respecPoints: 1,
      currencies: {
        aetherShard: 5,
        infusionCore: 3,
        gold: 250,
      },
      unlockZoneId: 'murkwood_mire',
      description: '+1 Passive Constellation Point, +1 Mnemonic Respec Point, 5 Aether Shards, 3 Infusion Cores, 250 Gold.',
    },
  },
  quest_purge_brood: {
    id: 'quest_purge_brood',
    name: 'Cleansing the Mire',
    act: 'Act 1',
    giver: 'Apothecary Elena',
    description: 'The venomous Brood Matriarch commands the toxic swarms choking the Murkwood Mire. Slay her to retrieve rare alchemical reagents.',
    objectiveText: 'Hunt down and defeat the Matriarch of the Brood in The Murkwood Mire.',
    targetZoneId: 'murkwood_mire',
    requiredBossId: 'boss_brood_matriarch',
    rewards: {
      passivePoints: 1,
      respecPoints: 1,
      currencies: {
        catalystOfCreation: 3,
        reshapingPrism: 8,
        gold: 600,
      },
      unlockZoneId: 'aetherial_chasm',
      description: '+1 Passive Constellation Point, +1 Mnemonic Respec Point, 3 Catalysts of Creation, 8 Reshaping Prisms, 600 Gold.',
    },
  },
  quest_resonant_core: {
    id: 'quest_resonant_core',
    name: 'Resonant Depths',
    act: 'Act 1',
    giver: 'Geomancer Vance',
    description: 'The deep crystalline caverns have been overtaken by a sentient geode colossus. Smash it into fragments.',
    objectiveText: 'Defeat the Resonant Golem Titan in the Aetherial Chasm.',
    targetZoneId: 'aetherial_chasm',
    requiredBossId: 'boss_resonant_titan',
    rewards: {
      passivePoints: 2,
      respecPoints: 2,
      currencies: {
        entropySigil: 3,
        regalMatrix: 1,
        gold: 1500,
      },
      unlockZoneId: 'sunken_citadel',
      description: '+2 Passive Constellation Points, +2 Respec Points, 3 Entropy Sigils, 1 Regal Matrix, 1500 Gold.',
    },
  },
  quest_fallen_citadel: {
    id: 'quest_fallen_citadel',
    name: 'Citadel of Specters',
    act: 'Act 1',
    giver: 'Chronicler Sarah',
    description: 'The ancient archon of the sunken citadel still commands his spectral legion. Put an end to his torment.',
    objectiveText: 'Defeat Archon Malakor in The Sunken Citadel.',
    targetZoneId: 'sunken_citadel',
    requiredBossId: 'boss_archon_malakor',
    rewards: {
      passivePoints: 2,
      respecPoints: 2,
      currencies: {
        sovereignRune: 1,
        entropySigil: 5,
        gold: 3000,
      },
      unlockZoneId: 'magma_caldera',
      description: '+2 Passive Constellation Points, +2 Respec Points, 1 Sovereign Rune, 5 Entropy Sigils, 3000 Gold.',
    },
  },
  quest_caldera_eruption: {
    id: 'quest_caldera_eruption',
    name: 'Extinguish the Caldera',
    act: 'Act 1',
    giver: 'High Warden Kaelen',
    description: 'The volcanic titan Pyrax threatens to erupt and consume Astris in hellfire. Extinguish him and unlock the Astral Rift Device.',
    objectiveText: 'Slay Pyrax the Unbroken in The Magma Caldera.',
    targetZoneId: 'magma_caldera',
    requiredBossId: 'boss_pyrax_unbroken',
    rewards: {
      passivePoints: 3,
      respecPoints: 3,
      currencies: {
        divinePrism: 1,
        sovereignRune: 2,
        gold: 10000,
      },
      unlockZoneId: 'astral_catacomb_t1',
      description: '+3 Passive Constellation Points, +3 Respec Points, 1 Harmonic Prism, 2 Sovereign Runes, 10,000 Gold, Unlocks Astral Rift Map Device!',
    },
  },
};
