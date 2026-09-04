// src/components/Quests/QuestLogView.tsx

import React from 'react';
import { QUESTS } from '../../constants/quests';
import { GameEngine } from '../../engine/GameEngine';
import * as LucideIcons from 'lucide-react';

interface QuestLogViewProps {
  engine: GameEngine;
  onClose: () => void;
}

export const QuestLogView: React.FC<QuestLogViewProps> = ({ engine, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm select-none">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-3xl shadow-2xl flex flex-col overflow-hidden max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.BookOpen className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">QUEST LOG & EXPEDITIONS</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Quest List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {Object.values(QUESTS).map((quest) => {
            const isCompleted = engine.completedQuestIds.includes(quest.id);

            return (
              <div
                key={quest.id}
                className={`rounded-xl border p-4 transition-all ${
                  isCompleted
                    ? 'bg-zinc-900/40 border-emerald-900/60 opacity-80'
                    : 'bg-zinc-900/80 border-amber-500/40 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-cinzel font-bold text-base text-zinc-100">{quest.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400">({quest.act})</span>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      isCompleted
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {isCompleted ? 'COMPLETED' : 'ACTIVE'}
                  </span>
                </div>

                <div className="text-xs text-zinc-400 mb-2 italic">Quest Giver: {quest.giver}</div>
                <p className="text-zinc-300 text-xs mb-3 leading-relaxed">{quest.description}</p>

                <div className="bg-zinc-950/60 border border-zinc-800/80 p-2.5 rounded-lg text-xs space-y-1">
                  <div>
                    <span className="text-amber-400 font-bold">Objective: </span>
                    <span className="text-zinc-200">{quest.objectiveText}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-bold">Rewards: </span>
                    <span className="text-zinc-300">{quest.rewards.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
