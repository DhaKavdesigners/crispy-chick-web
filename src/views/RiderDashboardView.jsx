import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { updateOrderStatus, subscribeOrders, getRiderByPin, saveRiderProfile } from '../firebase/firestore';
import { playBlissSound } from '../utils/audio';
import { 
  Bike, Navigation, Phone, QrCode, CheckCircle2, ShieldCheck, 
  MapPin, LogOut, X, AlertCircle, Clock, ChevronRight, Lock
} from 'lucide-react';

export const RiderDashboardView = () => {
  const { riderUser, loginRiderByPin, signOut } = useAuth();
  const { allOrders } = useApp();

  // Rider Profile State
  const [riderPin, setRiderPin] = useState(() => localStorage.getItem('cc_rider_pin') || '');
  const [riderName, setRiderName] = useState(() => localStorage.getItem('cc_rider_name') || '');
  const [riderPhone, setRiderPhone] = useState(() => localStorage.getItem('cc_rider_phone') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!(localStorage.getItem('cc_rider_pin') && localStorage.getItem('cc_rider_name')));

  // Login flow state
  const [pinInput, setPinInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [loginStep, setLoginStep] = useState('pin'); // 'pin' | 'register'
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Delivery interaction state
  const [pinVerifications, setPinVerifications] = useState({});
  const [showQrModalForOrder, setShowQrModalForOrder] = useState(null);
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'history'

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    if (!pinInput || pinInput.length !== 6) {
      setLoginError('Please enter your 6-digit Rider PIN.');
      return;
    }

    setLoading(true);
    setLoginError('');

    try {
      const existingRider = await getRiderByPin(pinInput);
      if (existingRider && existingRider.name) {
        setRiderPin(pinInput);
        setRiderName(existingRider.name);
        setRiderPhone(existingRider.phone || '');
        localStorage.setItem('cc_rider_pin', pinInput);
        localStorage.setItem('cc_rider_name', existingRider.name);
        localStorage.setItem('cc_rider_phone', existingRider.phone || '');
        loginRiderByPin(existingRider);
        setIsLoggedIn(true);
      } else {
        setLoginStep('register');
      }
    } catch (err) {
      setLoginError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterRider = async (e) => {
    e.preventDefault();
    if (!nameInput.trim() || !phoneInput.trim()) {
      setLoginError('Please enter your full name and 10-digit mobile number.');
      return;
    }

    setLoading(true);
    try {
      const profile = { name: nameInput, phone: phoneInput, pin: pinInput, verified: true };
      await saveRiderProfile(pinInput, profile);
      setRiderPin(pinInput);
      setRiderName(nameInput);
      setRiderPhone(phoneInput);
      localStorage.setItem('cc_rider_pin', pinInput);
      localStorage.setItem('cc_rider_name', nameInput);
      localStorage.setItem('cc_rider_phone', phoneInput);
      loginRiderByPin(profile);
      setIsLoggedIn(true);
    } catch (err) {
      setLoginError('Failed to register rider profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('cc_rider_pin');
    localStorage.removeItem('cc_rider_name');
    localStorage.removeItem('cc_rider_phone');
    setIsLoggedIn(false);
    await signOut('DELIVERY_RIDER');
  };

  // Pickup and Start
  const handleStartDelivery = async (orderId) => {
    await updateOrderStatus(orderId, 'out_for_delivery', {
      riderName: riderName,
      riderPhone: riderPhone,
      dispatchedAt: Date.now()
    });
  };

  // Complete delivery with customer's 4-digit PIN
  const handleVerifyDeliveryPin = async (e, order) => {
    e.preventDefault();
    const entered = pinVerifications[order.id]?.trim();
    if (entered === String(order.displayId).trim()) {
      await updateOrderStatus(order.id, 'delivered', { deliveredAt: Date.now() });
      playBlissSound();
      setPinVerifications({ ...pinVerifications, [order.id]: '' });
    } else {
      alert("Incorrect Delivery PIN! Please ask the customer for their 4-digit Delivery PIN.");
    }
  };

  // Filter rider orders
  const myAssignedOrders = allOrders.filter(o => 
    (o.assignedRider === riderName || (!o.assignedRider && o.status === 'prepared')) &&
    ['prepared', 'out_for_delivery'].includes(o.status)
  );

  const myDeliveredOrders = allOrders.filter(o => 
    (o.assignedRider === riderName || o.riderName === riderName) &&
    ['delivered', 'successfully_delivered'].includes(o.status)
  );

  // If not logged in, show PIN login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-cafe-black text-white flex flex-col justify-center items-center px-4 py-8">
        <div className="max-w-sm w-full bg-cafe-card border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
              <Bike className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-amber-400">Rider Delivery Portal</h1>
            <p className="text-xs text-neutral-400">Crispy Chick Logistics Fleet</p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {loginStep === 'pin' ? (
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Enter 6-Digit Rider PIN</label>
                <input
                  type="password"
                  required
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••••"
                  className="w-full text-center text-xl font-mono tracking-widest bg-neutral-900 border border-neutral-800 rounded-xl py-3 text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-98 transition disabled:opacity-50"
              >
                {loading ? "Checking PIN..." : "Enter Delivery Portal"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterRider} className="space-y-4">
              <p className="text-xs text-amber-400 font-semibold text-center">New Rider Setup (PIN: {pinInput})</p>
              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Rider Full Name</label>
                <input
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="e.g. Suresh Kumar"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Rider Mobile Number</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="10-digit mobile"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition"
              >
                Save Profile & Start Delivering
              </button>
            </form>
          )}

          <div className="pt-2 text-center border-t border-neutral-800">
            <a href="#/" className="text-xs text-neutral-500 hover:text-amber-400">&larr; Return to Customer Menu</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cafe-black text-white pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-cafe-card border-b border-neutral-800 px-4 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Bike className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">{riderName}</h1>
            <p className="text-[10px] text-amber-400 font-mono">PIN: {riderPin} • Active Delivery Fleet</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-400 transition"
          title="Sign Out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 pt-4 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'active' ? 'bg-amber-500 text-cafe-black shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Assigned Deliveries ({myAssignedOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'history' ? 'bg-amber-500 text-cafe-black shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Delivered Today ({myDeliveredOrders.length})
          </button>
        </div>

        {/* TAB 1: Active Deliveries */}
        {activeTab === 'active' && (
          <div className="space-y-4">
            {myAssignedOrders.length === 0 ? (
              <div className="text-center py-16 bg-cafe-card border border-neutral-800 rounded-3xl space-y-2">
                <Bike className="w-10 h-10 text-neutral-600 mx-auto" />
                <h3 className="font-bold text-sm text-neutral-300">No active delivery orders</h3>
                <p className="text-xs text-neutral-500">Orders ready for pickup from the kitchen will appear here.</p>
              </div>
            ) : (
              myAssignedOrders.map(order => (
                <div key={order.id} className="bg-cafe-card border border-neutral-800 rounded-3xl p-5 space-y-4 shadow-xl">
                  {/* Order Top Bar */}
                  <div className="flex justify-between items-start border-b border-neutral-800 pb-3">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold">Order ID: #{order.id.slice(-6)}</span>
                      <h4 className="text-base font-bold text-white">{order.customerName}</h4>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      order.status === 'out_for_delivery'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {order.status === 'out_for_delivery' ? 'On the Way' : 'Ready at Counter'}
                    </span>
                  </div>

                  {/* Customer Call & Address Navigation */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-400" />
                        <span className="font-mono font-bold text-white">{order.customerPhone}</span>
                      </div>
                      <a
                        href={`tel:${order.customerPhone}`}
                        className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs hover:bg-emerald-500 transition"
                      >
                        Call Customer
                      </a>
                    </div>

                    <div className="p-3 bg-neutral-900 rounded-xl space-y-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white">{order.deliveryAddress}</p>
                          <p className="text-amber-400/90 text-[11px]">{order.landmarks}</p>
                        </div>
                      </div>

                      {/* Google Maps Direction Button */}
                      <a
                        href={
                          order.gpsLat && order.gpsLng
                            ? `https://www.google.com/maps/search/?api=1&query=${order.gpsLat},${order.gpsLng}`
                            : `https://www.google.com/maps/dir/?api=1&origin=Crispy+Chick+KGF&destination=${encodeURIComponent(order.landmarks || order.deliveryAddress)}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full py-2.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition"
                      >
                        <Navigation className="w-4 h-4 text-blue-400" />
                        <span>Open in Google Maps Navigation</span>
                      </a>
                    </div>
                  </div>

                  {/* Payment Collection Details */}
                  <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400">Collect Amount</span>
                      <p className="text-lg font-black font-mono text-white">₹{order.totalAmount}</p>
                    </div>

                    <button
                      onClick={() => setShowQrModalForOrder(order)}
                      className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Show UPI QR</span>
                    </button>
                  </div>

                  {/* Delivery Actions */}
                  <div className="border-t border-neutral-800 pt-3">
                    {order.status === 'prepared' ? (
                      <button
                        onClick={() => handleStartDelivery(order.id)}
                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition"
                      >
                        Pick Up & Start Delivery
                      </button>
                    ) : (
                      <form onSubmit={(e) => handleVerifyDeliveryPin(e, order)} className="space-y-2">
                        <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                          Enter Customer's 4-Digit Delivery PIN to Complete
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            required
                            maxLength={4}
                            value={pinVerifications[order.id] || ''}
                            onChange={(e) => setPinVerifications({ ...pinVerifications, [order.id]: e.target.value.replace(/\D/g, '') })}
                            placeholder="PIN"
                            className="flex-1 text-center font-mono font-bold text-lg bg-neutral-900 border border-neutral-800 rounded-xl py-2 text-white focus:border-amber-500 focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition"
                          >
                            Verify & Complete
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: Delivered History */}
        {activeTab === 'history' && (
          <div className="bg-cafe-card border border-neutral-800 rounded-3xl p-5 space-y-4 shadow-xl">
            <h3 className="font-bold text-base text-white">Your Delivered Orders</h3>
            <div className="space-y-3">
              {myDeliveredOrders.map(order => (
                <div key={order.id} className="p-3 bg-neutral-900 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">{order.customerName}</p>
                    <p className="text-[11px] text-neutral-400">{order.deliveryAddress}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-emerald-400">₹{order.totalAmount}</span>
                    <p className="text-[10px] text-neutral-500">Delivered</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* UPI QR Payment Modal */}
      {showQrModalForOrder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-cafe-card border border-neutral-800 w-full max-w-sm rounded-3xl p-6 space-y-4 text-center shadow-2xl">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-base text-white">Collect UPI Payment</h3>
              <button onClick={() => setShowQrModalForOrder(null)} className="p-1 text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <span className="text-xs text-neutral-400">Amount to collect:</span>
              <p className="text-2xl font-black font-mono text-amber-400">₹{showQrModalForOrder.totalAmount}</p>
            </div>

            {/* Dynamic UPI QR Generation */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-inner">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  `upi://pay?pa=9980838183@ybl&pn=Crispy%20Chick%20KGF&am=${showQrModalForOrder.totalAmount}&cu=INR&tn=Order_${showQrModalForOrder.displayId}`
                )}`}
                alt="UPI Payment QR"
                className="w-44 h-44 mx-auto"
              />
            </div>

            <p className="text-[11px] text-neutral-400">Customer can scan with PhonePe, Google Pay, or Paytm</p>

            <button
              onClick={() => setShowQrModalForOrder(null)}
              className="w-full py-3 bg-amber-500 text-cafe-black font-bold text-xs rounded-xl uppercase tracking-wider"
            >
              Close QR Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiderDashboardView;
