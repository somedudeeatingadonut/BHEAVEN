// src/components/GameOverModal.tsx

import React from 'react';
import { GameEngine } from '../engine/GameEngine';
import * as LucideIcons from 'lucide-react';

interface GameOverModalProps {
  engine: GameEngine;
  onRespawn: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ engine, onRespawn }) => {
  const handleRespawnTown = () => {
    engine.changeZone('town_havens_watch');
    onRespawn();
  };

  const handleRespawnCheckpoint = () => {
    engine.initMap(engine.currentZone);
    onRespawn();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-md select-none">
      <div className="bg-zinc-950 border-2 border-red-800/80 rounded-2xl w-full max-w-md shadow-2xl p-6 text-center space-y-4">
        <LucideIcons.Skull className="w-12 h-12 mx-auto text-red-500 animate-pulse" />
        <h2 className="font-cinzel font-bold text-2xl text-red-400">YOU HAVE FALLEN</h2>

        <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl text-xs text-zinc-300 space-y-2 text-left">
          <p className="font-semibold text-amber-400">Astris is ruthless, but death is not the end!</p>
          <p className="text-zinc-400">
            This is a true ARPG progression game, not a roguelike. You keep all your gear, inventory, skill tree passives, and levels.
          </p>
          <p className="text-red-400/90 font-mono text-[11px]">
            Death Penalty: Lost 10% current level experience (Level cannot decrease).
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={handleRespawnTown}
            className="w-full bg-amber-600 hover:bg-amber-500 text-zinc-950 py-2.5 rounded-xl font-cinzel font-bold text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-98"
          >
            Respawn in Haven's Watch
          </button>
          <button
            onClick={handleRespawnCheckpoint}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2.5 rounded-xl font-cinzel font-bold text-xs transition-all active:scale-98"
          >
            Revive at Zone Checkpoint
          </button>
        </div>
      </div>
    </div>
  );
};
