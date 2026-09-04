import math
import json

nodes = {}
connections = {}

def add_node(nid, name, ntype, cat, x, y, desc, stats, icon='Sparkles', keystoneFlag=None, flavor=None):
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
        'flavor': flavor
    }
    connections[nid] = set()

def connect(id1, id2):
    if id1 in nodes and id2 in nodes:
        connections[id1].add(id2)
        connections[id2].add(id1)

def add_corridor(prefix, start_id, end_id, count, start_x, start_y, end_x, end_y, cat, stat_templates, arc_offset=0):
    prev_id = start_id
    for i in range(1, count + 1):
        t = i / (count + 1)
        # Smooth interpolation with perpendicular arc offset
        dx = end_x - start_x
        dy = end_y - start_y
        dist = math.hypot(dx, dy)
        norm_x = -dy / (dist or 1)
        norm_y = dx / (dist or 1)
        arc = math.sin(t * math.pi) * arc_offset
        
        x = start_x + dx * t + norm_x * arc
        y = start_y + dy * t + norm_y * arc
        
        nid = f"{prefix}_n{i}"
        stat = stat_templates[(i - 1) % len(stat_templates)]
        is_notable = (i % 4 == 0)
        
        add_node(
            nid,
            f"{stat['name']} Notable" if is_notable else f"{stat['name']} {i}",
            'notable' if is_notable else 'small',
            cat,
            f"Pathway node granting {stat['displayText']}.",
            x, y,
            [{'statKey': stat['statKey'], 'value': stat['value'] * 2 if is_notable else stat['value'], 'displayText': stat['displayText']}],
            icon='Shield' if is_notable else 'Sparkles'
        )
        connect(prev_id, nid)
        prev_id = nid
    connect(prev_id, end_id)

print("Builder initialized...")
