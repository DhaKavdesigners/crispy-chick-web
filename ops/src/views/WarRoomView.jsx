import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Bike, 
  Store, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  Terminal, 
  Activity, 
  Cpu 
} from 'lucide-react';

export const WarRoomView = ({ 
  orders = [], 
  fleetRiders = [], 
  storeSettings = {}, 
  onSelectOrder, 
  onNavigate,
  isStealthMode = false 
}) => {
  // Compute key metrics
  const activeOrders = orders.filter(o => ['pending', 'preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status));
  const deliveredOrders = orders.filter(o => ['successfully_delivered', 'delivered', 'completed'].includes(o.status));
  const rejectedOrders = orders.filter(o => ['rejected', 'cancelled'].includes(o.status));

  const totalGmv = deliveredOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);
  const totalLostRevenue = rejectedOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

  const onlineRiders = fleetRiders.filter(r => r.isOnline === true);
  const ridersOnDelivery = fleetRiders.filter(r => {
    return activeOrders.some(o => (o.assignedRider === r.name || o.pickedUpBy === r.name) && (o.status === 'out_for_delivery' || o.status === 'arrived'));
  });

  const isStoreOpen = storeSettings?.onlineOrderingWindow !== false;

  return (
    <div className="space-y-5 font-mono">
      {/* 4 Red & Black HUD Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Active In-Flight Orders */}
        <div className="bg-[#111116] border border-[#1f1f26] hover:border-red-600/40 rounded-2xl p-5 relative overflow-hidden transition shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span>// 01_IN_FLIGHT_JOBS</span>
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{activeOrders.length}</span>
            <span className="text-xs text-amber-400 font-bold">
              [{orders.filter(o => o.status === 'pending').length} QUEUED]
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1f1f26] flex items-center justify-between text-[10px] text-slate-500">
            <span>PREP: {orders.filter(o => o.status === 'preparing' || o.status === 'prepared').length}</span>
            <span className="text-red-400">TRANSIT: {orders.filter(o => o.status === 'out_for_delivery' || o.status === 'arrived').length}</span>
          </div>
        </div>

        {/* Card 2: Delivered GMV Revenue */}
        <div className="bg-[#111116] border border-[#1f1f26] hover:border-red-600/40 rounded-2xl p-5 relative overflow-hidden transition shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span>// 02_DELIVERED_GMV</span>
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-500">
              {isStealthMode ? '₹••••••' : `₹${totalGmv.toLocaleString('en-IN')}`}
            </span>
            <span className="text-xs text-slate-500">({deliveredOrders.length} closed)</span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1f1f26] flex items-center justify-between text-[10px] text-slate-500">
            <span>AVG: {isStealthMode ? '₹•••' : `₹${deliveredOrders.length ? Math.round(totalGmv / deliveredOrders.length) : 0}`}</span>
            <span className="text-slate-400">VOID: {isStealthMode ? '₹••••' : `₹${totalLostRevenue}`}</span>
          </div>
        </div>

        {/* Card 3: Active Fleet Drivers */}
        <div className="bg-[#111116] border border-[#1f1f26] hover:border-red-600/40 rounded-2xl p-5 relative overflow-hidden transition shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span>// 03_FLEET_UNITS</span>
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <Bike className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{onlineRiders.length}</span>
            <span className="text-xs text-slate-500">/ {fleetRiders.length} TOTAL</span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1f1f26] flex items-center justify-between text-[10px] text-slate-500">
            <span className="text-red-400">RIDING: {ridersOnDelivery.length}</span>
            <span className="text-slate-300">STANDBY: {Math.max(0, onlineRiders.length - ridersOnDelivery.length)}</span>
          </div>
        </div>

        {/* Card 4: Store Ordering Window */}
        <div className="bg-[#111116] border border-[#1f1f26] hover:border-red-600/40 rounded-2xl p-5 relative overflow-hidden transition shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span>// 04_STORE_PORT</span>
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className={`text-2xl font-black tracking-wider ${isStoreOpen ? 'text-emerald-400' : 'text-red-500'}`}>
              {isStoreOpen ? 'ACCEPTING' : 'HALTED'}
            </span>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1f1f26] flex items-center justify-between text-[10px] text-slate-500">
            <span>GATEWAY: {isStoreOpen ? 'ACTIVE' : 'LOCKED'}</span>
            <span className="text-red-400 font-bold">KGF_01</span>
          </div>
        </div>
      </div>

      {/* Real-Time Active Deliveries Stream & Fleet Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Active Orders Stream (2 Cols) */}
        <div className="lg:col-span-2 bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <h3 className="font-bold text-xs tracking-wider text-white">
                LIVE_IN_FLIGHT_DISPATCH_QUEUE
              </h3>
            </div>
            <button
              onClick={() => onNavigate('orders')}
              className="text-xs text-red-400 hover:text-red-300 font-bold flex items-center gap-1 transition"
            >
              <span>[EXPAND_ALL]</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {activeOrders.length === 0 ? (
            <div className="py-16 text-center text-slate-500 space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500/50" />
              <p className="font-bold text-xs text-slate-300">QUEUE_IDLE: ALL DELIVERIES COMPLETED</p>
              <p className="text-[11px] text-slate-600">No active kitchen tickets or in-flight drivers.</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {activeOrders.slice(0, 5).map(order => {
                const displayId = order.displayId ? `#${order.displayId}` : order.id.slice(-6);
                const orderMinutes = order.createdAt ? Math.floor((Date.now() - order.createdAt) / 60000) : 0;

                const statusBadges = {
                  pending: 'bg-amber-950/40 text-amber-400 border border-amber-800/40',
                  preparing: 'bg-orange-950/40 text-orange-400 border border-orange-800/40',
                  prepared: 'bg-blue-950/40 text-blue-400 border border-blue-800/40',
                  out_for_delivery: 'bg-purple-950/40 text-purple-400 border border-purple-800/40',
                  arrived: 'bg-red-950/40 text-red-400 border border-red-800/40'
                };

                return (
                  <div
                    key={order.id}
                    onClick={() => onSelectOrder(order.id)}
                    className="p-3.5 bg-[#09090b] hover:bg-[#16161f] border border-[#1f1f26] hover:border-red-600/40 rounded-xl transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-red-400 text-xs tracking-wider">{displayId}</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${statusBadges[order.status] || 'bg-slate-800'}`}>
                          {order.status?.replace(/_/g, ' ')}
                        </span>
                        {order.orderedForOther && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-950/40 text-amber-400 border border-amber-800/40">
                            RECIPIENT_GIFT
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white font-bold">{order.customerName}</p>
                      <p className="text-[10px] text-slate-500">
                        {(order.items || []).map(i => `${i.name} [x${i.quantity || 1}]`).join(', ')}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-[#1f1f26] pt-2 sm:pt-0">
                      <span className="font-bold text-white text-sm">₹{order.totalAmount || 0}</span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>T+{orderMinutes}m</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Fleet Roster Status (1 Col) */}
        <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
            <h3 className="font-bold text-xs tracking-wider text-white flex items-center gap-2">
              <Bike className="w-4 h-4 text-red-500" />
              <span>FLEET_RADAR</span>
            </h3>
            <button
              onClick={() => onNavigate('fleet')}
              className="text-xs text-red-400 hover:text-red-300 font-bold flex items-center gap-1 transition"
            >
              <span>[MANAGE]</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {fleetRiders.length === 0 ? (
              <p className="text-xs text-slate-600 text-center py-8">NO_UNITS_REGISTERED</p>
            ) : (
              fleetRiders.map(rider => {
                const activeJobCount = activeOrders.filter(o => o.assignedRider === rider.name || o.pickedUpBy === rider.name).length;
                return (
                  <div
                    key={rider.id || rider.name}
                    className="p-2.5 bg-[#09090b] border border-[#1f1f26] rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${rider.isOnline ? 'bg-red-500 animate-ping' : 'bg-slate-700'}`}></span>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">{rider.name}</p>
                        <p className="text-[10px] text-slate-500">PIN: {rider.pin || rider.id}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        activeJobCount > 0 ? 'bg-red-950/40 text-red-400 font-bold border border-red-800/40' : 'text-slate-600'
                      }`}>
                        {activeJobCount} TICKETS
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WarRoomView;
