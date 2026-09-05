import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_CATALOG, PROMO_BANNERS } from '../data/menu';
import { addOrder, getUserProfile, saveUserProfile, updateUserAddresses } from '../firebase/firestore';
import { playBlissSound, playOtpTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  ShoppingBag, Sun, Moon, User, Phone, MapPin, Navigation, 
  CheckCircle2, Clock, Bike, ShieldCheck, ChevronDown, ChevronUp, 
  Trash2, Plus, Minus, X, ArrowRight, Share2, AlertCircle, Copy, Sparkles, LogIn
} from 'lucide-react';

const KGF_PINS = ['563122', '563113', '563120', '563115', '563117', '563116'];
const KGF_AREA_NAMES = {
  '563122': 'Robertsonpet (Main KGF)',
  '563113': 'Andersonpet',
  '563120': 'Oorgaum',
  '563115': 'Bharathnagar / BEML Nagar',
  '563117': 'Champion Reefs',
  '563116': 'Marikuppam'
};

export const CustomerView = () => {
  const { 
    tray, addToTray, removeFromTray, updateQuantity, clearTray, totalTrayCount, subtotal,
    isOpenOrdering, theme, toggleTheme, currentUser, setCurrentUser,
    activeOrderIds, updateActiveOrderIds, updateActiveOrderId, floatingItems,
    menuConfig, allOrders
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isTrayDrawerOpen, setIsTrayDrawerOpen] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showActiveOrdersSheet, setShowActiveOrdersSheet] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Auto banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % PROMO_BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const categories = ['All', ...Object.keys(MENU_CATALOG)];

  const getResolvedPrice = (name, basePrice) => {
    if (menuConfig[name] && typeof menuConfig[name].price === 'number') {
      return menuConfig[name].price;
    }
    return basePrice;
  };

  const getResolvedAvailability = (name) => {
    if (menuConfig[name] && typeof menuConfig[name].available === 'boolean') {
      return menuConfig[name].available;
    }
    return true;
  };

  const gstRate = menuConfig.gstRate !== undefined ? Number(menuConfig.gstRate) : 5;
  const deliveryFee = menuConfig.deliveryFee !== undefined ? Number(menuConfig.deliveryFee) : 30;
  const calculatedGst = Math.round((subtotal * gstRate) / 100);
  const grandTotal = subtotal > 0 ? subtotal + calculatedGst + deliveryFee : 0;

  // Filter items
  const filteredCatalog = selectedCategory === 'All'
    ? Object.entries(MENU_CATALOG).flatMap(([cat, items]) => items.map(i => ({ ...i, category: cat })))
    : (MENU_CATALOG[selectedCategory] || []).map(i => ({ ...i, category: selectedCategory }));

  // Find customer active orders from global orders feed
  const myActiveOrders = allOrders.filter(o => 
    activeOrderIds.includes(o.id) || 
    (currentUser && o.customerPhone && o.customerPhone.includes(currentUser.phone))
  );

  return (
    <div className="min-h-screen bg-cafe-black text-white pb-32">
      {/* Floating Animated Items Drop to Tray */}
      {floatingItems.map(item => (
        <div
          key={item.id}
          className="floating-food fixed pointer-events-none z-50"
          style={{ left: `${item.startX}px`, top: `${item.startY}px` }}
        >
          <img src={item.image} alt="" className="w-12 h-12 object-cover rounded-full shadow-2xl border-2 border-amber-500" />
        </div>
      ))}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-cafe-card/95 backdrop-blur-md border-b border-neutral-800 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Crispy Chick Logo" className="w-10 h-10 object-contain rounded-full border border-amber-500/30" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold font-serif text-amber-400 tracking-wide">Crispy Chick KGF</h1>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                isOpenOrdering ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {isOpenOrdering ? '● Open' : '● Closed'}
              </span>
            </div>
            <p className="text-[10px] text-neutral-400">Fresh, Crispy & Delicious Delivery</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Active Orders Tracker Pill */}
          {myActiveOrders.length > 0 && (
            <button
              onClick={() => setShowActiveOrdersSheet(true)}
              className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1.5 animate-pulse"
            >
              <Bike className="w-3.5 h-3.5" />
              <span>{myActiveOrders.length} Active</span>
            </button>
          )}

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Profile / Login */}
          <button
            onClick={() => setShowProfileModal(true)}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 transition flex items-center gap-1.5"
            title="Account & Addresses"
          >
            <User className="w-4 h-4 text-amber-400" />
            {currentUser && <span className="text-xs font-medium hidden sm:inline">{currentUser.name.split(' ')[0]}</span>}
          </button>

          {/* Staff Login Link */}
          <a
            href="#/login"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 transition"
            title="Staff Login"
          >
            <LogIn className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 pt-4 space-y-6">
        {/* Banner Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 aspect-[21/9] sm:aspect-[24/9]">
          {PROMO_BANNERS.map((bannerUrl, idx) => (
            <img
              key={idx}
              src={bannerUrl}
              alt="Crispy Chick Banner"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                idx === currentBannerIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}
          {/* Carousel Indicators */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {PROMO_BANNERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBannerIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentBannerIndex ? 'w-6 bg-amber-400' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Horizontal Bar */}
        <div className="sticky top-[61px] z-30 bg-cafe-black/90 backdrop-blur-md py-2 -mx-4 px-4 overflow-x-auto no-scrollbar border-b border-neutral-800/80">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-cafe-black shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCatalog.map(item => {
            const price = getResolvedPrice(item.name, item.price);
            const isAvailable = getResolvedAvailability(item.name);
            const trayMatch = tray.find(i => i.name === item.name);

            return (
              <div
                key={item.name}
                className={`bg-cafe-card border border-neutral-800/80 rounded-2xl p-4 flex gap-3.5 transition-all duration-300 hover:border-amber-500/30 ${
                  !isAvailable ? 'opacity-50 grayscale' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-neutral-800 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500/90">{item.category}</span>
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">{item.name}</h3>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-extrabold text-amber-400">₹{price}</span>

                    {!isAvailable ? (
                      <span className="text-[10px] font-bold text-red-400 bg-red-950/60 px-2 py-1 rounded-md border border-red-800">
                        Out of Stock
                      </span>
                    ) : trayMatch ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-amber-500/40 rounded-xl px-2 py-1 shadow">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="w-5 h-5 flex items-center justify-center font-bold text-amber-400 hover:bg-neutral-800 rounded"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white">{trayMatch.quantity}</span>
                        <button
                          onClick={(e) => {
                            updateQuantity(item.name, 1);
                            addToTray(item, e);
                          }}
                          className="w-5 h-5 flex items-center justify-center font-bold text-amber-400 hover:bg-neutral-800 rounded"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => addToTray({ ...item, price }, e)}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cafe-black text-xs font-extrabold rounded-xl shadow-md active:scale-95 transition flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Bottom Food Tray Bar */}
      {totalTrayCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto z-40">
          <div className="bg-gradient-to-r from-red-800 to-red-950 border border-red-600/60 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center justify-between text-white animate-bounce-slow">
            <div
              className="flex items-center gap-3 cursor-pointer flex-1"
              onClick={() => setIsTrayDrawerOpen(true)}
            >
              <div className="relative p-2 bg-red-700 rounded-xl shadow">
                <ShoppingBag className="w-5 h-5 text-white" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-red-900 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalTrayCount}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Your Food Tray</h4>
                <p className="text-[11px] text-red-200">Tap to review & checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-base font-black text-white">₹{grandTotal}</span>
              <button
                onClick={() => setShowCheckoutModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-cafe-black font-extrabold text-xs rounded-xl shadow-lg active:scale-95 transition flex items-center gap-1"
              >
                <span>Checkout</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tray Drawer Modal */}
      {isTrayDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4">
          <div className="bg-cafe-card border border-neutral-800 w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 space-y-4 max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-base text-white">Your Food Tray ({totalTrayCount})</h3>
              </div>
              <button onClick={() => setIsTrayDrawerOpen(false)} className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-3 flex-1 no-scrollbar pr-1">
              {tray.map(item => (
                <div key={item.name} className="flex items-center justify-between bg-neutral-900/60 border border-neutral-800 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-neutral-800" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.name}</h4>
                      <span className="text-xs text-amber-400 font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-lg">
                      <button onClick={() => updateQuantity(item.name, -1)} className="px-2 py-1 text-xs text-neutral-300 font-bold hover:text-white">-</button>
                      <span className="text-xs font-bold px-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.name, 1)} className="px-2 py-1 text-xs text-neutral-300 font-bold hover:text-white">+</button>
                    </div>
                    <button onClick={() => removeFromTray(item.name)} className="p-1 text-red-400 hover:text-red-300">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-3 space-y-1.5 text-xs text-neutral-300">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-white">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST Surcharge ({gstRate}%):</span>
                <span className="font-bold text-white">₹{calculatedGst}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-bold text-white">₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-amber-400 pt-1 border-t border-neutral-800">
                <span>Total Amount:</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsTrayDrawerOpen(false);
                setShowCheckoutModal(true);
              }}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-98 transition flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal with Custom OTP & Address Selection */}
      {showCheckoutModal && (
        <CheckoutFlowModal
          onClose={() => setShowCheckoutModal(false)}
          onSuccess={(orderId) => {
            setShowCheckoutModal(false);
            updateActiveOrderId(orderId);
            setShowActiveOrdersSheet(true);
          }}
        />
      )}

      {/* Profile & Addresses Modal */}
      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}

      {/* Active Orders Tracker Drawer */}
      {showActiveOrdersSheet && (
        <ActiveOrdersSheet
          orders={myActiveOrders}
          onClose={() => setShowActiveOrdersSheet(false)}
        />
      )}
    </div>
  );
};

// --- Checkout Flow Component with Customer Custom OTP ---
const CheckoutFlowModal = ({ onClose, onSuccess }) => {
  const { tray, subtotal, clearTray, currentUser, setCurrentUser, menuConfig } = useApp();
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [confirmPhone, setConfirmPhone] = useState('');
  const [address, setAddress] = useState('');
  const [landmarks, setLandmarks] = useState('');
  const [pinCode, setPinCode] = useState('563122');
  const [gpsLocation, setGpsLocation] = useState(null);
  const [gpsLoading, setGpsLoading] = useState(false);

  // OTP State
  const [otpStage, setOtpStage] = useState('info'); // 'info' | 'otp_verify' | 'egg_hatch' | 'success'
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const gstRate = menuConfig.gstRate !== undefined ? Number(menuConfig.gstRate) : 5;
  const deliveryFee = menuConfig.deliveryFee !== undefined ? Number(menuConfig.deliveryFee) : 30;
  const calculatedGst = Math.round((subtotal * gstRate) / 100);
  const grandTotal = subtotal + calculatedGst + deliveryFee;

  const handleFetchGps = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGpsLoading(false);
      },
      (err) => {
        console.warn("GPS error:", err);
        setGpsLoading(false);
        alert("Unable to fetch location. Please enter landmarks manually.");
      }
    );
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!name.trim()) { setOtpError('Please enter your name.'); return; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setOtpError('Enter a valid 10-digit mobile number starting 6-9.'); return; }
    if (phone !== confirmPhone && !currentUser) { setOtpError('Phone numbers do not match.'); return; }
    if (!address.trim()) { setOtpError('Please enter your delivery address.'); return; }
    if (!pinCode.trim()) { setOtpError('Please enter your delivery PIN code.'); return; }

    setOtpError('');
    setLoading(true);

    // Generate 6-digit mock OTP
    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(code);
      setOtpStage('otp_verify');
      playOtpTone();
      setLoading(false);
    }, 1200);
  };

  const handleVerifyOtpAndPlaceOrder = async (e) => {
    e.preventDefault();
    if (enteredOtp.trim() !== generatedOtp) {
      setOtpError('Incorrect 6-digit verification code.');
      return;
    }

    setLoading(true);
    setOtpError('');

    try {
      // Save User to local & Firestore
      const userProfile = {
        name,
        phone,
        addresses: [{ address, landmarks, pinCode }]
      };
      localStorage.setItem('cc_customer_name', name);
      localStorage.setItem('cc_customer_phone', phone);
      setCurrentUser({ name, phone });
      await saveUserProfile(phone, userProfile);

      // Create Order
      const orderPayload = {
        customerName: name,
        customerPhone: phone,
        deliveryAddress: address,
        landmarks: `${landmarks} (PIN: ${pinCode})`,
        pinCode,
        gpsLat: gpsLocation?.lat || null,
        gpsLng: gpsLocation?.lng || null,
        items: tray,
        subtotal,
        gstAmount: calculatedGst,
        deliveryFee,
        totalAmount: grandTotal,
        paymentMethod: 'CASH_OR_UPI_ON_DELIVERY'
      };

      const result = await addOrder(orderPayload);
      setPlacedOrder(result);
      clearTray();

      // Trigger Egg Hatch Animation & Confetti
      setOtpStage('egg_hatch');
      playBlissSound();
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });

      setTimeout(() => {
        setOtpStage('success');
      }, 2000);
    } catch (err) {
      setOtpError('Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-cafe-card border border-neutral-800 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Step 1: Info Form */}
        {otpStage === 'info' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-base text-amber-400 font-serif">Delivery Details</h3>
              <button type="button" onClick={onClose} className="p-1 text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {otpError && (
              <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{otpError}</span>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Mobile Number (for SMS & Rider Call)</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="10-digit mobile number"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {!currentUser && (
                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Confirm Mobile Number</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={confirmPhone}
                    onChange={(e) => setConfirmPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="Re-enter 10-digit mobile number"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Delivery Address (House / Street)</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House No, Building, Street Name..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Landmark</label>
                  <input
                    type="text"
                    required
                    value={landmarks}
                    onChange={(e) => setLandmarks(e.target.value)}
                    placeholder="Near City Temple"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">KGF Area PIN</label>
                  <select
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                  >
                    {KGF_PINS.map(pin => (
                      <option key={pin} value={pin}>{pin} - {KGF_AREA_NAMES[pin]}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFetchGps}
                className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-xs text-neutral-300 font-semibold flex items-center justify-center gap-2 transition"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>{gpsLocation ? "✓ Current GPS Location Attached" : gpsLoading ? "Fetching GPS..." : "Attach Current GPS Location (Optional)"}</span>
              </button>
            </div>

            <div className="border-t border-neutral-800 pt-3">
              <div className="flex justify-between text-xs text-neutral-300 mb-3 font-semibold">
                <span>Total Payable (Cash/UPI):</span>
                <span className="text-amber-400 text-sm font-extrabold">₹{grandTotal}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-98 transition disabled:opacity-50"
              >
                {loading ? "Generating OTP..." : "Verify Mobile & Continue"}
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Custom Mock OTP Prompt */}
        {otpStage === 'otp_verify' && (
          <form onSubmit={handleVerifyOtpAndPlaceOrder} className="space-y-4 text-center">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl inline-flex justify-center items-center text-amber-400">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="font-bold text-lg text-white">Mobile Verification</h3>
            <p className="text-xs text-neutral-400">We have generated a 6-digit confirmation code for <span className="text-amber-400 font-semibold">+91 {phone}</span></p>

            {/* Simulated OTP Card */}
            <div className="bg-neutral-900 border border-amber-500/40 rounded-2xl p-4 space-y-2">
              <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Your Verification Code</span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-black font-mono tracking-widest text-amber-400">{generatedOtp}</span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedOtp);
                    setEnteredOtp(generatedOtp);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-[10px] font-bold text-neutral-300 flex items-center gap-1 border border-neutral-700"
                >
                  <Copy className="w-3 h-3" />
                  <span>{isCopied ? "Pasted!" : "Auto-Fill"}</span>
                </button>
              </div>
            </div>

            {otpError && (
              <div className="p-2.5 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-xs">
                {otpError}
              </div>
            )}

            <div>
              <input
                type="text"
                required
                maxLength={6}
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit Code"
                className="w-full text-center text-lg font-mono font-bold tracking-widest bg-neutral-900 border border-neutral-800 rounded-xl py-3 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-98 transition disabled:opacity-50"
            >
              {loading ? "Confirming Order..." : "Confirm & Place Order"}
            </button>
          </form>
        )}

        {/* Step 3: Egg Hatch Animation */}
        {otpStage === 'egg_hatch' && (
          <div className="py-12 text-center space-y-4">
            <div className="text-6xl animate-bounce">🐣</div>
            <h3 className="text-xl font-bold font-serif text-amber-400">Order Confirmed!</h3>
            <p className="text-xs text-neutral-400">Sending your meal straight to the Crispy Chick kitchen...</p>
          </div>
        )}

        {/* Step 4: Success Screen */}
        {otpStage === 'success' && placedOrder && (
          <div className="space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold font-serif text-white">Order Successfully Placed!</h3>
            <p className="text-xs text-neutral-300">
              Your 4-digit Delivery PIN is <span className="font-mono font-black text-amber-400 text-base">{placedOrder.displayId}</span>
            </p>

            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl text-left text-xs space-y-1 text-neutral-400">
              <p><span className="text-neutral-200 font-semibold">Order ID:</span> {placedOrder.id}</p>
              <p><span className="text-neutral-200 font-semibold">Total Amount:</span> ₹{placedOrder.totalAmount}</p>
              <p><span className="text-neutral-200 font-semibold">Payment:</span> Collect Cash / UPI on Delivery</p>
            </div>

            {/* WhatsApp Share Button */}
            <a
              href={`https://wa.me/919980838183?text=${encodeURIComponent(
                `*Crispy Chick KGF Order Confirmation*\n` +
                `Order ID: ${placedOrder.id}\n` +
                `PIN: ${placedOrder.displayId}\n` +
                `Customer: ${name}\n` +
                `Phone: ${phone}\n` +
                `Address: ${address}\n` +
                `Total: ₹${placedOrder.totalAmount}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
            >
              <Share2 className="w-4 h-4" />
              <span>Send Order Copy to WhatsApp</span>
            </a>

            <button
              onClick={() => onSuccess(placedOrder.id)}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Track Live Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Active Orders Tracking Sheet ---
const ActiveOrdersSheet = ({ orders, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4">
      <div className="bg-cafe-card border border-neutral-800 w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Bike className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base text-white">Live Orders Tracking</h3>
          </div>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {orders.length === 0 ? (
          <p className="text-xs text-neutral-400 text-center py-8">No active orders right now.</p>
        ) : (
          <div className="space-y-4">
            {orders.map(order => {
              const statusSteps = ['pending', 'preparing', 'prepared', 'out_for_delivery', 'delivered'];
              const currentStepIdx = statusSteps.indexOf(order.status) >= 0 ? statusSteps.indexOf(order.status) : 1;

              return (
                <div key={order.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-neutral-400">Order ID: #{order.id.slice(-6)}</span>
                      <h4 className="text-sm font-bold text-white">PIN: <span className="font-mono text-amber-400 font-extrabold">{order.displayId}</span></h4>
                    </div>
                    <span className="text-xs font-bold text-amber-400">₹{order.totalAmount}</span>
                  </div>

                  {/* Status Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-neutral-400">
                      <span>Order Received</span>
                      <span>Kitchen Cooking</span>
                      <span>Out for Delivery</span>
                      <span>Delivered</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (currentStepIdx / 3) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Rider Details if assigned */}
                  {order.assignedRider && (
                    <div className="p-2.5 bg-neutral-800/80 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Bike className="w-4 h-4 text-amber-400" />
                        <div>
                          <p className="font-bold text-white">{order.assignedRider}</p>
                          <p className="text-[10px] text-neutral-400">Assigned Delivery Rider</p>
                        </div>
                      </div>
                      {order.riderPhone && (
                        <a href={`tel:${order.riderPhone}`} className="px-3 py-1.5 bg-amber-500 text-cafe-black rounded-lg font-bold text-[11px]">
                          Call Rider
                        </a>
                      )}
                    </div>
                  )}

                  {/* Order Items */}
                  <div className="text-[11px] text-neutral-400 border-t border-neutral-800/80 pt-2">
                    {order.items?.map((i, idx) => (
                      <span key={idx}>{i.name} (x{i.quantity}){idx < order.items.length - 1 ? ', ' : ''}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Profile Modal ---
const ProfileModal = ({ onClose }) => {
  const { currentUser, setCurrentUser } = useApp();

  const handleLogout = () => {
    localStorage.removeItem('cc_customer_name');
    localStorage.removeItem('cc_customer_phone');
    setCurrentUser(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-cafe-card border border-neutral-800 w-full max-w-sm rounded-3xl p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <h3 className="font-bold text-base text-amber-400 font-serif">Customer Profile</h3>
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-neutral-900 rounded-xl space-y-1">
              <p className="text-neutral-400 text-[10px] uppercase font-bold">Logged In As</p>
              <p className="font-bold text-white text-sm">{currentUser.name}</p>
              <p className="text-neutral-400">+91 {currentUser.phone}</p>
            </div>

            <a
              href="#/privacy-policy"
              className="block text-center py-2 text-neutral-400 hover:text-amber-400 transition"
            >
              Privacy Policy & Data Security
            </a>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 bg-red-950/60 border border-red-800 text-red-300 font-bold rounded-xl hover:bg-red-900/60 transition"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-center space-y-3 py-4">
            <p className="text-xs text-neutral-400">You are browsing as a guest. Placing an order will automatically save your address for faster checkouts.</p>
            <a
              href="#/login"
              className="block w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-cafe-black font-extrabold text-xs rounded-xl uppercase tracking-wider transition"
            >
              Staff Portal Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerView;
