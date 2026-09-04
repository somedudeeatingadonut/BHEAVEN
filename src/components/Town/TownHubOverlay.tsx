// src/components/Town/TownHubOverlay.tsx

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface TownHubOverlayProps {
  onOpenStash: () => void;
  onOpenCrafting: () => void;
  onOpenWorldMap: () => void;
  onOpenPassiveTree: () => void;
  onOpenQuests: () => void;
}

export const TownHubOverlay: React.FC<TownHubOverlayProps> = ({
  onOpenStash,
  onOpenCrafting,
  onOpenWorldMap,
  onOpenPassiveTree,
  onOpenQuests,
}) => {
  return (
    <div className="fixed top-4 left-4 z-30 flex flex-col gap-2 select-none">
      <div className="bg-zinc-950/85 border border-zinc-700/80 rounded-xl p-3 shadow-2xl backdrop-blur-md max-w-xs">
        <div className="flex items-center gap-2 text-amber-400 font-cinzel font-bold text-sm border-b border-zinc-800 pb-1.5 mb-2">
          <LucideIcons.Castle className="w-4 h-4" />
          <span>HAVEN'S WATCH ENCAMPMENT</span>
        </div>
        <p className="text-[11px] text-zinc-400 mb-3">
          Safe haven. Walk the plaza, test skills on the dummies, then open the Waypoint to start an expedition.
        </p>
        <div className="text-[10px] font-mono text-zinc-500 mb-3 leading-relaxed space-y-0.5">
          <div><span className="text-amber-400">WASD</span> move  •  <span className="text-amber-400">Mouse</span> aim</div>
          <div><span className="text-amber-400">Skills auto-fire</span> at your cursor</div>
          <div><span className="text-amber-400">SPACE</span> dash  •  <span className="text-amber-400">SHIFT</span> Focus Time</div>
          <div><span className="text-amber-400">LMB/RMB</span> force skills  •  <span className="text-amber-400">1-5</span> flasks</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onOpenWorldMap}
            className="flex items-center gap-1.5 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-600 text-amber-300 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
          >
            <LucideIcons.Compass className="w-4 h-4" />
            Waypoint Portal
          </button>
          <button
            onClick={onOpenStash}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
          >
            <LucideIcons.Archive className="w-4 h-4" />
            Town Stash
          </button>
          <button
            onClick={onOpenCrafting}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
          >
            <LucideIcons.Anvil className="w-4 h-4" />
            Crafting Altar
          </button>
          <button
            onClick={onOpenQuests}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
          >
            <LucideIcons.BookOpen className="w-4 h-4" />
            Quest Log
          </button>
        </div>
      </div>
    </div>
  );
};
