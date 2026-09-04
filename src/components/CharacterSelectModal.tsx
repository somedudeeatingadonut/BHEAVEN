// src/components/CharacterSelectModal.tsx

import React, { useState } from 'react';
import { PASSIVE_TREE_DATA } from '../constants/passiveTreeData';
import { ACTIVE_SKILLS } from '../constants/skillGems';
import { GameEngine } from '../engine/GameEngine';
import {
  CharacterAppearance,
  CharacterAttributes,
  SaveSlotId,
} from '../types/character';
import { PassiveTreeViewer } from './PassiveTree/PassiveTreeViewer';
import * as LucideIcons from 'lucide-react';

interface CharacterSelectModalProps {
  engine: GameEngine;
  targetSlotId?: SaveSlotId;
  onClose: () => void;
  onCharacterCreated: () => void;
}

const COLOR_PRESETS = [
  { name: 'Solar Flame', aura: '#f59e0b', glow: '#fef08a' },
  { name: 'Frost Sapphire', aura: '#38bdf8', glow: '#bae6fd' },
  { name: 'Void Amethyst', aura: '#a855f7', glow: '#e9d5ff' },
  { name: 'Blood Berserker', aura: '#ef4444', glow: '#fca5a5' },
  { name: 'Emerald Warden', aura: '#22c55e', glow: '#86efac' },
  { name: 'Astral Silver', aura: '#cbd5e1', glow: '#ffffff' },
];

const STARTER_WEAPONS = [
  { id: 'halberd_dread', name: 'Astral Halberd', type: 'Polearm (Str/Dex/Wis)' },
  { id: 'quarterstaff_willow', name: 'Monk Quarterstaff', type: 'Staff (Wis/Dex)' },
  { id: 'bladed_katar', name: 'Bladed Katar', type: 'Fist (Dex/Willpower)' },
  { id: 'murakumo_greatsword', name: 'Murakumo Greatsword', type: 'Curved (Str/Luck/Dex)' },
  { id: 'vanguard_poleaxe', name: 'Vanguard Poleaxe', type: 'Poleaxe (Str/Willpower)' },
  { id: 'astral_poleblade', name: 'Astral Poleblade', type: 'Poleblade (Dex/Willpower)' },
  { id: 'fortune_flail', name: "Fortune's Flail", type: 'Flail (Pure Luck)' },
  { id: 'titan_warhammer', name: 'Sanctified Warhammer', type: 'Warhammer (Str/Wis)' },
  { id: 'driftwood_wand', name: 'Arcane Wand', type: 'Wand (Pure Wisdom)' },
  { id: 'celestial_staff', name: 'Archon Staff', type: 'Staff (Wis/Will/Str)' },
  { id: 'reaper_scythe', name: 'Reaper Twin Sickles', type: 'Scythe (Dex/Wis/Luck)' },
  { id: 'titan_greatbow', name: 'Ballista Greatbow', type: 'Greatbow (Str/Dex)' },
  { id: 'rune_spellblade', name: 'Runic Spellblade', type: 'Spellblade (Dex/Wis)' },
  { id: 'astral_focus', name: 'Astral Relic Catalyst', type: 'Focus (Wis/Will/Luck)' },
  { id: 'rusty_greatsword', name: 'Bastion Greatsword', type: 'Greatsword (Str/Dex)' },
  { id: 'crude_bow', name: 'Recurve Bow', type: 'Bow (Dex/Luck)' },
];

const STARTER_ARMORS = [
  { id: 'plate_vest', name: 'Reinforced Plate', type: 'Heavy Armor (Strength)' },
  { id: 'leather_tunic', name: 'Scouts Leather', type: 'Evasion Tunic (Dexterity)' },
  { id: 'silk_robe', name: 'Aetheric Silk Robe', type: 'Energy Shield (Willpower)' },
];

const STARTER_SKILLS = [
  { id: 'tectonic_quake', name: 'Tectonic Quake', desc: 'Heavy Slam (Strength)' },
  { id: 'volley_barrage', name: 'Volley Barrage', desc: 'Light Arrows (Dexterity)' },
  { id: 'firestorm_orb', name: 'Firestorm Orb', desc: 'Magical Plasma (Wisdom)' },
  { id: 'whirlwind_steel', name: 'Whirlwind of Steel', desc: 'Hybrid Melee (Str/Dex)' },
  { id: 'volt_jolt', name: 'Volt Jolt', desc: 'Magical Sparks (Wisdom)' },
  { id: 'celestial_retribution', name: 'Celestial Retribution', desc: 'Heavy Magic (Str/Wis)' },
];

