// src/components/CharacterSheet/CharacterSheetView.tsx

import React, { useState } from 'react';
import { Player } from '../../engine/Player';
import * as LucideIcons from 'lucide-react';

interface CharacterSheetViewProps {
  player: Player;
  onClose: () => void;
}

export const CharacterSheetView: React.FC<CharacterSheetViewProps> = ({ player, onClose }) => {
  const [activeTab, setActiveTab] = useState<'attributes' | 'offense' | 'defense' | 'utility'>('attributes');
  const s = player.stats;
  const a = player.attributes;

  const omniBonus = Math.floor(a.willpower * 0.05);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.User className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-cinzel font-bold text-lg text-zinc-100">
                {player.name} — Level {player.level} ({player.appearance.styleName})
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/50 px-6">
          {(['attributes', 'offense', 'defense', 'utility'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === tab
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab === 'attributes' ? 'The 7 Attributes' : tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* 1. THE 7 ATTRIBUTES TAB */}
          {activeTab === 'attributes' && (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Vigor */}
                <div className="bg-red-950/20 border border-red-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-red-400 text-sm">1. VIGOR</span>
                    <span className="font-mono font-bold text-base text-red-300">
                      {a.vigor} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• Max Life: <b className="text-zinc-200">+{(a.vigor + omniBonus) * 7}</b></div>
                    <div>• Life Regen: <b className="text-zinc-200">+{( (a.vigor + omniBonus) * 0.15 ).toFixed(1)}/s</b></div>
                    <div>• Phys Ailment Resist: <b className="text-zinc-200">{s.physicalAilmentResistance}%</b></div>
                  </div>
                </div>

                {/* Intelligence */}
                <div className="bg-blue-950/20 border border-blue-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-blue-400 text-sm">2. INTELLIGENCE</span>
                    <span className="font-mono font-bold text-base text-blue-300">
                      {a.intelligence} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• Max Mana: <b className="text-zinc-200">+{(a.intelligence + omniBonus) * 6}</b></div>
                    <div>• Mana Regen: <b className="text-zinc-200">+{( (a.intelligence + omniBonus) * 0.25 ).toFixed(1)}/s</b></div>
                    <div>• Magic Ailment Resist: <b className="text-zinc-200">{s.magicAilmentResistance}%</b></div>
                  </div>
                </div>

                {/* Strength */}
                <div className="bg-amber-950/20 border border-amber-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-amber-400 text-sm">3. STRENGTH</span>
                    <span className="font-mono font-bold text-base text-amber-300">
                      {a.strength} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• Heavy Damage: <b className="text-amber-300">+{((s.heavyDamageMultiplier - 1) * 100).toFixed(1)}%</b></div>
                    <div>• Max Equip Load: <b className="text-zinc-200">{s.maxEquipLoad.toFixed(0)}</b> (Current: {s.equipLoad})</div>
                    <div>• Stamina Cost Mod: <b className="text-zinc-200">{Math.round(s.staminaCostMultiplier * 100)}%</b></div>
                  </div>
                </div>

                {/* Dexterity */}
                <div className="bg-emerald-950/20 border border-emerald-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-emerald-400 text-sm">4. DEXTERITY</span>
                    <span className="font-mono font-bold text-base text-emerald-300">
                      {a.dexterity} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• Light Damage: <b className="text-emerald-300">+{((s.lightDamageMultiplier - 1) * 100).toFixed(1)}%</b></div>
                    <div>• Movement Speed: <b className="text-zinc-200">{Math.round(s.movementSpeed)} px/s</b></div>
                    <div>• Stamina Recharge: <b className="text-zinc-200">{s.staminaRechargeRate.toFixed(1)}/s</b></div>
                  </div>
                </div>

                {/* Wisdom */}
                <div className="bg-purple-950/20 border border-purple-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-purple-400 text-sm">5. WISDOM</span>
                    <span className="font-mono font-bold text-base text-purple-300">
                      {a.wisdom} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• Magical Damage: <b className="text-purple-300">+{((s.magicalDamageMultiplier - 1) * 100).toFixed(1)}%</b></div>
                    <div>• Status Chance Mod: <b className="text-zinc-200">+{((a.wisdom + omniBonus) * 0.35).toFixed(1)}%</b></div>
                    <div>• Status DoT Magnitude: <b className="text-zinc-200">{Math.round(s.statusEffectDamageMultiplier * 100)}%</b></div>
                  </div>
                </div>

                {/* Luck */}
                <div className="bg-yellow-950/20 border border-yellow-900/60 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-yellow-400 text-sm">6. LUCK</span>
                    <span className="font-mono font-bold text-base text-yellow-300">
                      {a.luck} {omniBonus > 0 && <span className="text-xs text-cyan-400">+{omniBonus}</span>}
                    </span>
                  </div>
                  <div className="text-zinc-400 space-y-0.5">
                    <div>• High Dmg Roll Factor: <b className="text-yellow-300">+{(s.damageRollLuckFactor * 100).toFixed(0)}%</b></div>
                    <div>• Evasion Bonus: <b className="text-zinc-200">+{( (a.luck + omniBonus) * 3.5 ).toFixed(0)}</b></div>
                    <div>• Crit Chance Bonus: <b className="text-zinc-200">+{( (a.luck + omniBonus) * 0.45 ).toFixed(1)}%</b></div>
                  </div>
                </div>

                {/* Willpower */}
                <div className="bg-cyan-950/20 border border-cyan-900/60 p-3.5 rounded-xl col-span-1 md:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-cinzel font-bold text-cyan-400 text-sm">7. WILLPOWER (OMNI-ATTRIBUTE)</span>
                    <span className="font-mono font-bold text-base text-cyan-300">{a.willpower}</span>
                  </div>
                  <div className="text-zinc-400 grid grid-cols-3 gap-2 mt-1">
                    <div>• Minion Stats: <b className="text-cyan-300">+{((s.minionDamageMultiplier - 1) * 100).toFixed(1)}%</b></div>
                    <div>• Energy Shield: <b className="text-cyan-300">{s.maxEnergyShield}</b></div>
                    <div>• Omni-Boost: <b className="text-amber-400">+{omniBonus} to all other 6 stats</b> (+1 per 20 pts)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. OFFENSE TAB */}
          {activeTab === 'offense' && (
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Heavy Damage Multiplier:</span>
                <span className="font-mono font-bold text-amber-300">{((s.heavyDamageMultiplier - 1) * 100).toFixed(1)}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Light Damage Multiplier:</span>
                <span className="font-mono font-bold text-emerald-300">{((s.lightDamageMultiplier - 1) * 100).toFixed(1)}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Magical Damage Multiplier:</span>
                <span className="font-mono font-bold text-purple-300">{((s.magicalDamageMultiplier - 1) * 100).toFixed(1)}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Damage Roll Luck Skew:</span>
                <span className="font-mono font-bold text-yellow-300">+{Math.round(s.damageRollLuckFactor * 100)}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Critical Strike Chance:</span>
                <span className="font-mono font-bold text-amber-300">{s.critChance.toFixed(1)}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Critical Multiplier:</span>
                <span className="font-mono font-bold text-amber-300">{s.critMultiplier}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Extra Projectiles:</span>
                <span className="font-mono font-bold text-sky-400">+{s.extraProjectiles}</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Pierce Count:</span>
                <span className="font-mono font-bold text-sky-400">{s.pierceCount}</span>
              </div>
            </div>
          )}

          {/* 3. DEFENSE TAB */}
          {activeTab === 'defense' && (
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Armour:</span>
                <span className="font-mono font-bold text-zinc-200">{s.armor}</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Evasion Rating:</span>
                <span className="font-mono font-bold text-zinc-200">{s.evasion}</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Chance to Evade:</span>
                <span className="font-mono font-bold text-emerald-400">{s.chanceToEvade}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Block Chance:</span>
                <span className="font-mono font-bold text-zinc-200">{s.blockChance}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-red-400">Fire Resistance:</span>
                <span className="font-mono font-bold text-red-300">{s.fireResistance}% / {s.maxResistCap}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-blue-400">Cold Resistance:</span>
                <span className="font-mono font-bold text-blue-300">{s.coldResistance}% / {s.maxResistCap}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-yellow-400">Lightning Resistance:</span>
                <span className="font-mono font-bold text-yellow-300">{s.lightningResistance}% / {s.maxResistCap}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-purple-400">Chaos Resistance:</span>
                <span className="font-mono font-bold text-purple-300">{s.chaosResistance}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-red-300">Phys Ailment Resist:</span>
                <span className="font-mono font-bold text-red-400">{s.physicalAilmentResistance}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-blue-300">Magic Ailment Resist:</span>
                <span className="font-mono font-bold text-blue-400">{s.magicAilmentResistance}%</span>
              </div>
            </div>
          )}

          {/* 4. UTILITY TAB */}
          {activeTab === 'utility' && (
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Movement Speed:</span>
                <span className="font-mono font-bold text-zinc-200">{Math.round(s.movementSpeed)} px/s</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Item Rarity (IIR):</span>
                <span className="font-mono font-bold text-amber-300">+{s.increasedItemRarity}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Item Quantity (IIQ):</span>
                <span className="font-mono font-bold text-amber-300">+{s.increasedItemQuantity}%</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Monsters Vanquished:</span>
                <span className="font-mono font-bold text-zinc-200">{player.killsCount}</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Bosses Slain:</span>
                <span className="font-mono font-bold text-zinc-200">{player.bossesKilled}</span>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800 flex justify-between">
                <span className="text-zinc-400">Total Deaths:</span>
                <span className="font-mono font-bold text-red-400">{player.deathsCount}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
