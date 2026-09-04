// src/components/PassiveTree/PassiveTreeViewer.tsx

import React, { useEffect, useRef, useState } from 'react';
import { PASSIVE_TREE_DATA } from '../../constants/passiveTreeData';
import { Player } from '../../engine/Player';
import { PassiveNode } from '../../types/passives';
import * as LucideIcons from 'lucide-react';

interface PassiveTreeViewerProps {
  player?: Player;
  selectedStartNodeId?: string;
  onSelectStartNode?: (nodeId: string) => void;
  isSelectionMode?: boolean;
  onClose: () => void;
  onTreeUpdated?: () => void;
  onOpenStatsSummary?: () => void;
}

export const PassiveTreeViewer: React.FC<PassiveTreeViewerProps> = ({
  player,
  selectedStartNodeId,
  onSelectStartNode,
  isSelectionMode = false,
  onClose,
  onTreeUpdated,
  onOpenStatsSummary,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [zoom, setZoom] = useState(0.38);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const [hoveredNode, setHoveredNode] = useState<PassiveNode | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');

  // Center on starting node. Place the Nexus (Tree Root) near the bottom of the view so the
  // trunk/canopy/apex is visible growing upward, reinforcing the "tree" silhouette.
  useEffect(() => {
    const targetNodeId = isSelectionMode
      ? selectedStartNodeId || 'node_center_hub'
      : player?.startNodeId || 'node_center_hub';
    const targetNode = PASSIVE_TREE_DATA.nodes[targetNodeId];
    if (targetNode && canvasRef.current) {
      const cw = canvasRef.current.width / 2;
      const ch = canvasRef.current.height;
      // For the origin Nexus position the node at ~78% down the screen (roots bottom, tree rising up)
      const verticalBias = (targetNodeId === 'node_center_hub') ? ch * 0.78 : ch / 2;
      setPan({ x: cw - targetNode.x * zoom, y: verticalBias - targetNode.y * zoom });
    }
  }, [isSelectionMode, selectedStartNodeId, player?.startNodeId]);

  const canAllocate = (node: PassiveNode): boolean => {
    if (!player) return false;
    if (player.allocatedPassiveNodeIds.has(node.id)) return false;
    if (player.availablePassivePoints <= 0) return false;
    return node.connections.some((neighborId) => player.allocatedPassiveNodeIds.has(neighborId));
  };

  const handleAllocate = (node: PassiveNode) => {
    if (isSelectionMode) {
      onSelectStartNode?.(node.id);
      return;
    }
    if (!player || !canAllocate(node)) return;
    player.allocatedPassiveNodeIds.add(node.id);
    player.availablePassivePoints--;
    player.recalculateStats();
    onTreeUpdated?.();
  };

  const handleRefund = (node: PassiveNode) => {
    if (isSelectionMode || !player) return;
    if (!player.allocatedPassiveNodeIds.has(node.id)) return;
    if (node.id === player.startNodeId) return; // Cannot refund chosen origin
    if (player.availableRespecPoints <= 0) return;

    player.allocatedPassiveNodeIds.delete(node.id);
    player.availablePassivePoints++;
    player.availableRespecPoints--;
    player.recalculateStats();
    onTreeUpdated?.();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#06070a';
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    // Draw Links
    const renderedLinks = new Set<string>();
    Object.values(PASSIVE_TREE_DATA.nodes).forEach((node) => {
      node.connections.forEach((neighborId) => {
        const neighbor = PASSIVE_TREE_DATA.nodes[neighborId];
        if (!neighbor) return;

        const linkKey = [node.id, neighborId].sort().join('---');
        if (renderedLinks.has(linkKey)) return;
        renderedLinks.add(linkKey);

        const isNodeAlloc = player?.allocatedPassiveNodeIds.has(node.id);
        const isNeighAlloc = player?.allocatedPassiveNodeIds.has(neighborId);
        const isBothAlloc = isNodeAlloc && isNeighAlloc;
        const isAvailable = isNodeAlloc || isNeighAlloc;

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(neighbor.x, neighbor.y);

        if (isBothAlloc) {
          ctx.strokeStyle = '#eab308';
          ctx.lineWidth = 4;
          ctx.shadowColor = '#eab308';
          ctx.shadowBlur = 10;
        } else if (isAvailable && !isSelectionMode) {
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.shadowBlur = 0;
        } else {
          ctx.strokeStyle = '#1e293b';
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    });

    // Draw Nodes
    Object.values(PASSIVE_TREE_DATA.nodes).forEach((node) => {
      const isAllocated = isSelectionMode
        ? selectedStartNodeId === node.id
        : player?.allocatedPassiveNodeIds.has(node.id);
      const isEligible = !isSelectionMode && canAllocate(node);
      const isMatch =
        searchQuery.trim().length > 0 &&
        (node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.stats.some((s) => s.displayText.toLowerCase().includes(searchQuery.toLowerCase())));

      const radius = node.type === 'keystone' ? 22 : node.type === 'notable' ? 16 : 10;

      if (isMatch) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius + 12, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 179, 8, 0.35)';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);

      if (isAllocated) {
        ctx.fillStyle = node.type === 'keystone' ? '#dc2626' : '#eab308';
        ctx.fill();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#fef08a';
        ctx.shadowBlur = 12;
      } else if (isEligible || isSelectionMode) {
        ctx.fillStyle = '#0f172a';
        ctx.fill();
        ctx.strokeStyle = isSelectionMode ? '#38bdf8' : '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
      } else {
        ctx.fillStyle = '#090d16';
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 0;
      }

      ctx.stroke();
      ctx.shadowBlur = 0;

      if (node.type === 'keystone') {
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius - 6, 0, Math.PI * 2);
        ctx.strokeStyle = isAllocated ? '#ffffff' : '#ef4444';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });

    ctx.restore();
  }, [zoom, pan, player?.allocatedPassiveNodeIds, selectedStartNodeId, isSelectionMode, hoveredNode, searchQuery]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current) {
      setPan({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouseVirtualX = (e.clientX - pan.x) / zoom;
    const mouseVirtualY = (e.clientY - pan.y) / zoom;

    let found: PassiveNode | null = null;
    for (const node of Object.values(PASSIVE_TREE_DATA.nodes)) {
      const radius = node.type === 'keystone' ? 24 : node.type === 'notable' ? 18 : 12;
      const dx = node.x - mouseVirtualX;
      const dy = node.y - mouseVirtualY;
      if (dx * dx + dy * dy <= radius * radius) {
        found = node;
        break;
      }
    }

    setHoveredNode(found);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (hoveredNode) {
      if (e.button === 0 && !e.shiftKey) {
        handleAllocate(hoveredNode);
      }
    }
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (hoveredNode) {
      handleRefund(hoveredNode);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
    const newZoom = Math.max(0.3, Math.min(2.0, zoom * zoomFactor));

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setPan({
      x: mouseX - (mouseX - pan.x) * (newZoom / zoom),
      y: mouseY - (mouseY - pan.y) * (newZoom / zoom),
    });
    setZoom(newZoom);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col select-none overflow-hidden">
      {/* TOP BAR */}
      <div className="h-14 bg-zinc-950/90 border-b border-zinc-800 px-6 flex items-center justify-between z-10 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LucideIcons.GitFork className="w-5 h-5 text-amber-400" />
            <h2 className="font-cinzel font-bold text-lg text-amber-300">
              {isSelectionMode ? 'CHOOSE YOUR STARTING CONSTELLATION SEED' : 'PASSIVE SKILL CONSTELLATION'}
            </h2>
          </div>

          {!isSelectionMode && player && (
            <div className="flex items-center gap-4 bg-zinc-900/80 px-4 py-1.5 rounded-lg border border-zinc-800 text-sm">
              <div>
                <span className="text-zinc-400">Available Points: </span>
                <span className="font-mono font-bold text-amber-400 text-base">{player.availablePassivePoints}</span>
              </div>
              <div className="w-[1px] h-4 bg-zinc-700" />
              <div>
                <span className="text-zinc-400">Respec Points: </span>
                <span className="font-mono font-bold text-sky-400 text-base">{player.availableRespecPoints}</span>
              </div>
            </div>
          )}
        </div>

        {/* SEARCH & CONTROLS */}
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <LucideIcons.Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tree (e.g. vigor, wisdom, crit, heavy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {!isSelectionMode && onOpenStatsSummary && (
            <button
              onClick={onOpenStatsSummary}
              className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            >
              <LucideIcons.ListFilter className="w-4 h-4" />
              Stats Summary
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1.5 bg-zinc-900 hover:bg-red-950/60 border border-zinc-700 hover:border-red-600 rounded-lg text-zinc-400 hover:text-red-300 transition-all"
          >
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CANVAS TREE VIEW */}
      <div className="relative flex-1 cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          onContextMenu={handleContextMenu}
          onWheel={handleWheel}
          className="w-full h-full block"
        />

        {/* HOVER TOOLTIP */}
        {hoveredNode && (
          <div
            className="fixed z-50 pointer-events-none bg-zinc-950/95 border-2 border-zinc-700 rounded-xl p-4 shadow-2xl backdrop-blur-md max-w-sm -translate-x-1/2 -translate-y-full -mt-4 transition-all"
            style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
              <h3 className="font-cinzel font-bold text-base text-amber-300">{hoveredNode.name}</h3>
              <span
                className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                  hoveredNode.type === 'keystone'
                    ? 'bg-red-950 text-red-400 border-red-800'
                    : hoveredNode.type === 'notable'
                    ? 'bg-amber-950 text-amber-400 border-amber-800'
                    : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                }`}
              >
                {hoveredNode.type.replace('_', ' ')}
              </span>
            </div>

            <div className="space-y-1 my-2">
              {hoveredNode.stats.map((st, i) => (
                <div key={i} className="text-sky-300 font-semibold text-xs leading-relaxed">
                  {st.displayText}
                </div>
              ))}
            </div>

            <p className="text-zinc-400 text-xs mt-2 italic">{hoveredNode.description}</p>

            {hoveredNode.flavor && (
              <p className="text-amber-500/80 text-[11px] mt-2 italic border-t border-zinc-800/80 pt-2">
                "{hoveredNode.flavor}"
              </p>
            )}

            <div className="mt-3 pt-2 border-t border-zinc-800 text-[11px] font-mono">
              {isSelectionMode ? (
                <span className="text-amber-400 font-bold">Left Click to Choose as Starting Seed</span>
              ) : player?.allocatedPassiveNodeIds.has(hoveredNode.id) ? (
                <span className="text-amber-400 font-bold">Allocated (Right Click to Refund)</span>
              ) : canAllocate(hoveredNode) ? (
                <span className="text-emerald-400 font-bold">Left Click to Allocate</span>
              ) : (
                <span className="text-zinc-500">Unallocated</span>
              )}
            </div>
          </div>
        )}

        {/* BOTTOM CONTROLS GUIDE */}
        <div className="absolute bottom-6 left-6 bg-zinc-950/85 border border-zinc-800 px-4 py-2 rounded-lg text-xs text-zinc-400 flex items-center gap-6 backdrop-blur-md">
          <div><span className="text-zinc-200 font-bold">Drag:</span> Pan Tree</div>
          <div><span className="text-zinc-200 font-bold">Scroll:</span> Zoom</div>
          <div>
            <span className="text-zinc-200 font-bold">
              {isSelectionMode ? 'Click Any Node:' : 'Left Click:'}
            </span>{' '}
            {isSelectionMode ? 'Select as Starting Origin' : 'Allocate Point'}
          </div>
        </div>
      </div>
    </div>
  );
};
