import math
import json

nodes = {}
connections = {}

KESTONE_SPACING = 460      # minimum target spacing between keystones
NOTABLE_SPACING = 180      # minimum target spacing between notables
PATH_STEP_DIST = 86        # small node spacing along corridors (extra room)
MIN_NODE_DIST = 78.0       # enforced by physics relaxation
CORRIDOR_LEN_MAIN = 13     # corridor length between major trunk/crown keystones
CORRIDOR_LEN_BRANCH = 15   # corridor length between outer-branch keystones
CORRIDOR_LEN_TIP = 17      # corridor length between outermost leaf keystones


def add_node(nid, name, ntype, cat, x, y, desc, stats, icon='Sparkles', keystoneFlag=None, flavor=None, clusterId=None):
    if nid in nodes:
        raise ValueError(f"Duplicate node id: {nid}")
    nodes[nid] = {
        'id': nid,
        'name': name,
        'type': ntype,
        'category': cat,
        'description': desc,
        'x': int(round(x)),
        'y': int(round(y)),
        'icon': icon,
        'stats': stats,
        'keystoneFlag': keystoneFlag,
        'flavor': flavor,
        'clusterId': clusterId,
    }
    connections[nid] = set()


def connect(id1, id2):
    if id1 in nodes and id2 in nodes:
        connections[id1].add(id2)
        connections[id2].add(id1)


