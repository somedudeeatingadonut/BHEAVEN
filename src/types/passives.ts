// src/types/passives.ts

export type PassiveNodeType = 'origin_start' | 'small' | 'notable' | 'keystone' | 'mastery';

export type PassiveCategory =
  | 'life_defense'
  | 'armor_evasion'
  | 'energy_shield'
  | 'elemental_fire'
  | 'elemental_cold'
  | 'elemental_lightning'
  | 'physical_melee'
  | 'bow_projectiles'
  | 'spell_magic'
  | 'critical_strikes'
  | 'chaos_poison'
  | 'minions_totems'
  | 'speed_utility'
  | 'keystone_special';

export interface PassiveNodeStat {
  statKey: string;
  value: number;
  displayText: string;
}

export interface PassiveNode {
  id: string;
  name: string;
  type: PassiveNodeType;
  category: PassiveCategory;
  description: string;
  x: number;
  y: number;
  icon: string;
  connections: string[];
  stats: PassiveNodeStat[];
  keystoneFlag?: string | null;
  clusterId?: string | null;
  flavor?: string | null;
}

export interface PassiveTreeData {
  nodes: { [id: string]: PassiveNode };
}
