// src/components/HUD/MiniMap.tsx

import React from 'react';
import { GameEngine } from '../../engine/GameEngine';

interface MiniMapProps {
  engine: GameEngine;
}

export const MiniMap: React.FC<MiniMapProps> = ({ engine }) => {
  const mapW = engine.currentZone.mapWidth;
  const mapH = engine.currentZone.mapHeight;
  const mmW = 140;
  const mmH = 110;

  const playerNormX = engine.player.x / mapW;
  const playerNormY = engine.player.y / mapH;

  return (
    <div className="fixed top-4 right-4 z-30 bg-zinc-950/85 border border-zinc-700/80 rounded-lg p-1.5 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between px-1 pb-1 text-[11px] font-cinzel text-zinc-300 border-b border-zinc-800">
        <span className="font-semibold truncate max-w-[95px]">{engine.currentZone.name}</span>
        <span className="text-amber-400 font-mono">Lvl {engine.currentZone.monsterLevel}</span>
      </div>

      <div className="relative w-[140px] h-[110px] bg-zinc-900/90 rounded mt-1 overflow-hidden border border-zinc-800">
        {/* Enemies (Red dots) */}
        {engine.enemies.map((e) => {
          const ex = (e.x / mapW) * mmW;
          const ey = (e.y / mapH) * mmH;
          return (
            <div
              key={e.id}
              className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 ${
                e.isBoss
                  ? 'w-3 h-3 bg-amber-400 border border-amber-200 animate-pulse'
                  : e.rarity === 'rare'
                  ? 'w-2 h-2 bg-yellow-400'
                  : 'w-1 h-1 bg-red-500'
              }`}
              style={{ left: `${ex}px`, top: `${ey}px` }}
            />
          );
        })}

        {/* Player (Cyan dot) */}
        <div
          className="absolute w-2.5 h-2.5 bg-sky-400 rounded-full border border-white -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-sky-400/50"
          style={{ left: `${playerNormX * mmW}px`, top: `${playerNormY * mmH}px` }}
        />
      </div>

      {/* Kill progress in combat zone */}
      {!engine.currentZone.isTown && (
        <div className="mt-1.5 px-0.5">
          <div className="flex justify-between text-[9px] font-mono text-zinc-400">
            <span>Progress</span>
            <span className="text-zinc-200">
              {engine.currentZoneKills} / {engine.currentZone.targetKillCount}
            </span>
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-0.5">
            <div
              className="h-full bg-red-500 transition-all"
              style={{
                width: `${Math.min(100, (engine.currentZoneKills / (engine.currentZone.targetKillCount || 1)) * 100)}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