def add_corridor(prefix, start_id, end_id, count, start_x, start_y, end_x, end_y, cat, stat_templates, arc_offset=0, bridge=False):
    prev_id = start_id
    for i in range(1, count + 1):
        t = i / (count + 1)
        dx = end_x - start_x
        dy = end_y - start_y
        dist = math.hypot(dx, dy) or 1.0
        nx = -dy / dist
        ny = dx / dist
        arc = math.sin(t * math.pi) * arc_offset
        x = start_x + dx * t + nx * arc
        y = start_y + dy * t + ny * arc
        nid = f"{prefix}_n{i}"
        stat = stat_templates[(i - 1) % len(stat_templates)]
        is_notable = (i % 4 == 0) or (bridge and i in (count // 2,))
        node_type = 'notable' if is_notable else 'small'
        add_node(
            nid,
            f"{stat['name']} Notable" if is_notable else f"{stat['name']} {i}",
            node_type,
            cat,
            x, y,
            f"Pathway node granting {stat['displayText']}.",
            [{'statKey': stat['statKey'], 'value': stat['value'] * 2 if is_notable else stat['value'], 'displayText': stat['displayText']}],
            icon='Shield' if is_notable else 'Sparkles',
            clusterId=prefix if bridge else None,
        )
        connect(prev_id, nid)
        prev_id = nid
    connect(prev_id, end_id)


# ============================================================
# ROOT BASE
# ============================================================
add_node('node_center_hub', 'Nexus of Ascension (Tree Root Base)', 'origin_start', 'keystone_special', 0, 1000,
         'The primordial root of the World Tree. Grants foundational all-attribute vigor and omni-potential.',
         [
             {'statKey': 'increasedDamage', 'value': 15, 'displayText': '+15% Global Damage'},
             {'statKey': 'maxLife', 'value': 30, 'displayText': '+30 Maximum Life'},
             {'statKey': 'maxMana', 'value': 30, 'displayText': '+30 Maximum Mana'},
         ],
         icon='Zap', flavor='From the deepest earth, the World Tree draws life for all branches.')

# Root-tap omni-holy apex
add_node('keystone_omni_holy_radiance', 'Omni-Holy Radiance (Omni-Stat Holy)', 'keystone', 'keystone_special', 0, 1800,
         'Holy Damage increases by +2.5% per point in your LOWEST attribute. Drawback: Non-Holy elemental damages deal 20% less damage.',
         [
             {'statKey': 'increasedHolyDamage', 'value': 35, 'displayText': '+35% Holy Damage'},
             {'statKey': 'holyPenetration', 'value': 12, 'displayText': '+12% Holy Penetration'},
         ],
         icon='Sun', keystoneFlag='omnipotentHarmony', flavor='True radiance requires all seven virtues to shine in equal measure.')
add_corridor('root_omni', 'node_center_hub', 'keystone_omni_holy_radiance', 16, 0, 1000, 0, 1800, 'life_defense', [
    {'name': 'Root Vigor', 'statKey': 'vigor', 'value': 4, 'displayText': '+4 to Vigor'},
    {'name': 'Root Will', 'statKey': 'willpower', 'value': 4, 'displayText': '+4 to Willpower'},
    {'name': 'Root Wisdom', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Holy Essence', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
    {'name': 'Life Core', 'statKey': 'maxLife', 'value': 20, 'displayText': '+20 Maximum Life'},
])

add_node('keystone_sanguine_font', 'Sanguine Font (Root Vigor)', 'keystone', 'life_defense', -700, 1680,
         'Increases Maximum Life by +20% and Life Regen by +8 HP/s. Drawback: Maximum Mana is reduced by 30%.',
         [{'statKey': 'vigor', 'value': 20, 'displayText': '+20 to Vigor'}, {'statKey': 'maxLife', 'value': 100, 'displayText': '+100 Maximum Life'}],
         icon='Heart', flavor='Deep roots drink life directly from the primordial font.')
add_corridor('root_left', 'node_center_hub', 'keystone_sanguine_font', 14, 0, 1000, -700, 1680, 'life_defense', [
    {'name': 'Deep Vitality', 'statKey': 'vigor', 'value': 5, 'displayText': '+5 to Vigor'},
    {'name': 'Life Well', 'statKey': 'maxLife', 'value': 25, 'displayText': '+25 Maximum Life'},
    {'name': 'Regen Pulse', 'statKey': 'lifeRegen', 'value': 1.5, 'displayText': '+1.5 Life Regen/s'},
    {'name': 'Phys Ward', 'statKey': 'physicalAilmentResistance', 'value': 8, 'displayText': '+8% Phys Ailment Resist'},
], arc_offset=60)

add_node('keystone_aetheric_taproot', 'Aetheric Taproot (Root Willpower)', 'keystone', 'energy_shield', 700, 1680,
         'Energy Shield capacity is increased by +40% and restores +5% on enemy kill. Drawback: Armor is reduced by 25%.',
         [{'statKey': 'willpower', 'value': 20, 'displayText': '+20 to Willpower'}, {'statKey': 'maxEnergyShield', 'value': 80, 'displayText': '+80 Energy Shield'}],
         icon='Layers', flavor='The deep spiritual taproot draws endless cosmic energy.')
add_corridor('root_right', 'node_center_hub', 'keystone_aetheric_taproot', 14, 0, 1000, 700, 1680, 'energy_shield', [
    {'name': 'Deep Spirit', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Aether Shield', 'statKey': 'maxEnergyShield', 'value': 20, 'displayText': '+20 Energy Shield'},
    {'name': 'Recharge Flow', 'statKey': 'energyShieldRechargeRate', 'value': 3, 'displayText': '+3 ES Recharge/s'},
    {'name': 'Minion Ward', 'statKey': 'minionDamageMultiplier', 'value': 0.08, 'displayText': '+8% Minion Damage'},
], arc_offset=-60)

connect('keystone_sanguine_font', 'keystone_omni_holy_radiance')
connect('keystone_omni_holy_radiance', 'keystone_aetheric_taproot')

# ============================================================
# TRUNK
# ============================================================
add_node('keystone_mind_over_matter', 'Mind Over Matter (Mana Shield)', 'keystone', 'spell_magic', 0, 700,
         '30% of incoming Damage is taken from Mana before Life or Energy Shield. Drawback: Maximum Energy Shield is reduced by 50%.',
         [{'statKey': 'intelligence', 'value': 15, 'displayText': '+15 to Intelligence'}, {'statKey': 'maxMana', 'value': 80, 'displayText': '+80 Maximum Mana'}],
         icon='Shield', flavor='The sharpened mind shields the fragile flesh.')
add_corridor('trunk_low', 'node_center_hub', 'keystone_mind_over_matter', 12, 0, 1000, 0, 700, 'life_defense', [
    {'name': 'Armor Fiber', 'statKey': 'armor', 'value': 25, 'displayText': '+25 Armor'},
    {'name': 'Core Life', 'statKey': 'maxLife', 'value': 15, 'displayText': '+15 Maximum Life'},
    {'name': 'Stamina Wood', 'statKey': 'maxStamina', 'value': 10, 'displayText': '+10 Maximum Stamina'},
    {'name': 'Growth Power', 'statKey': 'increasedDamage', 'value': 5, 'displayText': '+5% Global Damage'},
])

add_node('keystone_omnipotent_harmony', 'Omnipotent Harmony (Balanced Stats)', 'keystone', 'keystone_special', -420, 480,
         'If all 7 attributes are within 10 points of each other, gain +35% MORE Damage, +150 Life, +100 Armor, and +100 Evasion. Drawback: If stats diverge, gain no bonus.',
         [{'statKey': 'increasedDamage', 'value': 20, 'displayText': '+20% Global Damage'}],
         icon='Zap', keystoneFlag='omnipotentHarmony', flavor='When all seven cosmic facets harmonize, the mortal reaches perfection.')
add_corridor('trunk_left_omni', 'keystone_mind_over_matter', 'keystone_omnipotent_harmony', 12, 0, 700, -420, 480, 'keystone_special', [
    {'name': 'Vigor Fiber', 'statKey': 'vigor', 'value': 3, 'displayText': '+3 to Vigor'},
    {'name': 'Might Fiber', 'statKey': 'strength', 'value': 3, 'displayText': '+3 to Strength'},
    {'name': 'Wisdom Fiber', 'statKey': 'wisdom', 'value': 3, 'displayText': '+3 to Wisdom'},
    {'name': 'Universal Surge', 'statKey': 'increasedDamage', 'value': 6, 'displayText': '+6% Damage'},
])

add_node('keystone_monolithic_focus_lower', 'Monolithic Focus (Single-Stat Stacker)', 'keystone', 'keystone_special', 420, 480,
         'If ANY single attribute reaches 50+, gain +40% MORE Damage with that scaling type. Drawback: Other scaling types deal 20% less damage.',
         [{'statKey': 'increasedDamage', 'value': 20, 'displayText': '+20% Global Damage'}],
         icon='Crown', keystoneFlag='monolithicFocus', flavor='Pour everything into a single truth, and all foes shatter before it.')
add_corridor('trunk_right_mono', 'keystone_mind_over_matter', 'keystone_monolithic_focus_lower', 12, 0, 700, 420, 480, 'keystone_special', [
    {'name': 'Agility Fiber', 'statKey': 'dexterity', 'value': 3, 'displayText': '+3 to Dexterity'},
    {'name': 'Fortune Fiber', 'statKey': 'luck', 'value': 3, 'displayText': '+3 to Luck'},
    {'name': 'Will Fiber', 'statKey': 'willpower', 'value': 3, 'displayText': '+3 to Willpower'},
    {'name': 'Focused Power', 'statKey': 'increasedDamage', 'value': 6, 'displayText': '+6% Damage'},
])

add_node('trunk_bifurcation', 'The Great Bifurcation', 'notable', 'keystone_special', 0, 260,
         'Where the World Tree splits into the Great Left, Right, and Upper Boughs.',
         [
             {'statKey': 'strength', 'value': 8, 'displayText': '+8 to Strength'},
             {'statKey': 'dexterity', 'value': 8, 'displayText': '+8 to Dexterity'},
             {'statKey': 'wisdom', 'value': 8, 'displayText': '+8 to Wisdom'},
         ],
         icon='GitFork')
connect('keystone_omnipotent_harmony', 'trunk_bifurcation')
connect('keystone_monolithic_focus_lower', 'trunk_bifurcation')

# ============================================================
# LEFT BOUGH
# ============================================================
left_bough = [
    ('keystone_colossus_earthbreaker', 'Colossus Earthbreaker (Str x Phys)', 'physical_melee', -850, 480,
     'Heavy physical melee slams deal +60% MORE Damage and +35% Area of Effect based on your Equip Load. Drawback: Attack speed is reduced by 20%.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'heavyDamageMultiplier', 'value': 0.25, 'displayText': '+25% Heavy Damage'}],
     'Hammer', 'colossusEarthbreaker', 'Wield the mass of the mountain to shatter the earth.'),
    ('keystone_titanic_vitality', 'Titanic Vitality (Str x Vigor)', 'life_defense', -1550, 520,
     'Gain +4.0 Maximum Life per point of Strength. Drawback: Stamina recharge rate is reduced by 15%.',
     [{'statKey': 'strength', 'value': 20, 'displayText': '+20 to Strength'}, {'statKey': 'vigor', 'value': 20, 'displayText': '+20 to Vigor'}],
     'Heart', 'titanicVitality', 'The bulk of the giant fuels the towering colossus.'),
    ('keystone_immovable_bastion', 'Immovable Bastion (Armor Core)', 'life_defense', -2300, 560,
     'Converts all Evasion into Armor (0% evade chance). Grants +15% Physical Damage Reduction. Drawback: -10% Movement Speed.',
     [{'statKey': 'armor', 'value': 300, 'displayText': '+300 Armor'}, {'statKey': 'damageReduction', 'value': 15, 'displayText': '+15% Damage Reduction'}],
     'Shield', 'immovableBastion', 'A mountain cannot dodge the wind, nor does it need to.'),
    ('keystone_two_handed_colossus', 'Two-Handed Colossus (2H Mastery)', 'physical_melee', -950, 210,
     'Two-handed heavy weapons gain +50% Stagger Chance and +35% More Area Damage. Drawback: Weapon skill cooldowns increased by 15%.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'heavyDamageMultiplier', 'value': 0.20, 'displayText': '+20% Heavy Damage'}],
     'Sword', None, 'Swing two-handed steel with catastrophic momentum.'),
    ('keystone_volcanic_juggernaut', 'Volcanic Juggernaut (Str x Fire)', 'elemental_fire', -1650, 180,
     'Converts 100% of Heavy Physical Damage to Fire. Heavy slams erupt molten geysers scaling with Strength. Drawback: -15% Movement Speed and -20% Cold Resistance.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'increasedFireDamage', 'value': 40, 'displayText': '+40% Fire Damage'}],
     'Flame', 'volcanicJuggernaut', 'Bathe in magma and crush foes under molten stone.'),
    ('keystone_glacial_fortress', 'Glacial Fortress (Str x Cold)', 'elemental_cold', -2350, 140,
     'Heavy hits deal bonus Cold damage equal to 15% of your total Armor. Chilled enemies deal 25% less damage to you. Drawback: Movement speed cannot exceed 220 px/s.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'armor', 'value': 120, 'displayText': '+120 Armor'}, {'statKey': 'increasedColdDamage', 'value': 30, 'displayText': '+30% Cold Damage'}],
     'Snowflake', 'glacialFortress', 'An armored citadel encased in permafrost.'),
    ('keystone_stormforged_anvil', 'Stormforged Anvil (Str x Lightning)', 'elemental_lightning', -880, -90,
     'Heavy weapon slams consume Shock on enemies to deal 80% of remaining shock damage in an instant burst. Drawback: Lightning skills cost +25% more Stamina.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'increasedLightningDamage', 'value': 35, 'displayText': '+35% Lightning Damage'}],
     'Zap', 'stormforgedAnvil', 'Bring down the hammer with the fury of a lightning strike.'),
    ('keystone_crusaders_purge', "Crusader's Divine Purge (Str x Holy)", 'elemental_fire', -1580, -140,
     'Heavy warhammers release Holy shockwaves on hit. Consecrated ground grants +150 Armor per 20 Strength. Drawback: Critical strike chance is reduced by 50%.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'wisdom', 'value': 15, 'displayText': '+15 to Wisdom'}, {'statKey': 'increasedHolyDamage', 'value': 35, 'displayText': '+35% Holy Damage'}],
     'Sun', 'crusadersPurge', 'Purge corruption with holy hammer blows.'),
    ('keystone_heavy_conduit', 'Heavy Conduit (Str x Spell Magic)', 'spell_magic', -2280, -180,
     'Strength grants +1.8% Magical Damage per point. Drawback: Increases all spell mana and stamina costs by 20%.',
     [{'statKey': 'strength', 'value': 20, 'displayText': '+20 to Strength'}, {'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}],
     'Zap', 'heavyConduit', 'Channel the arcane through sheer physical force.'),
    ('keystone_entropic_titan', 'Entropic Titan (Str x Chaos)', 'chaos_poison', -980, -430,
     'Heavy hits inflict Decay, dealing Chaos DoT equal to 50% of your Strength attribute per second. Drawback: -15% Maximum Life Regeneration.',
     [{'statKey': 'strength', 'value': 20, 'displayText': '+20 to Strength'}, {'statKey': 'increasedChaosDamage', 'value': 35, 'displayText': '+35% Chaos Damage'}],
     'Droplet', 'entropicTitan', 'Corrosion infuses every crushing blow.'),
    ('keystone_caustic_colossus', 'Caustic Colossus (Str x Acid)', 'chaos_poison', -1680, -480,
     'Heavy slams coat the ground in bubbling Acid that dissolves 40% of monster armor. Drawback: -15% Maximum Energy Shield.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'increasedAcidDamage', 'value': 35, 'displayText': '+35% Acid Damage'}],
     'Droplets', 'causticColossus', 'Armor melts into slush beneath the titan’s weight.'),
    ('keystone_tremor_king', 'Tremor King (Str x Sonic)', 'physical_melee', -2380, -540,
     'Heavy blunt hits generate concussive sonic rings that stagger all nearby enemies for 1.2s. Drawback: Sonic skills have +20% longer base cooldown.',
     [{'statKey': 'strength', 'value': 15, 'displayText': '+15 to Strength'}, {'statKey': 'increasedSonicDamage', 'value': 35, 'displayText': '+35% Sonic Damage'}],
     'Volume2', 'tremorKing', 'Sound waves echo like thunder through the shattered cavern.'),
    ('keystone_hemomancy', 'Hemomancy (Blood Magic)', 'life_defense', -2900, -600,
     'Removes all Mana. All skills cost Life. Grants +25% MORE Max Life. Drawback: -30% Life flask recovery.',
     [{'statKey': 'vigor', 'value': 25, 'displayText': '+25 to Vigor'}, {'statKey': 'maxLife', 'value': 150, 'displayText': '+150 Maximum Life'}],
     'Droplets', 'hemomancy', 'Power surges through the blood; mana is an illusion.'),
    ('keystone_golem_titan_garrison', 'Golem Titan Garrison (Will x Phys)', 'minions_totems', -2750, 20,
         'Summon stone colossus golems that gain +40% Life and +40% Damage, drawing aggro and slamming enemies. Drawback: You take 10% more damage while golems live.',
         [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'minionHealthMultiplier', 'value': 0.40, 'displayText': '+40% Minion Life'}, {'statKey': 'minionDamageMultiplier', 'value': 0.40, 'displayText': '+40% Minion Damage'}],
         'Shield', 'golemTitanGarrison', 'Stone titans answer the call of a sovereign will.'),
]

# Seed left bough nodes and corridors
prev_left_ids = ['trunk_bifurcation', 'keystone_mind_over_matter']
for i, node_def in enumerate(left_bough):
    nid, name, cat, x, y, desc, stats, icon, flag, flavor = node_def
    add_node(nid, name, 'keystone', cat, x, y, desc, stats, icon=icon, keystoneFlag=flag, flavor=flavor)

# Connect trunk->first tier
connect('trunk_bifurcation', 'keystone_colossus_earthbreaker')
add_corridor('lb_col_titan', 'keystone_colossus_earthbreaker', 'keystone_titanic_vitality', 14, -850, 480, -1550, 520, 'physical_melee', [
    {'name': 'Heavy Strength', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Iron Plates', 'statKey': 'armor', 'value': 28, 'displayText': '+28 Armor'},
    {'name': 'Vigor Pulse', 'statKey': 'vigor', 'value': 4, 'displayText': '+4 to Vigor'},
])
add_corridor('lb_titan_bastion', 'keystone_titanic_vitality', 'keystone_immovable_bastion', 14, -1550, 520, -2300, 560, 'life_defense', [
    {'name': 'Plated Bastion', 'statKey': 'armor', 'value': 36, 'displayText': '+36 Armor'},
    {'name': 'Endurance Core', 'statKey': 'maxLife', 'value': 25, 'displayText': '+25 Maximum Life'},
    {'name': 'Stagger Guard', 'statKey': 'damageReduction', 'value': 2, 'displayText': '+2% Damage Reduction'},
])
add_corridor('lb_trunk_2h', 'trunk_bifurcation', 'keystone_two_handed_colossus', 14, 0, 260, -950, 210, 'physical_melee', [
    {'name': 'Heavy Grip', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Wide Arc', 'statKey': 'heavyDamageMultiplier', 'value': 0.05, 'displayText': '+5% Heavy Damage'},
    {'name': 'Shock Sweep', 'statKey': 'areaOfEffectMultiplier', 'value': 0.04, 'displayText': '+4% AoE'},
], arc_offset=40)
add_corridor('lb_2h_volcanic', 'keystone_two_handed_colossus', 'keystone_volcanic_juggernaut', 14, -950, 210, -1650, 180, 'elemental_fire', [
    {'name': 'Magma Strength', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Molten Strike', 'statKey': 'increasedFireDamage', 'value': 8, 'displayText': '+8% Fire Damage'},
    {'name': 'Cinder Flare', 'statKey': 'chanceToIgnite', 'value': 5, 'displayText': '+5% Ignite Chance'},
])
add_corridor('lb_volcanic_glacial', 'keystone_volcanic_juggernaut', 'keystone_glacial_fortress', 14, -1650, 180, -2350, 140, 'elemental_cold', [
    {'name': 'Frost Armor', 'statKey': 'armor', 'value': 30, 'displayText': '+30 Armor'},
    {'name': 'Biting Cold', 'statKey': 'increasedColdDamage', 'value': 8, 'displayText': '+8% Cold Damage'},
    {'name': 'Chill Bind', 'statKey': 'chanceToFreeze', 'value': 4, 'displayText': '+4% Freeze Chance'},
])
add_corridor('lb_2h_storm', 'keystone_two_handed_colossus', 'keystone_stormforged_anvil', 14, -950, 210, -880, -90, 'elemental_lightning', [
    {'name': 'Thunder Grip', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Shockwave Arc', 'statKey': 'increasedLightningDamage', 'value': 7, 'displayText': '+7% Lightning Damage'},
    {'name': 'Static Discharge', 'statKey': 'chanceToShock', 'value': 5, 'displayText': '+5% Shock Chance'},
], arc_offset=-40)
add_corridor('lb_storm_crusade', 'keystone_stormforged_anvil', 'keystone_crusaders_purge', 14, -880, -90, -1580, -140, 'elemental_fire', [
    {'name': 'Holy Force', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Crusader Might', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Radiant Blast', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
])
add_corridor('lb_crusade_conduit', 'keystone_crusaders_purge', 'keystone_heavy_conduit', 14, -1580, -140, -2280, -180, 'spell_magic', [
    {'name': 'Might-Magic', 'statKey': 'strength', 'value': 5, 'displayText': '+5 to Strength'},
    {'name': 'Spell Weight', 'statKey': 'wisdom', 'value': 5, 'displayText': '+5 to Wisdom'},
    {'name': 'Arcane Slam', 'statKey': 'increasedSpellDamage', 'value': 8, 'displayText': '+8% Spell Damage'},
])
add_corridor('lb_storm_entropy', 'keystone_stormforged_anvil', 'keystone_entropic_titan', 12, -880, -90, -980, -430, 'chaos_poison', [
    {'name': 'Decay Weight', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Entropic Rot', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
    {'name': 'Bleed Pulverize', 'statKey': 'chanceToBleed', 'value': 6, 'displayText': '+6% Bleed Chance'},
])
add_corridor('lb_entropy_caustic', 'keystone_entropic_titan', 'keystone_caustic_colossus', 14, -980, -430, -1680, -480, 'chaos_poison', [
    {'name': 'Acid Weight', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Caustic Blast', 'statKey': 'increasedAcidDamage', 'value': 8, 'displayText': '+8% Acid Damage'},
    {'name': 'Corrode Splash', 'statKey': 'chanceToCorrode', 'value': 5, 'displayText': '+5% Corrode Chance'},
])
add_corridor('lb_caustic_tremor', 'keystone_caustic_colossus', 'keystone_tremor_king', 14, -1680, -480, -2380, -540, 'physical_melee', [
    {'name': 'Sonic Slam', 'statKey': 'strength', 'value': 4, 'displayText': '+4 to Strength'},
    {'name': 'Rumble Wave', 'statKey': 'increasedSonicDamage', 'value': 8, 'displayText': '+8% Sonic Damage'},
    {'name': 'Concussive Pulse', 'statKey': 'chanceToStagger', 'value': 6, 'displayText': '+6% Stagger Chance'},
])
add_corridor('lb_tremor_hemo', 'keystone_tremor_king', 'keystone_hemomancy', 12, -2380, -540, -2900, -600, 'life_defense', [
    {'name': 'Blood Vigor', 'statKey': 'vigor', 'value': 6, 'displayText': '+6 to Vigor'},
    {'name': 'Arterial Life', 'statKey': 'maxLife', 'value': 35, 'displayText': '+35 Maximum Life'},
    {'name': 'Heartbeat Regen', 'statKey': 'lifeRegen', 'value': 2, 'displayText': '+2 Life Regen/s'},
])
add_corridor('lb_glacial_golem', 'keystone_glacial_fortress', 'keystone_golem_titan_garrison', 12, -2350, 140, -2750, 20, 'minions_totems', [
    {'name': 'Stone Warden Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Basalt Plating', 'statKey': 'armor', 'value': 30, 'displayText': '+30 Armor'},
    {'name': 'Siege Minion', 'statKey': 'minionDamageMultiplier', 'value': 0.10, 'displayText': '+10% Minion Damage'},
], arc_offset=-30)
connect('keystone_golem_titan_garrison', 'keystone_hemomancy')
connect('keystone_colossus_earthbreaker', 'keystone_two_handed_colossus')
connect('keystone_titanic_vitality', 'keystone_volcanic_juggernaut')
connect('keystone_immovable_bastion', 'keystone_glacial_fortress')
connect('keystone_volcanic_juggernaut', 'keystone_crusaders_purge')
connect('keystone_glacial_fortress', 'keystone_heavy_conduit')
connect('keystone_crusaders_purge', 'keystone_caustic_colossus')
connect('keystone_heavy_conduit', 'keystone_tremor_king')

# ============================================================
# RIGHT BOUGH
# ============================================================
right_bough = [
    ('keystone_blade_flurry_tempest', 'Blade Flurry Tempest (Dex x Phys)', 'physical_melee', 850, 480,
     'Light multihits build Momentum stacks (+4% Attack Speed and +5% Light Damage per stack while moving). Drawback: Stopping movement causes you to take +15% more damage for 3s.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'attackSpeedMultiplier', 'value': 0.15, 'displayText': '+15% Attack Speed'}],
     'Sword', 'bladeFlurryTempest', 'The blade that never ceases motion cuts through all defense.'),
    ('keystone_close_quarters', 'Close-Quarters Ballistics', 'bow_projectiles', 1550, 580,
     'Projectiles deal up to +50% MORE damage at close range. Drawback: Deal 30% LESS damage at maximum range.',
     [{'statKey': 'dexterity', 'value': 20, 'displayText': '+20 to Dexterity'}, {'statKey': 'lightDamageMultiplier', 'value': 0.25, 'displayText': '+25% Light Damage'}],
     'Crosshair', 'closeQuartersBallistics', 'Look into the predator’s eyes before you loose the string.'),
    ('keystone_galeform_stance', 'Galeform Stance (Evasion Core)', 'armor_evasion', 2300, 680,
     'Take 20% less damage if not hit recently; +50% Evasion after being hit. Drawback: Take +15% more damage from rapid consecutive hits.',
     [{'statKey': 'evasion', 'value': 250, 'displayText': '+250 Evasion Rating'}, {'statKey': 'movementSpeed', 'value': 25, 'displayText': '+25 Movement Speed'}],
     'Wind', 'galeformStance', 'The dancer slips through the storm untouched.'),
    ('keystone_dual_wield_dervish', 'Dual-Wield Dervish (Dual Melee)', 'physical_melee', 950, 210,
     'While dual-wielding, gain +25% Attack Speed and +20% More Damage. Drawback: Lose 10% Armor and cannot equip Shields.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'attackSpeedMultiplier', 'value': 0.20, 'displayText': '+20% Attack Speed'}],
     'Scissors', None, 'Twin steel blades spinning like a tempestuous cyclone.'),
    ('keystone_cinder_dancer', 'Cinder-Dancer Volley (Dex x Fire)', 'elemental_fire', 1650, 180,
     'Light bow arrows leave igniting fire embers that detonate when dashed through. Drawback: Maximum Fire Resistance is capped at 50%.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedFireDamage', 'value': 35, 'displayText': '+35% Fire Damage'}],
     'Flame', 'cinderDancerVolley', 'Dance on sparks and kindle infernos with rapid arrows.'),
    ('keystone_rime_stalker', 'Rime-Stalker Needle (Dex x Cold)', 'elemental_cold', 2350, 140,
     'Light attacks against Chilled or Frozen targets have +40% Critical Strike Chance and pierce all foes. Drawback: Hits against non-chilled targets deal 20% less damage.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedColdDamage', 'value': 35, 'displayText': '+35% Cold Damage'}],
     'Snowflake', 'rimeStalkerNeedle', 'Ice needles pierce frozen hearts with surgical precision.'),
    ('keystone_electro_acrobat', 'Electro-Acrobat (Dex x Lightning)', 'elemental_lightning', 880, -90,
     'Every 4th light attack fires a piercing lightning bolt that chains +3 times and grants +20% Move Speed. Drawback: -20% Physical Damage.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedLightningDamage', 'value': 35, 'displayText': '+35% Lightning Damage'}],
     'Zap', 'electroAcrobat', 'Ride the lightning bolt between leaping steps.'),
    ('keystone_solar_deadeye', 'Solar Deadeye (Dex x Holy)', 'bow_projectiles', 1580, -140,
     'Bow attacks convert 50% of Physical damage to Holy, creating radiant light beams on hit that heal you for 1% of damage dealt. Drawback: Light arrows cannot chain.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedHolyDamage', 'value': 35, 'displayText': '+35% Holy Damage'}],
     'Sun', 'solarDeadeye', 'Arrows of pure sunlight pierce the gathering dark.'),
    ('keystone_aether_weaver', 'Aether-Weaver Rapier (Dex x Arcane)', 'spell_magic', 2280, -180,
     'Light attacks fire piercing astral blades that scale with Dexterity and restore +5 Mana on hit. Drawback: Spells cannot be cast manually.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedArcaneDamage', 'value': 35, 'displayText': '+35% Arcane Damage'}],
     'Sparkles', 'aetherWeaverRapier', 'The rapier weaves threads of pure astral aether.'),
    ('keystone_venomous_assassin', 'Venomous Assassin (Dex x Chaos)', 'chaos_poison', 980, -430,
     'Light daggers and poleblades inflict stacking Neurotoxin on hit. Poison stacks apply 35% faster. Drawback: -20% Maximum Life.',
     [{'statKey': 'dexterity', 'value': 20, 'displayText': '+20 to Dexterity'}, {'statKey': 'chanceToPoison', 'value': 35, 'displayText': '+35% Poison Chance'}, {'statKey': 'increasedChaosDamage', 'value': 35, 'displayText': '+35% Chaos Damage'}],
     'Droplet', 'venomousAssassin', 'A single cut begins the venomous countdown.'),
    ('keystone_corrosive_fangs', 'Corrosive Fangs (Dex x Acid)', 'chaos_poison', 1680, -480,
     'Fist weapons (Caestus/Katar) and daggers apply stacking Acid with ramping DoT on consecutive hits. Drawback: Dash cooldown increased by +0.5s.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedAcidDamage', 'value': 35, 'displayText': '+35% Acid Damage'}],
     'Droplets', 'corrosiveFangs', 'Acid dripped from katars dissolves bone and steel.'),
    ('keystone_sonic_wind_shear', 'Sonic Wind-Shear (Dex x Sonic)', 'physical_melee', 2380, -540,
     'Moving at high speed generates automatic sonic shockwaves slicing forward. Drawback: Standing still for >1s reduces total damage by 30%.',
     [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'increasedSonicDamage', 'value': 35, 'displayText': '+35% Sonic Damage'}],
     'Volume2', 'sonicWindShear', 'Break the sound barrier with every lunging step.'),
    ('keystone_fortunes_favor', "Fortune's Favor (Luck Damage Factor)", 'critical_strikes', 2900, -620,
     'Luck damage roll factor is DOUBLED (almost always rolling maximum damage). Drawback: Minimum base damage roll is reduced by 25%.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'vigor', 'value': 15, 'displayText': '+15 to Vigor'}],
     'Dice5', 'fortunesFavor', 'Fortune rewards only those bold enough to gamble everything.'),
    ('keystone_phantom_veil', 'Phantom Veil (Evasion Shroud)', 'armor_evasion', 3350, -700,
     'Evasion restores Energy Shield when hit based on Dexterity and Luck. Drawback: Maximum Energy Shield is reduced by 15%.',
     [{'statKey': 'evasion', 'value': 200, 'displayText': '+200 Evasion'}, {'statKey': 'luck', 'value': 20, 'displayText': '+20 to Luck'}],
     'Ghost', 'phantomVeil', 'Wraiths of the veil protect the fleetfooted gambler.'),
]
for nid, name, cat, x, y, desc, stats, icon, flag, flavor in right_bough:
    add_node(nid, name, 'keystone', cat, x, y, desc, stats, icon=icon, keystoneFlag=flag, flavor=flavor)

