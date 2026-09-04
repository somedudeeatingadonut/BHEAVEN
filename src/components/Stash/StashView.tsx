// src/components/Stash/StashView.tsx

import React, { useState } from 'react';
import { Player } from '../../engine/Player';
import { Item } from '../../types/items';
import { ItemTooltip } from '../Inventory/ItemTooltip';
import * as LucideIcons from 'lucide-react';

interface StashViewProps {
  player: Player;
  onClose: () => void;
  onStashUpdated: () => void;
}

export const StashView: React.FC<StashViewProps> = ({ player, onClose, onStashUpdated }) => {
  const [activeTab, setActiveTab] = useState<'gear' | 'currencies' | 'uniques'>('gear');
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  const handleDepositToStash = (item: Item, bagIdx: number) => {
    const emptyStashIdx = player.stash.findIndex((s) => s === null);
    if (emptyStashIdx === -1) return; // Stash full

    player.stash[emptyStashIdx] = item;
    player.inventory[bagIdx] = null;
    onStashUpdated();
  };

  const handleWithdrawFromStash = (item: Item, stashIdx: number) => {
    const emptyBagIdx = player.inventory.findIndex((s) => s === null);
    if (emptyBagIdx === -1) return; // Bag full

    player.inventory[emptyBagIdx] = item;
    player.stash[stashIdx] = null;
    onStashUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Archive className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">TOWN STASH CHEST</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Layout: Stash Grid on Left, Backpack on Right */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-y-auto">
          {/* STASH (7 cols) */}
          <div className="md:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">Stash (72 Slots)</h3>
              <span className="text-[11px] text-zinc-400">Click item to withdraw to backpack</span>
            </div>

            <div className="grid grid-cols-8 gap-1.5 bg-zinc-950/60 border border-zinc-850 p-2.5 rounded-lg max-h-[380px] overflow-y-auto">
              {player.stash.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => item && setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => item && handleWithdrawFromStash(item, idx)}
                  className={`w-11 h-11 rounded border flex items-center justify-center cursor-pointer transition-all ${
                    item
                      ? item.rarity === 'unique'
                        ? 'border-amber-500 bg-amber-950/40'
                        : item.rarity === 'rare'
                        ? 'border-yellow-400 bg-yellow-950/40'
                        : item.rarity === 'magic'
                        ? 'border-blue-400 bg-blue-950/40'
                        : 'border-zinc-600 bg-zinc-900'
                      : 'border-zinc-850 bg-zinc-950/40 hover:border-zinc-700'
                  }`}
                >
                  {item && <span className="text-[10px] font-mono">{item.name.substring(0, 2)}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* BACKPACK (5 cols) */}
          <div className="md:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono font-bold text-sky-400 uppercase">Backpack (36 Slots)</h3>
              <span className="text-[11px] text-zinc-400">Click to deposit</span>
            </div>

            <div className="grid grid-cols-6 gap-1.5 bg-zinc-950/60 border border-zinc-850 p-2.5 rounded-lg">
              {player.inventory.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => item && setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => item && handleDepositToStash(item, idx)}
                  className={`w-10 h-10 rounded border flex items-center justify-center cursor-pointer transition-all ${
                    item
                      ? item.rarity === 'unique'
                        ? 'border-amber-500 bg-amber-950/40'
                        : item.rarity === 'rare'
                        ? 'border-yellow-400 bg-yellow-950/40'
                        : item.rarity === 'magic'
                        ? 'border-blue-400 bg-blue-950/40'
                        : 'border-zinc-600 bg-zinc-900'
                      : 'border-zinc-850 bg-zinc-950/40'
                  }`}
                >
                  {item && <span className="text-[10px] font-mono">{item.name.substring(0, 2)}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredItem && (
        <div className="fixed top-12 right-12 pointer-events-none z-50">
          <ItemTooltip item={hoveredItem} />
        </div>
      )}
    </div>
  );
};
