// src/App.tsx

import React, { useEffect, useRef, useState } from 'react';
import { CharacterSheetView } from './components/CharacterSheet/CharacterSheetView';
import { CharacterSelectModal } from './components/CharacterSelectModal';
import { SlotSelectModal } from './components/SlotSelectModal';
import { CraftingAltarView } from './components/Crafting/CraftingAltarView';
import { GameOverModal } from './components/GameOverModal';
import { ExperienceBar } from './components/HUD/ExperienceBar';
import { LifeManaGlobes } from './components/HUD/LifeManaGlobes';
import { MiniMap } from './components/HUD/MiniMap';
import { SkillBar } from './components/HUD/SkillBar';
import { InventoryView } from './components/Inventory/InventoryView';
import { PassiveStatsModal } from './components/PassiveTree/PassiveStatsModal';
import { PassiveTreeViewer } from './components/PassiveTree/PassiveTreeViewer';
import { QuestLogView } from './components/Quests/QuestLogView';
import { SettingsModal } from './components/Settings/SettingsModal';
import { SkillsLoadoutView } from './components/Skills/SkillsLoadoutView';
import { StashView } from './components/Stash/StashView';
import { TownHubOverlay } from './components/Town/TownHubOverlay';
import { VictoryModal } from './components/VictoryModal';
import { WorldMapView } from './components/WorldMap/WorldMapView';
import { GameEngine } from './engine/GameEngine';
import { SaveSystem } from './engine/SaveSystem';
import { ActivePanel } from './types/game';
import { CharacterSaveData, SaveSlotId } from './types/character';
import { ZoneDefinition } from './types/maps';
import * as LucideIcons from 'lucide-react';

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [engine, setEngine] = useState<GameEngine | null>(null);
  const [activePanel, setActivePanel] = useState<ActivePanel>('none');
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [creationTargetSlot, setCreationTargetSlot] = useState<SaveSlotId>('slot_1');
  const [showPassiveStatsSummary, setShowPassiveStatsSummary] = useState(false);
  const [victoryZone, setVictoryZone] = useState<ZoneDefinition | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const activeSlotId = SaveSystem.getActiveSlotId();
    const savedData = SaveSystem.getSlot(activeSlotId);

    const game = new GameEngine(activeSlotId, savedData?.name || 'Vaelor', savedData?.startNodeId || 'node_center_hub');

    if (savedData) {
      game.player.loadFromSaveData(savedData);
      if (savedData.unlockedZoneIds) game.unlockedZoneIds = savedData.unlockedZoneIds;
      if (savedData.completedQuestIds) game.completedQuestIds = savedData.completedQuestIds;
      if (savedData.currentZoneId && game.currentZone.id !== savedData.currentZoneId) {
        game.changeZone(savedData.currentZoneId);
      }
    } else {
      setShowSlotModal(true);
    }

    game.onUIUpdate = () => setTick((t) => t + 1);
    game.onPlayerDeath = () => setActivePanel('deathModal');
    game.onZoneVictory = (zone) => {
      setVictoryZone(zone);
      setActivePanel('victoryModal');
    };

    if (canvasRef.current) {
      game.bindCanvas(canvasRef.current);
    }

    setEngine(game);

    const handleResize = () => {
      game.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      game.destroy();
    };
  }, []);

  useEffect(() => {
    if (engine && canvasRef.current) {
      engine.bindCanvas(canvasRef.current);
    }
  }, [engine]);

  useEffect(() => {
    if (!engine) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 100);
    return () => window.clearInterval(id);
  }, [engine]);

  useEffect(() => {
    if (!engine) return;
    const shouldPause = activePanel !== 'none' || showSlotModal;
    engine.isPaused = shouldPause;
    if (shouldPause) engine.releaseAllInput();
  }, [engine, activePanel, showSlotModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!engine) return;

      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();

      if ([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key) || e.code === 'Space') {
        e.preventDefault();
      }

      if (key === 'i') {
        setActivePanel((p) => (p === 'inventory' ? 'none' : 'inventory'));
        return;
      }
      if (key === 'p') {
        setActivePanel((p) => (p === 'passiveTree' ? 'none' : 'passiveTree'));
        return;
      }
      if (key === 'c') {
        setActivePanel((p) => (p === 'characterSheet' ? 'none' : 'characterSheet'));
        return;
      }
      if (key === 'm') {
        setActivePanel((p) => (p === 'worldMap' ? 'none' : 'worldMap'));
        return;
      }
      if (key === 'k') {
        setActivePanel((p) => (p === 'skills' ? 'none' : 'skills'));
        return;
      }
      if (key === 'b') {
        setActivePanel((p) => (p === 'crafting' ? 'none' : 'crafting'));
        return;
      }
      if (key === 'l') {
        setActivePanel((p) => (p === 'quests' ? 'none' : 'quests'));
        return;
      }
      if (key === 'escape') {
        setActivePanel('none');
        setShowSlotModal(false);
        return;
      }

      if (activePanel !== 'none' || showSlotModal) return;
      if (e.repeat && (key === ' ' || e.code === 'Space')) return;
      engine.handleKeyDown(e.key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!engine) return;
      engine.handleKeyUp(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [engine, activePanel, showSlotModal]);

  const handleSelectSlotToPlay = (slotId: SaveSlotId, charData: CharacterSaveData) => {
    if (!engine) return;
    engine.currentSlotId = slotId;
    SaveSystem.setActiveSlotId(slotId);
    engine.player.loadFromSaveData(charData);
    if (charData.unlockedZoneIds) engine.unlockedZoneIds = charData.unlockedZoneIds;
    if (charData.completedQuestIds) engine.completedQuestIds = charData.completedQuestIds;
    if (charData.currentZoneId) engine.changeZone(charData.currentZoneId);
    setShowSlotModal(false);
    setTick((t) => t + 1);
  };

  const handleCreateInSlot = (slotId: SaveSlotId) => {
    setCreationTargetSlot(slotId);
    setShowSlotModal(false);
    setActivePanel('characterSelect');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-zinc-950 select-none">
      <canvas
        ref={canvasRef}
        tabIndex={0}
        onMouseMove={(e) => engine?.handleMouseMove(e.clientX, e.clientY)}
        onMouseDown={(e) => {
          e.preventDefault();
          engine?.handleMouseDown(e.clientX, e.clientY, e.button);
        }}
        onMouseUp={(e) => engine?.handleMouseUp(e.button)}
        onMouseLeave={() => engine?.handleMouseUp()}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full h-full block cursor-none"
      />

      {engine && (
        <>
          <div className="fixed top-3 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-950/85 border border-zinc-700/80 px-5 py-2 rounded-xl shadow-2xl backdrop-blur-md z-30 select-none">
            <div className="flex items-center gap-2 border-r border-zinc-800 pr-4">
              <span className="font-cinzel font-bold text-sm text-zinc-100">{engine.player.name}</span>
              <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                Lvl {engine.player.level} • {engine.player.appearance.styleName} ({engine.currentSlotId === 'slot_1' ? 'Slot 1' : engine.currentSlotId === 'slot_2' ? 'Slot 2' : 'Slot 3'})
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-mono font-bold border-r border-zinc-800 pr-4">
              <LucideIcons.Coins className="w-4 h-4" />
              <span>{engine.player.currencies.gold}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setActivePanel((p) => (p === 'inventory' ? 'none' : 'inventory'))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'inventory'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.Shield className="w-3.5 h-3.5" />
                <span>Bag (I)</span>
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'passiveTree' ? 'none' : 'passiveTree'))}
                className={`relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'passiveTree'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.GitFork className="w-3.5 h-3.5" />
                <span>Tree (P)</span>
                {engine.player.availablePassivePoints > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-zinc-950 text-[9px] font-mono font-bold px-1 rounded-full animate-bounce">
                    +{engine.player.availablePassivePoints}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'characterSheet' ? 'none' : 'characterSheet'))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'characterSheet'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.User className="w-3.5 h-3.5" />
                <span>Stats (C)</span>
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'worldMap' ? 'none' : 'worldMap'))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'worldMap'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.Compass className="w-3.5 h-3.5" />
                <span>Map (M)</span>
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'skills' ? 'none' : 'skills'))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'skills'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.Zap className="w-3.5 h-3.5" />
                <span>Gems (K)</span>
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'crafting' ? 'none' : 'crafting'))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-all ${
                  activePanel === 'crafting'
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                <LucideIcons.Anvil className="w-3.5 h-3.5" />
                <span>Craft (B)</span>
              </button>

              <button
                onClick={() => setActivePanel((p) => (p === 'settings' ? 'none' : 'settings'))}
                className="p-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all ml-2"
                title="Settings & Backup"
              >
                <LucideIcons.Settings className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowSlotModal(true)}
                className="flex items-center gap-1.5 bg-amber-950/80 hover:bg-amber-900 border border-amber-500 text-amber-300 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ml-1"
                title="3 Save Slots (User is Slot 1 Left)"
              >
                <LucideIcons.Layers className="w-4 h-4" />
                <span>3 Slots</span>
              </button>
            </div>
          </div>

          {engine.currentZone.isTown && (
            <TownHubOverlay
              onOpenStash={() => setActivePanel('stash')}
              onOpenCrafting={() => setActivePanel('crafting')}
              onOpenWorldMap={() => setActivePanel('worldMap')}
              onOpenPassiveTree={() => setActivePanel('passiveTree')}
              onOpenQuests={() => setActivePanel('quests')}
            />
          )}

          {activePanel === 'none' && !showSlotModal && (
            <div className="fixed bottom-28 left-4 z-20 pointer-events-none max-w-[220px]">
              <div className="bg-zinc-950/70 border border-zinc-700/70 rounded-lg px-3 py-2 text-[10px] font-mono text-zinc-400 leading-relaxed backdrop-blur-sm">
                <div className="text-amber-300 font-bold mb-1">{engine.currentZone.isTown ? 'TRAINING GROUNDS' : 'IN THE FIELD'}</div>
                <div>WASD / Arrows — Move</div>
                <div>Mouse — Aim (skills auto-fire)</div>
                <div>LMB / RMB — Force skill 1 / 2</div>
                <div>SPACE — Dash through packs</div>
                {!engine.currentZone.isTown && <div>SHIFT — Focus Time (slow-mo)</div>}
                <div>M — World Map  •  I Bag  •  P Tree</div>
              </div>
            </div>
          )}

          <MiniMap engine={engine} />
          <LifeManaGlobes stats={engine.player.stats} />
          <SkillBar
            player={engine.player}
            onSkillClick={(slotIdx) => engine.castEquippedSkill(slotIdx)}
            onFlaskClick={(slot) => engine.useFlask(slot)}
            onDashClick={() => engine.triggerDash()}
          />
          <ExperienceBar player={engine.player} />

          {showSlotModal && (
            <SlotSelectModal
              currentSlotId={engine.currentSlotId}
              onSelectSlotToPlay={handleSelectSlotToPlay}
              onCreateNewHeroInSlot={handleCreateInSlot}
              onClose={() => setShowSlotModal(false)}
              canClose={SaveSystem.getSlot(engine.currentSlotId) !== null}
            />
          )}

          {activePanel === 'inventory' && (
            <InventoryView
              player={engine.player}
              onClose={() => setActivePanel('none')}
              onInventoryUpdated={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'passiveTree' && (
            <PassiveTreeViewer
              player={engine.player}
              onClose={() => setActivePanel('none')}
              onTreeUpdated={() => setTick((t) => t + 1)}
              onOpenStatsSummary={() => setShowPassiveStatsSummary(true)}
            />
          )}

          {showPassiveStatsSummary && (
            <PassiveStatsModal
              player={engine.player}
              onClose={() => setShowPassiveStatsSummary(false)}
            />
          )}

          {activePanel === 'characterSheet' && (
            <CharacterSheetView
              player={engine.player}
              onClose={() => setActivePanel('none')}
            />
          )}

          {activePanel === 'worldMap' && (
            <WorldMapView
              engine={engine}
              onClose={() => setActivePanel('none')}
              onSelectZone={(zoneId: string) => engine.changeZone(zoneId)}
            />
          )}

          {activePanel === 'skills' && (
            <SkillsLoadoutView
              player={engine.player}
              onClose={() => setActivePanel('none')}
              onSkillsUpdated={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'crafting' && (
            <CraftingAltarView
              player={engine.player}
              soundSystem={engine.soundSystem}
              onClose={() => setActivePanel('none')}
              onCraftSuccess={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'stash' && (
            <StashView
              player={engine.player}
              onClose={() => setActivePanel('none')}
              onStashUpdated={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'quests' && (
            <QuestLogView
              engine={engine}
              onClose={() => setActivePanel('none')}
            />
          )}

          {activePanel === 'settings' && (
            <SettingsModal
              engine={engine}
              onClose={() => setActivePanel('none')}
              onCharacterSwitched={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'characterSelect' && (
            <CharacterSelectModal
              engine={engine}
              targetSlotId={creationTargetSlot}
              onClose={() => setActivePanel('none')}
              onCharacterCreated={() => setTick((t) => t + 1)}
            />
          )}

          {activePanel === 'deathModal' && (
            <GameOverModal
              engine={engine}
              onRespawn={() => setActivePanel('none')}
            />
          )}

          {activePanel === 'victoryModal' && victoryZone && (
            <VictoryModal
              engine={engine}
              zone={victoryZone}
              onClose={() => setActivePanel('none')}
              onReturnToTown={() => {
                engine.changeZone('town_havens_watch');
                setActivePanel('none');
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
