// src/engine/SpatialGrid.ts

export interface SpatialEntity {
  id: string;
  x: number;
  y: number;
  radius: number;
  [key: string]: any;
}

export class SpatialGrid<T extends SpatialEntity> {
  private cellSize: number;
  private grid: Map<string, T[]> = new Map();

  constructor(cellSize: number = 120) {
    this.cellSize = cellSize;
  }

  private getKey(x: number, y: number): string {
    const cx = Math.floor(x / this.cellSize);
    const cy = Math.floor(y / this.cellSize);
    return `${cx}:${cy}`;
  }

  public clear(): void {
    this.grid.clear();
  }

  public insert(entity: T): void {
    const minCx = Math.floor((entity.x - entity.radius) / this.cellSize);
    const maxCx = Math.floor((entity.x + entity.radius) / this.cellSize);
    const minCy = Math.floor((entity.y - entity.radius) / this.cellSize);
    const maxCy = Math.floor((entity.y + entity.radius) / this.cellSize);

    for (let cx = minCx; cx <= maxCx; cx++) {
      for (let cy = minCy; cy <= maxCy; cy++) {
        const key = `${cx}:${cy}`;
        let list = this.grid.get(key);
        if (!list) {
          list = [];
          this.grid.set(key, list);
        }
        list.push(entity);
      }
    }
  }

  public queryRadius(x: number, y: number, radius: number): T[] {
    const results: T[] = [];
    const seen = new Set<string>();
    const minCx = Math.floor((x - radius) / this.cellSize);
    const maxCx = Math.floor((x + radius) / this.cellSize);
    const minCy = Math.floor((y - radius) / this.cellSize);
    const maxCy = Math.floor((y + radius) / this.cellSize);
    const r2 = radius * radius;

    for (let cx = minCx; cx <= maxCx; cx++) {
      for (let cy = minCy; cy <= maxCy; cy++) {
        const list = this.grid.get(`${cx}:${cy}`);
        if (list) {
          for (let i = 0; i < list.length; i++) {
            const entity = list[i];
            if (!seen.has(entity.id)) {
              seen.add(entity.id);
              const dx = entity.x - x;
              const dy = entity.y - y;
              const totalR = radius + entity.radius;
              if (dx * dx + dy * dy <= totalR * totalR) {
                results.push(entity);
              }
            }
          }
        }
      }
    }
    return results;
  }

  public findClosest(x: number, y: number, maxRadius: number = 800): T | null {
    const candidates = this.queryRadius(x, y, maxRadius);
    let closest: T | null = null;
    let minD2 = Infinity;

    for (const c of candidates) {
      const dx = c.x - x;
      const dy = c.y - y;
      const d2 = dx * dx + dy * dy;
      if (d2 < minD2) {
        minD2 = d2;
        closest = c;
      }
    }
    return closest;
  }
}
