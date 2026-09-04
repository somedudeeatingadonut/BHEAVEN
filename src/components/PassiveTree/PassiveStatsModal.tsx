// src/components/PassiveTree/PassiveStatsModal.tsx

import React from 'react';
import { PASSIVE_TREE_DATA } from '../../constants/passiveTreeData';
import { Player } from '../../engine/Player';
import * as LucideIcons from 'lucide-react';

interface PassiveStatsModalProps {
  player: Player;
  onClose: () => void;
}

export const PassiveStatsModal: React.FC<PassiveStatsModalProps> = ({ player, onClose }) => {
  // Aggregate all stats from allocated nodes
  const aggregatedStats: { [key: string]: { label: string; total: number } } = {};
  const keystones: string[] = [];

  player.allocatedPassiveNodeIds.forEach((nodeId) => {
    const node = PASSIVE_TREE_DATA.nodes[nodeId];
    if (!node) return;

    if (node.type === 'keystone') {
      keystones.push(node.name);
    }

    node.stats.forEach((st) => {
      if (!aggregatedStats[st.statKey]) {
        aggregatedStats[st.statKey] = { label: st.displayText, total: 0 };
      }
      aggregatedStats[st.statKey].total += st.value;
    });
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-700 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400">
            <LucideIcons.ListFilter className="w-5 h-5" />
            <h2 className="font-cinzel font-bold text-lg text-zinc-100">PASSIVE TREE STATS SUMMARY</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Keystones */}
          {keystones.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2">
                Active Keystones ({keystones.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {keystones.map((k) => (
                  <span
                    key={k}
                    className="bg-red-950/60 border border-red-800 text-red-300 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Aggregated Modifiers */}
          <div>
            <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
              Total Aggregated Bonuses ({player.allocatedPassiveNodeIds.size} Nodes Allocated)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {Object.entries(aggregatedStats).map(([key, item]) => (
                <div
                  key={key}
                  className="bg-zinc-900/60 border border-zinc-800/80 p-3 rounded-lg flex items-center justify-between text-xs"
                >
                  <span className="text-zinc-300">{item.label.replace(/\+\d+%? /, '')}</span>
                  <span className="font-mono font-bold text-sky-400 text-sm">
                    +{item.total > 1 ? item.total : item.total.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-zinc-900/50 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-5 py-2 rounded-lg text-xs font-semibold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