export const CharacterSelectModal: React.FC<CharacterSelectModalProps> = ({
  engine,
  targetSlotId = 'slot_1',
  onClose,
  onCharacterCreated,
}) => {
  const [creationStep, setCreationStep] = useState<'identity' | 'stats' | 'origin' | 'equipment'>('identity');
  const [showTreePicker, setShowTreePicker] = useState(false);

  // 7 Core Attributes State
  const [name, setName] = useState('Vaelor');
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0]);
  const [attributes, setAttributes] = useState<CharacterAttributes>({
    vigor: 10,
    intelligence: 10,
    strength: 10,
    dexterity: 10,
    wisdom: 10,
    luck: 10,
    willpower: 10,
  });

  const [startNodeId, setStartNodeId] = useState('node_center_hub');
  const [startingWeaponId, setStartingWeaponId] = useState('halberd_dread');
  const [startingArmorId, setStartingArmorId] = useState('plate_vest');
  const [startingSkillId, setStartingSkillId] = useState('tectonic_quake');

  const totalPointsBudget = 70;
  const pointsUsed =
    attributes.vigor +
    attributes.intelligence +
    attributes.strength +
    attributes.dexterity +
    attributes.wisdom +
    attributes.luck +
    attributes.willpower;
  const pointsRemaining = totalPointsBudget - pointsUsed;

  const handleAdjustStat = (stat: keyof CharacterAttributes, delta: number) => {
    if (delta > 0 && pointsRemaining <= 0) return;
    if (delta < 0 && attributes[stat] <= 5) return;

    setAttributes((prev) => ({
      ...prev,
      [stat]: prev[stat] + delta,
    }));
  };

  const handleCreateHero = () => {
    if (!name.trim()) return;

    engine.currentSlotId = targetSlotId;
    engine.player.customSetup({
      name: name.trim(),
      startNodeId,
      appearance: {
        auraColor: selectedColor.aura,
        glowColor: selectedColor.glow,
        styleName: selectedColor.name,
      },
      attributes,
      startingWeaponId,
      startingArmorId,
      startingSkillId,
    });

    engine.initMap(engine.currentZone);
    engine.saveGame();
    onCharacterCreated();
    onClose();
  };

  const selectedNode = PASSIVE_TREE_DATA.nodes[startNodeId] || PASSIVE_TREE_DATA.nodes['node_center_hub'];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-3xl w-full max-w-5xl shadow-2xl flex flex-col overflow-hidden max-h-[94vh]">
        {/* Header */}
        <div className="px-8 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.UserPlus className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-cinzel font-bold text-lg text-zinc-100">
                HERO CREATION ({targetSlotId === 'slot_1' ? 'Slot 1 - Left' : targetSlotId === 'slot_2' ? 'Slot 2 - Middle' : 'Slot 3 - Right'})
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* LEFT: STEP NAVIGATION & FORM (8 cols) */}
            <div className="md:col-span-8 space-y-5">
              {/* Steps Bar */}
              <div className="flex gap-2 border-b border-zinc-800 pb-3">
                {[
                  { id: 'identity', label: '1. Identity & Aura' },
                  { id: 'stats', label: '2. The 7 Attributes' },
                  { id: 'origin', label: '3. Starting Tree Seed' },
                  { id: 'equipment', label: '4. Starter Weapons & Gear' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setCreationStep(st.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      creationStep === st.id
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-500'
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* STEP 1: IDENTITY & AURA */}
              {creationStep === 'identity' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-1 uppercase">
                      Hero Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter character name..."
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-2 uppercase">
                      Astral Aura & Energy Color
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {COLOR_PRESETS.map((color) => (
                        <div
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
                            selectedColor.name === color.name
                              ? 'bg-zinc-900 border-amber-400 shadow-md'
                              : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <div
                            className="w-5 h-5 rounded-full border border-white/80 shadow-lg"
                            style={{ backgroundColor: color.aura }}
                          />
                          <span className="text-xs font-semibold text-zinc-200">{color.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: THE 7 CORE ATTRIBUTES */}
              {creationStep === 'stats' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl">
                    <span className="text-xs font-mono text-zinc-300">Attribute Points Remaining:</span>
                    <span className="font-mono font-bold text-base text-amber-400">{pointsRemaining} pts</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                    {/* 1: VIGOR */}
                    <div className="bg-red-950/20 border border-red-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-red-400">1. VIGOR</div>
                        <div className="text-[10px] text-zinc-400">
                          +{attributes.vigor * 7} Life • +{(attributes.vigor * 0.15).toFixed(1)}/s Regen • Phys Ailment Resist
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('vigor', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-red-300 w-6 text-center">{attributes.vigor}</span>
                        <button onClick={() => handleAdjustStat('vigor', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 2: INTELLIGENCE */}
                    <div className="bg-blue-950/20 border border-blue-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-blue-400">2. INTELLIGENCE</div>
                        <div className="text-[10px] text-zinc-400">
                          +{attributes.intelligence * 6} Mana • +{(attributes.intelligence * 0.25).toFixed(1)}/s Regen • Magic Ailment Resist
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('intelligence', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-blue-300 w-6 text-center">{attributes.intelligence}</span>
                        <button onClick={() => handleAdjustStat('intelligence', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 3: STRENGTH */}
                    <div className="bg-amber-950/20 border border-amber-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-amber-400">3. STRENGTH</div>
                        <div className="text-[10px] text-zinc-400">
                          +{(attributes.strength * 2.5).toFixed(1)}% Heavy Dmg • +{(attributes.strength * 2.5).toFixed(0)} Equip Load
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('strength', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-amber-300 w-6 text-center">{attributes.strength}</span>
                        <button onClick={() => handleAdjustStat('strength', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 4: DEXTERITY */}
                    <div className="bg-emerald-950/20 border border-emerald-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-emerald-400">4. DEXTERITY</div>
                        <div className="text-[10px] text-zinc-400">
                          +{(attributes.dexterity * 2.5).toFixed(1)}% Light Dmg • +{(attributes.dexterity * 1.2).toFixed(0)} Move Speed
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('dexterity', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-emerald-300 w-6 text-center">{attributes.dexterity}</span>
                        <button onClick={() => handleAdjustStat('dexterity', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 5: WISDOM */}
                    <div className="bg-purple-950/20 border border-purple-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-purple-400">5. WISDOM</div>
                        <div className="text-[10px] text-zinc-400">
                          +{(attributes.wisdom * 2.5).toFixed(1)}% Magic Dmg • +{(attributes.wisdom * 0.35).toFixed(1)}% Status Chance
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('wisdom', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-purple-300 w-6 text-center">{attributes.wisdom}</span>
                        <button onClick={() => handleAdjustStat('wisdom', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 6: LUCK */}
                    <div className="bg-yellow-950/20 border border-yellow-900/60 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-yellow-400">6. LUCK</div>
                        <div className="text-[10px] text-zinc-400">
                          High Dmg Rolls • +{(attributes.luck * 3.5).toFixed(0)} Evasion • +{(attributes.luck * 0.45).toFixed(1)}% Crit
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('luck', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-yellow-300 w-6 text-center">{attributes.luck}</span>
                        <button onClick={() => handleAdjustStat('luck', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>

                    {/* 7: WILLPOWER */}
                    <div className="bg-cyan-950/20 border border-cyan-900/60 p-3 rounded-xl flex items-center justify-between col-span-1 md:col-span-2">
                      <div>
                        <div className="font-cinzel font-bold text-xs text-cyan-400">7. WILLPOWER (OMNI-ATTRIBUTE)</div>
                        <div className="text-[10px] text-zinc-400">
                          +{(attributes.willpower * 3.5).toFixed(1)}% Minion Stats • +{(attributes.willpower * 3).toFixed(0)} ES • +{Math.floor(attributes.willpower * 0.05)} to ALL other 6 stats (+1 per 20 pts)
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdjustStat('willpower', -1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">-</button>
                        <span className="font-mono font-bold text-base text-cyan-300 w-6 text-center">{attributes.willpower}</span>
                        <button onClick={() => handleAdjustStat('willpower', 1)} className="w-7 h-7 rounded bg-zinc-800 font-mono font-bold">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: CHOOSE ANY SPOT ON THE SKILL TREE */}
              {creationStep === 'origin' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-cinzel font-bold text-sm text-amber-300">Choose Starting Tree Seed</h3>
                      <p className="text-xs text-zinc-400">
                        You can choose ANY node on the entire constellation as your starting origin!
                      </p>
                    </div>
                    <button
                      onClick={() => setShowTreePicker(true)}
                      className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2 rounded-xl text-xs font-bold font-cinzel transition-all shadow-lg active:scale-95"
                    >
                      <LucideIcons.Maximize2 className="w-4 h-4" />
                      Browse Full Tree & Click Any Node
                    </button>
                  </div>

                  {/* Selected node card */}
                  <div className="bg-zinc-900/90 border-2 border-amber-400/80 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-cinzel font-bold text-base text-amber-300">
                        {selectedNode.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-amber-950 text-amber-400 border border-amber-700 px-2 py-0.5 rounded">
                        {selectedNode.type}
                      </span>
                    </div>
                    <div className="space-y-1 my-2">
                      {selectedNode.stats.map((st, i) => (
                        <div key={i} className="text-sky-300 text-xs font-semibold">
                          {st.displayText}
                        </div>
                      ))}
                    </div>
                    <p className="text-zinc-400 text-xs italic">{selectedNode.description}</p>
                  </div>

                  {/* Quick Preset Seeds */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                      Or Quick Select Classic Seed Locations:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'node_center_hub', name: 'Nexus of Ascension (Center)' },
                        { id: 'node_start_bastion', name: 'Titan Bastion (Bottom-Left)' },
                        { id: 'node_start_scout', name: "Scout's Grove (Bottom-Right)" },
                        { id: 'node_start_arcane', name: 'Arcane Sanctum (Top)' },
                        { id: 'node_start_champion', name: "Champion's Arena (Bottom)" },
                        { id: 'node_start_shadow', name: 'Shadow Spire (Top-Right)' },
                        { id: 'node_start_solar', name: 'Solar Temple (Top-Left)' },
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => setStartNodeId(preset.id)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                            startNodeId === preset.id
                              ? 'bg-amber-950/80 border-amber-400 text-amber-200'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          <div className="font-bold truncate">{preset.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: STARTER WEAPONS & GEAR */}
              {creationStep === 'equipment' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                      Starting Weapon Class & Scalings
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[220px] overflow-y-auto pr-1">
                      {STARTER_WEAPONS.map((w) => (
                        <button
                          key={w.id}
                          onClick={() => setStartingWeaponId(w.id)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                            startingWeaponId === w.id
                              ? 'bg-amber-950/60 border-amber-400 text-amber-200 shadow-md'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          <div className="font-bold truncate">{w.name}</div>
                          <div className="text-[10px] text-amber-400/90 font-mono mt-0.5">{w.type}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                      Starting Armor
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {STARTER_ARMORS.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setStartingArmorId(a.id)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                            startingArmorId === a.id
                              ? 'bg-amber-950/60 border-amber-400 text-amber-200'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          <div className="font-bold">{a.name}</div>
                          <div className="text-[10px] opacity-70">{a.type}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-400 mb-1.5 uppercase">
                      Initial Active Skill Gem
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {STARTER_SKILLS.map((sk) => (
                        <button
                          key={sk.id}
                          onClick={() => setStartingSkillId(sk.id)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                            startingSkillId === sk.id
                              ? 'bg-amber-950/60 border-amber-400 text-amber-200'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                          }`}
                        >
                          <div className="font-bold">{sk.name}</div>
                          <div className="text-[10px] opacity-70">{sk.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: LIVE CHARACTER PREVIEW CARD (4 cols) */}
            <div className="md:col-span-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel font-bold text-sm text-amber-400 border-b border-zinc-800 pb-2 mb-3">
                  HERO PROFILE SUMMARY
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full border-2 border-white/80 shadow-lg flex items-center justify-center font-cinzel font-bold text-lg text-zinc-950"
                    style={{ backgroundColor: selectedColor.aura }}
                  >
                    {name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-cinzel font-bold text-base text-zinc-100">{name || 'Vaelor'}</div>
                    <div className="text-xs text-zinc-400 font-mono">{selectedColor.name}</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-zinc-400">Tree Seed:</span>
                    <span className="text-amber-300 font-bold truncate max-w-[130px]">{selectedNode.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-red-400 font-bold">Vigor:</span>
                    <span>{attributes.vigor}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-blue-400 font-bold">Intelligence:</span>
                    <span>{attributes.intelligence}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-amber-400 font-bold">Strength:</span>
                    <span>{attributes.strength}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-emerald-400 font-bold">Dexterity:</span>
                    <span>{attributes.dexterity}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-purple-400 font-bold">Wisdom:</span>
                    <span>{attributes.wisdom}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-yellow-400 font-bold">Luck:</span>
                    <span>{attributes.luck}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-850">
                    <span className="text-cyan-400 font-bold">Willpower:</span>
                    <span>{attributes.willpower}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={handleCreateHero}
                  disabled={pointsRemaining !== 0}
                  className={`w-full py-3 rounded-xl font-cinzel font-bold text-sm transition-all shadow-xl ${
                    pointsRemaining === 0
                      ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-amber-500/20 active:scale-95 cursor-pointer'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  }`}
                >
                  {pointsRemaining === 0 ? 'Create & Enter Astris' : `Allocate remaining ${pointsRemaining} pts`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN TREE PICKER MODAL */}
      {showTreePicker && (
        <PassiveTreeViewer
          selectedStartNodeId={startNodeId}
          onSelectStartNode={(nodeId) => {
            setStartNodeId(nodeId);
            setShowTreePicker(false);
          }}
          isSelectionMode={true}
          onClose={() => setShowTreePicker(false)}
        />
      )}
    </div>
  );
};
