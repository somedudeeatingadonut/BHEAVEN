// src/engine/LootSystem.ts

import { AFFIX_DEFINITIONS } from '../constants/affixes';
import { ITEM_BASES } from '../constants/itemBases';
import { UNIQUE_ITEMS } from '../constants/uniques';
import { CharacterStats, Currencies } from '../types/character';
import { GroundLoot, MonsterRarity } from '../types/combat';
import { Item, ItemAffix, ItemRarity, WeaponScalingGrade, WeaponScalingStat } from '../types/items';

const RARE_PREFIX_NAMES = [
  'Aetheric', 'Astral', 'Cataclysmic', 'Dreadforged', 'Eldritch', 'Galeborn', 'Gloom',
  'Glyphic', 'Hallowed', 'Havoc', 'Hyperion', 'Kraken', 'Luminous', 'Miracle', 'Morbid', 'Oblivion',
  'Pandemonium', 'Phoenix', 'Primordial', 'Radiant', 'Rapture', 'Runic', 'Shadow', 'Solar',
  'Soulbound', 'Stormcaller', 'Tempest', 'Tormented', 'Viperine', 'Vortex', 'Wrathful'
];

const RARE_SUFFIX_NAMES = [
  'Bane', 'Bite', 'Brand', 'Call', 'Chant', 'Claw', 'Cry', 'Edge', 'Embrace', 'Fang',
  'Flight', 'Grasp', 'Grip', 'Guard', 'Harness', 'Heart', 'Horn', 'Keep', 'Lock',
  'Mantle', 'Nail', 'Needle', 'Pelt', 'Pierce', 'Razor', 'Reaver', 'Roar', 'Scourge',
  'Scratch', 'Seeker', 'Shell', 'Shroud', 'Sight', 'Skin', 'Snare', 'Song', 'Span',
  'Spike', 'Spire', 'Spur', 'Star', 'Sting', 'Strike', 'Thread', 'Touch', 'Track',
  'Trap', 'Twine', 'Veil', 'Visage', 'Ward', 'Weave', 'Whorl', 'Wind', 'Wing', 'Wrap'
];

const WEAPON_SCALING_STATS_POOL: WeaponScalingStat[] = ['strength', 'dexterity', 'wisdom', 'luck', 'willpower'];

export class LootSystem {
  /**
   * Generates randomized weapon scaling attributes and grades with mutation chance
   */
  public static rollWeaponScalings(base: typeof ITEM_BASES[string], rarity: ItemRarity): WeaponScalingGrade[] {
    if (!base.baseScalings || base.baseScalings.length === 0) {
      return [];
    }

    // Clone base scalings with randomized percentage variance (+-25%)
    let scalings: WeaponScalingGrade[] = base.baseScalings.map((b) => {
      const variance = 0.8 + Math.random() * 0.4;
      const pct = parseFloat((b.percentPerPoint * variance).toFixed(3));
      const grade = pct >= 0.038 ? 'S' : pct >= 0.030 ? 'A' : pct >= 0.022 ? 'B' : pct >= 0.016 ? 'C' : 'D';
      return {
        stat: b.stat,
        grade,
        percentPerPoint: pct,
      };
    });

    // Random attribute mutation chance (25% Magic, 40% Rare, 50% Unique)
    const mutationChance = rarity === 'unique' ? 0.5 : rarity === 'rare' ? 0.4 : rarity === 'magic' ? 0.25 : 0.1;
    if (Math.random() < mutationChance) {
      const existingStats = new Set(scalings.map((s) => s.stat));
      const availableStats = WEAPON_SCALING_STATS_POOL.filter((st) => !existingStats.has(st));

      if (availableStats.length > 0 && Math.random() < 0.6) {
        // Add an extra random scaling attribute
        const extraStat = availableStats[Math.floor(Math.random() * availableStats.length)];
        const extraPct = parseFloat((0.018 + Math.random() * 0.018).toFixed(3));
        const extraGrade = extraPct >= 0.038 ? 'S' : extraPct >= 0.030 ? 'A' : extraPct >= 0.022 ? 'B' : extraPct >= 0.016 ? 'C' : 'D';
        scalings.push({
          stat: extraStat,
          grade: extraGrade,
          percentPerPoint: extraPct,
        });
      } else if (scalings.length > 0) {
        // Mutate one existing scaling stat into another random stat
        const replaceIdx = Math.floor(Math.random() * scalings.length);
        const newStat = WEAPON_SCALING_STATS_POOL[Math.floor(Math.random() * WEAPON_SCALING_STATS_POOL.length)];
        const newPct = parseFloat((0.022 + Math.random() * 0.02).toFixed(3));
        const newGrade = newPct >= 0.038 ? 'S' : newPct >= 0.030 ? 'A' : newPct >= 0.022 ? 'B' : newPct >= 0.016 ? 'C' : 'D';
        scalings[replaceIdx] = {
          stat: newStat,
          grade: newGrade,
          percentPerPoint: newPct,
        };
      }
    }

    return scalings;
  }

