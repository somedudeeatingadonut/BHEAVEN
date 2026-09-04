// src/components/HUD/ExperienceBar.tsx

import React from 'react';
import { Player } from '../../engine/Player';

interface ExperienceBarProps {
  player: Player;
}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({ player }) => {
  const xpPct = Math.max(0, Math.min(1, player.experience / (player.experienceToNextLevel || 1)));

  return (
    <div className="fixed bottom-0 left-0 right-0 h-2 bg-zinc-950 border-t border-zinc-800 z-40">
      {/* XP Bar Fill */}
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 transition-all duration-150"
        style={{ width: `${xpPct * 100}%` }}
      />
      {/* 10-segment tick marks like PoE */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-zinc-900/80" />
        ))}
      </div>
    </div>
  );
};
