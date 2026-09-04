// src/engine/Player.ts

import { PASSIVE_TREE_DATA } from '../constants/passiveTreeData';
import { ACTIVE_SKILLS } from '../constants/skillGems';
import { LootSystem } from './LootSystem';
import {
  CharacterAppearance,
  CharacterAttributes,
  CharacterSaveData,
  CharacterStats,
  Currencies,
  SaveSlotId,
} from '../types/character';
import { DamageInstance, StatusAilment } from '../types/combat';
import { EquipmentSlot, Item } from '../types/items';
import { EquippedSkill } from '../types/skills';

export class Player {
  public id: string = 'player';
  public x: number = 800;
  public y: number = 600;
  public vx: number = 0;
  public vy: number = 0;
  public radius: number = 18;
  public facingAngle: number = 0;

  public name: string = 'Vaelor';
  public startNodeId: string = 'node_center_hub';
  public appearance: CharacterAppearance = {
    auraColor: '#f59e0b',
    glowColor: '#fef08a',
    styleName: 'Solar Flame',
  };

  public level: number = 1;
  public experience: number = 0;
  public experienceToNextLevel: number = 100;

  public availablePassivePoints: number = 0;
  public availableRespecPoints: number = 3;
  public allocatedPassiveNodeIds: Set<string> = new Set();

  public attributes: CharacterAttributes = {
    vigor: 10,
    intelligence: 10,
    strength: 10,
    dexterity: 10,
    wisdom: 10,
    luck: 10,
    willpower: 10,
  };

  public stats: CharacterStats;

  public equipment: { [slot in EquipmentSlot]?: Item | null } = {};
  public inventory: (Item | null)[] = new Array(36).fill(null);
  public stash: (Item | null)[] = new Array(72).fill(null);
  public currencies: Currencies = {
    gold: 150,
    aetherShard: 3,
    reshapingPrism: 2,
    infusionCore: 2,
    catalystOfCreation: 1,
    entropySigil: 0,
    sovereignRune: 0,
    cleansingDust: 0,
    regalMatrix: 0,
    divinePrism: 0,
    mnemonicRune: 1,
    temperingOil: 2,
    wardReinforcement: 2,
  };

  public equippedSkills: (EquippedSkill | null)[] = [
    {
      id: 'skill_inst_1',
      skillDefId: 'tectonic_quake',
      level: 1,
      currentXp: 0,
      xpToNextLevel: 100,
      slotIndex: 0,
      isAutoCast: true,
      cooldownTimer: 0,
      supportGemIds: [],
    },
    {
      id: 'skill_inst_2',
      skillDefId: 'orbiting_glaives',
      level: 1,
      currentXp: 0,
      xpToNextLevel: 100,
      slotIndex: 1,
      isAutoCast: true,
      cooldownTimer: 0,
      supportGemIds: [],
    },
    null, null, null, null
  ];

  public activeAilments: StatusAilment[] = [];
  public activeFlaskEffects: { [key: string]: { duration: number; type: string } } = {};
  public dashCooldownTimer: number = 0;
  public invulnerabilityTimer: number = 0;

  public killsCount: number = 0;
  public bossesKilled: number = 0;
  public deathsCount: number = 0;

  constructor(
    name: string = 'Vaelor',
    startNodeId: string = 'node_center_hub',
    appearance?: CharacterAppearance,
    attributes?: CharacterAttributes
  ) {
    this.name = name;
    this.startNodeId = startNodeId;
    if (appearance) this.appearance = appearance;
    if (attributes) this.attributes = attributes;
    this.stats = this.createDefaultStats();
    this.allocatedPassiveNodeIds.add(startNodeId);
    this.recalculateStats();
    this.stats.currentLife = this.stats.maxLife;
    this.stats.currentMana = this.stats.maxMana;
    this.stats.currentEnergyShield = this.stats.maxEnergyShield;
  }

