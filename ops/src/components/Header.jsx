import React, { useState, useEffect } from 'react';
import { Activity, Power, Terminal, Cpu, Eye, EyeOff } from 'lucide-react';
import ConfirmModal from './ConfirmModal';

export const Header = ({ storeSettings, onToggleStoreStatus, lastSynced, isStealthMode = false, onToggleStealth }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showHaltConfirm, setShowHaltConfirm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isOpen = storeSettings?.onlineOrderingWindow !== false;

  const handleToggleClick = () => {
    setShowHaltConfirm(true);
  };

  const handleConfirmToggle = async () => {
    setShowHaltConfirm(false);
    await onToggleStoreStatus();
  };

  return (
    <>
      <header className="h-16 bg-[#09090b] border-b border-[#1f1f26] px-6 flex items-center justify-between sticky top-0 z-30 font-mono">
        {/* Title & Live Pulse */}
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-red-500 font-bold">&gt;</span>
              <h2 className="text-xs font-bold text-white tracking-wider flex items-center gap-2">
                <span>CRISPY_CHICK // OPS_CORE</span>
              </h2>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/40 text-red-400 border border-red-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>SYNC: LIVE</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">
              LOCATION: KOLAR_GOLD_FIELDS • TELEMETRY_STREAM: ONLINE
            </p>
          </div>
        </div>

        {/* Controls & Status */}
        <div className="flex items-center gap-3">
          {/* Stealth Mode Toggle */}
          {onToggleStealth && (
            <button
              type="button"
              onClick={onToggleStealth}
              title="Toggle Privacy Mask (Mask confidential numbers when outsiders are near)"
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition border ${
                isStealthMode 
                  ? 'bg-red-950/50 text-red-400 border-red-800/60' 
                  : 'bg-[#111116] text-slate-400 hover:text-white border-[#1f1f26]'
              }`}
            >
              {isStealthMode ? <EyeOff className="w-3.5 h-3.5 text-red-400" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isStealthMode ? '[STEALTH: ON]' : '[STEALTH: OFF]'}</span>
            </button>
          )}

          {/* Clock */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#111116] border border-[#1f1f26] px-3 py-1.5 rounded-xl">
            <Activity className="w-3.5 h-3.5 text-red-500" />
            <span>{time}</span>
          </div>

          {/* Store Emergency Switch */}
          <div className="flex items-center gap-2.5 bg-[#111115] border border-[#1f1f26] px-3 py-1 rounded-xl">
            <div className="text-right hidden md:block">
              <span className="text-[9px] uppercase font-bold block text-slate-500">GATEWAY_STATUS</span>
              <span className={`text-[11px] font-bold ${isOpen ? 'text-emerald-400' : 'text-red-400'}`}>
                {isOpen ? 'ONLINE (ACTIVE)' : 'HALTED (LOCKED)'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleToggleClick}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                isOpen
                  ? 'bg-red-950/50 hover:bg-red-600 text-red-400 hover:text-white border border-red-800/60'
                  : 'bg-emerald-950/50 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-800/60'
              }`}
            >
              <Power className="w-3.5 h-3.5" />
              <span>{isOpen ? '[HALT_GATEWAY]' : '[REOPEN_GATEWAY]'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Confirmation Modal for Store Halt / Reopen */}
      <ConfirmModal
        isOpen={showHaltConfirm}
        title={isOpen ? "SECURITY_ALERT: HALT_ONLINE_GATEWAY?" : "GATEWAY_ACTION: REOPEN_STORE?"}
        message={isOpen
          ? "Halting the store gateway immediately closes the customer PWA checkout window. Ongoing in-flight deliveries will finish normally."
          : "Reopening will immediately restore public ordering across Kolar Gold Fields."
        }
        confirmText={isOpen ? "[HALT_NOW]" : "[ENABLE_GATEWAY]"}
        variant={isOpen ? "danger" : "primary"}
        onConfirm={handleConfirmToggle}
        onCancel={() => setShowHaltConfirm(false)}
      />
    </>
  );
};
export default Header;
