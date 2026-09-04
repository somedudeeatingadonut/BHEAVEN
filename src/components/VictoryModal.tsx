// src/components/VictoryModal.tsx

import React from 'react';
import { GameEngine } from '../engine/GameEngine';
import { ZoneDefinition } from '../types/maps';
import * as LucideIcons from 'lucide-react';

interface VictoryModalProps {
  engine: GameEngine;
  zone: ZoneDefinition;
  onClose: () => void;
  onReturnToTown: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({ engine, zone, onClose, onReturnToTown }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md select-none">
      <div className="bg-zinc-950 border-2 border-amber-500/80 rounded-2xl w-full max-w-lg shadow-2xl p-6 text-center space-y-4">
        <LucideIcons.Trophy className="w-14 h-14 mx-auto text-amber-400 animate-bounce" />
        <div>
          <h2 className="font-cinzel font-bold text-2xl text-amber-300">ZONE CONQUERED!</h2>
          <div className="text-zinc-400 text-xs font-mono mt-1">Boss Vanquished: {zone.bossDefinition.name}</div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl text-xs text-zinc-300 space-y-2 text-left">
          <div className="text-emerald-400 font-bold">Reward & Quest Progress Claimed!</div>
          <p className="text-zinc-400">
            Check your inventory and ground loot for powerful randomized rare and unique items! Any completed quest rewards (Passive Points, Respec Points, Orbs) have been deposited to your character.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onReturnToTown}
            className="flex-1 bg-amber-600 hover:bg-amber-500 text-zinc-950 py-2.5 rounded-xl font-cinzel font-bold text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-98"
          >
            Portal to Haven's Watch
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2.5 rounded-xl font-cinzel font-bold text-xs transition-all active:scale-98"
          >
            Continue Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
