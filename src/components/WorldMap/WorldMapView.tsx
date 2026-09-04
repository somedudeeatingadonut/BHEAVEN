// src/components/WorldMap/WorldMapView.tsx

import React from 'react';
import { ZONES } from '../../constants/mapsData';
import { GameEngine } from '../../engine/GameEngine';
import * as LucideIcons from 'lucide-react';

interface WorldMapViewProps {
  engine: GameEngine;
  onClose: () => void;
  onSelectZone: (zoneId: string) => void;
}

export const WorldMapView: React.FC<WorldMapViewProps> = ({ engine, onClose, onSelectZone }) => {
  const act1Zones = ['town_havens_watch', 'ashen_coast', 'murkwood_mire', 'aetherial_chasm', 'sunken_citadel', 'magma_caldera'];
  const atlasZones = ['astral_catacomb_t1', 'astral_spires_t5', 'astral_void_t10'];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Compass className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">WORLD ATLAS & WAYPOINTS</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Zones Grid */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* ACT 1 STORY PROGRESSION */}
          <div>
            <h3 className="font-cinzel font-bold text-amber-400 text-sm mb-3 flex items-center gap-2">
              <LucideIcons.MapPin className="w-4 h-4" />
              ACT 1 — THE FORBIDDEN COAST
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {act1Zones.map((zoneId) => {
                const zone = ZONES[zoneId];
                const isUnlocked = engine.unlockedZoneIds.includes(zoneId);
                const isCurrent = engine.currentZone.id === zoneId;

                return (
                  <div
                    key={zoneId}
                    className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                      isCurrent
                        ? 'bg-amber-950/30 border-amber-500 shadow-lg shadow-amber-500/10'
                        : isUnlocked
                        ? 'bg-zinc-900/70 border-zinc-700 hover:border-zinc-500'
                        : 'bg-zinc-950/40 border-zinc-850 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-cinzel font-bold text-sm text-zinc-200">{zone.name}</span>
                        <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                          {zone.isTown ? 'SAFE TOWN' : `LVL ${zone.monsterLevel}`}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs line-clamp-2 my-1">{zone.description}</p>
                      {!zone.isTown && (
                        <div className="text-[11px] text-red-400 font-mono mt-1">
                          Boss: {zone.bossDefinition.name}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-2 border-t border-zinc-800 flex justify-between items-center">
                      {isCurrent ? (
                        <span className="text-xs font-mono font-bold text-amber-400">Current Zone</span>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => {
                            onSelectZone(zoneId);
                            onClose();
                          }}
                          className="bg-amber-600 hover:bg-amber-500 text-zinc-950 px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all"
                        >
                          Travel Waypoint
                        </button>
                      ) : (
                        <span className="text-xs font-mono text-zinc-500">Locked (Complete prior quest)</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ATLAS ENDGAME MAPS */}
          <div className="border-t border-zinc-800 pt-5">
            <h3 className="font-cinzel font-bold text-purple-400 text-sm mb-3 flex items-center gap-2">
              <LucideIcons.Globe className="w-4 h-4" />
              ENDGAME ATLAS MAP DEVICE (TIER 1 - 10)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {atlasZones.map((zoneId) => {
                const zone = ZONES[zoneId];
                const isUnlocked = engine.unlockedZoneIds.includes(zoneId);
                const isCurrent = engine.currentZone.id === zoneId;

                return (
                  <div
                    key={zoneId}
                    className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                      isCurrent
                        ? 'bg-purple-950/40 border-purple-500'
                        : isUnlocked
                        ? 'bg-zinc-900/70 border-zinc-700 hover:border-purple-400'
                        : 'bg-zinc-950/40 border-zinc-850 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-cinzel font-bold text-sm text-zinc-200">{zone.name}</span>
                        <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                          TIER {zone.tier}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs line-clamp-2 my-1">{zone.description}</p>
                      <div className="text-[11px] text-purple-300 font-mono mt-1">
                        Boss: {zone.bossDefinition.name}
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-zinc-800 flex justify-between items-center">
                      {isCurrent ? (
                        <span className="text-xs font-mono font-bold text-purple-400">Current Map</span>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => {
                            onSelectZone(zoneId);
                            onClose();
                          }}
                          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all"
                        >
                          Activate Map
                        </button>
                      ) : (
                        <span className="text-xs font-mono text-zinc-500">Defeat Molten Core Titan to unlock</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
