// src/components/Settings/SettingsModal.tsx

import React, { useState } from 'react';
import { GameEngine } from '../../engine/GameEngine';
import { SaveSystem } from '../../engine/SaveSystem';
import * as LucideIcons from 'lucide-react';

interface SettingsModalProps {
  engine: GameEngine;
  onClose: () => void;
  onCharacterSwitched: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ engine, onClose, onCharacterSwitched }) => {
  const [masterVol, setMasterVol] = useState(engine.soundSystem.masterVolume * 100);
  const [sfxVol, setSfxVol] = useState(engine.soundSystem.sfxVolume * 100);

  const handleExport = () => {
    const saveData = engine.player.toSaveData(
      engine.currentZone.id,
      engine.unlockedZoneIds,
      engine.completedQuestIds
    );
    SaveSystem.exportSaveToFile(saveData);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      const loaded = SaveSystem.importSaveFromJSON(content, engine.currentSlotId);
      if (loaded) {
        engine.player.loadFromSaveData(loaded);
        onCharacterSwitched();
        onClose();
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Settings className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">SETTINGS & BACKUP</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-6 space-y-6 text-xs">
          {/* Audio Controls */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-bold text-sm text-amber-400">AUDIO CONTROLS</h3>
            <div>
              <div className="flex justify-between mb-1 text-zinc-300">
                <span>Master Volume</span>
                <span className="font-mono">{Math.round(masterVol)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={masterVol}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setMasterVol(val);
                  engine.soundSystem.masterVolume = val / 100;
                }}
                className="w-full accent-amber-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1 text-zinc-300">
                <span>SFX Volume</span>
                <span className="font-mono">{Math.round(sfxVol)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sfxVol}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setSfxVol(val);
                  engine.soundSystem.sfxVolume = val / 100;
                }}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Keybindings Reference */}
          <div className="border-t border-zinc-800 pt-4">
            <h3 className="font-cinzel font-bold text-sm text-amber-400 mb-2">HOTKEY BINDINGS</h3>
            <div className="grid grid-cols-2 gap-2 text-zinc-400 font-mono">
              <div><b className="text-zinc-200">WASD / Arrows:</b> Movement</div>
              <div><b className="text-zinc-200">Space:</b> Dash</div>
              <div><b className="text-zinc-200">I:</b> Inventory</div>
              <div><b className="text-zinc-200">P:</b> Passive Tree</div>
              <div><b className="text-zinc-200">C:</b> Character Sheet</div>
              <div><b className="text-zinc-200">M:</b> World Map</div>
              <div><b className="text-zinc-200">K:</b> Skill Gems</div>
              <div><b className="text-zinc-200">1–5:</b> Flasks</div>
            </div>
          </div>

          {/* Save / Export / Import */}
          <div className="border-t border-zinc-800 pt-4">
            <h3 className="font-cinzel font-bold text-sm text-amber-400 mb-2">CHARACTER SAVE BACKUP</h3>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <LucideIcons.Download className="w-4 h-4" />
                Export Save (JSON)
              </button>
              <label className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all">
                <LucideIcons.Upload className="w-4 h-4" />
                Import Save
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
