// src/engine/DamageSystem.ts

import { CharacterAttributes, CharacterStats } from '../types/character';
import { DamageInstance, StatusAilment } from '../types/combat';
import { Item } from '../types/items';
import { SkillDefinition } from '../types/skills';

export interface CalculatedDamageResult {
  totalDamage: number;
  isCrit: boolean;
  absorbedByES: number;
  lifeDamage: number;
  isDead: boolean;
  ailmentsApplied: StatusAilment[];
  damageByType: {
    physical: number;
    fire: number;
    cold: number;
    lightning: number;
    chaos: number;
    holy: number;
    arcane: number;
    acid: number;
    sonic: number;
  };
}

export class DamageSystem {
  public static createPlayerDamageInstance(
    stats: CharacterStats,
    skill: SkillDefinition,
    skillLevel: number,
    equippedWeapon?: Item | null,
    attributes?: CharacterAttributes
  ): DamageInstance {
    const baseMin = skill.baseDamageMin + (skillLevel - 1) * skill.damageScalingPerLevel;
    const baseMax = skill.baseDamageMax + (skillLevel - 1) * skill.damageScalingPerLevel;

    // 1. LUCK EFFECT ON DAMAGE ROLLS: Skews random distribution higher towards max!
    const luckFactor = stats.damageRollLuckFactor || 0;
    const rawRoll = Math.random();
    const luckAdjustedRoll = Math.pow(rawRoll, 1 / (1 + luckFactor));
    let roll = baseMin + luckAdjustedRoll * (baseMax - baseMin);

    // 2. DYNAMIC WEAPON ATTRIBUTE SCALING (Strength, Dexterity, Wisdom, Luck, Willpower)
    let weaponScalingMult = 1.0;
    if (equippedWeapon && equippedWeapon.scalings && equippedWeapon.scalings.length > 0 && attributes) {
      let sumBonus = 0;
      equippedWeapon.scalings.forEach((sc) => {
        const statVal = attributes[sc.stat] || 0;
        sumBonus += statVal * sc.percentPerPoint;
      });
      weaponScalingMult = 1 + sumBonus;
    }

    roll *= weaponScalingMult;

    let phys = skill.damageType === 'physical' ? roll : 0;
    let fire = skill.damageType === 'fire' ? roll : 0;
    let cold = skill.damageType === 'cold' ? roll : 0;
    let lightning = skill.damageType === 'lightning' ? roll : 0;
    let chaos = skill.damageType === 'chaos' ? roll : 0;
    let holy = skill.damageType === 'holy' ? roll : 0;
    let arcane = skill.damageType === 'arcane' ? roll : 0;
    let acid = skill.damageType === 'acid' ? roll : 0;
    let sonic = skill.damageType === 'sonic' ? roll : 0;

    // Flat added damages
    phys += (stats.addedPhysicalDamageMin + luckAdjustedRoll * Math.max(0, stats.addedPhysicalDamageMax - stats.addedPhysicalDamageMin)) * weaponScalingMult;
    fire += (stats.addedFireDamageMin + luckAdjustedRoll * Math.max(0, stats.addedFireDamageMax - stats.addedFireDamageMin)) * weaponScalingMult;
    cold += (stats.addedColdDamageMin + luckAdjustedRoll * Math.max(0, stats.addedColdDamageMax - stats.addedColdDamageMin)) * weaponScalingMult;
    lightning += (stats.addedLightningDamageMin + luckAdjustedRoll * Math.max(0, stats.addedLightningDamageMax - stats.addedLightningDamageMin)) * weaponScalingMult;
    chaos += (stats.addedChaosDamageMin + luckAdjustedRoll * Math.max(0, stats.addedChaosDamageMax - stats.addedChaosDamageMin)) * weaponScalingMult;
    holy += (stats.addedHolyDamageMin + luckAdjustedRoll * Math.max(0, stats.addedHolyDamageMax - stats.addedHolyDamageMin)) * weaponScalingMult;
    arcane += (stats.addedArcaneDamageMin + luckAdjustedRoll * Math.max(0, stats.addedArcaneDamageMax - stats.addedArcaneDamageMin)) * weaponScalingMult;
    acid += (stats.addedAcidDamageMin + luckAdjustedRoll * Math.max(0, stats.addedAcidDamageMax - stats.addedAcidDamageMin)) * weaponScalingMult;
    sonic += (stats.addedSonicDamageMin + luckAdjustedRoll * Math.max(0, stats.addedSonicDamageMax - stats.addedSonicDamageMin)) * weaponScalingMult;

    // Pyretic Ascendancy
    if (stats.pyreticAscendancy) {
      fire += phys * 0.5 + cold * 0.5 + lightning * 0.5 + holy * 0.5 + arcane * 0.5;
      phys = 0;
      cold = 0;
      lightning = 0;
      holy = 0;
      arcane = 0;
    }

    // 3. HEAVY, LIGHT, MAGICAL DAMAGE TYPE SCALING:
    let attributeScalingMultiplier = 1.0;
    if (skill.scalingType === 'heavy') {
      attributeScalingMultiplier = stats.heavyDamageMultiplier || 1.0;
    } else if (skill.scalingType === 'light') {
      attributeScalingMultiplier = stats.lightDamageMultiplier || 1.0;
    } else if (skill.scalingType === 'magical') {
      attributeScalingMultiplier = stats.magicalDamageMultiplier || 1.0;
    } else if (skill.scalingType === 'hybrid') {
      attributeScalingMultiplier = (
        (stats.heavyDamageMultiplier || 1.0) +
        (stats.lightDamageMultiplier || 1.0) +
        (stats.magicalDamageMultiplier || 1.0)
      ) / 3;
    }

    phys *= attributeScalingMultiplier;
    fire *= attributeScalingMultiplier;
    cold *= attributeScalingMultiplier;
    lightning *= attributeScalingMultiplier;
    chaos *= attributeScalingMultiplier;
    holy *= attributeScalingMultiplier;
    arcane *= attributeScalingMultiplier;
    acid *= attributeScalingMultiplier;
    sonic *= attributeScalingMultiplier;

    // % Increased Damage
    const globalInc = (stats.increasedDamage || 0) / 100;
    const isSpell = skill.tags.includes('Spell');
    const isAttack = skill.tags.includes('Attack');
    const isAoE = skill.tags.includes('AoE');
    const isProj = skill.tags.includes('Projectile');

    const spellInc = isSpell ? (stats.increasedSpellDamage || 0) / 100 : 0;
    const attackInc = isAttack ? (stats.increasedAttackDamage || 0) / 100 : 0;
    const aoeInc = isAoE ? (stats.increasedAreaDamage || 0) / 100 : 0;
    const projInc = isProj ? (stats.increasedProjectileDamage || 0) / 100 : 0;
    const elemInc = (stats.increasedElementalDamage || 0) / 100;

    phys *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + (stats.increasedPhysicalDamage || 0) / 100;
    fire *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + elemInc + (stats.increasedFireDamage || 0) / 100;
    cold *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + elemInc + (stats.increasedColdDamage || 0) / 100;
    lightning *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + elemInc + (stats.increasedLightningDamage || 0) / 100;
    chaos *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + (stats.increasedChaosDamage || 0) / 100;
    holy *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + elemInc + (stats.increasedHolyDamage || 0) / 100;
    arcane *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + (stats.increasedArcaneDamage || 0) / 100;
    acid *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + (stats.increasedAcidDamage || 0) / 100;
    sonic *= 1 + globalInc + attackInc + spellInc + aoeInc + projInc + (stats.increasedSonicDamage || 0) / 100;

    // More damage multipliers
    const moreMult = 1 + (stats.moreDamageMultiplier || 0);
    phys *= moreMult;
    fire *= moreMult;
    cold *= moreMult;
    lightning *= moreMult;
    chaos *= moreMult;
    holy *= moreMult;
    arcane *= moreMult;
    acid *= moreMult;
    sonic *= moreMult;

    let isCrit = false;
    let critMulti = (stats.critMultiplier || 150) / 100;

    if (!stats.unyieldingResolve) {
      const critRoll = Math.random() * 100;
      const totalCritChance = Math.min(100, Math.max(5, stats.critChance || 5));
      if (critRoll < totalCritChance) {
        isCrit = true;
        if (stats.prismaticSurge) {
          critMulti = 1.0;
        }
      }
    }

    return {
      physical: Math.max(0, phys),
      fire: Math.max(0, fire),
      cold: Math.max(0, cold),
      lightning: Math.max(0, lightning),
      chaos: Math.max(0, chaos),
      holy: Math.max(0, holy),
      arcane: Math.max(0, arcane),
      acid: Math.max(0, acid),
      sonic: Math.max(0, sonic),
      isCrit,
      critMultiplier: isCrit ? critMulti : 1.0,
      sourceEntityId: 'player',
      sourcePosition: { x: 0, y: 0 },
      penalties: {
        firePenetration: stats.firePenetration || 0,
        coldPenetration: stats.coldPenetration || 0,
        lightningPenetration: stats.lightningPenetration || 0,
        holyPenetration: stats.holyPenetration || 0,
        arcanePenetration: stats.arcanePenetration || 0,
      },
      igniteChance: isCrit ? 100 : (stats.chanceToIgnite || 0),
      freezeChance: isCrit ? 100 : (stats.chanceToFreeze || 0),
      shockChance: isCrit ? 100 : (stats.chanceToShock || 0),
      bleedChance: stats.chanceToBleed || 0,
      poisonChance: stats.chanceToPoison || 0,
      consecrateChance: stats.chanceToConsecrate || 0,
      corrodeChance: stats.chanceToCorrode || 0,
      staggerChance: stats.chanceToStagger || 0,
    };
  }

