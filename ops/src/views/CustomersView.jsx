import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Search, 
  ShieldAlert, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  ShoppingBag, 
  Calendar, 
  Ban, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  UserX, 
  Terminal,
  Filter,
  DollarSign,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export const CustomersView = ({ 
  customers = [], 
  orders = [], 
  onToggleBanCustomer, 
  onDeleteCustomer 
}) => {
  // Filter States
  const [searchNamePhone, setSearchNamePhone] = useState('');
  const [searchAddressOrPin, setSearchAddressOrPin] = useState('');
  
  // Price / Spend Filter States
  const [spendOperator, setSpendOperator] = useState('all'); // 'all' | 'more_than' | 'less_than' | 'between'
  const [spendMin, setSpendMin] = useState('');
  const [spendMax, setSpendMax] = useState('');

  // Status Filter
  const [filterBanned, setFilterBanned] = useState('all'); // 'all' | 'active' | 'banned'
  const [filterOrderCount, setFilterOrderCount] = useState('all'); // 'all' | '1_plus' | '3_plus' | 'zero'

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Universal Confirmation Modal State
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '[EXECUTE]',
    variant: 'warning',
    action: null
  });

  // Map order stats per phone + collect PINs & locations
  const customerStats = useMemo(() => {
    const stats = {};
    orders.forEach(o => {
      const p = (o.customerPhone || '').split(' / ')[0].replace(/\D/g, '');
      if (!p) return;
      if (!stats[p]) {
        stats[p] = { 
          count: 0, 
          spent: 0, 
          lastOrder: o.createdAt || 0,
          pinCodes: new Set(),
          locations: []
        };
      }
      stats[p].count += 1;
      if (['successfully_delivered', 'delivered', 'completed'].includes(o.status)) {
        stats[p].spent += Number(o.totalAmount || 0);
      }
      if (o.deliveryPin) stats[p].pinCodes.add(String(o.deliveryPin).trim());
      if (o.addressDetails) stats[p].locations.push(o.addressDetails);
      if (o.landmarks) stats[p].locations.push(o.landmarks);
      if (o.createdAt && o.createdAt > stats[p].lastOrder) {
        stats[p].lastOrder = o.createdAt;
      }
    });
    return stats;
  }, [orders]);

  // Multi-Criteria Customer Filter
  const filteredCustomers = useMemo(() => {
    return customers.filter(c => {
      const cleanPhone = (c.phone || c.id || '').replace(/\D/g, '');
      const stats = customerStats[cleanPhone] || { count: 0, spent: 0, pinCodes: new Set(), locations: [] };
      const isBanned = c.isBanned === true;

      // 1. Security Ban Filter
      if (filterBanned === 'active' && isBanned) return false;
      if (filterBanned === 'banned' && !isBanned) return false;

      // 2. Order Frequency Filter
      if (filterOrderCount === '1_plus' && stats.count < 1) return false;
      if (filterOrderCount === '3_plus' && stats.count < 3) return false;
      if (filterOrderCount === 'zero' && stats.count > 0) return false;

      // 3. Name & Phone Search
      if (searchNamePhone.trim()) {
        const q = searchNamePhone.toLowerCase().trim();
        const name = (c.name || '').toLowerCase();
        if (!name.includes(q) && !cleanPhone.includes(q)) return false;
      }

      // 4. Unified Address & PIN Code Search (Smart location / PIN matching)
      if (searchAddressOrPin.trim()) {
        const q = searchAddressOrPin.toLowerCase().trim();
        const digits = q.replace(/\D/g, '');

        // Check if query matches PIN
        const cPins = [
          c.deliveryPin ? String(c.deliveryPin).trim() : null,
          c.pin ? String(c.pin).trim() : null,
          c.pincode ? String(c.pincode).trim() : null,
          ...Array.from(stats.pinCodes)
        ];
        (c.addresses || []).forEach(a => {
          if (a.pin) cPins.push(String(a.pin).trim());
          if (a.pincode) cPins.push(String(a.pincode).trim());
        });
        const matchesPin = digits.length >= 3 && cPins.some(p => p && p.includes(digits));

        // Check if query matches Address, Area, Landmark
        const addr = (c.address || '').toLowerCase();
        const landmark = (c.landmarks || '').toLowerCase();
        const savedAddrs = (c.addresses || []).map(a => `${a.address || ''} ${a.landmark || ''}`).join(' ').toLowerCase();
        const orderAddrs = stats.locations.join(' ').toLowerCase();
        const combined = `${addr} ${landmark} ${savedAddrs} ${orderAddrs}`;
        const matchesText = combined.includes(q);

        if (!matchesPin && !matchesText) return false;
      }

      // 5. Ordered Price / Total Spend Filter (More than / Less than / Between)
      const spent = stats.spent;
      if (spendOperator === 'more_than' && spendMin) {
        if (spent < Number(spendMin)) return false;
      } else if (spendOperator === 'less_than' && spendMax) {
        if (spent > Number(spendMax)) return false;
      } else if (spendOperator === 'between') {
        if (spendMin && spent < Number(spendMin)) return false;
        if (spendMax && spent > Number(spendMax)) return false;
      }

      return true;
    });
  }, [
    customers, 
    customerStats, 
    searchNamePhone, 
    searchAddressOrPin, 
    spendOperator, 
    spendMin, 
    spendMax, 
    filterBanned, 
    filterOrderCount
  ]);

  // Reset All Filters
  const handleResetFilters = () => {
    setSearchNamePhone('');
    setSearchAddressOrPin('');
    setSpendOperator('all');
    setSpendMin('');
    setSpendMax('');
    setFilterBanned('all');
    setFilterOrderCount('all');
  };

  const hasActiveFilters = 
    searchNamePhone || 
    searchAddressOrPin || 
    spendOperator !== 'all' || 
    filterBanned !== 'all' || 
    filterOrderCount !== 'all';

  // Ban / Unban Prompt
  const handleToggleBanPrompt = (customer) => {
    const cleanPhone = customer.phone || customer.id;
    const isCurrentlyBanned = customer.isBanned === true;

    if (isCurrentlyBanned) {
      setConfirmConfig({
        isOpen: true,
        title: 'LIFT_BLACKLIST_LOCKOUT?',
        message: `Restore ordering authorization for client ${customer.name || cleanPhone} (${cleanPhone})? Public ordering window will re-enable.`,
        confirmText: '[RESTORE_ACCESS]',
        variant: 'primary',
        action: async () => {
          await onToggleBanCustomer(cleanPhone, false);
        }
      });
    } else {
      const reason = window.prompt(
        `Enter blacklist reason for ${cleanPhone}:`,
        customer.banReason || 'Repeated order cancellations / abusive behavior'
      );
      if (reason === null) return;

      setConfirmConfig({
        isOpen: true,
        title: 'BLACKLIST_AND_LOCKOUT_CLIENT?',
        message: `Permanently BAN client ${customer.name || cleanPhone} (${cleanPhone}) from ordering checkout?\n\nReason: "${reason}"`,
        confirmText: '[EXECUTE_BLACKLIST]',
        variant: 'danger',
        action: async () => {
          await onToggleBanCustomer(cleanPhone, true, reason);
        }
      });
    }
  };

  // Remove Customer Prompt
  const handleDeleteCustomerPrompt = (customer) => {
    const cleanPhone = customer.phone || customer.id;
    setConfirmConfig({
      isOpen: true,
      title: 'PURGE_CLIENT_PROFILE?',
      message: `Permanently remove client record "${customer.name || cleanPhone}" (${cleanPhone}) from the database?`,
      confirmText: '[PURGE_RECORD]',
      variant: 'danger',
      action: async () => {
        await onDeleteCustomer(cleanPhone);
      }
    });
  };

  return (
    <div className="space-y-5 font-mono">
      {/* Top Banner HUD */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold">&gt;</span>
            <h2 className="text-xs font-bold tracking-wider text-white uppercase">
              CLIENT_DATABASE // SECURITY_REGISTRY
            </h2>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            LOCATION_PINPOINT • POSTAL_PIN_FILTERS • SPEND_THRESHOLDS • FRAUD_LOCKOUTS
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition ${
              showAdvancedFilters || hasActiveFilters
                ? 'bg-red-950/50 text-red-400 border-red-800/60'
                : 'bg-[#181822] text-slate-300 hover:text-white border-[#272736]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-red-400" />
            <span>[FILTERS: {hasActiveFilters ? 'ACTIVE' : 'EXPAND'}]</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              title="Reset all filters"
              className="px-3 py-2 bg-[#181822] hover:bg-[#272736] text-slate-400 hover:text-white rounded-xl text-xs flex items-center gap-1 border border-[#272736] transition"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-400" />
              <span>[CLEAR]</span>
            </button>
          )}
        </div>
      </div>

      {/* Multi-Criteria Search & Filter Panel */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-4 space-y-3.5 shadow-lg">
        {/* Primary Row: Name/Phone + Unified Address/PIN + Spend Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* 1. Name & Phone */}
          <div className="relative">
            <label className="block text-[10px] text-slate-400 uppercase font-bold mb-1">
              // CLIENT_NAME / PHONE
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="grep name or phone..."
                value={searchNamePhone}
                onChange={(e) => setSearchNamePhone(e.target.value)}
                className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition font-mono"
              />
            </div>
          </div>

          {/* 2. Unified Address / Area / PIN Code */}
          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-bold mb-1">
              // ADDRESS / AREA / PIN_CODE
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Search area, street, or 6-digit PIN..."
                value={searchAddressOrPin}
                onChange={(e) => setSearchAddressOrPin(e.target.value)}
                className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none transition font-mono"
              />
            </div>
          </div>

          {/* 3. Spend Threshold Operator */}
          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-bold mb-1">
              // ORDER_SPEND_CRITERIA
            </label>
            <select
              value={spendOperator}
              onChange={(e) => setSpendOperator(e.target.value)}
              className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none font-mono"
            >
              <option value="all">ANY_SPEND_AMOUNT</option>
              <option value="more_than">&gt; SPENT MORE THAN</option>
              <option value="less_than">&lt; SPENT LESS THAN</option>
              <option value="between">BETWEEN RANGE (MIN-MAX)</option>
            </select>
          </div>
        </div>

        {/* Dynamic Amount Inputs (when spendOperator != 'all') */}
        {spendOperator !== 'all' && (
          <div className="pt-2 border-t border-[#1f1f26] flex flex-wrap items-center gap-3">
            <span className="text-[10px] text-red-400 uppercase font-bold flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-red-500" />
              <span>SPEND_AMOUNT_FILTER:</span>
            </span>

            {(spendOperator === 'more_than' || spendOperator === 'between') && (
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400 font-mono">Min ₹:</span>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 500"
                  value={spendMin}
                  onChange={(e) => setSpendMin(e.target.value)}
                  className="w-28 bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none"
                />
              </div>
            )}

            {(spendOperator === 'less_than' || spendOperator === 'between') && (
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400 font-mono">Max ₹:</span>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 2000"
                  value={spendMax}
                  onChange={(e) => setSpendMax(e.target.value)}
                  className="w-28 bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none"
                />
              </div>
            )}
          </div>
        )}

        {/* Status Chips Row */}
        <div className="pt-2 border-t border-[#1f1f26] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 uppercase font-bold">// STATUS:</span>
            <div className="flex bg-[#09090b] border border-[#1f1f26] rounded-xl p-1 text-[10px]">
              <button
                onClick={() => setFilterBanned('all')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterBanned === 'all' ? 'bg-red-600 text-white font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setFilterBanned('active')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterBanned === 'active' ? 'bg-[#181822] text-slate-200 border border-[#272736]' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                ACTIVE
              </button>
              <button
                onClick={() => setFilterBanned('banned')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterBanned === 'banned' ? 'bg-red-950/50 text-red-400 border border-red-800/60' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                LOCKED ({customers.filter(c => c.isBanned).length})
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 uppercase font-bold">// FREQUENCY:</span>
            <div className="flex bg-[#09090b] border border-[#1f1f26] rounded-xl p-1 text-[10px]">
              <button
                onClick={() => setFilterOrderCount('all')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterOrderCount === 'all' ? 'bg-[#181822] text-white border border-[#272736]' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                ANY_TX
              </button>
              <button
                onClick={() => setFilterOrderCount('1_plus')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterOrderCount === '1_plus' ? 'bg-[#181822] text-red-400 border border-red-800/60' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                1+ ORDERS
              </button>
              <button
                onClick={() => setFilterOrderCount('3_plus')}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  filterOrderCount === '3_plus' ? 'bg-[#181822] text-red-400 border border-red-800/60' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                3+ ORDERS
              </button>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-bold">
            FILTERED_MATCHES: <span className="text-red-400 font-mono text-xs">{filteredCustomers.length}</span> / {customers.length}
          </div>
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse font-mono">
            <thead>
              <tr className="border-b border-[#1f1f26] bg-[#09090b] text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-2.5 px-4">CLIENT_IDENTITY</th>
                <th className="py-2.5 px-4">DELIVERY_COORDINATES &amp; PIN</th>
                <th className="py-2.5 px-4 text-center">TX_COUNT</th>
                <th className="py-2.5 px-4 text-right">LIFETIME_SPEND</th>
                <th className="py-2.5 px-4 text-center">AUTH_STATUS</th>
                <th className="py-2.5 px-4 text-right">OPERATIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f26]">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-slate-600">
                    <UserX className="w-7 h-7 mx-auto text-slate-700 mb-2" />
                    <p className="font-bold text-xs text-slate-400">NO_RECORDS_MATCHED_FILTER_CRITERIA</p>
                    <p className="text-[11px] text-slate-600 mt-1">Adjust location, PIN code, or spend amount settings.</p>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map(customer => {
                  const cleanPhone = customer.phone || customer.id;
                  const stats = customerStats[cleanPhone] || { count: 0, spent: 0, pinCodes: new Set(), locations: [] };
                  const isBanned = customer.isBanned === true;
                  const customerPin = customer.deliveryPin || customer.pin || customer.pincode || Array.from(stats.pinCodes)[0] || null;

                  return (
                    <tr 
                      key={cleanPhone}
                      className={`hover:bg-[#16161f] transition ${isBanned ? 'bg-red-950/20' : ''}`}
                    >
                      {/* Customer Name & Phone */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-white text-xs">
                          {customer.name || 'ANONYMOUS_CLIENT'}
                        </div>
                        <div className="flex items-center gap-1 text-red-400 text-[11px] mt-0.5">
                          <Phone className="w-3 h-3 text-slate-500" />
                          <a href={`tel:${cleanPhone}`} className="hover:underline">
                            {cleanPhone}
                          </a>
                        </div>
                      </td>

                      {/* Address & PIN */}
                      <td className="py-3 px-4 max-w-xs text-slate-300 text-xs">
                        <div className="truncate font-medium">
                          {customer.address || customer.addresses?.[0]?.address || 'NO_RECORDED_STREET'}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          {(customer.landmarks || customer.addresses?.[0]?.landmark) && (
                            <span className="text-[10px] text-slate-500 truncate flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-red-500/70 flex-shrink-0" />
                              <span>{customer.landmarks || customer.addresses?.[0]?.landmark}</span>
                            </span>
                          )}
                          {customerPin && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#09090b] border border-[#1f1f26] text-red-400 font-bold flex-shrink-0">
                              PIN: {customerPin}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Orders Count */}
                      <td className="py-3 px-4 text-center">
                        <span className="text-[10px] text-slate-300 bg-[#09090b] px-2 py-0.5 rounded border border-[#1f1f26]">
                          {stats.count} TX
                        </span>
                      </td>

                      {/* Lifetime Spend */}
                      <td className="py-3 px-4 text-right">
                        <span className="font-bold text-white text-xs">
                          ₹{stats.spent.toLocaleString('en-IN')}
                        </span>
                      </td>

                      {/* Security Status Badge */}
                      <td className="py-3 px-4 text-center">
                        {isBanned ? (
                          <div className="inline-flex flex-col items-center">
                            <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-red-950/50 text-red-400 border border-red-800/60 flex items-center gap-1">
                              <ShieldAlert className="w-3 h-3" />
                              <span>LOCKED</span>
                            </span>
                            {customer.banReason && (
                              <span className="text-[8px] text-red-400/70 max-w-[120px] truncate mt-0.5">
                                {customer.banReason}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#181822] text-slate-300 border border-[#272736] inline-flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-slate-400" />
                            <span>CLEARED</span>
                          </span>
                        )}
                      </td>

                      {/* Actions: Ban/Unban & Delete */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleToggleBanPrompt(customer)}
                            className={`px-2.5 py-1 rounded font-bold text-[10px] transition flex items-center gap-1 ${
                              isBanned
                                ? 'bg-[#181822] hover:bg-[#272736] text-slate-300 hover:text-white border border-[#272736]'
                                : 'bg-red-950/50 text-red-400 hover:bg-red-600 hover:text-white border border-red-800/60'
                            }`}
                          >
                            <Ban className="w-3 h-3" />
                            <span>{isBanned ? '[UNLOCK]' : '[BLACKLIST]'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteCustomerPrompt(customer)}
                            title="Purge record from database"
                            className="p-1 rounded bg-[#181822] hover:bg-red-950/50 text-slate-400 hover:text-red-400 border border-[#272736] transition"
                          >
                            <Trash2 className="w-3 h-3" />
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

export default CustomersView;
