// src/components/SlotSelectModal.tsx

import React from 'react';
import { PASSIVE_TREE_DATA } from '../constants/passiveTreeData';
import { SaveSlotsMap, SaveSystem } from '../engine/SaveSystem';
import { CharacterSaveData, SaveSlotId } from '../types/character';
import * as LucideIcons from 'lucide-react';

interface SlotSelectModalProps {
  currentSlotId: SaveSlotId;
  onSelectSlotToPlay: (slotId: SaveSlotId, charData: CharacterSaveData) => void;
  onCreateNewHeroInSlot: (slotId: SaveSlotId) => void;
  onClose?: () => void;
  canClose?: boolean;
}

export const SlotSelectModal: React.FC<SlotSelectModalProps> = ({
  currentSlotId,
  onSelectSlotToPlay,
  onCreateNewHeroInSlot,
  onClose,
  canClose = true,
}) => {
  const slots: SaveSlotsMap = SaveSystem.getSlots();

  const slotKeys: { id: SaveSlotId; label: string; badge: string }[] = [
    { id: 'slot_1', label: 'Save Slot 1 (Left)', badge: 'PRIMARY PLAYER SLOT' },
    { id: 'slot_2', label: 'Save Slot 2 (Middle)', badge: 'SECONDARY SLOT' },
    { id: 'slot_3', label: 'Save Slot 3 (Right)', badge: 'TERTIARY SLOT' },
  ];

  const handleDeleteSlot = (slotId: SaveSlotId, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Are you sure you want to delete the hero in ${slotId.toUpperCase()}?`)) {
      SaveSystem.deleteSlot(slotId);
      window.location.reload();
    }
  };

  const handleExportSlot = (charData: CharacterSaveData, e: React.MouseEvent) => {
    e.stopPropagation();
    SaveSystem.exportSaveToFile(charData);
  };

  const handleImportToSlot = (slotId: SaveSlotId, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      const loaded = SaveSystem.importSaveFromJSON(content, slotId);
      if (loaded) {
        onSelectSlotToPlay(slotId, loaded);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-3xl w-full max-w-5xl shadow-2xl flex flex-col overflow-hidden max-h-[94vh]">
        {/* Header */}
        <div className="px-8 py-5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Layers className="w-6 h-6 text-amber-400" />
            <div>
              <h2 className="font-cinzel font-bold text-xl text-zinc-100">BHEAVEN — SAVE PROFILES</h2>
              <p className="text-xs text-zinc-400">
                Choose your save profile. Slot 1 (Left) is your primary journey profile.
              </p>
            </div>
          </div>
          {canClose && onClose && (
            <button onClick={onClose} className="text-zinc-400 hover:text-white p-1.5 rounded-lg bg-zinc-800">
              <LucideIcons.X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* 3 SLOTS GRID */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto">
          {slotKeys.map((slot) => {
            const charData = slots[slot.id];
            const startNode = charData ? PASSIVE_TREE_DATA.nodes[charData.startNodeId] : null;

            return (
              <div
                key={slot.id}
                className={`rounded-2xl border-2 p-5 flex flex-col justify-between transition-all relative ${
                  slot.id === 'slot_1'
                    ? 'border-amber-500/80 bg-zinc-900/90 shadow-xl shadow-amber-500/10'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                {/* Slot Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-cinzel font-bold text-xs text-zinc-300">{slot.label}</span>
                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${
                      slot.id === 'slot_1'
                        ? 'bg-amber-950 text-amber-400 border-amber-700'
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                    }`}
                  >
                    {slot.badge}
                  </span>
                </div>

                {/* Character Info or Empty state */}
                {charData ? (
                  <div className="space-y-4 my-2">
                    {/* Character Avatar & Name */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-white/80 shadow-lg flex items-center justify-center font-cinzel font-bold text-lg text-zinc-950"
                        style={{ backgroundColor: charData.appearance?.auraColor || '#f59e0b' }}
                      >
                        {charData.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-cinzel font-bold text-lg text-zinc-100">{charData.name}</div>
                        <div className="text-xs font-mono font-bold text-amber-400">
                          Level {charData.level} • {charData.appearance?.styleName || 'Hero'}
                        </div>
                      </div>
                    </div>

                    {/* Stats summary */}
                    <div className="bg-zinc-950/70 border border-zinc-800/90 rounded-xl p-3 text-xs font-mono space-y-1.5">
                      <div className="flex justify-between text-zinc-300">
                        <span>Starting Seed:</span>
                        <span className="text-amber-300 font-bold truncate max-w-[120px]">{startNode?.name || 'Nexus'}</span>
                      </div>
                      <div className="text-zinc-300 text-[11px] leading-relaxed">
                        <span className="text-red-400 font-bold">{charData.attributes?.vigor || 10}V</span> /{' '}
                        <span className="text-blue-400 font-bold">{charData.attributes?.intelligence || 10}I</span> /{' '}
                        <span className="text-amber-400 font-bold">{charData.attributes?.strength || 10}S</span> /{' '}
                        <span className="text-emerald-400 font-bold">{charData.attributes?.dexterity || 10}D</span> /{' '}
                        <span className="text-purple-400 font-bold">{charData.attributes?.wisdom || 10}W</span> /{' '}
                        <span className="text-yellow-400 font-bold">{charData.attributes?.luck || 10}L</span> /{' '}
                        <span className="text-cyan-400 font-bold">{charData.attributes?.willpower || 10}WP</span>
                      </div>
                      <div className="flex justify-between text-zinc-300">
                        <span>Monsters Slain:</span>
                        <span className="text-zinc-200 font-bold">{charData.monstersKilled || 0}</span>
                      </div>
                      <div className="flex justify-between text-zinc-300">
                        <span>Bosses Vanquished:</span>
                        <span className="text-zinc-200 font-bold">{charData.bossesDefeated || 0}</span>
                      </div>
                      <div className="flex justify-between text-zinc-300">
                        <span>Current Zone:</span>
                        <span className="text-zinc-200 font-bold">{charData.currentZoneId}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="my-8 text-center py-6 border border-dashed border-zinc-800 rounded-xl">
                    <LucideIcons.UserPlus className="w-10 h-10 mx-auto mb-2 text-zinc-600" />
                    <div className="font-cinzel font-bold text-sm text-zinc-300">EMPTY SAVE SLOT</div>
                    <p className="text-xs text-zinc-500 mt-1">Ready to create a custom hero</p>
                  </div>
                )}

                {/* Slot Actions */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  {charData ? (
                    <>
                      <button
                        onClick={() => onSelectSlotToPlay(slot.id, charData)}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-2.5 rounded-xl font-cinzel font-bold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <LucideIcons.Play className="w-4 h-4 fill-current" />
                        Enter Astris
                      </button>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleExportSlot(charData, e)}
                          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                        >
                          <LucideIcons.Download className="w-3.5 h-3.5" />
                          Backup
                        </button>
                        <button
                          onClick={(e) => handleDeleteSlot(slot.id, e)}
                          className="p-1.5 bg-zinc-800 hover:bg-red-950/60 hover:text-red-400 border border-zinc-700 hover:border-red-700 text-zinc-400 rounded-lg text-xs transition-all"
                          title="Delete Hero"
                        >
                          <LucideIcons.Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => onCreateNewHeroInSlot(slot.id)}
                        className="w-full bg-amber-600 hover:bg-amber-500 text-zinc-950 py-2.5 rounded-xl font-cinzel font-bold text-sm transition-all shadow-lg shadow-amber-600/20 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <LucideIcons.PlusCircle className="w-4 h-4" />
                        Create Hero in Slot
                      </button>
                      <label className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all">
                        <LucideIcons.Upload className="w-3.5 h-3.5" />
                        Import JSON to Slot
                        <input
                          type="file"
                          accept=".json"
                          onChange={(e) => handleImportToSlot(slot.id, e)}
                          className="hidden"
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
