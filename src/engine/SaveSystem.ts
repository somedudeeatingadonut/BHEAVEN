// src/engine/SaveSystem.ts

import { CharacterSaveData, SaveSlotId } from '../types/character';

const SAVE_SLOTS_KEY = 'BHEAVEN_SAVE_SLOTS_V2';
const ACTIVE_SLOT_KEY = 'BHEAVEN_ACTIVE_SLOT_V2';

export interface SaveSlotsMap {
  slot_1: CharacterSaveData | null;
  slot_2: CharacterSaveData | null;
  slot_3: CharacterSaveData | null;
}

export class SaveSystem {
  public static getSlots(): SaveSlotsMap {
    try {
      const data = localStorage.getItem(SAVE_SLOTS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load slots from localStorage', e);
    }
    return {
      slot_1: null,
      slot_2: null,
      slot_3: null,
    };
  }

  public static getSlot(slotId: SaveSlotId): CharacterSaveData | null {
    const slots = this.getSlots();
    return slots[slotId] || null;
  }

  public static getActiveSlotId(): SaveSlotId {
    const active = localStorage.getItem(ACTIVE_SLOT_KEY);
    if (active === 'slot_1' || active === 'slot_2' || active === 'slot_3') {
      return active;
    }
    return 'slot_1';
  }

  public static setActiveSlotId(slotId: SaveSlotId): void {
    localStorage.setItem(ACTIVE_SLOT_KEY, slotId);
  }

  public static getActiveCharacter(): CharacterSaveData | null {
    const activeSlot = this.getActiveSlotId();
    return this.getSlot(activeSlot);
  }

  public static saveCharacterToSlot(slotId: SaveSlotId, charData: CharacterSaveData): void {
    try {
      const slots = this.getSlots();
      slots[slotId] = {
        ...charData,
        slotId,
        lastPlayedAt: Date.now(),
      };
      localStorage.setItem(SAVE_SLOTS_KEY, JSON.stringify(slots));
      this.setActiveSlotId(slotId);
    } catch (e) {
      console.error('Failed to save character to slot', e);
    }
  }

  public static deleteSlot(slotId: SaveSlotId): void {
    try {
      const slots = this.getSlots();
      slots[slotId] = null;
      localStorage.setItem(SAVE_SLOTS_KEY, JSON.stringify(slots));
    } catch (e) {
      console.error('Failed to delete slot', e);
    }
  }

  public static exportSaveToFile(charData: CharacterSaveData): void {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(charData, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute(
      'download',
      `bheaven_${charData.slotId}_${charData.name.toLowerCase()}_lvl${charData.level}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  public static importSaveFromJSON(jsonString: string, targetSlotId: SaveSlotId): CharacterSaveData | null {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && parsed.name && parsed.originId) {
        parsed.slotId = targetSlotId;
        this.saveCharacterToSlot(targetSlotId, parsed);
        return parsed;
      }
    } catch (e) {
      console.error('Invalid save JSON file', e);
    }
    return null;
  }
}
