import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Bike, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Navigation, 
  KeyRound, 
  ExternalLink,
  Terminal,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export const OrderInspectorView = ({ orders = [], initialOrderId = '', onUpdateOrderStatus, fleetRiders = [] }) => {
  const [searchQuery, setSearchQuery] = useState(initialOrderId || '');
  const [selectedOrderId, setSelectedOrderId] = useState(initialOrderId || (orders[0]?.id || ''));

  // Universal Confirmation Modal State
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '[CONFIRM_OVERRIDE]',
    variant: 'warning',
    action: null
  });

  // Filter or search target order
  const selectedOrder = useMemo(() => {
    if (!selectedOrderId && !searchQuery.trim()) return orders[0] || null;
    const clean = searchQuery.trim().toLowerCase();
    return orders.find(o => 
      o.id === selectedOrderId ||
      (o.displayId && o.displayId.toLowerCase() === clean) ||
      (o.id && o.id.toLowerCase().includes(clean)) ||
      (o.customerPhone && o.customerPhone.includes(clean)) ||
      (o.customerName && o.customerName.toLowerCase().includes(clean))
    ) || orders.find(o => o.id === selectedOrderId) || orders[0] || null;
  }, [orders, selectedOrderId, searchQuery]);

  const formatTimestamp = (ts) => {
    if (!ts) return null;
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) +
           ' • ' + date.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Safe Google Maps link
  const getMapsUrl = (order) => {
    if (!order) return '#';
    if (order.gpsLat != null && order.gpsLng != null) {
      return `https://www.google.com/maps/dir/?api=1&destination=${order.gpsLat},${order.gpsLng}`;
    }
    const query = [order.addressDetails, order.landmarks, order.deliveryPin, 'KGF, Karnataka'].filter(Boolean).join(', ');
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query || 'KGF, Karnataka')}`;
  };

  // Force Status Prompt
  const handleForceStatusPrompt = (newStatus) => {
    const orderLabel = selectedOrder.displayId ? `#${selectedOrder.displayId}` : selectedOrder.id.slice(-6);
    setConfirmConfig({
      isOpen: true,
      title: `OVERRIDE_STATUS -> [${newStatus.toUpperCase()}]`,
      message: `Manually inject status override "${newStatus}" for ticket ${orderLabel}? Dispatches real-time websocket state to customer and rider terminals.`,
      confirmText: '[EXECUTE_OVERRIDE]',
      variant: 'warning',
      action: async () => {
        await onUpdateOrderStatus(selectedOrder.id, newStatus);
      }
    });
  };

  return (
    <div className="space-y-5 font-mono">
      {/* Search Header HUD */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <h2 className="text-sm font-black text-white tracking-wider uppercase">
                // 02_ORDER_INSPECTOR & AUDIT_LOG
              </h2>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Query Order ID, phone, or client handle to audit stage timestamps and logistics telemetry
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-96">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="grep order # or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 font-mono focus:outline-none transition pl-9"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-2 bg-[#181822] hover:bg-[#272736] text-xs font-bold text-slate-400 hover:text-white rounded-xl border border-[#272736] transition"
              >
                [CLR]
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-4 pt-3 border-t border-[#1f1f26] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] uppercase font-bold text-slate-500 whitespace-nowrap">// RECENT_TICKETS:</span>
          {orders.slice(0, 8).map(o => {
            const shortId = o.displayId || (o.id ? String(o.id).slice(-4) : '----').toUpperCase();
            const isSelected = selectedOrder?.id === o.id;
            return (
              <button
                key={o.id}
                onClick={() => {
                  setSelectedOrderId(o.id);
                  setSearchQuery(shortId);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition whitespace-nowrap ${
                  isSelected
                    ? 'bg-red-600 text-white font-black'
                    : 'bg-[#09090b] border border-[#1f1f26] text-slate-400 hover:text-white hover:border-slate-600'
                }`}
              >
                #{shortId}
              </button>
            );
          })}
        </div>
      </div>

      {!selectedOrder ? (
        <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-16 text-center space-y-3 shadow-lg">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
          <p className="text-sm font-bold text-white">[NO_TARGET_ORDER_SPECIFIED]</p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Input ticket ID (e.g. 4012), phone string, or click a recent ticket buffer above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left 2 Columns: Lifecycle Breadcrumbs & Details */}
          <div className="lg:col-span-2 space-y-5">
            {/* Order Card Overview */}
            <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1f1f26]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                      <span className="text-red-500">
                        #{selectedOrder.displayId || (selectedOrder.id ? String(selectedOrder.id).slice(-4) : '----').toUpperCase()}
                      </span>
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider border ${
                      selectedOrder.status === 'pending' ? 'bg-amber-950/40 text-amber-400 border-amber-800/40 animate-pulse' :
                      selectedOrder.status === 'preparing' ? 'bg-orange-950/40 text-orange-400 border-orange-800/40' :
                      selectedOrder.status === 'prepared' ? 'bg-blue-950/40 text-blue-400 border-blue-800/40' :
                      selectedOrder.status === 'out_for_delivery' ? 'bg-purple-950/40 text-purple-400 border-purple-800/40' :
                      selectedOrder.status === 'arrived' ? 'bg-red-950/40 text-red-400 border-red-800/40' :
                      ['successfully_delivered', 'delivered', 'completed'].includes(selectedOrder.status) ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' :
                      'bg-red-950/40 text-red-400 border-red-800/40'
                    }`}>
                      {selectedOrder.status === 'arrived' ? 'AT_DOORSTEP 📍' : selectedOrder.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">DOC_KEY: {selectedOrder.id}</p>
                </div>

                {/* Force status override buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-bold">// OVERRIDE:</span>
                  <button
                    onClick={() => handleForceStatusPrompt('prepared')}
                    className="px-2.5 py-1 bg-[#181822] hover:bg-[#272736] text-slate-300 hover:text-white rounded-lg text-xs font-bold border border-[#272736] transition"
                  >
                    [PREPARED]
                  </button>
                  <button
                    onClick={() => handleForceStatusPrompt('successfully_delivered')}
                    className="px-2.5 py-1 bg-red-950/50 hover:bg-red-600 text-red-400 hover:text-white rounded-lg text-xs font-black border border-red-800/60 transition"
                  >
                    [FORCE_DELIVER]
                  </button>
                </div>
              </div>

              {/* Minute-by-Minute 6-Stage Breadcrumb Lifecycle */}
              <div className="space-y-4 pt-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  // 01_STAGE_LIFECYCLE_AUDIT_TRAIL
                </h4>

                <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#1f1f26]">
                  {/* Step 1: Placed */}
                  <div className="flex items-start gap-3 relative">
                    <div className="w-7 h-7 rounded-full bg-red-950/50 text-red-400 border border-red-800/60 flex items-center justify-center text-xs font-black z-10 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">Order Placed by Customer</span>
                        <span className="text-[10px] text-red-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.createdAt) || 'Timestamp locked'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Cart payload of ₹{selectedOrder.totalAmount || 0} via [{selectedOrder.paymentMethod || 'COD'}].
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Shop Accepted */}
                  <div className="flex items-start gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10 flex-shrink-0 border ${
                      selectedOrder.acceptedAt 
                        ? 'bg-red-950/50 text-red-400 border-red-800/60' 
                        : 'bg-[#181822] text-slate-600 border-[#272736]'
                    }`}>
                      2
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">POS Counter Accepted Ticket</span>
                        <span className="text-[10px] text-red-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.acceptedAt) || (selectedOrder.status !== 'pending' ? 'ACCEPTED' : 'AWAITING_POS')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {selectedOrder.acceptedAt 
                          ? `Transferred into kitchen cooking pipeline.` 
                          : 'Order awaiting acceptance at store register.'}
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Kitchen Prepared */}
                  <div className="flex items-start gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10 flex-shrink-0 border ${
                      selectedOrder.preparedAt || ['prepared', 'out_for_delivery', 'arrived', 'successfully_delivered', 'delivered'].includes(selectedOrder.status)
                        ? 'bg-red-950/50 text-red-400 border-red-800/60' 
                        : 'bg-[#181822] text-slate-600 border-[#272736]'
                    }`}>
                      3
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">Kitchen Cooked & Packaged</span>
                        <span className="text-[10px] text-red-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.preparedAt) || (['prepared', 'out_for_delivery', 'arrived', 'successfully_delivered'].includes(selectedOrder.status) ? 'PACKAGED' : 'IN_PROGRESS')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Meal sealed in thermal delivery bag awaiting driver dispatch.
                      </p>
                    </div>
                  </div>

                  {/* Step 4: Dispatched to Rider */}
                  <div className="flex items-start gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10 flex-shrink-0 border ${
                      selectedOrder.dispatchedAt || ['out_for_delivery', 'arrived', 'successfully_delivered', 'delivered'].includes(selectedOrder.status)
                        ? 'bg-red-950/50 text-red-400 border-red-800/60' 
                        : 'bg-[#181822] text-slate-600 border-[#272736]'
                    }`}>
                      4
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">Dispatched to Logistics Unit</span>
                        <span className="text-[10px] text-red-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.dispatchedAt) || (['out_for_delivery', 'arrived', 'successfully_delivered'].includes(selectedOrder.status) ? 'IN_TRANSIT' : 'PENDING_DISPATCH')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Assigned Unit: <strong className="text-red-400 font-bold">{selectedOrder.assignedRider || selectedOrder.pickedUpBy || 'UNASSIGNED'}</strong>
                        {selectedOrder.riderPhone && ` (📞 ${selectedOrder.riderPhone})`}
                      </p>
                    </div>
                  </div>

                  {/* Step 5: Arrived at Doorstep */}
                  <div className="flex items-start gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10 flex-shrink-0 border ${
                      selectedOrder.arrivedAt || ['arrived', 'successfully_delivered', 'delivered'].includes(selectedOrder.status)
                        ? 'bg-red-950/50 text-red-400 border-red-800/60' 
                        : 'bg-[#181822] text-slate-600 border-[#272736]'
                    }`}>
                      5
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">Rider Reached Doorstep</span>
                        <span className="text-[10px] text-red-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.arrivedAt) || (['arrived', 'successfully_delivered'].includes(selectedOrder.status) ? 'AT_DESTINATION' : 'EN_ROUTE')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Driver on site ready for delivery handshake verification.
                      </p>
                    </div>
                  </div>

                  {/* Step 6: Delivered & Handshake Verified */}
                  <div className="flex items-start gap-3 relative">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10 flex-shrink-0 border ${
                      ['successfully_delivered', 'delivered', 'completed'].includes(selectedOrder.status)
                        ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/60' 
                        : selectedOrder.status === 'rejected' || selectedOrder.status === 'cancelled'
                        ? 'bg-red-950/50 text-red-400 border-red-800/60'
                        : 'bg-[#181822] text-slate-600 border-[#272736]'
                    }`}>
                      6
                    </div>
                    <div className="flex-1 bg-[#09090b] border border-[#1f1f26] p-3 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">
                          {selectedOrder.status === 'rejected' || selectedOrder.status === 'cancelled'
                            ? 'Order Voided / Cancelled'
                            : 'Handshake Verified & Delivered'}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">
                          {formatTimestamp(selectedOrder.deliveredAt) || (['successfully_delivered', 'delivered'].includes(selectedOrder.status) ? 'COMPLETED' : 'AWAITING_CODE')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {selectedOrder.rejectionReason 
                          ? `Void Reason: "${selectedOrder.rejectionReason}"` 
                          : ['successfully_delivered', 'delivered'].includes(selectedOrder.status)
                          ? `Payment verified & received. Handshake OTP validated.`
                          : 'Awaiting completion OTP token.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Itemized Order Ticket Bill */}
            <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-4 shadow-lg">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                // 02_ITEM_MANIFEST & LEDGER
              </h4>
              <div className="divide-y divide-[#1f1f26]">
                {(selectedOrder.items || []).map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-[11px] text-slate-500">QTY: {item.quantity || 1} • ₹{item.price || 0} each</p>
                    </div>
                    <span className="font-mono font-black text-white">
                      ₹{(item.price || 0) * (item.quantity || 1)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#1f1f26] flex items-center justify-between">
                <span className="font-bold text-white text-xs uppercase tracking-wider">TOTAL_COLLECTIBLE</span>
                <span className="font-mono font-black text-red-500 text-xl">
                  ₹{selectedOrder.totalAmount || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer & Recipient Intelligence */}
          <div className="space-y-5">
            {/* Delivery Destination & Map Pinpoint */}
            <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-4 shadow-lg">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>// RADAR_TARGET_GEO</span>
              </h4>

              <div className="p-3 bg-[#09090b] border border-[#1f1f26] rounded-xl space-y-1.5 text-xs">
                <p className="text-white font-medium">
                  {selectedOrder.addressDetails || selectedOrder.address || 'Address registered in order record'}
                </p>
                {selectedOrder.landmarks && (
                  <p className="text-[11px] text-slate-400">
                    <strong className="text-slate-200">LANDMARK:</strong> {selectedOrder.landmarks}
                  </p>
                )}
                {selectedOrder.deliveryPin && (
                  <p className="text-[11px] text-red-400 font-mono">
                    PIN_CODE: {selectedOrder.deliveryPin}
                  </p>
                )}
              </div>

              <a
                href={getMapsUrl(selectedOrder)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 transition uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4" />
                <span>[OPEN_GOOGLE_MAPS_RADAR]</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            {/* Recipient Details */}
            {selectedOrder.orderedForOther && (
              <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-black bg-amber-950/60 text-amber-400 border border-amber-800/50 uppercase">
                    [GIFT_RECIPIENT_ORDER]
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-white">RECIPIENT: {selectedOrder.recipientName}</p>
                  <p className="font-mono text-amber-400 font-bold">{selectedOrder.recipientPhone}</p>
                </div>
                <a
                  href={`tel:${selectedOrder.recipientPhone}`}
                  className="w-full py-2 bg-amber-950/40 hover:bg-amber-600 text-amber-400 hover:text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-amber-800/50 transition uppercase"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>[CALL_RECIPIENT]</span>
                </a>
              </div>
            )}

            {/* Customer Account Details */}
            <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-6 space-y-3 shadow-lg">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-red-500" />
                <span>// CLIENT_ENTITY_PROFILE</span>
              </h4>
              <div className="space-y-1 text-xs">
                <p className="font-bold text-white">{selectedOrder.customerName}</p>
                <p className="font-mono text-red-400 font-bold">{selectedOrder.customerPhone}</p>
              </div>
              <a
                href={`tel:${selectedOrder.customerPhone?.split(' / ')[0]}`}
                className="w-full py-2 bg-[#181822] hover:bg-[#272736] text-slate-300 hover:text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-[#272736] transition uppercase"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>[COMM_LINK_CLIENT]</span>
              </a>
            </div>

            {/* Handshake OTP Verification Badge */}
            <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 text-center space-y-2 shadow-lg">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block">
                // HANDSHAKE_VERIFICATION_TOKEN
              </span>
              <span className="text-3xl font-mono font-black text-red-500 tracking-widest block">
                {selectedOrder.displayId || selectedOrder.otp || '----'}
              </span>
              <span className="text-[9px] text-slate-500 block">
                Customer verifies this 4-digit code with rider upon doorstep arrival
              </span>
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

export default OrderInspectorView;