  public static applyDamageToTarget(
    dmg: DamageInstance,
    target: {
      armor: number;
      fireRes: number;
      coldRes: number;
      lightningRes: number;
      chaosRes: number;
      holyRes?: number;
      arcaneRes?: number;
      maxLife: number;
      currentLife: number;
      currentEnergyShield?: number;
      shockTakenMultiplier?: number;
      physicalAilmentResistance?: number;
      magicAilmentResistance?: number;
    }
  ): CalculatedDamageResult {
    let rawPhys = dmg.physical * dmg.critMultiplier;
    let rawFire = dmg.fire * dmg.critMultiplier;
    let rawCold = dmg.cold * dmg.critMultiplier;
    let rawLight = dmg.lightning * dmg.critMultiplier;
    let rawChaos = (dmg.chaos || 0) * dmg.critMultiplier;
    let rawHoly = (dmg.holy || 0) * dmg.critMultiplier;
    let rawArcane = (dmg.arcane || 0) * dmg.critMultiplier;
    let rawAcid = (dmg.acid || 0) * dmg.critMultiplier;
    let rawSonic = (dmg.sonic || 0) * dmg.critMultiplier;

    const shockMultiplier = 1 + (target.shockTakenMultiplier || 0);
    rawPhys *= shockMultiplier;
    rawFire *= shockMultiplier;
    rawCold *= shockMultiplier;
    rawLight *= shockMultiplier;
    rawChaos *= shockMultiplier;
    rawHoly *= shockMultiplier;
    rawArcane *= shockMultiplier;
    rawAcid *= shockMultiplier;
    rawSonic *= shockMultiplier;

    const armor = Math.max(0, target.armor);
    const armorReduction = armor > 0 && rawPhys > 0 ? armor / (armor + 5 * rawPhys) : 0;
    const finalPhys = rawPhys * (1 - Math.min(0.90, armorReduction));
    const finalSonic = rawSonic * (1 - Math.min(0.70, armorReduction * 0.7)); // Sonic ignores part of armor

    const firePen = dmg.penalties?.firePenetration || 0;
    const coldPen = dmg.penalties?.coldPenetration || 0;
    const lightPen = dmg.penalties?.lightningPenetration || 0;
    const holyPen = dmg.penalties?.holyPenetration || 0;
    const arcanePen = dmg.penalties?.arcanePenetration || 0;

    const effectiveFireRes = Math.max(-100, Math.min(75, target.fireRes - firePen)) / 100;
    const effectiveColdRes = Math.max(-100, Math.min(75, target.coldRes - coldPen)) / 100;
    const effectiveLightRes = Math.max(-100, Math.min(75, target.lightningRes - lightPen)) / 100;
    const effectiveChaosRes = Math.max(-100, Math.min(75, target.chaosRes)) / 100;
    const effectiveHolyRes = Math.max(-100, Math.min(75, (target.holyRes || 0) - holyPen)) / 100;
    const effectiveArcaneRes = Math.max(-100, Math.min(75, (target.arcaneRes || 0) - arcanePen)) / 100;

    const finalFire = rawFire * (1 - effectiveFireRes);
    const finalCold = rawCold * (1 - effectiveColdRes);
    const finalLight = rawLight * (1 - effectiveLightRes);
    const finalChaos = rawChaos * (1 - effectiveChaosRes);
    const finalHoly = rawHoly * (1 - effectiveHolyRes);
    const finalArcane = rawArcane * (1 - effectiveArcaneRes);
    const finalAcid = rawAcid; // Acid directly corrodes

    const totalDamage = Math.round(
      finalPhys + finalFire + finalCold + finalLight + finalChaos + finalHoly + finalArcane + finalAcid + finalSonic
    );

    let currentES = target.currentEnergyShield || 0;
    let absorbedByES = 0;
    let lifeDamage = totalDamage;

    if (currentES > 0) {
      absorbedByES = Math.min(currentES, totalDamage);
      lifeDamage = totalDamage - absorbedByES;
    }

    const isDead = target.currentLife - lifeDamage <= 0;
    const ailmentsApplied: StatusAilment[] = [];

    // Magic Ailment resistance check (from Intelligence)
    const magicAilmentRes = target.magicAilmentResistance || 0;
    const physAilmentRes = target.physicalAilmentResistance || 0;

    if (finalFire > 0 && Math.random() * 100 < ((dmg.igniteChance || 0) * (1 - magicAilmentRes / 100))) {
      ailmentsApplied.push({
        type: 'ignite',
        duration: 4.0,
        totalDuration: 4.0,
        damagePerSecond: finalFire * 0.4,
        magnitude: 1.0,
        sourceId: dmg.sourceEntityId,
      });
    }

    if (finalCold > 0 && Math.random() * 100 < ((dmg.freezeChance || 0) * (1 - magicAilmentRes / 100))) {
      ailmentsApplied.push({
        type: 'freeze',
        duration: 1.5,
        totalDuration: 1.5,
        damagePerSecond: 0,
        magnitude: 1.0,
        sourceId: dmg.sourceEntityId,
      });
    } else if (finalCold > 0) {
      ailmentsApplied.push({
        type: 'chill',
        duration: 3.0,
        totalDuration: 3.0,
        damagePerSecond: 0,
        magnitude: 0.3,
        sourceId: dmg.sourceEntityId,
      });
    }

    if (finalLight > 0 && Math.random() * 100 < ((dmg.shockChance || 0) * (1 - magicAilmentRes / 100))) {
      ailmentsApplied.push({
        type: 'shock',
        duration: 4.0,
        totalDuration: 4.0,
        damagePerSecond: 0,
        magnitude: 0.25,
        sourceId: dmg.sourceEntityId,
      });
    }

    if (finalPhys > 0 && Math.random() * 100 < ((dmg.bleedChance || 0) * (1 - physAilmentRes / 100))) {
      ailmentsApplied.push({
        type: 'bleed',
        duration: 5.0,
        totalDuration: 5.0,
        damagePerSecond: finalPhys * 0.35,
        magnitude: 1.0,
        sourceId: dmg.sourceEntityId,
      });
    }

    if ((finalChaos > 0 || finalAcid > 0) && Math.random() * 100 < ((dmg.poisonChance || 0) * (1 - magicAilmentRes / 100))) {
      ailmentsApplied.push({
        type: 'poison',
        duration: 3.0,
        totalDuration: 3.0,
        damagePerSecond: (finalChaos + finalAcid) * 0.25,
        magnitude: 1.0,
        sourceId: dmg.sourceEntityId,
      });
    }

    return {
      totalDamage,
      isCrit: dmg.isCrit,
      absorbedByES,
      lifeDamage,
      isDead,
      ailmentsApplied,
      damageByType: {
        physical: finalPhys,
        fire: finalFire,
        cold: finalCold,
        lightning: finalLight,
        chaos: finalChaos,
        holy: finalHoly,
        arcane: finalArcane,
        acid: finalAcid,
        sonic: finalSonic,
      },
    };
  }
}
