// src/components/Inventory/InventoryView.tsx

import React, { useState } from 'react';
import { Player } from '../../engine/Player';
import { EquipmentSlot, Item } from '../../types/items';
import { ItemTooltip } from './ItemTooltip';
import * as LucideIcons from 'lucide-react';

interface InventoryViewProps {
  player: Player;
  onClose: () => void;
  onInventoryUpdated: () => void;
}

export const InventoryView: React.FC<InventoryViewProps> = ({ player, onClose, onInventoryUpdated }) => {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
    return <IconComponent className="w-6 h-6" />;
  };

  const handleEquipFromBag = (item: Item, bagIndex: number) => {
    // Determine equipment slot
    let targetSlot: EquipmentSlot | null = null;
    if (item.category.startsWith('weapon_')) targetSlot = 'mainHand';
    else if (item.category === 'armour_shield' || item.category === 'armour_quiver') targetSlot = 'offHand';
    else if (item.category === 'armour_helmet') targetSlot = 'helmet';
    else if (item.category === 'armour_body') targetSlot = 'bodyArmor';
    else if (item.category === 'armour_gloves') targetSlot = 'gloves';
    else if (item.category === 'armour_boots') targetSlot = 'boots';
    else if (item.category === 'accessory_amulet') targetSlot = 'amulet';
    else if (item.category === 'accessory_belt') targetSlot = 'belt';
    else if (item.category === 'accessory_ring') {
      targetSlot = player.equipment.ring1 ? 'ring2' : 'ring1';
    } else if (item.category === 'flask') {
      const emptyFlask = (['flask1', 'flask2', 'flask3', 'flask4', 'flask5'] as EquipmentSlot[]).find(
        (f) => !player.equipment[f]
      );
      targetSlot = emptyFlask || 'flask1';
    }

    if (!targetSlot) return;

    // Swap items
    const currentlyEquipped = player.equipment[targetSlot] || null;
    player.equipment[targetSlot] = item;
    player.inventory[bagIndex] = currentlyEquipped;
    player.recalculateStats();
    onInventoryUpdated();
  };

  const handleUnequip = (slot: EquipmentSlot) => {
    const item = player.equipment[slot];
    if (!item) return;

    const emptyIdx = player.inventory.findIndex((s) => s === null);
    if (emptyIdx === -1) return; // Bag full

    player.inventory[emptyIdx] = item;
    player.equipment[slot] = null;
    player.recalculateStats();
    onInventoryUpdated();
  };

  const handleAutoSort = () => {
    const items = player.inventory.filter((i): i is Item => i !== null);
    items.sort((a, b) => {
      const rarities = ['unique', 'rare', 'magic', 'normal', 'currency'];
      const rA = rarities.indexOf(a.rarity);
      const rB = rarities.indexOf(b.rarity);
      if (rA !== rB) return rA - rB;
      return b.itemLevel - a.itemLevel;
    });

    const newBag = new Array(36).fill(null);
    items.forEach((it, idx) => (newBag[idx] = it));
    player.inventory = newBag;
    onInventoryUpdated();
  };

  const renderSlot = (slot: EquipmentSlot, label: string, iconPlaceholder: string) => {
    const item = player.equipment[slot];
    return (
      <div
        onMouseEnter={() => item && setHoveredItem(item)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => handleUnequip(slot)}
        className={`relative w-14 h-14 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${
          item
            ? item.rarity === 'unique'
              ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/20'
              : item.rarity === 'rare'
              ? 'bg-yellow-950/40 border-yellow-400'
              : item.rarity === 'magic'
              ? 'bg-blue-950/40 border-blue-400'
              : 'bg-zinc-900 border-zinc-500'
            : 'bg-zinc-900/60 border-zinc-800 text-zinc-600 hover:border-zinc-700'
        }`}
      >
        {item ? (
          <div style={{ color: item.iconColor || '#e4e4e7' }}>{getIcon(item.icon)}</div>
        ) : (
          <span className="text-[10px] font-mono text-zinc-500">{label}</span>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Shield className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">EQUIPMENT & INVENTORY</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAutoSort}
              className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            >
              <LucideIcons.ArrowDownAZ className="w-4 h-4" />
              Auto Sort
            </button>
            <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
              <LucideIcons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Layout: Paperdoll on Left, Bag Grid on Right */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-y-auto">
          {/* LEFT: EQUIPMENT PAPERDOLL (5 cols) */}
          <div className="md:col-span-5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 flex flex-col items-center justify-between">
            <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              Character Paperdoll
            </h3>

            {/* Helmet */}
            <div className="flex justify-center mb-3">
              {renderSlot('helmet', 'Helm', 'Crown')}
            </div>

            {/* Amulet, Body Armor, Offhand/Quiver */}
            <div className="flex items-center gap-3 mb-3">
              {renderSlot('amulet', 'Amulet', 'Gem')}
              {renderSlot('bodyArmor', 'Chest', 'Shirt')}
              {renderSlot('belt', 'Belt', 'Link')}
            </div>

            {/* Weapons (Main Hand, Offhand) */}
            <div className="flex items-center gap-6 mb-3">
              {renderSlot('mainHand', 'Main', 'Sword')}
              {renderSlot('offHand', 'Offhand', 'Shield')}
            </div>

            {/* Gloves, Boots, Rings */}
            <div className="flex items-center gap-3 mb-4">
              {renderSlot('gloves', 'Gloves', 'Hand')}
              {renderSlot('ring1', 'Ring 1', 'CircleDot')}
              {renderSlot('ring2', 'Ring 2', 'CircleDot')}
              {renderSlot('boots', 'Boots', 'Footprints')}
            </div>

            {/* Flasks Row */}
            <div className="border-t border-zinc-800 pt-3 w-full">
              <div className="text-[10px] font-mono text-zinc-400 mb-1.5 text-center">Utility Flasks (1–5)</div>
              <div className="flex justify-center gap-1.5">
                {renderSlot('flask1', 'F1', 'FlaskConical')}
                {renderSlot('flask2', 'F2', 'FlaskConical')}
                {renderSlot('flask3', 'F3', 'FlaskConical')}
                {renderSlot('flask4', 'F4', 'FlaskConical')}
                {renderSlot('flask5', 'F5', 'FlaskConical')}
              </div>
            </div>
          </div>

          {/* RIGHT: INVENTORY BAG GRID (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Backpack (36 Slots)
                </h3>
                <span className="text-[11px] text-zinc-400">Right click item to equip</span>
              </div>

              {/* 6x6 Grid */}
              <div className="grid grid-cols-6 gap-2 bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-xl">
                {player.inventory.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => item && setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => item && handleEquipFromBag(item, idx)}
                    className={`relative w-12 h-12 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                      item
                        ? item.rarity === 'unique'
                          ? 'bg-amber-950/40 border-amber-500 hover:border-amber-300'
                          : item.rarity === 'rare'
                          ? 'bg-yellow-950/40 border-yellow-400 hover:border-yellow-200'
                          : item.rarity === 'magic'
                          ? 'bg-blue-950/40 border-blue-400 hover:border-blue-200'
                          : 'bg-zinc-900 border-zinc-600 hover:border-zinc-400'
                        : 'bg-zinc-950/40 border-zinc-850 hover:border-zinc-800'
                    }`}
                  >
                    {item && (
                      <div style={{ color: item.iconColor || '#e4e4e7' }}>{getIcon(item.icon)}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CURRENCIES POUCH */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 mt-4">
              <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase mb-2">
                Crafting Materials Pouch
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-yellow-400" title="Gold">
                  <LucideIcons.Coins className="w-3.5 h-3.5" />
                  <span>{player.currencies.gold}</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400" title="Aether Shards">
                  <LucideIcons.Sparkles className="w-3.5 h-3.5" />
                  <span>{player.currencies.aetherShard}</span>
                </div>
                <div className="flex items-center gap-1.5 text-yellow-300" title="Catalyst of Creation">
                  <LucideIcons.Sun className="w-3.5 h-3.5" />
                  <span>{player.currencies.catalystOfCreation}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-500" title="Entropy Sigils">
                  <LucideIcons.Disc className="w-3.5 h-3.5" />
                  <span>{player.currencies.entropySigil}</span>
                </div>
                <div className="flex items-center gap-1.5 text-orange-400" title="Sovereign Runes">
                  <LucideIcons.Crown className="w-3.5 h-3.5" />
                  <span>{player.currencies.sovereignRune}</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-400" title="Harmonic Prisms">
                  <LucideIcons.Eye className="w-3.5 h-3.5" />
                  <span>{player.currencies.divinePrism}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ITEM HOVER TOOLTIP */}
      {hoveredItem && (
        <div className="fixed top-12 right-12 pointer-events-none z-50">
          <ItemTooltip item={hoveredItem} />
        </div>
      )}
    </div>
  );
};