connect('trunk_bifurcation', 'keystone_blade_flurry_tempest')
add_corridor('rb_blade_cqb', 'keystone_blade_flurry_tempest', 'keystone_close_quarters', 14, 850, 480, 1550, 580, 'bow_projectiles', [
    {'name': 'Nock Speed', 'statKey': 'dexterity', 'value': 5, 'displayText': '+5 to Dexterity'},
    {'name': 'Ballistic Piercing', 'statKey': 'projectileSpeedMultiplier', 'value': 0.04, 'displayText': '+4% Proj Speed'},
    {'name': 'Arrow Pierce', 'statKey': 'pierceCount', 'value': 1, 'displayText': '+1 Pierce'},
    {'name': 'Reflex Stride', 'statKey': 'evasion', 'value': 30, 'displayText': '+30 Evasion'},
], arc_offset=-50)
add_corridor('rb_cqb_gale', 'keystone_close_quarters', 'keystone_galeform_stance', 14, 1550, 580, 2300, 680, 'armor_evasion', [
    {'name': 'Zephyr Evasion', 'statKey': 'evasion', 'value': 40, 'displayText': '+40 Evasion'},
    {'name': 'Wind Velocity', 'statKey': 'dexterity', 'value': 5, 'displayText': '+5 to Dexterity'},
    {'name': 'Gale Rush', 'statKey': 'movementSpeed', 'value': 6, 'displayText': '+6 Movement Speed'},
], arc_offset=-50)
add_corridor('rb_trunk_dual', 'trunk_bifurcation', 'keystone_dual_wield_dervish', 14, 0, 260, 950, 210, 'physical_melee', [
    {'name': 'Twin Blade Dex', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Slash Velocity', 'statKey': 'attackSpeedMultiplier', 'value': 0.03, 'displayText': '+3% Attack Speed'},
    {'name': 'Critical Angle', 'statKey': 'critChance', 'value': 3, 'displayText': '+3% Crit Chance'},
], arc_offset=-40)
add_corridor('rb_dual_cinder', 'keystone_dual_wield_dervish', 'keystone_cinder_dancer', 14, 950, 210, 1650, 180, 'elemental_fire', [
    {'name': 'Cinder Step', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Fire Volley', 'statKey': 'increasedFireDamage', 'value': 8, 'displayText': '+8% Fire Damage'},
    {'name': 'Spark Trail', 'statKey': 'chanceToIgnite', 'value': 5, 'displayText': '+5% Ignite Chance'},
])
add_corridor('rb_cinder_rime', 'keystone_cinder_dancer', 'keystone_rime_stalker', 14, 1650, 180, 2350, 140, 'elemental_cold', [
    {'name': 'Frost Needle', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Ice Flurry', 'statKey': 'increasedColdDamage', 'value': 8, 'displayText': '+8% Cold Damage'},
    {'name': 'Rime Crit', 'statKey': 'critChance', 'value': 4, 'displayText': '+4% Crit Chance'},
])
add_corridor('rb_dual_electro', 'keystone_dual_wield_dervish', 'keystone_electro_acrobat', 14, 950, 210, 880, -90, 'elemental_lightning', [
    {'name': 'Volt Speed', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Lightning Chain', 'statKey': 'increasedLightningDamage', 'value': 7, 'displayText': '+7% Lightning Damage'},
    {'name': 'Static Leap', 'statKey': 'chanceToShock', 'value': 5, 'displayText': '+5% Shock Chance'},
], arc_offset=40)
add_corridor('rb_electro_solar', 'keystone_electro_acrobat', 'keystone_solar_deadeye', 14, 880, -90, 1580, -140, 'bow_projectiles', [
    {'name': 'Sunstring Dex', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Holy Arrowhead', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
    {'name': 'Radiant Pierce', 'statKey': 'holyPenetration', 'value': 3, 'displayText': '+3% Holy Pen'},
])
add_corridor('rb_solar_aether', 'keystone_solar_deadeye', 'keystone_aether_weaver', 14, 1580, -140, 2280, -180, 'spell_magic', [
    {'name': 'Aether Rapier', 'statKey': 'dexterity', 'value': 5, 'displayText': '+5 to Dexterity'},
    {'name': 'Mana Siphon', 'statKey': 'maxMana', 'value': 20, 'displayText': '+20 Mana'},
    {'name': 'Astral Pierce', 'statKey': 'increasedArcaneDamage', 'value': 8, 'displayText': '+8% Arcane Damage'},
])
add_corridor('rb_electro_venom', 'keystone_electro_acrobat', 'keystone_venomous_assassin', 12, 880, -90, 980, -430, 'chaos_poison', [
    {'name': 'Venom Dex', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Toxic Edge', 'statKey': 'chanceToPoison', 'value': 6, 'displayText': '+6% Poison Chance'},
    {'name': 'Shadow Strike', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
], arc_offset=25)
add_corridor('rb_venom_corrosive', 'keystone_venomous_assassin', 'keystone_corrosive_fangs', 14, 980, -430, 1680, -480, 'chaos_poison', [
    {'name': 'Acid Katar', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Caustic Edge', 'statKey': 'increasedAcidDamage', 'value': 8, 'displayText': '+8% Acid Damage'},
    {'name': 'Corrosive Strike', 'statKey': 'chanceToCorrode', 'value': 5, 'displayText': '+5% Corrode Chance'},
])
add_corridor('rb_corrosive_sonic', 'keystone_corrosive_fangs', 'keystone_sonic_wind_shear', 14, 1680, -480, 2380, -540, 'physical_melee', [
    {'name': 'Sonic Step', 'statKey': 'dexterity', 'value': 4, 'displayText': '+4 to Dexterity'},
    {'name': 'Wind Shockwave', 'statKey': 'increasedSonicDamage', 'value': 8, 'displayText': '+8% Sonic Damage'},
    {'name': 'Speed Concussion', 'statKey': 'movementSpeed', 'value': 6, 'displayText': '+6 Move Speed'},
])
add_corridor('rb_sonic_fortune', 'keystone_sonic_wind_shear', 'keystone_fortunes_favor', 14, 2380, -540, 2900, -620, 'critical_strikes', [
    {'name': 'Lucky Roll', 'statKey': 'luck', 'value': 6, 'displayText': '+6 to Luck'},
    {'name': 'Crit Ceiling', 'statKey': 'critChance', 'value': 4, 'displayText': '+4% Crit Chance'},
    {'name': 'Gold Multiplier', 'statKey': 'increasedItemQuantity', 'value': 8, 'displayText': '+8% Item Quant'},
], arc_offset=25)
add_corridor('rb_fortune_phantom', 'keystone_fortunes_favor', 'keystone_phantom_veil', 12, 2900, -620, 3350, -700, 'armor_evasion', [
    {'name': 'Veil Shroud', 'statKey': 'evasion', 'value': 30, 'displayText': '+30 Evasion'},
    {'name': 'Aether Luck', 'statKey': 'luck', 'value': 4, 'displayText': '+4 to Luck'},
    {'name': 'Energy Reflex', 'statKey': 'maxEnergyShield', 'value': 25, 'displayText': '+25 Energy Shield'},
])
connect('keystone_blade_flurry_tempest', 'keystone_dual_wield_dervish')
connect('keystone_close_quarters', 'keystone_cinder_dancer')
connect('keystone_galeform_stance', 'keystone_rime_stalker')
connect('keystone_dual_wield_dervish', 'keystone_electro_acrobat')
connect('keystone_cinder_dancer', 'keystone_solar_deadeye')
connect('keystone_rime_stalker', 'keystone_aether_weaver')
connect('keystone_solar_deadeye', 'keystone_corrosive_fangs')
connect('keystone_aether_weaver', 'keystone_sonic_wind_shear')

# ============================================================
# CANOPY / WISDOM / LUCK / WILLPOWER CLUSTERS
# ============================================================
add_node('keystone_incandescent_archon', 'Incandescent Archon (Wis x Fire)', 'keystone', 'elemental_fire', -420, 40,
         'Fire spells gain +50% Area of Effect. Ignites deal +40% more damage based on Wisdom. Drawback: Fire spells have +25% longer cast time.',
         [{'statKey': 'wisdom', 'value': 15, 'displayText': '+15 to Wisdom'}, {'statKey': 'increasedFireDamage', 'value': 35, 'displayText': '+35% Fire Damage'}],
         icon='Flame', keystoneFlag='incandescentArchon', flavor='Solar firestorms consume the horizon.')
add_node('keystone_overcharged_conduit', 'Overcharged Conduit (Wis x Lightning)', 'keystone', 'elemental_lightning', 420, 40,
         'Lightning spells have +50% Shock effect and shock stacks up to 3 times on bosses. Drawback: Casting lightning spells drains 5% of current Life.',
         [{'statKey': 'wisdom', 'value': 15, 'displayText': '+15 to Wisdom'}, {'statKey': 'increasedLightningDamage', 'value': 35, 'displayText': '+35% Lightning Damage'}],
         icon='Zap', keystoneFlag='overchargedConduit', flavor='High voltage surges violently through mortal veins.')
add_node('keystone_prismatic_surge', 'Prismatic Surge (Crit Surge)', 'keystone', 'spell_magic', 0, -120,
         'Critical strikes grant +45% MORE Magical & Elemental Damage for 6s. Drawback: Critical strikes deal no extra multiplier.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}],
         icon='Sun', keystoneFlag='prismaticSurge', flavor='Resonate with harmonic perfection rather than seeking explosive spikes.')

add_corridor('canopy_fire_ladder', 'trunk_bifurcation', 'keystone_incandescent_archon', 10, 0, 260, -420, 40, 'elemental_fire', [
    {'name': 'Wisdom Spark', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Fire Flow', 'statKey': 'increasedFireDamage', 'value': 7, 'displayText': '+7% Fire Damage'},
    {'name': 'Ignite Heat', 'statKey': 'chanceToIgnite', 'value': 4, 'displayText': '+4% Ignite Chance'},
], arc_offset=-20)
add_corridor('canopy_light_ladder', 'trunk_bifurcation', 'keystone_overcharged_conduit', 10, 0, 260, 420, 40, 'elemental_lightning', [
    {'name': 'Wisdom Spark', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Lightning Flow', 'statKey': 'increasedLightningDamage', 'value': 7, 'displayText': '+7% Lightning Damage'},
    {'name': 'Static Charge', 'statKey': 'chanceToShock', 'value': 4, 'displayText': '+4% Shock Chance'},
], arc_offset=20)
connect('keystone_incandescent_archon', 'keystone_prismatic_surge')
connect('keystone_overcharged_conduit', 'keystone_prismatic_surge')

# WIS x element leaves
add_node('keystone_pyretic_ascendancy', 'Pyretic Ascendancy (Pure Fire Conversion)', 'keystone', 'elemental_fire', -680, -290,
         '50% of Phys/Cold/Light/Holy/Arcane damage converted to Fire (deal only Fire). Drawback: Cannot inflict Freeze or Shock.',
         [{'statKey': 'increasedFireDamage', 'value': 50, 'displayText': '+50% Fire Damage'}, {'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}],
         icon='Flame', keystoneFlag='pyreticAscendancy', flavor='In the solar furnace, all elements burn as one pure flame.')
add_node('keystone_glacial_sovereign', 'Glacial Sovereign (Wis x Cold)', 'keystone', 'elemental_cold', -250, -360,
         'Cold spells apply Deep Freeze, causing frozen foes to emit frost novas when hit. Drawback: Cannot deal Fire or Burning damage.',
         [{'statKey': 'wisdom', 'value': 15, 'displayText': '+15 to Wisdom'}, {'statKey': 'increasedColdDamage', 'value': 35, 'displayText': '+35% Cold Damage'}],
         icon='Snowflake', keystoneFlag='glacialSovereign', flavor='The chill of absolute zero crystallizes thought itself.')
add_node('keystone_astral_singularity', 'Astral Singularity (Wis x Arcane)', 'keystone', 'spell_magic', 250, -360,
         'Arcane spells collapse into gravity singularities that pull enemies inward and detonate in pure aether. Drawback: Singularity detonates after a 1.5s delay.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}, {'statKey': 'increasedArcaneDamage', 'value': 35, 'displayText': '+35% Arcane Damage'}],
         icon='Sparkles', keystoneFlag='astralSingularity', flavor='The gravity of dying stars binds all enemies.')
add_node('keystone_acrobatic_sorcery', 'Acrobatic Sorcery (Wis x Dex)', 'keystone', 'spell_magic', 680, -290,
         'Dexterity Light scaling applies to Spell Cast Speed. Drawback: Spell Area of Effect is reduced by 15%.',
         [{'statKey': 'dexterity', 'value': 15, 'displayText': '+15 to Dexterity'}, {'statKey': 'wisdom', 'value': 15, 'displayText': '+15 to Wisdom'}],
         icon='Wind', keystoneFlag='acrobaticSorcery', flavor='Weave incantations seamlessly between evasive steps.')
add_node('keystone_geomantic_earthsurge', 'Geomantic Earthsurge (Wis x Phys)', 'keystone', 'physical_melee', -750, -700,
         'Magical damage shatters armor and creates stone spikes in an area, converting 25% of spell damage to Physical. Drawback: Projectile range reduced by 20%.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}, {'statKey': 'increasedPhysicalDamage', 'value': 35, 'displayText': '+35% Physical Damage'}],
         icon='Mountain', keystoneFlag='geomanticEarthSurge', flavor='The crust of the world answers the call of geomantic will.')
add_node('keystone_plaguebringer_sceptre', 'Plaguebringer Sceptre (Wis x Chaos)', 'keystone', 'chaos_poison', -300, -760,
         'Caster attacks and spells spread virulent plague that jumps between enemies. Drawback: Non-chaos damage dealt is reduced by 15%.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}, {'statKey': 'increasedChaosDamage', 'value': 40, 'displayText': '+40% Chaos Damage'}, {'statKey': 'chanceToPoison', 'value': 25, 'displayText': '+25% Poison Chance'}],
         icon='Biohazard', keystoneFlag='plaguebringerSceptre', flavor='The sceptre does not merely poison flesh—it curses bloodlines.')
add_node('keystone_purifying_archon', 'Purifying Archon (Wis x Holy)', 'keystone', 'keystone_special', 300, -760,
         'Holy spells purify ailments from you and allies on cast and deal extra damage based on removed ailments. Drawback: Damage taken from Chaos sources is increased by 20%.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}, {'statKey': 'increasedHolyDamage', 'value': 40, 'displayText': '+40% Holy Damage'}],
         icon='Sparkles', keystoneFlag='purifyingArchon', flavor='Through sacred word and flame, corruption is unmade.')
add_node('keystone_alchemical_catalyst', 'Alchemical Catalyst (Wis x Status DoT)', 'keystone', 'chaos_poison', 750, -700,
         'Ailments and damage over time deal 40% more damage and stack faster. Drawback: Direct hit damage is reduced by 10%.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}],
         icon='FlaskConical', keystoneFlag='alchemicalCatalyst', flavor='Every catalyst is one drop from catastrophe or transcendence.')
add_node('keystone_harmonic_resonance', 'Harmonic Resonance (Wis x Sonic)', 'keystone', 'spell_magic', 0, -1080,
         'Sonic and Arcane spells resonate together, triggering vibrations that deal +40% More Area Damage. Drawback: -15% Movement Speed while casting.',
         [{'statKey': 'wisdom', 'value': 20, 'displayText': '+20 to Wisdom'}, {'statKey': 'increasedSonicDamage', 'value': 35, 'displayText': '+35% Sonic Damage'}],
         icon='Volume2', keystoneFlag='harmonicResonance', flavor='Harmonic frequencies shatter crystal and bone.')

add_corridor('canopy_pyretic_corridor', 'keystone_incandescent_archon', 'keystone_pyretic_ascendancy', 10, -420, 40, -680, -290, 'elemental_fire', [
    {'name': 'Wisdom Fire', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Pure Heat', 'statKey': 'increasedFireDamage', 'value': 9, 'displayText': '+9% Fire Damage'},
    {'name': 'Thermal Burst', 'statKey': 'chanceToIgnite', 'value': 5, 'displayText': '+5% Ignite Chance'},
], arc_offset=-30)
add_corridor('canopy_glacial_corridor', 'keystone_prismatic_surge', 'keystone_glacial_sovereign', 10, 0, -120, -250, -360, 'elemental_cold', [
    {'name': 'Frost Wisdom', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Subzero Flow', 'statKey': 'increasedColdDamage', 'value': 8, 'displayText': '+8% Cold Damage'},
    {'name': 'Cryo Freeze', 'statKey': 'chanceToFreeze', 'value': 4, 'displayText': '+4% Freeze Chance'},
], arc_offset=-20)
add_corridor('canopy_astral_corridor', 'keystone_prismatic_surge', 'keystone_astral_singularity', 10, 0, -120, 250, -360, 'spell_magic', [
    {'name': 'Aether Wisdom', 'statKey': 'wisdom', 'value': 4, 'displayText': '+4 to Wisdom'},
    {'name': 'Gravity Pull', 'statKey': 'increasedArcaneDamage', 'value': 8, 'displayText': '+8% Arcane Damage'},
    {'name': 'Singularity Pen', 'statKey': 'arcanePenetration', 'value': 3, 'displayText': '+3% Arcane Pen'},
], arc_offset=20)
add_corridor('canopy_acrobatic_corridor', 'keystone_overcharged_conduit', 'keystone_acrobatic_sorcery', 10, 420, 40, 680, -290, 'spell_magic', [
    {'name': 'Dex-Wis Flow', 'statKey': 'dexterity', 'value': 3, 'displayText': '+3 to Dexterity'},
    {'name': 'Cast Velocity', 'statKey': 'castSpeedMultiplier', 'value': 0.04, 'displayText': '+4% Cast Speed'},
    {'name': 'Acrobat Mana', 'statKey': 'maxMana', 'value': 15, 'displayText': '+15 Mana'},
], arc_offset=30)
add_corridor('wis_pyre_geo', 'keystone_pyretic_ascendancy', 'keystone_geomantic_earthsurge', 12, -680, -290, -750, -700, 'physical_melee', [
    {'name': 'Stonecraft Wisdom', 'statKey': 'wisdom', 'value': 5, 'displayText': '+5 to Wisdom'},
    {'name': 'Quake Force', 'statKey': 'increasedPhysicalDamage', 'value': 8, 'displayText': '+8% Physical Damage'},
    {'name': 'Stagger Core', 'statKey': 'chanceToStagger', 'value': 5, 'displayText': '+5% Stagger Chance'},
])
add_corridor('wis_glacial_plague', 'keystone_glacial_sovereign', 'keystone_plaguebringer_sceptre', 12, -250, -360, -300, -760, 'chaos_poison', [
    {'name': 'Pestilent Wisdom', 'statKey': 'wisdom', 'value': 5, 'displayText': '+5 to Wisdom'},
    {'name': 'Toxic Chant', 'statKey': 'chanceToPoison', 'value': 6, 'displayText': '+6% Poison Chance'},
    {'name': 'Rot Surge', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
])
add_corridor('wis_astral_purify', 'keystone_astral_singularity', 'keystone_purifying_archon', 12, 250, -360, 300, -760, 'keystone_special', [
    {'name': 'Radiant Wisdom', 'statKey': 'wisdom', 'value': 5, 'displayText': '+5 to Wisdom'},
    {'name': 'Consecrate Burst', 'statKey': 'chanceToConsecrate', 'value': 6, 'displayText': '+6% Consecrate Chance'},
    {'name': 'Holy Burst', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
])
add_corridor('wis_acrobat_alch', 'keystone_acrobatic_sorcery', 'keystone_alchemical_catalyst', 12, 680, -290, 750, -700, 'chaos_poison', [
    {'name': 'Catalyst Wisdom', 'statKey': 'wisdom', 'value': 5, 'displayText': '+5 to Wisdom'},
    {'name': 'Reagent DoT', 'statKey': 'increasedDamageOverTime', 'value': 10, 'displayText': '+10% Damage over Time'},
    {'name': 'Decay Catalyst', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
])

# LUCK x element canopy leaves
luck_keystones = [
    ('keystone_wildfire_gamble', 'Wildfire Gamble (Luck x Fire)', 'elemental_fire', -1800, -850,
     'Your highest fire damage rolls trigger combusting embers, but low rolls fizzle into duds. Drawback: Fire damage variance is greatly increased.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedFireDamage', 'value': 40, 'displayText': '+40% Fire Damage'}],
     'Flame', 'wildfireGamble'),
    ('keystone_frostbite_roulette', 'Frostbite Roulette (Luck x Cold)', 'elemental_cold', -1000, -950,
     'Lucky cold hits shatter into additional ice shards; unlucky hits are reduced to glancing chills. Drawback: Cold damage cannot reliably freeze on low rolls.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedColdDamage', 'value': 40, 'displayText': '+40% Cold Damage'}],
     'Snowflake', 'frostbiteRoulette'),
    ('keystone_high_voltage_jackpot', 'High Voltage Jackpot (Luck x Lightning)', 'elemental_lightning', -200, -1150,
     'Lightning arcs chain massively on lucky high rolls, fizzling on unlucky ones. Drawback: Shock duration is halved.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedLightningDamage', 'value': 40, 'displayText': '+40% Lightning Damage'}],
     'Zap', 'highVoltageJackpot'),
    ('keystone_twisted_destiny', 'Twisted Destiny (Luck x Chaos)', 'chaos_poison', 600, -1150,
     'Chaos damage can roll any element type and randomly ignore resistances on high rolls. Drawback: You can also randomly deal reduced damage to some enemies.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedChaosDamage', 'value': 40, 'displayText': '+40% Chaos Damage'}],
     'Shuffle', 'twistedDestiny'),
    ('keystone_divine_serendipity', 'Divine Serendipity (Luck x Holy)', 'keystone_special', 1400, -950,
     'Lucky holy hits summon blessed miracles and divine smites. Drawback: Unlucky hits grant enemies brief divine resistance.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedHolyDamage', 'value': 40, 'displayText': '+40% Holy Damage'}],
     'Sparkles', 'divineSerendipity'),
    ('keystone_astral_gambler', 'Astral Gambler (Luck x Arcane)', 'spell_magic', 2200, -850,
     'Arcane spells randomly repeat, fork, or fizzle based on Luck. Drawback: Spell mana costs become volatile and sometimes double.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedArcaneDamage', 'value': 40, 'displayText': '+40% Arcane Damage'}],
     'Sparkles', 'astralGambler'),
    ('keystone_caustic_fortune', 'Caustic Fortune (Luck x Acid)', 'chaos_poison', 2800, -1100,
     'Lucky acid hits melt armor and create massive corrosion pools; unlucky hits leave harmless residue. Drawback: Acid pools can briefly slow you too.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedAcidDamage', 'value': 40, 'displayText': '+40% Acid Damage'}],
     'Droplets', 'causticFortune'),
    ('keystone_cacophony_fortune', 'Cacophony Fortune (Luck x Sonic)', 'physical_melee', 3400, -1150,
     'Sonic hits can echo many times on perfect rolls or thud dully on poor rolls. Drawback: Your skill cooldowns have minor random variance.',
     [{'statKey': 'luck', 'value': 25, 'displayText': '+25 to Luck'}, {'statKey': 'increasedSonicDamage', 'value': 40, 'displayText': '+40% Sonic Damage'}],
     'Volume2', 'cacophonyFortune'),
]
for nid, name, cat, x, y, desc, stats, icon, flag in luck_keystones:
    add_node(nid, name, 'keystone', cat, x, y, desc, stats, icon=icon, keystoneFlag=flag)

add_corridor('luck_geo_fire', 'keystone_geomantic_earthsurge', 'keystone_wildfire_gamble', 14, -750, -700, -1800, -850, 'elemental_fire', [
    {'name': 'Ember Chance', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Hot Streak', 'statKey': 'increasedFireDamage', 'value': 8, 'displayText': '+8% Fire Damage'},
    {'name': 'Crit Spark', 'statKey': 'critChance', 'value': 4, 'displayText': '+4% Crit Chance'},
], arc_offset=-40)
add_corridor('luck_plague_cold', 'keystone_plaguebringer_sceptre', 'keystone_frostbite_roulette', 12, -300, -760, -1000, -950, 'elemental_cold', [
    {'name': 'Frost Fortune', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Shatter Ice', 'statKey': 'increasedColdDamage', 'value': 8, 'displayText': '+8% Cold Damage'},
    {'name': 'Freeze Gamble', 'statKey': 'chanceToFreeze', 'value': 4, 'displayText': '+4% Freeze Chance'},
])
add_corridor('luck_harmony_volt', 'keystone_harmonic_resonance', 'keystone_high_voltage_jackpot', 10, 0, -1080, -200, -1150, 'elemental_lightning', [
    {'name': 'Shock Luck', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Overcharge Roll', 'statKey': 'increasedLightningDamage', 'value': 8, 'displayText': '+8% Lightning Damage'},
])
add_corridor('luck_purify_twist', 'keystone_purifying_archon', 'keystone_twisted_destiny', 12, 300, -760, 600, -1150, 'chaos_poison', [
    {'name': 'Chaos Roll', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Twisted Fate', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
])
add_corridor('luck_alc_serendip', 'keystone_alchemical_catalyst', 'keystone_divine_serendipity', 12, 750, -700, 1400, -950, 'keystone_special', [
    {'name': 'Blessed Fortune', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Radiant Odds', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
])
add_corridor('luck_phantom_astral', 'keystone_phantom_veil', 'keystone_astral_gambler', 14, 3350, -700, 2200, -850, 'spell_magic', [
    {'name': 'Astral Odds', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Wild Arcana', 'statKey': 'increasedArcaneDamage', 'value': 8, 'displayText': '+8% Arcane Damage'},
], arc_offset=70)
add_corridor('luck_gambler_caustic', 'keystone_astral_gambler', 'keystone_caustic_fortune', 12, 2200, -850, 2800, -1100, 'chaos_poison', [
    {'name': 'Acid Dice', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Corrosion Chance', 'statKey': 'chanceToCorrode', 'value': 5, 'displayText': '+5% Corrode Chance'},
])
add_corridor('luck_caustic_caco', 'keystone_caustic_fortune', 'keystone_cacophony_fortune', 14, 2800, -1100, 3400, -1150, 'physical_melee', [
    {'name': 'Echo Roll', 'statKey': 'luck', 'value': 5, 'displayText': '+5 to Luck'},
    {'name': 'Sonic Burst', 'statKey': 'increasedSonicDamage', 'value': 8, 'displayText': '+8% Sonic Damage'},
])
connect('keystone_astral_gambler', 'keystone_fortunes_favor')
connect('keystone_divine_serendipity', 'keystone_solar_deadeye')

# WILLPOWER x element canopy/summit leaves
will_keystones = [
    ('keystone_infernal_legion_vanguard', 'Infernal Legion Vanguard (Will x Fire)', 'minions_totems', -2400, -1250,
     'Summon fireborn legionnaires that burn surrounding enemies and scale with Willpower. Drawback: Your minions take increased Cold damage.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedFireDamage', 'value': 30, 'displayText': '+30% Fire Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'Flame', 'infernalLegionVanguard'),
    ('keystone_frostbound_phantoms', 'Frostbound Phantoms (Will x Cold)', 'minions_totems', -1600, -1400,
     'Summon icy phantoms that chill enemies and shatter on death. Drawback: Your movement speed is reduced while phantoms are active.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedColdDamage', 'value': 30, 'displayText': '+30% Cold Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'Snowflake', 'frostBoundPhantoms'),
    ('keystone_storm_elemental_conduit', 'Storm Elemental Conduit (Will x Lightning)', 'minions_totems', -800, -1500,
     'Summon a storm elemental that channels chain lightning and grants you Shock aura. Drawback: You pulse lightning damage to yourself while channeling.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedLightningDamage', 'value': 30, 'displayText': '+30% Lightning Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'CloudLightning', 'stormElementalConduit'),
    ('keystone_abyssal_hivemind', 'Abyssal Hivemind (Will x Chaos)', 'minions_totems', 0, -1550,
     'Summon swarms of chaos abominations that multiply as they kill. Drawback: You cannot summon more than one large minion type.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedChaosDamage', 'value': 30, 'displayText': '+30% Chaos Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'Bug', 'abyssalHiveMind'),
    ('keystone_seraph_host', 'Seraph Host of Astris (Will x Holy)', 'minions_totems', 800, -1500,
     'Summons become radiant winged Seraphs casting Holy Smites and heals. Drawback: Max summon limit is 3.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedHolyDamage', 'value': 30, 'displayText': '+30% Holy Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.50, 'displayText': '+50% Minion Damage'}],
     'Sun', 'seraphHostAstris'),
    ('keystone_aether_shroud_nexus', 'Aether Shroud Nexus (Will x Arcane ES)', 'spell_magic', 1600, -1400,
     'Converts 50% of Max Mana into Energy Shield. When Energy Shield is active, Arcane spells deal +50% More Damage. Drawback: Maximum Life cannot exceed 500.',
     [{'statKey': 'willpower', 'value': 20, 'displayText': '+20 to Willpower'}, {'statKey': 'maxEnergyShield', 'value': 80, 'displayText': '+80 Energy Shield'}],
     'Layers', 'aetherShroudNexus'),
    ('keystone_caustic_broodmother', 'Caustic Broodmother (Will x Acid)', 'minions_totems', 2400, -1300,
     'Summon acid-spitting brood spiders that leave caustic webs. Drawback: Your energy shield recharge is delayed while brood is active.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedAcidDamage', 'value': 30, 'displayText': '+30% Acid Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'Droplets', 'causticBroodmother'),
    ('keystone_banshee_resonance', 'Banshee Resonance (Will x Sonic)', 'minions_totems', 3000, -1500,
     'Summon wailing banshees whose sonic waves weaken enemy resistances. Drawback: Banshees are fragile and fade faster in melee.',
     [{'statKey': 'willpower', 'value': 25, 'displayText': '+25 to Willpower'}, {'statKey': 'increasedSonicDamage', 'value': 30, 'displayText': '+30% Sonic Damage'}, {'statKey': 'minionDamageMultiplier', 'value': 0.35, 'displayText': '+35% Minion Damage'}],
     'AudioLines', 'bansheeResonance'),
]
for nid, name, cat, x, y, desc, stats, icon, flag in will_keystones:
    add_node(nid, name, 'keystone', cat, x, y, desc, stats, icon=icon, keystoneFlag=flag)

add_corridor('will_hemo_infernal', 'keystone_hemomancy', 'keystone_infernal_legion_vanguard', 16, -2900, -600, -2400, -1250, 'minions_totems', [
    {'name': 'Infernal Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Fire Minion', 'statKey': 'increasedMinionDamage', 'value': 8, 'displayText': '+8% Minion Damage'},
    {'name': 'Burning Convocation', 'statKey': 'increasedFireDamage', 'value': 8, 'displayText': '+8% Fire Damage'},
], arc_offset=-50)
add_corridor('will_frost_path', 'keystone_golem_titan_garrison', 'keystone_frostbound_phantoms', 16, -2750, 20, -1600, -1400, 'minions_totems', [
    {'name': 'Phantom Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Frost Minion', 'statKey': 'minionHealthMultiplier', 'value': 0.10, 'displayText': '+10% Minion Life'},
    {'name': 'Chill Convocation', 'statKey': 'increasedColdDamage', 'value': 8, 'displayText': '+8% Cold Damage'},
], arc_offset=20)
add_corridor('will_storm_path', 'keystone_entropic_titan', 'keystone_storm_elemental_conduit', 16, -980, -430, -800, -1500, 'minions_totems', [
    {'name': 'Storm Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Shock Convocation', 'statKey': 'increasedLightningDamage', 'value': 8, 'displayText': '+8% Lightning Damage'},
    {'name': 'Minion Surge', 'statKey': 'minionDamageMultiplier', 'value': 0.08, 'displayText': '+8% Minion Damage'},
], arc_offset=-20)
add_corridor('will_abyss_path', 'keystone_plaguebringer_sceptre', 'keystone_abyssal_hivemind', 16, -300, -760, 0, -1550, 'minions_totems', [
    {'name': 'Hive Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Chaos Convocation', 'statKey': 'increasedChaosDamage', 'value': 8, 'displayText': '+8% Chaos Damage'},
    {'name': 'Swarm Speed', 'statKey': 'minionSpeedMultiplier', 'value': 0.10, 'displayText': '+10% Minion Speed'},
])
add_corridor('will_seraph_path', 'keystone_purifying_archon', 'keystone_seraph_host', 16, 300, -760, 800, -1500, 'minions_totems', [
    {'name': 'Seraph Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Holy Convocation', 'statKey': 'increasedHolyDamage', 'value': 8, 'displayText': '+8% Holy Damage'},
    {'name': 'Radiant Minion', 'statKey': 'minionDamageMultiplier', 'value': 0.10, 'displayText': '+10% Minion Damage'},
])
add_corridor('will_aether_path', 'keystone_alchemical_catalyst', 'keystone_aether_shroud_nexus', 16, 750, -700, 1600, -1400, 'spell_magic', [
    {'name': 'Aether Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Shroud ES', 'statKey': 'maxEnergyShield', 'value': 30, 'displayText': '+30 Energy Shield'},
    {'name': 'Arcane Convocation', 'statKey': 'increasedArcaneDamage', 'value': 8, 'displayText': '+8% Arcane Damage'},
], arc_offset=25)
add_corridor('will_caustic_path', 'keystone_caustic_fortune', 'keystone_caustic_broodmother', 14, 2800, -1100, 2400, -1300, 'minions_totems', [
    {'name': 'Brood Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Acid Convocation', 'statKey': 'increasedAcidDamage', 'value': 8, 'displayText': '+8% Acid Damage'},
])
add_corridor('will_banshee_path', 'keystone_cacophony_fortune', 'keystone_banshee_resonance', 14, 3400, -1150, 3000, -1500, 'minions_totems', [
    {'name': 'Wail Will', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Sonic Convocation', 'statKey': 'increasedSonicDamage', 'value': 8, 'displayText': '+8% Sonic Damage'},
])

# General high keystones
add_node('keystone_glass_cannon', 'Aetheric Overload (Glass Cannon)', 'keystone', 'keystone_special', 0, -500,
         'Deal +50% MORE Damage with all attacks and spells. Drawback: You take +20% MORE damage from all sources.',
         [{'statKey': 'moreDamageMultiplier', 'value': 0.50, 'displayText': '+50% More Global Damage'}],
         icon='Zap', flavor='Unleash absolute devastation at the cost of your own frailty.')
add_node('keystone_voracious_feast', 'Voracious Feast (Instant Leech)', 'keystone', 'life_defense', -520, -560,
         'Life Leech applies instantly. Drawback: Natural Life Regeneration is reduced to 0.',
         [{'statKey': 'lifeLeechPercent', 'value': 3.0, 'displayText': '+3.0% Instant Leech'}],
         icon='HeartPulse', keystoneFlag='voraciousFeast', flavor='Consume the lifeblood of your enemies as immediate sustenance.')
add_node('keystone_null_soul_form', 'Null-Soul Form (Energy Shield Sovereign)', 'keystone', 'energy_shield', -500, -1120,
         'Maximum Life becomes 1. Grants +60% Energy Shield and +40% Chaos Resistance (never grants immunity). Drawback: Cannot recover Life via flasks or regeneration.',
         [{'statKey': 'chaosResistance', 'value': 40, 'displayText': '+40% Chaos Resistance'}, {'statKey': 'maxEnergyShield', 'value': 150, 'displayText': '+150 Maximum Energy Shield'}],
         icon='ShieldCheck', keystoneFlag='nullSoulForm', flavor='Discard the mortal husk; pure astral spirit cannot bleed.')
add_node('keystone_unyielding_resolve', 'Unyielding Resolve (100% Accuracy)', 'keystone', 'physical_melee', -300, -1750,
         'Your hits cannot be evaded by enemies. Drawback: You can NEVER deal Critical Strikes.',
         [{'statKey': 'increasedDamage', 'value': 35, 'displayText': '+35% Global Damage'}],
         icon='Crosshair', keystoneFlag='unyieldingResolve', flavor='No need for lucky strikes when every blow lands with absolute certainty.')
add_node('notable_world_tree_summit', 'Summit of the World Tree', 'notable', 'keystone_special', 0, -1850,
         'The highest pinnacle of Astris, overlooking the entire cosmos.',
         [{'statKey': 'increasedDamage', 'value': 35, 'displayText': '+35% Global Damage'}, {'statKey': 'maxEnergyShield', 'value': 100, 'displayText': '+100 Energy Shield'}, {'statKey': 'maxLife', 'value': 100, 'displayText': '+100 Maximum Life'}],
         icon='Zap')
add_node('keystone_monolithic_focus_apex', 'Monolithic Focus (Apex Pinnacle)', 'keystone', 'keystone_special', 0, -2250,
         'If ANY single attribute reaches 50+, gain +40% MORE Damage with that scaling type. Drawback: Other scaling types deal 20% less damage.',
         [{'statKey': 'increasedDamage', 'value': 35, 'displayText': '+35% Global Damage'}],
         icon='Crown', keystoneFlag='monolithicFocus', flavor='At the cosmic summit, absolute dedication conquers all.')

connect('keystone_prismatic_surge', 'keystone_glass_cannon')
add_corridor('glass_voracious', 'keystone_glass_cannon', 'keystone_voracious_feast', 8, 0, -500, -520, -560, 'life_defense', [
    {'name': 'Leech Vigor', 'statKey': 'vigor', 'value': 4, 'displayText': '+4 to Vigor'},
    {'name': 'Instant Sip', 'statKey': 'lifeLeechPercent', 'value': 0.5, 'displayText': '+0.5% Leech'},
])
add_corridor('canopy_null_soul_corridor', 'keystone_voracious_feast', 'keystone_null_soul_form', 12, -520, -560, -500, -1120, 'energy_shield', [
    {'name': 'Spirit Ward', 'statKey': 'willpower', 'value': 5, 'displayText': '+5 to Willpower'},
    {'name': 'Intelligence Mana', 'statKey': 'intelligence', 'value': 5, 'displayText': '+5 to Intelligence'},
    {'name': 'Pure Shield', 'statKey': 'maxEnergyShield', 'value': 30, 'displayText': '+30 Energy Shield'},
], arc_offset=-40)
connect('keystone_glass_cannon', 'keystone_harmonic_resonance')
add_corridor('harmony_summit', 'keystone_harmonic_resonance', 'notable_world_tree_summit', 14, 0, -1080, 0, -1850, 'keystone_special', [
    {'name': 'Summit Wisdom', 'statKey': 'wisdom', 'value': 6, 'displayText': '+6 to Wisdom'},
    {'name': 'Summit Strength', 'statKey': 'strength', 'value': 6, 'displayText': '+6 to Strength'},
    {'name': 'Summit Life', 'statKey': 'maxLife', 'value': 30, 'displayText': '+30 Maximum Life'},
    {'name': 'Summit Shield', 'statKey': 'maxEnergyShield', 'value': 30, 'displayText': '+30 Energy Shield'},
])
add_corridor('apex_ladder', 'notable_world_tree_summit', 'keystone_monolithic_focus_apex', 16, 0, -1850, 0, -2250, 'keystone_special', [
    {'name': 'Apex Power', 'statKey': 'increasedDamage', 'value': 8, 'displayText': '+8% Global Damage'},
    {'name': 'Apex Will', 'statKey': 'willpower', 'value': 6, 'displayText': '+6 to Willpower'},
    {'name': 'Apex Fortune', 'statKey': 'luck', 'value': 6, 'displayText': '+6 to Luck'},
])
add_corridor('null_unyielding', 'keystone_null_soul_form', 'keystone_unyielding_resolve', 12, -500, -1120, -300, -1750, 'physical_melee', [
    {'name': 'Certain Might', 'statKey': 'strength', 'value': 5, 'displayText': '+5 to Strength'},
    {'name': 'Crushing Blow', 'statKey': 'heavyDamageMultiplier', 'value': 0.05, 'displayText': '+5% Heavy Damage'},
    {'name': 'Solid Guard', 'statKey': 'armor', 'value': 30, 'displayText': '+30 Armor'},
], arc_offset=-20)
connect('keystone_unyielding_resolve', 'notable_world_tree_summit')

# Additional missing general keystones from earlier requests
add_node('keystone_prismatic_ward', 'Prismatic Ward (Balanced Resistances)', 'keystone', 'life_defense', -1300, -100,
         'All elemental resistances are averaged together: if Fire/Cold/Lightning are within 15% of each other, gain +20% all elemental damage and +10% damage reduction. Drawback: Single elemental resistance cannot exceed 75% via this node alone.',
         [{'statKey': 'fireResistance', 'value': 12, 'displayText': '+12% Fire Resist'}, {'statKey': 'coldResistance', 'value': 12, 'displayText': '+12% Cold Resist'}, {'statKey': 'lightningResistance', 'value': 12, 'displayText': '+12% Lightning Resist'}],
         icon='ShieldCheck', flavor='A prism does not favor a single hue—it unites the spectrum.')
add_node('keystone_evasion_arcane', 'Aether Bastion (Str x Arcane)', 'keystone', 'spell_magic', -2700, -300,
         'Strength grants increased Arcane damage based on your armor total, and heavy armor grants spell damage. Drawback: Evasion is reduced by 30%.',
         [{'statKey': 'strength', 'value': 18, 'displayText': '+18 to Strength'}, {'statKey': 'increasedArcaneDamage', 'value': 35, 'displayText': '+35% Arcane Damage'}],
         icon='ShieldPlus', keystoneFlag='aetherBastion', flavor='Arcane force sealed in plates of the cosmos.')
add_corridor('bastion_conduit', 'keystone_golem_titan_garrison', 'keystone_aether_bastion', 10, -2750, 20, -2700, -300, 'spell_magic', [
    {'name': 'Arcane Plating', 'statKey': 'armor', 'value': 25, 'displayText': '+25 Armor'},
    {'name': 'Aether Bind', 'statKey': 'willpower', 'value': 4, 'displayText': '+4 to Willpower'},
])
connect('keystone_aether_bastion', 'keystone_hemomancy')
connect('keystone_prismatic_ward', 'keystone_volcanic_juggernaut')
connect('keystone_prismatic_ward', 'keystone_glacial_sovereign')
connect('keystone_prismatic_ward', 'keystone_stormforged_anvil')

# Sky bridges (interconnected cross-bough links)
bridge_nodes = [
    ('bridge_sky_1', 'Sky Bridge I: Heavy & Light Synthesis', -100, 360,
     [{'statKey': 'strength', 'value': 8, 'displayText': '+8 to Strength'}, {'statKey': 'dexterity', 'value': 8, 'displayText': '+8 to Dexterity'}, {'statKey': 'movementSpeed', 'value': 15, 'displayText': '+15 Movement Speed'}]),
    ('bridge_sky_2', 'Sky Bridge II: Martial Synthesis', 0, 50,
     [{'statKey': 'attackSpeedMultiplier', 'value': 0.10, 'displayText': '+10% Attack Speed'}, {'statKey': 'heavyDamageMultiplier', 'value': 0.10, 'displayText': '+10% Heavy Damage'}, {'statKey': 'lightDamageMultiplier', 'value': 0.10, 'displayText': '+10% Light Damage'}]),
    ('bridge_sky_3', 'Sky Bridge III: Solar Consecration', 0, -240,
     [{'statKey': 'increasedHolyDamage', 'value': 30, 'displayText': '+30% Holy Damage'}, {'statKey': 'holyPenetration', 'value': 10, 'displayText': '+10% Holy Penetration'}]),
    ('bridge_sky_4', 'Sky Bridge IV: Acidic Dissolution', 0, -560,
     [{'statKey': 'increasedAcidDamage', 'value': 30, 'displayText': '+30% Acid Damage'}, {'statKey': 'chanceToCorrode', 'value': 20, 'displayText': '+20% Corrode Chance'}]),
    ('bridge_sky_5', 'Sky Bridge V: Outer Canopy Arc', 0, -1280,
     [{'statKey': 'vigor', 'value': 15, 'displayText': '+15 to Vigor'}, {'statKey': 'luck', 'value': 15, 'displayText': '+15 to Luck'}, {'statKey': 'maxLife', 'value': 60, 'displayText': '+60 Life'}, {'statKey': 'maxEnergyShield', 'value': 60, 'displayText': '+60 Energy Shield'}]),
]
for bid, name, x, y, stats in bridge_nodes:
    add_node(bid, name, 'notable', 'keystone_special', x, y, name, stats, icon='Share2')

connect('keystone_colossus_earthbreaker', 'bridge_sky_1')
connect('keystone_blade_flurry_tempest', 'bridge_sky_1')
connect('keystone_two_handed_colossus', 'bridge_sky_2')
connect('keystone_dual_wield_dervish', 'bridge_sky_2')
connect('bridge_sky_2', 'keystone_prismatic_surge')
connect('keystone_crusaders_purge', 'bridge_sky_3')
connect('keystone_solar_deadeye', 'bridge_sky_3')
connect('bridge_sky_3', 'keystone_glass_cannon')
connect('keystone_caustic_colossus', 'bridge_sky_4')
connect('keystone_corrosive_fangs', 'bridge_sky_4')
connect('bridge_sky_4', 'keystone_glass_cannon')
connect('keystone_hemomancy', 'bridge_sky_5')
connect('keystone_fortunes_favor', 'bridge_sky_5')
connect('bridge_sky_5', 'notable_world_tree_summit')

# Add extra cross-links between leaves for interconnected routing
connect('keystone_infernal_legion_vanguard', 'keystone_null_soul_form')
connect('keystone_frostbound_phantoms', 'keystone_high_voltage_jackpot')
connect('keystone_storm_elemental_conduit', 'keystone_abyssal_hivemind')
connect('keystone_abyssal_hivemind', 'keystone_seraph_host')
connect('keystone_seraph_host', 'keystone_aether_shroud_nexus')
connect('keystone_aether_shroud_nexus', 'keystone_caustic_broodmother')
connect('keystone_caustic_broodmother', 'keystone_banshee_resonance')
connect('keystone_banshee_resonance', 'keystone_phantom_veil')

# ============================================================
# PHYSICS RELAXATION
# ============================================================
node_list = [n for n in nodes.values()]
min_allowed_dist = MIN_NODE_DIST
anchor_ids = {'node_center_hub', 'keystone_monolithic_focus_apex'}

# Build quick type lookup
def is_keystone(n):
    return n['type'] == 'keystone' or n['type'] == 'origin_start'
def is_notable(n):
    return n['type'] == 'notable'

# Use uniform grid for fast neighbor lookups
CELL_SIZE = 520  # larger than max desired separation
def build_grid(nodes):
    grid = {}
    for i, n in enumerate(nodes):
        cx = int(math.floor(n['x'] / CELL_SIZE))
        cy = int(math.floor(n['y'] / CELL_SIZE))
        grid.setdefault((cx, cy), []).append(i)
    return grid

# Pass 1: Keystone-Keystone strong repulsion (69 keystones = small set, cheap)
keystone_idx = [i for i, n in enumerate(node_list) if is_keystone(n)]
for iteration in range(80):
    moved = False
    for i in range(len(keystone_idx)):
        for j in range(i + 1, len(keystone_idx)):
            ii = keystone_idx[i]
            jj = keystone_idx[j]
            n1 = node_list[ii]
            n2 = node_list[j]
            if n1['id'] in anchor_ids and n2['id'] in anchor_ids:
                continue
            dx = n2['x'] - n1['x']
            dy = n2['y'] - n1['y']
            dist = math.hypot(dx, dy)
            if dist < 0.001:
                dist = 0.001
            desired = KESTONE_SPACING
            if dist < desired:
                overlap = desired - dist
                angle = math.atan2(dy, dx)
                strength = 0.6 if iteration < 40 else 0.35
                push_x = math.cos(angle) * (overlap * strength)
                push_y = math.sin(angle) * (overlap * strength)
                a1 = n1['id'] in anchor_ids
                a2 = n2['id'] in anchor_ids
                if a1:
                    n2['x'] += push_x * 2; n2['y'] += push_y * 2
                elif a2:
                    n1['x'] -= push_x * 2; n1['y'] -= push_y * 2
                else:
                    n1['x'] -= push_x; n1['y'] -= push_y
                    n2['x'] += push_x; n2['y'] += push_y
                moved = True
    if not moved:
        break

# Pass 2: General node separation with spatial grid
for iteration in range(120):
    moved = False
    grid = build_grid(node_list)
    for i in range(len(node_list)):
        n1 = node_list[i]
        cx = int(math.floor(n1['x'] / CELL_SIZE))
        cy = int(math.floor(n1['y'] / CELL_SIZE))
        for gcx in range(cx - 1, cx + 2):
            for gcy in range(cy - 1, cy + 2):
                for j in grid.get((gcx, gcy), []):
                    if j <= i:
                        continue
                    n2 = node_list[j]
                    dx = n2['x'] - n1['x']
                    dy = n2['y'] - n1['y']
                    dist = math.hypot(dx, dy)
                    if dist < 0.001:
                        dist = 0.001
                    k1, k2 = is_keystone(n1), is_keystone(n2)
                    nb1, nb2 = is_notable(n1), is_notable(n2)
                    if k1 and k2:
                        desired = KESTONE_SPACING * 0.95
                    elif k1 or k2:
                        desired = 190.0
                    elif nb1 and nb2:
                        desired = NOTABLE_SPACING
                    elif nb1 or nb2:
                        desired = 105.0
                    else:
                        desired = min_allowed_dist
                    if dist < desired:
                        overlap = desired - dist
                        angle = math.atan2(dy, dx)
                        strength = 0.55 if iteration < 60 else 0.3
                        push_x = math.cos(angle) * (overlap * strength)
                        push_y = math.sin(angle) * (overlap * strength)
                        a1 = n1['id'] in anchor_ids
                        a2 = n2['id'] in anchor_ids
                        if a1 and a2:
                            continue
                        if a1:
                            n2['x'] += push_x * 2; n2['y'] += push_y * 2
                        elif a2:
                            n1['x'] -= push_x * 2; n1['y'] -= push_y * 2
                        else:
                            n1['x'] -= push_x; n1['y'] -= push_y
                            n2['x'] += push_x; n2['y'] += push_y
                        moved = True
    # Mild centering
    if iteration < 60:
        for n in node_list:
            if n['id'] in anchor_ids:
                continue
            n['x'] *= 0.9992
    if not moved and iteration > 40:
        break

# Round and integerize final positions
for n in nodes.values():
    n['x'] = int(round(n['x']))
    n['y'] = int(round(n['y']))

for nid, conns in connections.items():
    nodes[nid]['connections'] = sorted(conns)

# Stats output
min_dist = float('inf')
min_pair = None
for i in range(len(node_list)):
    for j in range(i + 1, len(node_list)):
        a, b = node_list[i], node_list[j]
        d = math.hypot(a['x'] - b['x'], a['y'] - b['y'])
        if d < min_dist:
            min_dist = d
            min_pair = (a['id'], b['id'])
keystone_count = sum(1 for n in nodes.values() if n['type'] in ('keystone','origin_start'))
notable_count = sum(1 for n in nodes.values() if n['type'] == 'notable')
small_count = sum(1 for n in nodes.values() if n['type'] == 'small')
overlap_count = 0
min_keystone_dist = float('inf')
min_keystone_pair = None
ks_list = [n for n in nodes.values() if n['type'] in ('keystone','origin_start')]
for i in range(len(ks_list)):
    for j in range(i + 1, len(ks_list)):
        a, b = ks_list[i], ks_list[j]
        d = math.hypot(a['x'] - b['x'], a['y'] - b['y'])
        if d < min_keystone_dist:
            min_keystone_dist = d
            min_keystone_pair = (a['name'], b['name'])
for i in range(len(node_list)):
    for j in range(i + 1, len(node_list)):
        a, b = node_list[i], node_list[j]
        if math.hypot(a['x'] - b['x'], a['y'] - b['y']) < 45:
            overlap_count += 1

ts_content = f"""// src/constants/passiveTreeData.ts
// Automatically generated World Tree Constellation Dataset (expanded spaced layout).

import {{ PassiveNode, PassiveTreeData }} from '../types/passives';

const nodes: {{ [id: string]: PassiveNode }} = {json.dumps(nodes, indent=2)};

export const PASSIVE_TREE_DATA: PassiveTreeData = {{
  nodes,
}};
"""
with open('src/constants/passiveTreeData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated {len(nodes)} World Tree nodes.")
print(f"Keystones: {keystone_count}, Notables: {notable_count}, Small nodes: {small_count}.")
print(f"Min distance between any two nodes: {min_dist:.1f} px  pair={min_pair}")
print(f"Min distance between any two keystones: {min_keystone_dist:.1f} px  pair={min_keystone_pair}")
print(f"Overlapping pairs (<45px): {overlap_count}")
