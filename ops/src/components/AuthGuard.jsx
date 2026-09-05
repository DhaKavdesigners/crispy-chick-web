import React, { useState } from 'react';
import { Terminal, ShieldAlert, ArrowRight, Cpu, Lock } from 'lucide-react';

export const AuthGuard = ({ onUnlock, masterPasscode = '9035', dynamicPin = '' }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pin.trim()) {
      setError('ERR_EMPTY_TOKEN: Enter root security PIN.');
      return;
    }

    const trimmed = pin.trim();
    const isMatched = 
      trimmed === '9035' || 
      trimmed === 'crispy786' || 
      trimmed === masterPasscode || 
      (dynamicPin && trimmed === dynamicPin);

    if (isMatched) {
      setError('');
      localStorage.setItem('cc_ops_unlocked', 'true');
      onUnlock();
    } else {
      setError('ACCESS_DENIED: Invalid root token. Security lockout active.');
      setPin('');
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f1f5f9] font-mono flex items-center justify-center p-4 selection:bg-red-600 selection:text-white">
      <div className="w-full max-w-md bg-[#111116] border border-[#1f1f26] rounded-2xl p-7 shadow-2xl space-y-6 relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

        {/* Header HUD */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-[#1f1f26] pb-3">
            <span className="flex items-center gap-1.5 text-red-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              NODE: KGF-OPS-CORE-01
            </span>
            <span className="text-slate-500 font-mono">PORT: 5174</span>
          </div>

          <div className="text-center pt-3 pb-1 space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-red-950/40 border border-red-800/50 mx-auto flex items-center justify-center p-2 shadow-sm">
              <img src="./logo_rm_bg.png" className="w-12 h-12 object-contain" alt="Crispy Chick Logo" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-wider text-white">
                CRISPY_CHICK // OPS_COMMAND
              </h1>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Terminal Auth Guard • SuperAdmin Access
              </p>
            </div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span>root@crispy-ops:~# enter_password</span>
            </label>
            <input
              type="password"
              autoFocus
              maxLength={32}
              placeholder="••••••••"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError('');
              }}
              className="w-full bg-[#09090b] border border-[#272733] focus:border-red-500 rounded-xl px-4 py-3 text-center text-xl font-mono tracking-widest font-black text-white focus:outline-none transition"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-800/70 text-red-400 text-xs font-mono flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <span>[AUTHORIZE_SESSION]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-[10px] text-slate-500 font-mono flex items-center justify-center gap-2">
          <Cpu className="w-3 h-3 text-red-500/70" />
          <span>Cloud Isolated • Zero Bloat Architecture</span>
        </div>
      </div>
    </div>
  );
};
export default AuthGuard;
