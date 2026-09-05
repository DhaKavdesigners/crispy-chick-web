import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Eye, 
  Bike, 
  Trash2,
  Calendar,
  AlertTriangle,
  Terminal,
  Cpu,
  Layers,
  ShieldAlert
} from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export const OrdersControlView = ({ 
  orders = [], 
  fleetRiders = [], 
  onSelectOrder, 
  onUpdateOrderStatus,
  onDeleteOrder,
  onBatchDeleteOrders
}) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrderIds, setSelectedOrderIds] = useState(new Set());
  const [showPurgeModal, setShowPurgeModal] = useState(false);
  const [purgeCutoffDate, setPurgeCutoffDate] = useState('');

  // Universal Confirmation Modal State
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '[CONFIRM_PURGE]',
    variant: 'danger',
    action: null
  });

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      // Status filter
      if (statusFilter === 'active') {
        if (!['pending', 'preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status)) return false;
      } else if (statusFilter === 'delivered') {
        if (!['successfully_delivered', 'delivered', 'completed'].includes(o.status)) return false;
      } else if (statusFilter === 'rejected') {
        if (!['rejected', 'cancelled'].includes(o.status)) return false;
      } else if (statusFilter !== 'all') {
        if (o.status !== statusFilter) return false;
      }

      // Search filter
      if (!search.trim()) return true;
      const q = search.toLowerCase().trim();
      const id = (o.id || '').toLowerCase();
      const dispId = (o.displayId || '').toLowerCase();
      const name = (o.customerName || '').toLowerCase();
      const phone = (o.customerPhone || '').toLowerCase();
      const items = (o.items || []).map(i => i.name).join(' ').toLowerCase();

      return id.includes(q) || dispId.includes(q) || name.includes(q) || phone.includes(q) || items.includes(q);
    });
  }, [orders, search, statusFilter]);

  // Selection toggle
  const toggleSelectOrder = (orderId) => {
    setSelectedOrderIds(prev => {
      const next = new Set(prev);
      if (next.has(orderId)) next.delete(orderId);
      else next.add(orderId);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedOrderIds.size === filteredOrders.length) {
      setSelectedOrderIds(new Set());
    } else {
      setSelectedOrderIds(new Set(filteredOrders.map(o => o.id)));
    }
  };

  // Delete Single Order Prompt
  const handleDeleteOrderPrompt = (order) => {
    const orderLabel = order.displayId ? `#${order.displayId}` : order.id.slice(-6);
    setConfirmConfig({
      isOpen: true,
      title: `PURGE_ORDER_TICKET [${orderLabel}]`,
      message: `Permanently expunge order ticket ${orderLabel} (${order.customerName || 'Customer'}) from database? Irreversible operation.`,
      confirmText: '[EXECUTE_PURGE]',
      variant: 'danger',
      action: async () => {
        await onDeleteOrder(order.id);
        setSelectedOrderIds(prev => {
          const next = new Set(prev);
          next.delete(order.id);
          return next;
        });
      }
    });
  };

  // Batch Delete Selected Orders Prompt
  const handleBatchDeletePrompt = () => {
    const count = selectedOrderIds.size;
    if (count === 0) return;

    setConfirmConfig({
      isOpen: true,
      title: `BATCH_PURGE [${count}_ORDERS]`,
      message: `Permanently delete ${count} selected order tickets from Firestore? This action cannot be reversed.`,
      confirmText: `[PURGE_${count}_TICKETS]`,
      variant: 'danger',
      action: async () => {
        await onBatchDeleteOrders(Array.from(selectedOrderIds));
        setSelectedOrderIds(new Set());
      }
    });
  };

  // Purge Delivered & Cancelled Orders Prompt
  const handlePurgeCompletedPrompt = () => {
    const targets = orders.filter(o => ['successfully_delivered', 'delivered', 'completed', 'rejected', 'cancelled'].includes(o.status));
    if (targets.length === 0) {
      alert('No closed or cancelled tickets found to purge.');
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: `PURGE_ALL_ARCHIVED [${targets.length}_TICKETS]`,
      message: `Permanently delete all ${targets.length} completed, delivered, and cancelled orders? Active in-flight orders remain locked and safe.`,
      confirmText: `[EXPUNGE_${targets.length}_ARCHIVED]`,
      variant: 'danger',
      action: async () => {
        await onBatchDeleteOrders(targets.map(o => o.id));
        setShowPurgeModal(false);
      }
    });
  };

  // Purge Orders Older than Date Prompt
  const handlePurgeOlderThanPrompt = () => {
    if (!purgeCutoffDate) {
      alert('Please specify cutoff timestamp.');
      return;
    }
    const cutoffTime = new Date(purgeCutoffDate).getTime();
    const targets = orders.filter(o => (o.createdAt || 0) < cutoffTime);
    if (targets.length === 0) {
      alert(`No tickets registered prior to ${purgeCutoffDate}.`);
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: `PURGE_BEFORE_${purgeCutoffDate} [${targets.length}_TICKETS]`,
      message: `Permanently expunge ${targets.length} order tickets placed before ${purgeCutoffDate}? Irreversible operation.`,
      confirmText: `[EXPUNGE_${targets.length}_TICKETS]`,
      variant: 'danger',
      action: async () => {
        await onBatchDeleteOrders(targets.map(o => o.id));
        setShowPurgeModal(false);
      }
    });
  };

  const statusBadges = {
    pending: 'bg-amber-950/40 text-amber-400 border border-amber-800/40 animate-pulse',
    preparing: 'bg-orange-950/40 text-orange-400 border border-orange-800/40',
    prepared: 'bg-blue-950/40 text-blue-400 border border-blue-800/40',
    out_for_delivery: 'bg-purple-950/40 text-purple-400 border border-purple-800/40',
    arrived: 'bg-red-950/40 text-red-400 border border-red-800/40',
    successfully_delivered: 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/40',
    delivered: 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/40',
    rejected: 'bg-red-950/40 text-red-400 border border-red-800/40',
    cancelled: 'bg-red-950/40 text-red-400 border border-red-800/40'
  };

  return (
    <div className="space-y-5 font-mono">
      {/* Top Banner HUD */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black text-white tracking-wider uppercase">
              // 03_ORDERS_MATRIX & PURGE_MANAGER
            </h2>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Real-time status overrides, encrypted ticket stream, and selective / bulk ledger clearance
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {selectedOrderIds.size > 0 && (
            <button
              onClick={handleBatchDeletePrompt}
              className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs flex items-center gap-1.5 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>[PURGE_SELECTED ({selectedOrderIds.size})]</span>
            </button>
          )}

          <button
            onClick={() => setShowPurgeModal(true)}
            className="px-3.5 py-2 rounded-xl bg-[#181822] hover:bg-[#272736] text-slate-300 hover:text-white font-bold text-xs flex items-center gap-1.5 border border-[#272736] transition"
          >
            <Calendar className="w-3.5 h-3.5 text-red-500" />
            <span>[PURGE_ARCHIVES...]</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Terminal Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex bg-[#111116] border border-[#1f1f26] rounded-xl p-1 text-xs overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: `ALL_TICKETS (${orders.length})` },
            { id: 'active', label: 'IN_FLIGHT' },
            { id: 'delivered', label: 'CLOSED_OK' },
            { id: 'rejected', label: 'VOIDED' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap uppercase text-[11px] ${
                statusFilter === tab.id
                  ? 'bg-red-600 text-white font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="grep id, phone, items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#111116] border border-[#1f1f26] focus:border-red-500 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none w-full sm:w-80 transition font-mono"
          />
        </div>
      </div>

      {/* Orders Matrix Terminal Table */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1f1f26] bg-[#09090b] text-slate-400 uppercase font-mono text-[10px] tracking-wider">
                <th className="py-3 px-3 text-center w-10">
                  <input
                    type="checkbox"
                    checked={filteredOrders.length > 0 && selectedOrderIds.size === filteredOrders.length}
                    onChange={toggleSelectAll}
                    className="rounded bg-[#111116] border-[#272736] text-red-600 focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4">// TICKET_ID</th>
                <th className="py-3 px-4">// CLIENT_ENTITY</th>
                <th className="py-3 px-4">// CARGO_MANIFEST</th>
                <th className="py-3 px-4 text-center">// LIFECYCLE_STATUS</th>
                <th className="py-3 px-4 text-center">// DISPATCH_UNIT</th>
                <th className="py-3 px-4 text-right">// COMMANDS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f26]">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-slate-500">
                    <ShoppingBag className="w-8 h-8 mx-auto text-slate-700 mb-2" />
                    <p className="font-bold text-sm text-slate-400">[NO_MATCHING_TICKETS_FOUND]</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => {
                  const isSelected = selectedOrderIds.has(order.id);
                  const displayId = order.displayId ? `#${order.displayId}` : `#${order.id.slice(-6).toUpperCase()}`;

                  return (
                    <tr 
                      key={order.id}
                      className={`hover:bg-red-950/20 transition ${isSelected ? 'bg-red-950/30' : ''}`}
                    >
                      {/* Checkbox */}
                      <td className="py-3.5 px-3 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectOrder(order.id)}
                          className="rounded bg-[#09090b] border-[#272736] text-red-600 focus:ring-0 cursor-pointer"
                        />
                      </td>

                      {/* Order Details */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-red-400 text-sm">{displayId}</span>
                          {order.orderedForOther && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-950/40 text-amber-400 border border-amber-800/40">
                              GIFT
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {order.placementTime || (order.createdAt ? new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '—')}
                        </p>
                      </td>

                      {/* Customer */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white">{order.customerName || 'CUSTOMER'}</div>
                        <div className="font-mono text-slate-400 text-[11px] mt-0.5">{order.customerPhone}</div>
                      </td>

                      {/* Items & Bill */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="text-slate-300 truncate font-medium">
                          {(order.items || []).map(i => `${i.name} (x${i.quantity || 1})`).join(', ')}
                        </div>
                        <div className="font-mono font-black text-white mt-0.5">
                          ₹{order.totalAmount || 0}
                          <span className="text-[10px] text-slate-500 ml-1.5 font-normal">
                            [{order.paymentMethod || 'COD'}]
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 text-center">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider border inline-block ${
                          statusBadges[order.status] || 'bg-[#09090b] text-slate-400 border-[#1f1f26]'
                        }`}>
                          {order.status?.replace(/_/g, ' ')}
                        </span>
                      </td>

                      {/* Assigned Rider */}
                      <td className="py-3.5 px-4 text-center font-mono">
                        {order.assignedRider || order.pickedUpBy ? (
                          <span className="text-slate-200 font-bold flex items-center justify-center gap-1.5">
                            <Bike className="w-3.5 h-3.5 text-red-500" />
                            <span className="text-slate-200">{order.assignedRider || order.pickedUpBy}</span>
                          </span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* Deep Inspect */}
                          <button
                            type="button"
                            onClick={() => onSelectOrder(order.id)}
                            title="Audit Ticket Telemetry"
                            className="p-1.5 rounded-lg bg-[#09090b] hover:bg-[#181822] text-slate-400 hover:text-white border border-[#1f1f26] transition"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete Order */}
                          <button
                            type="button"
                            onClick={() => handleDeleteOrderPrompt(order)}
                            title="Purge Ticket"
                            className="p-1.5 rounded-lg bg-[#09090b] hover:bg-red-950/40 text-slate-500 hover:text-red-400 border border-[#1f1f26] hover:border-red-800/40 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: Clear / Purge Order History */}
      {showPurgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-5 shadow-2xl relative font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
                  <Trash2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white uppercase tracking-wider">// LEDGER_PURGE_PROTOCOL</h3>
                  <p className="text-[10px] text-slate-500">Expunge historical records from cloud database</p>
                </div>
              </div>
              <button
                onClick={() => setShowPurgeModal(false)}
                className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs font-bold flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Option 1: Clear all completed */}
              <div className="p-4 bg-[#09090b] border border-[#1f1f26] rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                  <span className="text-red-500">&gt;</span> OPTION 01: PURGE CLOSED &amp; VOIDED TICKETS
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Deletes all delivered, completed, rejected, and cancelled orders. Active in-flight orders are locked and safe.
                </p>
                <button
                  type="button"
                  onClick={handlePurgeCompletedPrompt}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl transition uppercase tracking-wider"
                >
                  [EXECUTE_ARCHIVE_PURGE]
                </button>
              </div>

              {/* Option 2: Date-based purge */}
              <div className="p-4 bg-[#09090b] border border-[#1f1f26] rounded-xl space-y-2.5">
                <h4 className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                  <span className="text-amber-400">&gt;</span> OPTION 02: CUTOFF DATE EXPUNGE
                </h4>
                <p className="text-[11px] text-slate-400">
                  Delete all orders placed prior to specified calendar date.
                </p>
                <input
                  type="date"
                  value={purgeCutoffDate}
                  onChange={(e) => setPurgeCutoffDate(e.target.value)}
                  className="w-full bg-[#111116] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={handlePurgeOlderThanPrompt}
                  className="w-full py-2.5 bg-[#181822] hover:bg-red-600 hover:text-white text-slate-300 font-black text-xs rounded-xl border border-[#272736] hover:border-red-600 transition uppercase tracking-wider"
                >
                  [EXPUNGE_PRIOR_TO_DATE]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default OrdersControlView;
