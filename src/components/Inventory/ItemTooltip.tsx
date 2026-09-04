// src/components/Inventory/ItemTooltip.tsx

import React from 'react';
import { Item } from '../../types/items';

interface ItemTooltipProps {
  item: Item;
}

export const ItemTooltip: React.FC<ItemTooltipProps> = ({ item }) => {
  const getRarityColors = () => {
    switch (item.rarity) {
      case 'unique':
        return {
          banner: 'bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-amber-600',
          title: 'text-amber-500',
          border: 'border-amber-600/80',
        };
      case 'rare':
        return {
          banner: 'bg-gradient-to-r from-yellow-950 via-yellow-900 to-yellow-950 border-yellow-500',
          title: 'text-yellow-300',
          border: 'border-yellow-500/80',
        };
      case 'magic':
        return {
          banner: 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border-blue-500',
          title: 'text-blue-400',
          border: 'border-blue-500/80',
        };
      case 'currency':
        return {
          banner: 'bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-amber-400',
          title: 'text-amber-200',
          border: 'border-amber-400/80',
        };
      default:
        return {
          banner: 'bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-zinc-500',
          title: 'text-zinc-100',
          border: 'border-zinc-500/80',
        };
    }
  };

  const colors = getRarityColors();

  return (
    <div
      className={`w-80 bg-zinc-950/98 border-2 ${colors.border} rounded-2xl shadow-2xl p-0 overflow-hidden text-xs select-none backdrop-blur-md z-50`}
    >
      {/* Header Banner */}
      <div className={`p-2.5 text-center border-b ${colors.banner}`}>
        <h4 className={`font-cinzel font-bold text-sm leading-tight ${colors.title}`}>{item.name}</h4>
        {item.rarity !== 'normal' && (
          <div className="text-[11px] text-zinc-400 font-serif mt-0.5">{item.baseName}</div>
        )}
      </div>

      <div className="p-3 space-y-2.5">
        {/* Quality & Equip Load & Item Level */}
        <div className="flex justify-between text-[11px] text-zinc-400 border-b border-zinc-850 pb-1.5 font-mono">
          <span>Quality: <b className="text-sky-400">+{item.quality || 0}%</b></span>
          {item.equipLoad > 0 && <span>Load: <b className="text-amber-400">{item.equipLoad}</b></span>}
          <span>iLvl: <b className="text-zinc-200">{item.itemLevel}</b></span>
        </div>

        {/* WEAPON ATTRIBUTE SCALINGS (Strength, Dexterity, Wisdom, Luck, Willpower) */}
        {item.scalings && item.scalings.length > 0 && (
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2 font-mono text-[11px] space-y-1">
            <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
              Attribute Damage Scalings
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.scalings.map((sc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-700"
                >
                  <span className="capitalize text-zinc-300 font-semibold">{sc.stat}:</span>
                  <span
                    className={`font-bold ${
                      sc.grade === 'S'
                        ? 'text-amber-400'
                        : sc.grade === 'A'
                        ? 'text-emerald-400'
                        : sc.grade === 'B'
                        ? 'text-sky-400'
                        : sc.grade === 'C'
                        ? 'text-blue-300'
                        : 'text-zinc-400'
                    }`}
                  >
                    [{sc.grade}: +{(sc.percentPerPoint * 100).toFixed(1)}%]
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Base Numerical Stats */}
        <div className="space-y-1 text-zinc-300 font-mono text-[11px]">
          {item.physicalDamageMin !== undefined && item.physicalDamageMax !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Physical Damage:</span>
              <span className="text-sky-300 font-bold">
                {item.physicalDamageMin} - {item.physicalDamageMax}
              </span>
            </div>
          )}
          {item.attackSpeed !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Attacks per Second:</span>
              <span className="text-sky-300 font-bold">{item.attackSpeed.toFixed(2)}</span>
            </div>
          )}
          {item.critChance !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Critical Strike Chance:</span>
              <span className="text-sky-300 font-bold">{item.critChance.toFixed(1)}%</span>
            </div>
          )}
          {item.armor !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Armour:</span>
              <span className="text-sky-300 font-bold">{item.armor}</span>
            </div>
          )}
          {item.evasion !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Evasion Rating:</span>
              <span className="text-sky-300 font-bold">{item.evasion}</span>
            </div>
          )}
          {item.energyShield !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Energy Shield:</span>
              <span className="text-sky-300 font-bold">{item.energyShield}</span>
            </div>
          )}
          {item.blockChance !== undefined && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Chance to Block:</span>
              <span className="text-sky-300 font-bold">{item.blockChance}%</span>
            </div>
          )}
        </div>

        {/* Requirements */}
        {(item.reqLevel > 1 || item.reqStr > 0 || item.reqDex > 0 || item.reqInt > 0) && (
          <div className="text-[10px] text-zinc-400 border-t border-zinc-800 pt-1.5 font-mono">
            Requires{' '}
            {item.reqLevel > 1 && <span>Level <b className="text-zinc-200">{item.reqLevel}</b> </span>}
            {item.reqStr > 0 && <span>, <b className="text-red-400">{item.reqStr}</b> Str </span>}
            {item.reqDex > 0 && <span>, <b className="text-emerald-400">{item.reqDex}</b> Dex </span>}
            {item.reqInt > 0 && <span>, <b className="text-blue-400">{item.reqInt}</b> Int </span>}
          </div>
        )}

        {/* Implicit Modifier */}
        {item.implicit && (
          <div className="border-t border-b border-zinc-800 py-1.5 text-sky-300 font-medium text-center">
            {item.implicit.text}
          </div>
        )}

        {/* Explicit Affixes */}
        {(item.prefixes.length > 0 || item.suffixes.length > 0) && (
          <div className="space-y-1 text-sky-200">
            {item.prefixes.map((p, i) => (
              <div key={`p_${i}`} className="leading-snug">
                {p.text}
              </div>
            ))}
            {item.suffixes.map((s, i) => (
              <div key={`s_${i}`} className="leading-snug">
                {s.text}
              </div>
            ))}
          </div>
        )}

        {/* Unique Modifiers */}
        {item.uniqueModifiers && item.uniqueModifiers.length > 0 && (
          <div className="space-y-1 text-amber-200 font-medium">
            {item.uniqueModifiers.map((mod, i) => (
              <div key={i} className="leading-snug">
                {mod}
              </div>
            ))}
          </div>
        )}

        {/* Unique Flavor Text */}
        {item.flavorText && (
          <div className="border-t border-zinc-850 pt-2 text-[10px] text-amber-600/90 italic text-center font-serif leading-relaxed">
            "{item.flavorText}"
          </div>
        )}
      </div>
    </div>
  );
};
