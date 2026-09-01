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

export const playBlissSound = () => {
  try {
    const blissSnd = new Audio('https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3');
    blissSnd.play().catch(e => console.warn("Audio playback notice:", e));
  } catch (err) {}
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