  public static generateItem(
    itemLevel: number,
    forceRarity?: ItemRarity,
    forceBaseId?: string,
    playerStats?: CharacterStats
  ): Item {
    const baseIds = Object.keys(ITEM_BASES).filter(
      (id) => !['waystone_t1', 'waystone_t5', 'waystone_t10'].includes(id) || Math.random() < 0.05
    );
    const chosenBaseId = forceBaseId || baseIds[Math.floor(Math.random() * baseIds.length)];
    const base = ITEM_BASES[chosenBaseId] || ITEM_BASES['plate_vest'];

    let rarity: ItemRarity = forceRarity || 'normal';
    if (!forceRarity) {
      const rarityRoll = Math.random() * 100;
      const iirBonus = (playerStats?.increasedItemRarity || 0) / 100;

      if (rarityRoll < 1.5 * (1 + iirBonus)) {
        const uniqueKeys = Object.keys(UNIQUE_ITEMS);
        const matchingUniqueKey = uniqueKeys.find(
          (k) => UNIQUE_ITEMS[k].baseId === base.id && (UNIQUE_ITEMS[k].reqLevel || 1) <= itemLevel + 5
        );
        if (matchingUniqueKey) {
          const uniqueData = UNIQUE_ITEMS[matchingUniqueKey];
          return {
            id: `item_uniq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            baseId: base.id,
            name: uniqueData.name || base.name,
            baseName: base.name,
            rarity: 'unique',
            category: base.category,
            slot: base.slot,
            scalingClass: base.scalingClass,
            scalings: this.rollWeaponScalings(base, 'unique'),
            equipLoad: base.equipLoad || 0,
            itemLevel,
            reqLevel: uniqueData.reqLevel || base.reqLevel,
            reqStr: base.reqStr,
            reqDex: base.reqDex,
            reqInt: base.reqInt,
            quality: 20,
            isIdentified: true,
            armor: uniqueData.armor || base.baseStats.armor,
            evasion: uniqueData.evasion || base.baseStats.evasion,
            energyShield: uniqueData.energyShield || base.baseStats.energyShield,
            physicalDamageMin: uniqueData.physicalDamageMin || base.baseStats.physicalDamageMin,
            physicalDamageMax: uniqueData.physicalDamageMax || base.baseStats.physicalDamageMax,
            attackSpeed: uniqueData.attackSpeed || base.baseStats.attackSpeed,
            critChance: uniqueData.critChance || base.baseStats.critChance,
            blockChance: base.baseStats.blockChance,
            prefixes: [],
            suffixes: [],
            uniqueModifiers: uniqueData.uniqueModifiers || [],
            flavorText: uniqueData.flavorText,
            icon: base.icon,
            iconColor: uniqueData.iconColor || '#af6025',
          };
        }
      }

      if (rarityRoll < 18 * (1 + iirBonus)) {
        rarity = 'rare';
      } else if (rarityRoll < 55 * (1 + iirBonus)) {
        rarity = 'magic';
      } else {
        rarity = 'normal';
      }
    }

    let itemName = base.name;
    if (rarity === 'rare') {
      const pName = RARE_PREFIX_NAMES[Math.floor(Math.random() * RARE_PREFIX_NAMES.length)];
      const sName = RARE_SUFFIX_NAMES[Math.floor(Math.random() * RARE_SUFFIX_NAMES.length)];
      itemName = `${pName} ${sName}`;
    }

    const prefixes: ItemAffix[] = [];
    const suffixes: ItemAffix[] = [];

    const allowedAffixes = AFFIX_DEFINITIONS.filter((aff) =>
      aff.allowedCategories.includes(base.category)
    );

    const numPrefixes = rarity === 'normal' ? 0 : rarity === 'magic' ? (Math.random() < 0.5 ? 1 : 0) : Math.floor(Math.random() * 2) + 2;
    const numSuffixes = rarity === 'normal' ? 0 : rarity === 'magic' ? (prefixes.length === 0 ? 1 : Math.random() < 0.5 ? 1 : 0) : Math.floor(Math.random() * 2) + 2;

    const prefixPool = allowedAffixes.filter((a) => a.type === 'prefix');
    const suffixPool = allowedAffixes.filter((a) => a.type === 'suffix');

    const shuffledPrefixes = [...prefixPool].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(numPrefixes, shuffledPrefixes.length); i++) {
      const affDef = shuffledPrefixes[i];
      const validTiers = affDef.tiers.filter((t) => t.reqLevel <= itemLevel + 3);
      const tierObj = validTiers[validTiers.length - 1] || affDef.tiers[0];
      const val = Math.floor(tierObj.minValue + Math.random() * (tierObj.maxValue - tierObj.minValue + 1));
      prefixes.push({
        id: `${affDef.id}_t${tierObj.tier}`,
        name: affDef.name,
        tier: tierObj.tier,
        type: 'prefix',
        statKey: affDef.statKey,
        text: tierObj.textTemplate(val, val),
        minValue: tierObj.minValue,
        maxValue: tierObj.maxValue,
        actualValue: val,
      });
    }

    const shuffledSuffixes = [...suffixPool].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(numSuffixes, shuffledSuffixes.length); i++) {
      const affDef = shuffledSuffixes[i];
      const validTiers = affDef.tiers.filter((t) => t.reqLevel <= itemLevel + 3);
      const tierObj = validTiers[validTiers.length - 1] || affDef.tiers[0];
      const val = Math.floor(tierObj.minValue + Math.random() * (tierObj.maxValue - tierObj.minValue + 1));
      suffixes.push({
        id: `${affDef.id}_t${tierObj.tier}`,
        name: affDef.name,
        tier: tierObj.tier,
        type: 'suffix',
        statKey: affDef.statKey,
        text: tierObj.textTemplate(val, val),
        minValue: tierObj.minValue,
        maxValue: tierObj.maxValue,
        actualValue: val,
      });
    }

    if (rarity === 'magic') {
      const pTitle = prefixes.length > 0 ? prefixes[0].name + ' ' : '';
      const sTitle = suffixes.length > 0 ? ' ' + suffixes[0].name : '';
      itemName = `${pTitle}${base.name}${sTitle}`;
    }

    let implicit = undefined;
    if (base.implicit) {
      const impVal = Math.floor(
        base.implicit.minValue + Math.random() * (base.implicit.maxValue - base.implicit.minValue + 1)
      );
      implicit = {
        text: base.implicit.text,
        statKey: base.implicit.statKey,
        value: impVal,
      };
    }

    return {
      id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      baseId: base.id,
      name: itemName,
      baseName: base.name,
      rarity,
      category: base.category,
      slot: base.slot,
      scalingClass: base.scalingClass,
      scalings: this.rollWeaponScalings(base, rarity),
      equipLoad: base.equipLoad || 0,
      itemLevel,
      reqLevel: base.reqLevel,
      reqStr: base.reqStr,
      reqDex: base.reqDex,
      reqInt: base.reqInt,
      quality: 0,
      isIdentified: true,
      armor: base.baseStats.armor,
      evasion: base.baseStats.evasion,
      energyShield: base.baseStats.energyShield,
      physicalDamageMin: base.baseStats.physicalDamageMin,
      physicalDamageMax: base.baseStats.physicalDamageMax,
      attackSpeed: base.baseStats.attackSpeed,
      critChance: base.baseStats.critChance,
      blockChance: base.baseStats.blockChance,
      implicit,
      prefixes,
      suffixes,
      icon: base.icon,
      iconColor: base.color,
    };
  }

  public static rollMonsterLoot(
    monsterRarity: MonsterRarity,
    monsterLevel: number,
    x: number,
    y: number,
    playerStats: CharacterStats
  ): { groundLoot: GroundLoot[]; currenciesAwarded: Partial<Currencies> } {
    const groundLoot: GroundLoot[] = [];
    const currenciesAwarded: Partial<Currencies> = {};

    const dropMultiplier =
      (1 + (playerStats.increasedItemQuantity || 0) / 100) *
      (monsterRarity === 'boss' ? 8 : monsterRarity === 'rare' ? 3 : monsterRarity === 'magic' ? 1.8 : 1.0);

    const goldBase = monsterLevel * (monsterRarity === 'boss' ? 60 : monsterRarity === 'rare' ? 20 : 6);
    const goldAmount = Math.round(goldBase * dropMultiplier * (0.8 + Math.random() * 0.4));
    currenciesAwarded.gold = goldAmount;

    // Sparse, ARPG-style drops targeting ~6-10 meaningful equipment drops per level on average.
    // Normal monsters mostly contribute XP/Gold; magic/rare/bosses drop actual items.
    // Tuned so early-game levels (fewer kills) still see drops, and high-density late levels
    // don't flood the screen.
    let itemChance = 0.085; // ~8.5% for normal white mobs
    if (monsterRarity === 'magic') itemChance = 0.38;
    else if (monsterRarity === 'rare') itemChance = 1.0;
    else if (monsterRarity === 'boss') itemChance = 1.0;

    // Item Quantity bonus adds at a muted rate to prevent floods.
    itemChance *= Math.min(1.8, 0.8 + dropMultiplier * 0.25);

    const numItems =
      monsterRarity === 'boss'
        ? 4 + Math.floor(Math.random() * 3)
        : monsterRarity === 'rare'
        ? 1 + (Math.random() < 0.5 ? 1 : 0)
        : Math.random() < itemChance
        ? 1
        : 0;

    // Rare currency drops go straight to inventory (no ground clutter), meaningful but sparse.
    const currencyChance =
      monsterRarity === 'boss'
        ? 1.0
        : monsterRarity === 'rare'
        ? 0.55
        : monsterRarity === 'magic'
        ? 0.18
        : 0.06;

    if (Math.random() < currencyChance) {
      const roll = Math.random() * 100;
      if (roll < 55) {
        currenciesAwarded.aetherShard = (currenciesAwarded.aetherShard || 0) + 1;
      } else if (roll < 78) {
        currenciesAwarded.reshapingPrism = (currenciesAwarded.reshapingPrism || 0) + 1;
      } else if (roll < 88) {
        currenciesAwarded.infusionCore = (currenciesAwarded.infusionCore || 0) + 1;
      } else if (roll < 95) {
        currenciesAwarded.catalystOfCreation = (currenciesAwarded.catalystOfCreation || 0) + 1;
      } else if (roll < 98.5) {
        currenciesAwarded.entropySigil = (currenciesAwarded.entropySigil || 0) + 1;
      } else {
        currenciesAwarded.sovereignRune = (currenciesAwarded.sovereignRune || 0) + 1;
      }
    }

    for (let i = 0; i < numItems; i++) {
      const offsetX = (Math.random() - 0.5) * 80;
      const offsetY = (Math.random() - 0.5) * 80;
      const item = this.generateItem(monsterLevel, undefined, undefined, playerStats);
      groundLoot.push({
        id: `loot_${Date.now()}_${i}_${Math.random().toString(36).substring(2, 6)}`,
        item,
        x: x + offsetX,
        y: y + offsetY,
        allocatedToPlayer: true,
        pickupRadius: playerStats.pickupRadius || 70,
        createdAt: Date.now(),
      });
    }

    return { groundLoot, currenciesAwarded };
  }
}
