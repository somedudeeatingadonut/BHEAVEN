// src/components/HUD/LifeManaGlobes.tsx

import React from 'react';
import { CharacterStats } from '../../types/character';

interface LifeManaGlobesProps {
  stats: CharacterStats;
}

export const LifeManaGlobes: React.FC<LifeManaGlobesProps> = ({ stats }) => {
  const lifePct = Math.max(0, Math.min(1, stats.currentLife / (stats.maxLife || 1)));
  const manaPct = Math.max(0, Math.min(1, stats.currentMana / (stats.maxMana || 1)));
  const esPct = stats.maxEnergyShield > 0 ? Math.max(0, Math.min(1, stats.currentEnergyShield / stats.maxEnergyShield)) : 0;

  return (
    <div className="fixed bottom-3 left-0 right-0 pointer-events-none flex justify-between items-end px-6 z-30 select-none">
      {/* LIFE & ENERGY SHIELD GLOBE (LEFT) */}
      <div className="relative group pointer-events-auto flex flex-col items-center">
        <div className="relative w-28 h-28 rounded-full bg-zinc-950 border-4 border-zinc-700 shadow-2xl overflow-hidden flex items-center justify-center">
          {/* Life fluid */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900 via-red-600 to-red-500 transition-all duration-200"
            style={{ height: `${lifePct * 100}%` }}
          />

          {/* Energy Shield overlay */}
          {stats.maxEnergyShield > 0 && (
            <div
              className="absolute inset-0 border-4 border-cyan-400 rounded-full opacity-80 transition-all duration-300"
              style={{
                clipPath: `inset(${100 - esPct * 100}% 0 0 0)`,
                boxShadow: 'inset 0 0 15px rgba(6, 182, 212, 0.8)',
              }}
            />
          )}

          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none rounded-full" />

          {/* Text inside globe */}
          <div className="relative z-10 text-center font-mono font-bold drop-shadow-md">
            <div className="text-white text-base leading-tight">
              {Math.round(stats.currentLife)}
            </div>
            <div className="text-zinc-300 text-xs">/ {stats.maxLife}</div>
            {stats.maxEnergyShield > 0 && (
              <div className="text-cyan-300 text-xs font-semibold">
                ES: {Math.round(stats.currentEnergyShield)}
              </div>
            )}
          </div>
        </div>

        {/* Life Tooltip */}
        <div className="absolute -top-20 left-0 bg-zinc-900/95 border border-zinc-700 px-3 py-2 rounded text-xs text-zinc-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap z-50">
          <div className="font-bold text-red-400">Life: {Math.round(stats.currentLife)} / {stats.maxLife}</div>
          <div className="text-zinc-400">Regen: +{stats.lifeRegen.toFixed(1)}/sec</div>
          {stats.maxEnergyShield > 0 && (
            <div className="text-cyan-400 font-semibold mt-1">
              Energy Shield: {Math.round(stats.currentEnergyShield)} / {stats.maxEnergyShield}
            </div>
          )}
        </div>
      </div>

      {/* MANA GLOBE (RIGHT) */}
      <div className="relative group pointer-events-auto flex flex-col items-center">
        <div className="relative w-28 h-28 rounded-full bg-zinc-950 border-4 border-zinc-700 shadow-2xl overflow-hidden flex items-center justify-center">
          {/* Mana fluid */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 via-blue-600 to-sky-500 transition-all duration-200"
            style={{ height: `${stats.hemomancy ? 0 : manaPct * 100}%` }}
          />

          {/* Hemomancy indicator if active */}
          {stats.hemomancy && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-950/80 text-red-300 text-[10px] font-bold text-center px-2">
              HEMOMANCY
            </div>
          )}

          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none rounded-full" />

          {/* Text inside globe */}
          <div className="relative z-10 text-center font-mono font-bold drop-shadow-md">
            {!stats.hemomancy ? (
              <>
                <div className="text-white text-base leading-tight">
                  {Math.round(stats.currentMana)}
                </div>
                <div className="text-zinc-300 text-xs">/ {stats.maxMana}</div>
              </>
            ) : (
              <div className="text-red-400 text-xs">0 / 0</div>
            )}
          </div>
        </div>

        {/* Mana Tooltip */}
        <div className="absolute -top-16 right-0 bg-zinc-900/95 border border-zinc-700 px-3 py-2 rounded text-xs text-zinc-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap z-50">
          {!stats.hemomancy ? (
            <>
              <div className="font-bold text-blue-400">Mana: {Math.round(stats.currentMana)} / {stats.maxMana}</div>
              <div className="text-zinc-400">Regen: +{stats.manaRegen.toFixed(1)}/sec</div>
            </>
          ) : (
            <div className="text-red-400 font-bold">Hemomancy active (Skills cost Life)</div>
          )}
        </div>
      </div>
    </div>
  );
};
