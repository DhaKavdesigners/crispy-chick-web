import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  ShoppingBag, 
  Users, 
  Bike, 
  Sliders, 
  ShieldCheck, 
  LogOut,
  Terminal,
  Cpu,
  KeyRound
} from 'lucide-react';

export const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  liveOrdersCount = 0, 
  onlineRidersCount = 0, 
  onLock,
  onOpenSecretVault 
}) => {
  const navItems = [
    {
      id: 'war-room',
      code: '01',
      label: 'LIVE_COMMAND',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'inspector',
      code: '02',
      label: 'ORDER_INSPECTOR',
      icon: Search,
      sublabel: 'Trace Lifecycle'
    },
    {
      id: 'orders',
      code: '03',
      label: 'ORDERS_MATRIX',
      icon: ShoppingBag,
      badge: liveOrdersCount > 0 ? `${liveOrdersCount} ACTIVE` : null,
      badgeColor: 'bg-red-950/60 text-red-400 border border-red-800/60'
    },
    {
      id: 'customers',
      code: '04',
      label: 'CUSTOMER_REGISTRY',
      icon: Users,
      sublabel: 'Fraud & Bans'
    },
    {
      id: 'fleet',
      code: '05',
      label: 'FLEET_TELEMETRY',
      icon: Bike,
      badge: onlineRidersCount > 0 ? `${onlineRidersCount} ONLINE` : null,
      badgeColor: 'bg-[#181822] text-slate-300 border border-[#272736]'
    },
    {
      id: 'security',
      code: '06',
      label: 'SYSTEM_CONFIG',
      icon: Sliders,
      sublabel: 'POS & Fees'
    }
  ];

  return (
    <aside className="w-64 bg-[#0c0c10] border-r border-[#1f1f26] flex flex-col justify-between flex-shrink-0 min-h-screen select-none font-mono">
      {/* Brand Header */}
      <div>
        <div className="p-4 border-b border-[#1f1f26]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center justify-center p-1.5 flex-shrink-0">
              <img src="./logo_rm_bg.png" className="w-7 h-7 object-contain" alt="Crispy Chick Logo" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-xs tracking-wider text-white">CRISPY_CHICK</h1>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-red-950/60 text-red-400 border border-red-800/50">
                  ROOT
                </span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">KGF_NODE // OPS_HUD</p>
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="p-2.5 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-all group ${
                  isActive
                    ? 'bg-red-600 text-white font-black'
                    : 'text-slate-400 hover:text-white hover:bg-[#16161f]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] font-bold ${isActive ? 'text-white' : 'text-slate-600'}`}>
                    &gt;
                  </span>
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-red-400'}`} />
                  <div className="text-left">
                    <span className="block leading-none tracking-wide text-[11px] font-bold">{item.label}</span>
                    {item.sublabel && (
                      <span className={`text-[9px] mt-0.5 block leading-none ${isActive ? 'text-red-100' : 'text-slate-500'}`}>{item.sublabel}</span>
                    )}
                  </div>
                </div>

                {item.badge && (
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black font-mono ${isActive ? 'bg-black/30 text-white' : (item.badgeColor || 'bg-slate-800 text-slate-300')}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Lock */}
      <div className="p-3 border-t border-[#1f1f26] space-y-2">
        <div 
          onClick={onOpenSecretVault}
          title="Access Classified Security Vault (Founder Only)"
          className="flex items-center justify-between p-2.5 rounded-xl bg-[#111116] hover:bg-[#16161f] border border-[#1f1f26] hover:border-red-800/60 cursor-pointer transition group"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-950/50 text-red-400 border border-red-800/40 flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition">
              <KeyRound className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white leading-none">ROOT_ADMIN</p>
              <p className="text-[9px] text-red-400 font-mono mt-0.5 leading-none">AUTH: MASTER 🔒</p>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onLock();
            }}
            title="Lock Session"
            className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[9px] text-slate-600 text-center font-mono">
          SYS_VER: v1.0.4-RED_OPS • KGF_HQ
        </p>
      </div>
    </aside>
  );
};
export default Sidebar;
