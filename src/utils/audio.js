// Audio utilities for Crispy Chick Web

let soundInterval = null;
let audioCtx = null;

export const triggerKitchenBell = (isActive) => {
  if (!isActive) {
    if (soundInterval) {
      clearInterval(soundInterval);
      soundInterval = null;
    }
    if (audioCtx) {
      try {
        audioCtx.close().catch(() => {});
      } catch (e) {}
      audioCtx = null;
    }
    return;
  }

  if (soundInterval) return;

  const playBellSequence = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx || audioCtx.state === 'closed') {
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      for (let burst = 0; burst < 2; burst++) {
        const ringStart = now + (burst * 0.45);
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(880, ringStart);
        osc1.frequency.exponentialRampToValueAtTime(660, ringStart + 0.35);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1320, ringStart);
        osc2.frequency.exponentialRampToValueAtTime(990, ringStart + 0.35);

        gainNode.gain.setValueAtTime(0, ringStart);
        gainNode.gain.linearRampToValueAtTime(0.85, ringStart + 0.02);
        gainNode.gain.setValueAtTime(0.85, ringStart + 0.25);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ringStart + 0.55);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.start(ringStart);
        osc1.stop(ringStart + 0.6);
        osc2.start(ringStart);
        osc2.stop(ringStart + 0.6);
      }
    } catch (e) {
      console.warn("Audio synthesis notice:", e);
    }
  };

  playBellSequence();
  soundInterval = setInterval(playBellSequence, 3200);
};

export const playSoulfulChime = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;
    // Celestial, warm harmonic chime (C5, E5, G5, B5, C6) with soft attack and decay
    const notes = [
      { freq: 523.25, time: 0.00, dur: 1.2, vol: 0.22 }, // C5
      { freq: 659.25, time: 0.08, dur: 1.3, vol: 0.20 }, // E5
      { freq: 783.99, time: 0.16, dur: 1.4, vol: 0.18 }, // G5
      { freq: 987.77, time: 0.24, dur: 1.5, vol: 0.16 }, // B5
      { freq: 1046.50, time: 0.32, dur: 1.6, vol: 0.15 } // C6
    ];

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.Q.setValueAtTime(1, now);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, now);

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    notes.forEach(({ freq, time, dur, vol }) => {
      const start = now + time;
      const osc = ctx.createOscillator();
      const overtone = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      overtone.type = 'sine';
      overtone.frequency.setValueAtTime(freq * 2, start);

      noteGain.gain.setValueAtTime(0.0001, start);
      noteGain.gain.linearRampToValueAtTime(vol, start + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

      const overtoneGain = ctx.createGain();
      overtoneGain.gain.setValueAtTime(0.0001, start);
      overtoneGain.gain.linearRampToValueAtTime(vol * 0.22, start + 0.025);
      overtoneGain.gain.exponentialRampToValueAtTime(0.0001, start + (dur * 0.65));

      osc.connect(noteGain);
      overtone.connect(overtoneGain);
      overtoneGain.connect(noteGain);
      noteGain.connect(filter);

      osc.start(start);
      osc.stop(start + dur);
      overtone.start(start);
      overtone.stop(start + dur);
    });

    setTimeout(() => {
      try { ctx.close().catch(() => {}); } catch (e) {}
    }, 2200);
  } catch (err) {
    console.warn("Soulful chime error:", err);
  }
};

export const playOfflineAlertBeep = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const now = ctx.currentTime;
    
    // Two distinct attention pings (520Hz then 680Hz)
    const beeps = [
      { freq: 520, start: now, dur: 0.16 },
      { freq: 680, start: now + 0.20, dur: 0.24 }
    ];

    beeps.forEach(({ freq, start, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(0.35, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur);
    });

    setTimeout(() => {
      try { ctx.close().catch(() => {}); } catch(e){}
    }, 800);
  } catch(e) {
    console.warn("Offline alert sound error:", e);
  }
};

export const playBlissSound = () => {
  // Delegate to soulful chime for pleasant, smooth tone without irritating jarring sound
  playSoulfulChime();
};

export const playOtpTone = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {}
};
