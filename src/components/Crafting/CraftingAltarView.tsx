// src/components/Crafting/CraftingAltarView.tsx

import React, { useState } from 'react';
import { CURRENCY_DEFINITIONS } from '../../constants/crafting';
import { LootSystem } from '../../engine/LootSystem';
import { Player } from '../../engine/Player';
import { SoundSystem } from '../../engine/SoundSystem';
import { Currencies } from '../../types/character';
import { Item } from '../../types/items';
import { ItemTooltip } from '../Inventory/ItemTooltip';
import * as LucideIcons from 'lucide-react';

interface CraftingAltarViewProps {
  player: Player;
  soundSystem: SoundSystem;
  onClose: () => void;
  onCraftSuccess: () => void;
}

export const CraftingAltarView: React.FC<CraftingAltarViewProps> = ({
  player,
  soundSystem,
  onClose,
  onCraftSuccess,
}) => {
  const [selectedBagIndex, setSelectedBagIndex] = useState<number | null>(null);
  const [craftAnimation, setCraftAnimation] = useState(false);

  const selectedItem = selectedBagIndex !== null ? player.inventory[selectedBagIndex] : null;

  const handleApplyCurrency = (currencyKey: keyof Currencies) => {
    if (!selectedItem || selectedBagIndex === null) return;
    if ((player.currencies[currencyKey] || 0) <= 0) return;

    // Deduct currency
    player.currencies[currencyKey]--;

    // Execute craft logic
    let modified = { ...selectedItem };

    if (currencyKey === 'aetherShard' && modified.rarity === 'normal') {
      modified = LootSystem.generateItem(modified.itemLevel, 'magic', modified.baseId, player.stats);
    } else if (currencyKey === 'reshapingPrism' && modified.rarity === 'magic') {
      modified = LootSystem.generateItem(modified.itemLevel, 'magic', modified.baseId, player.stats);
    } else if (currencyKey === 'catalystOfCreation' && modified.rarity === 'normal') {
      modified = LootSystem.generateItem(modified.itemLevel, 'rare', modified.baseId, player.stats);
    } else if (currencyKey === 'entropySigil' && modified.rarity === 'rare') {
      modified = LootSystem.generateItem(modified.itemLevel, 'rare', modified.baseId, player.stats);
    } else if (currencyKey === 'cleansingDust' && (modified.rarity === 'magic' || modified.rarity === 'rare')) {
      modified = LootSystem.generateItem(modified.itemLevel, 'normal', modified.baseId, player.stats);
    } else if (currencyKey === 'temperingOil' && modified.category.startsWith('weapon_')) {
      modified.quality = Math.min(20, (modified.quality || 0) + 5);
    } else if (currencyKey === 'wardReinforcement' && modified.category.startsWith('armour_')) {
      modified.quality = Math.min(20, (modified.quality || 0) + 5);
    }

    player.inventory[selectedBagIndex] = modified;
    player.recalculateStats();

    // Trigger animations & sound
    setCraftAnimation(true);
    setTimeout(() => setCraftAnimation(false), 400);
    soundSystem.playCraftSuccess();
    onCraftSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Anvil className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">CRAFTING ALTAR</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-y-auto">
          {/* LEFT: ITEM ON ALTAR & BAG PICKER (6 cols) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div
              className={`bg-zinc-900/80 border-2 rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] transition-all ${
                craftAnimation ? 'border-amber-400 scale-102 shadow-2xl shadow-amber-400/20' : 'border-zinc-700'
              }`}
            >
              {selectedItem ? (
                <div className="flex flex-col items-center">
                  <ItemTooltip item={selectedItem} />
                  <button
                    onClick={() => setSelectedBagIndex(null)}
                    className="mt-3 text-xs text-zinc-400 hover:text-zinc-200 underline"
                  >
                    Remove from Altar
                  </button>
                </div>
              ) : (
                <div className="text-center text-zinc-500">
                  <LucideIcons.Sparkles className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                  <div className="font-cinzel text-sm text-zinc-300">Select an Item from Backpack below</div>
                </div>
              )}
            </div>

            {/* Bag picker */}
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase mb-2">Backpack Items</div>
              <div className="grid grid-cols-6 gap-2 bg-zinc-900/60 border border-zinc-800 p-2.5 rounded-xl">
                {player.inventory.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => item && setSelectedBagIndex(idx)}
                    className={`w-10 h-10 rounded border flex items-center justify-center cursor-pointer transition-all ${
                      selectedBagIndex === idx
                        ? 'border-amber-400 bg-amber-950/40'
                        : item
                        ? 'border-zinc-700 bg-zinc-900 hover:border-zinc-500'
                        : 'border-zinc-850 bg-zinc-950/40'
                    }`}
                  >
                    {item && <span className="text-xs font-mono">{item.name.substring(0, 2)}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CRAFTING CURRENCIES (6 cols) */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              Apply Crafting Currency
            </div>
            {Object.entries(CURRENCY_DEFINITIONS).map(([curKey, info]) => {
              const key = curKey as keyof Currencies;
              const count = player.currencies[key] || 0;
              const canApply = selectedItem && count > 0;

              return (
                <div
                  key={curKey}
                  className={`border rounded-xl p-3 flex items-center justify-between transition-all ${
                    canApply
                      ? 'bg-zinc-900/80 border-zinc-700 hover:border-amber-400'
                      : 'bg-zinc-950/50 border-zinc-850 opacity-50'
                  }`}
                >
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs" style={{ color: info.color }}>
                        {info.name}
                      </span>
                      <span className="text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
                        x{count}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{info.description}</div>
                  </div>

                  <button
                    onClick={() => handleApplyCurrency(key)}
                    disabled={!canApply}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                      canApply
                        ? 'bg-amber-600 hover:bg-amber-500 text-zinc-950 active:scale-95'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    Craft
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
