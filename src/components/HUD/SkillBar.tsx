// src/components/HUD/SkillBar.tsx

import React from 'react';
import { Player } from '../../engine/Player';
import { ACTIVE_SKILLS } from '../../constants/skillGems';
import { EquipmentSlot } from '../../types/items';
import * as LucideIcons from 'lucide-react';

interface SkillBarProps {
  player: Player;
  onSkillClick: (slotIdx: number) => void;
  onFlaskClick: (slot: EquipmentSlot) => void;
  onDashClick: () => void;
}

export const SkillBar: React.FC<SkillBarProps> = ({ player, onSkillClick, onFlaskClick, onDashClick }) => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Zap;
    return <IconComponent className="w-5 h-5" />;
  };

  const flaskSlots: EquipmentSlot[] = ['flask1', 'flask2', 'flask3', 'flask4', 'flask5'];
  const skillKeyLabels = ['LMB', 'RMB', 'AUTO', 'AUTO', 'AUTO'];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-950/90 border border-zinc-700/80 px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md z-30 select-none">
      {/* FLASKS 1-5 */}
      <div className="flex items-center gap-1.5 border-r border-zinc-800 pr-3">
        {flaskSlots.map((slot, idx) => {
          const item = player.equipment[slot];
          const hasFlask = !!item;
          return (
            <button
              key={slot}
              onClick={() => onFlaskClick(slot)}
              disabled={!hasFlask}
              className={`relative w-10 h-14 rounded border flex flex-col items-center justify-between p-1 transition-all ${
                hasFlask
                  ? 'bg-zinc-900 border-zinc-600 hover:border-amber-400 active:scale-95'
                  : 'bg-zinc-950/60 border-zinc-800 opacity-40 cursor-not-allowed'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-zinc-400">{idx + 1}</span>
              {hasFlask ? (
                <div style={{ color: item?.iconColor || '#ef4444' }}>
                  {getIcon(item?.icon || 'FlaskConical')}
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full border border-dashed border-zinc-700" />
              )}
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-amber-500" />
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SKILLS 0 to 4 (LMB, Q, W, E, R) */}
      <div className="flex items-center gap-2">
        {player.equippedSkills.slice(0, 5).map((equippedSkill, idx) => {
          const skillDef = equippedSkill ? ACTIVE_SKILLS[equippedSkill.skillDefId] : null;
          const hasSkill = !!skillDef;
          const cdPct = equippedSkill && skillDef && skillDef.baseCooldown > 0
            ? Math.max(0, equippedSkill.cooldownTimer / skillDef.baseCooldown)
            : 0;

          return (
            <button
              key={idx}
              onClick={() => onSkillClick(idx)}
              disabled={!hasSkill}
              className={`relative w-12 h-12 rounded-lg border flex flex-col items-center justify-center transition-all ${
                hasSkill
                  ? 'bg-zinc-900 border-zinc-600 hover:border-sky-400 active:scale-95 text-zinc-200'
                  : 'bg-zinc-950/60 border-zinc-800 text-zinc-600 cursor-not-allowed'
              }`}
            >
              {/* Cooldown sweep overlay */}
              {cdPct > 0 && (
                <div
                  className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none transition-all"
                  style={{ clipPath: `inset(${100 - cdPct * 100}% 0 0 0)` }}
                />
              )}

              {/* Skill Icon */}
              {hasSkill && (
                <div style={{ color: skillDef?.projectileColor || '#38bdf8' }}>
                  {getIcon(skillDef?.icon || 'Zap')}
                </div>
              )}

              {/* Keybind badge */}
              <span className="absolute -top-2 -right-2 bg-zinc-800 border border-zinc-600 px-1 py-0.2 rounded text-[9px] font-mono font-bold text-zinc-300">
                {skillKeyLabels[idx]}
              </span>

              {/* Auto cast badge */}
              {equippedSkill?.isAutoCast && (
                <span className="absolute -bottom-1 -left-1 bg-sky-950 border border-sky-600 text-sky-400 px-1 rounded text-[8px] font-mono font-bold">
                  AUTO
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* DASH (SPACEBAR) */}
      <div className="border-l border-zinc-800 pl-3">
        <button
          onClick={onDashClick}
          className={`relative w-12 h-12 rounded-lg border flex flex-col items-center justify-center transition-all ${
            player.dashCooldownTimer <= 0
              ? 'bg-orange-950/40 border-orange-600/80 text-orange-300 hover:border-orange-400 active:scale-95'
              : 'bg-zinc-900 border-zinc-800 text-zinc-500'
          }`}
        >
          {player.dashCooldownTimer > 0 && (
            <div
              className="absolute inset-0 bg-black/70 rounded-lg pointer-events-none"
              style={{ clipPath: `inset(${100 - (player.dashCooldownTimer / 2.0) * 100}% 0 0 0)` }}
            />
          )}
          <LucideIcons.FastForward className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-zinc-800 border border-zinc-600 px-1 py-0.2 rounded text-[9px] font-mono font-bold text-zinc-300">
            SPACE
          </span>
        </button>
      </div>
    </div>
  );
};
