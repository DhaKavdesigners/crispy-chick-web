import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Lock, 
  Save, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  PhoneCall, 
  Send, 
  Eye, 
  EyeOff, 
  Server, 
  Layers, 
  Sliders, 
  Terminal, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export const SecuritySettingsView = ({ 
  storeSettings = {}, 
  onUpdateStoreSettings, 
  ordersCount = 0, 
  usersCount = 0, 
  ridersCount = 0 
}) => {
  // Shop Counter Credentials
  const [counterId, setCounterId] = useState('owner@crispychick.com');
  const [counterPasscode, setCounterPasscode] = useState(storeSettings.counterPasscode || 'crispy786');
  const [showCounterPass, setShowCounterPass] = useState(false);

  // Store Logistics & Charges
  const [storeOpen, setStoreOpen] = useState(storeSettings.onlineOrderingWindow !== false);
  const [deliveryFee, setDeliveryFee] = useState(storeSettings.deliveryFee ?? 0);
  const [freeDeliveryThreshold, setFreeDeliveryThreshold] = useState(storeSettings.freeDeliveryThreshold ?? 0);
  const [packagingFee, setPackagingFee] = useState(storeSettings.packagingFee ?? 0);
  const [storePhone, setStorePhone] = useState(storeSettings.storePhone || '9035733573');
  
  // Telegram Alerts
  const [telegramBotToken, setTelegramBotToken] = useState(storeSettings.telegramBotToken || '');
  const [telegramChatId, setTelegramChatId] = useState(storeSettings.telegramChatId || '');

  const [savingSettings, setSavingSettings] = useState(false);

  // Universal Confirmation Modal State
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '[CONFIRM_EXECUTION]',
    variant: 'warning',
    action: null
  });

  useEffect(() => {
    if (storeSettings) {
      setStoreOpen(storeSettings.onlineOrderingWindow !== false);
      if (storeSettings.counterPasscode) setCounterPasscode(storeSettings.counterPasscode);
      if (storeSettings.deliveryFee !== undefined) setDeliveryFee(storeSettings.deliveryFee);
      if (storeSettings.freeDeliveryThreshold !== undefined) setFreeDeliveryThreshold(storeSettings.freeDeliveryThreshold);
      if (storeSettings.packagingFee !== undefined) setPackagingFee(storeSettings.packagingFee);
      if (storeSettings.storePhone) setStorePhone(storeSettings.storePhone);
      if (storeSettings.telegramBotToken) setTelegramBotToken(storeSettings.telegramBotToken);
      if (storeSettings.telegramChatId) setTelegramChatId(storeSettings.telegramChatId);
    }
  }, [storeSettings]);

  // Save Counter Credentials with Confirmation
  const handleSaveCounterPrompt = (e) => {
    e.preventDefault();
    if (!counterPasscode.trim()) {
      alert('Please enter a valid counter passcode.');
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: 'ROTATE_POS_AUTH_SECRET',
      message: `Modify POS Cashier access secret to "${counterPasscode.trim()}"? Active sessions at #/shop-counter will require re-authentication immediately.`,
      confirmText: '[SAVE_AUTH_SECRET]',
      variant: 'warning',
      action: async () => {
        await onUpdateStoreSettings({
          counterPasscode: counterPasscode.trim(),
          counterEmail: counterId.trim()
        });
      }
    });
  };

  // Save Store Ordering Economics with Confirmation
  const handleSaveParamsPrompt = (e) => {
    e.preventDefault();
    setConfirmConfig({
      isOpen: true,
      title: 'DEPLOY_SYS_PARAMETERS',
      message: `Broadcast updated economic parameters to live client network?\n\n• Ordering State: ${storeOpen ? 'ONLINE' : 'HALTED'}\n• Base Delivery Fee: ₹${deliveryFee}\n• Free Delivery Threshold: ₹${freeDeliveryThreshold}\n• Packaging Fee: ₹${packagingFee}\n• Store Hotline: ${storePhone}`,
      confirmText: '[DEPLOY_PARAMETERS]',
      variant: 'primary',
      action: async () => {
        setSavingSettings(true);
        try {
          await onUpdateStoreSettings({
            onlineOrderingWindow: storeOpen,
            deliveryFee: Number(deliveryFee) || 0,
            freeDeliveryThreshold: Number(freeDeliveryThreshold) || 0,
            packagingFee: Number(packagingFee) || 0,
            storePhone: storePhone.trim(),
            telegramBotToken: telegramBotToken.trim(),
            telegramChatId: telegramChatId.trim()
          });
        } finally {
          setSavingSettings(false);
        }
      }
    });
  };

  return (
    <div className="space-y-5 pb-12 font-mono">
      {/* Top Banner HUD */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black text-white tracking-wider uppercase">
              // 06_SYSTEM_CONFIG & LOGISTICS_PARAMETERS
            </h2>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Configure POS gateway authentication, dispatch fee matrix, and real-time database storage telemetry
          </p>
        </div>

        <span className="px-3 py-1.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-mono font-bold flex items-center gap-2 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          KGF_CORE_SYNC_LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Card 1: Shop Counter POS Login & Passcode */}
        <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-4 shadow-lg">
          <div className="flex items-center gap-3 pb-3 border-b border-[#1f1f26]">
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-xs text-white uppercase tracking-wider">// POS_GATEWAY_CREDENTIALS</h3>
              <p className="text-[10px] text-slate-500">POS cashier authentication gate at <code className="text-red-400 bg-[#09090b] px-1 py-0.5 rounded font-mono">#/shop-counter</code></p>
            </div>
          </div>

          <form onSubmit={handleSaveCounterPrompt} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                OPERATOR_EMAIL_ID
              </label>
              <input
                type="text"
                value={counterId}
                onChange={(e) => setCounterId(e.target.value)}
                className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none"
              />
              <p className="text-[9px] text-slate-600 mt-1">Default operator email: <span className="text-slate-400">owner@crispychick.com</span></p>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                CASHIER_ACCESS_SECRET
              </label>
              <div className="relative">
                <input
                  type={showCounterPass ? "text" : "password"}
                  value={counterPasscode}
                  onChange={(e) => setCounterPasscode(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl pl-4 pr-10 py-2.5 text-xs text-red-400 font-mono tracking-wider focus:outline-none"
                  placeholder="Enter counter passcode"
                />
                <button
                  type="button"
                  onClick={() => setShowCounterPass(!showCounterPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showCounterPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] text-slate-500">
                Cashier can login with alias <span className="text-red-400 font-bold">"owner"</span> and secret.
              </span>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl flex items-center gap-1.5 transition uppercase tracking-wider"
              >
                <Save className="w-3.5 h-3.5" />
                <span>[SAVE_SECRET]</span>
              </button>
            </div>
          </form>
        </div>

        {/* Card 2: Database Storage & Zero-Bloat Audit */}
        <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-black text-xs text-white uppercase tracking-wider">// STORAGE_TELEMETRY_AUDIT</h3>
                <p className="text-[10px] text-slate-500">Live document counters linked to Firebase Firestore</p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-[#181822] text-slate-300 border border-[#272736]">
              FREE_TIER_OPTIMAL
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 bg-[#09090b] border border-[#1f1f26] rounded-xl text-center">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">// ORDERS</span>
              <span className="text-2xl font-black text-white font-mono mt-1 block">{ordersCount}</span>
              <span className="text-[9px] text-slate-600">LEDGER_TICKETS</span>
            </div>

            <div className="p-3.5 bg-[#09090b] border border-[#1f1f26] rounded-xl text-center">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">// CLIENTS</span>
              <span className="text-2xl font-black text-white font-mono mt-1 block">{usersCount}</span>
              <span className="text-[9px] text-slate-600">PROFILES</span>
            </div>

            <div className="p-3.5 bg-[#09090b] border border-[#1f1f26] rounded-xl text-center">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">// FLEET</span>
              <span className="text-2xl font-black text-red-400 font-mono mt-1 block">{ridersCount}</span>
              <span className="text-[9px] text-slate-600">UNITS</span>
            </div>
          </div>

          <div className="p-3 bg-[#09090b] border border-[#1f1f26] rounded-xl text-[10px] text-slate-400 leading-relaxed font-mono">
            <span className="text-red-400 font-bold">&gt; ZERO_STORAGE_BLOAT:</span> Direct on-demand queries against existing documents without continuous write loops. Zero billable API overhead.
          </div>
        </div>

        {/* Card 3: Store Parameters & Delivery Logistics */}
        <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-5 lg:col-span-2 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-black text-xs text-white uppercase tracking-wider">// ECONOMIC_DISPATCH_PARAMETERS</h3>
                <p className="text-[10px] text-slate-500">Live ordering gateway window, dynamic delivery tariffs, and emergency alerts</p>
              </div>
            </div>

            {/* Store Open/Halt Switch */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase">// ORDERING_WINDOW:</span>
              <button
                type="button"
                onClick={() => setStoreOpen(!storeOpen)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-2 transition uppercase ${
                  storeOpen
                    ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/60'
                    : 'bg-red-950/50 text-red-400 border border-red-800/60'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${storeOpen ? 'bg-emerald-400' : 'bg-red-500'}`}></span>
                <span>{storeOpen ? '[ONLINE: ACCEPTING_ORDERS]' : '[HALTED: STORE_LOCKED]'}</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSaveParamsPrompt} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  BASE_DELIVERY_FEE (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none"
                />
                <span className="text-[9px] text-slate-600">Currently ₹{deliveryFee} (Set to 0 for Free Delivery)</span>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  FREE_DELIVERY_THRESHOLD (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  value={freeDeliveryThreshold}
                  onChange={(e) => setFreeDeliveryThreshold(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none"
                />
                <span className="text-[9px] text-slate-600">Waived when cart &ge; ₹{freeDeliveryThreshold || '0'}</span>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  PACKAGING_SURCHARGE (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  value={packagingFee}
                  onChange={(e) => setPackagingFee(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none"
                />
                <span className="text-[9px] text-slate-600">Added to customer invoice payload</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#1f1f26]">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-red-500" />
                  STORE_HOTLINE_COMM
                </label>
                <input
                  type="tel"
                  value={storePhone}
                  onChange={(e) => setStorePhone(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Send className="w-3 h-3 text-slate-400" />
                  TELEGRAM_BOT_TOKEN
                </label>
                <input
                  type="text"
                  placeholder="7123456789:AA..."
                  value={telegramBotToken}
                  onChange={(e) => setTelegramBotToken(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Send className="w-3 h-3 text-slate-400" />
                  TELEGRAM_CHAT_ID
                </label>
                <input
                  type="text"
                  placeholder="-100192837482"
                  value={telegramChatId}
                  onChange={(e) => setTelegramChatId(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#1f1f26]">
              <span className="text-[10px] text-slate-500">
                Deployments propagate to customer PWA and POS Counter via Firebase websocket listeners.
              </span>
              <button
                type="submit"
                disabled={savingSettings}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl flex items-center gap-2 transition uppercase tracking-wider disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{savingSettings ? '[DEPLOYING...]' : '[DEPLOY_GLOBAL_CONFIG]'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Universal Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmConfig.isOpen}
        title={confirmConfig.title}
        message={confirmConfig.message}
        confirmText={confirmConfig.confirmText}
        variant={confirmConfig.variant}
        onConfirm={async () => {
          if (confirmConfig.action) await confirmConfig.action();
          setConfirmConfig({ ...confirmConfig, isOpen: false });
        }}
        onCancel={() => setConfirmConfig({ ...confirmConfig, isOpen: false })}
      />
    </div>
  );
};

export default SecuritySettingsView;
