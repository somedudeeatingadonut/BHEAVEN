// src/constants/passiveTreeData.ts
// Automatically generated World Tree Constellation Dataset (expanded spaced layout).

import { PassiveNode, PassiveTreeData } from '../types/passives';

const nodes: { [id: string]: PassiveNode } = {
  "node_center_hub": {
    "id": "node_center_hub",
    "name": "Nexus of Ascension (Tree Root Base)",
    "type": "origin_start",
    "category": "keystone_special",
    "description": "The primordial root of the World Tree. Grants foundational all-attribute vigor and omni-potential.",
    "x": 0,
    "y": 1000,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 15,
        "displayText": "+15% Global Damage"
      },
      {
        "statKey": "maxLife",
        "value": 30,
        "displayText": "+30 Maximum Life"
      },
      {
        "statKey": "maxMana",
        "value": 30,
        "displayText": "+30 Maximum Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": "From the deepest earth, the World Tree draws life for all branches.",
    "clusterId": null,
    "connections": [
      "root_left_n1",
      "root_omni_n1",
      "root_right_n1",
      "trunk_low_n1"
    ]
  },
  "keystone_omni_holy_radiance": {
    "id": "keystone_omni_holy_radiance",
    "name": "Omni-Holy Radiance (Omni-Stat Holy)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "Holy Damage increases by +2.5% per point in your LOWEST attribute. Drawback: Non-Holy elemental damages deal 20% less damage.",
    "x": 0,
    "y": 2201,
    "icon": "Sun",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 35,
        "displayText": "+35% Holy Damage"
      },
      {
        "statKey": "holyPenetration",
        "value": 12,
        "displayText": "+12% Holy Penetration"
      }
    ],
    "keystoneFlag": "omnipotentHarmony",
    "flavor": "True radiance requires all seven virtues to shine in equal measure.",
    "clusterId": null,
    "connections": [
      "keystone_aetheric_taproot",
      "keystone_sanguine_font",
      "root_omni_n16"
    ]
  },
  "root_omni_n1": {
    "id": "root_omni_n1",
    "name": "Root Vigor 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": 65,
    "y": 1306,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "node_center_hub",
      "root_omni_n2"
    ]
  },
  "root_omni_n2": {
    "id": "root_omni_n2",
    "name": "Root Will 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -43,
    "y": 1740,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 4,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n1",
      "root_omni_n3"
    ]
  },
  "root_omni_n3": {
    "id": "root_omni_n3",
    "name": "Root Wisdom 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -12,
    "y": 1345,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n2",
      "root_omni_n4"
    ]
  },
  "root_omni_n4": {
    "id": "root_omni_n4",
    "name": "Holy Essence Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -1,
    "y": 2011,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n3",
      "root_omni_n5"
    ]
  },
  "root_omni_n5": {
    "id": "root_omni_n5",
    "name": "Life Core 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +20 Maximum Life.",
    "x": -2,
    "y": 1190,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 20,
        "displayText": "+20 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n4",
      "root_omni_n6"
    ]
  },
  "root_omni_n6": {
    "id": "root_omni_n6",
    "name": "Root Vigor 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": 33,
    "y": 1594,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n5",
      "root_omni_n7"
    ]
  },
  "root_omni_n7": {
    "id": "root_omni_n7",
    "name": "Root Will 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Willpower.",
    "x": 49,
    "y": 1518,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 4,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n6",
      "root_omni_n8"
    ]
  },
  "root_omni_n8": {
    "id": "root_omni_n8",
    "name": "Root Wisdom Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 9,
    "y": 1831,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n7",
      "root_omni_n9"
    ]
  },
  "root_omni_n9": {
    "id": "root_omni_n9",
    "name": "Holy Essence 9",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -3,
    "y": 1268,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n10",
      "root_omni_n8"
    ]
  },
  "root_omni_n10": {
    "id": "root_omni_n10",
    "name": "Life Core 10",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +20 Maximum Life.",
    "x": 58,
    "y": 1739,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 20,
        "displayText": "+20 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n11",
      "root_omni_n9"
    ]
  },
  "root_omni_n11": {
    "id": "root_omni_n11",
    "name": "Root Vigor 11",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -85,
    "y": 1316,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n10",
      "root_omni_n12"
    ]
  },
  "root_omni_n12": {
    "id": "root_omni_n12",
    "name": "Root Will Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -71,
    "y": 1607,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 8,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n11",
      "root_omni_n13"
    ]
  },
  "root_omni_n13": {
    "id": "root_omni_n13",
    "name": "Root Wisdom 13",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -41,
    "y": 1434,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n12",
      "root_omni_n14"
    ]
  },
  "root_omni_n14": {
    "id": "root_omni_n14",
    "name": "Holy Essence 14",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -29,
    "y": 1511,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n13",
      "root_omni_n15"
    ]
  },
  "root_omni_n15": {
    "id": "root_omni_n15",
    "name": "Life Core 15",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +20 Maximum Life.",
    "x": 7,
    "y": 1680,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 20,
        "displayText": "+20 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_omni_n14",
      "root_omni_n16"
    ]
  },
  "root_omni_n16": {
    "id": "root_omni_n16",
    "name": "Root Vigor Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": 67,
    "y": 1414,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "vigor",
        "value": 8,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_omni_holy_radiance",
      "root_omni_n15"
    ]
  },
  "keystone_sanguine_font": {
    "id": "keystone_sanguine_font",
    "name": "Sanguine Font (Root Vigor)",
    "type": "keystone",
    "category": "life_defense",
    "description": "Increases Maximum Life by +20% and Life Regen by +8 HP/s. Drawback: Maximum Mana is reduced by 30%.",
    "x": -865,
    "y": 1962,
    "icon": "Heart",
    "stats": [
      {
        "statKey": "vigor",
        "value": 20,
        "displayText": "+20 to Vigor"
      },
      {
        "statKey": "maxLife",
        "value": 100,
        "displayText": "+100 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": "Deep roots drink life directly from the primordial font.",
    "clusterId": null,
    "connections": [
      "keystone_omni_holy_radiance",
      "root_left_n14"
    ]
  },
  "root_left_n1": {
    "id": "root_left_n1",
    "name": "Deep Vitality 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +5 to Vigor.",
    "x": -531,
    "y": 1256,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 5,
        "displayText": "+5 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "node_center_hub",
      "root_left_n2"
    ]
  },
  "root_left_n2": {
    "id": "root_left_n2",
    "name": "Life Well 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -269,
    "y": 1265,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n1",
      "root_left_n3"
    ]
  },
  "root_left_n3": {
    "id": "root_left_n3",
    "name": "Regen Pulse 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +1.5 Life Regen/s.",
    "x": -454,
    "y": 1329,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 1.5,
        "displayText": "+1.5 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n2",
      "root_left_n4"
    ]
  },
  "root_left_n4": {
    "id": "root_left_n4",
    "name": "Phys Ward Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +8% Phys Ailment Resist.",
    "x": -350,
    "y": 1140,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "physicalAilmentResistance",
        "value": 16,
        "displayText": "+8% Phys Ailment Resist"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n3",
      "root_left_n5"
    ]
  },
  "root_left_n5": {
    "id": "root_left_n5",
    "name": "Deep Vitality 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +5 to Vigor.",
    "x": -532,
    "y": 1335,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 5,
        "displayText": "+5 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n4",
      "root_left_n6"
    ]
  },
  "root_left_n6": {
    "id": "root_left_n6",
    "name": "Life Well 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -344,
    "y": 1245,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n5",
      "root_left_n7"
    ]
  },
  "root_left_n7": {
    "id": "root_left_n7",
    "name": "Regen Pulse 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +1.5 Life Regen/s.",
    "x": -421,
    "y": 1258,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 1.5,
        "displayText": "+1.5 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n6",
      "root_left_n8"
    ]
  },
  "root_left_n8": {
    "id": "root_left_n8",
    "name": "Phys Ward Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +8% Phys Ailment Resist.",
    "x": -283,
    "y": 1384,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "physicalAilmentResistance",
        "value": 16,
        "displayText": "+8% Phys Ailment Resist"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n7",
      "root_left_n9"
    ]
  },
  "root_left_n9": {
    "id": "root_left_n9",
    "name": "Deep Vitality 9",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +5 to Vigor.",
    "x": -376,
    "y": 1335,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 5,
        "displayText": "+5 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n10",
      "root_left_n8"
    ]
  },
  "root_left_n10": {
    "id": "root_left_n10",
    "name": "Life Well 10",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -410,
    "y": 1406,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n11",
      "root_left_n9"
    ]
  },
  "root_left_n11": {
    "id": "root_left_n11",
    "name": "Regen Pulse 11",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +1.5 Life Regen/s.",
    "x": -488,
    "y": 1399,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 1.5,
        "displayText": "+1.5 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n10",
      "root_left_n12"
    ]
  },
  "root_left_n12": {
    "id": "root_left_n12",
    "name": "Phys Ward Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +8% Phys Ailment Resist.",
    "x": -495,
    "y": 1504,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "physicalAilmentResistance",
        "value": 16,
        "displayText": "+8% Phys Ailment Resist"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n11",
      "root_left_n13"
    ]
  },
  "root_left_n13": {
    "id": "root_left_n13",
    "name": "Deep Vitality 13",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +5 to Vigor.",
    "x": -598,
    "y": 1528,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 5,
        "displayText": "+5 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_left_n12",
      "root_left_n14"
    ]
  },
  "root_left_n14": {
    "id": "root_left_n14",
    "name": "Life Well 14",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -605,
    "y": 1605,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_sanguine_font",
      "root_left_n13"
    ]
  },
  "keystone_aetheric_taproot": {
    "id": "keystone_aetheric_taproot",
    "name": "Aetheric Taproot (Root Willpower)",
    "type": "keystone",
    "category": "energy_shield",
    "description": "Energy Shield capacity is increased by +40% and restores +5% on enemy kill. Drawback: Armor is reduced by 25%.",
    "x": 865,
    "y": 1962,
    "icon": "Layers",
    "stats": [
      {
        "statKey": "willpower",
        "value": 20,
        "displayText": "+20 to Willpower"
      },
      {
        "statKey": "maxEnergyShield",
        "value": 80,
        "displayText": "+80 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": "The deep spiritual taproot draws endless cosmic energy.",
    "clusterId": null,
    "connections": [
      "keystone_omni_holy_radiance",
      "root_right_n14"
    ]
  },
  "root_right_n1": {
    "id": "root_right_n1",
    "name": "Deep Spirit 1",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 531,
    "y": 1256,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "node_center_hub",
      "root_right_n2"
    ]
  },
  "root_right_n2": {
    "id": "root_right_n2",
    "name": "Aether Shield 2",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +20 Energy Shield.",
    "x": 269,
    "y": 1264,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 20,
        "displayText": "+20 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n1",
      "root_right_n3"
    ]
  },
  "root_right_n3": {
    "id": "root_right_n3",
    "name": "Recharge Flow 3",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +3 ES Recharge/s.",
    "x": 454,
    "y": 1330,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "energyShieldRechargeRate",
        "value": 3,
        "displayText": "+3 ES Recharge/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n2",
      "root_right_n4"
    ]
  },
  "root_right_n4": {
    "id": "root_right_n4",
    "name": "Minion Ward Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": 350,
    "y": 1140,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.16,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n3",
      "root_right_n5"
    ]
  },
  "root_right_n5": {
    "id": "root_right_n5",
    "name": "Deep Spirit 5",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 532,
    "y": 1334,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n4",
      "root_right_n6"
    ]
  },
  "root_right_n6": {
    "id": "root_right_n6",
    "name": "Aether Shield 6",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +20 Energy Shield.",
    "x": 345,
    "y": 1245,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 20,
        "displayText": "+20 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n5",
      "root_right_n7"
    ]
  },
  "root_right_n7": {
    "id": "root_right_n7",
    "name": "Recharge Flow 7",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +3 ES Recharge/s.",
    "x": 422,
    "y": 1259,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "energyShieldRechargeRate",
        "value": 3,
        "displayText": "+3 ES Recharge/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n6",
      "root_right_n8"
    ]
  },
  "root_right_n8": {
    "id": "root_right_n8",
    "name": "Minion Ward Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": 283,
    "y": 1384,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.16,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n7",
      "root_right_n9"
    ]
  },
  "root_right_n9": {
    "id": "root_right_n9",
    "name": "Deep Spirit 9",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 377,
    "y": 1336,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n10",
      "root_right_n8"
    ]
  },
  "root_right_n10": {
    "id": "root_right_n10",
    "name": "Aether Shield 10",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +20 Energy Shield.",
    "x": 411,
    "y": 1407,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 20,
        "displayText": "+20 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n11",
      "root_right_n9"
    ]
  },
  "root_right_n11": {
    "id": "root_right_n11",
    "name": "Recharge Flow 11",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +3 ES Recharge/s.",
    "x": 489,
    "y": 1400,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "energyShieldRechargeRate",
        "value": 3,
        "displayText": "+3 ES Recharge/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n10",
      "root_right_n12"
    ]
  },
  "root_right_n12": {
    "id": "root_right_n12",
    "name": "Minion Ward Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": 494,
    "y": 1505,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.16,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n11",
      "root_right_n13"
    ]
  },
  "root_right_n13": {
    "id": "root_right_n13",
    "name": "Deep Spirit 13",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 597,
    "y": 1526,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "root_right_n12",
      "root_right_n14"
    ]
  },
  "root_right_n14": {
    "id": "root_right_n14",
    "name": "Aether Shield 14",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +20 Energy Shield.",
    "x": 604,
    "y": 1604,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 20,
        "displayText": "+20 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_aetheric_taproot",
      "root_right_n13"
    ]
  },
  "keystone_mind_over_matter": {
    "id": "keystone_mind_over_matter",
    "name": "Mind Over Matter (Mana Shield)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "30% of incoming Damage is taken from Mana before Life or Energy Shield. Drawback: Maximum Energy Shield is reduced by 50%.",
    "x": 426,
    "y": 903,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "intelligence",
        "value": 15,
        "displayText": "+15 to Intelligence"
      },
      {
        "statKey": "maxMana",
        "value": 80,
        "displayText": "+80 Maximum Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": "The sharpened mind shields the fragile flesh.",
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n1",
      "trunk_low_n12",
      "trunk_right_mono_n1"
    ]
  },
  "trunk_low_n1": {
    "id": "trunk_low_n1",
    "name": "Armor Fiber 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Armor.",
    "x": 95,
    "y": 413,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "node_center_hub",
      "trunk_low_n2"
    ]
  },
  "trunk_low_n2": {
    "id": "trunk_low_n2",
    "name": "Core Life 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +15 Maximum Life.",
    "x": -33,
    "y": 327,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 15,
        "displayText": "+15 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n1",
      "trunk_low_n3"
    ]
  },
  "trunk_low_n3": {
    "id": "trunk_low_n3",
    "name": "Stamina Wood 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +10 Maximum Stamina.",
    "x": -79,
    "y": 522,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxStamina",
        "value": 10,
        "displayText": "+10 Maximum Stamina"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n2",
      "trunk_low_n4"
    ]
  },
  "trunk_low_n4": {
    "id": "trunk_low_n4",
    "name": "Growth Power Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +5% Global Damage.",
    "x": 48,
    "y": 506,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 10,
        "displayText": "+5% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n3",
      "trunk_low_n5"
    ]
  },
  "trunk_low_n5": {
    "id": "trunk_low_n5",
    "name": "Armor Fiber 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Armor.",
    "x": -119,
    "y": 456,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n4",
      "trunk_low_n6"
    ]
  },
  "trunk_low_n6": {
    "id": "trunk_low_n6",
    "name": "Core Life 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +15 Maximum Life.",
    "x": 130,
    "y": 571,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 15,
        "displayText": "+15 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n5",
      "trunk_low_n7"
    ]
  },
  "trunk_low_n7": {
    "id": "trunk_low_n7",
    "name": "Stamina Wood 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +10 Maximum Stamina.",
    "x": 18,
    "y": 404,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxStamina",
        "value": 10,
        "displayText": "+10 Maximum Stamina"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n6",
      "trunk_low_n8"
    ]
  },
  "trunk_low_n8": {
    "id": "trunk_low_n8",
    "name": "Growth Power Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +5% Global Damage.",
    "x": -305,
    "y": 521,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 10,
        "displayText": "+5% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n7",
      "trunk_low_n9"
    ]
  },
  "trunk_low_n9": {
    "id": "trunk_low_n9",
    "name": "Armor Fiber 9",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Armor.",
    "x": 169,
    "y": 437,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n10",
      "trunk_low_n8"
    ]
  },
  "trunk_low_n10": {
    "id": "trunk_low_n10",
    "name": "Core Life 10",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +15 Maximum Life.",
    "x": -132,
    "y": 714,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 15,
        "displayText": "+15 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n11",
      "trunk_low_n9"
    ]
  },
  "trunk_low_n11": {
    "id": "trunk_low_n11",
    "name": "Stamina Wood 11",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +10 Maximum Stamina.",
    "x": -42,
    "y": 454,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxStamina",
        "value": 10,
        "displayText": "+10 Maximum Stamina"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_low_n10",
      "trunk_low_n12"
    ]
  },
  "trunk_low_n12": {
    "id": "trunk_low_n12",
    "name": "Growth Power Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +5% Global Damage.",
    "x": 225,
    "y": 528,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 10,
        "displayText": "+5% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_mind_over_matter",
      "trunk_low_n11"
    ]
  },
  "keystone_omnipotent_harmony": {
    "id": "keystone_omnipotent_harmony",
    "name": "Omnipotent Harmony (Balanced Stats)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "If all 7 attributes are within 10 points of each other, gain +35% MORE Damage, +150 Life, +100 Armor, and +100 Evasion. Drawback: If stats diverge, gain no bonus.",
    "x": -561,
    "y": 479,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 20,
        "displayText": "+20% Global Damage"
      }
    ],
    "keystoneFlag": "omnipotentHarmony",
    "flavor": "When all seven cosmic facets harmonize, the mortal reaches perfection.",
    "clusterId": null,
    "connections": [
      "trunk_bifurcation",
      "trunk_left_omni_n12"
    ]
  },
  "trunk_left_omni_n1": {
    "id": "trunk_left_omni_n1",
    "name": "Vigor Fiber 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Vigor.",
    "x": 44,
    "y": 611,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 3,
        "displayText": "+3 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_mind_over_matter",
      "trunk_left_omni_n2"
    ]
  },
  "trunk_left_omni_n2": {
    "id": "trunk_left_omni_n2",
    "name": "Might Fiber 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Strength.",
    "x": -191,
    "y": 485,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 3,
        "displayText": "+3 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n1",
      "trunk_left_omni_n3"
    ]
  },
  "trunk_left_omni_n3": {
    "id": "trunk_left_omni_n3",
    "name": "Wisdom Fiber 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Wisdom.",
    "x": -27,
    "y": 579,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 3,
        "displayText": "+3 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n2",
      "trunk_left_omni_n4"
    ]
  },
  "trunk_left_omni_n4": {
    "id": "trunk_left_omni_n4",
    "name": "Universal Surge Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": -31,
    "y": 684,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n3",
      "trunk_left_omni_n5"
    ]
  },
  "trunk_left_omni_n5": {
    "id": "trunk_left_omni_n5",
    "name": "Vigor Fiber 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Vigor.",
    "x": -132,
    "y": 578,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 3,
        "displayText": "+3 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n4",
      "trunk_left_omni_n6"
    ]
  },
  "trunk_left_omni_n6": {
    "id": "trunk_left_omni_n6",
    "name": "Might Fiber 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Strength.",
    "x": -208,
    "y": 561,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 3,
        "displayText": "+3 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n5",
      "trunk_left_omni_n7"
    ]
  },
  "trunk_left_omni_n7": {
    "id": "trunk_left_omni_n7",
    "name": "Wisdom Fiber 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Wisdom.",
    "x": -170,
    "y": 646,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 3,
        "displayText": "+3 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n6",
      "trunk_left_omni_n8"
    ]
  },
  "trunk_left_omni_n8": {
    "id": "trunk_left_omni_n8",
    "name": "Universal Surge Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": -235,
    "y": 733,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n7",
      "trunk_left_omni_n9"
    ]
  },
  "trunk_left_omni_n9": {
    "id": "trunk_left_omni_n9",
    "name": "Vigor Fiber 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Vigor.",
    "x": -246,
    "y": 629,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 3,
        "displayText": "+3 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n10",
      "trunk_left_omni_n8"
    ]
  },
  "trunk_left_omni_n10": {
    "id": "trunk_left_omni_n10",
    "name": "Might Fiber 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Strength.",
    "x": -317,
    "y": 663,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 3,
        "displayText": "+3 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n11",
      "trunk_left_omni_n9"
    ]
  },
  "trunk_left_omni_n11": {
    "id": "trunk_left_omni_n11",
    "name": "Wisdom Fiber 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Wisdom.",
    "x": -369,
    "y": 605,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 3,
        "displayText": "+3 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_left_omni_n10",
      "trunk_left_omni_n12"
    ]
  },
  "trunk_left_omni_n12": {
    "id": "trunk_left_omni_n12",
    "name": "Universal Surge Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": -466,
    "y": 644,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_omnipotent_harmony",
      "trunk_left_omni_n11"
    ]
  },
  "keystone_monolithic_focus_lower": {
    "id": "keystone_monolithic_focus_lower",
    "name": "Monolithic Focus (Single-Stat Stacker)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "If ANY single attribute reaches 50+, gain +40% MORE Damage with that scaling type. Drawback: Other scaling types deal 20% less damage.",
    "x": 507,
    "y": 474,
    "icon": "Crown",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 20,
        "displayText": "+20% Global Damage"
      }
    ],
    "keystoneFlag": "monolithicFocus",
    "flavor": "Pour everything into a single truth, and all foes shatter before it.",
    "clusterId": null,
    "connections": [
      "trunk_bifurcation",
      "trunk_right_mono_n12"
    ]
  },
  "trunk_right_mono_n1": {
    "id": "trunk_right_mono_n1",
    "name": "Agility Fiber 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": -9,
    "y": 787,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_mind_over_matter",
      "trunk_right_mono_n2"
    ]
  },
  "trunk_right_mono_n2": {
    "id": "trunk_right_mono_n2",
    "name": "Fortune Fiber 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Luck.",
    "x": 64,
    "y": 728,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 3,
        "displayText": "+3 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n1",
      "trunk_right_mono_n3"
    ]
  },
  "trunk_right_mono_n3": {
    "id": "trunk_right_mono_n3",
    "name": "Will Fiber 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Willpower.",
    "x": 104,
    "y": 661,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 3,
        "displayText": "+3 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n2",
      "trunk_right_mono_n4"
    ]
  },
  "trunk_right_mono_n4": {
    "id": "trunk_right_mono_n4",
    "name": "Focused Power Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": 134,
    "y": 808,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n3",
      "trunk_right_mono_n5"
    ]
  },
  "trunk_right_mono_n5": {
    "id": "trunk_right_mono_n5",
    "name": "Agility Fiber 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 166,
    "y": 708,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n4",
      "trunk_right_mono_n6"
    ]
  },
  "trunk_right_mono_n6": {
    "id": "trunk_right_mono_n6",
    "name": "Fortune Fiber 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Luck.",
    "x": 180,
    "y": 631,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 3,
        "displayText": "+3 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n5",
      "trunk_right_mono_n7"
    ]
  },
  "trunk_right_mono_n7": {
    "id": "trunk_right_mono_n7",
    "name": "Will Fiber 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Willpower.",
    "x": 258,
    "y": 628,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 3,
        "displayText": "+3 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n6",
      "trunk_right_mono_n8"
    ]
  },
  "trunk_right_mono_n8": {
    "id": "trunk_right_mono_n8",
    "name": "Focused Power Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": 294,
    "y": 726,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n7",
      "trunk_right_mono_n9"
    ]
  },
  "trunk_right_mono_n9": {
    "id": "trunk_right_mono_n9",
    "name": "Agility Fiber 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 326,
    "y": 558,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n10",
      "trunk_right_mono_n8"
    ]
  },
  "trunk_right_mono_n10": {
    "id": "trunk_right_mono_n10",
    "name": "Fortune Fiber 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Luck.",
    "x": 360,
    "y": 628,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 3,
        "displayText": "+3 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n11",
      "trunk_right_mono_n9"
    ]
  },
  "trunk_right_mono_n11": {
    "id": "trunk_right_mono_n11",
    "name": "Will Fiber 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +3 to Willpower.",
    "x": 318,
    "y": 481,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 3,
        "displayText": "+3 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "trunk_right_mono_n10",
      "trunk_right_mono_n12"
    ]
  },
  "trunk_right_mono_n12": {
    "id": "trunk_right_mono_n12",
    "name": "Focused Power Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Damage.",
    "x": 461,
    "y": 658,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 12,
        "displayText": "+6% Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_monolithic_focus_lower",
      "trunk_right_mono_n11"
    ]
  },
  "trunk_bifurcation": {
    "id": "trunk_bifurcation",
    "name": "The Great Bifurcation",
    "type": "notable",
    "category": "keystone_special",
    "description": "Where the World Tree splits into the Great Left, Right, and Upper Boughs.",
    "x": 63,
    "y": 172,
    "icon": "GitFork",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+8 to Strength"
      },
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+8 to Dexterity"
      },
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+8 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n1",
      "canopy_light_ladder_n1",
      "keystone_blade_flurry_tempest",
      "keystone_colossus_earthbreaker",
      "keystone_monolithic_focus_lower",
      "keystone_omnipotent_harmony",
      "lb_trunk_2h_n1",
      "rb_trunk_dual_n1"
    ]
  },
  "keystone_colossus_earthbreaker": {
    "id": "keystone_colossus_earthbreaker",
    "name": "Colossus Earthbreaker (Str x Phys)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Heavy physical melee slams deal +60% MORE Damage and +35% Area of Effect based on your Equip Load. Drawback: Attack speed is reduced by 20%.",
    "x": -974,
    "y": 895,
    "icon": "Hammer",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.25,
        "displayText": "+25% Heavy Damage"
      }
    ],
    "keystoneFlag": "colossusEarthbreaker",
    "flavor": "Wield the mass of the mountain to shatter the earth.",
    "clusterId": null,
    "connections": [
      "bridge_sky_1",
      "keystone_two_handed_colossus",
      "lb_col_titan_n1",
      "trunk_bifurcation"
    ]
  },
  "keystone_titanic_vitality": {
    "id": "keystone_titanic_vitality",
    "name": "Titanic Vitality (Str x Vigor)",
    "type": "keystone",
    "category": "life_defense",
    "description": "Gain +4.0 Maximum Life per point of Strength. Drawback: Stamina recharge rate is reduced by 15%.",
    "x": -1461,
    "y": 728,
    "icon": "Heart",
    "stats": [
      {
        "statKey": "strength",
        "value": 20,
        "displayText": "+20 to Strength"
      },
      {
        "statKey": "vigor",
        "value": 20,
        "displayText": "+20 to Vigor"
      }
    ],
    "keystoneFlag": "titanicVitality",
    "flavor": "The bulk of the giant fuels the towering colossus.",
    "clusterId": null,
    "connections": [
      "keystone_volcanic_juggernaut",
      "lb_col_titan_n14",
      "lb_titan_bastion_n1"
    ]
  },
  "keystone_immovable_bastion": {
    "id": "keystone_immovable_bastion",
    "name": "Immovable Bastion (Armor Core)",
    "type": "keystone",
    "category": "life_defense",
    "description": "Converts all Evasion into Armor (0% evade chance). Grants +15% Physical Damage Reduction. Drawback: -10% Movement Speed.",
    "x": -2278,
    "y": 791,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 300,
        "displayText": "+300 Armor"
      },
      {
        "statKey": "damageReduction",
        "value": 15,
        "displayText": "+15% Damage Reduction"
      }
    ],
    "keystoneFlag": "immovableBastion",
    "flavor": "A mountain cannot dodge the wind, nor does it need to.",
    "clusterId": null,
    "connections": [
      "keystone_glacial_fortress",
      "lb_titan_bastion_n14"
    ]
  },
  "keystone_two_handed_colossus": {
    "id": "keystone_two_handed_colossus",
    "name": "Two-Handed Colossus (2H Mastery)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Two-handed heavy weapons gain +50% Stagger Chance and +35% More Area Damage. Drawback: Weapon skill cooldowns increased by 15%.",
    "x": -997,
    "y": 460,
    "icon": "Sword",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.2,
        "displayText": "+20% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": "Swing two-handed steel with catastrophic momentum.",
    "clusterId": null,
    "connections": [
      "bridge_sky_2",
      "keystone_colossus_earthbreaker",
      "lb_2h_storm_n1",
      "lb_2h_volcanic_n1",
      "lb_trunk_2h_n14"
    ]
  },
  "keystone_volcanic_juggernaut": {
    "id": "keystone_volcanic_juggernaut",
    "name": "Volcanic Juggernaut (Str x Fire)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "Converts 100% of Heavy Physical Damage to Fire. Heavy slams erupt molten geysers scaling with Strength. Drawback: -15% Movement Speed and -20% Cold Resistance.",
    "x": -1729,
    "y": 357,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "increasedFireDamage",
        "value": 40,
        "displayText": "+40% Fire Damage"
      }
    ],
    "keystoneFlag": "volcanicJuggernaut",
    "flavor": "Bathe in magma and crush foes under molten stone.",
    "clusterId": null,
    "connections": [
      "keystone_crusaders_purge",
      "keystone_prismatic_ward",
      "keystone_titanic_vitality",
      "lb_2h_volcanic_n14",
      "lb_volcanic_glacial_n1"
    ]
  },
  "keystone_glacial_fortress": {
    "id": "keystone_glacial_fortress",
    "name": "Glacial Fortress (Str x Cold)",
    "type": "keystone",
    "category": "elemental_cold",
    "description": "Heavy hits deal bonus Cold damage equal to 15% of your total Armor. Chilled enemies deal 25% less damage to you. Drawback: Movement speed cannot exceed 220 px/s.",
    "x": -2349,
    "y": 360,
    "icon": "Snowflake",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "armor",
        "value": 120,
        "displayText": "+120 Armor"
      },
      {
        "statKey": "increasedColdDamage",
        "value": 30,
        "displayText": "+30% Cold Damage"
      }
    ],
    "keystoneFlag": "glacialFortress",
    "flavor": "An armored citadel encased in permafrost.",
    "clusterId": null,
    "connections": [
      "keystone_heavy_conduit",
      "keystone_immovable_bastion",
      "lb_glacial_golem_n1",
      "lb_volcanic_glacial_n14"
    ]
  },
  "keystone_stormforged_anvil": {
    "id": "keystone_stormforged_anvil",
    "name": "Stormforged Anvil (Str x Lightning)",
    "type": "keystone",
    "category": "elemental_lightning",
    "description": "Heavy weapon slams consume Shock on enemies to deal 80% of remaining shock damage in an instant burst. Drawback: Lightning skills cost +25% more Stamina.",
    "x": -697,
    "y": 41,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "increasedLightningDamage",
        "value": 35,
        "displayText": "+35% Lightning Damage"
      }
    ],
    "keystoneFlag": "stormforgedAnvil",
    "flavor": "Bring down the hammer with the fury of a lightning strike.",
    "clusterId": null,
    "connections": [
      "keystone_prismatic_ward",
      "lb_2h_storm_n14",
      "lb_storm_crusade_n1",
      "lb_storm_entropy_n1"
    ]
  },
  "keystone_crusaders_purge": {
    "id": "keystone_crusaders_purge",
    "name": "Crusader's Divine Purge (Str x Holy)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "Heavy warhammers release Holy shockwaves on hit. Consecrated ground grants +150 Armor per 20 Strength. Drawback: Critical strike chance is reduced by 50%.",
    "x": -1693,
    "y": -327,
    "icon": "Sun",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "wisdom",
        "value": 15,
        "displayText": "+15 to Wisdom"
      },
      {
        "statKey": "increasedHolyDamage",
        "value": 35,
        "displayText": "+35% Holy Damage"
      }
    ],
    "keystoneFlag": "crusadersPurge",
    "flavor": "Purge corruption with holy hammer blows.",
    "clusterId": null,
    "connections": [
      "bridge_sky_3",
      "keystone_caustic_colossus",
      "keystone_volcanic_juggernaut",
      "lb_crusade_conduit_n1",
      "lb_storm_crusade_n14"
    ]
  },
  "keystone_heavy_conduit": {
    "id": "keystone_heavy_conduit",
    "name": "Heavy Conduit (Str x Spell Magic)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Strength grants +1.8% Magical Damage per point. Drawback: Increases all spell mana and stamina costs by 20%.",
    "x": -2232,
    "y": -177,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "strength",
        "value": 20,
        "displayText": "+20 to Strength"
      },
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      }
    ],
    "keystoneFlag": "heavyConduit",
    "flavor": "Channel the arcane through sheer physical force.",
    "clusterId": null,
    "connections": [
      "keystone_glacial_fortress",
      "keystone_tremor_king",
      "lb_crusade_conduit_n14"
    ]
  },
  "keystone_entropic_titan": {
    "id": "keystone_entropic_titan",
    "name": "Entropic Titan (Str x Chaos)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Heavy hits inflict Decay, dealing Chaos DoT equal to 50% of your Strength attribute per second. Drawback: -15% Maximum Life Regeneration.",
    "x": -1191,
    "y": -567,
    "icon": "Droplet",
    "stats": [
      {
        "statKey": "strength",
        "value": 20,
        "displayText": "+20 to Strength"
      },
      {
        "statKey": "increasedChaosDamage",
        "value": 35,
        "displayText": "+35% Chaos Damage"
      }
    ],
    "keystoneFlag": "entropicTitan",
    "flavor": "Corrosion infuses every crushing blow.",
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n1",
      "lb_storm_entropy_n12",
      "will_storm_path_n1"
    ]
  },
  "keystone_caustic_colossus": {
    "id": "keystone_caustic_colossus",
    "name": "Caustic Colossus (Str x Acid)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Heavy slams coat the ground in bubbling Acid that dissolves 40% of monster armor. Drawback: -15% Maximum Energy Shield.",
    "x": -1941,
    "y": -687,
    "icon": "Droplets",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "increasedAcidDamage",
        "value": 35,
        "displayText": "+35% Acid Damage"
      }
    ],
    "keystoneFlag": "causticColossus",
    "flavor": "Armor melts into slush beneath the titan\u2019s weight.",
    "clusterId": null,
    "connections": [
      "bridge_sky_4",
      "keystone_crusaders_purge",
      "lb_caustic_tremor_n1",
      "lb_entropy_caustic_n14"
    ]
  },
  "keystone_tremor_king": {
    "id": "keystone_tremor_king",
    "name": "Tremor King (Str x Sonic)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Heavy blunt hits generate concussive sonic rings that stagger all nearby enemies for 1.2s. Drawback: Sonic skills have +20% longer base cooldown.",
    "x": -2359,
    "y": -816,
    "icon": "Volume2",
    "stats": [
      {
        "statKey": "strength",
        "value": 15,
        "displayText": "+15 to Strength"
      },
      {
        "statKey": "increasedSonicDamage",
        "value": 35,
        "displayText": "+35% Sonic Damage"
      }
    ],
    "keystoneFlag": "tremorKing",
    "flavor": "Sound waves echo like thunder through the shattered cavern.",
    "clusterId": null,
    "connections": [
      "keystone_heavy_conduit",
      "lb_caustic_tremor_n14",
      "lb_tremor_hemo_n1"
    ]
  },
  "keystone_hemomancy": {
    "id": "keystone_hemomancy",
    "name": "Hemomancy (Blood Magic)",
    "type": "keystone",
    "category": "life_defense",
    "description": "Removes all Mana. All skills cost Life. Grants +25% MORE Max Life. Drawback: -30% Life flask recovery.",
    "x": -2977,
    "y": -632,
    "icon": "Droplets",
    "stats": [
      {
        "statKey": "vigor",
        "value": 25,
        "displayText": "+25 to Vigor"
      },
      {
        "statKey": "maxLife",
        "value": 150,
        "displayText": "+150 Maximum Life"
      }
    ],
    "keystoneFlag": "hemomancy",
    "flavor": "Power surges through the blood; mana is an illusion.",
    "clusterId": null,
    "connections": [
      "bridge_sky_5",
      "keystone_golem_titan_garrison",
      "lb_tremor_hemo_n12",
      "will_hemo_infernal_n1"
    ]
  },
  "keystone_golem_titan_garrison": {
    "id": "keystone_golem_titan_garrison",
    "name": "Golem Titan Garrison (Will x Phys)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon stone colossus golems that gain +40% Life and +40% Damage, drawing aggro and slamming enemies. Drawback: You take 10% more damage while golems live.",
    "x": -2766,
    "y": 212,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.4,
        "displayText": "+40% Minion Life"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.4,
        "displayText": "+40% Minion Damage"
      }
    ],
    "keystoneFlag": "golemTitanGarrison",
    "flavor": "Stone titans answer the call of a sovereign will.",
    "clusterId": null,
    "connections": [
      "bastion_conduit_n1",
      "keystone_hemomancy",
      "lb_glacial_golem_n12",
      "will_frost_path_n1"
    ]
  },
  "lb_col_titan_n1": {
    "id": "lb_col_titan_n1",
    "name": "Heavy Strength 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -773,
    "y": 487,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_colossus_earthbreaker",
      "lb_col_titan_n2"
    ]
  },
  "lb_col_titan_n2": {
    "id": "lb_col_titan_n2",
    "name": "Iron Plates 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +28 Armor.",
    "x": -826,
    "y": 544,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 28,
        "displayText": "+28 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n1",
      "lb_col_titan_n3"
    ]
  },
  "lb_col_titan_n3": {
    "id": "lb_col_titan_n3",
    "name": "Vigor Pulse 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -883,
    "y": 612,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n2",
      "lb_col_titan_n4"
    ]
  },
  "lb_col_titan_n4": {
    "id": "lb_col_titan_n4",
    "name": "Heavy Strength Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1031,
    "y": 646,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n3",
      "lb_col_titan_n5"
    ]
  },
  "lb_col_titan_n5": {
    "id": "lb_col_titan_n5",
    "name": "Iron Plates 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +28 Armor.",
    "x": -1186,
    "y": 443,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 28,
        "displayText": "+28 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n4",
      "lb_col_titan_n6"
    ]
  },
  "lb_col_titan_n6": {
    "id": "lb_col_titan_n6",
    "name": "Vigor Pulse 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -1172,
    "y": 529,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n5",
      "lb_col_titan_n7"
    ]
  },
  "lb_col_titan_n7": {
    "id": "lb_col_titan_n7",
    "name": "Heavy Strength 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1129,
    "y": 595,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n6",
      "lb_col_titan_n8"
    ]
  },
  "lb_col_titan_n8": {
    "id": "lb_col_titan_n8",
    "name": "Iron Plates Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +28 Armor.",
    "x": -1270,
    "y": 380,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 56,
        "displayText": "+28 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n7",
      "lb_col_titan_n9"
    ]
  },
  "lb_col_titan_n9": {
    "id": "lb_col_titan_n9",
    "name": "Vigor Pulse 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -1213,
    "y": 596,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n10",
      "lb_col_titan_n8"
    ]
  },
  "lb_col_titan_n10": {
    "id": "lb_col_titan_n10",
    "name": "Heavy Strength 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1250,
    "y": 526,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n11",
      "lb_col_titan_n9"
    ]
  },
  "lb_col_titan_n11": {
    "id": "lb_col_titan_n11",
    "name": "Iron Plates 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +28 Armor.",
    "x": -1310,
    "y": 477,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 28,
        "displayText": "+28 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n10",
      "lb_col_titan_n12"
    ]
  },
  "lb_col_titan_n12": {
    "id": "lb_col_titan_n12",
    "name": "Vigor Pulse Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -1376,
    "y": 558,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "vigor",
        "value": 8,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n11",
      "lb_col_titan_n13"
    ]
  },
  "lb_col_titan_n13": {
    "id": "lb_col_titan_n13",
    "name": "Heavy Strength 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1374,
    "y": 432,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_col_titan_n12",
      "lb_col_titan_n14"
    ]
  },
  "lb_col_titan_n14": {
    "id": "lb_col_titan_n14",
    "name": "Iron Plates 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +28 Armor.",
    "x": -1442,
    "y": 477,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 28,
        "displayText": "+28 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_titanic_vitality",
      "lb_col_titan_n13"
    ]
  },
  "lb_titan_bastion_n1": {
    "id": "lb_titan_bastion_n1",
    "name": "Plated Bastion 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +36 Armor.",
    "x": -1548,
    "y": 459,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 36,
        "displayText": "+36 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_titanic_vitality",
      "lb_titan_bastion_n2"
    ]
  },
  "lb_titan_bastion_n2": {
    "id": "lb_titan_bastion_n2",
    "name": "Endurance Core 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -1549,
    "y": 558,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n1",
      "lb_titan_bastion_n3"
    ]
  },
  "lb_titan_bastion_n3": {
    "id": "lb_titan_bastion_n3",
    "name": "Stagger Guard 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2% Damage Reduction.",
    "x": -1609,
    "y": 508,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "damageReduction",
        "value": 2,
        "displayText": "+2% Damage Reduction"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n2",
      "lb_titan_bastion_n4"
    ]
  },
  "lb_titan_bastion_n4": {
    "id": "lb_titan_bastion_n4",
    "name": "Plated Bastion Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +36 Armor.",
    "x": -1648,
    "y": 608,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 72,
        "displayText": "+36 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n3",
      "lb_titan_bastion_n5"
    ]
  },
  "lb_titan_bastion_n5": {
    "id": "lb_titan_bastion_n5",
    "name": "Endurance Core 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -1734,
    "y": 547,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n4",
      "lb_titan_bastion_n6"
    ]
  },
  "lb_titan_bastion_n6": {
    "id": "lb_titan_bastion_n6",
    "name": "Stagger Guard 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2% Damage Reduction.",
    "x": -1757,
    "y": 622,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "damageReduction",
        "value": 2,
        "displayText": "+2% Damage Reduction"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n5",
      "lb_titan_bastion_n7"
    ]
  },
  "lb_titan_bastion_n7": {
    "id": "lb_titan_bastion_n7",
    "name": "Plated Bastion 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +36 Armor.",
    "x": -1820,
    "y": 524,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 36,
        "displayText": "+36 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n6",
      "lb_titan_bastion_n8"
    ]
  },
  "lb_titan_bastion_n8": {
    "id": "lb_titan_bastion_n8",
    "name": "Endurance Core Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -1863,
    "y": 620,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 50,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n7",
      "lb_titan_bastion_n9"
    ]
  },
  "lb_titan_bastion_n9": {
    "id": "lb_titan_bastion_n9",
    "name": "Stagger Guard 9",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2% Damage Reduction.",
    "x": -1912,
    "y": 503,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "damageReduction",
        "value": 2,
        "displayText": "+2% Damage Reduction"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n10",
      "lb_titan_bastion_n8"
    ]
  },
  "lb_titan_bastion_n10": {
    "id": "lb_titan_bastion_n10",
    "name": "Plated Bastion 10",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +36 Armor.",
    "x": -1960,
    "y": 579,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 36,
        "displayText": "+36 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n11",
      "lb_titan_bastion_n9"
    ]
  },
  "lb_titan_bastion_n11": {
    "id": "lb_titan_bastion_n11",
    "name": "Endurance Core 11",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -1989,
    "y": 499,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n10",
      "lb_titan_bastion_n12"
    ]
  },
  "lb_titan_bastion_n12": {
    "id": "lb_titan_bastion_n12",
    "name": "Stagger Guard Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +2% Damage Reduction.",
    "x": -2142,
    "y": 596,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "damageReduction",
        "value": 4,
        "displayText": "+2% Damage Reduction"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n11",
      "lb_titan_bastion_n13"
    ]
  },
  "lb_titan_bastion_n13": {
    "id": "lb_titan_bastion_n13",
    "name": "Plated Bastion 13",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +36 Armor.",
    "x": -2037,
    "y": 567,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 36,
        "displayText": "+36 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_titan_bastion_n12",
      "lb_titan_bastion_n14"
    ]
  },
  "lb_titan_bastion_n14": {
    "id": "lb_titan_bastion_n14",
    "name": "Endurance Core 14",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +25 Maximum Life.",
    "x": -2085,
    "y": 505,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 25,
        "displayText": "+25 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_immovable_bastion",
      "lb_titan_bastion_n13"
    ]
  },
  "lb_trunk_2h_n1": {
    "id": "lb_trunk_2h_n1",
    "name": "Heavy Grip 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -111,
    "y": 316,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n2",
      "trunk_bifurcation"
    ]
  },
  "lb_trunk_2h_n2": {
    "id": "lb_trunk_2h_n2",
    "name": "Wide Arc 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -274,
    "y": 316,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n1",
      "lb_trunk_2h_n3"
    ]
  },
  "lb_trunk_2h_n3": {
    "id": "lb_trunk_2h_n3",
    "name": "Shock Sweep 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4% AoE.",
    "x": -165,
    "y": 262,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "areaOfEffectMultiplier",
        "value": 0.04,
        "displayText": "+4% AoE"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n2",
      "lb_trunk_2h_n4"
    ]
  },
  "lb_trunk_2h_n4": {
    "id": "lb_trunk_2h_n4",
    "name": "Heavy Grip Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -405,
    "y": 372,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n3",
      "lb_trunk_2h_n5"
    ]
  },
  "lb_trunk_2h_n5": {
    "id": "lb_trunk_2h_n5",
    "name": "Wide Arc 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -345,
    "y": 287,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n4",
      "lb_trunk_2h_n6"
    ]
  },
  "lb_trunk_2h_n6": {
    "id": "lb_trunk_2h_n6",
    "name": "Shock Sweep 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4% AoE.",
    "x": -411,
    "y": 245,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "areaOfEffectMultiplier",
        "value": 0.04,
        "displayText": "+4% AoE"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n5",
      "lb_trunk_2h_n7"
    ]
  },
  "lb_trunk_2h_n7": {
    "id": "lb_trunk_2h_n7",
    "name": "Heavy Grip 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -480,
    "y": 278,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n6",
      "lb_trunk_2h_n8"
    ]
  },
  "lb_trunk_2h_n8": {
    "id": "lb_trunk_2h_n8",
    "name": "Wide Arc Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -565,
    "y": 178,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.1,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n7",
      "lb_trunk_2h_n9"
    ]
  },
  "lb_trunk_2h_n9": {
    "id": "lb_trunk_2h_n9",
    "name": "Shock Sweep 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4% AoE.",
    "x": -558,
    "y": 283,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "areaOfEffectMultiplier",
        "value": 0.04,
        "displayText": "+4% AoE"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n10",
      "lb_trunk_2h_n8"
    ]
  },
  "lb_trunk_2h_n10": {
    "id": "lb_trunk_2h_n10",
    "name": "Heavy Grip 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -646,
    "y": 240,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n11",
      "lb_trunk_2h_n9"
    ]
  },
  "lb_trunk_2h_n11": {
    "id": "lb_trunk_2h_n11",
    "name": "Wide Arc 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -658,
    "y": 317,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n10",
      "lb_trunk_2h_n12"
    ]
  },
  "lb_trunk_2h_n12": {
    "id": "lb_trunk_2h_n12",
    "name": "Shock Sweep Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4% AoE.",
    "x": -731,
    "y": 392,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "areaOfEffectMultiplier",
        "value": 0.08,
        "displayText": "+4% AoE"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n11",
      "lb_trunk_2h_n13"
    ]
  },
  "lb_trunk_2h_n13": {
    "id": "lb_trunk_2h_n13",
    "name": "Heavy Grip 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -723,
    "y": 240,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_trunk_2h_n12",
      "lb_trunk_2h_n14"
    ]
  },
  "lb_trunk_2h_n14": {
    "id": "lb_trunk_2h_n14",
    "name": "Wide Arc 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -793,
    "y": 206,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_two_handed_colossus",
      "lb_trunk_2h_n13"
    ]
  },
  "lb_2h_volcanic_n1": {
    "id": "lb_2h_volcanic_n1",
    "name": "Magma Strength 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1025,
    "y": 164,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_two_handed_colossus",
      "lb_2h_volcanic_n2"
    ]
  },
  "lb_2h_volcanic_n2": {
    "id": "lb_2h_volcanic_n2",
    "name": "Molten Strike 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1159,
    "y": 355,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n1",
      "lb_2h_volcanic_n3"
    ]
  },
  "lb_2h_volcanic_n3": {
    "id": "lb_2h_volcanic_n3",
    "name": "Cinder Flare 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -1100,
    "y": 298,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n2",
      "lb_2h_volcanic_n4"
    ]
  },
  "lb_2h_volcanic_n4": {
    "id": "lb_2h_volcanic_n4",
    "name": "Magma Strength Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1126,
    "y": 155,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n3",
      "lb_2h_volcanic_n5"
    ]
  },
  "lb_2h_volcanic_n5": {
    "id": "lb_2h_volcanic_n5",
    "name": "Molten Strike 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1176,
    "y": 279,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n4",
      "lb_2h_volcanic_n6"
    ]
  },
  "lb_2h_volcanic_n6": {
    "id": "lb_2h_volcanic_n6",
    "name": "Cinder Flare 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -1214,
    "y": 211,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n5",
      "lb_2h_volcanic_n7"
    ]
  },
  "lb_2h_volcanic_n7": {
    "id": "lb_2h_volcanic_n7",
    "name": "Magma Strength 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1255,
    "y": 277,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n6",
      "lb_2h_volcanic_n8"
    ]
  },
  "lb_2h_volcanic_n8": {
    "id": "lb_2h_volcanic_n8",
    "name": "Molten Strike Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1306,
    "y": 161,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 16,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n7",
      "lb_2h_volcanic_n9"
    ]
  },
  "lb_2h_volcanic_n9": {
    "id": "lb_2h_volcanic_n9",
    "name": "Cinder Flare 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -1332,
    "y": 263,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n10",
      "lb_2h_volcanic_n8"
    ]
  },
  "lb_2h_volcanic_n10": {
    "id": "lb_2h_volcanic_n10",
    "name": "Magma Strength 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1397,
    "y": 214,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n11",
      "lb_2h_volcanic_n9"
    ]
  },
  "lb_2h_volcanic_n11": {
    "id": "lb_2h_volcanic_n11",
    "name": "Molten Strike 11",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1404,
    "y": 291,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n10",
      "lb_2h_volcanic_n12"
    ]
  },
  "lb_2h_volcanic_n12": {
    "id": "lb_2h_volcanic_n12",
    "name": "Cinder Flare Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -1506,
    "y": 317,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 10,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n11",
      "lb_2h_volcanic_n13"
    ]
  },
  "lb_2h_volcanic_n13": {
    "id": "lb_2h_volcanic_n13",
    "name": "Magma Strength 13",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1482,
    "y": 215,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_volcanic_n12",
      "lb_2h_volcanic_n14"
    ]
  },
  "lb_2h_volcanic_n14": {
    "id": "lb_2h_volcanic_n14",
    "name": "Molten Strike 14",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1557,
    "y": 179,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_volcanic_juggernaut",
      "lb_2h_volcanic_n13"
    ]
  },
  "lb_volcanic_glacial_n1": {
    "id": "lb_volcanic_glacial_n1",
    "name": "Frost Armor 1",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +30 Armor.",
    "x": -1615,
    "y": 105,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_volcanic_juggernaut",
      "lb_volcanic_glacial_n2"
    ]
  },
  "lb_volcanic_glacial_n2": {
    "id": "lb_volcanic_glacial_n2",
    "name": "Biting Cold 2",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -1647,
    "y": 176,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n1",
      "lb_volcanic_glacial_n3"
    ]
  },
  "lb_volcanic_glacial_n3": {
    "id": "lb_volcanic_glacial_n3",
    "name": "Chill Bind 3",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -1690,
    "y": 86,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n2",
      "lb_volcanic_glacial_n4"
    ]
  },
  "lb_volcanic_glacial_n4": {
    "id": "lb_volcanic_glacial_n4",
    "name": "Frost Armor Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +30 Armor.",
    "x": -1756,
    "y": 167,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 60,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n3",
      "lb_volcanic_glacial_n5"
    ]
  },
  "lb_volcanic_glacial_n5": {
    "id": "lb_volcanic_glacial_n5",
    "name": "Biting Cold 5",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -1815,
    "y": 78,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n4",
      "lb_volcanic_glacial_n6"
    ]
  },
  "lb_volcanic_glacial_n6": {
    "id": "lb_volcanic_glacial_n6",
    "name": "Chill Bind 6",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -1851,
    "y": 212,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n5",
      "lb_volcanic_glacial_n7"
    ]
  },
  "lb_volcanic_glacial_n7": {
    "id": "lb_volcanic_glacial_n7",
    "name": "Frost Armor 7",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +30 Armor.",
    "x": -1869,
    "y": 133,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n6",
      "lb_volcanic_glacial_n8"
    ]
  },
  "lb_volcanic_glacial_n8": {
    "id": "lb_volcanic_glacial_n8",
    "name": "Biting Cold Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -1955,
    "y": 229,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 16,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n7",
      "lb_volcanic_glacial_n9"
    ]
  },
  "lb_volcanic_glacial_n9": {
    "id": "lb_volcanic_glacial_n9",
    "name": "Chill Bind 9",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -1975,
    "y": 126,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n10",
      "lb_volcanic_glacial_n8"
    ]
  },
  "lb_volcanic_glacial_n10": {
    "id": "lb_volcanic_glacial_n10",
    "name": "Frost Armor 10",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +30 Armor.",
    "x": -2040,
    "y": 83,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n11",
      "lb_volcanic_glacial_n9"
    ]
  },
  "lb_volcanic_glacial_n11": {
    "id": "lb_volcanic_glacial_n11",
    "name": "Biting Cold 11",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -2061,
    "y": 221,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n10",
      "lb_volcanic_glacial_n12"
    ]
  },
  "lb_volcanic_glacial_n12": {
    "id": "lb_volcanic_glacial_n12",
    "name": "Chill Bind Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -2156,
    "y": 68,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 8,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n11",
      "lb_volcanic_glacial_n13"
    ]
  },
  "lb_volcanic_glacial_n13": {
    "id": "lb_volcanic_glacial_n13",
    "name": "Frost Armor 13",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +30 Armor.",
    "x": -2085,
    "y": 147,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_volcanic_glacial_n12",
      "lb_volcanic_glacial_n14"
    ]
  },
  "lb_volcanic_glacial_n14": {
    "id": "lb_volcanic_glacial_n14",
    "name": "Biting Cold 14",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -2157,
    "y": 177,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_glacial_fortress",
      "lb_volcanic_glacial_n13"
    ]
  },
  "lb_2h_storm_n1": {
    "id": "lb_2h_storm_n1",
    "name": "Thunder Grip 1",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Strength.",
    "x": -775,
    "y": 297,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_two_handed_colossus",
      "lb_2h_storm_n2"
    ]
  },
  "lb_2h_storm_n2": {
    "id": "lb_2h_storm_n2",
    "name": "Shockwave Arc 2",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": -1030,
    "y": 87,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n1",
      "lb_2h_storm_n3"
    ]
  },
  "lb_2h_storm_n3": {
    "id": "lb_2h_storm_n3",
    "name": "Static Discharge 3",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": -853,
    "y": 294,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n2",
      "lb_2h_storm_n4"
    ]
  },
  "lb_2h_storm_n4": {
    "id": "lb_2h_storm_n4",
    "name": "Thunder Grip Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Strength.",
    "x": -869,
    "y": 110,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n3",
      "lb_2h_storm_n5"
    ]
  },
  "lb_2h_storm_n5": {
    "id": "lb_2h_storm_n5",
    "name": "Shockwave Arc 5",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": -1053,
    "y": 236,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n4",
      "lb_2h_storm_n6"
    ]
  },
  "lb_2h_storm_n6": {
    "id": "lb_2h_storm_n6",
    "name": "Static Discharge 6",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": -870,
    "y": 216,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n5",
      "lb_2h_storm_n7"
    ]
  },
  "lb_2h_storm_n7": {
    "id": "lb_2h_storm_n7",
    "name": "Thunder Grip 7",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1095,
    "y": 44,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n6",
      "lb_2h_storm_n8"
    ]
  },
  "lb_2h_storm_n8": {
    "id": "lb_2h_storm_n8",
    "name": "Shockwave Arc Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": -956,
    "y": 276,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 14,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n7",
      "lb_2h_storm_n9"
    ]
  },
  "lb_2h_storm_n9": {
    "id": "lb_2h_storm_n9",
    "name": "Static Discharge 9",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": -950,
    "y": 172,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n10",
      "lb_2h_storm_n8"
    ]
  },
  "lb_2h_storm_n10": {
    "id": "lb_2h_storm_n10",
    "name": "Thunder Grip 10",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Strength.",
    "x": -959,
    "y": 56,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n11",
      "lb_2h_storm_n9"
    ]
  },
  "lb_2h_storm_n11": {
    "id": "lb_2h_storm_n11",
    "name": "Shockwave Arc 11",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": -1025,
    "y": 10,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n10",
      "lb_2h_storm_n12"
    ]
  },
  "lb_2h_storm_n12": {
    "id": "lb_2h_storm_n12",
    "name": "Static Discharge Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": -1122,
    "y": -360,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 10,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n11",
      "lb_2h_storm_n13"
    ]
  },
  "lb_2h_storm_n13": {
    "id": "lb_2h_storm_n13",
    "name": "Thunder Grip 13",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Strength.",
    "x": -954,
    "y": -21,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_2h_storm_n12",
      "lb_2h_storm_n14"
    ]
  },
  "lb_2h_storm_n14": {
    "id": "lb_2h_storm_n14",
    "name": "Shockwave Arc 14",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": -879,
    "y": -143,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_stormforged_anvil",
      "lb_2h_storm_n13"
    ]
  },
  "lb_storm_crusade_n1": {
    "id": "lb_storm_crusade_n1",
    "name": "Holy Force 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -941,
    "y": -97,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_stormforged_anvil",
      "lb_storm_crusade_n2"
    ]
  },
  "lb_storm_crusade_n2": {
    "id": "lb_storm_crusade_n2",
    "name": "Crusader Might 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -944,
    "y": -187,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n1",
      "lb_storm_crusade_n3"
    ]
  },
  "lb_storm_crusade_n3": {
    "id": "lb_storm_crusade_n3",
    "name": "Radiant Blast 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -1016,
    "y": -66,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n2",
      "lb_storm_crusade_n4"
    ]
  },
  "lb_storm_crusade_n4": {
    "id": "lb_storm_crusade_n4",
    "name": "Holy Force Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -1100,
    "y": -182,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n3",
      "lb_storm_crusade_n5"
    ]
  },
  "lb_storm_crusade_n5": {
    "id": "lb_storm_crusade_n5",
    "name": "Crusader Might 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1089,
    "y": -39,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n4",
      "lb_storm_crusade_n6"
    ]
  },
  "lb_storm_crusade_n6": {
    "id": "lb_storm_crusade_n6",
    "name": "Radiant Blast 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -1148,
    "y": -89,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n5",
      "lb_storm_crusade_n7"
    ]
  },
  "lb_storm_crusade_n7": {
    "id": "lb_storm_crusade_n7",
    "name": "Holy Force 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -1198,
    "y": -152,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n6",
      "lb_storm_crusade_n8"
    ]
  },
  "lb_storm_crusade_n8": {
    "id": "lb_storm_crusade_n8",
    "name": "Crusader Might Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1209,
    "y": -4,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n7",
      "lb_storm_crusade_n9"
    ]
  },
  "lb_storm_crusade_n9": {
    "id": "lb_storm_crusade_n9",
    "name": "Radiant Blast 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -1187,
    "y": -237,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n10",
      "lb_storm_crusade_n8"
    ]
  },
  "lb_storm_crusade_n10": {
    "id": "lb_storm_crusade_n10",
    "name": "Holy Force 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -1272,
    "y": -176,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n11",
      "lb_storm_crusade_n9"
    ]
  },
  "lb_storm_crusade_n11": {
    "id": "lb_storm_crusade_n11",
    "name": "Crusader Might 11",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1254,
    "y": -98,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n10",
      "lb_storm_crusade_n12"
    ]
  },
  "lb_storm_crusade_n12": {
    "id": "lb_storm_crusade_n12",
    "name": "Radiant Blast Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": -1469,
    "y": -234,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n11",
      "lb_storm_crusade_n13"
    ]
  },
  "lb_storm_crusade_n13": {
    "id": "lb_storm_crusade_n13",
    "name": "Holy Force 13",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -1327,
    "y": -122,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_crusade_n12",
      "lb_storm_crusade_n14"
    ]
  },
  "lb_storm_crusade_n14": {
    "id": "lb_storm_crusade_n14",
    "name": "Crusader Might 14",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1381,
    "y": -178,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_crusaders_purge",
      "lb_storm_crusade_n13"
    ]
  },
  "lb_crusade_conduit_n1": {
    "id": "lb_crusade_conduit_n1",
    "name": "Might-Magic 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Strength.",
    "x": -1693,
    "y": -21,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_crusaders_purge",
      "lb_crusade_conduit_n2"
    ]
  },
  "lb_crusade_conduit_n2": {
    "id": "lb_crusade_conduit_n2",
    "name": "Spell Weight 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -1520,
    "y": -143,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n1",
      "lb_crusade_conduit_n3"
    ]
  },
  "lb_crusade_conduit_n3": {
    "id": "lb_crusade_conduit_n3",
    "name": "Arcane Slam 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Spell Damage.",
    "x": -1593,
    "y": -166,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSpellDamage",
        "value": 8,
        "displayText": "+8% Spell Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n2",
      "lb_crusade_conduit_n4"
    ]
  },
  "lb_crusade_conduit_n4": {
    "id": "lb_crusade_conduit_n4",
    "name": "Might-Magic Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Strength.",
    "x": -1690,
    "y": -126,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 10,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n3",
      "lb_crusade_conduit_n5"
    ]
  },
  "lb_crusade_conduit_n5": {
    "id": "lb_crusade_conduit_n5",
    "name": "Spell Weight 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -1828,
    "y": -194,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n4",
      "lb_crusade_conduit_n6"
    ]
  },
  "lb_crusade_conduit_n6": {
    "id": "lb_crusade_conduit_n6",
    "name": "Arcane Slam 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Spell Damage.",
    "x": -1765,
    "y": -52,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSpellDamage",
        "value": 8,
        "displayText": "+8% Spell Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n5",
      "lb_crusade_conduit_n7"
    ]
  },
  "lb_crusade_conduit_n7": {
    "id": "lb_crusade_conduit_n7",
    "name": "Might-Magic 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Strength.",
    "x": -1795,
    "y": -124,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n6",
      "lb_crusade_conduit_n8"
    ]
  },
  "lb_crusade_conduit_n8": {
    "id": "lb_crusade_conduit_n8",
    "name": "Spell Weight Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -1874,
    "y": -54,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 10,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n7",
      "lb_crusade_conduit_n9"
    ]
  },
  "lb_crusade_conduit_n9": {
    "id": "lb_crusade_conduit_n9",
    "name": "Arcane Slam 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Spell Damage.",
    "x": -1901,
    "y": -223,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSpellDamage",
        "value": 8,
        "displayText": "+8% Spell Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n10",
      "lb_crusade_conduit_n8"
    ]
  },
  "lb_crusade_conduit_n10": {
    "id": "lb_crusade_conduit_n10",
    "name": "Might-Magic 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Strength.",
    "x": -1923,
    "y": -148,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n11",
      "lb_crusade_conduit_n9"
    ]
  },
  "lb_crusade_conduit_n11": {
    "id": "lb_crusade_conduit_n11",
    "name": "Spell Weight 11",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -1974,
    "y": -249,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n10",
      "lb_crusade_conduit_n12"
    ]
  },
  "lb_crusade_conduit_n12": {
    "id": "lb_crusade_conduit_n12",
    "name": "Arcane Slam Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Spell Damage.",
    "x": -2064,
    "y": -86,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSpellDamage",
        "value": 16,
        "displayText": "+8% Spell Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n11",
      "lb_crusade_conduit_n13"
    ]
  },
  "lb_crusade_conduit_n13": {
    "id": "lb_crusade_conduit_n13",
    "name": "Might-Magic 13",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Strength.",
    "x": -1999,
    "y": -168,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_crusade_conduit_n12",
      "lb_crusade_conduit_n14"
    ]
  },
  "lb_crusade_conduit_n14": {
    "id": "lb_crusade_conduit_n14",
    "name": "Spell Weight 14",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -2049,
    "y": -229,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_heavy_conduit",
      "lb_crusade_conduit_n13"
    ]
  },
  "lb_storm_entropy_n1": {
    "id": "lb_storm_entropy_n1",
    "name": "Decay Weight 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -881,
    "y": 6,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_stormforged_anvil",
      "lb_storm_entropy_n2"
    ]
  },
  "lb_storm_entropy_n2": {
    "id": "lb_storm_entropy_n2",
    "name": "Entropic Rot 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -1004,
    "y": -142,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n1",
      "lb_storm_entropy_n3"
    ]
  },
  "lb_storm_entropy_n3": {
    "id": "lb_storm_entropy_n3",
    "name": "Bleed Pulverize 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Bleed Chance.",
    "x": -860,
    "y": -68,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToBleed",
        "value": 6,
        "displayText": "+6% Bleed Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n2",
      "lb_storm_entropy_n4"
    ]
  },
  "lb_storm_entropy_n4": {
    "id": "lb_storm_entropy_n4",
    "name": "Decay Weight Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -776,
    "y": -130,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n3",
      "lb_storm_entropy_n5"
    ]
  },
  "lb_storm_entropy_n5": {
    "id": "lb_storm_entropy_n5",
    "name": "Entropic Rot 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -875,
    "y": -220,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n4",
      "lb_storm_entropy_n6"
    ]
  },
  "lb_storm_entropy_n6": {
    "id": "lb_storm_entropy_n6",
    "name": "Bleed Pulverize 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Bleed Chance.",
    "x": -800,
    "y": -231,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToBleed",
        "value": 6,
        "displayText": "+6% Bleed Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n5",
      "lb_storm_entropy_n7"
    ]
  },
  "lb_storm_entropy_n7": {
    "id": "lb_storm_entropy_n7",
    "name": "Decay Weight 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1008,
    "y": -231,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n6",
      "lb_storm_entropy_n8"
    ]
  },
  "lb_storm_entropy_n8": {
    "id": "lb_storm_entropy_n8",
    "name": "Entropic Rot Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -853,
    "y": -321,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n7",
      "lb_storm_entropy_n9"
    ]
  },
  "lb_storm_entropy_n9": {
    "id": "lb_storm_entropy_n9",
    "name": "Bleed Pulverize 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Bleed Chance.",
    "x": -939,
    "y": -265,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToBleed",
        "value": 6,
        "displayText": "+6% Bleed Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n10",
      "lb_storm_entropy_n8"
    ]
  },
  "lb_storm_entropy_n10": {
    "id": "lb_storm_entropy_n10",
    "name": "Decay Weight 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -955,
    "y": -341,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n11",
      "lb_storm_entropy_n9"
    ]
  },
  "lb_storm_entropy_n11": {
    "id": "lb_storm_entropy_n11",
    "name": "Entropic Rot 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -863,
    "y": -426,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_storm_entropy_n10",
      "lb_storm_entropy_n12"
    ]
  },
  "lb_storm_entropy_n12": {
    "id": "lb_storm_entropy_n12",
    "name": "Bleed Pulverize Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Bleed Chance.",
    "x": -1014,
    "y": -502,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToBleed",
        "value": 12,
        "displayText": "+6% Bleed Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_entropic_titan",
      "lb_storm_entropy_n11"
    ]
  },
  "lb_entropy_caustic_n1": {
    "id": "lb_entropy_caustic_n1",
    "name": "Acid Weight 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -948,
    "y": -418,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_entropic_titan",
      "lb_entropy_caustic_n2"
    ]
  },
  "lb_entropy_caustic_n2": {
    "id": "lb_entropy_caustic_n2",
    "name": "Caustic Blast 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": -1025,
    "y": -307,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n1",
      "lb_entropy_caustic_n3"
    ]
  },
  "lb_entropy_caustic_n3": {
    "id": "lb_entropy_caustic_n3",
    "name": "Corrode Splash 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": -1023,
    "y": -398,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n2",
      "lb_entropy_caustic_n4"
    ]
  },
  "lb_entropy_caustic_n4": {
    "id": "lb_entropy_caustic_n4",
    "name": "Acid Weight Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1283,
    "y": -279,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n3",
      "lb_entropy_caustic_n5"
    ]
  },
  "lb_entropy_caustic_n5": {
    "id": "lb_entropy_caustic_n5",
    "name": "Caustic Blast 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": -1366,
    "y": -497,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n4",
      "lb_entropy_caustic_n6"
    ]
  },
  "lb_entropy_caustic_n6": {
    "id": "lb_entropy_caustic_n6",
    "name": "Corrode Splash 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": -1226,
    "y": -368,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n5",
      "lb_entropy_caustic_n7"
    ]
  },
  "lb_entropy_caustic_n7": {
    "id": "lb_entropy_caustic_n7",
    "name": "Acid Weight 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1294,
    "y": -406,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n6",
      "lb_entropy_caustic_n8"
    ]
  },
  "lb_entropy_caustic_n8": {
    "id": "lb_entropy_caustic_n8",
    "name": "Caustic Blast Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": -1411,
    "y": -404,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 16,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n7",
      "lb_entropy_caustic_n9"
    ]
  },
  "lb_entropy_caustic_n9": {
    "id": "lb_entropy_caustic_n9",
    "name": "Corrode Splash 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": -1372,
    "y": -623,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n10",
      "lb_entropy_caustic_n8"
    ]
  },
  "lb_entropy_caustic_n10": {
    "id": "lb_entropy_caustic_n10",
    "name": "Acid Weight 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1462,
    "y": -496,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n11",
      "lb_entropy_caustic_n9"
    ]
  },
  "lb_entropy_caustic_n11": {
    "id": "lb_entropy_caustic_n11",
    "name": "Caustic Blast 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": -1414,
    "y": -557,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n10",
      "lb_entropy_caustic_n12"
    ]
  },
  "lb_entropy_caustic_n12": {
    "id": "lb_entropy_caustic_n12",
    "name": "Corrode Splash Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": -1496,
    "y": -621,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 10,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n11",
      "lb_entropy_caustic_n13"
    ]
  },
  "lb_entropy_caustic_n13": {
    "id": "lb_entropy_caustic_n13",
    "name": "Acid Weight 13",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1508,
    "y": -364,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_entropy_caustic_n12",
      "lb_entropy_caustic_n14"
    ]
  },
  "lb_entropy_caustic_n14": {
    "id": "lb_entropy_caustic_n14",
    "name": "Caustic Blast 14",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": -1521,
    "y": -445,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_colossus",
      "lb_entropy_caustic_n13"
    ]
  },
  "lb_caustic_tremor_n1": {
    "id": "lb_caustic_tremor_n1",
    "name": "Sonic Slam 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1582,
    "y": -493,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_colossus",
      "lb_caustic_tremor_n2"
    ]
  },
  "lb_caustic_tremor_n2": {
    "id": "lb_caustic_tremor_n2",
    "name": "Rumble Wave 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": -1591,
    "y": -577,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n1",
      "lb_caustic_tremor_n3"
    ]
  },
  "lb_caustic_tremor_n3": {
    "id": "lb_caustic_tremor_n3",
    "name": "Concussive Pulse 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6% Stagger Chance.",
    "x": -1652,
    "y": -528,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 6,
        "displayText": "+6% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n2",
      "lb_caustic_tremor_n4"
    ]
  },
  "lb_caustic_tremor_n4": {
    "id": "lb_caustic_tremor_n4",
    "name": "Sonic Slam Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1754,
    "y": -507,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n3",
      "lb_caustic_tremor_n5"
    ]
  },
  "lb_caustic_tremor_n5": {
    "id": "lb_caustic_tremor_n5",
    "name": "Rumble Wave 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": -1844,
    "y": -440,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n4",
      "lb_caustic_tremor_n6"
    ]
  },
  "lb_caustic_tremor_n6": {
    "id": "lb_caustic_tremor_n6",
    "name": "Concussive Pulse 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6% Stagger Chance.",
    "x": -1859,
    "y": -517,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 6,
        "displayText": "+6% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n5",
      "lb_caustic_tremor_n7"
    ]
  },
  "lb_caustic_tremor_n7": {
    "id": "lb_caustic_tremor_n7",
    "name": "Sonic Slam 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -1883,
    "y": -366,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n6",
      "lb_caustic_tremor_n8"
    ]
  },
  "lb_caustic_tremor_n8": {
    "id": "lb_caustic_tremor_n8",
    "name": "Rumble Wave Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": -1948,
    "y": -449,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n7",
      "lb_caustic_tremor_n9"
    ]
  },
  "lb_caustic_tremor_n9": {
    "id": "lb_caustic_tremor_n9",
    "name": "Concussive Pulse 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6% Stagger Chance.",
    "x": -2035,
    "y": -508,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 6,
        "displayText": "+6% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n10",
      "lb_caustic_tremor_n8"
    ]
  },
  "lb_caustic_tremor_n10": {
    "id": "lb_caustic_tremor_n10",
    "name": "Sonic Slam 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -2046,
    "y": -411,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n11",
      "lb_caustic_tremor_n9"
    ]
  },
  "lb_caustic_tremor_n11": {
    "id": "lb_caustic_tremor_n11",
    "name": "Rumble Wave 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": -2087,
    "y": -565,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n10",
      "lb_caustic_tremor_n12"
    ]
  },
  "lb_caustic_tremor_n12": {
    "id": "lb_caustic_tremor_n12",
    "name": "Concussive Pulse Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +6% Stagger Chance.",
    "x": -2262,
    "y": -551,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 12,
        "displayText": "+6% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n11",
      "lb_caustic_tremor_n13"
    ]
  },
  "lb_caustic_tremor_n13": {
    "id": "lb_caustic_tremor_n13",
    "name": "Sonic Slam 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Strength.",
    "x": -2101,
    "y": -467,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 4,
        "displayText": "+4 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_caustic_tremor_n12",
      "lb_caustic_tremor_n14"
    ]
  },
  "lb_caustic_tremor_n14": {
    "id": "lb_caustic_tremor_n14",
    "name": "Rumble Wave 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": -2174,
    "y": -494,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_tremor_king",
      "lb_caustic_tremor_n13"
    ]
  },
  "lb_tremor_hemo_n1": {
    "id": "lb_tremor_hemo_n1",
    "name": "Blood Vigor 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +6 to Vigor.",
    "x": -2317,
    "y": -461,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 6,
        "displayText": "+6 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_tremor_king",
      "lb_tremor_hemo_n2"
    ]
  },
  "lb_tremor_hemo_n2": {
    "id": "lb_tremor_hemo_n2",
    "name": "Arterial Life 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +35 Maximum Life.",
    "x": -2366,
    "y": -538,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 35,
        "displayText": "+35 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n1",
      "lb_tremor_hemo_n3"
    ]
  },
  "lb_tremor_hemo_n3": {
    "id": "lb_tremor_hemo_n3",
    "name": "Heartbeat Regen 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2 Life Regen/s.",
    "x": -2395,
    "y": -465,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 2,
        "displayText": "+2 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n2",
      "lb_tremor_hemo_n4"
    ]
  },
  "lb_tremor_hemo_n4": {
    "id": "lb_tremor_hemo_n4",
    "name": "Blood Vigor Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +6 to Vigor.",
    "x": -2421,
    "y": -635,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "vigor",
        "value": 12,
        "displayText": "+6 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n3",
      "lb_tremor_hemo_n5"
    ]
  },
  "lb_tremor_hemo_n5": {
    "id": "lb_tremor_hemo_n5",
    "name": "Arterial Life 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +35 Maximum Life.",
    "x": -2443,
    "y": -526,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 35,
        "displayText": "+35 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n4",
      "lb_tremor_hemo_n6"
    ]
  },
  "lb_tremor_hemo_n6": {
    "id": "lb_tremor_hemo_n6",
    "name": "Heartbeat Regen 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2 Life Regen/s.",
    "x": -2516,
    "y": -555,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 2,
        "displayText": "+2 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n5",
      "lb_tremor_hemo_n7"
    ]
  },
  "lb_tremor_hemo_n7": {
    "id": "lb_tremor_hemo_n7",
    "name": "Blood Vigor 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +6 to Vigor.",
    "x": -2506,
    "y": -696,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 6,
        "displayText": "+6 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n6",
      "lb_tremor_hemo_n8"
    ]
  },
  "lb_tremor_hemo_n8": {
    "id": "lb_tremor_hemo_n8",
    "name": "Arterial Life Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +35 Maximum Life.",
    "x": -2730,
    "y": -919,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 70,
        "displayText": "+35 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n7",
      "lb_tremor_hemo_n9"
    ]
  },
  "lb_tremor_hemo_n9": {
    "id": "lb_tremor_hemo_n9",
    "name": "Heartbeat Regen 9",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +2 Life Regen/s.",
    "x": -2544,
    "y": -628,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 2,
        "displayText": "+2 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n10",
      "lb_tremor_hemo_n8"
    ]
  },
  "lb_tremor_hemo_n10": {
    "id": "lb_tremor_hemo_n10",
    "name": "Blood Vigor 10",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +6 to Vigor.",
    "x": -2606,
    "y": -581,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 6,
        "displayText": "+6 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n11",
      "lb_tremor_hemo_n9"
    ]
  },
  "lb_tremor_hemo_n11": {
    "id": "lb_tremor_hemo_n11",
    "name": "Arterial Life 11",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +35 Maximum Life.",
    "x": -2677,
    "y": -615,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 35,
        "displayText": "+35 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_tremor_hemo_n10",
      "lb_tremor_hemo_n12"
    ]
  },
  "lb_tremor_hemo_n12": {
    "id": "lb_tremor_hemo_n12",
    "name": "Heartbeat Regen Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +2 Life Regen/s.",
    "x": -2757,
    "y": -515,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "lifeRegen",
        "value": 4,
        "displayText": "+2 Life Regen/s"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_hemomancy",
      "lb_tremor_hemo_n11"
    ]
  },
  "lb_glacial_golem_n1": {
    "id": "lb_glacial_golem_n1",
    "name": "Stone Warden Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2228,
    "y": 145,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_glacial_fortress",
      "lb_glacial_golem_n2"
    ]
  },
  "lb_glacial_golem_n2": {
    "id": "lb_glacial_golem_n2",
    "name": "Basalt Plating 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +30 Armor.",
    "x": -2267,
    "y": 31,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n1",
      "lb_glacial_golem_n3"
    ]
  },
  "lb_glacial_golem_n3": {
    "id": "lb_glacial_golem_n3",
    "name": "Siege Minion 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": -2294,
    "y": 104,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n2",
      "lb_glacial_golem_n4"
    ]
  },
  "lb_glacial_golem_n4": {
    "id": "lb_glacial_golem_n4",
    "name": "Stone Warden Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2375,
    "y": 172,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n3",
      "lb_glacial_golem_n5"
    ]
  },
  "lb_glacial_golem_n5": {
    "id": "lb_glacial_golem_n5",
    "name": "Basalt Plating 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +30 Armor.",
    "x": -2344,
    "y": 44,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n4",
      "lb_glacial_golem_n6"
    ]
  },
  "lb_glacial_golem_n6": {
    "id": "lb_glacial_golem_n6",
    "name": "Siege Minion 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": -2473,
    "y": 215,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n5",
      "lb_glacial_golem_n7"
    ]
  },
  "lb_glacial_golem_n7": {
    "id": "lb_glacial_golem_n7",
    "name": "Stone Warden Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2423,
    "y": 78,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n6",
      "lb_glacial_golem_n8"
    ]
  },
  "lb_glacial_golem_n8": {
    "id": "lb_glacial_golem_n8",
    "name": "Basalt Plating Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +30 Armor.",
    "x": -2750,
    "y": 23,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 60,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n7",
      "lb_glacial_golem_n9"
    ]
  },
  "lb_glacial_golem_n9": {
    "id": "lb_glacial_golem_n9",
    "name": "Siege Minion 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": -2474,
    "y": 137,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n10",
      "lb_glacial_golem_n8"
    ]
  },
  "lb_glacial_golem_n10": {
    "id": "lb_glacial_golem_n10",
    "name": "Stone Warden Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2521,
    "y": 75,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n11",
      "lb_glacial_golem_n9"
    ]
  },
  "lb_glacial_golem_n11": {
    "id": "lb_glacial_golem_n11",
    "name": "Basalt Plating 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +30 Armor.",
    "x": -2594,
    "y": 48,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "lb_glacial_golem_n10",
      "lb_glacial_golem_n12"
    ]
  },
  "lb_glacial_golem_n12": {
    "id": "lb_glacial_golem_n12",
    "name": "Siege Minion Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": -2422,
    "y": -27,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.2,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_golem_titan_garrison",
      "lb_glacial_golem_n11"
    ]
  },
  "keystone_blade_flurry_tempest": {
    "id": "keystone_blade_flurry_tempest",
    "name": "Blade Flurry Tempest (Dex x Phys)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Light multihits build Momentum stacks (+4% Attack Speed and +5% Light Damage per stack while moving). Drawback: Stopping movement causes you to take +15% more damage for 3s.",
    "x": 874,
    "y": 713,
    "icon": "Sword",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.15,
        "displayText": "+15% Attack Speed"
      }
    ],
    "keystoneFlag": "bladeFlurryTempest",
    "flavor": "The blade that never ceases motion cuts through all defense.",
    "clusterId": null,
    "connections": [
      "bridge_sky_1",
      "keystone_dual_wield_dervish",
      "rb_blade_cqb_n1",
      "trunk_bifurcation"
    ]
  },
  "keystone_close_quarters": {
    "id": "keystone_close_quarters",
    "name": "Close-Quarters Ballistics",
    "type": "keystone",
    "category": "bow_projectiles",
    "description": "Projectiles deal up to +50% MORE damage at close range. Drawback: Deal 30% LESS damage at maximum range.",
    "x": 1628,
    "y": 802,
    "icon": "Crosshair",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 20,
        "displayText": "+20 to Dexterity"
      },
      {
        "statKey": "lightDamageMultiplier",
        "value": 0.25,
        "displayText": "+25% Light Damage"
      }
    ],
    "keystoneFlag": "closeQuartersBallistics",
    "flavor": "Look into the predator\u2019s eyes before you loose the string.",
    "clusterId": null,
    "connections": [
      "keystone_cinder_dancer",
      "rb_blade_cqb_n14",
      "rb_cqb_gale_n1"
    ]
  },
  "keystone_galeform_stance": {
    "id": "keystone_galeform_stance",
    "name": "Galeform Stance (Evasion Core)",
    "type": "keystone",
    "category": "armor_evasion",
    "description": "Take 20% less damage if not hit recently; +50% Evasion after being hit. Drawback: Take +15% more damage from rapid consecutive hits.",
    "x": 2297,
    "y": 715,
    "icon": "Wind",
    "stats": [
      {
        "statKey": "evasion",
        "value": 250,
        "displayText": "+250 Evasion Rating"
      },
      {
        "statKey": "movementSpeed",
        "value": 25,
        "displayText": "+25 Movement Speed"
      }
    ],
    "keystoneFlag": "galeformStance",
    "flavor": "The dancer slips through the storm untouched.",
    "clusterId": null,
    "connections": [
      "keystone_rime_stalker",
      "rb_cqb_gale_n14"
    ]
  },
  "keystone_dual_wield_dervish": {
    "id": "keystone_dual_wield_dervish",
    "name": "Dual-Wield Dervish (Dual Melee)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "While dual-wielding, gain +25% Attack Speed and +20% More Damage. Drawback: Lose 10% Armor and cannot equip Shields.",
    "x": 1201,
    "y": 395,
    "icon": "Scissors",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.2,
        "displayText": "+20% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": "Twin steel blades spinning like a tempestuous cyclone.",
    "clusterId": null,
    "connections": [
      "bridge_sky_2",
      "keystone_blade_flurry_tempest",
      "keystone_electro_acrobat",
      "rb_dual_cinder_n1",
      "rb_dual_electro_n1",
      "rb_trunk_dual_n14"
    ]
  },
  "keystone_cinder_dancer": {
    "id": "keystone_cinder_dancer",
    "name": "Cinder-Dancer Volley (Dex x Fire)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "Light bow arrows leave igniting fire embers that detonate when dashed through. Drawback: Maximum Fire Resistance is capped at 50%.",
    "x": 1773,
    "y": 389,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedFireDamage",
        "value": 35,
        "displayText": "+35% Fire Damage"
      }
    ],
    "keystoneFlag": "cinderDancerVolley",
    "flavor": "Dance on sparks and kindle infernos with rapid arrows.",
    "clusterId": null,
    "connections": [
      "keystone_close_quarters",
      "keystone_solar_deadeye",
      "rb_cinder_rime_n1",
      "rb_dual_cinder_n14"
    ]
  },
  "keystone_rime_stalker": {
    "id": "keystone_rime_stalker",
    "name": "Rime-Stalker Needle (Dex x Cold)",
    "type": "keystone",
    "category": "elemental_cold",
    "description": "Light attacks against Chilled or Frozen targets have +40% Critical Strike Chance and pierce all foes. Drawback: Hits against non-chilled targets deal 20% less damage.",
    "x": 2338,
    "y": 251,
    "icon": "Snowflake",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedColdDamage",
        "value": 35,
        "displayText": "+35% Cold Damage"
      }
    ],
    "keystoneFlag": "rimeStalkerNeedle",
    "flavor": "Ice needles pierce frozen hearts with surgical precision.",
    "clusterId": null,
    "connections": [
      "keystone_aether_weaver",
      "keystone_galeform_stance",
      "rb_cinder_rime_n14"
    ]
  },
  "keystone_electro_acrobat": {
    "id": "keystone_electro_acrobat",
    "name": "Electro-Acrobat (Dex x Lightning)",
    "type": "keystone",
    "category": "elemental_lightning",
    "description": "Every 4th light attack fires a piercing lightning bolt that chains +3 times and grants +20% Move Speed. Drawback: -20% Physical Damage.",
    "x": 700,
    "y": 77,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedLightningDamage",
        "value": 35,
        "displayText": "+35% Lightning Damage"
      }
    ],
    "keystoneFlag": "electroAcrobat",
    "flavor": "Ride the lightning bolt between leaping steps.",
    "clusterId": null,
    "connections": [
      "keystone_dual_wield_dervish",
      "rb_dual_electro_n14",
      "rb_electro_solar_n1",
      "rb_electro_venom_n1"
    ]
  },
  "keystone_solar_deadeye": {
    "id": "keystone_solar_deadeye",
    "name": "Solar Deadeye (Dex x Holy)",
    "type": "keystone",
    "category": "bow_projectiles",
    "description": "Bow attacks convert 50% of Physical damage to Holy, creating radiant light beams on hit that heal you for 1% of damage dealt. Drawback: Light arrows cannot chain.",
    "x": 1629,
    "y": -23,
    "icon": "Sun",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedHolyDamage",
        "value": 35,
        "displayText": "+35% Holy Damage"
      }
    ],
    "keystoneFlag": "solarDeadeye",
    "flavor": "Arrows of pure sunlight pierce the gathering dark.",
    "clusterId": null,
    "connections": [
      "bridge_sky_3",
      "keystone_cinder_dancer",
      "keystone_corrosive_fangs",
      "keystone_divine_serendipity",
      "rb_electro_solar_n14",
      "rb_solar_aether_n1"
    ]
  },
  "keystone_aether_weaver": {
    "id": "keystone_aether_weaver",
    "name": "Aether-Weaver Rapier (Dex x Arcane)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Light attacks fire piercing astral blades that scale with Dexterity and restore +5 Mana on hit. Drawback: Spells cannot be cast manually.",
    "x": 2283,
    "y": -198,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedArcaneDamage",
        "value": 35,
        "displayText": "+35% Arcane Damage"
      }
    ],
    "keystoneFlag": "aetherWeaverRapier",
    "flavor": "The rapier weaves threads of pure astral aether.",
    "clusterId": null,
    "connections": [
      "keystone_rime_stalker",
      "keystone_sonic_wind_shear",
      "rb_solar_aether_n14"
    ]
  },
  "keystone_venomous_assassin": {
    "id": "keystone_venomous_assassin",
    "name": "Venomous Assassin (Dex x Chaos)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Light daggers and poleblades inflict stacking Neurotoxin on hit. Poison stacks apply 35% faster. Drawback: -20% Maximum Life.",
    "x": 1252,
    "y": -690,
    "icon": "Droplet",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 20,
        "displayText": "+20 to Dexterity"
      },
      {
        "statKey": "chanceToPoison",
        "value": 35,
        "displayText": "+35% Poison Chance"
      },
      {
        "statKey": "increasedChaosDamage",
        "value": 35,
        "displayText": "+35% Chaos Damage"
      }
    ],
    "keystoneFlag": "venomousAssassin",
    "flavor": "A single cut begins the venomous countdown.",
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n12",
      "rb_venom_corrosive_n1"
    ]
  },
  "keystone_corrosive_fangs": {
    "id": "keystone_corrosive_fangs",
    "name": "Corrosive Fangs (Dex x Acid)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Fist weapons (Caestus/Katar) and daggers apply stacking Acid with ramping DoT on consecutive hits. Drawback: Dash cooldown increased by +0.5s.",
    "x": 1687,
    "y": -661,
    "icon": "Droplets",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedAcidDamage",
        "value": 35,
        "displayText": "+35% Acid Damage"
      }
    ],
    "keystoneFlag": "corrosiveFangs",
    "flavor": "Acid dripped from katars dissolves bone and steel.",
    "clusterId": null,
    "connections": [
      "bridge_sky_4",
      "keystone_solar_deadeye",
      "rb_corrosive_sonic_n1",
      "rb_venom_corrosive_n14"
    ]
  },
  "keystone_sonic_wind_shear": {
    "id": "keystone_sonic_wind_shear",
    "name": "Sonic Wind-Shear (Dex x Sonic)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Moving at high speed generates automatic sonic shockwaves slicing forward. Drawback: Standing still for >1s reduces total damage by 30%.",
    "x": 2379,
    "y": -667,
    "icon": "Volume2",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "increasedSonicDamage",
        "value": 35,
        "displayText": "+35% Sonic Damage"
      }
    ],
    "keystoneFlag": "sonicWindShear",
    "flavor": "Break the sound barrier with every lunging step.",
    "clusterId": null,
    "connections": [
      "keystone_aether_weaver",
      "rb_corrosive_sonic_n14",
      "rb_sonic_fortune_n1"
    ]
  },
  "keystone_fortunes_favor": {
    "id": "keystone_fortunes_favor",
    "name": "Fortune's Favor (Luck Damage Factor)",
    "type": "keystone",
    "category": "critical_strikes",
    "description": "Luck damage roll factor is DOUBLED (almost always rolling maximum damage). Drawback: Minimum base damage roll is reduced by 25%.",
    "x": 3026,
    "y": -426,
    "icon": "Dice5",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "vigor",
        "value": 15,
        "displayText": "+15 to Vigor"
      }
    ],
    "keystoneFlag": "fortunesFavor",
    "flavor": "Fortune rewards only those bold enough to gamble everything.",
    "clusterId": null,
    "connections": [
      "bridge_sky_5",
      "keystone_astral_gambler",
      "rb_fortune_phantom_n1",
      "rb_sonic_fortune_n14"
    ]
  },
  "keystone_phantom_veil": {
    "id": "keystone_phantom_veil",
    "name": "Phantom Veil (Evasion Shroud)",
    "type": "keystone",
    "category": "armor_evasion",
    "description": "Evasion restores Energy Shield when hit based on Dexterity and Luck. Drawback: Maximum Energy Shield is reduced by 15%.",
    "x": 3341,
    "y": -786,
    "icon": "Ghost",
    "stats": [
      {
        "statKey": "evasion",
        "value": 200,
        "displayText": "+200 Evasion"
      },
      {
        "statKey": "luck",
        "value": 20,
        "displayText": "+20 to Luck"
      }
    ],
    "keystoneFlag": "phantomVeil",
    "flavor": "Wraiths of the veil protect the fleetfooted gambler.",
    "clusterId": null,
    "connections": [
      "keystone_banshee_resonance",
      "luck_phantom_astral_n1",
      "rb_fortune_phantom_n12"
    ]
  },
  "rb_blade_cqb_n1": {
    "id": "rb_blade_cqb_n1",
    "name": "Nock Speed 1",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 817,
    "y": 412,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_blade_flurry_tempest",
      "rb_blade_cqb_n2"
    ]
  },
  "rb_blade_cqb_n2": {
    "id": "rb_blade_cqb_n2",
    "name": "Ballistic Piercing 2",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4% Proj Speed.",
    "x": 856,
    "y": 480,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "projectileSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Proj Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n1",
      "rb_blade_cqb_n3"
    ]
  },
  "rb_blade_cqb_n3": {
    "id": "rb_blade_cqb_n3",
    "name": "Arrow Pierce 3",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +1 Pierce.",
    "x": 929,
    "y": 530,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "pierceCount",
        "value": 1,
        "displayText": "+1 Pierce"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n2",
      "rb_blade_cqb_n4"
    ]
  },
  "rb_blade_cqb_n4": {
    "id": "rb_blade_cqb_n4",
    "name": "Reflex Stride Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +30 Evasion.",
    "x": 947,
    "y": 427,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "evasion",
        "value": 60,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n3",
      "rb_blade_cqb_n5"
    ]
  },
  "rb_blade_cqb_n5": {
    "id": "rb_blade_cqb_n5",
    "name": "Nock Speed 5",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1019,
    "y": 590,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n4",
      "rb_blade_cqb_n6"
    ]
  },
  "rb_blade_cqb_n6": {
    "id": "rb_blade_cqb_n6",
    "name": "Ballistic Piercing 6",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4% Proj Speed.",
    "x": 1005,
    "y": 514,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "projectileSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Proj Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n5",
      "rb_blade_cqb_n7"
    ]
  },
  "rb_blade_cqb_n7": {
    "id": "rb_blade_cqb_n7",
    "name": "Arrow Pierce 7",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +1 Pierce.",
    "x": 1078,
    "y": 540,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "pierceCount",
        "value": 1,
        "displayText": "+1 Pierce"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n6",
      "rb_blade_cqb_n8"
    ]
  },
  "rb_blade_cqb_n8": {
    "id": "rb_blade_cqb_n8",
    "name": "Reflex Stride Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +30 Evasion.",
    "x": 1174,
    "y": 583,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "evasion",
        "value": 60,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n7",
      "rb_blade_cqb_n9"
    ]
  },
  "rb_blade_cqb_n9": {
    "id": "rb_blade_cqb_n9",
    "name": "Nock Speed 9",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1250,
    "y": 656,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n10",
      "rb_blade_cqb_n8"
    ]
  },
  "rb_blade_cqb_n10": {
    "id": "rb_blade_cqb_n10",
    "name": "Ballistic Piercing 10",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4% Proj Speed.",
    "x": 1336,
    "y": 528,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "projectileSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Proj Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n11",
      "rb_blade_cqb_n9"
    ]
  },
  "rb_blade_cqb_n11": {
    "id": "rb_blade_cqb_n11",
    "name": "Arrow Pierce 11",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +1 Pierce.",
    "x": 1279,
    "y": 582,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "pierceCount",
        "value": 1,
        "displayText": "+1 Pierce"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n10",
      "rb_blade_cqb_n12"
    ]
  },
  "rb_blade_cqb_n12": {
    "id": "rb_blade_cqb_n12",
    "name": "Reflex Stride Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +30 Evasion.",
    "x": 1460,
    "y": 595,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "evasion",
        "value": 60,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n11",
      "rb_blade_cqb_n13"
    ]
  },
  "rb_blade_cqb_n13": {
    "id": "rb_blade_cqb_n13",
    "name": "Nock Speed 13",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1409,
    "y": 503,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_blade_cqb_n12",
      "rb_blade_cqb_n14"
    ]
  },
  "rb_blade_cqb_n14": {
    "id": "rb_blade_cqb_n14",
    "name": "Ballistic Piercing 14",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4% Proj Speed.",
    "x": 1356,
    "y": 603,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "projectileSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Proj Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_close_quarters",
      "rb_blade_cqb_n13"
    ]
  },
  "rb_cqb_gale_n1": {
    "id": "rb_cqb_gale_n1",
    "name": "Zephyr Evasion 1",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +40 Evasion.",
    "x": 1500,
    "y": 485,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 40,
        "displayText": "+40 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_close_quarters",
      "rb_cqb_gale_n2"
    ]
  },
  "rb_cqb_gale_n2": {
    "id": "rb_cqb_gale_n2",
    "name": "Wind Velocity 2",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1556,
    "y": 552,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n1",
      "rb_cqb_gale_n3"
    ]
  },
  "rb_cqb_gale_n3": {
    "id": "rb_cqb_gale_n3",
    "name": "Gale Rush 3",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +6 Movement Speed.",
    "x": 1600,
    "y": 488,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Movement Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n2",
      "rb_cqb_gale_n4"
    ]
  },
  "rb_cqb_gale_n4": {
    "id": "rb_cqb_gale_n4",
    "name": "Zephyr Evasion Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +40 Evasion.",
    "x": 1669,
    "y": 568,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "evasion",
        "value": 80,
        "displayText": "+40 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n3",
      "rb_cqb_gale_n5"
    ]
  },
  "rb_cqb_gale_n5": {
    "id": "rb_cqb_gale_n5",
    "name": "Wind Velocity 5",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1742,
    "y": 650,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n4",
      "rb_cqb_gale_n6"
    ]
  },
  "rb_cqb_gale_n6": {
    "id": "rb_cqb_gale_n6",
    "name": "Gale Rush 6",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +6 Movement Speed.",
    "x": 1773,
    "y": 579,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Movement Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n5",
      "rb_cqb_gale_n7"
    ]
  },
  "rb_cqb_gale_n7": {
    "id": "rb_cqb_gale_n7",
    "name": "Zephyr Evasion 7",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +40 Evasion.",
    "x": 1825,
    "y": 637,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 40,
        "displayText": "+40 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n6",
      "rb_cqb_gale_n8"
    ]
  },
  "rb_cqb_gale_n8": {
    "id": "rb_cqb_gale_n8",
    "name": "Wind Velocity Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1879,
    "y": 546,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 10,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n7",
      "rb_cqb_gale_n9"
    ]
  },
  "rb_cqb_gale_n9": {
    "id": "rb_cqb_gale_n9",
    "name": "Gale Rush 9",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +6 Movement Speed.",
    "x": 1899,
    "y": 662,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Movement Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n10",
      "rb_cqb_gale_n8"
    ]
  },
  "rb_cqb_gale_n10": {
    "id": "rb_cqb_gale_n10",
    "name": "Zephyr Evasion 10",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +40 Evasion.",
    "x": 1984,
    "y": 547,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 40,
        "displayText": "+40 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n11",
      "rb_cqb_gale_n9"
    ]
  },
  "rb_cqb_gale_n11": {
    "id": "rb_cqb_gale_n11",
    "name": "Wind Velocity 11",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1967,
    "y": 623,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n10",
      "rb_cqb_gale_n12"
    ]
  },
  "rb_cqb_gale_n12": {
    "id": "rb_cqb_gale_n12",
    "name": "Gale Rush Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +6 Movement Speed.",
    "x": 2141,
    "y": 581,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 12,
        "displayText": "+6 Movement Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n11",
      "rb_cqb_gale_n13"
    ]
  },
  "rb_cqb_gale_n13": {
    "id": "rb_cqb_gale_n13",
    "name": "Zephyr Evasion 13",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +40 Evasion.",
    "x": 2035,
    "y": 662,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 40,
        "displayText": "+40 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cqb_gale_n12",
      "rb_cqb_gale_n14"
    ]
  },
  "rb_cqb_gale_n14": {
    "id": "rb_cqb_gale_n14",
    "name": "Wind Velocity 14",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 2109,
    "y": 688,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_galeform_stance",
      "rb_cqb_gale_n13"
    ]
  },
  "rb_trunk_dual_n1": {
    "id": "rb_trunk_dual_n1",
    "name": "Twin Blade Dex 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 127,
    "y": 343,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n2",
      "trunk_bifurcation"
    ]
  },
  "rb_trunk_dual_n2": {
    "id": "rb_trunk_dual_n2",
    "name": "Slash Velocity 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Attack Speed.",
    "x": 202,
    "y": 367,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.03,
        "displayText": "+3% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n1",
      "rb_trunk_dual_n3"
    ]
  },
  "rb_trunk_dual_n3": {
    "id": "rb_trunk_dual_n3",
    "name": "Critical Angle 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Crit Chance.",
    "x": 185,
    "y": 291,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 3,
        "displayText": "+3% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n2",
      "rb_trunk_dual_n4"
    ]
  },
  "rb_trunk_dual_n4": {
    "id": "rb_trunk_dual_n4",
    "name": "Twin Blade Dex Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 338,
    "y": 378,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n3",
      "rb_trunk_dual_n5"
    ]
  },
  "rb_trunk_dual_n5": {
    "id": "rb_trunk_dual_n5",
    "name": "Slash Velocity 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Attack Speed.",
    "x": 406,
    "y": 298,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.03,
        "displayText": "+3% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n4",
      "rb_trunk_dual_n6"
    ]
  },
  "rb_trunk_dual_n6": {
    "id": "rb_trunk_dual_n6",
    "name": "Critical Angle 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Crit Chance.",
    "x": 348,
    "y": 156,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 3,
        "displayText": "+3% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n5",
      "rb_trunk_dual_n7"
    ]
  },
  "rb_trunk_dual_n7": {
    "id": "rb_trunk_dual_n7",
    "name": "Twin Blade Dex 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 463,
    "y": 239,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n6",
      "rb_trunk_dual_n8"
    ]
  },
  "rb_trunk_dual_n8": {
    "id": "rb_trunk_dual_n8",
    "name": "Slash Velocity Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Attack Speed.",
    "x": 530,
    "y": 157,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.06,
        "displayText": "+3% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n7",
      "rb_trunk_dual_n9"
    ]
  },
  "rb_trunk_dual_n9": {
    "id": "rb_trunk_dual_n9",
    "name": "Critical Angle 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Crit Chance.",
    "x": 531,
    "y": 278,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 3,
        "displayText": "+3% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n10",
      "rb_trunk_dual_n8"
    ]
  },
  "rb_trunk_dual_n10": {
    "id": "rb_trunk_dual_n10",
    "name": "Twin Blade Dex 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 598,
    "y": 236,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n11",
      "rb_trunk_dual_n9"
    ]
  },
  "rb_trunk_dual_n11": {
    "id": "rb_trunk_dual_n11",
    "name": "Slash Velocity 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Attack Speed.",
    "x": 605,
    "y": 313,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.03,
        "displayText": "+3% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n10",
      "rb_trunk_dual_n12"
    ]
  },
  "rb_trunk_dual_n12": {
    "id": "rb_trunk_dual_n12",
    "name": "Critical Angle Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Crit Chance.",
    "x": 710,
    "y": 313,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "critChance",
        "value": 6,
        "displayText": "+3% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n11",
      "rb_trunk_dual_n13"
    ]
  },
  "rb_trunk_dual_n13": {
    "id": "rb_trunk_dual_n13",
    "name": "Twin Blade Dex 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 826,
    "y": 335,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_trunk_dual_n12",
      "rb_trunk_dual_n14"
    ]
  },
  "rb_trunk_dual_n14": {
    "id": "rb_trunk_dual_n14",
    "name": "Slash Velocity 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +3% Attack Speed.",
    "x": 789,
    "y": 245,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.03,
        "displayText": "+3% Attack Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_dual_wield_dervish",
      "rb_trunk_dual_n13"
    ]
  },
  "rb_dual_cinder_n1": {
    "id": "rb_dual_cinder_n1",
    "name": "Cinder Step 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 860,
    "y": 182,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_dual_wield_dervish",
      "rb_dual_cinder_n2"
    ]
  },
  "rb_dual_cinder_n2": {
    "id": "rb_dual_cinder_n2",
    "name": "Fire Volley 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": 1017,
    "y": 348,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n1",
      "rb_dual_cinder_n3"
    ]
  },
  "rb_dual_cinder_n3": {
    "id": "rb_dual_cinder_n3",
    "name": "Spark Trail 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": 997,
    "y": 183,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n2",
      "rb_dual_cinder_n4"
    ]
  },
  "rb_dual_cinder_n4": {
    "id": "rb_dual_cinder_n4",
    "name": "Cinder Step Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1208,
    "y": 100,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n3",
      "rb_dual_cinder_n5"
    ]
  },
  "rb_dual_cinder_n5": {
    "id": "rb_dual_cinder_n5",
    "name": "Fire Volley 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": 1311,
    "y": 113,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n4",
      "rb_dual_cinder_n6"
    ]
  },
  "rb_dual_cinder_n6": {
    "id": "rb_dual_cinder_n6",
    "name": "Spark Trail 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": 1130,
    "y": 171,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n5",
      "rb_dual_cinder_n7"
    ]
  },
  "rb_dual_cinder_n7": {
    "id": "rb_dual_cinder_n7",
    "name": "Cinder Step 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1206,
    "y": 205,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n6",
      "rb_dual_cinder_n8"
    ]
  },
  "rb_dual_cinder_n8": {
    "id": "rb_dual_cinder_n8",
    "name": "Fire Volley Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": 1315,
    "y": 243,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 16,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n7",
      "rb_dual_cinder_n9"
    ]
  },
  "rb_dual_cinder_n9": {
    "id": "rb_dual_cinder_n9",
    "name": "Spark Trail 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": 1382,
    "y": 81,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n10",
      "rb_dual_cinder_n8"
    ]
  },
  "rb_dual_cinder_n10": {
    "id": "rb_dual_cinder_n10",
    "name": "Cinder Step 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1415,
    "y": 274,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n11",
      "rb_dual_cinder_n9"
    ]
  },
  "rb_dual_cinder_n11": {
    "id": "rb_dual_cinder_n11",
    "name": "Fire Volley 11",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": 1379,
    "y": 160,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n10",
      "rb_dual_cinder_n12"
    ]
  },
  "rb_dual_cinder_n12": {
    "id": "rb_dual_cinder_n12",
    "name": "Spark Trail Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": 1520,
    "y": 269,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 10,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n11",
      "rb_dual_cinder_n13"
    ]
  },
  "rb_dual_cinder_n13": {
    "id": "rb_dual_cinder_n13",
    "name": "Cinder Step 13",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1454,
    "y": 183,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_cinder_n12",
      "rb_dual_cinder_n14"
    ]
  },
  "rb_dual_cinder_n14": {
    "id": "rb_dual_cinder_n14",
    "name": "Fire Volley 14",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": 1485,
    "y": 111,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_cinder_dancer",
      "rb_dual_cinder_n13"
    ]
  },
  "rb_cinder_rime_n1": {
    "id": "rb_cinder_rime_n1",
    "name": "Frost Needle 1",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1551,
    "y": 152,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_cinder_dancer",
      "rb_cinder_rime_n2"
    ]
  },
  "rb_cinder_rime_n2": {
    "id": "rb_cinder_rime_n2",
    "name": "Ice Flurry 2",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 1605,
    "y": 209,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n1",
      "rb_cinder_rime_n3"
    ]
  },
  "rb_cinder_rime_n3": {
    "id": "rb_cinder_rime_n3",
    "name": "Rime Crit 3",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 1683,
    "y": 210,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n2",
      "rb_cinder_rime_n4"
    ]
  },
  "rb_cinder_rime_n4": {
    "id": "rb_cinder_rime_n4",
    "name": "Frost Needle Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1746,
    "y": 126,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n3",
      "rb_cinder_rime_n5"
    ]
  },
  "rb_cinder_rime_n5": {
    "id": "rb_cinder_rime_n5",
    "name": "Ice Flurry 5",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 1819,
    "y": 202,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n4",
      "rb_cinder_rime_n6"
    ]
  },
  "rb_cinder_rime_n6": {
    "id": "rb_cinder_rime_n6",
    "name": "Rime Crit 6",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 1850,
    "y": 131,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n5",
      "rb_cinder_rime_n7"
    ]
  },
  "rb_cinder_rime_n7": {
    "id": "rb_cinder_rime_n7",
    "name": "Frost Needle 7",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1899,
    "y": 192,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n6",
      "rb_cinder_rime_n8"
    ]
  },
  "rb_cinder_rime_n8": {
    "id": "rb_cinder_rime_n8",
    "name": "Ice Flurry Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 1937,
    "y": 72,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 16,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n7",
      "rb_cinder_rime_n9"
    ]
  },
  "rb_cinder_rime_n9": {
    "id": "rb_cinder_rime_n9",
    "name": "Rime Crit 9",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 1976,
    "y": 220,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n10",
      "rb_cinder_rime_n8"
    ]
  },
  "rb_cinder_rime_n10": {
    "id": "rb_cinder_rime_n10",
    "name": "Frost Needle 10",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 2019,
    "y": 137,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n11",
      "rb_cinder_rime_n9"
    ]
  },
  "rb_cinder_rime_n11": {
    "id": "rb_cinder_rime_n11",
    "name": "Ice Flurry 11",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 2054,
    "y": 207,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n10",
      "rb_cinder_rime_n12"
    ]
  },
  "rb_cinder_rime_n12": {
    "id": "rb_cinder_rime_n12",
    "name": "Rime Crit Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2180,
    "y": 55,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "critChance",
        "value": 8,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n11",
      "rb_cinder_rime_n13"
    ]
  },
  "rb_cinder_rime_n13": {
    "id": "rb_cinder_rime_n13",
    "name": "Frost Needle 13",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 2097,
    "y": 137,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_cinder_rime_n12",
      "rb_cinder_rime_n14"
    ]
  },
  "rb_cinder_rime_n14": {
    "id": "rb_cinder_rime_n14",
    "name": "Ice Flurry 14",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 2172,
    "y": 159,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_rime_stalker",
      "rb_cinder_rime_n13"
    ]
  },
  "rb_dual_electro_n1": {
    "id": "rb_dual_electro_n1",
    "name": "Volt Speed 1",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 906,
    "y": 331,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_dual_wield_dervish",
      "rb_dual_electro_n2"
    ]
  },
  "rb_dual_electro_n2": {
    "id": "rb_dual_electro_n2",
    "name": "Lightning Chain 2",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 863,
    "y": 266,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n1",
      "rb_dual_electro_n3"
    ]
  },
  "rb_dual_electro_n3": {
    "id": "rb_dual_electro_n3",
    "name": "Static Leap 3",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": 970,
    "y": 286,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n2",
      "rb_dual_electro_n4"
    ]
  },
  "rb_dual_electro_n4": {
    "id": "rb_dual_electro_n4",
    "name": "Volt Speed Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1071,
    "y": 257,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n3",
      "rb_dual_electro_n5"
    ]
  },
  "rb_dual_electro_n5": {
    "id": "rb_dual_electro_n5",
    "name": "Lightning Chain 5",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 909,
    "y": -76,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n4",
      "rb_dual_electro_n6"
    ]
  },
  "rb_dual_electro_n6": {
    "id": "rb_dual_electro_n6",
    "name": "Static Leap 6",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": 927,
    "y": 222,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n5",
      "rb_dual_electro_n7"
    ]
  },
  "rb_dual_electro_n7": {
    "id": "rb_dual_electro_n7",
    "name": "Volt Speed 7",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 889,
    "y": 81,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n6",
      "rb_dual_electro_n8"
    ]
  },
  "rb_dual_electro_n8": {
    "id": "rb_dual_electro_n8",
    "name": "Lightning Chain Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 1053,
    "y": 11,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 14,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n7",
      "rb_dual_electro_n9"
    ]
  },
  "rb_dual_electro_n9": {
    "id": "rb_dual_electro_n9",
    "name": "Static Leap 9",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": 930,
    "y": 145,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 5,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n10",
      "rb_dual_electro_n8"
    ]
  },
  "rb_dual_electro_n10": {
    "id": "rb_dual_electro_n10",
    "name": "Volt Speed 10",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1031,
    "y": 113,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n11",
      "rb_dual_electro_n9"
    ]
  },
  "rb_dual_electro_n11": {
    "id": "rb_dual_electro_n11",
    "name": "Lightning Chain 11",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 966,
    "y": 70,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n10",
      "rb_dual_electro_n12"
    ]
  },
  "rb_dual_electro_n12": {
    "id": "rb_dual_electro_n12",
    "name": "Static Leap Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5% Shock Chance.",
    "x": 841,
    "y": -291,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 10,
        "displayText": "+5% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n11",
      "rb_dual_electro_n13"
    ]
  },
  "rb_dual_electro_n13": {
    "id": "rb_dual_electro_n13",
    "name": "Volt Speed 13",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 872,
    "y": -144,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_dual_electro_n12",
      "rb_dual_electro_n14"
    ]
  },
  "rb_dual_electro_n14": {
    "id": "rb_dual_electro_n14",
    "name": "Lightning Chain 14",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 738,
    "y": -221,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_electro_acrobat",
      "rb_dual_electro_n13"
    ]
  },
  "rb_electro_solar_n1": {
    "id": "rb_electro_solar_n1",
    "name": "Sunstring Dex 1",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 875,
    "y": 6,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_electro_acrobat",
      "rb_electro_solar_n2"
    ]
  },
  "rb_electro_solar_n2": {
    "id": "rb_electro_solar_n2",
    "name": "Holy Arrowhead 2",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 950,
    "y": -6,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n1",
      "rb_electro_solar_n3"
    ]
  },
  "rb_electro_solar_n3": {
    "id": "rb_electro_solar_n3",
    "name": "Radiant Pierce 3",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +3% Holy Pen.",
    "x": 987,
    "y": -74,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "holyPenetration",
        "value": 3,
        "displayText": "+3% Holy Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n2",
      "rb_electro_solar_n4"
    ]
  },
  "rb_electro_solar_n4": {
    "id": "rb_electro_solar_n4",
    "name": "Sunstring Dex Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1207,
    "y": -185,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n3",
      "rb_electro_solar_n5"
    ]
  },
  "rb_electro_solar_n5": {
    "id": "rb_electro_solar_n5",
    "name": "Holy Arrowhead 5",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1090,
    "y": -87,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n4",
      "rb_electro_solar_n6"
    ]
  },
  "rb_electro_solar_n6": {
    "id": "rb_electro_solar_n6",
    "name": "Radiant Pierce 6",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +3% Holy Pen.",
    "x": 1147,
    "y": -34,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "holyPenetration",
        "value": 3,
        "displayText": "+3% Holy Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n5",
      "rb_electro_solar_n7"
    ]
  },
  "rb_electro_solar_n7": {
    "id": "rb_electro_solar_n7",
    "name": "Sunstring Dex 7",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1210,
    "y": -80,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n6",
      "rb_electro_solar_n8"
    ]
  },
  "rb_electro_solar_n8": {
    "id": "rb_electro_solar_n8",
    "name": "Holy Arrowhead Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1337,
    "y": -24,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n7",
      "rb_electro_solar_n9"
    ]
  },
  "rb_electro_solar_n9": {
    "id": "rb_electro_solar_n9",
    "name": "Radiant Pierce 9",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +3% Holy Pen.",
    "x": 1296,
    "y": -241,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "holyPenetration",
        "value": 3,
        "displayText": "+3% Holy Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n10",
      "rb_electro_solar_n8"
    ]
  },
  "rb_electro_solar_n10": {
    "id": "rb_electro_solar_n10",
    "name": "Sunstring Dex 10",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1283,
    "y": -113,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n11",
      "rb_electro_solar_n9"
    ]
  },
  "rb_electro_solar_n11": {
    "id": "rb_electro_solar_n11",
    "name": "Holy Arrowhead 11",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1359,
    "y": -130,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n10",
      "rb_electro_solar_n12"
    ]
  },
  "rb_electro_solar_n12": {
    "id": "rb_electro_solar_n12",
    "name": "Radiant Pierce Notable",
    "type": "notable",
    "category": "bow_projectiles",
    "description": "Pathway node granting +3% Holy Pen.",
    "x": 1423,
    "y": -213,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "holyPenetration",
        "value": 6,
        "displayText": "+3% Holy Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n11",
      "rb_electro_solar_n13"
    ]
  },
  "rb_electro_solar_n13": {
    "id": "rb_electro_solar_n13",
    "name": "Sunstring Dex 13",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1440,
    "y": -42,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_solar_n12",
      "rb_electro_solar_n14"
    ]
  },
  "rb_electro_solar_n14": {
    "id": "rb_electro_solar_n14",
    "name": "Holy Arrowhead 14",
    "type": "small",
    "category": "bow_projectiles",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1464,
    "y": -117,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_solar_deadeye",
      "rb_electro_solar_n13"
    ]
  },
  "rb_solar_aether_n1": {
    "id": "rb_solar_aether_n1",
    "name": "Aether Rapier 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1510,
    "y": -272,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_solar_deadeye",
      "rb_solar_aether_n2"
    ]
  },
  "rb_solar_aether_n2": {
    "id": "rb_solar_aether_n2",
    "name": "Mana Siphon 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +20 Mana.",
    "x": 1547,
    "y": -199,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 20,
        "displayText": "+20 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n1",
      "rb_solar_aether_n3"
    ]
  },
  "rb_solar_aether_n3": {
    "id": "rb_solar_aether_n3",
    "name": "Astral Pierce 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1588,
    "y": -270,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n2",
      "rb_solar_aether_n4"
    ]
  },
  "rb_solar_aether_n4": {
    "id": "rb_solar_aether_n4",
    "name": "Aether Rapier Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1673,
    "y": -208,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 10,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n3",
      "rb_solar_aether_n5"
    ]
  },
  "rb_solar_aether_n5": {
    "id": "rb_solar_aether_n5",
    "name": "Mana Siphon 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +20 Mana.",
    "x": 1786,
    "y": -130,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 20,
        "displayText": "+20 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n4",
      "rb_solar_aether_n6"
    ]
  },
  "rb_solar_aether_n6": {
    "id": "rb_solar_aether_n6",
    "name": "Astral Pierce 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1769,
    "y": -250,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n5",
      "rb_solar_aether_n7"
    ]
  },
  "rb_solar_aether_n7": {
    "id": "rb_solar_aether_n7",
    "name": "Aether Rapier 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1826,
    "y": -197,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n6",
      "rb_solar_aether_n8"
    ]
  },
  "rb_solar_aether_n8": {
    "id": "rb_solar_aether_n8",
    "name": "Mana Siphon Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +20 Mana.",
    "x": 1887,
    "y": -101,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 40,
        "displayText": "+20 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n7",
      "rb_solar_aether_n9"
    ]
  },
  "rb_solar_aether_n9": {
    "id": "rb_solar_aether_n9",
    "name": "Astral Pierce 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1915,
    "y": -261,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n10",
      "rb_solar_aether_n8"
    ]
  },
  "rb_solar_aether_n10": {
    "id": "rb_solar_aether_n10",
    "name": "Aether Rapier 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 1992,
    "y": -108,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n11",
      "rb_solar_aether_n9"
    ]
  },
  "rb_solar_aether_n11": {
    "id": "rb_solar_aether_n11",
    "name": "Mana Siphon 11",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +20 Mana.",
    "x": 1944,
    "y": -189,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 20,
        "displayText": "+20 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n10",
      "rb_solar_aether_n12"
    ]
  },
  "rb_solar_aether_n12": {
    "id": "rb_solar_aether_n12",
    "name": "Astral Pierce Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2113,
    "y": -113,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n11",
      "rb_solar_aether_n13"
    ]
  },
  "rb_solar_aether_n13": {
    "id": "rb_solar_aether_n13",
    "name": "Aether Rapier 13",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Dexterity.",
    "x": 2022,
    "y": -180,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 5,
        "displayText": "+5 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_solar_aether_n12",
      "rb_solar_aether_n14"
    ]
  },
  "rb_solar_aether_n14": {
    "id": "rb_solar_aether_n14",
    "name": "Mana Siphon 14",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +20 Mana.",
    "x": 2090,
    "y": -217,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 20,
        "displayText": "+20 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_aether_weaver",
      "rb_solar_aether_n13"
    ]
  },
  "rb_electro_venom_n1": {
    "id": "rb_electro_venom_n1",
    "name": "Venom Dex 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1105,
    "y": -163,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_electro_acrobat",
      "rb_electro_venom_n2"
    ]
  },
  "rb_electro_venom_n2": {
    "id": "rb_electro_venom_n2",
    "name": "Toxic Edge 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": 834,
    "y": -58,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n1",
      "rb_electro_venom_n3"
    ]
  },
  "rb_electro_venom_n3": {
    "id": "rb_electro_venom_n3",
    "name": "Shadow Strike 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 1031,
    "y": -137,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n2",
      "rb_electro_venom_n4"
    ]
  },
  "rb_electro_venom_n4": {
    "id": "rb_electro_venom_n4",
    "name": "Venom Dex Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 679,
    "y": -592,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n3",
      "rb_electro_venom_n5"
    ]
  },
  "rb_electro_venom_n5": {
    "id": "rb_electro_venom_n5",
    "name": "Toxic Edge 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": 789,
    "y": -120,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n4",
      "rb_electro_venom_n6"
    ]
  },
  "rb_electro_venom_n6": {
    "id": "rb_electro_venom_n6",
    "name": "Shadow Strike 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 811,
    "y": -193,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n5",
      "rb_electro_venom_n7"
    ]
  },
  "rb_electro_venom_n7": {
    "id": "rb_electro_venom_n7",
    "name": "Venom Dex 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 950,
    "y": -147,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n6",
      "rb_electro_venom_n8"
    ]
  },
  "rb_electro_venom_n8": {
    "id": "rb_electro_venom_n8",
    "name": "Toxic Edge Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": 1037,
    "y": -241,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 12,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n7",
      "rb_electro_venom_n9"
    ]
  },
  "rb_electro_venom_n9": {
    "id": "rb_electro_venom_n9",
    "name": "Shadow Strike 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 1078,
    "y": -337,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n10",
      "rb_electro_venom_n8"
    ]
  },
  "rb_electro_venom_n10": {
    "id": "rb_electro_venom_n10",
    "name": "Venom Dex 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 913,
    "y": -215,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n11",
      "rb_electro_venom_n9"
    ]
  },
  "rb_electro_venom_n11": {
    "id": "rb_electro_venom_n11",
    "name": "Toxic Edge 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": 944,
    "y": -289,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_electro_venom_n10",
      "rb_electro_venom_n12"
    ]
  },
  "rb_electro_venom_n12": {
    "id": "rb_electro_venom_n12",
    "name": "Shadow Strike Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 1053,
    "y": -529,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_venomous_assassin",
      "rb_electro_venom_n11"
    ]
  },
  "rb_venom_corrosive_n1": {
    "id": "rb_venom_corrosive_n1",
    "name": "Acid Katar 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1002,
    "y": -341,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_venomous_assassin",
      "rb_venom_corrosive_n2"
    ]
  },
  "rb_venom_corrosive_n2": {
    "id": "rb_venom_corrosive_n2",
    "name": "Caustic Edge 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 1046,
    "y": -408,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n1",
      "rb_venom_corrosive_n3"
    ]
  },
  "rb_venom_corrosive_n3": {
    "id": "rb_venom_corrosive_n3",
    "name": "Corrosive Strike 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 1115,
    "y": -444,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n2",
      "rb_venom_corrosive_n4"
    ]
  },
  "rb_venom_corrosive_n4": {
    "id": "rb_venom_corrosive_n4",
    "name": "Acid Katar Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1179,
    "y": -362,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n3",
      "rb_venom_corrosive_n5"
    ]
  },
  "rb_venom_corrosive_n5": {
    "id": "rb_venom_corrosive_n5",
    "name": "Caustic Edge 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 1184,
    "y": -481,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n4",
      "rb_venom_corrosive_n6"
    ]
  },
  "rb_venom_corrosive_n6": {
    "id": "rb_venom_corrosive_n6",
    "name": "Corrosive Strike 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 1263,
    "y": -426,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n5",
      "rb_venom_corrosive_n7"
    ]
  },
  "rb_venom_corrosive_n7": {
    "id": "rb_venom_corrosive_n7",
    "name": "Acid Katar 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1280,
    "y": -502,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n6",
      "rb_venom_corrosive_n8"
    ]
  },
  "rb_venom_corrosive_n8": {
    "id": "rb_venom_corrosive_n8",
    "name": "Caustic Edge Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 1358,
    "y": -380,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 16,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n7",
      "rb_venom_corrosive_n9"
    ]
  },
  "rb_venom_corrosive_n9": {
    "id": "rb_venom_corrosive_n9",
    "name": "Corrosive Strike 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 1353,
    "y": -529,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n10",
      "rb_venom_corrosive_n8"
    ]
  },
  "rb_venom_corrosive_n10": {
    "id": "rb_venom_corrosive_n10",
    "name": "Acid Katar 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1406,
    "y": -473,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n11",
      "rb_venom_corrosive_n9"
    ]
  },
  "rb_venom_corrosive_n11": {
    "id": "rb_venom_corrosive_n11",
    "name": "Caustic Edge 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 1434,
    "y": -545,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n10",
      "rb_venom_corrosive_n12"
    ]
  },
  "rb_venom_corrosive_n12": {
    "id": "rb_venom_corrosive_n12",
    "name": "Corrosive Strike Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 1587,
    "y": -486,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 10,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n11",
      "rb_venom_corrosive_n13"
    ]
  },
  "rb_venom_corrosive_n13": {
    "id": "rb_venom_corrosive_n13",
    "name": "Acid Katar 13",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1484,
    "y": -472,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_venom_corrosive_n12",
      "rb_venom_corrosive_n14"
    ]
  },
  "rb_venom_corrosive_n14": {
    "id": "rb_venom_corrosive_n14",
    "name": "Caustic Edge 14",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 1511,
    "y": -399,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_corrosive_fangs",
      "rb_venom_corrosive_n13"
    ]
  },
  "rb_corrosive_sonic_n1": {
    "id": "rb_corrosive_sonic_n1",
    "name": "Sonic Step 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1658,
    "y": -398,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_corrosive_fangs",
      "rb_corrosive_sonic_n2"
    ]
  },
  "rb_corrosive_sonic_n2": {
    "id": "rb_corrosive_sonic_n2",
    "name": "Wind Shockwave 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 1691,
    "y": -471,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n1",
      "rb_corrosive_sonic_n3"
    ]
  },
  "rb_corrosive_sonic_n3": {
    "id": "rb_corrosive_sonic_n3",
    "name": "Speed Concussion 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6 Move Speed.",
    "x": 1767,
    "y": -455,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Move Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n2",
      "rb_corrosive_sonic_n4"
    ]
  },
  "rb_corrosive_sonic_n4": {
    "id": "rb_corrosive_sonic_n4",
    "name": "Sonic Step Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1856,
    "y": -574,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n3",
      "rb_corrosive_sonic_n5"
    ]
  },
  "rb_corrosive_sonic_n5": {
    "id": "rb_corrosive_sonic_n5",
    "name": "Wind Shockwave 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 1821,
    "y": -399,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n4",
      "rb_corrosive_sonic_n6"
    ]
  },
  "rb_corrosive_sonic_n6": {
    "id": "rb_corrosive_sonic_n6",
    "name": "Speed Concussion 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6 Move Speed.",
    "x": 1856,
    "y": -469,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Move Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n5",
      "rb_corrosive_sonic_n7"
    ]
  },
  "rb_corrosive_sonic_n7": {
    "id": "rb_corrosive_sonic_n7",
    "name": "Sonic Step 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 1950,
    "y": -527,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n6",
      "rb_corrosive_sonic_n8"
    ]
  },
  "rb_corrosive_sonic_n8": {
    "id": "rb_corrosive_sonic_n8",
    "name": "Wind Shockwave Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 1959,
    "y": -422,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n7",
      "rb_corrosive_sonic_n9"
    ]
  },
  "rb_corrosive_sonic_n9": {
    "id": "rb_corrosive_sonic_n9",
    "name": "Speed Concussion 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +6 Move Speed.",
    "x": 2014,
    "y": -570,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 6,
        "displayText": "+6 Move Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n10",
      "rb_corrosive_sonic_n8"
    ]
  },
  "rb_corrosive_sonic_n10": {
    "id": "rb_corrosive_sonic_n10",
    "name": "Sonic Step 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 2040,
    "y": -495,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n11",
      "rb_corrosive_sonic_n9"
    ]
  },
  "rb_corrosive_sonic_n11": {
    "id": "rb_corrosive_sonic_n11",
    "name": "Wind Shockwave 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2092,
    "y": -576,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n10",
      "rb_corrosive_sonic_n12"
    ]
  },
  "rb_corrosive_sonic_n12": {
    "id": "rb_corrosive_sonic_n12",
    "name": "Speed Concussion Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +6 Move Speed.",
    "x": 2206,
    "y": -587,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "movementSpeed",
        "value": 12,
        "displayText": "+6 Move Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n11",
      "rb_corrosive_sonic_n13"
    ]
  },
  "rb_corrosive_sonic_n13": {
    "id": "rb_corrosive_sonic_n13",
    "name": "Sonic Step 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +4 to Dexterity.",
    "x": 2118,
    "y": -502,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 4,
        "displayText": "+4 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_corrosive_sonic_n12",
      "rb_corrosive_sonic_n14"
    ]
  },
  "rb_corrosive_sonic_n14": {
    "id": "rb_corrosive_sonic_n14",
    "name": "Wind Shockwave 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2194,
    "y": -483,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_sonic_wind_shear",
      "rb_corrosive_sonic_n13"
    ]
  },
  "rb_sonic_fortune_n1": {
    "id": "rb_sonic_fortune_n1",
    "name": "Lucky Roll 1",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +6 to Luck.",
    "x": 2264,
    "y": -426,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_sonic_wind_shear",
      "rb_sonic_fortune_n2"
    ]
  },
  "rb_sonic_fortune_n2": {
    "id": "rb_sonic_fortune_n2",
    "name": "Crit Ceiling 2",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2285,
    "y": -501,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n1",
      "rb_sonic_fortune_n3"
    ]
  },
  "rb_sonic_fortune_n3": {
    "id": "rb_sonic_fortune_n3",
    "name": "Gold Multiplier 3",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +8% Item Quant.",
    "x": 2340,
    "y": -407,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedItemQuantity",
        "value": 8,
        "displayText": "+8% Item Quant"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n2",
      "rb_sonic_fortune_n4"
    ]
  },
  "rb_sonic_fortune_n4": {
    "id": "rb_sonic_fortune_n4",
    "name": "Lucky Roll Notable",
    "type": "notable",
    "category": "critical_strikes",
    "description": "Pathway node granting +6 to Luck.",
    "x": 2562,
    "y": -718,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "luck",
        "value": 12,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n3",
      "rb_sonic_fortune_n5"
    ]
  },
  "rb_sonic_fortune_n5": {
    "id": "rb_sonic_fortune_n5",
    "name": "Crit Ceiling 5",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2375,
    "y": -477,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n4",
      "rb_sonic_fortune_n6"
    ]
  },
  "rb_sonic_fortune_n6": {
    "id": "rb_sonic_fortune_n6",
    "name": "Gold Multiplier 6",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +8% Item Quant.",
    "x": 2452,
    "y": -492,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedItemQuantity",
        "value": 8,
        "displayText": "+8% Item Quant"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n5",
      "rb_sonic_fortune_n7"
    ]
  },
  "rb_sonic_fortune_n7": {
    "id": "rb_sonic_fortune_n7",
    "name": "Lucky Roll 7",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +6 to Luck.",
    "x": 2517,
    "y": -536,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n6",
      "rb_sonic_fortune_n8"
    ]
  },
  "rb_sonic_fortune_n8": {
    "id": "rb_sonic_fortune_n8",
    "name": "Crit Ceiling Notable",
    "type": "notable",
    "category": "critical_strikes",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2532,
    "y": -423,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "critChance",
        "value": 8,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n7",
      "rb_sonic_fortune_n9"
    ]
  },
  "rb_sonic_fortune_n9": {
    "id": "rb_sonic_fortune_n9",
    "name": "Gold Multiplier 9",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +8% Item Quant.",
    "x": 2571,
    "y": -592,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedItemQuantity",
        "value": 8,
        "displayText": "+8% Item Quant"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n10",
      "rb_sonic_fortune_n8"
    ]
  },
  "rb_sonic_fortune_n10": {
    "id": "rb_sonic_fortune_n10",
    "name": "Lucky Roll 10",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +6 to Luck.",
    "x": 2594,
    "y": -508,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n11",
      "rb_sonic_fortune_n9"
    ]
  },
  "rb_sonic_fortune_n11": {
    "id": "rb_sonic_fortune_n11",
    "name": "Crit Ceiling 11",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2637,
    "y": -644,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n10",
      "rb_sonic_fortune_n12"
    ]
  },
  "rb_sonic_fortune_n12": {
    "id": "rb_sonic_fortune_n12",
    "name": "Gold Multiplier Notable",
    "type": "notable",
    "category": "critical_strikes",
    "description": "Pathway node granting +8% Item Quant.",
    "x": 2717,
    "y": -489,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedItemQuantity",
        "value": 16,
        "displayText": "+8% Item Quant"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n11",
      "rb_sonic_fortune_n13"
    ]
  },
  "rb_sonic_fortune_n13": {
    "id": "rb_sonic_fortune_n13",
    "name": "Lucky Roll 13",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +6 to Luck.",
    "x": 2645,
    "y": -567,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_sonic_fortune_n12",
      "rb_sonic_fortune_n14"
    ]
  },
  "rb_sonic_fortune_n14": {
    "id": "rb_sonic_fortune_n14",
    "name": "Crit Ceiling 14",
    "type": "small",
    "category": "critical_strikes",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": 2717,
    "y": -597,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_fortunes_favor",
      "rb_sonic_fortune_n13"
    ]
  },
  "rb_fortune_phantom_n1": {
    "id": "rb_fortune_phantom_n1",
    "name": "Veil Shroud 1",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +30 Evasion.",
    "x": 2722,
    "y": -675,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 30,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_fortunes_favor",
      "rb_fortune_phantom_n2"
    ]
  },
  "rb_fortune_phantom_n2": {
    "id": "rb_fortune_phantom_n2",
    "name": "Aether Luck 2",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +4 to Luck.",
    "x": 2795,
    "y": -598,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 4,
        "displayText": "+4 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n1",
      "rb_fortune_phantom_n3"
    ]
  },
  "rb_fortune_phantom_n3": {
    "id": "rb_fortune_phantom_n3",
    "name": "Energy Reflex 3",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +25 Energy Shield.",
    "x": 2800,
    "y": -677,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 25,
        "displayText": "+25 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n2",
      "rb_fortune_phantom_n4"
    ]
  },
  "rb_fortune_phantom_n4": {
    "id": "rb_fortune_phantom_n4",
    "name": "Veil Shroud Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +30 Evasion.",
    "x": 2894,
    "y": -563,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "evasion",
        "value": 60,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n3",
      "rb_fortune_phantom_n5"
    ]
  },
  "rb_fortune_phantom_n5": {
    "id": "rb_fortune_phantom_n5",
    "name": "Aether Luck 5",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +4 to Luck.",
    "x": 2872,
    "y": -708,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 4,
        "displayText": "+4 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n4",
      "rb_fortune_phantom_n6"
    ]
  },
  "rb_fortune_phantom_n6": {
    "id": "rb_fortune_phantom_n6",
    "name": "Energy Reflex 6",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +25 Energy Shield.",
    "x": 2949,
    "y": -716,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 25,
        "displayText": "+25 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n5",
      "rb_fortune_phantom_n7"
    ]
  },
  "rb_fortune_phantom_n7": {
    "id": "rb_fortune_phantom_n7",
    "name": "Veil Shroud 7",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +30 Evasion.",
    "x": 2967,
    "y": -639,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 30,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n6",
      "rb_fortune_phantom_n8"
    ]
  },
  "rb_fortune_phantom_n8": {
    "id": "rb_fortune_phantom_n8",
    "name": "Aether Luck Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +4 to Luck.",
    "x": 3094,
    "y": -835,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "luck",
        "value": 8,
        "displayText": "+4 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n7",
      "rb_fortune_phantom_n9"
    ]
  },
  "rb_fortune_phantom_n9": {
    "id": "rb_fortune_phantom_n9",
    "name": "Energy Reflex 9",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +25 Energy Shield.",
    "x": 3042,
    "y": -617,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 25,
        "displayText": "+25 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n10",
      "rb_fortune_phantom_n8"
    ]
  },
  "rb_fortune_phantom_n10": {
    "id": "rb_fortune_phantom_n10",
    "name": "Veil Shroud 10",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +30 Evasion.",
    "x": 3111,
    "y": -653,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "evasion",
        "value": 30,
        "displayText": "+30 Evasion"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n11",
      "rb_fortune_phantom_n9"
    ]
  },
  "rb_fortune_phantom_n11": {
    "id": "rb_fortune_phantom_n11",
    "name": "Aether Luck 11",
    "type": "small",
    "category": "armor_evasion",
    "description": "Pathway node granting +4 to Luck.",
    "x": 3167,
    "y": -708,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 4,
        "displayText": "+4 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "rb_fortune_phantom_n10",
      "rb_fortune_phantom_n12"
    ]
  },
  "rb_fortune_phantom_n12": {
    "id": "rb_fortune_phantom_n12",
    "name": "Energy Reflex Notable",
    "type": "notable",
    "category": "armor_evasion",
    "description": "Pathway node granting +25 Energy Shield.",
    "x": 3208,
    "y": -611,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 50,
        "displayText": "+25 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_phantom_veil",
      "rb_fortune_phantom_n11"
    ]
  },
  "keystone_incandescent_archon": {
    "id": "keystone_incandescent_archon",
    "name": "Incandescent Archon (Wis x Fire)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "Fire spells gain +50% Area of Effect. Ignites deal +40% more damage based on Wisdom. Drawback: Fire spells have +25% longer cast time.",
    "x": -260,
    "y": 6,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 15,
        "displayText": "+15 to Wisdom"
      },
      {
        "statKey": "increasedFireDamage",
        "value": 35,
        "displayText": "+35% Fire Damage"
      }
    ],
    "keystoneFlag": "incandescentArchon",
    "flavor": "Solar firestorms consume the horizon.",
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n10",
      "canopy_pyretic_corridor_n1",
      "keystone_prismatic_surge"
    ]
  },
  "keystone_overcharged_conduit": {
    "id": "keystone_overcharged_conduit",
    "name": "Overcharged Conduit (Wis x Lightning)",
    "type": "keystone",
    "category": "elemental_lightning",
    "description": "Lightning spells have +50% Shock effect and shock stacks up to 3 times on bosses. Drawback: Casting lightning spells drains 5% of current Life.",
    "x": 471,
    "y": -299,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 15,
        "displayText": "+15 to Wisdom"
      },
      {
        "statKey": "increasedLightningDamage",
        "value": 35,
        "displayText": "+35% Lightning Damage"
      }
    ],
    "keystoneFlag": "overchargedConduit",
    "flavor": "High voltage surges violently through mortal veins.",
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n1",
      "canopy_light_ladder_n10",
      "keystone_prismatic_surge"
    ]
  },
  "keystone_prismatic_surge": {
    "id": "keystone_prismatic_surge",
    "name": "Prismatic Surge (Crit Surge)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Critical strikes grant +45% MORE Magical & Elemental Damage for 6s. Drawback: Critical strikes deal no extra multiplier.",
    "x": 175,
    "y": 22,
    "icon": "Sun",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      }
    ],
    "keystoneFlag": "prismaticSurge",
    "flavor": "Resonate with harmonic perfection rather than seeking explosive spikes.",
    "clusterId": null,
    "connections": [
      "bridge_sky_2",
      "canopy_astral_corridor_n1",
      "canopy_glacial_corridor_n1",
      "keystone_glass_cannon",
      "keystone_incandescent_archon",
      "keystone_overcharged_conduit"
    ]
  },
  "canopy_fire_ladder_n1": {
    "id": "canopy_fire_ladder_n1",
    "name": "Wisdom Spark 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -40,
    "y": 181,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n2",
      "trunk_bifurcation"
    ]
  },
  "canopy_fire_ladder_n2": {
    "id": "canopy_fire_ladder_n2",
    "name": "Fire Flow 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +7% Fire Damage.",
    "x": 9,
    "y": 262,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 7,
        "displayText": "+7% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n1",
      "canopy_fire_ladder_n3"
    ]
  },
  "canopy_fire_ladder_n3": {
    "id": "canopy_fire_ladder_n3",
    "name": "Ignite Heat 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Ignite Chance.",
    "x": -68,
    "y": 253,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 4,
        "displayText": "+4% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n2",
      "canopy_fire_ladder_n4"
    ]
  },
  "canopy_fire_ladder_n4": {
    "id": "canopy_fire_ladder_n4",
    "name": "Wisdom Spark Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -94,
    "y": 91,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n3",
      "canopy_fire_ladder_n5"
    ]
  },
  "canopy_fire_ladder_n5": {
    "id": "canopy_fire_ladder_n5",
    "name": "Fire Flow 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +7% Fire Damage.",
    "x": -117,
    "y": 193,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 7,
        "displayText": "+7% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n4",
      "canopy_fire_ladder_n6"
    ]
  },
  "canopy_fire_ladder_n6": {
    "id": "canopy_fire_ladder_n6",
    "name": "Ignite Heat 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Ignite Chance.",
    "x": -194,
    "y": 184,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 4,
        "displayText": "+4% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n5",
      "canopy_fire_ladder_n7"
    ]
  },
  "canopy_fire_ladder_n7": {
    "id": "canopy_fire_ladder_n7",
    "name": "Wisdom Spark 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -241,
    "y": 246,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n6",
      "canopy_fire_ladder_n8"
    ]
  },
  "canopy_fire_ladder_n8": {
    "id": "canopy_fire_ladder_n8",
    "name": "Fire Flow Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +7% Fire Damage.",
    "x": -326,
    "y": 185,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 14,
        "displayText": "+7% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n7",
      "canopy_fire_ladder_n9"
    ]
  },
  "canopy_fire_ladder_n9": {
    "id": "canopy_fire_ladder_n9",
    "name": "Ignite Heat 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Ignite Chance.",
    "x": -459,
    "y": 184,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 4,
        "displayText": "+4% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n10",
      "canopy_fire_ladder_n8"
    ]
  },
  "canopy_fire_ladder_n10": {
    "id": "canopy_fire_ladder_n10",
    "name": "Wisdom Spark 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -410,
    "y": 123,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_fire_ladder_n9",
      "keystone_incandescent_archon"
    ]
  },
  "canopy_light_ladder_n1": {
    "id": "canopy_light_ladder_n1",
    "name": "Wisdom Spark 1",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -81,
    "y": 388,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n2",
      "trunk_bifurcation"
    ]
  },
  "canopy_light_ladder_n2": {
    "id": "canopy_light_ladder_n2",
    "name": "Lightning Flow 2",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 45,
    "y": 331,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n1",
      "canopy_light_ladder_n3"
    ]
  },
  "canopy_light_ladder_n3": {
    "id": "canopy_light_ladder_n3",
    "name": "Static Charge 3",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4% Shock Chance.",
    "x": 95,
    "y": 272,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 4,
        "displayText": "+4% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n2",
      "canopy_light_ladder_n4"
    ]
  },
  "canopy_light_ladder_n4": {
    "id": "canopy_light_ladder_n4",
    "name": "Wisdom Spark Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 255,
    "y": 200,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n3",
      "canopy_light_ladder_n5"
    ]
  },
  "canopy_light_ladder_n5": {
    "id": "canopy_light_ladder_n5",
    "name": "Lightning Flow 5",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 260,
    "y": 308,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 7,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n4",
      "canopy_light_ladder_n6"
    ]
  },
  "canopy_light_ladder_n6": {
    "id": "canopy_light_ladder_n6",
    "name": "Static Charge 6",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4% Shock Chance.",
    "x": 153,
    "y": 221,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 4,
        "displayText": "+4% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n5",
      "canopy_light_ladder_n7"
    ]
  },
  "canopy_light_ladder_n7": {
    "id": "canopy_light_ladder_n7",
    "name": "Wisdom Spark 7",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 329,
    "y": 274,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n6",
      "canopy_light_ladder_n8"
    ]
  },
  "canopy_light_ladder_n8": {
    "id": "canopy_light_ladder_n8",
    "name": "Lightning Flow Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +7% Lightning Damage.",
    "x": 359,
    "y": 53,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 14,
        "displayText": "+7% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n7",
      "canopy_light_ladder_n9"
    ]
  },
  "canopy_light_ladder_n9": {
    "id": "canopy_light_ladder_n9",
    "name": "Static Charge 9",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4% Shock Chance.",
    "x": 388,
    "y": 222,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToShock",
        "value": 4,
        "displayText": "+4% Shock Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n10",
      "canopy_light_ladder_n8"
    ]
  },
  "canopy_light_ladder_n10": {
    "id": "canopy_light_ladder_n10",
    "name": "Wisdom Spark 10",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 425,
    "y": 154,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_light_ladder_n9",
      "keystone_overcharged_conduit"
    ]
  },
  "keystone_pyretic_ascendancy": {
    "id": "keystone_pyretic_ascendancy",
    "name": "Pyretic Ascendancy (Pure Fire Conversion)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "50% of Phys/Cold/Light/Holy/Arcane damage converted to Fire (deal only Fire). Drawback: Cannot inflict Freeze or Shock.",
    "x": -1039,
    "y": -1094,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 50,
        "displayText": "+50% Fire Damage"
      },
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      }
    ],
    "keystoneFlag": "pyreticAscendancy",
    "flavor": "In the solar furnace, all elements burn as one pure flame.",
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n10",
      "wis_pyre_geo_n1"
    ]
  },
  "keystone_glacial_sovereign": {
    "id": "keystone_glacial_sovereign",
    "name": "Glacial Sovereign (Wis x Cold)",
    "type": "keystone",
    "category": "elemental_cold",
    "description": "Cold spells apply Deep Freeze, causing frozen foes to emit frost novas when hit. Drawback: Cannot deal Fire or Burning damage.",
    "x": -490,
    "y": -363,
    "icon": "Snowflake",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 15,
        "displayText": "+15 to Wisdom"
      },
      {
        "statKey": "increasedColdDamage",
        "value": 35,
        "displayText": "+35% Cold Damage"
      }
    ],
    "keystoneFlag": "glacialSovereign",
    "flavor": "The chill of absolute zero crystallizes thought itself.",
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n10",
      "keystone_prismatic_ward",
      "wis_glacial_plague_n1"
    ]
  },
  "keystone_astral_singularity": {
    "id": "keystone_astral_singularity",
    "name": "Astral Singularity (Wis x Arcane)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Arcane spells collapse into gravity singularities that pull enemies inward and detonate in pure aether. Drawback: Singularity detonates after a 1.5s delay.",
    "x": 772,
    "y": -1088,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      },
      {
        "statKey": "increasedArcaneDamage",
        "value": 35,
        "displayText": "+35% Arcane Damage"
      }
    ],
    "keystoneFlag": "astralSingularity",
    "flavor": "The gravity of dying stars binds all enemies.",
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n10",
      "wis_astral_purify_n1"
    ]
  },
  "keystone_acrobatic_sorcery": {
    "id": "keystone_acrobatic_sorcery",
    "name": "Acrobatic Sorcery (Wis x Dex)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Dexterity Light scaling applies to Spell Cast Speed. Drawback: Spell Area of Effect is reduced by 15%.",
    "x": 871,
    "y": -477,
    "icon": "Wind",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 15,
        "displayText": "+15 to Dexterity"
      },
      {
        "statKey": "wisdom",
        "value": 15,
        "displayText": "+15 to Wisdom"
      }
    ],
    "keystoneFlag": "acrobaticSorcery",
    "flavor": "Weave incantations seamlessly between evasive steps.",
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n10",
      "wis_acrobat_alch_n1"
    ]
  },
  "keystone_geomantic_earthsurge": {
    "id": "keystone_geomantic_earthsurge",
    "name": "Geomantic Earthsurge (Wis x Phys)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Magical damage shatters armor and creates stone spikes in an area, converting 25% of spell damage to Physical. Drawback: Projectile range reduced by 20%.",
    "x": -1083,
    "y": -1528,
    "icon": "Mountain",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      },
      {
        "statKey": "increasedPhysicalDamage",
        "value": 35,
        "displayText": "+35% Physical Damage"
      }
    ],
    "keystoneFlag": "geomanticEarthSurge",
    "flavor": "The crust of the world answers the call of geomantic will.",
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n1",
      "wis_pyre_geo_n12"
    ]
  },
  "keystone_plaguebringer_sceptre": {
    "id": "keystone_plaguebringer_sceptre",
    "name": "Plaguebringer Sceptre (Wis x Chaos)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Caster attacks and spells spread virulent plague that jumps between enemies. Drawback: Non-chaos damage dealt is reduced by 15%.",
    "x": -265,
    "y": -1060,
    "icon": "Biohazard",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      },
      {
        "statKey": "increasedChaosDamage",
        "value": 40,
        "displayText": "+40% Chaos Damage"
      },
      {
        "statKey": "chanceToPoison",
        "value": 25,
        "displayText": "+25% Poison Chance"
      }
    ],
    "keystoneFlag": "plaguebringerSceptre",
    "flavor": "The sceptre does not merely poison flesh\u2014it curses bloodlines.",
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n1",
      "will_abyss_path_n1",
      "wis_glacial_plague_n12"
    ]
  },
  "keystone_purifying_archon": {
    "id": "keystone_purifying_archon",
    "name": "Purifying Archon (Wis x Holy)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "Holy spells purify ailments from you and allies on cast and deal extra damage based on removed ailments. Drawback: Damage taken from Chaos sources is increased by 20%.",
    "x": 1140,
    "y": -1323,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      },
      {
        "statKey": "increasedHolyDamage",
        "value": 40,
        "displayText": "+40% Holy Damage"
      }
    ],
    "keystoneFlag": "purifyingArchon",
    "flavor": "Through sacred word and flame, corruption is unmade.",
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n1",
      "will_seraph_path_n1",
      "wis_astral_purify_n12"
    ]
  },
  "keystone_alchemical_catalyst": {
    "id": "keystone_alchemical_catalyst",
    "name": "Alchemical Catalyst (Wis x Status DoT)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Ailments and damage over time deal 40% more damage and stack faster. Drawback: Direct hit damage is reduced by 10%.",
    "x": 519,
    "y": -732,
    "icon": "FlaskConical",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      }
    ],
    "keystoneFlag": "alchemicalCatalyst",
    "flavor": "Every catalyst is one drop from catastrophe or transcendence.",
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n1",
      "will_aether_path_n1",
      "wis_acrobat_alch_n12"
    ]
  },
  "keystone_harmonic_resonance": {
    "id": "keystone_harmonic_resonance",
    "name": "Harmonic Resonance (Wis x Sonic)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Sonic and Arcane spells resonate together, triggering vibrations that deal +40% More Area Damage. Drawback: -15% Movement Speed while casting.",
    "x": 197,
    "y": -1107,
    "icon": "Volume2",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 20,
        "displayText": "+20 to Wisdom"
      },
      {
        "statKey": "increasedSonicDamage",
        "value": 35,
        "displayText": "+35% Sonic Damage"
      }
    ],
    "keystoneFlag": "harmonicResonance",
    "flavor": "Harmonic frequencies shatter crystal and bone.",
    "clusterId": null,
    "connections": [
      "harmony_summit_n1",
      "keystone_glass_cannon",
      "luck_harmony_volt_n1"
    ]
  },
  "canopy_pyretic_corridor_n1": {
    "id": "canopy_pyretic_corridor_n1",
    "name": "Wisdom Fire 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -488,
    "y": 111,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n2",
      "keystone_incandescent_archon"
    ]
  },
  "canopy_pyretic_corridor_n2": {
    "id": "canopy_pyretic_corridor_n2",
    "name": "Pure Heat 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +9% Fire Damage.",
    "x": -512,
    "y": 31,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 9,
        "displayText": "+9% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n1",
      "canopy_pyretic_corridor_n3"
    ]
  },
  "canopy_pyretic_corridor_n3": {
    "id": "canopy_pyretic_corridor_n3",
    "name": "Thermal Burst 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -438,
    "y": 51,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n2",
      "canopy_pyretic_corridor_n4"
    ]
  },
  "canopy_pyretic_corridor_n4": {
    "id": "canopy_pyretic_corridor_n4",
    "name": "Wisdom Fire Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -404,
    "y": -195,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n3",
      "canopy_pyretic_corridor_n5"
    ]
  },
  "canopy_pyretic_corridor_n5": {
    "id": "canopy_pyretic_corridor_n5",
    "name": "Pure Heat 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +9% Fire Damage.",
    "x": -458,
    "y": -25,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 9,
        "displayText": "+9% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n4",
      "canopy_pyretic_corridor_n6"
    ]
  },
  "canopy_pyretic_corridor_n6": {
    "id": "canopy_pyretic_corridor_n6",
    "name": "Thermal Burst 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -450,
    "y": -102,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n5",
      "canopy_pyretic_corridor_n7"
    ]
  },
  "canopy_pyretic_corridor_n7": {
    "id": "canopy_pyretic_corridor_n7",
    "name": "Wisdom Fire 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -637,
    "y": -143,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n6",
      "canopy_pyretic_corridor_n8"
    ]
  },
  "canopy_pyretic_corridor_n8": {
    "id": "canopy_pyretic_corridor_n8",
    "name": "Pure Heat Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +9% Fire Damage.",
    "x": -552,
    "y": -81,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 18,
        "displayText": "+9% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n7",
      "canopy_pyretic_corridor_n9"
    ]
  },
  "canopy_pyretic_corridor_n9": {
    "id": "canopy_pyretic_corridor_n9",
    "name": "Thermal Burst 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5% Ignite Chance.",
    "x": -570,
    "y": -187,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToIgnite",
        "value": 5,
        "displayText": "+5% Ignite Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n10",
      "canopy_pyretic_corridor_n8"
    ]
  },
  "canopy_pyretic_corridor_n10": {
    "id": "canopy_pyretic_corridor_n10",
    "name": "Wisdom Fire 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -695,
    "y": -194,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_pyretic_corridor_n9",
      "keystone_pyretic_ascendancy"
    ]
  },
  "canopy_glacial_corridor_n1": {
    "id": "canopy_glacial_corridor_n1",
    "name": "Frost Wisdom 1",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -33,
    "y": 6,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n2",
      "keystone_prismatic_surge"
    ]
  },
  "canopy_glacial_corridor_n2": {
    "id": "canopy_glacial_corridor_n2",
    "name": "Subzero Flow 2",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": 27,
    "y": -189,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n1",
      "canopy_glacial_corridor_n3"
    ]
  },
  "canopy_glacial_corridor_n3": {
    "id": "canopy_glacial_corridor_n3",
    "name": "Cryo Freeze 3",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -119,
    "y": -200,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n2",
      "canopy_glacial_corridor_n4"
    ]
  },
  "canopy_glacial_corridor_n4": {
    "id": "canopy_glacial_corridor_n4",
    "name": "Frost Wisdom Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -67,
    "y": -443,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n3",
      "canopy_glacial_corridor_n5"
    ]
  },
  "canopy_glacial_corridor_n5": {
    "id": "canopy_glacial_corridor_n5",
    "name": "Subzero Flow 5",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -81,
    "y": -56,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n4",
      "canopy_glacial_corridor_n6"
    ]
  },
  "canopy_glacial_corridor_n6": {
    "id": "canopy_glacial_corridor_n6",
    "name": "Cryo Freeze 6",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -121,
    "y": -123,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n5",
      "canopy_glacial_corridor_n7"
    ]
  },
  "canopy_glacial_corridor_n7": {
    "id": "canopy_glacial_corridor_n7",
    "name": "Frost Wisdom 7",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -147,
    "y": -275,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n6",
      "canopy_glacial_corridor_n8"
    ]
  },
  "canopy_glacial_corridor_n8": {
    "id": "canopy_glacial_corridor_n8",
    "name": "Subzero Flow Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -218,
    "y": -173,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 16,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n7",
      "canopy_glacial_corridor_n9"
    ]
  },
  "canopy_glacial_corridor_n9": {
    "id": "canopy_glacial_corridor_n9",
    "name": "Cryo Freeze 9",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -241,
    "y": -272,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n10",
      "canopy_glacial_corridor_n8"
    ]
  },
  "canopy_glacial_corridor_n10": {
    "id": "canopy_glacial_corridor_n10",
    "name": "Frost Wisdom 10",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -109,
    "y": -345,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_glacial_corridor_n9",
      "keystone_glacial_sovereign"
    ]
  },
  "canopy_astral_corridor_n1": {
    "id": "canopy_astral_corridor_n1",
    "name": "Aether Wisdom 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": -50,
    "y": -162,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n2",
      "keystone_prismatic_surge"
    ]
  },
  "canopy_astral_corridor_n2": {
    "id": "canopy_astral_corridor_n2",
    "name": "Gravity Pull 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 96,
    "y": -155,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n1",
      "canopy_astral_corridor_n3"
    ]
  },
  "canopy_astral_corridor_n3": {
    "id": "canopy_astral_corridor_n3",
    "name": "Singularity Pen 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3% Arcane Pen.",
    "x": 171,
    "y": -167,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "arcanePenetration",
        "value": 3,
        "displayText": "+3% Arcane Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n2",
      "canopy_astral_corridor_n4"
    ]
  },
  "canopy_astral_corridor_n4": {
    "id": "canopy_astral_corridor_n4",
    "name": "Aether Wisdom Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 287,
    "y": -333,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 8,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n3",
      "canopy_astral_corridor_n5"
    ]
  },
  "canopy_astral_corridor_n5": {
    "id": "canopy_astral_corridor_n5",
    "name": "Gravity Pull 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 64,
    "y": -259,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n4",
      "canopy_astral_corridor_n6"
    ]
  },
  "canopy_astral_corridor_n6": {
    "id": "canopy_astral_corridor_n6",
    "name": "Singularity Pen 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3% Arcane Pen.",
    "x": 139,
    "y": -238,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "arcanePenetration",
        "value": 3,
        "displayText": "+3% Arcane Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n5",
      "canopy_astral_corridor_n7"
    ]
  },
  "canopy_astral_corridor_n7": {
    "id": "canopy_astral_corridor_n7",
    "name": "Aether Wisdom 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 248,
    "y": -154,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n6",
      "canopy_astral_corridor_n8"
    ]
  },
  "canopy_astral_corridor_n8": {
    "id": "canopy_astral_corridor_n8",
    "name": "Gravity Pull Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 109,
    "y": -363,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n7",
      "canopy_astral_corridor_n9"
    ]
  },
  "canopy_astral_corridor_n9": {
    "id": "canopy_astral_corridor_n9",
    "name": "Singularity Pen 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3% Arcane Pen.",
    "x": 325,
    "y": -157,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "arcanePenetration",
        "value": 3,
        "displayText": "+3% Arcane Pen"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n10",
      "canopy_astral_corridor_n8"
    ]
  },
  "canopy_astral_corridor_n10": {
    "id": "canopy_astral_corridor_n10",
    "name": "Aether Wisdom 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Wisdom.",
    "x": 219,
    "y": -227,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 4,
        "displayText": "+4 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_astral_corridor_n9",
      "keystone_astral_singularity"
    ]
  },
  "canopy_acrobatic_corridor_n1": {
    "id": "canopy_acrobatic_corridor_n1",
    "name": "Dex-Wis Flow 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 458,
    "y": 84,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n2",
      "keystone_overcharged_conduit"
    ]
  },
  "canopy_acrobatic_corridor_n2": {
    "id": "canopy_acrobatic_corridor_n2",
    "name": "Cast Velocity 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4% Cast Speed.",
    "x": 513,
    "y": -42,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "castSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Cast Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n1",
      "canopy_acrobatic_corridor_n3"
    ]
  },
  "canopy_acrobatic_corridor_n3": {
    "id": "canopy_acrobatic_corridor_n3",
    "name": "Acrobat Mana 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +15 Mana.",
    "x": 441,
    "y": -13,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 15,
        "displayText": "+15 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n2",
      "canopy_acrobatic_corridor_n4"
    ]
  },
  "canopy_acrobatic_corridor_n4": {
    "id": "canopy_acrobatic_corridor_n4",
    "name": "Dex-Wis Flow Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 420,
    "y": -116,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 6,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n3",
      "canopy_acrobatic_corridor_n5"
    ]
  },
  "canopy_acrobatic_corridor_n5": {
    "id": "canopy_acrobatic_corridor_n5",
    "name": "Cast Velocity 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4% Cast Speed.",
    "x": 516,
    "y": 35,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "castSpeedMultiplier",
        "value": 0.04,
        "displayText": "+4% Cast Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n4",
      "canopy_acrobatic_corridor_n6"
    ]
  },
  "canopy_acrobatic_corridor_n6": {
    "id": "canopy_acrobatic_corridor_n6",
    "name": "Acrobat Mana 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +15 Mana.",
    "x": 524,
    "y": -118,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 15,
        "displayText": "+15 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n5",
      "canopy_acrobatic_corridor_n7"
    ]
  },
  "canopy_acrobatic_corridor_n7": {
    "id": "canopy_acrobatic_corridor_n7",
    "name": "Dex-Wis Flow 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 588,
    "y": -75,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n6",
      "canopy_acrobatic_corridor_n8"
    ]
  },
  "canopy_acrobatic_corridor_n8": {
    "id": "canopy_acrobatic_corridor_n8",
    "name": "Cast Velocity Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +4% Cast Speed.",
    "x": 687,
    "y": -111,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "castSpeedMultiplier",
        "value": 0.08,
        "displayText": "+4% Cast Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n7",
      "canopy_acrobatic_corridor_n9"
    ]
  },
  "canopy_acrobatic_corridor_n9": {
    "id": "canopy_acrobatic_corridor_n9",
    "name": "Acrobat Mana 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +15 Mana.",
    "x": 592,
    "y": -154,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxMana",
        "value": 15,
        "displayText": "+15 Mana"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n10",
      "canopy_acrobatic_corridor_n8"
    ]
  },
  "canopy_acrobatic_corridor_n10": {
    "id": "canopy_acrobatic_corridor_n10",
    "name": "Dex-Wis Flow 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +3 to Dexterity.",
    "x": 660,
    "y": -218,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "dexterity",
        "value": 3,
        "displayText": "+3 to Dexterity"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_acrobatic_corridor_n9",
      "keystone_acrobatic_sorcery"
    ]
  },
  "wis_pyre_geo_n1": {
    "id": "wis_pyre_geo_n1",
    "name": "Stonecraft Wisdom 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -731,
    "y": -262,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_pyretic_ascendancy",
      "wis_pyre_geo_n2"
    ]
  },
  "wis_pyre_geo_n2": {
    "id": "wis_pyre_geo_n2",
    "name": "Quake Force 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Physical Damage.",
    "x": -749,
    "y": -338,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedPhysicalDamage",
        "value": 8,
        "displayText": "+8% Physical Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n1",
      "wis_pyre_geo_n3"
    ]
  },
  "wis_pyre_geo_n3": {
    "id": "wis_pyre_geo_n3",
    "name": "Stagger Core 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Stagger Chance.",
    "x": -630,
    "y": -237,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 5,
        "displayText": "+5% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n2",
      "wis_pyre_geo_n4"
    ]
  },
  "wis_pyre_geo_n4": {
    "id": "wis_pyre_geo_n4",
    "name": "Stonecraft Wisdom Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -672,
    "y": -409,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 10,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n3",
      "wis_pyre_geo_n5"
    ]
  },
  "wis_pyre_geo_n5": {
    "id": "wis_pyre_geo_n5",
    "name": "Quake Force 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Physical Damage.",
    "x": -667,
    "y": -305,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedPhysicalDamage",
        "value": 8,
        "displayText": "+8% Physical Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n4",
      "wis_pyre_geo_n6"
    ]
  },
  "wis_pyre_geo_n6": {
    "id": "wis_pyre_geo_n6",
    "name": "Stagger Core 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Stagger Chance.",
    "x": -790,
    "y": -403,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 5,
        "displayText": "+5% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n5",
      "wis_pyre_geo_n7"
    ]
  },
  "wis_pyre_geo_n7": {
    "id": "wis_pyre_geo_n7",
    "name": "Stonecraft Wisdom 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -629,
    "y": -504,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n6",
      "wis_pyre_geo_n8"
    ]
  },
  "wis_pyre_geo_n8": {
    "id": "wis_pyre_geo_n8",
    "name": "Quake Force Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Physical Damage.",
    "x": -642,
    "y": -609,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedPhysicalDamage",
        "value": 16,
        "displayText": "+8% Physical Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n7",
      "wis_pyre_geo_n9"
    ]
  },
  "wis_pyre_geo_n9": {
    "id": "wis_pyre_geo_n9",
    "name": "Stagger Core 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Stagger Chance.",
    "x": -755,
    "y": -470,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 5,
        "displayText": "+5% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n10",
      "wis_pyre_geo_n8"
    ]
  },
  "wis_pyre_geo_n10": {
    "id": "wis_pyre_geo_n10",
    "name": "Stonecraft Wisdom 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -703,
    "y": -527,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n11",
      "wis_pyre_geo_n9"
    ]
  },
  "wis_pyre_geo_n11": {
    "id": "wis_pyre_geo_n11",
    "name": "Quake Force 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Physical Damage.",
    "x": -745,
    "y": -613,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedPhysicalDamage",
        "value": 8,
        "displayText": "+8% Physical Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_pyre_geo_n10",
      "wis_pyre_geo_n12"
    ]
  },
  "wis_pyre_geo_n12": {
    "id": "wis_pyre_geo_n12",
    "name": "Stagger Core Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Stagger Chance.",
    "x": -825,
    "y": -546,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToStagger",
        "value": 10,
        "displayText": "+5% Stagger Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_geomantic_earthsurge",
      "wis_pyre_geo_n11"
    ]
  },
  "wis_glacial_plague_n1": {
    "id": "wis_glacial_plague_n1",
    "name": "Pestilent Wisdom 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -305,
    "y": -230,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_glacial_sovereign",
      "wis_glacial_plague_n2"
    ]
  },
  "wis_glacial_plague_n2": {
    "id": "wis_glacial_plague_n2",
    "name": "Toxic Chant 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": -160,
    "y": -402,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n1",
      "wis_glacial_plague_n3"
    ]
  },
  "wis_glacial_plague_n3": {
    "id": "wis_glacial_plague_n3",
    "name": "Rot Surge 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -197,
    "y": -334,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n2",
      "wis_glacial_plague_n4"
    ]
  },
  "wis_glacial_plague_n4": {
    "id": "wis_glacial_plague_n4",
    "name": "Pestilent Wisdom Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -301,
    "y": -356,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 10,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n3",
      "wis_glacial_plague_n5"
    ]
  },
  "wis_glacial_plague_n5": {
    "id": "wis_glacial_plague_n5",
    "name": "Toxic Chant 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": -230,
    "y": -432,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n4",
      "wis_glacial_plague_n6"
    ]
  },
  "wis_glacial_plague_n6": {
    "id": "wis_glacial_plague_n6",
    "name": "Rot Surge 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -429,
    "y": -720,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n5",
      "wis_glacial_plague_n7"
    ]
  },
  "wis_glacial_plague_n7": {
    "id": "wis_glacial_plague_n7",
    "name": "Pestilent Wisdom 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -240,
    "y": -509,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n6",
      "wis_glacial_plague_n8"
    ]
  },
  "wis_glacial_plague_n8": {
    "id": "wis_glacial_plague_n8",
    "name": "Toxic Chant Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": 20,
    "y": -871,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 12,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n7",
      "wis_glacial_plague_n9"
    ]
  },
  "wis_glacial_plague_n9": {
    "id": "wis_glacial_plague_n9",
    "name": "Rot Surge 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -422,
    "y": -642,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n10",
      "wis_glacial_plague_n8"
    ]
  },
  "wis_glacial_plague_n10": {
    "id": "wis_glacial_plague_n10",
    "name": "Pestilent Wisdom 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": -350,
    "y": -618,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n11",
      "wis_glacial_plague_n9"
    ]
  },
  "wis_glacial_plague_n11": {
    "id": "wis_glacial_plague_n11",
    "name": "Toxic Chant 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +6% Poison Chance.",
    "x": -150,
    "y": -698,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToPoison",
        "value": 6,
        "displayText": "+6% Poison Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_glacial_plague_n10",
      "wis_glacial_plague_n12"
    ]
  },
  "wis_glacial_plague_n12": {
    "id": "wis_glacial_plague_n12",
    "name": "Rot Surge Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -329,
    "y": -749,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_plaguebringer_sceptre",
      "wis_glacial_plague_n11"
    ]
  },
  "wis_astral_purify_n1": {
    "id": "wis_astral_purify_n1",
    "name": "Radiant Wisdom 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 296,
    "y": -229,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_astral_singularity",
      "wis_astral_purify_n2"
    ]
  },
  "wis_astral_purify_n2": {
    "id": "wis_astral_purify_n2",
    "name": "Consecrate Burst 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Consecrate Chance.",
    "x": 189,
    "y": -298,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToConsecrate",
        "value": 6,
        "displayText": "+6% Consecrate Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n1",
      "wis_astral_purify_n3"
    ]
  },
  "wis_astral_purify_n3": {
    "id": "wis_astral_purify_n3",
    "name": "Holy Burst 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 211,
    "y": -405,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n2",
      "wis_astral_purify_n4"
    ]
  },
  "wis_astral_purify_n4": {
    "id": "wis_astral_purify_n4",
    "name": "Radiant Wisdom Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 273,
    "y": -513,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 10,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n3",
      "wis_astral_purify_n5"
    ]
  },
  "wis_astral_purify_n5": {
    "id": "wis_astral_purify_n5",
    "name": "Consecrate Burst 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Consecrate Chance.",
    "x": 347,
    "y": -439,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToConsecrate",
        "value": 6,
        "displayText": "+6% Consecrate Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n4",
      "wis_astral_purify_n6"
    ]
  },
  "wis_astral_purify_n6": {
    "id": "wis_astral_purify_n6",
    "name": "Holy Burst 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 414,
    "y": -479,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n5",
      "wis_astral_purify_n7"
    ]
  },
  "wis_astral_purify_n7": {
    "id": "wis_astral_purify_n7",
    "name": "Radiant Wisdom 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 266,
    "y": -616,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n6",
      "wis_astral_purify_n8"
    ]
  },
  "wis_astral_purify_n8": {
    "id": "wis_astral_purify_n8",
    "name": "Consecrate Burst Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Consecrate Chance.",
    "x": 131,
    "y": -732,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToConsecrate",
        "value": 12,
        "displayText": "+6% Consecrate Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n7",
      "wis_astral_purify_n9"
    ]
  },
  "wis_astral_purify_n9": {
    "id": "wis_astral_purify_n9",
    "name": "Holy Burst 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 408,
    "y": -556,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n10",
      "wis_astral_purify_n8"
    ]
  },
  "wis_astral_purify_n10": {
    "id": "wis_astral_purify_n10",
    "name": "Radiant Wisdom 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 340,
    "y": -593,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n11",
      "wis_astral_purify_n9"
    ]
  },
  "wis_astral_purify_n11": {
    "id": "wis_astral_purify_n11",
    "name": "Consecrate Burst 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6% Consecrate Chance.",
    "x": 224,
    "y": -681,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToConsecrate",
        "value": 6,
        "displayText": "+6% Consecrate Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_astral_purify_n10",
      "wis_astral_purify_n12"
    ]
  },
  "wis_astral_purify_n12": {
    "id": "wis_astral_purify_n12",
    "name": "Holy Burst Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 331,
    "y": -698,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_purifying_archon",
      "wis_astral_purify_n11"
    ]
  },
  "wis_acrobat_alch_n1": {
    "id": "wis_acrobat_alch_n1",
    "name": "Catalyst Wisdom 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 660,
    "y": -296,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_acrobatic_sorcery",
      "wis_acrobat_alch_n2"
    ]
  },
  "wis_acrobat_alch_n2": {
    "id": "wis_acrobat_alch_n2",
    "name": "Reagent DoT 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +10% Damage over Time.",
    "x": 737,
    "y": -300,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamageOverTime",
        "value": 10,
        "displayText": "+10% Damage over Time"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n1",
      "wis_acrobat_alch_n3"
    ]
  },
  "wis_acrobat_alch_n3": {
    "id": "wis_acrobat_alch_n3",
    "name": "Decay Catalyst 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 599,
    "y": -438,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n2",
      "wis_acrobat_alch_n4"
    ]
  },
  "wis_acrobat_alch_n4": {
    "id": "wis_acrobat_alch_n4",
    "name": "Catalyst Wisdom Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 695,
    "y": -395,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 10,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n3",
      "wis_acrobat_alch_n5"
    ]
  },
  "wis_acrobat_alch_n5": {
    "id": "wis_acrobat_alch_n5",
    "name": "Reagent DoT 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +10% Damage over Time.",
    "x": 484,
    "y": -542,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamageOverTime",
        "value": 10,
        "displayText": "+10% Damage over Time"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n4",
      "wis_acrobat_alch_n6"
    ]
  },
  "wis_acrobat_alch_n6": {
    "id": "wis_acrobat_alch_n6",
    "name": "Decay Catalyst 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 537,
    "y": -484,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n5",
      "wis_acrobat_alch_n7"
    ]
  },
  "wis_acrobat_alch_n7": {
    "id": "wis_acrobat_alch_n7",
    "name": "Catalyst Wisdom 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 655,
    "y": -491,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n6",
      "wis_acrobat_alch_n8"
    ]
  },
  "wis_acrobat_alch_n8": {
    "id": "wis_acrobat_alch_n8",
    "name": "Reagent DoT Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +10% Damage over Time.",
    "x": 698,
    "y": -795,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamageOverTime",
        "value": 20,
        "displayText": "+10% Damage over Time"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n7",
      "wis_acrobat_alch_n9"
    ]
  },
  "wis_acrobat_alch_n9": {
    "id": "wis_acrobat_alch_n9",
    "name": "Decay Catalyst 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 584,
    "y": -546,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n10",
      "wis_acrobat_alch_n8"
    ]
  },
  "wis_acrobat_alch_n10": {
    "id": "wis_acrobat_alch_n10",
    "name": "Catalyst Wisdom 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Wisdom.",
    "x": 706,
    "y": -691,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 5,
        "displayText": "+5 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n11",
      "wis_acrobat_alch_n9"
    ]
  },
  "wis_acrobat_alch_n11": {
    "id": "wis_acrobat_alch_n11",
    "name": "Reagent DoT 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +10% Damage over Time.",
    "x": 768,
    "y": -645,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamageOverTime",
        "value": 10,
        "displayText": "+10% Damage over Time"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "wis_acrobat_alch_n10",
      "wis_acrobat_alch_n12"
    ]
  },
  "wis_acrobat_alch_n12": {
    "id": "wis_acrobat_alch_n12",
    "name": "Decay Catalyst Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 871,
    "y": -667,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_alchemical_catalyst",
      "wis_acrobat_alch_n11"
    ]
  },
  "keystone_wildfire_gamble": {
    "id": "keystone_wildfire_gamble",
    "name": "Wildfire Gamble (Luck x Fire)",
    "type": "keystone",
    "category": "elemental_fire",
    "description": "Your highest fire damage rolls trigger combusting embers, but low rolls fizzle into duds. Drawback: Fire damage variance is greatly increased.",
    "x": -1857,
    "y": -1116,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedFireDamage",
        "value": 40,
        "displayText": "+40% Fire Damage"
      }
    ],
    "keystoneFlag": "wildfireGamble",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n14"
    ]
  },
  "keystone_frostbite_roulette": {
    "id": "keystone_frostbite_roulette",
    "name": "Frostbite Roulette (Luck x Cold)",
    "type": "keystone",
    "category": "elemental_cold",
    "description": "Lucky cold hits shatter into additional ice shards; unlucky hits are reduced to glancing chills. Drawback: Cold damage cannot reliably freeze on low rolls.",
    "x": -1452,
    "y": -954,
    "icon": "Snowflake",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedColdDamage",
        "value": 40,
        "displayText": "+40% Cold Damage"
      }
    ],
    "keystoneFlag": "frostbiteRoulette",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n12"
    ]
  },
  "keystone_high_voltage_jackpot": {
    "id": "keystone_high_voltage_jackpot",
    "name": "High Voltage Jackpot (Luck x Lightning)",
    "type": "keystone",
    "category": "elemental_lightning",
    "description": "Lightning arcs chain massively on lucky high rolls, fizzling on unlucky ones. Drawback: Shock duration is halved.",
    "x": -227,
    "y": -1608,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedLightningDamage",
        "value": 40,
        "displayText": "+40% Lightning Damage"
      }
    ],
    "keystoneFlag": "highVoltageJackpot",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_frostbound_phantoms",
      "luck_harmony_volt_n10"
    ]
  },
  "keystone_twisted_destiny": {
    "id": "keystone_twisted_destiny",
    "name": "Twisted Destiny (Luck x Chaos)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Chaos damage can roll any element type and randomly ignore resistances on high rolls. Drawback: You can also randomly deal reduced damage to some enemies.",
    "x": 454,
    "y": -1459,
    "icon": "Shuffle",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedChaosDamage",
        "value": 40,
        "displayText": "+40% Chaos Damage"
      }
    ],
    "keystoneFlag": "twistedDestiny",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n12"
    ]
  },
  "keystone_divine_serendipity": {
    "id": "keystone_divine_serendipity",
    "name": "Divine Serendipity (Luck x Holy)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "Lucky holy hits summon blessed miracles and divine smites. Drawback: Unlucky hits grant enemies brief divine resistance.",
    "x": 1488,
    "y": -1058,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedHolyDamage",
        "value": 40,
        "displayText": "+40% Holy Damage"
      }
    ],
    "keystoneFlag": "divineSerendipity",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_solar_deadeye",
      "luck_alc_serendip_n12"
    ]
  },
  "keystone_astral_gambler": {
    "id": "keystone_astral_gambler",
    "name": "Astral Gambler (Luck x Arcane)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Arcane spells randomly repeat, fork, or fizzle based on Luck. Drawback: Spell mana costs become volatile and sometimes double.",
    "x": 1992,
    "y": -974,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedArcaneDamage",
        "value": 40,
        "displayText": "+40% Arcane Damage"
      }
    ],
    "keystoneFlag": "astralGambler",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_fortunes_favor",
      "luck_gambler_caustic_n1",
      "luck_phantom_astral_n14"
    ]
  },
  "keystone_caustic_fortune": {
    "id": "keystone_caustic_fortune",
    "name": "Caustic Fortune (Luck x Acid)",
    "type": "keystone",
    "category": "chaos_poison",
    "description": "Lucky acid hits melt armor and create massive corrosion pools; unlucky hits leave harmless residue. Drawback: Acid pools can briefly slow you too.",
    "x": 2806,
    "y": -1314,
    "icon": "Droplets",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedAcidDamage",
        "value": 40,
        "displayText": "+40% Acid Damage"
      }
    ],
    "keystoneFlag": "causticFortune",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n1",
      "luck_gambler_caustic_n12",
      "will_caustic_path_n1"
    ]
  },
  "keystone_cacophony_fortune": {
    "id": "keystone_cacophony_fortune",
    "name": "Cacophony Fortune (Luck x Sonic)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Sonic hits can echo many times on perfect rolls or thud dully on poor rolls. Drawback: Your skill cooldowns have minor random variance.",
    "x": 3420,
    "y": -1273,
    "icon": "Volume2",
    "stats": [
      {
        "statKey": "luck",
        "value": 25,
        "displayText": "+25 to Luck"
      },
      {
        "statKey": "increasedSonicDamage",
        "value": 40,
        "displayText": "+40% Sonic Damage"
      }
    ],
    "keystoneFlag": "cacophonyFortune",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n14",
      "will_banshee_path_n1"
    ]
  },
  "luck_geo_fire_n1": {
    "id": "luck_geo_fire_n1",
    "name": "Ember Chance 1",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5 to Luck.",
    "x": -814,
    "y": -649,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_geomantic_earthsurge",
      "luck_geo_fire_n2"
    ]
  },
  "luck_geo_fire_n2": {
    "id": "luck_geo_fire_n2",
    "name": "Hot Streak 2",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -869,
    "y": -704,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n1",
      "luck_geo_fire_n3"
    ]
  },
  "luck_geo_fire_n3": {
    "id": "luck_geo_fire_n3",
    "name": "Crit Spark 3",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": -974,
    "y": -765,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n2",
      "luck_geo_fire_n4"
    ]
  },
  "luck_geo_fire_n4": {
    "id": "luck_geo_fire_n4",
    "name": "Ember Chance Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +5 to Luck.",
    "x": -1091,
    "y": -901,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "luck",
        "value": 10,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n3",
      "luck_geo_fire_n5"
    ]
  },
  "luck_geo_fire_n5": {
    "id": "luck_geo_fire_n5",
    "name": "Hot Streak 5",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1079,
    "y": -797,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n4",
      "luck_geo_fire_n6"
    ]
  },
  "luck_geo_fire_n6": {
    "id": "luck_geo_fire_n6",
    "name": "Crit Spark 6",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": -1142,
    "y": -751,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n5",
      "luck_geo_fire_n7"
    ]
  },
  "luck_geo_fire_n7": {
    "id": "luck_geo_fire_n7",
    "name": "Ember Chance 7",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5 to Luck.",
    "x": -1208,
    "y": -791,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n6",
      "luck_geo_fire_n8"
    ]
  },
  "luck_geo_fire_n8": {
    "id": "luck_geo_fire_n8",
    "name": "Hot Streak Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1292,
    "y": -728,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 16,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n7",
      "luck_geo_fire_n9"
    ]
  },
  "luck_geo_fire_n9": {
    "id": "luck_geo_fire_n9",
    "name": "Crit Spark 9",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": -1393,
    "y": -698,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "critChance",
        "value": 4,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n10",
      "luck_geo_fire_n8"
    ]
  },
  "luck_geo_fire_n10": {
    "id": "luck_geo_fire_n10",
    "name": "Ember Chance 10",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5 to Luck.",
    "x": -1385,
    "y": -776,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n11",
      "luck_geo_fire_n9"
    ]
  },
  "luck_geo_fire_n11": {
    "id": "luck_geo_fire_n11",
    "name": "Hot Streak 11",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1456,
    "y": -744,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n10",
      "luck_geo_fire_n12"
    ]
  },
  "luck_geo_fire_n12": {
    "id": "luck_geo_fire_n12",
    "name": "Crit Spark Notable",
    "type": "notable",
    "category": "elemental_fire",
    "description": "Pathway node granting +4% Crit Chance.",
    "x": -1551,
    "y": -792,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "critChance",
        "value": 8,
        "displayText": "+4% Crit Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n11",
      "luck_geo_fire_n13"
    ]
  },
  "luck_geo_fire_n13": {
    "id": "luck_geo_fire_n13",
    "name": "Ember Chance 13",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +5 to Luck.",
    "x": -1648,
    "y": -830,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_geo_fire_n12",
      "luck_geo_fire_n14"
    ]
  },
  "luck_geo_fire_n14": {
    "id": "luck_geo_fire_n14",
    "name": "Hot Streak 14",
    "type": "small",
    "category": "elemental_fire",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -1649,
    "y": -749,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_wildfire_gamble",
      "luck_geo_fire_n13"
    ]
  },
  "luck_plague_cold_n1": {
    "id": "luck_plague_cold_n1",
    "name": "Frost Fortune 1",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +5 to Luck.",
    "x": -286,
    "y": -844,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_plaguebringer_sceptre",
      "luck_plague_cold_n2"
    ]
  },
  "luck_plague_cold_n2": {
    "id": "luck_plague_cold_n2",
    "name": "Shatter Ice 2",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -363,
    "y": -847,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n1",
      "luck_plague_cold_n3"
    ]
  },
  "luck_plague_cold_n3": {
    "id": "luck_plague_cold_n3",
    "name": "Freeze Gamble 3",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -422,
    "y": -797,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n2",
      "luck_plague_cold_n4"
    ]
  },
  "luck_plague_cold_n4": {
    "id": "luck_plague_cold_n4",
    "name": "Frost Fortune Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +5 to Luck.",
    "x": -708,
    "y": -1157,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "luck",
        "value": 10,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n3",
      "luck_plague_cold_n5"
    ]
  },
  "luck_plague_cold_n5": {
    "id": "luck_plague_cold_n5",
    "name": "Shatter Ice 5",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -468,
    "y": -1026,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n4",
      "luck_plague_cold_n6"
    ]
  },
  "luck_plague_cold_n6": {
    "id": "luck_plague_cold_n6",
    "name": "Freeze Gamble 6",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -449,
    "y": -1101,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n5",
      "luck_plague_cold_n7"
    ]
  },
  "luck_plague_cold_n7": {
    "id": "luck_plague_cold_n7",
    "name": "Frost Fortune 7",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +5 to Luck.",
    "x": -511,
    "y": -962,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n6",
      "luck_plague_cold_n8"
    ]
  },
  "luck_plague_cold_n8": {
    "id": "luck_plague_cold_n8",
    "name": "Shatter Ice Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -615,
    "y": -971,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 16,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n7",
      "luck_plague_cold_n9"
    ]
  },
  "luck_plague_cold_n9": {
    "id": "luck_plague_cold_n9",
    "name": "Freeze Gamble 9",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -673,
    "y": -1059,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 4,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n10",
      "luck_plague_cold_n8"
    ]
  },
  "luck_plague_cold_n10": {
    "id": "luck_plague_cold_n10",
    "name": "Frost Fortune 10",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +5 to Luck.",
    "x": -768,
    "y": -1054,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n11",
      "luck_plague_cold_n9"
    ]
  },
  "luck_plague_cold_n11": {
    "id": "luck_plague_cold_n11",
    "name": "Shatter Ice 11",
    "type": "small",
    "category": "elemental_cold",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -717,
    "y": -996,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_plague_cold_n10",
      "luck_plague_cold_n12"
    ]
  },
  "luck_plague_cold_n12": {
    "id": "luck_plague_cold_n12",
    "name": "Freeze Gamble Notable",
    "type": "notable",
    "category": "elemental_cold",
    "description": "Pathway node granting +4% Freeze Chance.",
    "x": -1067,
    "y": -1281,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToFreeze",
        "value": 8,
        "displayText": "+4% Freeze Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_frostbite_roulette",
      "luck_plague_cold_n11"
    ]
  },
  "luck_harmony_volt_n1": {
    "id": "luck_harmony_volt_n1",
    "name": "Shock Luck 1",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5 to Luck.",
    "x": -34,
    "y": -959,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_harmonic_resonance",
      "luck_harmony_volt_n2"
    ]
  },
  "luck_harmony_volt_n2": {
    "id": "luck_harmony_volt_n2",
    "name": "Overcharge Roll 2",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": 9,
    "y": -1104,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n1",
      "luck_harmony_volt_n3"
    ]
  },
  "luck_harmony_volt_n3": {
    "id": "luck_harmony_volt_n3",
    "name": "Shock Luck 3",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5 to Luck.",
    "x": 56,
    "y": -970,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n2",
      "luck_harmony_volt_n4"
    ]
  },
  "luck_harmony_volt_n4": {
    "id": "luck_harmony_volt_n4",
    "name": "Overcharge Roll Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": 340,
    "y": -1297,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 16,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n3",
      "luck_harmony_volt_n5"
    ]
  },
  "luck_harmony_volt_n5": {
    "id": "luck_harmony_volt_n5",
    "name": "Shock Luck 5",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5 to Luck.",
    "x": -79,
    "y": -1023,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n4",
      "luck_harmony_volt_n6"
    ]
  },
  "luck_harmony_volt_n6": {
    "id": "luck_harmony_volt_n6",
    "name": "Overcharge Roll 6",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": 62,
    "y": -1327,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n5",
      "luck_harmony_volt_n7"
    ]
  },
  "luck_harmony_volt_n7": {
    "id": "luck_harmony_volt_n7",
    "name": "Shock Luck 7",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2,
    "y": -1027,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n6",
      "luck_harmony_volt_n8"
    ]
  },
  "luck_harmony_volt_n8": {
    "id": "luck_harmony_volt_n8",
    "name": "Overcharge Roll Notable",
    "type": "notable",
    "category": "elemental_lightning",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -336,
    "y": -1236,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 16,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n7",
      "luck_harmony_volt_n9"
    ]
  },
  "luck_harmony_volt_n9": {
    "id": "luck_harmony_volt_n9",
    "name": "Shock Luck 9",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +5 to Luck.",
    "x": -5,
    "y": -1289,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_harmony_volt_n10",
      "luck_harmony_volt_n8"
    ]
  },
  "luck_harmony_volt_n10": {
    "id": "luck_harmony_volt_n10",
    "name": "Overcharge Roll 10",
    "type": "small",
    "category": "elemental_lightning",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -248,
    "y": -1320,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_high_voltage_jackpot",
      "luck_harmony_volt_n9"
    ]
  },
  "luck_purify_twist_n1": {
    "id": "luck_purify_twist_n1",
    "name": "Chaos Roll 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 190,
    "y": -814,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_purifying_archon",
      "luck_purify_twist_n2"
    ]
  },
  "luck_purify_twist_n2": {
    "id": "luck_purify_twist_n2",
    "name": "Twisted Fate 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 243,
    "y": -755,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n1",
      "luck_purify_twist_n3"
    ]
  },
  "luck_purify_twist_n3": {
    "id": "luck_purify_twist_n3",
    "name": "Chaos Roll 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 339,
    "y": -802,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n2",
      "luck_purify_twist_n4"
    ]
  },
  "luck_purify_twist_n4": {
    "id": "luck_purify_twist_n4",
    "name": "Twisted Fate Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 194,
    "y": -918,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n3",
      "luck_purify_twist_n5"
    ]
  },
  "luck_purify_twist_n5": {
    "id": "luck_purify_twist_n5",
    "name": "Chaos Roll 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 392,
    "y": -871,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n4",
      "luck_purify_twist_n6"
    ]
  },
  "luck_purify_twist_n6": {
    "id": "luck_purify_twist_n6",
    "name": "Twisted Fate 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 393,
    "y": -948,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n5",
      "luck_purify_twist_n7"
    ]
  },
  "luck_purify_twist_n7": {
    "id": "luck_purify_twist_n7",
    "name": "Chaos Roll 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 366,
    "y": -1021,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n6",
      "luck_purify_twist_n8"
    ]
  },
  "luck_purify_twist_n8": {
    "id": "luck_purify_twist_n8",
    "name": "Twisted Fate Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 570,
    "y": -919,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n7",
      "luck_purify_twist_n9"
    ]
  },
  "luck_purify_twist_n9": {
    "id": "luck_purify_twist_n9",
    "name": "Chaos Roll 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 479,
    "y": -1077,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n10",
      "luck_purify_twist_n8"
    ]
  },
  "luck_purify_twist_n10": {
    "id": "luck_purify_twist_n10",
    "name": "Twisted Fate 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 520,
    "y": -1011,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n11",
      "luck_purify_twist_n9"
    ]
  },
  "luck_purify_twist_n11": {
    "id": "luck_purify_twist_n11",
    "name": "Chaos Roll 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 477,
    "y": -1175,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_purify_twist_n10",
      "luck_purify_twist_n12"
    ]
  },
  "luck_purify_twist_n12": {
    "id": "luck_purify_twist_n12",
    "name": "Twisted Fate Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": 796,
    "y": -1276,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_twisted_destiny",
      "luck_purify_twist_n11"
    ]
  },
  "luck_alc_serendip_n1": {
    "id": "luck_alc_serendip_n1",
    "name": "Blessed Fortune 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 777,
    "y": -723,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_alchemical_catalyst",
      "luck_alc_serendip_n2"
    ]
  },
  "luck_alc_serendip_n2": {
    "id": "luck_alc_serendip_n2",
    "name": "Radiant Odds 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 855,
    "y": -770,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n1",
      "luck_alc_serendip_n3"
    ]
  },
  "luck_alc_serendip_n3": {
    "id": "luck_alc_serendip_n3",
    "name": "Blessed Fortune 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 931,
    "y": -753,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n2",
      "luck_alc_serendip_n4"
    ]
  },
  "luck_alc_serendip_n4": {
    "id": "luck_alc_serendip_n4",
    "name": "Radiant Odds Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1045,
    "y": -708,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n3",
      "luck_alc_serendip_n5"
    ]
  },
  "luck_alc_serendip_n5": {
    "id": "luck_alc_serendip_n5",
    "name": "Blessed Fortune 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 1097,
    "y": -799,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n4",
      "luck_alc_serendip_n6"
    ]
  },
  "luck_alc_serendip_n6": {
    "id": "luck_alc_serendip_n6",
    "name": "Radiant Odds 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 948,
    "y": -829,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n5",
      "luck_alc_serendip_n7"
    ]
  },
  "luck_alc_serendip_n7": {
    "id": "luck_alc_serendip_n7",
    "name": "Blessed Fortune 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 1026,
    "y": -831,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n6",
      "luck_alc_serendip_n8"
    ]
  },
  "luck_alc_serendip_n8": {
    "id": "luck_alc_serendip_n8",
    "name": "Radiant Odds Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1127,
    "y": -899,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n7",
      "luck_alc_serendip_n9"
    ]
  },
  "luck_alc_serendip_n9": {
    "id": "luck_alc_serendip_n9",
    "name": "Blessed Fortune 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 1245,
    "y": -879,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n10",
      "luck_alc_serendip_n8"
    ]
  },
  "luck_alc_serendip_n10": {
    "id": "luck_alc_serendip_n10",
    "name": "Radiant Odds 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1148,
    "y": -1002,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n11",
      "luck_alc_serendip_n9"
    ]
  },
  "luck_alc_serendip_n11": {
    "id": "luck_alc_serendip_n11",
    "name": "Blessed Fortune 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +5 to Luck.",
    "x": 1217,
    "y": -952,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_alc_serendip_n10",
      "luck_alc_serendip_n12"
    ]
  },
  "luck_alc_serendip_n12": {
    "id": "luck_alc_serendip_n12",
    "name": "Radiant Odds Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 1322,
    "y": -959,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_divine_serendipity",
      "luck_alc_serendip_n11"
    ]
  },
  "luck_phantom_astral_n1": {
    "id": "luck_phantom_astral_n1",
    "name": "Astral Odds 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 3092,
    "y": -730,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_phantom_veil",
      "luck_phantom_astral_n2"
    ]
  },
  "luck_phantom_astral_n2": {
    "id": "luck_phantom_astral_n2",
    "name": "Wild Arcana 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 3024,
    "y": -693,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n1",
      "luck_phantom_astral_n3"
    ]
  },
  "luck_phantom_astral_n3": {
    "id": "luck_phantom_astral_n3",
    "name": "Astral Odds 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 3009,
    "y": -770,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n2",
      "luck_phantom_astral_n4"
    ]
  },
  "luck_phantom_astral_n4": {
    "id": "luck_phantom_astral_n4",
    "name": "Wild Arcana Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2915,
    "y": -815,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n3",
      "luck_phantom_astral_n5"
    ]
  },
  "luck_phantom_astral_n5": {
    "id": "luck_phantom_astral_n5",
    "name": "Astral Odds 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2812,
    "y": -794,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n4",
      "luck_phantom_astral_n6"
    ]
  },
  "luck_phantom_astral_n6": {
    "id": "luck_phantom_astral_n6",
    "name": "Wild Arcana 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2758,
    "y": -850,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n5",
      "luck_phantom_astral_n7"
    ]
  },
  "luck_phantom_astral_n7": {
    "id": "luck_phantom_astral_n7",
    "name": "Astral Odds 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2700,
    "y": -797,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n6",
      "luck_phantom_astral_n8"
    ]
  },
  "luck_phantom_astral_n8": {
    "id": "luck_phantom_astral_n8",
    "name": "Wild Arcana Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2637,
    "y": -881,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n7",
      "luck_phantom_astral_n9"
    ]
  },
  "luck_phantom_astral_n9": {
    "id": "luck_phantom_astral_n9",
    "name": "Astral Odds 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2539,
    "y": -825,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n10",
      "luck_phantom_astral_n8"
    ]
  },
  "luck_phantom_astral_n10": {
    "id": "luck_phantom_astral_n10",
    "name": "Wild Arcana 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2507,
    "y": -896,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n11",
      "luck_phantom_astral_n9"
    ]
  },
  "luck_phantom_astral_n11": {
    "id": "luck_phantom_astral_n11",
    "name": "Astral Odds 11",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2431,
    "y": -876,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n10",
      "luck_phantom_astral_n12"
    ]
  },
  "luck_phantom_astral_n12": {
    "id": "luck_phantom_astral_n12",
    "name": "Wild Arcana Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2324,
    "y": -849,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n11",
      "luck_phantom_astral_n13"
    ]
  },
  "luck_phantom_astral_n13": {
    "id": "luck_phantom_astral_n13",
    "name": "Astral Odds 13",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2229,
    "y": -804,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_phantom_astral_n12",
      "luck_phantom_astral_n14"
    ]
  },
  "luck_phantom_astral_n14": {
    "id": "luck_phantom_astral_n14",
    "name": "Wild Arcana 14",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 2158,
    "y": -772,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_astral_gambler",
      "luck_phantom_astral_n13"
    ]
  },
  "luck_gambler_caustic_n1": {
    "id": "luck_gambler_caustic_n1",
    "name": "Acid Dice 1",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2179,
    "y": -946,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_astral_gambler",
      "luck_gambler_caustic_n2"
    ]
  },
  "luck_gambler_caustic_n2": {
    "id": "luck_gambler_caustic_n2",
    "name": "Corrosion Chance 2",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2153,
    "y": -851,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n1",
      "luck_gambler_caustic_n3"
    ]
  },
  "luck_gambler_caustic_n3": {
    "id": "luck_gambler_caustic_n3",
    "name": "Acid Dice 3",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2225,
    "y": -882,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n2",
      "luck_gambler_caustic_n4"
    ]
  },
  "luck_gambler_caustic_n4": {
    "id": "luck_gambler_caustic_n4",
    "name": "Corrosion Chance Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2218,
    "y": -1043,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 10,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n3",
      "luck_gambler_caustic_n5"
    ]
  },
  "luck_gambler_caustic_n5": {
    "id": "luck_gambler_caustic_n5",
    "name": "Acid Dice 5",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2267,
    "y": -949,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n4",
      "luck_gambler_caustic_n6"
    ]
  },
  "luck_gambler_caustic_n6": {
    "id": "luck_gambler_caustic_n6",
    "name": "Corrosion Chance 6",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2322,
    "y": -1026,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n5",
      "luck_gambler_caustic_n7"
    ]
  },
  "luck_gambler_caustic_n7": {
    "id": "luck_gambler_caustic_n7",
    "name": "Acid Dice 7",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2345,
    "y": -952,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n6",
      "luck_gambler_caustic_n8"
    ]
  },
  "luck_gambler_caustic_n8": {
    "id": "luck_gambler_caustic_n8",
    "name": "Corrosion Chance Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2446,
    "y": -982,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 10,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n7",
      "luck_gambler_caustic_n9"
    ]
  },
  "luck_gambler_caustic_n9": {
    "id": "luck_gambler_caustic_n9",
    "name": "Acid Dice 9",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2537,
    "y": -1034,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n10",
      "luck_gambler_caustic_n8"
    ]
  },
  "luck_gambler_caustic_n10": {
    "id": "luck_gambler_caustic_n10",
    "name": "Corrosion Chance 10",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2575,
    "y": -966,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 5,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n11",
      "luck_gambler_caustic_n9"
    ]
  },
  "luck_gambler_caustic_n11": {
    "id": "luck_gambler_caustic_n11",
    "name": "Acid Dice 11",
    "type": "small",
    "category": "chaos_poison",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2509,
    "y": -1106,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_gambler_caustic_n10",
      "luck_gambler_caustic_n12"
    ]
  },
  "luck_gambler_caustic_n12": {
    "id": "luck_gambler_caustic_n12",
    "name": "Corrosion Chance Notable",
    "type": "notable",
    "category": "chaos_poison",
    "description": "Pathway node granting +5% Corrode Chance.",
    "x": 2419,
    "y": -1160,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "chanceToCorrode",
        "value": 10,
        "displayText": "+5% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_fortune",
      "luck_gambler_caustic_n11"
    ]
  },
  "luck_caustic_caco_n1": {
    "id": "luck_caustic_caco_n1",
    "name": "Echo Roll 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2651,
    "y": -985,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_fortune",
      "luck_caustic_caco_n2"
    ]
  },
  "luck_caustic_caco_n2": {
    "id": "luck_caustic_caco_n2",
    "name": "Sonic Burst 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2696,
    "y": -1049,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n1",
      "luck_caustic_caco_n3"
    ]
  },
  "luck_caustic_caco_n3": {
    "id": "luck_caustic_caco_n3",
    "name": "Echo Roll 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2730,
    "y": -977,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n2",
      "luck_caustic_caco_n4"
    ]
  },
  "luck_caustic_caco_n4": {
    "id": "luck_caustic_caco_n4",
    "name": "Sonic Burst Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2801,
    "y": -1055,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n3",
      "luck_caustic_caco_n5"
    ]
  },
  "luck_caustic_caco_n5": {
    "id": "luck_caustic_caco_n5",
    "name": "Echo Roll 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2929,
    "y": -1029,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n4",
      "luck_caustic_caco_n6"
    ]
  },
  "luck_caustic_caco_n6": {
    "id": "luck_caustic_caco_n6",
    "name": "Sonic Burst 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2894,
    "y": -1102,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n5",
      "luck_caustic_caco_n7"
    ]
  },
  "luck_caustic_caco_n7": {
    "id": "luck_caustic_caco_n7",
    "name": "Echo Roll 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2972,
    "y": -1109,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n6",
      "luck_caustic_caco_n8"
    ]
  },
  "luck_caustic_caco_n8": {
    "id": "luck_caustic_caco_n8",
    "name": "Sonic Burst Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3031,
    "y": -1003,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n7",
      "luck_caustic_caco_n9"
    ]
  },
  "luck_caustic_caco_n9": {
    "id": "luck_caustic_caco_n9",
    "name": "Echo Roll 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 2950,
    "y": -1184,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n10",
      "luck_caustic_caco_n8"
    ]
  },
  "luck_caustic_caco_n10": {
    "id": "luck_caustic_caco_n10",
    "name": "Sonic Burst 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3028,
    "y": -1184,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n11",
      "luck_caustic_caco_n9"
    ]
  },
  "luck_caustic_caco_n11": {
    "id": "luck_caustic_caco_n11",
    "name": "Echo Roll 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 3050,
    "y": -1107,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n10",
      "luck_caustic_caco_n12"
    ]
  },
  "luck_caustic_caco_n12": {
    "id": "luck_caustic_caco_n12",
    "name": "Sonic Burst Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3169,
    "y": -1404,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n11",
      "luck_caustic_caco_n13"
    ]
  },
  "luck_caustic_caco_n13": {
    "id": "luck_caustic_caco_n13",
    "name": "Echo Roll 13",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Luck.",
    "x": 3124,
    "y": -1053,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 5,
        "displayText": "+5 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "luck_caustic_caco_n12",
      "luck_caustic_caco_n14"
    ]
  },
  "luck_caustic_caco_n14": {
    "id": "luck_caustic_caco_n14",
    "name": "Sonic Burst 14",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3201,
    "y": -1070,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_cacophony_fortune",
      "luck_caustic_caco_n13"
    ]
  },
  "keystone_infernal_legion_vanguard": {
    "id": "keystone_infernal_legion_vanguard",
    "name": "Infernal Legion Vanguard (Will x Fire)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon fireborn legionnaires that burn surrounding enemies and scale with Willpower. Drawback: Your minions take increased Cold damage.",
    "x": -2211,
    "y": -1372,
    "icon": "Flame",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedFireDamage",
        "value": 30,
        "displayText": "+30% Fire Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "infernalLegionVanguard",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_null_soul_form",
      "will_hemo_infernal_n16"
    ]
  },
  "keystone_frostbound_phantoms": {
    "id": "keystone_frostbound_phantoms",
    "name": "Frostbound Phantoms (Will x Cold)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon icy phantoms that chill enemies and shatter on death. Drawback: Your movement speed is reduced while phantoms are active.",
    "x": -1513,
    "y": -1453,
    "icon": "Snowflake",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedColdDamage",
        "value": 30,
        "displayText": "+30% Cold Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "frostBoundPhantoms",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_high_voltage_jackpot",
      "will_frost_path_n16"
    ]
  },
  "keystone_storm_elemental_conduit": {
    "id": "keystone_storm_elemental_conduit",
    "name": "Storm Elemental Conduit (Will x Lightning)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon a storm elemental that channels chain lightning and grants you Shock aura. Drawback: You pulse lightning damage to yourself while channeling.",
    "x": -761,
    "y": -1823,
    "icon": "CloudLightning",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedLightningDamage",
        "value": 30,
        "displayText": "+30% Lightning Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "stormElementalConduit",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_abyssal_hivemind",
      "will_storm_path_n16"
    ]
  },
  "keystone_abyssal_hivemind": {
    "id": "keystone_abyssal_hivemind",
    "name": "Abyssal Hivemind (Will x Chaos)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon swarms of chaos abominations that multiply as they kill. Drawback: You cannot summon more than one large minion type.",
    "x": 270,
    "y": -1854,
    "icon": "Bug",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedChaosDamage",
        "value": 30,
        "displayText": "+30% Chaos Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "abyssalHiveMind",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_seraph_host",
      "keystone_storm_elemental_conduit",
      "will_abyss_path_n16"
    ]
  },
  "keystone_seraph_host": {
    "id": "keystone_seraph_host",
    "name": "Seraph Host of Astris (Will x Holy)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summons become radiant winged Seraphs casting Holy Smites and heals. Drawback: Max summon limit is 3.",
    "x": 872,
    "y": -1669,
    "icon": "Sun",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedHolyDamage",
        "value": 30,
        "displayText": "+30% Holy Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.5,
        "displayText": "+50% Minion Damage"
      }
    ],
    "keystoneFlag": "seraphHostAstris",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_abyssal_hivemind",
      "keystone_aether_shroud_nexus",
      "will_seraph_path_n16"
    ]
  },
  "keystone_aether_shroud_nexus": {
    "id": "keystone_aether_shroud_nexus",
    "name": "Aether Shroud Nexus (Will x Arcane ES)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Converts 50% of Max Mana into Energy Shield. When Energy Shield is active, Arcane spells deal +50% More Damage. Drawback: Maximum Life cannot exceed 500.",
    "x": 1597,
    "y": -1481,
    "icon": "Layers",
    "stats": [
      {
        "statKey": "willpower",
        "value": 20,
        "displayText": "+20 to Willpower"
      },
      {
        "statKey": "maxEnergyShield",
        "value": 80,
        "displayText": "+80 Energy Shield"
      }
    ],
    "keystoneFlag": "aetherShroudNexus",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_broodmother",
      "keystone_seraph_host",
      "will_aether_path_n16"
    ]
  },
  "keystone_caustic_broodmother": {
    "id": "keystone_caustic_broodmother",
    "name": "Caustic Broodmother (Will x Acid)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon acid-spitting brood spiders that leave caustic webs. Drawback: Your energy shield recharge is delayed while brood is active.",
    "x": 2143,
    "y": -1384,
    "icon": "Droplets",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedAcidDamage",
        "value": 30,
        "displayText": "+30% Acid Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "causticBroodmother",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_aether_shroud_nexus",
      "keystone_banshee_resonance",
      "will_caustic_path_n14"
    ]
  },
  "keystone_banshee_resonance": {
    "id": "keystone_banshee_resonance",
    "name": "Banshee Resonance (Will x Sonic)",
    "type": "keystone",
    "category": "minions_totems",
    "description": "Summon wailing banshees whose sonic waves weaken enemy resistances. Drawback: Banshees are fragile and fade faster in melee.",
    "x": 2844,
    "y": -1749,
    "icon": "AudioLines",
    "stats": [
      {
        "statKey": "willpower",
        "value": 25,
        "displayText": "+25 to Willpower"
      },
      {
        "statKey": "increasedSonicDamage",
        "value": 30,
        "displayText": "+30% Sonic Damage"
      },
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.35,
        "displayText": "+35% Minion Damage"
      }
    ],
    "keystoneFlag": "bansheeResonance",
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_broodmother",
      "keystone_phantom_veil",
      "will_banshee_path_n14"
    ]
  },
  "will_hemo_infernal_n1": {
    "id": "will_hemo_infernal_n1",
    "name": "Infernal Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2755,
    "y": -620,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_hemomancy",
      "will_hemo_infernal_n2"
    ]
  },
  "will_hemo_infernal_n2": {
    "id": "will_hemo_infernal_n2",
    "name": "Fire Minion 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -2786,
    "y": -691,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedMinionDamage",
        "value": 8,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n1",
      "will_hemo_infernal_n3"
    ]
  },
  "will_hemo_infernal_n3": {
    "id": "will_hemo_infernal_n3",
    "name": "Burning Convocation 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -2719,
    "y": -731,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n2",
      "will_hemo_infernal_n4"
    ]
  },
  "will_hemo_infernal_n4": {
    "id": "will_hemo_infernal_n4",
    "name": "Infernal Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2618,
    "y": -702,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n3",
      "will_hemo_infernal_n5"
    ]
  },
  "will_hemo_infernal_n5": {
    "id": "will_hemo_infernal_n5",
    "name": "Fire Minion 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -2671,
    "y": -793,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedMinionDamage",
        "value": 8,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n4",
      "will_hemo_infernal_n6"
    ]
  },
  "will_hemo_infernal_n6": {
    "id": "will_hemo_infernal_n6",
    "name": "Burning Convocation 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -2601,
    "y": -829,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n5",
      "will_hemo_infernal_n7"
    ]
  },
  "will_hemo_infernal_n7": {
    "id": "will_hemo_infernal_n7",
    "name": "Infernal Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2626,
    "y": -904,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n6",
      "will_hemo_infernal_n8"
    ]
  },
  "will_hemo_infernal_n8": {
    "id": "will_hemo_infernal_n8",
    "name": "Fire Minion Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -2521,
    "y": -914,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedMinionDamage",
        "value": 16,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n7",
      "will_hemo_infernal_n9"
    ]
  },
  "will_hemo_infernal_n9": {
    "id": "will_hemo_infernal_n9",
    "name": "Burning Convocation 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -2613,
    "y": -993,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n10",
      "will_hemo_infernal_n8"
    ]
  },
  "will_hemo_infernal_n10": {
    "id": "will_hemo_infernal_n10",
    "name": "Infernal Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2539,
    "y": -1017,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n11",
      "will_hemo_infernal_n9"
    ]
  },
  "will_hemo_infernal_n11": {
    "id": "will_hemo_infernal_n11",
    "name": "Fire Minion 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -2469,
    "y": -1051,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedMinionDamage",
        "value": 8,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n10",
      "will_hemo_infernal_n12"
    ]
  },
  "will_hemo_infernal_n12": {
    "id": "will_hemo_infernal_n12",
    "name": "Burning Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -2538,
    "y": -1148,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 16,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n11",
      "will_hemo_infernal_n13"
    ]
  },
  "will_hemo_infernal_n13": {
    "id": "will_hemo_infernal_n13",
    "name": "Infernal Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2370,
    "y": -1052,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n12",
      "will_hemo_infernal_n14"
    ]
  },
  "will_hemo_infernal_n14": {
    "id": "will_hemo_infernal_n14",
    "name": "Fire Minion 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -2434,
    "y": -1137,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedMinionDamage",
        "value": 8,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n13",
      "will_hemo_infernal_n15"
    ]
  },
  "will_hemo_infernal_n15": {
    "id": "will_hemo_infernal_n15",
    "name": "Burning Convocation 15",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Fire Damage.",
    "x": -2356,
    "y": -1129,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedFireDamage",
        "value": 8,
        "displayText": "+8% Fire Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_hemo_infernal_n14",
      "will_hemo_infernal_n16"
    ]
  },
  "will_hemo_infernal_n16": {
    "id": "will_hemo_infernal_n16",
    "name": "Infernal Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2340,
    "y": -1233,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_infernal_legion_vanguard",
      "will_hemo_infernal_n15"
    ]
  },
  "will_frost_path_n1": {
    "id": "will_frost_path_n1",
    "name": "Phantom Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2511,
    "y": -82,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_golem_titan_garrison",
      "will_frost_path_n2"
    ]
  },
  "will_frost_path_n2": {
    "id": "will_frost_path_n2",
    "name": "Frost Minion 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Life.",
    "x": -2445,
    "y": -129,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n1",
      "will_frost_path_n3"
    ]
  },
  "will_frost_path_n3": {
    "id": "will_frost_path_n3",
    "name": "Chill Convocation 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -2407,
    "y": -251,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n2",
      "will_frost_path_n4"
    ]
  },
  "will_frost_path_n4": {
    "id": "will_frost_path_n4",
    "name": "Phantom Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2377,
    "y": -351,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n3",
      "will_frost_path_n5"
    ]
  },
  "will_frost_path_n5": {
    "id": "will_frost_path_n5",
    "name": "Frost Minion 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Life.",
    "x": -2279,
    "y": -390,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n4",
      "will_frost_path_n6"
    ]
  },
  "will_frost_path_n6": {
    "id": "will_frost_path_n6",
    "name": "Chill Convocation 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -2209,
    "y": -424,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n5",
      "will_frost_path_n7"
    ]
  },
  "will_frost_path_n7": {
    "id": "will_frost_path_n7",
    "name": "Phantom Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2163,
    "y": -584,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n6",
      "will_frost_path_n8"
    ]
  },
  "will_frost_path_n8": {
    "id": "will_frost_path_n8",
    "name": "Frost Minion Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Life.",
    "x": -2131,
    "y": -685,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.2,
        "displayText": "+10% Minion Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n7",
      "will_frost_path_n9"
    ]
  },
  "will_frost_path_n9": {
    "id": "will_frost_path_n9",
    "name": "Chill Convocation 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -2104,
    "y": -786,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n10",
      "will_frost_path_n8"
    ]
  },
  "will_frost_path_n10": {
    "id": "will_frost_path_n10",
    "name": "Phantom Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -2001,
    "y": -867,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n11",
      "will_frost_path_n9"
    ]
  },
  "will_frost_path_n11": {
    "id": "will_frost_path_n11",
    "name": "Frost Minion 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Life.",
    "x": -1914,
    "y": -875,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n10",
      "will_frost_path_n12"
    ]
  },
  "will_frost_path_n12": {
    "id": "will_frost_path_n12",
    "name": "Chill Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -1978,
    "y": -969,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 16,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n11",
      "will_frost_path_n13"
    ]
  },
  "will_frost_path_n13": {
    "id": "will_frost_path_n13",
    "name": "Phantom Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -1991,
    "y": -1250,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n12",
      "will_frost_path_n14"
    ]
  },
  "will_frost_path_n14": {
    "id": "will_frost_path_n14",
    "name": "Frost Minion 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Life.",
    "x": -1729,
    "y": -1256,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionHealthMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n13",
      "will_frost_path_n15"
    ]
  },
  "will_frost_path_n15": {
    "id": "will_frost_path_n15",
    "name": "Chill Convocation 15",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Cold Damage.",
    "x": -1666,
    "y": -1201,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedColdDamage",
        "value": 8,
        "displayText": "+8% Cold Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_frost_path_n14",
      "will_frost_path_n16"
    ]
  },
  "will_frost_path_n16": {
    "id": "will_frost_path_n16",
    "name": "Phantom Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -1606,
    "y": -1287,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_frostbound_phantoms",
      "will_frost_path_n15"
    ]
  },
  "will_storm_path_n1": {
    "id": "will_storm_path_n1",
    "name": "Storm Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -911,
    "y": -487,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_entropic_titan",
      "will_storm_path_n2"
    ]
  },
  "will_storm_path_n2": {
    "id": "will_storm_path_n2",
    "name": "Shock Convocation 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -929,
    "y": -562,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n1",
      "will_storm_path_n3"
    ]
  },
  "will_storm_path_n3": {
    "id": "will_storm_path_n3",
    "name": "Minion Surge 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -889,
    "y": -629,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.08,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n2",
      "will_storm_path_n4"
    ]
  },
  "will_storm_path_n4": {
    "id": "will_storm_path_n4",
    "name": "Storm Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -1053,
    "y": -696,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n3",
      "will_storm_path_n5"
    ]
  },
  "will_storm_path_n5": {
    "id": "will_storm_path_n5",
    "name": "Shock Convocation 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -979,
    "y": -622,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n4",
      "will_storm_path_n6"
    ]
  },
  "will_storm_path_n6": {
    "id": "will_storm_path_n6",
    "name": "Minion Surge 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -946,
    "y": -692,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.08,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n5",
      "will_storm_path_n7"
    ]
  },
  "will_storm_path_n7": {
    "id": "will_storm_path_n7",
    "name": "Storm Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -1010,
    "y": -834,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n6",
      "will_storm_path_n8"
    ]
  },
  "will_storm_path_n8": {
    "id": "will_storm_path_n8",
    "name": "Shock Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -897,
    "y": -836,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 16,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n7",
      "will_storm_path_n9"
    ]
  },
  "will_storm_path_n9": {
    "id": "will_storm_path_n9",
    "name": "Minion Surge 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -1178,
    "y": -960,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.08,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n10",
      "will_storm_path_n8"
    ]
  },
  "will_storm_path_n10": {
    "id": "will_storm_path_n10",
    "name": "Storm Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -963,
    "y": -1268,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n11",
      "will_storm_path_n9"
    ]
  },
  "will_storm_path_n11": {
    "id": "will_storm_path_n11",
    "name": "Shock Convocation 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -827,
    "y": -1105,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n10",
      "will_storm_path_n12"
    ]
  },
  "will_storm_path_n12": {
    "id": "will_storm_path_n12",
    "name": "Minion Surge Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -882,
    "y": -1201,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.16,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n11",
      "will_storm_path_n13"
    ]
  },
  "will_storm_path_n13": {
    "id": "will_storm_path_n13",
    "name": "Storm Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -856,
    "y": -1302,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n12",
      "will_storm_path_n14"
    ]
  },
  "will_storm_path_n14": {
    "id": "will_storm_path_n14",
    "name": "Shock Convocation 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Lightning Damage.",
    "x": -789,
    "y": -1261,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedLightningDamage",
        "value": 8,
        "displayText": "+8% Lightning Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n13",
      "will_storm_path_n15"
    ]
  },
  "will_storm_path_n15": {
    "id": "will_storm_path_n15",
    "name": "Minion Surge 15",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Minion Damage.",
    "x": -866,
    "y": -1380,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.08,
        "displayText": "+8% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_storm_path_n14",
      "will_storm_path_n16"
    ]
  },
  "will_storm_path_n16": {
    "id": "will_storm_path_n16",
    "name": "Storm Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -829,
    "y": -1478,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_storm_elemental_conduit",
      "will_storm_path_n15"
    ]
  },
  "will_abyss_path_n1": {
    "id": "will_abyss_path_n1",
    "name": "Hive Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -227,
    "y": -709,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_plaguebringer_sceptre",
      "will_abyss_path_n2"
    ]
  },
  "will_abyss_path_n2": {
    "id": "will_abyss_path_n2",
    "name": "Chaos Convocation 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -230,
    "y": -786,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n1",
      "will_abyss_path_n3"
    ]
  },
  "will_abyss_path_n3": {
    "id": "will_abyss_path_n3",
    "name": "Swarm Speed 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Speed.",
    "x": -152,
    "y": -775,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionSpeedMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n2",
      "will_abyss_path_n4"
    ]
  },
  "will_abyss_path_n4": {
    "id": "will_abyss_path_n4",
    "name": "Hive Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -189,
    "y": -882,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n3",
      "will_abyss_path_n5"
    ]
  },
  "will_abyss_path_n5": {
    "id": "will_abyss_path_n5",
    "name": "Chaos Convocation 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -84,
    "y": -870,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n4",
      "will_abyss_path_n6"
    ]
  },
  "will_abyss_path_n6": {
    "id": "will_abyss_path_n6",
    "name": "Swarm Speed 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Speed.",
    "x": -110,
    "y": -951,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionSpeedMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n5",
      "will_abyss_path_n7"
    ]
  },
  "will_abyss_path_n7": {
    "id": "will_abyss_path_n7",
    "name": "Hive Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -155,
    "y": -1214,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n6",
      "will_abyss_path_n8"
    ]
  },
  "will_abyss_path_n8": {
    "id": "will_abyss_path_n8",
    "name": "Chaos Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -92,
    "y": -1130,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 16,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n7",
      "will_abyss_path_n9"
    ]
  },
  "will_abyss_path_n9": {
    "id": "will_abyss_path_n9",
    "name": "Swarm Speed 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Speed.",
    "x": -232,
    "y": -1244,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionSpeedMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n10",
      "will_abyss_path_n8"
    ]
  },
  "will_abyss_path_n10": {
    "id": "will_abyss_path_n10",
    "name": "Hive Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -174,
    "y": -1296,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n11",
      "will_abyss_path_n9"
    ]
  },
  "will_abyss_path_n11": {
    "id": "will_abyss_path_n11",
    "name": "Chaos Convocation 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -101,
    "y": -1271,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n10",
      "will_abyss_path_n12"
    ]
  },
  "will_abyss_path_n12": {
    "id": "will_abyss_path_n12",
    "name": "Swarm Speed Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Speed.",
    "x": -267,
    "y": -1423,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionSpeedMultiplier",
        "value": 0.2,
        "displayText": "+10% Minion Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n11",
      "will_abyss_path_n13"
    ]
  },
  "will_abyss_path_n13": {
    "id": "will_abyss_path_n13",
    "name": "Hive Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -175,
    "y": -1373,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n12",
      "will_abyss_path_n14"
    ]
  },
  "will_abyss_path_n14": {
    "id": "will_abyss_path_n14",
    "name": "Chaos Convocation 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Chaos Damage.",
    "x": -15,
    "y": -1461,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedChaosDamage",
        "value": 8,
        "displayText": "+8% Chaos Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n13",
      "will_abyss_path_n15"
    ]
  },
  "will_abyss_path_n15": {
    "id": "will_abyss_path_n15",
    "name": "Swarm Speed 15",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Speed.",
    "x": -94,
    "y": -1473,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionSpeedMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_abyss_path_n14",
      "will_abyss_path_n16"
    ]
  },
  "will_abyss_path_n16": {
    "id": "will_abyss_path_n16",
    "name": "Hive Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -42,
    "y": -1564,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_abyssal_hivemind",
      "will_abyss_path_n15"
    ]
  },
  "will_seraph_path_n1": {
    "id": "will_seraph_path_n1",
    "name": "Seraph Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 265,
    "y": -828,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_purifying_archon",
      "will_seraph_path_n2"
    ]
  },
  "will_seraph_path_n2": {
    "id": "will_seraph_path_n2",
    "name": "Holy Convocation 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 317,
    "y": -884,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n1",
      "will_seraph_path_n3"
    ]
  },
  "will_seraph_path_n3": {
    "id": "will_seraph_path_n3",
    "name": "Radiant Minion 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": 316,
    "y": -961,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n2",
      "will_seraph_path_n4"
    ]
  },
  "will_seraph_path_n4": {
    "id": "will_seraph_path_n4",
    "name": "Seraph Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 385,
    "y": -1123,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n3",
      "will_seraph_path_n5"
    ]
  },
  "will_seraph_path_n5": {
    "id": "will_seraph_path_n5",
    "name": "Holy Convocation 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 465,
    "y": -921,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n4",
      "will_seraph_path_n6"
    ]
  },
  "will_seraph_path_n6": {
    "id": "will_seraph_path_n6",
    "name": "Radiant Minion 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": 443,
    "y": -1008,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n5",
      "will_seraph_path_n7"
    ]
  },
  "will_seraph_path_n7": {
    "id": "will_seraph_path_n7",
    "name": "Seraph Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 415,
    "y": -1224,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n6",
      "will_seraph_path_n8"
    ]
  },
  "will_seraph_path_n8": {
    "id": "will_seraph_path_n8",
    "name": "Holy Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 571,
    "y": -1129,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 16,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n7",
      "will_seraph_path_n9"
    ]
  },
  "will_seraph_path_n9": {
    "id": "will_seraph_path_n9",
    "name": "Radiant Minion 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": 664,
    "y": -1243,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n10",
      "will_seraph_path_n8"
    ]
  },
  "will_seraph_path_n10": {
    "id": "will_seraph_path_n10",
    "name": "Seraph Will 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 556,
    "y": -1234,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n11",
      "will_seraph_path_n9"
    ]
  },
  "will_seraph_path_n11": {
    "id": "will_seraph_path_n11",
    "name": "Holy Convocation 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 605,
    "y": -1294,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n10",
      "will_seraph_path_n12"
    ]
  },
  "will_seraph_path_n12": {
    "id": "will_seraph_path_n12",
    "name": "Radiant Minion Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": 633,
    "y": -1395,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.2,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n11",
      "will_seraph_path_n13"
    ]
  },
  "will_seraph_path_n13": {
    "id": "will_seraph_path_n13",
    "name": "Seraph Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 698,
    "y": -1313,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n12",
      "will_seraph_path_n14"
    ]
  },
  "will_seraph_path_n14": {
    "id": "will_seraph_path_n14",
    "name": "Holy Convocation 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Holy Damage.",
    "x": 737,
    "y": -1408,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 8,
        "displayText": "+8% Holy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n13",
      "will_seraph_path_n15"
    ]
  },
  "will_seraph_path_n15": {
    "id": "will_seraph_path_n15",
    "name": "Radiant Minion 15",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +10% Minion Damage.",
    "x": 809,
    "y": -1380,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "minionDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Minion Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_seraph_path_n14",
      "will_seraph_path_n16"
    ]
  },
  "will_seraph_path_n16": {
    "id": "will_seraph_path_n16",
    "name": "Seraph Will Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 775,
    "y": -1506,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_seraph_host",
      "will_seraph_path_n15"
    ]
  },
  "will_aether_path_n1": {
    "id": "will_aether_path_n1",
    "name": "Aether Will 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 798,
    "y": -823,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_alchemical_catalyst",
      "will_aether_path_n2"
    ]
  },
  "will_aether_path_n2": {
    "id": "will_aether_path_n2",
    "name": "Shroud ES 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 806,
    "y": -901,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n1",
      "will_aether_path_n3"
    ]
  },
  "will_aether_path_n3": {
    "id": "will_aether_path_n3",
    "name": "Arcane Convocation 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 873,
    "y": -846,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n2",
      "will_aether_path_n4"
    ]
  },
  "will_aether_path_n4": {
    "id": "will_aether_path_n4",
    "name": "Aether Will Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 900,
    "y": -947,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n3",
      "will_aether_path_n5"
    ]
  },
  "will_aether_path_n5": {
    "id": "will_aether_path_n5",
    "name": "Shroud ES 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 995,
    "y": -903,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n4",
      "will_aether_path_n6"
    ]
  },
  "will_aether_path_n6": {
    "id": "will_aether_path_n6",
    "name": "Arcane Convocation 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 993,
    "y": -994,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n5",
      "will_aether_path_n7"
    ]
  },
  "will_aether_path_n7": {
    "id": "will_aether_path_n7",
    "name": "Aether Will 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 1071,
    "y": -988,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n6",
      "will_aether_path_n8"
    ]
  },
  "will_aether_path_n8": {
    "id": "will_aether_path_n8",
    "name": "Shroud ES Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 1092,
    "y": -1091,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n7",
      "will_aether_path_n9"
    ]
  },
  "will_aether_path_n9": {
    "id": "will_aether_path_n9",
    "name": "Arcane Convocation 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1219,
    "y": -1032,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n10",
      "will_aether_path_n8"
    ]
  },
  "will_aether_path_n10": {
    "id": "will_aether_path_n10",
    "name": "Aether Will 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 1195,
    "y": -1112,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n11",
      "will_aether_path_n9"
    ]
  },
  "will_aether_path_n11": {
    "id": "will_aether_path_n11",
    "name": "Shroud ES 11",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 1272,
    "y": -1090,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n10",
      "will_aether_path_n12"
    ]
  },
  "will_aether_path_n12": {
    "id": "will_aether_path_n12",
    "name": "Arcane Convocation Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1280,
    "y": -1194,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 16,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n11",
      "will_aether_path_n13"
    ]
  },
  "will_aether_path_n13": {
    "id": "will_aether_path_n13",
    "name": "Aether Will 13",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 1378,
    "y": -1231,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n12",
      "will_aether_path_n14"
    ]
  },
  "will_aether_path_n14": {
    "id": "will_aether_path_n14",
    "name": "Shroud ES 14",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 1355,
    "y": -1305,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n13",
      "will_aether_path_n15"
    ]
  },
  "will_aether_path_n15": {
    "id": "will_aether_path_n15",
    "name": "Arcane Convocation 15",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +8% Arcane Damage.",
    "x": 1453,
    "y": -1253,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedArcaneDamage",
        "value": 8,
        "displayText": "+8% Arcane Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_aether_path_n14",
      "will_aether_path_n16"
    ]
  },
  "will_aether_path_n16": {
    "id": "will_aether_path_n16",
    "name": "Aether Will Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 1446,
    "y": -1358,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_aether_shroud_nexus",
      "will_aether_path_n15"
    ]
  },
  "will_caustic_path_n1": {
    "id": "will_caustic_path_n1",
    "name": "Brood Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2733,
    "y": -1138,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_fortune",
      "will_caustic_path_n2"
    ]
  },
  "will_caustic_path_n2": {
    "id": "will_caustic_path_n2",
    "name": "Acid Convocation 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2612,
    "y": -1054,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n1",
      "will_caustic_path_n3"
    ]
  },
  "will_caustic_path_n3": {
    "id": "will_caustic_path_n3",
    "name": "Brood Will 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2658,
    "y": -1117,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n2",
      "will_caustic_path_n4"
    ]
  },
  "will_caustic_path_n4": {
    "id": "will_caustic_path_n4",
    "name": "Acid Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2640,
    "y": -1220,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 16,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n3",
      "will_caustic_path_n5"
    ]
  },
  "will_caustic_path_n5": {
    "id": "will_caustic_path_n5",
    "name": "Brood Will 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2582,
    "y": -1133,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n4",
      "will_caustic_path_n6"
    ]
  },
  "will_caustic_path_n6": {
    "id": "will_caustic_path_n6",
    "name": "Acid Convocation 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2550,
    "y": -1273,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n5",
      "will_caustic_path_n7"
    ]
  },
  "will_caustic_path_n7": {
    "id": "will_caustic_path_n7",
    "name": "Brood Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2523,
    "y": -1185,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n6",
      "will_caustic_path_n8"
    ]
  },
  "will_caustic_path_n8": {
    "id": "will_caustic_path_n8",
    "name": "Acid Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2244,
    "y": -1221,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 16,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n7",
      "will_caustic_path_n9"
    ]
  },
  "will_caustic_path_n9": {
    "id": "will_caustic_path_n9",
    "name": "Brood Will 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2476,
    "y": -1248,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n10",
      "will_caustic_path_n8"
    ]
  },
  "will_caustic_path_n10": {
    "id": "will_caustic_path_n10",
    "name": "Acid Convocation 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2315,
    "y": -1143,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n11",
      "will_caustic_path_n9"
    ]
  },
  "will_caustic_path_n11": {
    "id": "will_caustic_path_n11",
    "name": "Brood Will 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2410,
    "y": -1289,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n10",
      "will_caustic_path_n12"
    ]
  },
  "will_caustic_path_n12": {
    "id": "will_caustic_path_n12",
    "name": "Acid Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2396,
    "y": -1394,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 16,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n11",
      "will_caustic_path_n13"
    ]
  },
  "will_caustic_path_n13": {
    "id": "will_caustic_path_n13",
    "name": "Brood Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2350,
    "y": -1240,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_caustic_path_n12",
      "will_caustic_path_n14"
    ]
  },
  "will_caustic_path_n14": {
    "id": "will_caustic_path_n14",
    "name": "Acid Convocation 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Acid Damage.",
    "x": 2319,
    "y": -1311,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 8,
        "displayText": "+8% Acid Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_broodmother",
      "will_caustic_path_n13"
    ]
  },
  "will_banshee_path_n1": {
    "id": "will_banshee_path_n1",
    "name": "Wail Will 1",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3232,
    "y": -1246,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_cacophony_fortune",
      "will_banshee_path_n2"
    ]
  },
  "will_banshee_path_n2": {
    "id": "will_banshee_path_n2",
    "name": "Sonic Convocation 2",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3281,
    "y": -1099,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n1",
      "will_banshee_path_n3"
    ]
  },
  "will_banshee_path_n3": {
    "id": "will_banshee_path_n3",
    "name": "Wail Will 3",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3247,
    "y": -1169,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n2",
      "will_banshee_path_n4"
    ]
  },
  "will_banshee_path_n4": {
    "id": "will_banshee_path_n4",
    "name": "Sonic Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3142,
    "y": -1157,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n3",
      "will_banshee_path_n5"
    ]
  },
  "will_banshee_path_n5": {
    "id": "will_banshee_path_n5",
    "name": "Wail Will 5",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3162,
    "y": -1281,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n4",
      "will_banshee_path_n6"
    ]
  },
  "will_banshee_path_n6": {
    "id": "will_banshee_path_n6",
    "name": "Sonic Convocation 6",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 3092,
    "y": -1249,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n5",
      "will_banshee_path_n7"
    ]
  },
  "will_banshee_path_n7": {
    "id": "will_banshee_path_n7",
    "name": "Wail Will 7",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3099,
    "y": -1326,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n6",
      "will_banshee_path_n8"
    ]
  },
  "will_banshee_path_n8": {
    "id": "will_banshee_path_n8",
    "name": "Sonic Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2994,
    "y": -1287,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n7",
      "will_banshee_path_n9"
    ]
  },
  "will_banshee_path_n9": {
    "id": "will_banshee_path_n9",
    "name": "Wail Will 9",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3057,
    "y": -1392,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n10",
      "will_banshee_path_n8"
    ]
  },
  "will_banshee_path_n10": {
    "id": "will_banshee_path_n10",
    "name": "Sonic Convocation 10",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2979,
    "y": -1391,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n11",
      "will_banshee_path_n9"
    ]
  },
  "will_banshee_path_n11": {
    "id": "will_banshee_path_n11",
    "name": "Wail Will 11",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 3040,
    "y": -1469,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n10",
      "will_banshee_path_n12"
    ]
  },
  "will_banshee_path_n12": {
    "id": "will_banshee_path_n12",
    "name": "Sonic Convocation Notable",
    "type": "notable",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2799,
    "y": -1545,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 16,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n11",
      "will_banshee_path_n13"
    ]
  },
  "will_banshee_path_n13": {
    "id": "will_banshee_path_n13",
    "name": "Wail Will 13",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +5 to Willpower.",
    "x": 2962,
    "y": -1467,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "will_banshee_path_n12",
      "will_banshee_path_n14"
    ]
  },
  "will_banshee_path_n14": {
    "id": "will_banshee_path_n14",
    "name": "Sonic Convocation 14",
    "type": "small",
    "category": "minions_totems",
    "description": "Pathway node granting +8% Sonic Damage.",
    "x": 2886,
    "y": -1486,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedSonicDamage",
        "value": 8,
        "displayText": "+8% Sonic Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_banshee_resonance",
      "will_banshee_path_n13"
    ]
  },
  "keystone_glass_cannon": {
    "id": "keystone_glass_cannon",
    "name": "Aetheric Overload (Glass Cannon)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "Deal +50% MORE Damage with all attacks and spells. Drawback: You take +20% MORE damage from all sources.",
    "x": 88,
    "y": -549,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "moreDamageMultiplier",
        "value": 0.5,
        "displayText": "+50% More Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": "Unleash absolute devastation at the cost of your own frailty.",
    "clusterId": null,
    "connections": [
      "bridge_sky_3",
      "bridge_sky_4",
      "glass_voracious_n1",
      "keystone_harmonic_resonance",
      "keystone_prismatic_surge"
    ]
  },
  "keystone_voracious_feast": {
    "id": "keystone_voracious_feast",
    "name": "Voracious Feast (Instant Leech)",
    "type": "keystone",
    "category": "life_defense",
    "description": "Life Leech applies instantly. Drawback: Natural Life Regeneration is reduced to 0.",
    "x": -711,
    "y": -807,
    "icon": "HeartPulse",
    "stats": [
      {
        "statKey": "lifeLeechPercent",
        "value": 3.0,
        "displayText": "+3.0% Instant Leech"
      }
    ],
    "keystoneFlag": "voraciousFeast",
    "flavor": "Consume the lifeblood of your enemies as immediate sustenance.",
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n1",
      "glass_voracious_n8"
    ]
  },
  "keystone_null_soul_form": {
    "id": "keystone_null_soul_form",
    "name": "Null-Soul Form (Energy Shield Sovereign)",
    "type": "keystone",
    "category": "energy_shield",
    "description": "Maximum Life becomes 1. Grants +60% Energy Shield and +40% Chaos Resistance (never grants immunity). Drawback: Cannot recover Life via flasks or regeneration.",
    "x": -657,
    "y": -1398,
    "icon": "ShieldCheck",
    "stats": [
      {
        "statKey": "chaosResistance",
        "value": 40,
        "displayText": "+40% Chaos Resistance"
      },
      {
        "statKey": "maxEnergyShield",
        "value": 150,
        "displayText": "+150 Maximum Energy Shield"
      }
    ],
    "keystoneFlag": "nullSoulForm",
    "flavor": "Discard the mortal husk; pure astral spirit cannot bleed.",
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n12",
      "keystone_infernal_legion_vanguard",
      "null_unyielding_n1"
    ]
  },
  "keystone_unyielding_resolve": {
    "id": "keystone_unyielding_resolve",
    "name": "Unyielding Resolve (100% Accuracy)",
    "type": "keystone",
    "category": "physical_melee",
    "description": "Your hits cannot be evaded by enemies. Drawback: You can NEVER deal Critical Strikes.",
    "x": -372,
    "y": -2020,
    "icon": "Crosshair",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 35,
        "displayText": "+35% Global Damage"
      }
    ],
    "keystoneFlag": "unyieldingResolve",
    "flavor": "No need for lucky strikes when every blow lands with absolute certainty.",
    "clusterId": null,
    "connections": [
      "notable_world_tree_summit",
      "null_unyielding_n12"
    ]
  },
  "notable_world_tree_summit": {
    "id": "notable_world_tree_summit",
    "name": "Summit of the World Tree",
    "type": "notable",
    "category": "keystone_special",
    "description": "The highest pinnacle of Astris, overlooking the entire cosmos.",
    "x": 241,
    "y": -2044,
    "icon": "Zap",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 35,
        "displayText": "+35% Global Damage"
      },
      {
        "statKey": "maxEnergyShield",
        "value": 100,
        "displayText": "+100 Energy Shield"
      },
      {
        "statKey": "maxLife",
        "value": 100,
        "displayText": "+100 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n1",
      "bridge_sky_5",
      "harmony_summit_n14",
      "keystone_unyielding_resolve"
    ]
  },
  "keystone_monolithic_focus_apex": {
    "id": "keystone_monolithic_focus_apex",
    "name": "Monolithic Focus (Apex Pinnacle)",
    "type": "keystone",
    "category": "keystone_special",
    "description": "If ANY single attribute reaches 50+, gain +40% MORE Damage with that scaling type. Drawback: Other scaling types deal 20% less damage.",
    "x": 0,
    "y": -2250,
    "icon": "Crown",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 35,
        "displayText": "+35% Global Damage"
      }
    ],
    "keystoneFlag": "monolithicFocus",
    "flavor": "At the cosmic summit, absolute dedication conquers all.",
    "clusterId": null,
    "connections": [
      "apex_ladder_n16"
    ]
  },
  "glass_voracious_n1": {
    "id": "glass_voracious_n1",
    "name": "Leech Vigor 1",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -168,
    "y": -480,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n2",
      "keystone_glass_cannon"
    ]
  },
  "glass_voracious_n2": {
    "id": "glass_voracious_n2",
    "name": "Instant Sip 2",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +0.5% Leech.",
    "x": -91,
    "y": -610,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeLeechPercent",
        "value": 0.5,
        "displayText": "+0.5% Leech"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n1",
      "glass_voracious_n3"
    ]
  },
  "glass_voracious_n3": {
    "id": "glass_voracious_n3",
    "name": "Leech Vigor 3",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -114,
    "y": -536,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n2",
      "glass_voracious_n4"
    ]
  },
  "glass_voracious_n4": {
    "id": "glass_voracious_n4",
    "name": "Instant Sip Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +0.5% Leech.",
    "x": -194,
    "y": -602,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "lifeLeechPercent",
        "value": 1.0,
        "displayText": "+0.5% Leech"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n3",
      "glass_voracious_n5"
    ]
  },
  "glass_voracious_n5": {
    "id": "glass_voracious_n5",
    "name": "Leech Vigor 5",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -284,
    "y": -656,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n4",
      "glass_voracious_n6"
    ]
  },
  "glass_voracious_n6": {
    "id": "glass_voracious_n6",
    "name": "Instant Sip 6",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +0.5% Leech.",
    "x": -292,
    "y": -567,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "lifeLeechPercent",
        "value": 0.5,
        "displayText": "+0.5% Leech"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n5",
      "glass_voracious_n7"
    ]
  },
  "glass_voracious_n7": {
    "id": "glass_voracious_n7",
    "name": "Leech Vigor 7",
    "type": "small",
    "category": "life_defense",
    "description": "Pathway node granting +4 to Vigor.",
    "x": -301,
    "y": -460,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "vigor",
        "value": 4,
        "displayText": "+4 to Vigor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n6",
      "glass_voracious_n8"
    ]
  },
  "glass_voracious_n8": {
    "id": "glass_voracious_n8",
    "name": "Instant Sip Notable",
    "type": "notable",
    "category": "life_defense",
    "description": "Pathway node granting +0.5% Leech.",
    "x": -385,
    "y": -520,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "lifeLeechPercent",
        "value": 1.0,
        "displayText": "+0.5% Leech"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "glass_voracious_n7",
      "keystone_voracious_feast"
    ]
  },
  "canopy_null_soul_corridor_n1": {
    "id": "canopy_null_soul_corridor_n1",
    "name": "Spirit Ward 1",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -560,
    "y": -539,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n2",
      "keystone_voracious_feast"
    ]
  },
  "canopy_null_soul_corridor_n2": {
    "id": "canopy_null_soul_corridor_n2",
    "name": "Intelligence Mana 2",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Intelligence.",
    "x": -468,
    "y": -580,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "intelligence",
        "value": 5,
        "displayText": "+5 to Intelligence"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n1",
      "canopy_null_soul_corridor_n3"
    ]
  },
  "canopy_null_soul_corridor_n3": {
    "id": "canopy_null_soul_corridor_n3",
    "name": "Pure Shield 3",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": -538,
    "y": -612,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n2",
      "canopy_null_soul_corridor_n4"
    ]
  },
  "canopy_null_soul_corridor_n4": {
    "id": "canopy_null_soul_corridor_n4",
    "name": "Spirit Ward Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -524,
    "y": -773,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 10,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n3",
      "canopy_null_soul_corridor_n5"
    ]
  },
  "canopy_null_soul_corridor_n5": {
    "id": "canopy_null_soul_corridor_n5",
    "name": "Intelligence Mana 5",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Intelligence.",
    "x": -492,
    "y": -674,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "intelligence",
        "value": 5,
        "displayText": "+5 to Intelligence"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n4",
      "canopy_null_soul_corridor_n6"
    ]
  },
  "canopy_null_soul_corridor_n6": {
    "id": "canopy_null_soul_corridor_n6",
    "name": "Pure Shield 6",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": -569,
    "y": -681,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n5",
      "canopy_null_soul_corridor_n7"
    ]
  },
  "canopy_null_soul_corridor_n7": {
    "id": "canopy_null_soul_corridor_n7",
    "name": "Spirit Ward 7",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -540,
    "y": -889,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n6",
      "canopy_null_soul_corridor_n8"
    ]
  },
  "canopy_null_soul_corridor_n8": {
    "id": "canopy_null_soul_corridor_n8",
    "name": "Intelligence Mana Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Intelligence.",
    "x": -408,
    "y": -942,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "intelligence",
        "value": 10,
        "displayText": "+5 to Intelligence"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n7",
      "canopy_null_soul_corridor_n9"
    ]
  },
  "canopy_null_soul_corridor_n9": {
    "id": "canopy_null_soul_corridor_n9",
    "name": "Pure Shield 9",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": -469,
    "y": -858,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 30,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n10",
      "canopy_null_soul_corridor_n8"
    ]
  },
  "canopy_null_soul_corridor_n10": {
    "id": "canopy_null_soul_corridor_n10",
    "name": "Spirit Ward 10",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Willpower.",
    "x": -604,
    "y": -1095,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 5,
        "displayText": "+5 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n11",
      "canopy_null_soul_corridor_n9"
    ]
  },
  "canopy_null_soul_corridor_n11": {
    "id": "canopy_null_soul_corridor_n11",
    "name": "Intelligence Mana 11",
    "type": "small",
    "category": "energy_shield",
    "description": "Pathway node granting +5 to Intelligence.",
    "x": -543,
    "y": -1046,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "intelligence",
        "value": 5,
        "displayText": "+5 to Intelligence"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n10",
      "canopy_null_soul_corridor_n12"
    ]
  },
  "canopy_null_soul_corridor_n12": {
    "id": "canopy_null_soul_corridor_n12",
    "name": "Pure Shield Notable",
    "type": "notable",
    "category": "energy_shield",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": -529,
    "y": -1168,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "canopy_null_soul_corridor_n11",
      "keystone_null_soul_form"
    ]
  },
  "harmony_summit_n1": {
    "id": "harmony_summit_n1",
    "name": "Summit Wisdom 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Wisdom.",
    "x": -42,
    "y": -1222,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 6,
        "displayText": "+6 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n2",
      "keystone_harmonic_resonance"
    ]
  },
  "harmony_summit_n2": {
    "id": "harmony_summit_n2",
    "name": "Summit Strength 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Strength.",
    "x": 23,
    "y": -1179,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 6,
        "displayText": "+6 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n1",
      "harmony_summit_n3"
    ]
  },
  "harmony_summit_n3": {
    "id": "harmony_summit_n3",
    "name": "Summit Life 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Maximum Life.",
    "x": 61,
    "y": -1247,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 30,
        "displayText": "+30 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n2",
      "harmony_summit_n4"
    ]
  },
  "harmony_summit_n4": {
    "id": "harmony_summit_n4",
    "name": "Summit Shield Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 161,
    "y": -1290,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n3",
      "harmony_summit_n5"
    ]
  },
  "harmony_summit_n5": {
    "id": "harmony_summit_n5",
    "name": "Summit Wisdom 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Wisdom.",
    "x": 31,
    "y": -1398,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 6,
        "displayText": "+6 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n4",
      "harmony_summit_n6"
    ]
  },
  "harmony_summit_n6": {
    "id": "harmony_summit_n6",
    "name": "Summit Strength 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Strength.",
    "x": 122,
    "y": -1386,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 6,
        "displayText": "+6 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n5",
      "harmony_summit_n7"
    ]
  },
  "harmony_summit_n7": {
    "id": "harmony_summit_n7",
    "name": "Summit Life 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Maximum Life.",
    "x": 85,
    "y": -1453,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 30,
        "displayText": "+30 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n6",
      "harmony_summit_n8"
    ]
  },
  "harmony_summit_n8": {
    "id": "harmony_summit_n8",
    "name": "Summit Shield Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 168,
    "y": -1518,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n7",
      "harmony_summit_n9"
    ]
  },
  "harmony_summit_n9": {
    "id": "harmony_summit_n9",
    "name": "Summit Wisdom 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Wisdom.",
    "x": 54,
    "y": -1523,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 6,
        "displayText": "+6 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n10",
      "harmony_summit_n8"
    ]
  },
  "harmony_summit_n10": {
    "id": "harmony_summit_n10",
    "name": "Summit Strength 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Strength.",
    "x": -45,
    "y": -1669,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 6,
        "displayText": "+6 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n11",
      "harmony_summit_n9"
    ]
  },
  "harmony_summit_n11": {
    "id": "harmony_summit_n11",
    "name": "Summit Life 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Maximum Life.",
    "x": 57,
    "y": -1600,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "maxLife",
        "value": 30,
        "displayText": "+30 Maximum Life"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n10",
      "harmony_summit_n12"
    ]
  },
  "harmony_summit_n12": {
    "id": "harmony_summit_n12",
    "name": "Summit Shield Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +30 Energy Shield.",
    "x": 76,
    "y": -1703,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+30 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n11",
      "harmony_summit_n13"
    ]
  },
  "harmony_summit_n13": {
    "id": "harmony_summit_n13",
    "name": "Summit Wisdom 13",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Wisdom.",
    "x": -92,
    "y": -1742,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "wisdom",
        "value": 6,
        "displayText": "+6 to Wisdom"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n12",
      "harmony_summit_n14"
    ]
  },
  "harmony_summit_n14": {
    "id": "harmony_summit_n14",
    "name": "Summit Strength 14",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Strength.",
    "x": 51,
    "y": -1804,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 6,
        "displayText": "+6 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "harmony_summit_n13",
      "notable_world_tree_summit"
    ]
  },
  "apex_ladder_n1": {
    "id": "apex_ladder_n1",
    "name": "Apex Power 1",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -21,
    "y": -1773,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 8,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n2",
      "notable_world_tree_summit"
    ]
  },
  "apex_ladder_n2": {
    "id": "apex_ladder_n2",
    "name": "Apex Will 2",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Willpower.",
    "x": 81,
    "y": -1876,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 6,
        "displayText": "+6 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n1",
      "apex_ladder_n3"
    ]
  },
  "apex_ladder_n3": {
    "id": "apex_ladder_n3",
    "name": "Apex Fortune 3",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Luck.",
    "x": -69,
    "y": -1834,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n2",
      "apex_ladder_n4"
    ]
  },
  "apex_ladder_n4": {
    "id": "apex_ladder_n4",
    "name": "Apex Power Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -174,
    "y": -1829,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 16,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n3",
      "apex_ladder_n5"
    ]
  },
  "apex_ladder_n5": {
    "id": "apex_ladder_n5",
    "name": "Apex Will 5",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Willpower.",
    "x": 2,
    "y": -1865,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 6,
        "displayText": "+6 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n4",
      "apex_ladder_n6"
    ]
  },
  "apex_ladder_n6": {
    "id": "apex_ladder_n6",
    "name": "Apex Fortune 6",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Luck.",
    "x": 146,
    "y": -1998,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n5",
      "apex_ladder_n7"
    ]
  },
  "apex_ladder_n7": {
    "id": "apex_ladder_n7",
    "name": "Apex Power 7",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -127,
    "y": -1923,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 8,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n6",
      "apex_ladder_n8"
    ]
  },
  "apex_ladder_n8": {
    "id": "apex_ladder_n8",
    "name": "Apex Will Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Willpower.",
    "x": 44,
    "y": -1974,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 12,
        "displayText": "+6 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n7",
      "apex_ladder_n9"
    ]
  },
  "apex_ladder_n9": {
    "id": "apex_ladder_n9",
    "name": "Apex Fortune 9",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Luck.",
    "x": -49,
    "y": -1924,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n10",
      "apex_ladder_n8"
    ]
  },
  "apex_ladder_n10": {
    "id": "apex_ladder_n10",
    "name": "Apex Power 10",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -64,
    "y": -2001,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 8,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n11",
      "apex_ladder_n9"
    ]
  },
  "apex_ladder_n11": {
    "id": "apex_ladder_n11",
    "name": "Apex Will 11",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Willpower.",
    "x": -89,
    "y": -2081,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 6,
        "displayText": "+6 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n10",
      "apex_ladder_n12"
    ]
  },
  "apex_ladder_n12": {
    "id": "apex_ladder_n12",
    "name": "Apex Fortune Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Luck.",
    "x": 187,
    "y": -2216,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "luck",
        "value": 12,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n11",
      "apex_ladder_n13"
    ]
  },
  "apex_ladder_n13": {
    "id": "apex_ladder_n13",
    "name": "Apex Power 13",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -154,
    "y": -2125,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 8,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n12",
      "apex_ladder_n14"
    ]
  },
  "apex_ladder_n14": {
    "id": "apex_ladder_n14",
    "name": "Apex Will 14",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Willpower.",
    "x": 125,
    "y": -2107,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 6,
        "displayText": "+6 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n13",
      "apex_ladder_n15"
    ]
  },
  "apex_ladder_n15": {
    "id": "apex_ladder_n15",
    "name": "Apex Fortune 15",
    "type": "small",
    "category": "keystone_special",
    "description": "Pathway node granting +6 to Luck.",
    "x": -14,
    "y": -2061,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "luck",
        "value": 6,
        "displayText": "+6 to Luck"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n14",
      "apex_ladder_n16"
    ]
  },
  "apex_ladder_n16": {
    "id": "apex_ladder_n16",
    "name": "Apex Power Notable",
    "type": "notable",
    "category": "keystone_special",
    "description": "Pathway node granting +8% Global Damage.",
    "x": -172,
    "y": -2017,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "increasedDamage",
        "value": 16,
        "displayText": "+8% Global Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "apex_ladder_n15",
      "keystone_monolithic_focus_apex"
    ]
  },
  "null_unyielding_n1": {
    "id": "null_unyielding_n1",
    "name": "Certain Might 1",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Strength.",
    "x": -419,
    "y": -1172,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_null_soul_form",
      "null_unyielding_n2"
    ]
  },
  "null_unyielding_n2": {
    "id": "null_unyielding_n2",
    "name": "Crushing Blow 2",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -441,
    "y": -1247,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n1",
      "null_unyielding_n3"
    ]
  },
  "null_unyielding_n3": {
    "id": "null_unyielding_n3",
    "name": "Solid Guard 3",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +30 Armor.",
    "x": -516,
    "y": -1271,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n2",
      "null_unyielding_n4"
    ]
  },
  "null_unyielding_n4": {
    "id": "null_unyielding_n4",
    "name": "Certain Might Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Strength.",
    "x": -464,
    "y": -1362,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "strength",
        "value": 10,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n3",
      "null_unyielding_n5"
    ]
  },
  "null_unyielding_n5": {
    "id": "null_unyielding_n5",
    "name": "Crushing Blow 5",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -370,
    "y": -1409,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n4",
      "null_unyielding_n6"
    ]
  },
  "null_unyielding_n6": {
    "id": "null_unyielding_n6",
    "name": "Solid Guard 6",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +30 Armor.",
    "x": -480,
    "y": -1466,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n5",
      "null_unyielding_n7"
    ]
  },
  "null_unyielding_n7": {
    "id": "null_unyielding_n7",
    "name": "Certain Might 7",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Strength.",
    "x": -513,
    "y": -1536,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n6",
      "null_unyielding_n8"
    ]
  },
  "null_unyielding_n8": {
    "id": "null_unyielding_n8",
    "name": "Crushing Blow Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -404,
    "y": -1539,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.1,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n7",
      "null_unyielding_n9"
    ]
  },
  "null_unyielding_n9": {
    "id": "null_unyielding_n9",
    "name": "Solid Guard 9",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +30 Armor.",
    "x": -483,
    "y": -1608,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 30,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n10",
      "null_unyielding_n8"
    ]
  },
  "null_unyielding_n10": {
    "id": "null_unyielding_n10",
    "name": "Certain Might 10",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5 to Strength.",
    "x": -413,
    "y": -1643,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "strength",
        "value": 5,
        "displayText": "+5 to Strength"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n11",
      "null_unyielding_n9"
    ]
  },
  "null_unyielding_n11": {
    "id": "null_unyielding_n11",
    "name": "Crushing Blow 11",
    "type": "small",
    "category": "physical_melee",
    "description": "Pathway node granting +5% Heavy Damage.",
    "x": -436,
    "y": -1718,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.05,
        "displayText": "+5% Heavy Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "null_unyielding_n10",
      "null_unyielding_n12"
    ]
  },
  "null_unyielding_n12": {
    "id": "null_unyielding_n12",
    "name": "Solid Guard Notable",
    "type": "notable",
    "category": "physical_melee",
    "description": "Pathway node granting +30 Armor.",
    "x": -340,
    "y": -1760,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "armor",
        "value": 60,
        "displayText": "+30 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_unyielding_resolve",
      "null_unyielding_n11"
    ]
  },
  "keystone_prismatic_ward": {
    "id": "keystone_prismatic_ward",
    "name": "Prismatic Ward (Balanced Resistances)",
    "type": "keystone",
    "category": "life_defense",
    "description": "All elemental resistances are averaged together: if Fire/Cold/Lightning are within 15% of each other, gain +20% all elemental damage and +10% damage reduction. Drawback: Single elemental resistance cannot exceed 75% via this node alone.",
    "x": -1441,
    "y": 29,
    "icon": "ShieldCheck",
    "stats": [
      {
        "statKey": "fireResistance",
        "value": 12,
        "displayText": "+12% Fire Resist"
      },
      {
        "statKey": "coldResistance",
        "value": 12,
        "displayText": "+12% Cold Resist"
      },
      {
        "statKey": "lightningResistance",
        "value": 12,
        "displayText": "+12% Lightning Resist"
      }
    ],
    "keystoneFlag": null,
    "flavor": "A prism does not favor a single hue\u2014it unites the spectrum.",
    "clusterId": null,
    "connections": [
      "keystone_glacial_sovereign",
      "keystone_stormforged_anvil",
      "keystone_volcanic_juggernaut"
    ]
  },
  "keystone_evasion_arcane": {
    "id": "keystone_evasion_arcane",
    "name": "Aether Bastion (Str x Arcane)",
    "type": "keystone",
    "category": "spell_magic",
    "description": "Strength grants increased Arcane damage based on your armor total, and heavy armor grants spell damage. Drawback: Evasion is reduced by 30%.",
    "x": -2612,
    "y": -391,
    "icon": "ShieldPlus",
    "stats": [
      {
        "statKey": "strength",
        "value": 18,
        "displayText": "+18 to Strength"
      },
      {
        "statKey": "increasedArcaneDamage",
        "value": 35,
        "displayText": "+35% Arcane Damage"
      }
    ],
    "keystoneFlag": "aetherBastion",
    "flavor": "Arcane force sealed in plates of the cosmos.",
    "clusterId": null,
    "connections": []
  },
  "bastion_conduit_n1": {
    "id": "bastion_conduit_n1",
    "name": "Arcane Plating 1",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +25 Armor.",
    "x": -2542,
    "y": -10,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n2",
      "keystone_golem_titan_garrison"
    ]
  },
  "bastion_conduit_n2": {
    "id": "bastion_conduit_n2",
    "name": "Aether Bind 2",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -2649,
    "y": -7,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 4,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n1",
      "bastion_conduit_n3"
    ]
  },
  "bastion_conduit_n3": {
    "id": "bastion_conduit_n3",
    "name": "Arcane Plating 3",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +25 Armor.",
    "x": -2597,
    "y": -65,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n2",
      "bastion_conduit_n4"
    ]
  },
  "bastion_conduit_n4": {
    "id": "bastion_conduit_n4",
    "name": "Aether Bind Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -2775,
    "y": -156,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 8,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n3",
      "bastion_conduit_n5"
    ]
  },
  "bastion_conduit_n5": {
    "id": "bastion_conduit_n5",
    "name": "Arcane Plating 5",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +25 Armor.",
    "x": -2564,
    "y": -139,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n4",
      "bastion_conduit_n6"
    ]
  },
  "bastion_conduit_n6": {
    "id": "bastion_conduit_n6",
    "name": "Aether Bind 6",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -2688,
    "y": -214,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 4,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n5",
      "bastion_conduit_n7"
    ]
  },
  "bastion_conduit_n7": {
    "id": "bastion_conduit_n7",
    "name": "Arcane Plating 7",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +25 Armor.",
    "x": -2700,
    "y": -79,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n6",
      "bastion_conduit_n8"
    ]
  },
  "bastion_conduit_n8": {
    "id": "bastion_conduit_n8",
    "name": "Aether Bind Notable",
    "type": "notable",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -2509,
    "y": -229,
    "icon": "Shield",
    "stats": [
      {
        "statKey": "willpower",
        "value": 8,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n7",
      "bastion_conduit_n9"
    ]
  },
  "bastion_conduit_n9": {
    "id": "bastion_conduit_n9",
    "name": "Arcane Plating 9",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +25 Armor.",
    "x": -2641,
    "y": -130,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "armor",
        "value": 25,
        "displayText": "+25 Armor"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n10",
      "bastion_conduit_n8"
    ]
  },
  "bastion_conduit_n10": {
    "id": "bastion_conduit_n10",
    "name": "Aether Bind 10",
    "type": "small",
    "category": "spell_magic",
    "description": "Pathway node granting +4 to Willpower.",
    "x": -2611,
    "y": -202,
    "icon": "Sparkles",
    "stats": [
      {
        "statKey": "willpower",
        "value": 4,
        "displayText": "+4 to Willpower"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "bastion_conduit_n9"
    ]
  },
  "bridge_sky_1": {
    "id": "bridge_sky_1",
    "name": "Sky Bridge I: Heavy & Light Synthesis",
    "type": "notable",
    "category": "keystone_special",
    "description": "Sky Bridge I: Heavy & Light Synthesis",
    "x": -192,
    "y": 381,
    "icon": "Share2",
    "stats": [
      {
        "statKey": "strength",
        "value": 8,
        "displayText": "+8 to Strength"
      },
      {
        "statKey": "dexterity",
        "value": 8,
        "displayText": "+8 to Dexterity"
      },
      {
        "statKey": "movementSpeed",
        "value": 15,
        "displayText": "+15 Movement Speed"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_blade_flurry_tempest",
      "keystone_colossus_earthbreaker"
    ]
  },
  "bridge_sky_2": {
    "id": "bridge_sky_2",
    "name": "Sky Bridge II: Martial Synthesis",
    "type": "notable",
    "category": "keystone_special",
    "description": "Sky Bridge II: Martial Synthesis",
    "x": 19,
    "y": -84,
    "icon": "Share2",
    "stats": [
      {
        "statKey": "attackSpeedMultiplier",
        "value": 0.1,
        "displayText": "+10% Attack Speed"
      },
      {
        "statKey": "heavyDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Heavy Damage"
      },
      {
        "statKey": "lightDamageMultiplier",
        "value": 0.1,
        "displayText": "+10% Light Damage"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_dual_wield_dervish",
      "keystone_prismatic_surge",
      "keystone_two_handed_colossus"
    ]
  },
  "bridge_sky_3": {
    "id": "bridge_sky_3",
    "name": "Sky Bridge III: Solar Consecration",
    "type": "notable",
    "category": "keystone_special",
    "description": "Sky Bridge III: Solar Consecration",
    "x": -41,
    "y": -266,
    "icon": "Share2",
    "stats": [
      {
        "statKey": "increasedHolyDamage",
        "value": 30,
        "displayText": "+30% Holy Damage"
      },
      {
        "statKey": "holyPenetration",
        "value": 10,
        "displayText": "+10% Holy Penetration"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_crusaders_purge",
      "keystone_glass_cannon",
      "keystone_solar_deadeye"
    ]
  },
  "bridge_sky_4": {
    "id": "bridge_sky_4",
    "name": "Sky Bridge IV: Acidic Dissolution",
    "type": "notable",
    "category": "keystone_special",
    "description": "Sky Bridge IV: Acidic Dissolution",
    "x": -45,
    "y": -704,
    "icon": "Share2",
    "stats": [
      {
        "statKey": "increasedAcidDamage",
        "value": 30,
        "displayText": "+30% Acid Damage"
      },
      {
        "statKey": "chanceToCorrode",
        "value": 20,
        "displayText": "+20% Corrode Chance"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_caustic_colossus",
      "keystone_corrosive_fangs",
      "keystone_glass_cannon"
    ]
  },
  "bridge_sky_5": {
    "id": "bridge_sky_5",
    "name": "Sky Bridge V: Outer Canopy Arc",
    "type": "notable",
    "category": "keystone_special",
    "description": "Sky Bridge V: Outer Canopy Arc",
    "x": -70,
    "y": -1371,
    "icon": "Share2",
    "stats": [
      {
        "statKey": "vigor",
        "value": 15,
        "displayText": "+15 to Vigor"
      },
      {
        "statKey": "luck",
        "value": 15,
        "displayText": "+15 to Luck"
      },
      {
        "statKey": "maxLife",
        "value": 60,
        "displayText": "+60 Life"
      },
      {
        "statKey": "maxEnergyShield",
        "value": 60,
        "displayText": "+60 Energy Shield"
      }
    ],
    "keystoneFlag": null,
    "flavor": null,
    "clusterId": null,
    "connections": [
      "keystone_fortunes_favor",
      "keystone_hemomancy",
      "notable_world_tree_summit"
    ]
  }
};

export const PASSIVE_TREE_DATA: PassiveTreeData = {
  nodes,
};
