// src/engine/SoundSystem.ts

export class SoundSystem {
  private ctx: AudioContext | null = null;
  public masterVolume: number = 0.7;
  public sfxVolume: number = 0.8;
  public musicVolume: number = 0.4;
  private musicOscillators: OscillatorNode[] = [];
  private musicGainNode: GainNode | null = null;
  private isMusicPlaying: boolean = false;

  private initContext(): AudioContext | null {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playAttack(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.12);

    gain.gain.setValueAtTime(0.2 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  public playSpellCast(type: 'fire' | 'cold' | 'lightning' | 'holy' = 'fire'): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    if (type === 'fire') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.18);
    } else if (type === 'cold') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
    } else if (type === 'lightning') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.setValueAtTime(1200, now + 0.05);
      osc.frequency.linearRampToValueAtTime(200, now + 0.16);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.linearRampToValueAtTime(659.25, now + 0.2); // E5
    }

    gain.gain.setValueAtTime(0.25 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  public playHit(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

    gain.gain.setValueAtTime(0.18 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  public playCritHit(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'square';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);

    gain.gain.setValueAtTime(0.22 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  public playItemDrop(rarity: 'normal' | 'magic' | 'rare' | 'unique' | 'currency'): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes =
      rarity === 'unique'
        ? [523.25, 659.25, 783.99, 1046.5] // C Major fanfare
        : rarity === 'rare'
        ? [440, 554.37, 659.25] // A Major triad
        : rarity === 'magic'
        ? [523.25, 659.25]
        : [659.25];

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + i * 0.06;

      osc.type = rarity === 'unique' ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      const vol = (rarity === 'unique' ? 0.35 : rarity === 'rare' ? 0.25 : 0.15) * this.masterVolume * this.sfxVolume;
      gain.gain.setValueAtTime(vol, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  }

  public playLevelUp(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const chords = [440, 554.37, 659.25, 880, 1108.73];

    chords.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.3 * this.masterVolume * this.sfxVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  }

  public playPotionUse(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.linearRampToValueAtTime(520, now + 0.15);

    gain.gain.setValueAtTime(0.2 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  public playDash(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);

    gain.gain.setValueAtTime(0.25 * this.masterVolume * this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  public playCraftSuccess(): void {
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [659.25, 830.61, 987.77, 1318.51];

    notes.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const st = now + idx * 0.05;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, st);

      gain.gain.setValueAtTime(0.25 * this.masterVolume * this.sfxVolume, st);
      gain.gain.exponentialRampToValueAtTime(0.001, st + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(st);
      osc.stop(st + 0.3);
    });
  }
}
