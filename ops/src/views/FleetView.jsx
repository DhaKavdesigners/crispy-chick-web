import React, { useState } from 'react';
import { 
  Bike, 
  UserPlus, 
  Phone, 
  CheckCircle2, 
  Power, 
  Trash2, 
  Edit3, 
  Save, 
  X, 
  AlertCircle, 
  KeyRound, 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export const FleetView = ({ 
  fleetRiders = [], 
  orders = [], 
  onAddRider, 
  onUpdateRider, 
  onDeleteRider 
}) => {
  // Add Rider Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRiderName, setNewRiderName] = useState('');
  const [newRiderPhone, setNewRiderPhone] = useState('');
  const [newRiderVehicle, setNewRiderVehicle] = useState('Motorcycle');
  const [newRiderPin, setNewRiderPin] = useState('');

  // Edit Rider Modal State
  const [editingRider, setEditingRider] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editPin, setEditPin] = useState('');
  const [editVehicle, setEditVehicle] = useState('Motorcycle');

  // Locate Rider Modal State
  const [locateRider, setLocateRider] = useState(null);

  // Universal Confirmation Modal State
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: '[CONFIRM_EXECUTION]',
    variant: 'warning',
    action: null
  });

  // Count active live orders per rider
  const riderActiveJobs = {};
  orders.forEach(o => {
    if (['preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status)) {
      const rider = o.assignedRider || o.pickedUpBy;
      if (rider) {
        riderActiveJobs[rider] = (riderActiveJobs[rider] || 0) + 1;
      }
    }
  });

  // Open Edit Modal
  const handleOpenEdit = (rider) => {
    setEditingRider(rider);
    setEditName(rider.name || '');
    setEditPhone(rider.phone || '');
    setEditPin(rider.pin || rider.id || '');
    setEditVehicle(rider.vehicle || 'Motorcycle');
  };

  // Submit Add Rider with Confirmation
  const handleAddSubmitPrompt = (e) => {
    e.preventDefault();
    if (!newRiderName.trim() || !newRiderPhone.trim()) {
      alert('ERR_MISSING_ARGS: Enter Rider Name and Phone number.');
      return;
    }
    const finalPin = newRiderPin.trim() || Math.floor(1000 + Math.random() * 9000).toString();

    setConfirmConfig({
      isOpen: true,
      title: 'PROVISION_FLEET_UNIT?',
      message: `Authorize deployment of unit "${newRiderName.trim()}" with Phone: ${newRiderPhone.trim()} and Login PIN: ${finalPin}?`,
      confirmText: '[EXECUTE_ONBOARD]',
      variant: 'primary',
      action: async () => {
        await onAddRider({
          name: newRiderName.trim(),
          phone: newRiderPhone.trim(),
          vehicle: newRiderVehicle.trim() || 'Motorcycle',
          pin: finalPin,
          id: finalPin,
          isOnline: false,
          createdAt: Date.now()
        });
        setNewRiderName('');
        setNewRiderPhone('');
        setNewRiderVehicle('Motorcycle');
        setNewRiderPin('');
        setShowAddModal(false);
      }
    });
  };

  // Submit Edit Rider with Confirmation
  const handleEditSubmitPrompt = (e) => {
    e.preventDefault();
    if (!editName.trim() || !editPhone.trim() || !editPin.trim()) {
      alert('ERR_INVALID_DATA: Name, Phone, and Login PIN cannot be empty.');
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: 'OVERWRITE_UNIT_CREDENTIALS?',
      message: `Deploy new auth profile for ${editingRider.name}?\n\n• Unit: ${editName.trim()}\n• Comm: ${editPhone.trim()}\n• New PIN: ${editPin.trim()}\n• Vehicle: ${editVehicle.trim()}`,
      confirmText: '[APPLY_CHANGES]',
      variant: 'warning',
      action: async () => {
        await onUpdateRider(editingRider.id, {
          name: editName.trim(),
          phone: editPhone.trim(),
          pin: editPin.trim(),
          vehicle: editVehicle.trim()
        });
        setEditingRider(null);
      }
    });
  };

  // Toggle Online / Offline with Confirmation & Live Order Guard
  const handleToggleDutyPrompt = (rider) => {
    const isGoingOffline = rider.isOnline;
    const activeCount = riderActiveJobs[rider.name] || 0;

    if (isGoingOffline && activeCount > 0) {
      alert(`ERR_LOCKOUT: Unit ${rider.name} has ${activeCount} active order(s) in transit! Handshake required before duty termination.`);
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: isGoingOffline ? 'DEACTIVATE_UNIT_SHIFT?' : 'ACTIVATE_UNIT_DUTY?',
      message: isGoingOffline
        ? `Set unit ${rider.name} to OFFLINE status? Dispatch assignments will pause.`
        : `Set unit ${rider.name} to ONLINE status? Live order routing will enable.`,
      confirmText: isGoingOffline ? '[SET_OFFLINE]' : '[ACTIVATE_DUTY]',
      variant: isGoingOffline ? 'danger' : 'primary',
      action: async () => {
        await onUpdateRider(rider.id, {
          isOnline: !rider.isOnline,
          dutyStartTime: !rider.isOnline ? Date.now() : null
        });
      }
    });
  };

  // Delete Rider Prompt
  const handleDeletePrompt = (rider) => {
    const activeCount = riderActiveJobs[rider.name] || 0;
    if (activeCount > 0) {
      alert(`ERR_ACTIVE_TICKETS: Cannot delete ${rider.name}. Assigned ${activeCount} orders must be cleared.`);
      return;
    }

    setConfirmConfig({
      isOpen: true,
      title: `PURGE_FLEET_UNIT: "${rider.name}"?`,
      message: `Permanently delete this dispatch agent and revoke Login PIN (${rider.pin || rider.id}) from the database?`,
      confirmText: '[PURGE_RECORD]',
      variant: 'danger',
      action: async () => {
        await onDeleteRider(rider.id);
      }
    });
  };

  return (
    <div className="space-y-5 font-mono">
      {/* Top Banner */}
      <div className="bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold">&gt;</span>
            <h2 className="text-xs font-bold tracking-wider text-white uppercase">
              DISPATCH_FLEET // TELEMETRY_GRID
            </h2>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            UNIT_ROSTER • AUTH_TOKENS • SHIFT_CONTROLS • SATELLITE_GPS_EXTRACTOR
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-2 transition self-start sm:self-auto"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>[+ PROVISION_UNIT]</span>
        </button>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {fleetRiders.length === 0 ? (
          <div className="col-span-full bg-[#111116] border border-[#1f1f26] rounded-2xl p-16 text-center text-slate-500 space-y-2">
            <Bike className="w-8 h-8 mx-auto text-slate-700" />
            <p className="font-bold text-xs text-slate-400">NO_UNITS_PROVISIONED</p>
            <p className="text-[11px] text-slate-600">Click "[+ PROVISION_UNIT]" above to deploy your first driver.</p>
          </div>
        ) : (
          fleetRiders.map(rider => {
            const activeJobs = riderActiveJobs[rider.name] || 0;
            const riderPin = rider.pin || rider.id;

            return (
              <div
                key={rider.id || rider.name}
                className={`border rounded-2xl p-4 space-y-3 transition shadow-lg ${
                  rider.isOnline
                    ? 'border-red-600/50 bg-[#16161f]'
                    : 'border-[#1f1f26] bg-[#111116]'
                }`}
              >
                {/* Header: Rider Name & Status Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-base border ${
                      rider.isOnline 
                        ? 'bg-red-950/40 text-red-400 border-red-800/40' 
                        : 'bg-[#181822] text-slate-500 border-[#272736]'
                    }`}>
                      🛵
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs leading-tight">{rider.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{rider.vehicle || 'MOTORCYCLE'}</p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider ${
                    rider.isOnline
                      ? 'bg-red-950/60 text-red-400 border border-red-800/60'
                      : 'bg-slate-800/60 text-slate-500 border border-slate-700/50'
                  }`}>
                    {rider.isOnline ? 'ONLINE' : 'OFFLINE'}
                  </span>
                </div>

                {/* Login PIN & Comm Box */}
                <div className="bg-[#09090b] border border-[#1f1f26] rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <KeyRound className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[10px]">AUTH_PIN:</span>
                    </div>
                    <span className="font-mono font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-800/40 tracking-widest text-xs">
                      {riderPin}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#1f1f26]">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[10px]">COMM_LINE:</span>
                    </div>
                    <a href={`tel:${rider.phone}`} className="font-mono text-slate-300 hover:text-white text-xs">
                      {rider.phone || 'N/A'}
                    </a>
                  </div>
                </div>

                {/* Live Order Indicator & Satellite Pinpoint */}
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#1f1f26]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">TICKETS:</span>
                    <span className={`font-mono font-bold px-1.5 py-0.2 rounded text-[10px] ${
                      activeJobs > 0 ? 'bg-red-950/40 text-red-400 border border-red-800/40' : 'text-slate-600'
                    }`}>
                      {activeJobs} IN_TRANSIT
                    </span>
                  </div>

                  {/* Pinpoint Location Button */}
                  <button
                    type="button"
                    onClick={() => setLocateRider(rider)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-950/40 hover:bg-red-600 text-red-400 hover:text-white border border-red-800/50 font-mono text-[10px] transition"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>[LOCATE]</span>
                  </button>
                </div>

                {/* Bottom Actions: Edit, Duty Toggle, Delete */}
                <div className="flex items-center gap-2 pt-1.5 border-t border-[#1f1f26]">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(rider)}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#181822] hover:bg-[#272736] text-slate-300 font-mono text-[10px] flex items-center justify-center gap-1 border border-[#272736] transition"
                  >
                    <Edit3 className="w-3 h-3 text-red-400" />
                    <span>[EDIT]</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleDutyPrompt(rider)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-mono font-bold flex items-center justify-center gap-1 transition ${
                      rider.isOnline
                        ? 'bg-red-950/50 text-red-400 hover:bg-red-600 hover:text-white border border-red-800/60'
                        : 'bg-[#181822] text-slate-400 hover:bg-red-600 hover:text-white border border-[#272736]'
                    }`}
                  >
                    <Power className="w-3 h-3" />
                    <span>{rider.isOnline ? '[OFFLINE]' : '[ONLINE]'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeletePrompt(rider)}
                    title="Purge record"
                    className="p-1.5 rounded-lg bg-[#181822] hover:bg-red-950/50 text-slate-400 hover:text-red-400 border border-[#272736] transition"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* MODAL 1: Edit Rider Profile & Credentials */}
      {editingRider && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-500" />
                <h3 className="font-bold text-xs text-white uppercase tracking-wider">
                  OVERWRITE_UNIT_CREDENTIALS
                </h3>
              </div>
              <button
                onClick={() => setEditingRider(null)}
                className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs font-bold flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleEditSubmitPrompt} className="space-y-3">
              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  UNIT_NAME *
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  COMM_LINE (PHONE 10-DIGITS) *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  LOGIN_AUTH_PIN (4-6 DIGITS) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={editPin}
                  onChange={(e) => setEditPin(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-red-400 tracking-widest font-black focus:outline-none font-mono"
                />
                <p className="text-[9px] text-slate-600 mt-0.5">Driver logs in with this PIN immediately upon saving.</p>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  VEHICLE_DESIGNATION
                </label>
                <input
                  type="text"
                  value={editVehicle}
                  onChange={(e) => setEditVehicle(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setEditingRider(null)}
                  className="flex-1 py-2 bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs rounded-xl border border-[#272736]"
                >
                  [ABORT]
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl"
                >
                  [SAVE_CREDENTIALS]
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Onboard New Rider Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
              <div className="flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-red-500" />
                <h3 className="font-bold text-xs text-white uppercase tracking-wider">
                  PROVISION_DISPATCH_UNIT
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs font-bold flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmitPrompt} className="space-y-3">
              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  UNIT_CALLSIGN / NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Rajesh Kumar"
                  value={newRiderName}
                  onChange={(e) => setNewRiderName(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  COMM_LINE (PHONE 10-DIGITS) *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="9876543210"
                  value={newRiderPhone}
                  onChange={(e) => setNewRiderPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  LOGIN_AUTH_PIN (AUTO_GEN IF BLANK)
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Auto 4-digit code"
                  value={newRiderPin}
                  onChange={(e) => setNewRiderPin(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-red-400 placeholder:text-slate-600 tracking-widest font-bold focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  VEHICLE_DESIGNATION
                </label>
                <input
                  type="text"
                  placeholder="Splendor KA-08-E-1234"
                  value={newRiderVehicle}
                  onChange={(e) => setNewRiderVehicle(e.target.value)}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2 bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs rounded-xl border border-[#272736]"
                >
                  [ABORT]
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl"
                >
                  [DEPLOY_UNIT]
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Pinpoint Rider Live Location Modal */}
      {locateRider && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#111116] border border-[#1f1f26] rounded-2xl p-5 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <h3 className="font-bold text-xs text-white uppercase tracking-wider">
                  GPS_RADAR_LOCK // {locateRider.name}
                </h3>
              </div>
              <button
                onClick={() => setLocateRider(null)}
                className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 text-xs font-bold flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {locateRider.location?.lat && locateRider.location?.lng ? (
              <div className="space-y-3">
                <div className="p-3.5 bg-[#09090b] border border-[#1f1f26] rounded-xl space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">COORDINATES:</span>
                    <span className="font-mono text-red-400 font-bold">
                      {Number(locateRider.location.lat).toFixed(6)}, {Number(locateRider.location.lng).toFixed(6)}
                    </span>
                  </div>
                  {locateRider.location.updatedAt && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">LAST_PING:</span>
                      <span className="text-slate-300 font-mono">
                        {new Date(locateRider.location.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${locateRider.location.lat},${locateRider.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>[OPEN_MAPS_RADAR]</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            ) : (
              <div className="p-6 bg-[#09090b] border border-[#1f1f26] rounded-xl text-center space-y-2">
                <MapPin className="w-7 h-7 text-slate-600 mx-auto" />
                <p className="text-xs font-bold text-slate-400">NO_LIVE_GPS_BROADCAST</p>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  GPS coordinates automatically lock onto this radar when {locateRider.name} picks up an order in KGF.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${locateRider.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#181822] text-red-400 text-[11px] hover:bg-[#272736]"
                  >
                    <Phone className="w-3 h-3" />
                    <span>DIAL: {locateRider.phone}</span>
                  </a>
                </div>
              </div>
            )}
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

export default FleetView;
