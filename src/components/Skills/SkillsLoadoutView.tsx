// src/components/Skills/SkillsLoadoutView.tsx

import React from 'react';
import { ACTIVE_SKILLS, SUPPORT_GEMS } from '../../constants/skillGems';
import { Player } from '../../engine/Player';
import * as LucideIcons from 'lucide-react';

interface SkillsLoadoutViewProps {
  player: Player;
  onClose: () => void;
  onSkillsUpdated: () => void;
}

export const SkillsLoadoutView: React.FC<SkillsLoadoutViewProps> = ({ player, onClose, onSkillsUpdated }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Zap;
    return <IconComponent className="w-5 h-5" />;
  };

  const handleToggleAuto = (slotIdx: number) => {
    const skill = player.equippedSkills[slotIdx];
    if (!skill) return;
    skill.isAutoCast = !skill.isAutoCast;
    onSkillsUpdated();
  };

  const handleToggleSupport = (slotIdx: number, supportId: string) => {
    const skill = player.equippedSkills[slotIdx];
    if (!skill) return;

    if (skill.supportGemIds.includes(supportId)) {
      skill.supportGemIds = skill.supportGemIds.filter((id) => id !== supportId);
    } else {
      skill.supportGemIds.push(supportId);
    }
    player.recalculateStats();
    onSkillsUpdated();
  };

  const handleSelectActiveSkill = (slotIdx: number, skillDefId: string) => {
    if (!player.equippedSkills[slotIdx]) {
      player.equippedSkills[slotIdx] = {
        id: `skill_${Date.now()}_${slotIdx}`,
        skillDefId,
        level: 1,
        currentXp: 0,
        xpToNextLevel: 100,
        slotIndex: slotIdx,
        isAutoCast: true,
        cooldownTimer: 0,
        supportGemIds: [],
      };
    } else {
      player.equippedSkills[slotIdx]!.skillDefId = skillDefId;
    }
    onSkillsUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.Zap className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">SKILL GEMS & SUPPORT LINKS</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Active Skill Slots 0-4 */}
          {player.equippedSkills.slice(0, 5).map((equippedSkill, slotIdx) => {
            const skillDef = equippedSkill ? ACTIVE_SKILLS[equippedSkill.skillDefId] : null;
            const slotKeyLabels = ['LMB Primary (auto)', 'RMB / Auto', 'Auto-fire', 'Auto-fire', 'Auto-fire'];

            return (
              <div key={slotIdx} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-zinc-800 text-amber-400 text-xs font-mono font-bold px-2 py-1 rounded border border-zinc-700">
                      Slot {slotIdx + 1}: {slotKeyLabels[slotIdx]}
                    </span>
                    {skillDef ? (
                      <span className="font-cinzel font-bold text-base text-zinc-100">{skillDef.name}</span>
                    ) : (
                      <span className="text-xs text-zinc-500 font-mono">Empty Socket</span>
                    )}
                  </div>

                  {equippedSkill && (
                    <button
                      onClick={() => handleToggleAuto(slotIdx)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        equippedSkill.isAutoCast
                          ? 'bg-sky-950 text-sky-300 border border-sky-600'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}
                    >
                      {equippedSkill.isAutoCast ? 'AUTO-FIRE: ON' : 'AUTO-FIRE: OFF (MANUAL)'}
                    </button>
                  )}
                </div>

                {/* Skill selector dropdown or chips */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {Object.values(ACTIVE_SKILLS).map((sk) => (
                    <button
                      key={sk.id}
                      onClick={() => handleSelectActiveSkill(slotIdx, sk.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        equippedSkill?.skillDefId === sk.id
                          ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span style={{ color: sk.projectileColor }}>{getIcon(sk.icon)}</span>
                      <span>{sk.name}</span>
                    </button>
                  ))}
                </div>

                {/* Linked Supports */}
                {equippedSkill && (
                  <div className="border-t border-zinc-800/80 pt-3">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase mb-2">
                      Linked Support Gems (Max 3 Links)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(SUPPORT_GEMS).map((sup) => {
                        const isLinked = equippedSkill.supportGemIds.includes(sup.id);
                        return (
                          <button
                            key={sup.id}
                            onClick={() => handleToggleSupport(slotIdx, sup.id)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all ${
                              isLinked
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                            }`}
                          >
                            + {sup.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