  public customSetup(config: {
    name: string;
    startNodeId: string;
    appearance: CharacterAppearance;
    attributes: CharacterAttributes;
    startingWeaponId: string;
    startingArmorId: string;
    startingSkillId: string;
  }): void {
    this.name = config.name;
    this.startNodeId = config.startNodeId;
    this.appearance = config.appearance;
    this.attributes = { ...config.attributes };

    this.allocatedPassiveNodeIds.clear();
    this.allocatedPassiveNodeIds.add(config.startNodeId);

    this.equippedSkills = [null, null, null, null, null, null];
    this.equippedSkills[0] = {
      id: `skill_start_${Date.now()}`,
      skillDefId: config.startingSkillId,
      level: 1,
      currentXp: 0,
      xpToNextLevel: 100,
      slotIndex: 0,
      isAutoCast: true,
      cooldownTimer: 0,
      supportGemIds: [],
    };
    const companionId = config.startingSkillId === 'orbiting_glaives' ? 'frostbite_wave' : 'orbiting_glaives';
    this.equippedSkills[1] = {
      id: `skill_orbit_${Date.now()}`,
      skillDefId: companionId,
      level: 1,
      currentXp: 0,
      xpToNextLevel: 100,
      slotIndex: 1,
      isAutoCast: true,
      cooldownTimer: 0,
      supportGemIds: [],
    };

    this.equipment.mainHand = LootSystem.generateItem(1, 'normal', config.startingWeaponId);
    this.equipment.bodyArmor = LootSystem.generateItem(1, 'normal', config.startingArmorId);
    this.equipment.flask1 = LootSystem.generateItem(1, 'normal', 'small_life_flask');

    this.inventory[0] = LootSystem.generateItem(1, 'magic', 'ruby_ring');
    this.inventory[1] = LootSystem.generateItem(1, 'normal', 'quicksilver_flask');
    this.inventory[2] = LootSystem.generateItem(1, 'magic', 'hunter_hood');

    this.recalculateStats();
    this.stats.currentLife = this.stats.maxLife;
    this.stats.currentMana = this.stats.maxMana;
    this.stats.currentEnergyShield = this.stats.maxEnergyShield;
  }

  private createDefaultStats(): CharacterStats {
    return {
      maxLife: 150,
      currentLife: 150,
      lifeRegen: 2.0,
      lifeRegenPercent: 0,
      lifeLeechPercent: 0,

      maxMana: 80,
      currentMana: 80,
      manaRegen: 4.0,
      manaRegenPercent: 0,

      maxEnergyShield: 0,
      currentEnergyShield: 0,
      energyShieldRechargeRate: 8,
      energyShieldRechargeDelay: 3.0,

      maxStamina: 100,
      currentStamina: 100,
      staminaRechargeRate: 15,
      staminaCostMultiplier: 1.0,
      equipLoad: 0,
      maxEquipLoad: 60,

      armor: 20,
      evasion: 20,
      chanceToEvade: 5,
      fireResistance: 0,
      coldResistance: 0,
      lightningResistance: 0,
      chaosResistance: 0,
      holyResistance: 0,
      arcaneResistance: 0,
      maxResistCap: 75,
      blockChance: 0,
      spellBlockChance: 0,
      damageReduction: 0,
      physicalAilmentResistance: 0,
      magicAilmentResistance: 0,

      heavyDamageMultiplier: 1.0,
      lightDamageMultiplier: 1.0,
      magicalDamageMultiplier: 1.0,
      damageRollLuckFactor: 0,

      increasedDamage: 0,
      moreDamageMultiplier: 0,
      critChance: 5.0,
      critMultiplier: 150,
      attackSpeedMultiplier: 1.0,
      castSpeedMultiplier: 1.0,
      movementSpeed: 265,

      increasedPhysicalDamage: 0,
      increasedFireDamage: 0,
      increasedColdDamage: 0,
      increasedLightningDamage: 0,
      increasedChaosDamage: 0,
      increasedHolyDamage: 0,
      increasedArcaneDamage: 0,
      increasedAcidDamage: 0,
      increasedSonicDamage: 0,
      increasedElementalDamage: 0,
      increasedSpellDamage: 0,
      increasedAttackDamage: 0,
      increasedAreaDamage: 0,
      increasedProjectileDamage: 0,
      increasedMinionDamage: 0,
      increasedDamageOverTime: 0,

      addedPhysicalDamageMin: 0,
      addedPhysicalDamageMax: 0,
      addedFireDamageMin: 0,
      addedFireDamageMax: 0,
      addedColdDamageMin: 0,
      addedColdDamageMax: 0,
      addedLightningDamageMin: 0,
      addedLightningDamageMax: 0,
      addedChaosDamageMin: 0,
      addedChaosDamageMax: 0,
      addedHolyDamageMin: 0,
      addedHolyDamageMax: 0,
      addedArcaneDamageMin: 0,
      addedArcaneDamageMax: 0,
      addedAcidDamageMin: 0,
      addedAcidDamageMax: 0,
      addedSonicDamageMin: 0,
      addedSonicDamageMax: 0,

      extraProjectiles: 0,
      pierceCount: 0,
      chainCount: 0,
      forkChance: 0,
      areaOfEffectMultiplier: 1.0,
      projectileSpeedMultiplier: 1.0,
      cooldownRecoveryRate: 1.0,

      chanceToIgnite: 0,
      chanceToFreeze: 0,
      chanceToShock: 0,
      chanceToBleed: 0,
      chanceToPoison: 0,
      chanceToConsecrate: 0,
      chanceToCorrode: 0,
      chanceToStagger: 0,
      statusEffectDamageMultiplier: 1.0,
      firePenetration: 0,
      coldPenetration: 0,
      lightningPenetration: 0,
      holyPenetration: 0,
      arcanePenetration: 0,

      minionHealthMultiplier: 1.0,
      minionDamageMultiplier: 1.0,
      minionSpeedMultiplier: 1.0,

      increasedItemRarity: 0,
      increasedItemQuantity: 0,
      increasedExperienceGain: 0,
      pickupRadius: 90,

      enduranceCharges: 0,
      maxEnduranceCharges: 3,
      frenzyCharges: 0,
      maxFrenzyCharges: 3,
      powerCharges: 0,
      maxPowerCharges: 3,
    };
  }

