import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { updateOrderStatus, subscribeOrders, subscribeRiders } from '../firebase/firestore';
import { triggerKitchenBell, playBlissSound } from '../utils/audio';
import { MENU_CATALOG } from '../data/menu';
import { 
  ChefHat, Bell, BellOff, Power, Check, X, Clock, 
  Bike, CheckCircle2, ChevronRight, LogOut, ArrowLeft,
  DollarSign, PackageCheck, AlertTriangle, Search
} from 'lucide-react';

export const ShopCounterView = () => {
  const { signOut } = useAuth();
  const { isOpenOrdering, saveStoreOpenState, menuConfig, saveMenuConfigState } = useApp();

  const [orders, setOrders] = useState([]);
  const [riders, setRiders] = useState([]);
  const [selectedRiders, setSelectedRiders] = useState({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'menu' | 'history'
  const [searchQuery, setSearchQuery] = useState('');

  const prevOrdersRef = useRef([]);

  // Subscribe to live orders
  useEffect(() => {
    const unsub = subscribeOrders((data) => {
      setOrders(data);
    });
    const unsubRiders = subscribeRiders((data) => {
      setRiders(data.filter(r => r.verified === true || r.name));
    });
    return () => {
      if (unsub) unsub();
      if (unsubRiders) unsubRiders();
    };
  }, []);

  // Ring Kitchen Bell if there are pending orders
  const hasPending = orders.some(o => o.status === 'pending');
  useEffect(() => {
    if (soundEnabled && hasPending) {
      triggerKitchenBell(true);
    } else {
      triggerKitchenBell(false);
    }
    return () => triggerKitchenBell(false);
  }, [hasPending, soundEnabled]);

  // Status transitions
  const handleAccept = async (orderId) => {
    await updateOrderStatus(orderId, 'preparing');
  };

  const handleReject = async (orderId) => {
    if (window.confirm("Are you sure you want to reject this order?")) {
      await updateOrderStatus(orderId, 'rejected');
    }
  };

  const handleMarkPrepared = async (orderId) => {
    await updateOrderStatus(orderId, 'prepared');
  };

  const handleAssignRider = async (orderId) => {
    const riderName = selectedRiders[orderId] || (riders[0] ? riders[0].name : 'Assigned Rider');
    const riderDoc = riders.find(r => r.name === riderName);
    await updateOrderStatus(orderId, 'prepared', {
      assignedRider: riderName,
      riderPhone: riderDoc?.phone || '',
      dispatchedAt: Date.now()
    });
  };

  const handleCompleteOrder = async (orderId) => {
    await updateOrderStatus(orderId, 'delivered', { deliveredAt: Date.now() });
    playBlissSound();
  };

  // Menu pricing & availability handlers
  const handleToggleItemStock = async (itemName) => {
    const current = menuConfig[itemName] || {};
    const updated = {
      ...menuConfig,
      [itemName]: {
        ...current,
        available: current.available !== undefined ? !current.available : false
      }
    };
    await saveMenuConfigState(updated);
  };

  const handleUpdatePrice = async (itemName, newPrice) => {
    const current = menuConfig[itemName] || {};
    const updated = {
      ...menuConfig,
      [itemName]: {
        ...current,
        price: Math.max(0, Number(newPrice))
      }
    };
    await saveMenuConfigState(updated);
  };

  // Filtered order lists
  const activeOrders = orders.filter(o => ['pending', 'preparing', 'prepared', 'out_for_delivery'].includes(o.status));
  const completedOrders = orders.filter(o => ['delivered', 'successfully_delivered', 'rejected', 'cancelled'].includes(o.status));

  // Today's revenue
  const todaysRevenue = orders
    .filter(o => ['delivered', 'successfully_delivered', 'completed'].includes(o.status))
    .reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  return (
    <div className="min-h-screen bg-cafe-black text-white pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-cafe-card border-b border-neutral-800 px-4 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold font-serif text-amber-400">Shop Counter & Kitchen POS</h1>
            <p className="text-[10px] text-neutral-400">Crispy Chick KGF Operator Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Alarm Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border transition ${
              soundEnabled
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-500'
            }`}
            title={soundEnabled ? "Kitchen Bell Enabled" : "Kitchen Bell Muted"}
          >
            {soundEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
          </button>

          {/* Store Open/Close Toggle */}
          <button
            onClick={() => saveStoreOpenState(!isOpenOrdering)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition ${
              isOpenOrdering
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-red-500/20 border-red-500/50 text-red-300'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
            <span>{isOpenOrdering ? 'Store OPEN' : 'Store CLOSED'}</span>
          </button>

          {/* Sign Out */}
          <button
            onClick={() => signOut('OWNER_COUNTER')}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-400 transition"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 pt-4 space-y-6">
        {/* KPI Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-cafe-card border border-neutral-800 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-neutral-400">Active Kitchen Orders</span>
            <p className="text-2xl font-black text-amber-400 font-mono">{activeOrders.length}</p>
          </div>
          <div className="bg-cafe-card border border-neutral-800 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-neutral-400">Pending Acceptance</span>
            <p className="text-2xl font-black text-orange-400 font-mono">{orders.filter(o => o.status === 'pending').length}</p>
          </div>
          <div className="bg-cafe-card border border-neutral-800 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-neutral-400">Delivered Today</span>
            <p className="text-2xl font-black text-emerald-400 font-mono">{completedOrders.length}</p>
          </div>
          <div className="bg-cafe-card border border-neutral-800 rounded-2xl p-3.5 space-y-1">
            <span className="text-[10px] uppercase font-bold text-neutral-400">Today's Revenue</span>
            <p className="text-2xl font-black text-white font-mono">₹{todaysRevenue}</p>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800 max-w-md">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'active' ? 'bg-amber-500 text-cafe-black shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Live Kitchen Feed ({activeOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'menu' ? 'bg-amber-500 text-cafe-black shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Menu & Stock
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'history' ? 'bg-amber-500 text-cafe-black shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Order History
          </button>
        </div>

        {/* TAB 1: Live Kitchen Orders */}
        {activeTab === 'active' && (
          <div className="space-y-4">
            {activeOrders.length === 0 ? (
              <div className="text-center py-16 bg-cafe-card border border-neutral-800 rounded-3xl space-y-2">
                <ChefHat className="w-10 h-10 text-neutral-600 mx-auto" />
                <h3 className="font-bold text-sm text-neutral-300">No active kitchen orders</h3>
                <p className="text-xs text-neutral-500">Incoming customer orders will trigger the kitchen bell and show up here.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeOrders.map(order => (
                  <div
                    key={order.id}
                    className={`bg-cafe-card border rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-xl transition ${
                      order.status === 'pending'
                        ? 'border-amber-500 shadow-amber-500/10 animate-pulse-slow'
                        : 'border-neutral-800'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Order Header */}
                      <div className="flex justify-between items-start border-b border-neutral-800/80 pb-2">
                        <div>
                          <span className="text-[10px] text-neutral-400">Order ID: #{order.id.slice(-6)}</span>
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            PIN: <span className="font-mono text-amber-400 font-extrabold">{order.displayId}</span>
                          </h4>
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          order.status === 'pending' ? 'bg-amber-500 text-cafe-black' :
                          order.status === 'preparing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          order.status === 'prepared' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {order.status}
                        </span>
                      </div>

                      {/* Customer Info */}
                      <div className="text-xs space-y-0.5 text-neutral-300">
                        <p className="font-bold text-white">{order.customerName} <span className="font-normal text-neutral-400">({order.customerPhone})</span></p>
                        <p className="text-[11px] text-neutral-400 line-clamp-1">{order.deliveryAddress}</p>
                        <p className="text-[11px] text-amber-400/90 font-semibold">{order.landmarks}</p>
                      </div>

                      {/* Items List */}
                      <div className="bg-neutral-900/80 rounded-xl p-2.5 space-y-1 border border-neutral-800">
                        {order.items?.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-xs">
                            <span className="font-medium text-neutral-200">{item.name}</span>
                            <span className="font-bold text-amber-400 font-mono">x{item.quantity}</span>
                          </div>
                        ))}
                        <div className="border-t border-neutral-800 pt-1 flex justify-between text-xs font-extrabold text-white">
                          <span>Total Amount:</span>
                          <span className="text-amber-400 font-mono">₹{order.totalAmount}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons based on status */}
                    <div className="pt-2 border-t border-neutral-800 space-y-2">
                      {order.status === 'pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAccept(order.id)}
                            className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-cafe-black font-extrabold text-xs rounded-xl shadow transition"
                          >
                            Accept Order
                          </button>
                          <button
                            onClick={() => handleReject(order.id)}
                            className="px-3 py-2.5 bg-red-950 border border-red-800 text-red-300 font-bold text-xs rounded-xl hover:bg-red-900 transition"
                          >
                            Reject
                          </button>
                        </div>
                      )}

                      {order.status === 'preparing' && (
                        <button
                          onClick={() => handleMarkPrepared(order.id)}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                        >
                          <PackageCheck className="w-4 h-4" />
                          <span>Mark Food Ready & Prepared</span>
                        </button>
                      )}

                      {order.status === 'prepared' && (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <select
                              value={selectedRiders[order.id] || (order.assignedRider || '')}
                              onChange={(e) => setSelectedRiders({ ...selectedRiders, [order.id]: e.target.value })}
                              className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                            >
                              <option value="">Select Rider...</option>
                              {riders.map(r => (
                                <option key={r.id} value={r.name}>{r.name} ({r.phone || 'Fleet'})</option>
                              ))}
                            </select>
                            <button
                              onClick={() => handleAssignRider(order.id)}
                              className="px-3 py-2 bg-amber-500 hover:bg-amber-400 text-cafe-black font-bold text-xs rounded-xl transition"
                            >
                              Assign
                            </button>
                          </div>
                        </div>
                      )}

                      {order.status === 'out_for_delivery' && (
                        <div className="space-y-1 text-center">
                          <p className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                            <Bike className="w-3.5 h-3.5" />
                            <span>With {order.assignedRider || 'Rider'}</span>
                          </p>
                          <button
                            onClick={() => handleCompleteOrder(order.id)}
                            className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold text-xs rounded-xl transition"
                          >
                            Mark Delivered
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Menu Pricing & Stock Manager */}
        {activeTab === 'menu' && (
          <div className="bg-cafe-card border border-neutral-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div>
              <h3 className="font-bold text-base text-white">Live Menu & Stock Management</h3>
              <p className="text-xs text-neutral-400">Toggle items in/out of stock or update pricing in real time.</p>
            </div>

            <div className="space-y-6">
              {Object.entries(MENU_CATALOG).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 border-b border-neutral-800 pb-1">{category}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map(item => {
                      const custom = menuConfig[item.name] || {};
                      const isAvailable = custom.available !== undefined ? custom.available : true;
                      const price = custom.price !== undefined ? custom.price : item.price;

                      return (
                        <div key={item.name} className="bg-neutral-900/70 border border-neutral-800 p-3 rounded-xl flex items-center justify-between gap-3">
                          <div className="flex-1">
                            <p className={`text-xs font-bold ${isAvailable ? 'text-white' : 'text-neutral-500 line-through'}`}>{item.name}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-xs text-neutral-400">₹</span>
                              <input
                                type="number"
                                value={price}
                                onChange={(e) => handleUpdatePrice(item.name, e.target.value)}
                                className="w-16 bg-neutral-800 border border-neutral-700 rounded px-2 py-0.5 text-xs text-white focus:outline-none focus:border-amber-500"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => handleToggleItemStock(item.name)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition ${
                              isAvailable
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}
                          >
                            {isAvailable ? 'In Stock' : 'Out of Stock'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Order History */}
        {activeTab === 'history' && (
          <div className="bg-cafe-card border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="font-bold text-base text-white">Completed & Past Orders</h3>
            <div className="space-y-3">
              {completedOrders.map(order => (
                <div key={order.id} className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">#{order.id.slice(-6)} - {order.customerName}</p>
                    <p className="text-neutral-400 text-[11px]">{order.deliveryAddress} • PIN: {order.displayId}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-amber-400 text-sm">₹{order.totalAmount}</span>
                    <p className={`text-[10px] font-bold uppercase ${order.status === 'rejected' ? 'text-red-400' : 'text-emerald-400'}`}>{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopCounterView;