  public recalculateStats(): void {
    const prevLifeRatio = this.stats.maxLife > 0 ? this.stats.currentLife / this.stats.maxLife : 1;
    const prevManaRatio = this.stats.maxMana > 0 ? this.stats.currentMana / this.stats.maxMana : 1;

    const s = this.createDefaultStats();

    // 1. Gather raw base attributes + passives + gear
    let rawVigor = this.attributes.vigor;
    let rawInt = this.attributes.intelligence;
    let rawStr = this.attributes.strength;
    let rawDex = this.attributes.dexterity;
    let rawWis = this.attributes.wisdom;
    let rawLuck = this.attributes.luck;
    let rawWill = this.attributes.willpower;

    // From Passive Tree
    this.allocatedPassiveNodeIds.forEach((nodeId) => {
      const node = PASSIVE_TREE_DATA.nodes[nodeId];
      if (!node) return;

      if (node.keystoneFlag) {
        (s as any)[node.keystoneFlag] = true;
      }

      node.stats.forEach((st) => {
        if (st.statKey in s) {
          (s as any)[st.statKey] += st.value;
        } else if (st.statKey === 'vigor') rawVigor += st.value;
        else if (st.statKey === 'intelligence') rawInt += st.value;
        else if (st.statKey === 'strength') rawStr += st.value;
        else if (st.statKey === 'dexterity') rawDex += st.value;
        else if (st.statKey === 'wisdom') rawWis += st.value;
        else if (st.statKey === 'luck') rawLuck += st.value;
        else if (st.statKey === 'willpower') rawWill += st.value;
      });
    });

    // From Equipment
    let currentTotalEquipLoad = 0;
    Object.values(this.equipment).forEach((item) => {
      if (!item) return;
      currentTotalEquipLoad += item.equipLoad || 0;

      const qMult = 1 + (item.quality || 0) / 100;
      if (item.armor) s.armor += Math.round(item.armor * qMult);
      if (item.evasion) s.evasion += Math.round(item.evasion * qMult);
      if (item.energyShield) s.maxEnergyShield += Math.round(item.energyShield * qMult);
      if (item.blockChance) s.blockChance += item.blockChance;

      if (item.physicalDamageMin) s.addedPhysicalDamageMin += Math.round(item.physicalDamageMin * qMult);
      if (item.physicalDamageMax) s.addedPhysicalDamageMax += Math.round(item.physicalDamageMax * qMult);
      if (item.attackSpeed) s.attackSpeedMultiplier += item.attackSpeed - 1.0;
      if (item.critChance) s.critChance += item.critChance - 5.0;

      if (item.implicit && item.implicit.statKey in s) {
        (s as any)[item.implicit.statKey] += item.implicit.value;
      }

      const allAffixes = [...item.prefixes, ...item.suffixes];
      allAffixes.forEach((aff) => {
        if (aff.statKey in s) {
          (s as any)[aff.statKey] += aff.actualValue;
        } else if (aff.statKey === 'vigor') rawVigor += aff.actualValue;
        else if (aff.statKey === 'intelligence') rawInt += aff.actualValue;
        else if (aff.statKey === 'strength') rawStr += aff.actualValue;
        else if (aff.statKey === 'dexterity') rawDex += aff.actualValue;
        else if (aff.statKey === 'wisdom') rawWis += aff.actualValue;
        else if (aff.statKey === 'luck') rawLuck += aff.actualValue;
        else if (aff.statKey === 'willpower') rawWill += aff.actualValue;
      });

      if (item.uniqueModifiers) {
        item.uniqueModifiers.forEach((mod) => {
          if (mod.includes('to Maximum Life')) {
            const match = mod.match(/\+(\d+)/);
            if (match) s.maxLife += parseInt(match[1]);
          }
          if (mod.includes('to all Elemental Resistances')) {
            const match = mod.match(/\+(\d+)/);
            if (match) {
              const v = parseInt(match[1]);
              s.fireResistance += v;
              s.coldResistance += v;
              s.lightningResistance += v;
            }
          }
          if (mod.includes('increased Movement Speed')) {
            const match = mod.match(/\+(\d+)/);
            if (match) s.movementSpeed += parseInt(match[1]) * 2.2;
          }
        });
      }
    });

    s.equipLoad = currentTotalEquipLoad;

    // 2. WILLPOWER: Omni-Stat Boost (+0.05 to all other 6 stats per Willpower; +1 for every 20 points)
    const omniBonus = Math.floor(rawWill * 0.05);
    const finalVigor = rawVigor + omniBonus;
    const finalInt = rawInt + omniBonus;
    const finalStr = rawStr + omniBonus;
    const finalDex = rawDex + omniBonus;
    const finalWis = rawWis + omniBonus;
    const finalLuck = rawLuck + omniBonus;
    const finalWill = rawWill;

    // 3. EXACT 7 ATTRIBUTES MECHANICS:
    // (1) VIGOR: Max HP, HP regen, Physical Ailment Resistance
    s.maxLife = 100 + (this.level - 1) * 10 + finalVigor * 7;
    s.lifeRegen = 1.5 + finalVigor * 0.15;
    s.physicalAilmentResistance = Math.min(80, finalVigor * 1.5);

    // (2) INTELLIGENCE: Max Mana, Mana regen, Magic Ailment Resistance
    s.maxMana = 50 + (this.level - 1) * 5 + finalInt * 6;
    s.manaRegen = 3.0 + finalInt * 0.25;
    s.magicAilmentResistance = Math.min(80, finalInt * 1.5);

    // (3) STRENGTH: Heavy damage, Equip load, Stamina cost reduction
    s.heavyDamageMultiplier = 1 + finalStr * 0.025;
    s.maxEquipLoad = 40 + finalStr * 2.5;
    s.staminaCostMultiplier = Math.max(0.4, 1 - finalStr * 0.008);
    s.armor += finalStr * 1.5;

    // (4) DEXTERITY: Light damage, Movement speed, Stamina recharge
    s.lightDamageMultiplier = 1 + finalDex * 0.025;
    s.movementSpeed = 265 + finalDex * 1.6;
    s.staminaRechargeRate = 12 + finalDex * 0.4;
    s.attackSpeedMultiplier += finalDex * 0.004;

    // (5) WISDOM: Magical damage, Status effect chance & DoT damage
    s.magicalDamageMultiplier = 1 + finalWis * 0.025;
    s.chanceToIgnite += finalWis * 0.35;
    s.chanceToFreeze += finalWis * 0.35;
    s.chanceToShock += finalWis * 0.35;
    s.chanceToBleed += finalWis * 0.35;
    s.chanceToPoison += finalWis * 0.35;
    s.statusEffectDamageMultiplier = 1 + finalWis * 0.02;

    // (6) LUCK: Evasion, Crit chance, Damage Roll Skewing (luck factor)
    s.evasion += finalLuck * 3.5;
    s.critChance = Math.min(100, Math.max(5, s.critChance + finalLuck * 0.45));
    s.damageRollLuckFactor = finalLuck * 0.035;
    s.increasedItemRarity += finalLuck * 1.8;
    s.increasedItemQuantity += finalLuck * 0.6;

    // (7) WILLPOWER: Minion stats, Energy Shield
    s.minionDamageMultiplier = 1 + finalWill * 0.035;
    s.minionHealthMultiplier = 1 + finalWill * 0.035;
    s.maxEnergyShield = Math.round((s.maxEnergyShield + finalWill * 3) * (1 + finalWill * 0.015));

    // 4. KEYSTONE MECHANICS & TRADE-OFFS
    // Null-Soul Form (NO IMMUNITIES!)
    if (s.nullSoulForm) {
      s.maxLife = 1;
      s.chaosResistance = Math.min(s.maxResistCap, s.chaosResistance + 40);
      s.maxEnergyShield = Math.round(s.maxEnergyShield * 1.6);
    }

    // Hemomancy
    if (s.hemomancy) {
      s.maxLife = Math.round(s.maxLife * 1.25);
      s.maxMana = 0;
    }

    // Immovable Bastion
    if (s.immovableBastion) {
      s.armor += s.evasion;
      s.evasion = 0;
      s.chanceToEvade = 0;
      s.damageReduction += 15;
      s.movementSpeed *= 0.90;
    } else {
      s.chanceToEvade = Math.min(75, Math.max(5, Math.round((s.evasion / (s.evasion + 220)) * 100)));
    }

    // Colossus Earthbreaker (Str x Phys)
    if (s.colossusEarthbreaker) {
      const equipBonus = Math.min(0.60, (s.equipLoad / 30) * 0.15);
      s.heavyDamageMultiplier += 0.40 + equipBonus;
      s.attackSpeedMultiplier *= 0.80;
    }

    // Volcanic Juggernaut (Str x Fire)
    if (s.volcanicJuggernaut) {
      s.increasedFireDamage += 40;
      s.movementSpeed -= 30;
      s.coldResistance -= 20;
    }

    // Glacial Fortress (Str x Cold)
    if (s.glacialFortress) {
      s.addedColdDamageMin += Math.round(s.armor * 0.08);
      s.addedColdDamageMax += Math.round(s.armor * 0.15);
      s.movementSpeed = Math.min(220, s.movementSpeed);
    }

    // Stormforged Anvil (Str x Lightning)
    if (s.stormforgedAnvil) {
      s.increasedLightningDamage += 40;
      s.staminaCostMultiplier += 0.25;
    }

    // Entropic Titan (Str x Chaos)
    if (s.entropicTitan) {
      s.increasedChaosDamage += 40;
      s.lifeRegen *= 0.85;
    }

    // Crusader's Purge (Str x Holy)
    if (s.crusadersPurge) {
      s.increasedHolyDamage += 40;
      s.armor += Math.floor(finalStr * 7.5);
      s.critChance *= 0.5;
    }

    // Aether Bastion (Str x Arcane)
    if (s.aetherBastion) {
      s.increasedArcaneDamage += 40;
      s.armor += Math.floor(finalStr * 4);
    }

    // Wis x Physical / Holy / Chaos
    if (s.geomanticEarthSurge) {
      s.increasedPhysicalDamage += 35;
      s.increasedAreaDamage += 20;
      s.increasedProjectileDamage = Math.max(0, s.increasedProjectileDamage - 20);
    }
    if (s.plaguebringerSceptre) {
      s.increasedChaosDamage += 35;
      s.chanceToPoison += 25;
      s.increasedPhysicalDamage = Math.max(0, s.increasedPhysicalDamage - 15);
    }
    if (s.purifyingArchon) {
      s.increasedHolyDamage += 35;
      s.holyPenetration += 10;
    }

    // Luck x element keystones
    if (s.wildfireGamble) {
      s.increasedFireDamage += 40;
      s.damageRollLuckFactor += 0.25;
      s.critChance += 8;
    }
    if (s.frostbiteRoulette) {
      s.increasedColdDamage += 40;
      s.critChance += 8;
    }
    if (s.highVoltageJackpot) {
      s.increasedLightningDamage += 40;
      s.chainCount += 1;
    }
    if (s.twistedDestiny) {
      s.increasedChaosDamage += 40;
      s.damageRollLuckFactor += 0.20;
    }
    if (s.divineSerendipity) {
      s.increasedHolyDamage += 40;
      s.holyPenetration += 10;
    }
    if (s.astralGambler) {
      s.increasedArcaneDamage += 40;
      s.forkChance += 25;
    }
    if (s.causticFortune) {
      s.increasedAcidDamage += 40;
      s.chanceToCorrode += 20;
    }
    if (s.cacophonyFortune) {
      s.increasedSonicDamage += 40;
      s.chanceToStagger += 25;
    }

    // Willpower x element minion/summon keystones
    if (s.infernalLegionVanguard) {
      s.minionDamageMultiplier += 0.35;
      s.increasedFireDamage += 25;
    }
    if (s.frostBoundPhantoms) {
      s.minionDamageMultiplier += 0.35;
      s.increasedColdDamage += 25;
    }
    if (s.stormElementalConduit) {
      s.minionDamageMultiplier += 0.35;
      s.increasedLightningDamage += 25;
    }
    if (s.abyssalHiveMind) {
      s.minionDamageMultiplier += 0.35;
      s.increasedChaosDamage += 25;
      s.minionSpeedMultiplier += 0.20;
    }
    if (s.causticBroodmother) {
      s.minionDamageMultiplier += 0.35;
      s.increasedAcidDamage += 25;
    }
    if (s.bansheeResonance) {
      s.minionDamageMultiplier += 0.35;
      s.increasedSonicDamage += 25;
    }

    // Caustic Colossus (Str x Acid)
    if (s.causticColossus) {
      s.increasedAcidDamage += 40;
      s.maxEnergyShield = Math.round(s.maxEnergyShield * 0.85);
    }

    // Tremor King (Str x Sonic)
    if (s.tremorKing) {
      s.increasedSonicDamage += 40;
      s.chanceToStagger += 35;
      s.cooldownRecoveryRate -= 0.20;
    }

    // Blade Flurry Tempest (Dex x Phys)
    if (s.bladeFlurryTempest) {
      s.lightDamageMultiplier += 0.30;
      s.attackSpeedMultiplier += 0.20;
    }

    // Cinder Dancer Volley (Dex x Fire)
    if (s.cinderDancerVolley) {
      s.increasedFireDamage += 35;
      s.maxResistCap = 50;
    }

    // Rime Stalker Needle (Dex x Cold)
    if (s.rimeStalkerNeedle) {
      s.increasedColdDamage += 35;
      s.critChance += 20;
    }

    // Electro Acrobat (Dex x Lightning)
    if (s.electroAcrobat) {
      s.increasedLightningDamage += 35;
      s.movementSpeed += 25;
      s.increasedPhysicalDamage -= 20;
    }

    // Venomous Assassin (Dex x Chaos)
    if (s.venomousAssassin) {
      s.increasedChaosDamage += 35;
      s.chanceToPoison += 35;
      s.maxLife = Math.round(s.maxLife * 0.80);
    }

    // Solar Deadeye (Dex x Holy)
    if (s.solarDeadeye) {
      s.increasedHolyDamage += 40;
    }

    // Aether Weaver Rapier (Dex x Arcane)
    if (s.aetherWeaverRapier) {
      s.increasedArcaneDamage += 40;
    }

    // Corrosive Fangs (Dex x Acid)
    if (s.corrosiveFangs) {
      s.increasedAcidDamage += 40;
    }

    // Sonic Wind-Shear (Dex x Sonic)
    if (s.sonicWindShear) {
      s.increasedSonicDamage += 40;
    }

    // Incandescent Archon (Wis x Fire)
    if (s.incandescentArchon) {
      s.increasedFireDamage += 45;
      s.castSpeedMultiplier -= 0.20;
    }

    // Glacial Sovereign (Wis x Cold)
    if (s.glacialSovereign) {
      s.increasedColdDamage += 45;
      s.chanceToFreeze += 25;
    }

    // Overcharged Conduit (Wis x Lightning)
    if (s.overchargedConduit) {
      s.increasedLightningDamage += 45;
      s.chanceToShock += 30;
    }

    // Astral Singularity (Wis x Arcane)
    if (s.astralSingularity) {
      s.increasedArcaneDamage += 45;
    }

    // Alchemical Catalyst (Wis x Status DoT)
    if (s.alchemicalCatalyst) {
      s.statusEffectDamageMultiplier += 0.40;
    }

    // Harmonic Resonance (Wis x Sonic)
    if (s.harmonicResonance) {
      s.increasedSonicDamage += 35;
      s.increasedAreaDamage += 40;
    }

    // Seraph Host of Astris (Will x Holy)
    if (s.seraphHostAstris) {
      s.increasedHolyDamage += 35;
      s.minionDamageMultiplier += 0.50;
    }

    // Golem Titan Garrison (Will x Phys/Armor)
    if (s.golemTitanGarrison) {
      s.minionHealthMultiplier += 0.40;
      s.minionDamageMultiplier += 0.40;
      s.damageReduction -= 10;
    }

    // Aether Shroud Nexus (Will x Arcane ES)
    if (s.aetherShroudNexus) {
      s.maxEnergyShield += Math.round(s.maxMana * 0.5);
      s.maxLife = Math.min(500, s.maxLife);
    }

    // Omnipotent Harmony (All 7 stats balanced within 10)
    const statsArr = [finalVigor, finalInt, finalStr, finalDex, finalWis, finalLuck, finalWill];
    const minStat = Math.min(...statsArr);
    const maxStat = Math.max(...statsArr);
    if (s.omnipotentHarmony && maxStat - minStat <= 10) {
      s.moreDamageMultiplier += 0.35;
      s.maxLife += 150;
      s.armor += 100;
      s.evasion += 100;
      s.increasedHolyDamage += 30;
    }

    // Monolithic Focus (Any single stat >= 50)
    if (s.monolithicFocus && maxStat >= 50) {
      s.moreDamageMultiplier += 0.40;
    }

    // Heavy Conduit (Wisdom scales with Strength)
    if (s.heavyConduit) {
      s.magicalDamageMultiplier += (finalStr * 0.018);
    }

    // Titanic Vitality (Life scales with both Vigor and Strength)
    if (s.titanicVitality) {
      s.maxLife += Math.floor(finalStr * 4.0);
      s.staminaRechargeRate *= 0.85;
    }

    // Fortune's Favor (Luck damage roll factor doubled)
    if (s.fortunesFavor) {
      s.damageRollLuckFactor *= 2.0;
      s.increasedItemRarity += 50;
    }

    // Prismatic Surge (Balanced elemental; convert all damage to a random element each hit-like bonus; no immunities)
    if (s.prismaticSurge) {
      s.increasedElementalDamage += 30;
      s.firePenetration += 8;
      s.coldPenetration += 8;
      s.lightningPenetration += 8;
      s.statusEffectDamageMultiplier *= 0.85;
    }

    // Close-Quarters Ballistics (Projectiles deal massive damage at point-blank; falloff with range)
    if (s.closeQuartersBallistics) {
      s.increasedProjectileDamage += 45;
      s.areaOfEffectMultiplier *= 0.85;
    }

    // Phantom Veil (Chance to evade that briefly spikes after taking damage; synergy with Luck/Dex/Will)
    if (s.phantomVeil) {
      s.evasion += 180;
      s.chanceToEvade = Math.min(75, s.chanceToEvade + 10);
      s.armor = Math.round(s.armor * 0.80);
    }

    // Pyretic Ascendancy (Wis x Fire / Holy — All elemental damage converts to Holy Fire, big DoT)
    if (s.pyreticAscendancy) {
      s.increasedFireDamage += 25;
      s.increasedHolyDamage += 35;
      s.chanceToIgnite += 30;
      s.statusEffectDamageMultiplier += 0.25;
      s.coldResistance -= 15;
    }

    // Unyielding Resolve (Crit-agnostic; huge hit damage, no lucky strikes)
    if (s.unyieldingResolve) {
      s.moreDamageMultiplier += 0.30;
      s.critChance = Math.max(5, s.critChance * 0.25);
      s.physicalAilmentResistance = Math.min(80, s.physicalAilmentResistance + 30);
      s.magicAilmentResistance = Math.min(80, s.magicAilmentResistance + 30);
      s.damageReduction += 8;
    }

    // Galeform Stance (Evasion core — described in the tree node; small speed/evasion tradeoff)
    if (s.galeformStance) {
      s.evasion += 250;
      s.movementSpeed += 20;
      s.armor = Math.round(s.armor * 0.70);
    }

    // Acrobatic Sorcery (Cast while moving; spells gain dexterity scaling)
    if (s.acrobaticSorcery) {
      s.castSpeedMultiplier += 0.20;
      s.magicalDamageMultiplier += (finalDex * 0.012);
      s.staminaCostMultiplier += 0.20;
    }

    // Astral Commander (Minions inherit your auras; bigger army)
    if (s.astralCommander) {
      s.minionDamageMultiplier += 0.45;
      s.minionHealthMultiplier += 0.45;
      s.minionSpeedMultiplier += 0.15;
      s.maxLife = Math.round(s.maxLife * 0.90);
    }

    s.fireResistance = Math.min(s.maxResistCap, s.fireResistance);
    s.coldResistance = Math.min(s.maxResistCap, s.coldResistance);
    s.lightningResistance = Math.min(s.maxResistCap, s.lightningResistance);
    s.chaosResistance = Math.min(75, s.chaosResistance);
    s.holyResistance = Math.min(s.maxResistCap, s.holyResistance);
    s.arcaneResistance = Math.min(s.maxResistCap, s.arcaneResistance);

    this.stats = s;
    this.stats.currentLife = Math.min(this.stats.maxLife, Math.round(this.stats.maxLife * prevLifeRatio));
    this.stats.currentMana = Math.min(this.stats.maxMana, Math.round(this.stats.maxMana * prevManaRatio));
    this.stats.currentEnergyShield = Math.min(this.stats.maxEnergyShield, this.stats.maxEnergyShield);
  }

  public addExperience(amount: number): boolean {
    const incBonus = 1 + (this.stats.increasedExperienceGain || 0) / 100;
    this.experience += Math.round(amount * incBonus);
    let leveledUp = false;

    while (this.experience >= this.experienceToNextLevel && this.level < 100) {
      this.experience -= this.experienceToNextLevel;
      this.level += 1;
      this.availablePassivePoints += 1;
      this.experienceToNextLevel = Math.floor(100 * Math.pow(this.level, 2.2));
      leveledUp = true;
    }

    if (leveledUp) {
      this.recalculateStats();
      this.stats.currentLife = this.stats.maxLife;
      this.stats.currentMana = this.stats.maxMana;
      this.stats.currentEnergyShield = this.stats.maxEnergyShield;
    }

    return leveledUp;
  }

  public onDeath(): void {
    this.deathsCount += 1;
    const penalty = Math.floor(this.experienceToNextLevel * 0.1);
    this.experience = Math.max(0, this.experience - penalty);
    this.stats.currentLife = this.stats.maxLife;
    this.stats.currentMana = this.stats.maxMana;
    this.stats.currentEnergyShield = this.stats.maxEnergyShield;
  }

  public update(dt: number): void {
    if (this.stats.currentLife < this.stats.maxLife && !this.stats.voraciousFeast) {
      const regen = this.stats.lifeRegen + (this.stats.maxLife * (this.stats.lifeRegenPercent || 0)) / 100;
      this.stats.currentLife = Math.min(this.stats.maxLife, this.stats.currentLife + regen * dt);
    }

    if (this.stats.currentMana < this.stats.maxMana && !this.stats.hemomancy) {
      const manaRegen = this.stats.manaRegen + (this.stats.maxMana * (this.stats.manaRegenPercent || 0)) / 100;
      this.stats.currentMana = Math.min(this.stats.maxMana, this.stats.currentMana + manaRegen * dt);
    }

    if (this.stats.currentEnergyShield < this.stats.maxEnergyShield) {
      this.stats.currentEnergyShield = Math.min(
        this.stats.maxEnergyShield,
        this.stats.currentEnergyShield + this.stats.energyShieldRechargeRate * dt
      );
    }

    if (this.dashCooldownTimer > 0) {
      this.dashCooldownTimer = Math.max(0, this.dashCooldownTimer - dt);
    }
    if (this.invulnerabilityTimer > 0) {
      this.invulnerabilityTimer = Math.max(0, this.invulnerabilityTimer - dt);
    }

    this.equippedSkills.forEach((sk) => {
      if (sk && sk.cooldownTimer > 0) {
        sk.cooldownTimer = Math.max(0, sk.cooldownTimer - dt);
      }
    });

    Object.keys(this.activeFlaskEffects).forEach((k) => {
      this.activeFlaskEffects[k].duration -= dt;
      if (this.activeFlaskEffects[k].duration <= 0) {
        delete this.activeFlaskEffects[k];
      }
    });

    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  public toSaveData(currentZoneId: string, unlockedZoneIds: string[], completedQuestIds: string[]): CharacterSaveData {
    return {
      id: `char_${this.name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`,
      slotId: 'slot_1',
      name: this.name,
      startNodeId: this.startNodeId,
      appearance: { ...this.appearance },
      level: this.level,
      experience: this.experience,
      attributes: { ...this.attributes },
      currentZoneId,
      unlockedZoneIds,
      allocatedPassiveNodeIds: Array.from(this.allocatedPassiveNodeIds),
      availablePassivePoints: this.availablePassivePoints,
      availableRespecPoints: this.availableRespecPoints,
      currencies: { ...this.currencies },
      inventory: this.inventory.map((i) => (i ? { ...i } : null)),
      equipment: { ...this.equipment },
      stash: this.stash.map((i) => (i ? { ...i } : null)),
      equippedSkills: this.equippedSkills.map((s) => (s ? { ...s } : null)),
      completedQuestIds,
      createdAt: Date.now(),
      lastPlayedAt: Date.now(),
      playtimeSeconds: 0,
      monstersKilled: this.killsCount,
      bossesDefeated: this.bossesKilled,
      deaths: this.deathsCount,
    };
  }

  public loadFromSaveData(data: CharacterSaveData): void {
    this.name = data.name;
    this.startNodeId = data.startNodeId || 'node_center_hub';
    if (data.appearance) this.appearance = data.appearance;
    this.level = data.level;
    this.experience = data.experience;
    this.experienceToNextLevel = Math.floor(100 * Math.pow(this.level, 2.2));
    if (data.attributes) this.attributes = { ...data.attributes };
    this.availablePassivePoints = data.availablePassivePoints;
    this.availableRespecPoints = data.availableRespecPoints;
    this.allocatedPassiveNodeIds = new Set(data.allocatedPassiveNodeIds);
    this.currencies = { ...data.currencies };
    this.inventory = data.inventory.map((i) => (i ? { ...i } : null));
    this.equipment = { ...data.equipment };
    this.stash = data.stash ? data.stash.map((i) => (i ? { ...i } : null)) : new Array(72).fill(null);
    if (data.equippedSkills) {
      this.equippedSkills = data.equippedSkills.map((s) => (s ? { ...s } : null));
    }
    this.killsCount = data.monstersKilled || 0;
    this.bossesKilled = data.bossesDefeated || 0;
    this.deathsCount = data.deaths || 0;
    this.recalculateStats();
  }
}
