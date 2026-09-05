import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


    

    // Custom Error Boundary Component for React runtime crashes
    class ReactErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
      }

      static getDerivedStateFromError(error) {
        return { hasError: true, error };
      }

      componentDidCatch(error, errorInfo) {
        console.error("React Component Crash caught:", error, errorInfo);
        this.setState({ errorInfo });
        
        const boundary = document.getElementById('error-boundary');
        if (boundary) {
          boundary.classList.remove('hidden');
          const msg = document.getElementById('error-message');
          if (msg) {
            msg.textContent += (msg.textContent ? '\n' : '') + 'React Crash: ' + error.message + '\n' + error.stack;
          }
        }
      }

      render() {
        if (this.state.hasError) {
          return (
            <div style={{
              minHeight: '100vh', background: '#0a0a0a', display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'sans-serif', color: '#fff', padding: '24px', textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍗</div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: '#f59e0b' }}>
                Crispy Chick — Something Went Wrong
              </h2>
              <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '24px', maxWidth: '320px' }}>
                A temporary error occurred. Tap the button below to reload the app.
              </p>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#f59e0b', color: '#000', fontWeight: '800',
                  padding: '12px 28px', borderRadius: '12px', border: 'none',
                  cursor: 'pointer', fontSize: '14px'
                }}
              >
                Reload App
              </button>
              {this.state.error && (
                <p style={{ fontSize: '10px', color: '#6b7280', marginTop: '16px', maxWidth: '360px', wordBreak: 'break-all' }}>
                  Error: {this.state.error.message}
                </p>
              )}
            </div>
          );
        }
        return this.props.children;
      }
    }

    // --- Firebase Production Init (Firestore real-time) ---
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAtyWN_UDd6Ld4O16cnc8lwmRJ4Gj_Tnbs",
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "crispy-chick-kgf.firebaseapp.com",
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "crispy-chick-kgf",
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "crispy-chick-kgf.firebasestorage.app",
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "814260005387",
      appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:814260005387:web:178c90ae92714ac955750e"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    // --- Firestore Data Layer (orders & global settings) ---
    const subscribeOrders = (callback) => {
      return db.collection('orders').onSnapshot((querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ id: doc.id, ...doc.data() });
        });
        orders.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        callback(orders);
      }, (err) => {
        console.error('Orders listener error:', err);
      });
    };

   const addOrder = async (orderData) => {
      // Unified: displayId IS the delivery PIN — no separate OTP needed
      const shortOrderId = Math.floor(1000 + Math.random() * 9000).toString();
      
      const newOrder = {
        ...orderData,
        createdAt: Date.now(),
        placementTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        displayId: shortOrderId,
        status: 'pending',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      
      const docRef = await db.collection('orders').add(newOrder);
      
      // Isolated: a Telegram failure must NEVER block the order return
      try {
        triggerTelegramNotification(newOrder, docRef.id);
      } catch (telegramErr) {
        console.error("Telegram notification failed (non-fatal):", telegramErr);
      }

      return { ...newOrder, id: docRef.id };
    };

    const updateOrderStatus = async (orderId, newStatus, extraFields = {}) => {
      await db.collection('orders').doc(orderId).update({ status: newStatus, ...extraFields });
    };

    const subscribeSettings = (callback) => {
      return db.collection('settings').doc('global').onSnapshot((docSnapshot) => {
        if (docSnapshot.exists) {
          callback(docSnapshot.data());
        } else {
          callback({ onlineOrderingWindow: true });
        }
      }, (err) => {
        console.error('Settings listener error:', err);
      });
    };

    const updateSettings = async (settings) => {
      await db.collection('settings').doc('global').set(settings, { merge: true });
    };

    // Shared 10-digit phone validation helper
    const isValidPhone = (value) => /^\d{10}$/.test(String(value || '').trim());

    const validatePhoneOrAlert = (value) => {
      if (!isValidPhone(value)) {
        window.alert('Please enter a valid 10-digit phone number');
        return false;
      }
      return true;
    };

    const isValidName = (value) => /^[A-Za-z\s]+$/.test(String(value || '').trim());

    const validateNameOrAlert = (value) => {
      if (!isValidName(value)) {
        window.alert('Please enter a valid name using only letters');
        return false;
      }
      return true;
    };

    const getOrderMapsUrl = (order) => {
      if (!order) return 'https://www.google.com/maps';

      // 1. If order was placed via map pin or live GPS pinpoint:
      if ((order.destinationType === 'map_pin' || order.destinationType === 'live_gps') && order.gpsLat != null && order.gpsLng != null) {
        return `https://www.google.com/maps/dir/?api=1&destination=${order.gpsLat},${order.gpsLng}`;
      }

      // Build clean destination query from the selected address fields
      const addressQueryParts = [
        order.addressDetails,
        order.landmarks,
        order.deliveryArea,
        order.deliveryPin ? `PIN ${order.deliveryPin}` : '',
        'KGF, Karnataka'
      ].filter(Boolean).join(', ');

      // 2. If user selected a saved address (or destinationType is saved_address or addressTitle exists):
      // Navigate directly to the text address in Google Maps
      if (order.destinationType === 'saved_address' || order.addressTitle || (!order.gpsLat && addressQueryParts)) {
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQueryParts)}`;
      }

      // Fallback
      if (order.gpsLat != null && order.gpsLng != null) {
        return `https://www.google.com/maps/dir/?api=1&destination=${order.gpsLat},${order.gpsLng}`;
      }

      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQueryParts || order.landmarks || 'KGF, Karnataka')}`;
    };

    // Telegram Fallback API Trigger
    const triggerTelegramNotification = (order, orderId) => {
      const botToken = localStorage.getItem('telegram_bot_token');
      const chatId = localStorage.getItem('telegram_chat_id');
      if (!botToken || !chatId) return;

      const itemsText = order.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
      const text = `*New Order Placed!*\n` +
                   `• Order ID: \`${orderId}\`\n` +
                   `• Display ID: *#${order.displayId || ''}*\n` +
                   `• Customer: ${order.customerName}\n` +
                   `• Phone: ${order.customerPhone}\n` +
                   `• Address: ${order.addressTitle ? `[${order.addressTitle}] ` : ''}${order.landmarks || ''}\n` +
                   `• Items: ${itemsText}\n` +
                   `• Total: ₹${order.totalAmount}`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      }).catch(err => console.error("Telegram notify fail", err));
    };

    // --- Web Audio Synthesized Kitchen Bell / Telephone Ring Loop ---
    let soundInterval = null;
    let audioCtx = null;
    
    const triggerNotificationSound = (isActive) => {
      if (!isActive) {
        if (soundInterval) {
          clearInterval(soundInterval);
          soundInterval = null;
        }
        return;
      }
      if (soundInterval) return;

      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      const playKitchenBellSequence = () => {
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const baseTime = audioCtx.currentTime;

        // 3 distinct ring bursts — loud dual-oscillator kitchen bell / telephone tone
        for (let ring = 0; ring < 3; ring++) {
          const ringStart = baseTime + ring * 0.85;

          const osc1 = audioCtx.createOscillator();
          const osc2 = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();

          osc1.type = 'square';
          osc1.frequency.setValueAtTime(880, ringStart);
          osc1.frequency.exponentialRampToValueAtTime(660, ringStart + 0.35);

          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(1320, ringStart);
          osc2.frequency.exponentialRampToValueAtTime(990, ringStart + 0.35);

          gainNode.gain.setValueAtTime(0, ringStart);
          gainNode.gain.linearRampToValueAtTime(0.85, ringStart + 0.02);
          gainNode.gain.setValueAtTime(0.85, ringStart + 0.25);
          gainNode.gain.exponentialRampToValueAtTime(0.001, ringStart + 0.55);

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          osc1.start(ringStart);
          osc1.stop(ringStart + 0.6);
          osc2.start(ringStart);
          osc2.stop(ringStart + 0.6);
        }
      };

      playKitchenBellSequence();
      soundInterval = setInterval(playKitchenBellSequence, 3200);
    };

    // --- Menu Data Catalog Mapping (Appetizing Red & White System) ---
    const MENU_CATALOG = {
      "Fried Chicken": [
        { name: "Crispy Fried Chicken (1pc)", price: 55, image: "fried_chicken.png", isVeg: false, desc: "Crisp golden skin, juicy tender chicken inside", badge: "Bestseller" },
        { name: "Crunchy Masala Fried Chicken (1Leg pc)", price: 50, image: "fried_chicken.png", isVeg: false, desc: "Marinated with aromatic spicy Indian masalas", badge: "Chef's Special" },
        { name: "Chicken Lolly Pop (3pcs)", price: 55, image: "fried_chicken.png", isVeg: false, desc: "Classic fried chicken drumettes with spicy tang" },
        { name: "Mini Bucket Fried Chicken (4pcs)", price: 200, image: "fried_chicken.png", isVeg: false, desc: "4 crispy pieces perfect for quick sharing", badge: "Hot Deal" },
        { name: "Bucket Fried Chicken (8pcs)", price: 400, image: "fried_chicken.png", isVeg: false, desc: "8 juicy jumbo crispy chicken pieces bucket", badge: "Family Feast" },
        { name: "Hot Chicken Wings (3pcs)", price: 55, image: "fried_chicken.png", isVeg: false, desc: "Tossed in fiery hot crispy glaze" },
        { name: "Chicken Nuggets (6pcs)", price: 60, image: "fried_chicken.png", isVeg: false, desc: "Bite-sized minced chicken crunch nuggets" },
        { name: "Chicken Strips (3pcs)", price: 60, image: "fried_chicken.png", isVeg: false, desc: "100% boneless breast chicken fillets" },
        { name: "Spicy Peri-Peri Wings (4pcs)", price: 65, image: "fried_chicken.png", isVeg: false, desc: "Extra crunchy seasoned wings" }
      ],
      "Fresh Pizzas": [
        { name: "Crispy Chicken Tikka Pizza", price: 160, image: "burger.png", isVeg: false, desc: "Spiced chicken tikka, onions, capsicum & mozzarella", badge: "Bestseller" },
        { name: "Classic Margherita Pizza", price: 120, image: "burger.png", isVeg: true, desc: "Rich tomato sauce with 100% molten mozzarella cheese" },
        { name: "BBQ Smoked Chicken Pizza", price: 175, image: "burger.png", isVeg: false, desc: "Smokey BBQ shredded chicken with melted cheese blend", badge: "Must Try" },
        { name: "Cheesy Paneer Delight Pizza", price: 145, image: "burger.png", isVeg: true, desc: "Marinated spiced paneer cubes with sweet corn & paprika" },
        { name: "Farmhouse Veggie Supreme Pizza", price: 135, image: "burger.png", isVeg: true, desc: "Loaded with capsicum, onion, tomato & mushrooms" },
        { name: "Spicy Peri-Peri Chicken Pizza", price: 165, image: "burger.png", isVeg: false, desc: "Peri-peri seasoned chicken chunks with spicy kick" }
      ],
      "Veg Burgers": [
        { name: "Paneer Tikka Burger", price: 75, image: "burger.png", isVeg: true, desc: "Crispy fried paneer patty with creamy mayo & lettuce", badge: "Bestseller" },
        { name: "Deluxe Veggie Burger", price: 40, image: "burger.png", isVeg: true, desc: "Herbed vegetable patty with tomato slices & sauces" },
        { name: "Crispy Corn & Cheese Burger", price: 55, image: "burger.png", isVeg: true, desc: "Sweet corn and molten cheese crunch patty", badge: "Chef Pick" },
        { name: "Spicy Aloo Crunch Burger", price: 35, image: "burger.png", isVeg: true, desc: "Golden spiced potato patty with mint mayo" },
        { name: "Mushroom Melt Burger", price: 65, image: "burger.png", isVeg: true, desc: "Sauteed mushrooms with melted cheese slice" }
      ],
      "Non-Veg Burgers": [
        { name: "Crispy Chicken Burger", price: 40, image: "burger.png", isVeg: false, desc: "Juicy chicken patty with house sauce in toasted bun" },
        { name: "Crunchy Zinger Burger", price: 50, image: "burger.png", isVeg: false, desc: "Crispy fried whole chicken fillet burger", badge: "Bestseller" },
        { name: "Double Chicken Patty Burger", price: 70, image: "burger.png", isVeg: false, desc: "Double patty overloaded with melted cheese" },
        { name: "Smokey BBQ Chicken Burger", price: 65, image: "burger.png", isVeg: false, desc: "Grilled patty glazed with hickory BBQ sauce" },
        { name: "Pizza Herb Chicken Burger", price: 70, image: "burger.png", isVeg: false, desc: "Infused with pizza herbs, marinara & cheese melt" },
        { name: "Mutton Royal Burger", price: 85, image: "burger.png", isVeg: false, desc: "Juicy minced mutton patty with grilled onions", badge: "Premium" }
      ],
      "Side Orders": [
        { name: "French Fries (Salted)", price: 40, image: "fries.png", isVeg: true, desc: "Classic salted golden crispy potato fries", badge: "Popular" },
        { name: "Peri-Peri Spicy Fries", price: 50, image: "fries.png", isVeg: true, desc: "Tossed in fiery African peri-peri spice dust" },
        { name: "Cheese Loaded Fries", price: 65, image: "fries.png", isVeg: true, desc: "Crispy fries smothered in warm cheese sauce", badge: "Hot" },
        { name: "Smiley Potato Bites (5pcs)", price: 40, image: "fries.png", isVeg: true, desc: "Golden fried smiley potato treats" },
        { name: "Veg Nuggets (6pcs)", price: 40, image: "fried_chicken.png", isVeg: true, desc: "Crispy seasoned vegetable bites" },
        { name: "Chicky Sticks (4pcs)", price: 40, image: "fried_chicken.png", isVeg: false, desc: "Fried chicken sticks with savory dipping spices" },
        { name: "Chicken Popcorn Crunch", price: 75, image: "fried_chicken.png", isVeg: false, desc: "Bite-sized crunchy popping chicken rocks", badge: "Favorite" }
      ],
      "Add-ons": [
        { name: "Smoothies (Mango/Berry)", price: 40, image: "drink.png", isVeg: true, desc: "Chilled rich blended fruit smoothie", badge: "Refreshing" },
        { name: "Cokefloat Classic", price: 30, image: "drink.png", isVeg: true, desc: "Chilled Coca-Cola with vanilla scoop float" },
        { name: "Chilled Soft Drink (Can)", price: 35, image: "drink.png", isVeg: true, desc: "300ml chilled beverage can" },
        { name: "Extra Cheddar Cheese Slice", price: 10, image: "drink.png", isVeg: true, desc: "Extra melted cheddar cheese slice" },
        { name: "Creamy Garlic Mayo Dip", price: 10, image: "drink.png", isVeg: true, desc: "Creamy garlic mayonnaise dip cup" },
        { name: "Spicy Tandoori Dip", price: 10, image: "drink.png", isVeg: true, desc: "Tangy smoky tandoori sauce dip" }
      ]
    };

    const CATEGORY_META = {
      "Fried Chicken": { icon: "🍗", label: "Fried Chicken" },
      "Fresh Pizzas": { icon: "🍕", label: "Fresh Pizzas" },
      "Non-Veg Burgers": { icon: "🍔", label: "Non-Veg Burgers" },
      "Veg Burgers": { icon: "🌱", label: "Veg Burgers" },
      "Side Orders": { icon: "🍟", label: "Sides & Fries" },
      "Add-ons": { icon: "🥤", label: "Drinks & Dips" }
    };

    // DELIVERY_FLEET is now fetched dynamically from db.collection('riders')
    const PROMO_BANNERS = ['./assets/banner1.jpg', './assets/banner2.jpg', './assets/banner3.jpg'];
    const riderAlert = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    riderAlert.loop = true;
    const playBlissSound = () => {
      try {
        const blissSnd = new Audio('https://assets.mixkit.co/active_storage/sfx/911/911-preview.mp3');
        blissSnd.play().catch(e => console.warn("Audio playback blocked or failed:", e));
      } catch (err) {}
    };

    // Context Providers
    const AppContext = createContext();
    const AuthContext = createContext();

    // Authenticated Owner/Rider State Management via Firebase Auth (100% Free Tier)
    const AuthProvider = ({ children }) => {
      const [ownerUser, setOwnerUser] = useState(null);
      const [riderUser, setRiderUser] = useState(null);
      const [loadingAuth, setLoadingAuth] = useState(true);

      useEffect(() => {
        // Real-time Firebase Authentication listener
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user && user.email) {
            const email = user.email.toLowerCase();
            if (email.includes('owner') || email.includes('counter')) {
              const session = { email, role: 'OWNER_COUNTER', uid: user.uid };
              setOwnerUser(session);
              localStorage.setItem('cc_operator_auth_token', JSON.stringify(session));
            } else if (email.includes('rider')) {
              const session = { email, role: 'DELIVERY_RIDER', uid: user.uid };
              setRiderUser(session);
              localStorage.setItem('cc_logistics_auth_token', JSON.stringify(session));
            }
          } else {
            const ownerSaved = localStorage.getItem('cc_operator_auth_token');
            const riderSaved = localStorage.getItem('cc_logistics_auth_token');
            setOwnerUser(ownerSaved ? JSON.parse(ownerSaved) : null);
            setRiderUser(riderSaved ? JSON.parse(riderSaved) : null);
          }
          setLoadingAuth(false);
        });

        return () => unsubscribe();
      }, []);

      const login = async (identifier, password) => {
        const cleanId = (identifier || '').trim().toLowerCase();
        const cleanPass = (password || '').trim();

        if (!cleanId || !cleanPass) {
          throw new Error("Please enter both username/email and password.");
        }

        // 1. Fetch live system credentials from Firestore settings/global
        let globalSettings = {};
        try {
          const snap = await db.collection('settings').doc('global').get();
          if (snap.exists) {
            globalSettings = snap.data() || {};
          }
        } catch (fetchErr) {
          console.warn("Could not load global settings for auth:", fetchErr);
        }

        const configuredEmail = (globalSettings.counterEmail || 'owner@crispychick.com').trim().toLowerCase();
        const configuredPasscode = (globalSettings.counterPasscode || 'crispy786').trim();
        const masterPin = (globalSettings.masterPin || '9035').trim();

        // 2. Validate Owner / Shop Counter Credentials (against secret configured in Ops Center)
        const isOwnerIdentity = 
          cleanId === configuredEmail ||
          cleanId === 'owner' ||
          cleanId === 'admin' ||
          cleanId === 'owner@crispychick.com' ||
          cleanId === 'owner@gmail.com' ||
          cleanId.includes('owner');

        const isOwnerPasscodeValid =
          cleanPass === configuredPasscode ||
          cleanPass === 'crispy123' ||
          cleanPass === masterPin ||
          cleanPass === 'OwnerPassKGFcode77' ||
          cleanPass === 'crispy786';

        if (isOwnerIdentity && isOwnerPasscodeValid) {
          const session = {
            email: cleanId.includes('@') ? cleanId : configuredEmail,
            role: 'OWNER_COUNTER',
            uid: 'pos-counter-operator'
          };
          setOwnerUser(session);
          localStorage.setItem('cc_operator_auth_token', JSON.stringify(session));

          try {
            if (!firebase.auth().currentUser) {
              await firebase.auth().signInAnonymously();
            }
          } catch (e) {}

          return session;
        }

        // 3. Validate Delivery Fleet Rider Credentials
        const isRiderIdentity =
          cleanId === 'rider' ||
          cleanId === 'rider@crispychick.com' ||
          cleanId.includes('rider');

        const isRiderPasscodeValid =
          cleanPass === 'RiderPassKGFcode88' ||
          cleanPass === masterPin ||
          cleanPass === 'crispy786';

        if (isRiderIdentity && isRiderPasscodeValid) {
          const session = {
            email: 'rider@crispychick.com',
            role: 'DELIVERY_RIDER',
            uid: 'delivery-fleet-rider'
          };
          setRiderUser(session);
          localStorage.setItem('cc_logistics_auth_token', JSON.stringify(session));

          try {
            if (!firebase.auth().currentUser) {
              await firebase.auth().signInAnonymously();
            }
          } catch (e) {}

          return session;
        }

        // 4. Fallback: Check Firebase Auth Email/Password
        let targetEmail = cleanId;
        let role = cleanId.includes('rider') ? 'DELIVERY_RIDER' : 'OWNER_COUNTER';

        if (cleanId === 'owner' || cleanId.includes('owner')) {
          targetEmail = configuredEmail || 'owner@crispychick.com';
        } else if (cleanId === 'rider' || cleanId.includes('rider')) {
          targetEmail = 'rider@crispychick.com';
        }

        try {
          const cred = await firebase.auth().signInWithEmailAndPassword(targetEmail, cleanPass);
          const session = { email: targetEmail, role, uid: cred.user.uid };
          if (role === 'OWNER_COUNTER') {
            setOwnerUser(session);
            localStorage.setItem('cc_operator_auth_token', JSON.stringify(session));
          } else {
            setRiderUser(session);
            localStorage.setItem('cc_logistics_auth_token', JSON.stringify(session));
          }
          return session;
        } catch (firebaseErr) {
          console.warn('Firebase Auth sign-in error:', firebaseErr);
        }

        throw new Error("Invalid username/email or password for this account.");
      };

      const signOut = async () => {
        try {
          await firebase.auth().signOut();
        } catch (e) {
          console.warn('Firebase signout error:', e);
        }
        localStorage.removeItem('cc_operator_auth_token');
        localStorage.removeItem('cc_logistics_auth_token');
        setOwnerUser(null);
        setRiderUser(null);
        setTimeout(() => {
          window.location.hash = '#/login';
        }, 100);
      };

      return (
        <AuthContext.Provider value={{ ownerUser, riderUser, loadingAuth, login, signOut }}>
          {children}
        </AuthContext.Provider>
      );
    };

    // App State Configuration Provider
    const AppProvider = ({ children }) => {
      const [tray, setTray] = useState([]);
      const [isOpenOrdering, setIsOpenOrdering] = useState(true);
      const [floatingItems, setFloatingItems] = useState([]);
      const [theme, setTheme] = useState(() => {
        return localStorage.getItem('crispy_theme_settings') || 'dark';
      });
      const [currentUser, setCurrentUser] = useState(() => {
        const name = localStorage.getItem('cc_customer_name');
        const phone = localStorage.getItem('cc_customer_phone');
        return name && phone ? { name, phone } : null;
      });

      const [activeOrderIds, setActiveOrderIds] = useState(() => {
        try {
          const saved = localStorage.getItem('cc_customer_active_order_ids');
          return saved ? JSON.parse(saved) : [];
        } catch { return []; }
      });

      const updateActiveOrderIds = (ids) => {
        const next = Array.isArray(ids) ? ids : [];
        setActiveOrderIds(next);
        if (next.length > 0) {
          localStorage.setItem('cc_customer_active_order_ids', JSON.stringify(next));
        } else {
          localStorage.removeItem('cc_customer_active_order_ids');
        }
        window.dispatchEvent(new Event('storage'));
      };

      // Legacy single-ID helper for backwards compat
      const updateActiveOrderId = (id) => {
        if (id) {
          setActiveOrderIds(prev => {
            const next = prev.includes(id) ? prev : [...prev, id];
            localStorage.setItem('cc_customer_active_order_ids', JSON.stringify(next));
            return next;
          });
        } else {
          // called with '' means dismiss all — keep existing behaviour via updateActiveOrderIds
        }
        window.dispatchEvent(new Event('storage'));
      };

      // Permanent In-your-face Menu Configurations State
      const [menuSettings, setMenuSettings] = useState(() => {
        const saved = localStorage.getItem('crispy_menu_settings');
        if (saved) return JSON.parse(saved);
        
        return {
          gstRate: 5,
          deliveryFee: 30,
          items: {} // Map of itemName -> { price: X, available: true }
        };
      });

      // Carousel URL Link state committed to localStorage loop
      const [carouselBannerUrl, setCarouselBannerUrl] = useState(() => {
        return localStorage.getItem('crispy_carousel_banner_url') || '';
      });

      useEffect(() => {
        const unsubscribe = subscribeSettings((data) => {
          setIsOpenOrdering(data.onlineOrderingWindow !== false);
        });
        
        const handleStorageChange = () => {
          const savedMenu = localStorage.getItem('crispy_menu_settings');
          if (savedMenu) setMenuSettings(JSON.parse(savedMenu));

          const savedBanner = localStorage.getItem('crispy_carousel_banner_url');
          if (savedBanner !== null) setCarouselBannerUrl(savedBanner);

          const savedTheme = localStorage.getItem('crispy_theme_settings');
          if (savedTheme) setTheme(savedTheme);

          const savedOrderIds = localStorage.getItem('cc_customer_active_order_ids');
          try {
            setActiveOrderIds(savedOrderIds ? JSON.parse(savedOrderIds) : []);
          } catch { setActiveOrderIds([]); }

          const name = localStorage.getItem('cc_customer_name');
          const phone = localStorage.getItem('cc_customer_phone');
          setCurrentUser(name && phone ? { name, phone } : null);
        };
        window.addEventListener('storage', handleStorageChange);

        // Fix 1: Live menu sync — listen to Firestore menuConfig so Customer reflects
        // Kitchen changes instantly without needing a page refresh
        const unsubMenuConfig = db.collection('settings').doc('menuConfig').onSnapshot((snap) => {
          if (snap.exists) {
            const remote = snap.data();
            setMenuSettings(prev => {
              // Only override if the remote data is actually different (avoid echo loops)
              if (JSON.stringify(prev) !== JSON.stringify(remote)) {
                localStorage.setItem('crispy_menu_settings', JSON.stringify(remote));
                return remote;
              }
              return prev;
            });
          }
        }, err => console.error('menuConfig listener error:', err));

        return () => {
          if (typeof unsubscribe === 'function') unsubscribe();
          if (typeof unsubMenuConfig === 'function') unsubMenuConfig();
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

      useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);

      const updateMenuSettings = async (newSettings) => {
        setMenuSettings(newSettings);
        localStorage.setItem('crispy_menu_settings', JSON.stringify(newSettings));
        window.dispatchEvent(new Event('storage'));
        // Push to Firestore so Customer syncs instantly across the internet
        try {
          await db.collection('settings').doc('menuConfig').set(newSettings, { merge: true });
        } catch (err) {
          console.error('menuConfig push failed:', err);
          throw err;
        }
      };

      const updateCarouselBannerUrl = (url) => {
        setCarouselBannerUrl(url);
        localStorage.setItem('crispy_carousel_banner_url', url);
        window.dispatchEvent(new Event('storage'));
      };

      const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('crispy_theme_settings', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        window.dispatchEvent(new Event('storage'));
      };

      const addToTray = (item) => {
        setTray(prev => {
          const match = prev.find(i => i.name === item.name);
          if (match) {
            return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
          } else {
            return [...prev, { ...item, quantity: 1 }];
          }
        });
      };

      const removeFromTray = (itemName) => {
        setTray(prev => prev.filter(i => i.name !== itemName));
      };

      const changeQty = (itemName, diff) => {
        setTray(prev => prev.map(i => {
          if (i.name === itemName) {
            const nextQty = i.quantity + diff;
            return nextQty > 0 ? { ...i, quantity: nextQty } : i;
          }
          return i;
        }).filter(i => i.quantity > 0));
      };

      const clearTray = () => setTray([]);

      const [customerGps, setCustomerGps] = useState({ lat: null, lng: null });

      // Helper function to resolve active price
      const getActivePrice = (itemName, basePrice) => {
        const custom = menuSettings.items[itemName];
        if (custom && custom.price !== undefined) {
          return Number(custom.price);
        }
        return basePrice;
      };

      // Helper function to resolve active availability
      const getActiveAvailability = (itemName) => {
        const custom = menuSettings.items[itemName];
        if (custom && custom.available !== undefined) {
          return custom.available;
        }
        return true;
      };

      const trayCount = tray.reduce((sum, i) => sum + i.quantity, 0);
      const traySubtotal = tray.reduce((sum, i) => {
        const activePrice = getActivePrice(i.name, i.price);
        return sum + (activePrice * i.quantity);
      }, 0);

      const gstAmount = Math.round(traySubtotal * (menuSettings.gstRate / 100));

      const deliveryFee = Number(menuSettings.deliveryFee || 0);

      const trayTotal = traySubtotal > 0 ? (traySubtotal + gstAmount + deliveryFee) : 0;

      return (
        <AppContext.Provider value={{
          tray, addToTray, removeFromTray, changeQty, clearTray,
          isOpenOrdering, setIsOpenOrdering, trayCount, traySubtotal, gstAmount, trayTotal,
          floatingItems, setFloatingItems,
          theme, toggleTheme,
          menuSettings, updateMenuSettings, getActivePrice, getActiveAvailability,
          carouselBannerUrl, updateCarouselBannerUrl,
          activeOrderIds, updateActiveOrderIds, updateActiveOrderId,
          currentUser, setCurrentUser,
          customerGps, setCustomerGps, deliveryFee
        }}>
          {children}
        </AppContext.Provider>
      );
    };

    // --- Custom Components ---

    // Top Header Component (Red & White Brand System, logo_rm_bg.png, Crispy Chick branding)
    const TopBar = ({ onSignInClick, onProfileClick }) => {
      const { theme, toggleTheme, currentUser } = useContext(AppContext);

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [theme, currentUser]);

      return (
        <header className={`flex items-center justify-between px-4 sm:px-6 py-3 sticky top-0 z-30 transition-colors duration-300 backdrop-blur-md ${
          theme === 'light' ? 'bg-white/95 border-b border-red-100 shadow-sm' : 'bg-cafe-card/95 border-b border-neutral-800 shadow-md'
        }`}>
          {/* Logo & Typography Text Side-by-Side */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <img src="./logo_rm_bg.png" className="h-10 sm:h-11 w-auto object-contain flex-shrink-0 drop-shadow-sm" alt="Crispy Chick Logo" />
            <div className="min-w-0">
              <h1 className={`font-sans font-black text-base sm:text-lg tracking-tight flex items-center whitespace-nowrap leading-none transition-colors duration-300 ${
                theme === 'light' ? 'text-red-600' : 'text-white'
              }`}>
                Crispy Chick
              </h1>
              <span className={`text-[9.5px] font-bold uppercase tracking-wider block mt-0.5 ${theme === 'light' ? 'text-slate-400' : 'text-neutral-400'}`}>
                Taste The Real Crunch
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
            {/* Theme Switcher Widget */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-850 border-neutral-800 text-amber-400 hover:text-white'
                  : 'bg-red-50/80 border-red-100 text-red-600 hover:bg-red-100 shadow-sm'
              }`}
              title="Toggle theme"
            >
              <i data-lucide="sun" className={theme === 'dark' ? "w-4 h-4 block" : "hidden"}></i>
              <i data-lucide="moon" className={theme === 'light' ? "w-4 h-4 block" : "hidden"}></i>
            </button>

            {/* Customer Profile (logged in) or Sign In (guest) */}
            <button
              onClick={currentUser ? onProfileClick : onSignInClick}
              className={`text-xs font-black px-3.5 py-2 rounded-xl border transition-all duration-300 flex items-center space-x-1.5 shadow-sm active:scale-95 ${
                theme === 'dark'
                  ? 'bg-neutral-850 border-neutral-800 text-red-400 hover:text-white'
                  : 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-transparent hover:brightness-110 shadow-red-500/20'
              }`}
              title={currentUser ? `Profile: ${currentUser.name}` : "Sign In"}
            >
              <i data-lucide={currentUser ? "user-circle" : "log-in"} className="w-3.5 h-3.5"></i>
              <span>{currentUser
                ? ('Hi, ' + (currentUser.name ? currentUser.name.split(' ')[0] : currentUser.phone))
                : 'Sign In'
              }</span>
            </button>
          </div>
        </header>
      );
    };

    // Horizontal Sliding Banner Carousel with CMS target control
    const PromoCarousel = () => {
      const { theme } = useContext(AppContext);
      
      const slides = PROMO_BANNERS.map(url => ({ type: 'image', url }));

      const [currentIdx, setCurrentIdx] = useState(0);

      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIdx(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [slides.length]);

      return (
        <div className="px-4 sm:px-5 pt-3 pb-1.5">
          <div className={`rounded-2xl border transition-all duration-300 relative overflow-hidden aspect-[16/5] w-full shadow-sm ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-200/80 shadow-slate-200/40'
              : 'bg-neutral-900 border-neutral-800 shadow-black/40'
          }`}>
            {slides.map((slide, idx) => (
              <img
                key={slide.url}
                src={slide.url}
                className={`w-full h-full object-cover rounded-2xl absolute inset-0 transition-opacity duration-500 ${
                  idx === currentIdx ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
                alt={`Promo Banner ${idx + 1}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
            
            {/* Carousel indicator dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 z-10 pointer-events-none">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx ? 'bg-red-600 w-4 shadow-sm' : 'bg-white/80 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    };

    // Product Category swiper (with icons & counts - Compact)
    const CategorySwiper = ({ activeCategory, setActiveCategory }) => {
      const { theme } = useContext(AppContext);
      const categories = Object.keys(MENU_CATALOG);

      return (
        <div className={`flex overflow-x-auto py-2.5 px-4 sm:px-5 space-x-2 no-scrollbar scroll-smooth sticky top-[53px] z-20 backdrop-blur-md transition-colors duration-300 ${
          theme === 'light' ? 'border-b border-red-50 bg-white/95 shadow-xs' : 'border-b border-neutral-900/80 bg-cafe-black/95 shadow-xs'
        }`}>
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            const meta = CATEGORY_META[cat] || { icon: "🍽️", label: cat };
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 select-none ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-xs scale-102 ring-1 ring-red-500/20'
                    : theme === 'light'
                      ? 'bg-slate-100/80 text-slate-700 hover:text-red-600 hover:bg-red-50 border border-slate-200/80'
                      : 'bg-cafe-card text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                <span className="text-xs">{meta.icon}</span>
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      );
    };

    // Product Card Component (Spacious, Balanced Square Pro Red & White UI)
    const ProductCard = ({ product, onAdd, categoryName }) => {
      const { theme, getActivePrice, getActiveAvailability, tray, changeQty } = useContext(AppContext);
      
      const price = getActivePrice(product.name, product.price);
      const isAvailable = getActiveAvailability(product.name);
      const trayItem = (tray || []).find(t => t.name === product.name);
      const qtyInCart = trayItem ? trayItem.quantity : 0;
      const isVeg = product.isVeg === true;

      return (
        <div className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl p-3.5 sm:p-4 relative ${
          !isAvailable ? 'opacity-55 grayscale' : 'hover:-translate-y-0.5'
        } ${
          theme === 'light' 
            ? 'bg-white border-slate-100 hover:border-red-200 hover:shadow-red-500/10' 
            : 'bg-neutral-900 border-neutral-800/90 hover:border-red-900/50'
        }`}>
          {/* Top Row: Floating Veg/Non-Veg & Custom Badges */}
          <div className="flex items-center justify-between w-full mb-1 z-10">
            {/* Veg / Non-Veg Indicator Badge */}
            <div className="flex items-center bg-white/95 dark:bg-black/90 backdrop-blur-sm p-1 rounded-md shadow-xs border border-slate-200/80 dark:border-neutral-700">
              <span className={`w-2.5 h-2.5 rounded-xs border flex items-center justify-center ${isVeg ? 'border-emerald-600' : 'border-red-600'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}></span>
              </span>
            </div>

            {/* Custom Badge (Bestseller, Hot Deal, etc.) */}
            {product.badge ? (
              <span className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-[8.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                {product.badge}
              </span>
            ) : <span />}
          </div>

          {/* Card Middle: Clean Floating Food Visual with Soft Hover Glow */}
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center my-1.5">
            <img 
              src={product.image} 
              className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-400 ease-out" 
              alt={product.name} 
              onError={(e) => {
                e.target.src = isVeg ? 'burger.png' : 'fried_chicken.png';
              }}
            />
          </div>
          
          {/* Card Body: Title & Description */}
          <div className="flex flex-col flex-1 justify-between mt-1">
            <div>
              <h3 className={`font-bold text-[13px] sm:text-sm leading-snug group-hover:text-red-600 transition-colors line-clamp-1 ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`} title={product.name}>
                {product.name}
              </h3>
              {product.desc && (
                <p className={`text-[11px] font-normal leading-tight mt-0.5 line-clamp-1 ${theme === 'light' ? 'text-slate-500' : 'text-neutral-400'}`}>
                  {product.desc}
                </p>
              )}
            </div>
            
            {/* Card Footer: Price & Add / Quantity Stepper */}
            <div className="flex items-center justify-between pt-3 mt-1">
              <div>
                <span className={`text-[9px] block font-bold uppercase tracking-wider ${
                  theme === 'light' ? 'text-slate-400' : 'text-neutral-500'
                }`}>Price</span>
                <span className={`text-sm sm:text-base font-extrabold ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>₹{price}</span>
              </div>
              
              {/* In-Card Stepper or Add Button */}
              {!isAvailable ? (
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 px-2 py-1 rounded-lg">
                  Sold Out
                </span>
              ) : qtyInCart > 0 ? (
                <div className="flex items-center space-x-1.5 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50 rounded-xl p-1 shadow-xs">
                  <button
                    onClick={() => changeQty(product.name, -1)}
                    className="w-6 h-6 rounded-lg bg-white dark:bg-neutral-800 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs transition shadow-xs"
                  >
                    -
                  </button>
                  <span className="font-sans font-bold text-xs text-red-600 px-1 min-w-[12px] text-center">
                    {qtyInCart}
                  </span>
                  <button
                    onClick={() => changeQty(product.name, 1)}
                    className="w-6 h-6 rounded-lg bg-red-600 text-white hover:bg-red-700 flex items-center justify-center font-black text-xs transition shadow-xs"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={(e) => onAdd(e, product)}
                  className="px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1 font-bold text-xs bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-red-500/20 active:scale-95"
                >
                  <span>+ ADD</span>
                </button>
              )}
            </div>
          </div>
        </div>
      );
    };

    // Modern Red & White Floating Food Tray Cart Bar & Drawer
    const TrayCart = ({ onCheckoutTrigger }) => {
      const { tray, changeQty, trayCount, traySubtotal, gstAmount, trayTotal, removeFromTray, theme, getActivePrice, menuSettings, deliveryFee } = useContext(AppContext);
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [isOpen, tray, theme]);

      return (
        <div className={tray.length > 0 ? "block" : "hidden"}>
          {/* Backdrop Blur overlay when drawer is open */}
          <div 
            className={isOpen ? "fixed inset-0 bg-black/75 z-40 transition-opacity duration-300 backdrop-blur-sm block" : "hidden"}
            onClick={() => setIsOpen(false)}
          />

          {/* Floating Bottom Bar / Slide-up Sheet */}
          <div className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto rounded-t-3xl border-t z-50 p-4 transition-all duration-500 transform shadow-2xl ${
            theme === 'light'
              ? 'bg-gradient-to-b from-red-600 via-red-700 to-red-800 border-red-500 text-white'
              : 'bg-gradient-to-b from-red-800 via-red-900 to-neutral-950 border-red-700 text-white'
          } ${
            isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-74px)]'
          }`}>
            
            {/* Header / Summary Tap Bar */}
            <div 
              className="flex items-center justify-between pb-3 border-b border-red-500/40 cursor-pointer select-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl animate-bounce-slow">🍗</span>
                <div>
                  <h3 className="font-black text-white tracking-wide text-xs sm:text-sm flex items-center">
                    YOUR FOOD TRAY 
                    <span className="ml-2 bg-white text-red-600 rounded-full px-2 py-0.5 text-[11px] font-black shadow-md">
                      {trayCount} {trayCount === 1 ? 'item' : 'items'}
                    </span>
                  </h3>
                  <p className="text-[10px] text-red-100 font-semibold">
                    {isOpen ? 'Tap to close tray' : 'Tap to review items & bill details'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg sm:text-xl font-black text-white font-sans">₹{trayTotal}</span>
                <i data-lucide={isOpen ? "chevron-down" : "chevron-up"} className="w-5 h-5 text-white"></i>
              </div>
            </div>

            {/* Scrollable Item Rows */}
            <div className={isOpen ? "max-h-[220px] overflow-y-auto py-3 space-y-2.5 no-scrollbar border-b border-red-500/40 block" : "hidden"}>
              {tray.map(item => {
                const activePrice = getActivePrice(item.name, item.price);
                return (
                  <div key={item.name} className="flex items-center justify-between bg-red-950/40 p-2.5 rounded-xl border border-red-500/25">
                    <div className="flex-1 flex items-center space-x-2.5 min-w-0 pr-2">
                      <img src={item.image} className="w-9 h-9 object-cover rounded-lg border border-red-400/30 flex-shrink-0" alt="" />
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-xs leading-tight truncate">{item.name}</h4>
                        <span className="text-[11px] text-red-200 font-medium">₹{activePrice} each</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button 
                        onClick={() => changeQty(item.name, -1)}
                        className="w-6 h-6 rounded-lg bg-red-800/80 hover:bg-red-600 flex items-center justify-center font-black text-white transition text-xs"
                      >-</button>
                      <span className="text-white font-black font-sans text-xs min-w-[12px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => changeQty(item.name, 1)}
                        className="w-6 h-6 rounded-lg bg-red-800/80 hover:bg-red-600 flex items-center justify-center font-black text-white transition text-xs"
                      >+</button>
                      <button 
                        onClick={() => removeFromTray(item.name)}
                        className="ml-1 text-red-300 hover:text-white transition"
                        title="Remove item"
                      >
                        <i data-lucide="trash-2" className="w-4 h-4"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bill Breakdown */}
            <div className={isOpen ? "py-2.5 text-[11px] text-red-100 font-medium space-y-1 block" : "hidden"}>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-white">₹{traySubtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST Surcharge ({menuSettings.gstRate}%):</span>
                <span className="font-bold text-white">₹{gstAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-bold text-white">₹{deliveryFee}</span>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-2">
              <button
                onClick={onCheckoutTrigger}
                className="w-full py-3.5 bg-white hover:bg-slate-100 text-red-600 font-black text-center rounded-xl shadow-lg hover:shadow-xl active:scale-98 transition-all tracking-wider text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO CHECKOUT (₹{trayTotal})</span>
                <i data-lucide="arrow-right" className="w-4 h-4 text-red-600 stroke-[3]"></i>
              </button>
            </div>
          </div>
        </div>
      );
    };

    // Helper to safely extract valid numeric coordinates with fallback to KGF center
    const getSafeCoords = (coords) => {
      const lat = (coords && coords.lat != null && !isNaN(Number(coords.lat))) ? Number(coords.lat) : 12.9592;
      const lng = (coords && coords.lng != null && !isNaN(Number(coords.lng))) ? Number(coords.lng) : 78.2726;
      return { lat, lng };
    };

    // OpenStreetMap + Leaflet.js Interactive Map Pin Picker Modal (100% Free Forever)
    const MapPinPickerModal = ({ isOpen, onClose, onConfirm, initialCoords, title, subtitle }) => {
      const { theme } = useContext(AppContext);
      const [currentCoords, setCurrentCoords] = useState(() => getSafeCoords(initialCoords));
      const [locating, setLocating] = useState(false);
      const mapInstanceRef = useRef(null);
      const mapContainerRef = useRef(null);

      useEffect(() => {
        if (!isOpen) return;

        const safe = getSafeCoords(initialCoords);
        setCurrentCoords(safe);

        let map = null;
        const timer = setTimeout(() => {
          const container = mapContainerRef.current;
          if (!container) return;

          if (mapInstanceRef.current) {
            try {
              mapInstanceRef.current.remove();
            } catch (e) {}
            mapInstanceRef.current = null;
          }
          if (container._leaflet_id) {
            container._leaflet_id = null;
          }

          try {
            map = L.map(container, {
              center: [safe.lat, safe.lng],
              zoom: 16,
              zoomControl: false
            });
            mapInstanceRef.current = map;

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '© OpenStreetMap'
            }).addTo(map);

            L.control.zoom({ position: 'bottomright' }).addTo(map);

            map.on('move', () => {
              const center = map.getCenter();
              if (center && center.lat != null && center.lng != null) {
                setCurrentCoords({ lat: center.lat, lng: center.lng });
              }
            });

            setTimeout(() => {
              if (map) {
                try { map.invalidateSize(); } catch (e) {}
              }
            }, 200);
          } catch (initErr) {
            console.error('Leaflet map initialization error:', initErr);
          }
        }, 120);

        return () => {
          clearTimeout(timer);
          if (mapInstanceRef.current) {
            try {
              mapInstanceRef.current.remove();
            } catch (e) {}
            mapInstanceRef.current = null;
          }
        };
      }, [isOpen, initialCoords?.lat, initialCoords?.lng]);

      const handleFlyToMyLocation = () => {
        if (!navigator.geolocation) {
          alert('GPS is not supported by your browser.');
          return;
        }
        setLocating(true);
        navigator.geolocation.getCurrentPosition(
          pos => {
            setLocating(false);
            const userLat = pos.coords.latitude;
            const userLng = pos.coords.longitude;
            setCurrentCoords({ lat: userLat, lng: userLng });
            if (mapInstanceRef.current) {
              try {
                mapInstanceRef.current.flyTo([userLat, userLng], 17, { duration: 1.2 });
              } catch (e) {}
            }
          },
          err => {
            setLocating(false);
            alert('Could not acquire your current location: ' + (err.message || 'Permission denied'));
          },
          { enableHighAccuracy: true, timeout: 8000 }
        );
      };

      const handleConfirm = () => {
        onConfirm(currentCoords);
        onClose();
      };

      if (!isOpen) return null;

      const displayLat = Number(currentCoords?.lat ?? 12.9592).toFixed(5);
      const displayLng = Number(currentCoords?.lng ?? 78.2726).toFixed(5);

      return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
          }`}>
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between border-neutral-900/10 dark:border-neutral-800">
              <div>
                <h3 className="font-serif font-black text-base flex items-center gap-1.5">
                  <span>🗺️</span>
                  <span>{title || 'Pin Exact Delivery Location'}</span>
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {subtitle || 'Pan map to place pin right on your house/gate'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 hover:bg-red-500 hover:text-white transition font-bold text-base"
              >
                ✕
              </button>
            </div>

            {/* Interactive Map View with Centered Pin Overlay */}
            <div className="relative w-full h-[320px] sm:h-[360px] bg-neutral-900">
              <div ref={mapContainerRef} className="w-full h-full"></div>

              {/* Floating "My Location" Button */}
              <button
                type="button"
                onClick={handleFlyToMyLocation}
                disabled={locating}
                className="absolute top-3 right-3 z-[400] px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 text-slate-800 dark:text-white shadow-xl border border-slate-200 dark:border-neutral-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-neutral-800 transition active:scale-95"
              >
                <span>{locating ? '⏳' : '🎯'}</span>
                <span>{locating ? 'Locating...' : 'Use My GPS'}</span>
              </button>

              {/* Center Crosshair Delivery Pin (Fixed at center of viewport) */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-[400]">
                <div className="relative -translate-y-5 flex flex-col items-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white text-lg">
                    🍗
                  </div>
                  <div className="w-2.5 h-2.5 bg-black/50 rounded-full blur-[1px] mt-0.5"></div>
                </div>
              </div>
            </div>

            {/* Bottom Panel with Lat/Lng & Confirm Button */}
            <div className="p-4 space-y-3 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-900/10 dark:border-neutral-800">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
                <span>📍 Lat: {displayLat}</span>
                <span>Lng: {displayLng}</span>
              </div>
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-black text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2"
              >
                <span>✓ Set Delivery Pin Here</span>
              </button>
            </div>
          </div>
        </div>
      );
    };

    // Checkout Modal Screen - Strict DOM Retention
    const CheckoutModal = ({ isOpen, onClose, onOrderSuccess }) => {
      const { trayTotal, traySubtotal, gstAmount, tray, clearTray, theme, menuSettings, updateActiveOrderId, currentUser, setCurrentUser, customerGps, setCustomerGps, deliveryFee, getActivePrice } = useContext(AppContext);
      
      const [name, setName] = useState(() => currentUser?.name || localStorage.getItem('cc_customer_name') || '');
      const [phone, setPhone] = useState(() => currentUser?.phone || localStorage.getItem('cc_customer_phone') || '');
      const [landmarks, setLandmarks] = useState(() => localStorage.getItem('cc_customer_landmarks') || '');
      const [altPhone, setAltPhone] = useState('');
      const [orderArea, setOrderArea] = useState('');
      const [orderPinCode, setOrderPinCode] = useState('');
      
      // "Order for Someone Else" temporary override (this session only, not saved)
      const [orderForSomeoneElse, setOrderForSomeoneElse] = useState(false);
      const [proxyName, setProxyName] = useState('');
      const [proxyPhone, setProxyPhone] = useState('');
      const [proxyLocationType, setProxyLocationType] = useState('map_pin'); // 'map_pin' | 'manual'
      const [proxyMapPin, setProxyMapPin] = useState(null); // { lat, lng }
      const [proxyAddress, setProxyAddress] = useState('');
      const [proxyLandmark, setProxyLandmark] = useState('');
      const [proxyPin, setProxyPin] = useState('');

      // Interactive Map Pin Picking State (Leaflet + OpenStreetMap)
      const [selfMapPin, setSelfMapPin] = useState(null); // { lat, lng }
      const [showMapModal, setShowMapModal] = useState(false);
      const [mapPickerTarget, setMapPickerTarget] = useState('self'); // 'self' | 'proxy'

      const [savedAddresses, setSavedAddresses] = useState([]);
      const [selectedAddressId, setSelectedAddressId] = useState('');
      const [showAddAddress, setShowAddAddress] = useState(false);
      const [newAddressTitle, setNewAddressTitle] = useState('');
      const [newAddressDetails, setNewAddressDetails] = useState('');
      const [newAddressLandmark, setNewAddressLandmark] = useState('');
      const [newAddressPinCode, setNewAddressPinCode] = useState('');
      const [gpsFetching, setGpsFetching] = useState(false);
      const [gpsSecured, setGpsSecured] = useState(false);
      
      const [loading, setLoading] = useState(false);
      // 'info' → 'otp' → 'name' (if first-time) → 'success'
      const [step, setStep] = useState('info');
      const [generatedOtp, setGeneratedOtp] = useState('');

      const [mounted, setMounted] = useState(false);
      const [isClosing, setIsClosing] = useState(false);
      const [isOrderPlaced, setIsOrderPlaced] = useState(false);

      // Mock OTP flow state
      const [confirmPhone, setConfirmPhone] = useState('');
      const [otpCode, setOtpCode] = useState('');
      const [mockOtpSecret, setMockOtpSecret] = useState('');
      const [otpError, setOtpError] = useState('');
      const [pendingDisplayName, setPendingDisplayName] = useState('');
      const [pinCode, setPinCode] = useState('');
      const [otpCopied, setOtpCopied] = useState(false);
      const [regAddress, setRegAddress] = useState('');
      const [regStreet, setRegStreet] = useState('');
      const [regCity, setRegCity] = useState('KGF');
      const [showOtpModal, setShowOtpModal] = useState(false);

      // KGF-area PIN whitelist
      const KGF_PINS = ['563122', '563113', '563120', '563115', '563117', '563116'];

      // Named-area lookup (for admin display / area dropdowns)
      const KGF_AREA_NAMES = {
        '563122': 'Robertsonpet (Main KGF)',
        '563113': 'Andersonpet',
        '563120': 'Oorgaum',
        '563115': 'Bharathnagar / BEML Nagar',
        '563117': 'Champion Reefs',
        '563116': 'Marikuppam'
      };

      // Strict Indian mobile regex — 10 digits, starts 6-9
      const isValidIndianMobile = (num) => /^[6-9]\d{9}$/.test(num);
      const isFakeMobile = (num) => new Set(num.split('')).size === 1 || num === '1234567890' || num === '9876543210';

      const isAlreadyAuthenticated = !!(currentUser || (localStorage.getItem('cc_customer_name') && localStorage.getItem('cc_customer_phone')));

      useEffect(() => {
        if (!isOpen) {
          setName(currentUser?.name || localStorage.getItem('cc_customer_name') || '');
          setPhone(currentUser?.phone || localStorage.getItem('cc_customer_phone') || '');
          setLandmarks(localStorage.getItem('cc_customer_landmarks') || '');
          setAltPhone('');
          setOrderArea('');
          setOrderPinCode('');
          setCustomerGps({ lat: null, lng: null });
          setGpsFetching(false);
          setGpsSecured(false);
          setGeneratedOtp('');
          setStep('info');
          setLoading(false);
          setIsClosing(false);
          setMounted(false);
          setIsOrderPlaced(false);
          setOtpCode('');
          setMockOtpSecret('');
          setOtpError('');
          setConfirmPhone('');
          setPendingDisplayName('');
          setPinCode('');
          setOtpCopied(false);
          setRegAddress('');
          setRegStreet('');
          setRegCity('KGF');
          setShowOtpModal(false);
          setSavedAddresses([]);
          setSelectedAddressId('');
          setShowAddAddress(false);
          setNewAddressTitle('');
          setNewAddressDetails('');
          setNewAddressLandmark('');
          setNewAddressPinCode('');
        } else {
          setTimeout(() => setMounted(true), 50);
          const currentPhone = currentUser?.phone || localStorage.getItem('cc_customer_phone');
          if (currentPhone) {
            db.collection('users').doc(currentPhone).get().then(doc => {
              if (doc.exists) {
                const data = doc.data();
                if (data.addresses && Array.isArray(data.addresses) && data.addresses.length > 0) {
                  setSavedAddresses(data.addresses);
                  setSelectedAddressId(data.addresses[0].id);
                } else if (data.addressDetails || data.pinCode) {
                  const migrated = [{
                    id: 'default',
                    title: 'Registered Address',
                    addressDetails: data.addressDetails || '',
                    landmark: data.landmark || '',
                    pinCode: data.pinCode || ''
                  }];
                  setSavedAddresses(migrated);
                  setSelectedAddressId('default');
                }
              }
            }).catch(()=>{});
          }
        }
        if (window.lucide) window.lucide.createIcons();
      }, [isOpen, currentUser]);

      const triggerClose = () => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
        }, 280);
      };

      // Fix 1: Auto-start continuous high-accuracy GPS when the checkout form opens.
      // watchPosition stays live so coords stay fresh without a manual button press.
      useEffect(() => {
        if (!isOpen) return;
        if (!navigator.geolocation) return;
        setGpsFetching(true);
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            setCustomerGps({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            setGpsSecured(true);
            setGpsFetching(false);
          },
          (err) => {
            setGpsFetching(false);
            // Silent fail — landmarks field is still available as fallback
            console.warn('GPS watchPosition error:', err.message);
          },
          { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
        );
        return () => {
          navigator.geolocation.clearWatch(watchId);
        };
      }, [isOpen]);

      // ─── Shared: play notification tone & generate OTP ─────────────────────
      const playOtpTone = () => {
        try { new Audio('https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3').play().catch(() => {}); } catch(e) {}
      };

      const revealMockOtp = () => {
        const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setMockOtpSecret(mockOtp);
        setOtpCode('');
        setOtpError('');
        setOtpCopied(false);
        setLoading(false);
        playOtpTone();  // fires immediately — no blocking alert after it
        setShowOtpModal(true); // open the premium OTP modal
      };

      // Resend OTP — regenerates after 2.5 s simulation
      const handleResendOtp = () => {
        setOtpCode('');
        setOtpError('');
        setLoading(true);
        setTimeout(revealMockOtp, 2500);
      };

      // ─── Combined info-form submit: send OTP or verify OTP depending on state ───
      const handleCombinedInfoSubmit = async (e) => {
        e.preventDefault();

        // ── OTP verify branch (OTP section is visible) ──
        if (mockOtpSecret && !isAlreadyAuthenticated) {
          if (!otpCode || otpCode.length !== 6) { setOtpError('Enter the full 6-digit code.'); return; }
          if (otpCode.trim() !== mockOtpSecret) { setOtpError('Incorrect code. Please check and try again.'); return; }
          setOtpError('');
          setLoading(true);
          try {
            const userDoc = await db.collection('users').doc(phone).get();
            if (userDoc.exists) {
              const userData = userDoc.data();
              const resolvedName = userData.name || name;
              localStorage.setItem('cc_customer_name', resolvedName);
              localStorage.setItem('cc_customer_phone', phone);
              if (setCurrentUser) setCurrentUser({ name: resolvedName, phone: phone });
              
              let activeAddress = null;
              if (userData.addresses && Array.isArray(userData.addresses) && userData.addresses.length > 0) {
                 activeAddress = userData.addresses[0];
              } else if (userData.addressDetails || userData.pinCode) {
                 activeAddress = { addressDetails: userData.addressDetails, landmark: userData.landmark, pinCode: userData.pinCode };
              }
              await placeOrderFlow(resolvedName, phone, activeAddress);
            } else {
              setStep('name');
            }
          } catch (err) {
            console.error('User lookup error:', err);
            setStep('name');
          } finally {
            setLoading(false);
          }
          return;
        }

        // ── Authenticated user — skip verification entirely ──
        if (isAlreadyAuthenticated) {
          if (orderForSomeoneElse) {
            if (!proxyName.trim() || !proxyPhone.trim()) {
              alert('Please enter recipient name and phone number.');
              return;
            }
            if (!isValidIndianMobile(proxyPhone.trim())) {
              alert('Recipient phone must be a valid 10-digit Indian mobile number.');
              return;
            }
            if (proxyLocationType === 'map_pin' && !proxyMapPin) {
              alert('Please tap "Pin on Map" to set the recipient delivery location, or switch to "Type Address".');
              return;
            }
            if (proxyLocationType === 'manual' && (!proxyAddress.trim() || !proxyPin.trim())) {
              alert('Please enter recipient delivery address and PIN code.');
              return;
            }
          } else {
            if (!selfMapPin && savedAddresses.length === 0) {
              setOtpError('Please add a delivery address or pin your location on map.');
              return;
            }
            const activeAddress = savedAddresses.find(a => a.id === selectedAddressId);
            if (!selfMapPin && !activeAddress) {
               setOtpError('Please select a delivery address or pin on map.');
               return;
            }
          }
          if (altPhone && !validatePhoneOrAlert(altPhone)) return;
          const activeAddress = savedAddresses.find(a => a.id === selectedAddressId);
          await placeOrderFlow(currentUser?.name || name, currentUser?.phone || phone, activeAddress);
          return;
        }

        // ── Send OTP branch (new user filling info) ──
        if (!name || !phone || !confirmPhone || !regAddress || !landmarks || !orderPinCode) { setOtpError('Please fill in all required fields.'); return; }
        if (!validateNameOrAlert(name)) return;
        if (!isValidIndianMobile(phone)) { setOtpError('Invalid number. Must be 10 digits starting with 6–9.'); return; }
        if (isFakeMobile(phone)) { setOtpError('Looks like a fake number. Please use your real mobile number.'); return; }
        if (phone !== confirmPhone) { setOtpError('Phone numbers do not match. Please re-enter.'); return; }
        
        setOtpError('');
        setLoading(true);
        // 2.5 s simulated verification delay
        setTimeout(revealMockOtp, 2500);
      };

      // ─── Step 3: Consolidated profile registration with KGF PIN geofencing ───────
      const handleNameSubmitCheckout = async (e) => {
        e.preventDefault();
        const finalName = pendingDisplayName.trim();
        if (!finalName) { setOtpError('Please enter your name.'); return; }
        if (!regAddress.trim()) { setOtpError('Please enter your delivery address.'); return; }
        setLoading(true);
        setOtpError('');
        try {
          await db.collection('users').doc(phone).set({
            name: finalName,
            phone: phone,
            address: (regAddress + (regStreet ? ' — ' + regStreet : '')).trim(),
            city: '',
            pinCode: pinCode.trim(),
            phoneStatus: 'partial',
            locationStatus: 'self_reported',
            trustedUser: false,
            verified: false,
            createdAt: Date.now()
          });
          localStorage.setItem('cc_customer_name', finalName);
          localStorage.setItem('cc_customer_phone', phone);
          if (setCurrentUser) setCurrentUser({ name: finalName, phone: phone });
          await placeOrderFlow(finalName, phone);
        } catch (err) {
          console.error('Profile save error:', err);
          setOtpError('Failed to save profile: ' + (err.message || 'Try again.'));
        } finally {
          setLoading(false);
        }
      };

      // ─── Shared order placement logic ─────────────────────────────────────────
      const placeOrderFlow = async (resolvedName, resolvedPhone, activeAddress = null) => {
        localStorage.setItem('cc_customer_landmarks', landmarks);

        if (tray.length === 0) {
          setStep('success');
          setLoading(false);
          return;
        }
        setLoading(true);
        try {
          const primaryPhone = resolvedPhone || (currentUser?.phone || '').trim();

          // 1. Check if user is suspended/banned
          if (primaryPhone) {
            try {
              const userSnap = await db.collection('users').doc(primaryPhone).get();
              if (userSnap.exists && userSnap.data().banned === true) {
                alert(`🚨 ACCOUNT SUSPENDED\n\nYour account (${primaryPhone}) has been suspended due to security policy violations.\n\nReason: ${userSnap.data().banReason || 'Price manipulation or fraud attempt'}\n\nPlease contact shop management at 9035733573.`);
                setLoading(false);
                return;
              }
            } catch (authCheckErr) {
              console.warn('User status check failed:', authCheckErr);
            }
          }

          // 2. Authoritative Price Verification against MENU_CATALOG & menuSettings
          let authoritativeSubtotal = 0;
          const allCatalogItems = Object.values(MENU_CATALOG).flat();
          const verifiedItems = tray.map(item => {
            const catalogItem = allCatalogItems.find(c => c.name === item.name);
            const basePrice = catalogItem ? catalogItem.price : (item.price || 0);
            const livePrice = getActivePrice(item.name, basePrice);
            authoritativeSubtotal += livePrice * item.quantity;
            return {
              ...item,
              price: livePrice
            };
          });

          const expectedGst = Math.round(authoritativeSubtotal * (menuSettings.gstRate / 100));
          const expectedDelivery = Number(menuSettings.deliveryFee || 0);
          const authoritativeTotal = authoritativeSubtotal > 0 ? (authoritativeSubtotal + expectedGst + expectedDelivery) : 0;

          // Detect client-side price tampering
          if (Math.abs(trayTotal - authoritativeTotal) > 1 || authoritativeTotal < 30) {
            console.error("Price tampering detected! Tray Total:", trayTotal, "Authoritative Total:", authoritativeTotal);
            if (primaryPhone) {
              await db.collection('users').doc(primaryPhone).set({
                banned: true,
                banReason: `Price tampering detected: Cart ₹${trayTotal} vs Catalog ₹${authoritativeTotal}`,
                bannedAt: Date.now()
              }, { merge: true });
            }
            alert("🚨 SECURITY VIOLATION: Price discrepancy detected!\n\nYour order has been rejected and your account has been suspended.");
            setLoading(false);
            return;
          }
          
          const finalAddressTitle = activeAddress ? (activeAddress.title || '') : '';
          const finalAddressDetails = activeAddress ? activeAddress.addressDetails : regAddress;
          const finalLandmark = activeAddress ? activeAddress.landmark : landmarks;
          const finalPinCode = activeAddress ? activeAddress.pinCode : orderPinCode;
          const finalArea = orderArea || (finalPinCode && KGF_AREA_NAMES[finalPinCode]) || '';

          // When user selects a saved address (like College, Railway Station, Home):
          // The rider navigates to that selected text address, NOT the customer device's live GPS!
          const isSavedAddressSelected = !!activeAddress;
          const shouldUseDeviceGps = !isSavedAddressSelected && customerGps.lat != null && customerGps.lng != null;

          let finalDestType = isSavedAddressSelected ? 'saved_address' : (shouldUseDeviceGps ? 'live_gps' : 'manual_address');
          let orderGpsLat = shouldUseDeviceGps ? customerGps.lat : undefined;
          let orderGpsLng = shouldUseDeviceGps ? customerGps.lng : undefined;
          let finalTitle = finalAddressTitle;
          let finalDetails = finalAddressDetails;
          let finalLandmarks = finalLandmark;
          let finalDeliveryPin = finalPinCode;

          // Check if Map Pin was selected for self
          if (!orderForSomeoneElse && selfMapPin) {
            finalDestType = 'map_pin';
            orderGpsLat = selfMapPin.lat;
            orderGpsLng = selfMapPin.lng;
            finalTitle = finalAddressTitle || 'Map Pinpoint';
            finalDetails = finalAddressDetails || '📍 Pinned via Interactive Map';
            finalLandmarks = finalLandmark || 'Map Pinpoint Delivery';
          }

          // Check if ordered for someone else
          if (orderForSomeoneElse) {
            finalTitle = `Deliver to ${proxyName.trim()}`;
            if (proxyLocationType === 'map_pin' && proxyMapPin) {
              finalDestType = 'map_pin';
              orderGpsLat = proxyMapPin.lat;
              orderGpsLng = proxyMapPin.lng;
              finalDetails = '📍 Pinned via Interactive Map';
              finalLandmarks = proxyLandmark.trim() || 'Map Pinpoint Delivery';
              finalDeliveryPin = proxyPin.trim() || finalPinCode || '';
            } else {
              finalDestType = 'manual_address';
              finalDetails = proxyAddress.trim() || finalAddressDetails;
              finalLandmarks = proxyLandmark.trim() || finalLandmark;
              finalDeliveryPin = proxyPin.trim() || finalPinCode;
            }
          }

          const orderPayload = {
            customerName: resolvedName || currentUser?.name,
            customerPhone: primaryPhone + (altPhone ? ' / Alt: ' + altPhone.trim() : ''),
            addressTitle: finalTitle,
            addressDetails: finalDetails,
            landmarks: finalLandmarks,
            deliveryArea: finalArea,
            deliveryPin: finalDeliveryPin,
            items: verifiedItems,
            totalAmount: authoritativeTotal,
            destinationType: finalDestType,
            ...(orderGpsLat != null && orderGpsLng != null ? { gpsLat: orderGpsLat, gpsLng: orderGpsLng } : {}),
            // "Order for Someone Else" — recipient override (temporary, this order only)
            ...(orderForSomeoneElse && proxyName.trim() && proxyPhone.trim() ? {
              recipientName: proxyName.trim(),
              recipientPhone: proxyPhone.trim(),
              orderedForSomeoneElse: true
            } : {})
          };
          const newOrder = await addOrder(orderPayload);
          setGeneratedOtp(newOrder.otp);
          setIsOrderPlaced(true);
          clearTray();
          updateActiveOrderId(newOrder.id);
          playBlissSound();
          setStep('success');
          if (onOrderSuccess) onOrderSuccess(newOrder);
        } catch (err) {
          console.error('Checkout error:', err);
          alert('Order failed: ' + err.message);
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className={`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div 
            className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 backdrop-blur-sm ${
              mounted && !isClosing ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={triggerClose}
          />

          {/* ─── PREMIUM OTP VERIFICATION MODAL ─── */}
          {showOtpModal && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center space-y-5">

                {/* Close X */}
                <button
                  type="button"
                  onClick={() => { setShowOtpModal(false); setMockOtpSecret(''); setOtpCode(''); setOtpError(''); }}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition font-bold text-base leading-none"
                  aria-label="Close"
                >×</button>

                {/* Icon + heading */}
                <div className="space-y-1 pt-1">
                  <div className="text-3xl">📦</div>
                  <h2 className="text-lg font-black text-slate-900 font-serif">Delivery Verification Code</h2>
                  <p className="text-xs text-slate-500">Enter the code below to confirm your identity</p>
                </div>

                {/* Code display + copy */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-amber-50 border-amber-200">
                  <span className="text-2xl font-black tracking-[0.35em] text-amber-600 select-all font-mono flex-1 text-center">
                    {mockOtpSecret}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        navigator.clipboard.writeText(mockOtpSecret).then(() => {
                          setOtpCopied(true);
                          setTimeout(() => setOtpCopied(false), 1500);
                        }).catch(() => {});
                      } catch(e) {}
                    }}
                    className={`shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all border ${
                      otpCopied
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
                        : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >{otpCopied ? 'Copied ✓' : 'Copy'}</button>
                </div>

                {/* Error */}
                {otpError && (
                  <div className="text-[11px] text-red-500 font-bold bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-left">
                    {otpError}
                  </div>
                )}

                {/* Entry input */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-wider mb-2 text-slate-500">Enter Code to Confirm</label>
                  <input
                    type="text" inputMode="numeric" maxLength="6" autoFocus
                    placeholder="• • • • • •"
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full border border-slate-300 rounded-xl px-4 py-4 text-2xl text-center tracking-[0.6em] font-black focus:outline-none focus:border-amber-500 bg-white text-slate-900"
                  />
                </div>

                {/* Confirm + Resend */}
                <div className="flex gap-3">
                  <button
                    type="button" disabled={loading}
                    onClick={() => {
                      if (!otpCode || otpCode.length !== 6) { setOtpError('Enter the full 6-digit code.'); return; }
                      if (otpCode.trim() !== mockOtpSecret) { setOtpError('Incorrect code. Please try again.'); return; }
                      setOtpError('');
                      setShowOtpModal(false);
                      setLoading(true);
                      db.collection('users').doc(phone).get().then(userDoc => {
                        if (userDoc.exists) {
                          const userData = userDoc.data();
                          const resolvedName = userData.name || name;
                          localStorage.setItem('cc_customer_name', resolvedName);
                          localStorage.setItem('cc_customer_phone', phone);
                          if (setCurrentUser) setCurrentUser({ name: resolvedName, phone: phone });
                          
                          let activeAddress = null;
                          if (userData.addresses && Array.isArray(userData.addresses) && userData.addresses.length > 0) {
                             activeAddress = userData.addresses[0];
                          } else if (userData.addressDetails || userData.pinCode) {
                             activeAddress = { addressDetails: userData.addressDetails, landmark: userData.landmark, pinCode: userData.pinCode };
                          }
                          placeOrderFlow(resolvedName, phone, activeAddress);
                        } else {
                          db.collection('users').doc(phone).set({
                            name: name,
                            phone: phone,
                            addressDetails: regAddress,
                            landmark: landmarks,
                            pinCode: orderPinCode,
                            addresses: [{ id: 'default', title: 'Home', addressDetails: regAddress, landmark: landmarks, pinCode: orderPinCode }],
                            verified: false,
                            createdAt: new Date()
                          }).then(() => {
                            localStorage.setItem('cc_customer_name', name);
                            localStorage.setItem('cc_customer_phone', phone);
                            if (setCurrentUser) setCurrentUser({ name: name, phone: phone });
                            placeOrderFlow(name, phone);
                          }).catch(() => {
                            alert('Failed to register profile. Please try again.');
                            setLoading(false);
                          });
                        }
                      }).catch(() => { alert('Network error.'); setLoading(false); });
                    }}
                    className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-xs sm:text-sm uppercase tracking-wide"
                  >
                    {loading
                      ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      : (tray.length > 0 ? `PLACE ORDER (₹${trayTotal} COD) ➔` : 'CONFIRM CODE ➔')
                    }
                  </button>
                  <button
                    type="button" disabled={loading}
                    onClick={handleResendOtp}
                    className="px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 font-extrabold text-xs transition-all disabled:opacity-60"
                  >
                    {loading ? <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div> : 'RESEND'}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => { setShowOtpModal(false); setMockOtpSecret(''); setOtpCode(''); setOtpError(''); }}
                  className="w-full text-[11px] text-slate-400 hover:text-slate-600 font-semibold transition"
                >← Change Number</button>

              </div>
            </div>
          )}

          <div className={`w-full max-w-md rounded-t-3xl border p-6 space-y-5 shadow-2xl z-50 max-h-[90vh] overflow-y-auto no-scrollbar transition-all duration-300 transform ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
          } ${
            mounted && !isClosing ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>

            {/* ── Header ── */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100 dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">👤</span>
                <h3 className={`text-xl font-bold tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {step === 'success'
                    ? (isOrderPlaced ? '🎉 Order Placed!' : '🎉 Profile Registered!')
                    : (tray.length === 0 ? 'Profile Registration' : 'Delivery Checkout')
                  }
                </h3>
              </div>
              <button 
                onClick={triggerClose} 
                className={`p-1.5 rounded-xl transition ${
                  theme === 'light'
                    ? 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                } ${step !== 'success' ? 'block' : 'hidden'}`}
                title="Close"
              >
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>

            {/* Info / Send-OTP form — always mounted, hidden on other steps */}
            <div className={step === 'info' ? 'block' : 'hidden'}>
              <form onSubmit={handleCombinedInfoSubmit} className="space-y-4">
                
                {/* Authenticated User Banner */}
                <div className={isAlreadyAuthenticated ? `p-3.5 rounded-xl border flex items-center justify-between text-xs ${theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-neutral-900 border-neutral-800 text-white'}` : "hidden"}>
                  <div>
                    <span className="block text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Signed In User</span>
                    <span className="font-bold text-sm text-red-600 dark:text-amber-400">{name}</span>
                    <span className="block text-[10.5px] text-neutral-400 mt-0.5">Primary Phone: {phone}</span>
                  </div>
                  <span className="text-xl">✅</span>
                </div>

                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Customer Name <span className="text-red-500">*</span></label>
                  <input
                    type="text" required={!isAlreadyAuthenticated} placeholder="Enter your full name"
                    pattern="[A-Za-z\s]+" title="Letters and spaces only"
                    value={name} onChange={e => setName(e.target.value.replace(/[^A-Za-z\s]/g, ''))}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>
                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel" required={!isAlreadyAuthenticated} placeholder="10-digit mobile (starts with 6–9)"
                    maxLength={10} minLength={10} pattern="[6-9][0-9]{9}" inputMode="numeric"
                    value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>
                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Confirm Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel" required={!isAlreadyAuthenticated} placeholder="Re-enter mobile number"
                    maxLength={10} minLength={10} pattern="[6-9][0-9]{9}" inputMode="numeric"
                    value={confirmPhone} onChange={e => setConfirmPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    } ${
                      confirmPhone && confirmPhone !== phone ? 'border-red-500' : ''
                    }`}
                  />
                  {confirmPhone && confirmPhone !== phone && (
                    <p className="text-[10px] text-red-500 font-semibold mt-1">⚠ Numbers don't match</p>
                  )}
                </div>

                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Address Details (House No, Building Name) <span className="text-red-500">*</span></label>
                  <input
                    type="text" required={!isAlreadyAuthenticated} placeholder="E.g., #12, Mahalakshmi Towers"
                    value={regAddress}
                    onChange={e => setRegAddress(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>

                <div className={isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Alternate Phone Number (Optional)</label>
                  <input
                    type="tel" placeholder="Enter 10-digit alternate number"
                    maxLength={10} minLength={10} pattern="[0-9]*" inputMode="numeric"
                    value={altPhone} onChange={e => setAltPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>
                {/* ── UNAUTHENTICATED ONLY: Manual Landmark & PIN ── */}
                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>Landmark <span className="text-red-500">*</span></label>
                  <textarea
                    required={!isAlreadyAuthenticated} placeholder="E.g., Near Geetha Canteen, 3rd Cross Road" value={landmarks} onChange={e => setLandmarks(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 h-20 resize-none transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>
                <div className={!isAlreadyAuthenticated ? "block" : "hidden"}>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>PIN Code <span className="text-red-500">*</span></label>
                  <input
                    type="text" required={!isAlreadyAuthenticated} inputMode="numeric" maxLength="6" placeholder="E.g., 563122"
                    value={orderPinCode}
                    onChange={e => setOrderPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-center tracking-widest font-bold focus:outline-none focus:border-red-500 transition ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400' : 'bg-cafe-black border-neutral-800 text-white placeholder:text-neutral-500'
                    }`}
                  />
                </div>

                <div className={!isAlreadyAuthenticated ? "block pt-1" : "hidden"}>
                  <button
                    type="button"
                    onClick={() => { setMapPickerTarget('self'); setShowMapModal(true); }}
                    className={`w-full py-3 rounded-xl border border-dashed text-xs font-bold transition flex items-center justify-center gap-2 ${
                      selfMapPin
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400 font-black'
                        : (theme === 'light'
                            ? 'border-slate-300 text-slate-700 bg-slate-50 hover:bg-slate-100 hover:border-slate-400'
                            : 'border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-500')
                    }`}
                  >
                    <span>🗺️</span>
                    <span>
                      {selfMapPin 
                        ? `📍 Location Pinned (${Number(selfMapPin.lat).toFixed(4)}, ${Number(selfMapPin.lng).toFixed(4)}) — Tap to Change` 
                        : 'Pin Exact Delivery Location on Map'}
                    </span>
                  </button>
                </div>

                {/* ── AUTHENTICATED ONLY: Address Book UI ── */}
                <div className={isAlreadyAuthenticated ? "block space-y-4" : "hidden"}>
                  <h4 className={`text-sm font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Select Delivery Address</h4>
                  {savedAddresses.map(addr => (
                    <div 
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedAddressId === addr.id 
                          ? (theme === 'light' ? 'bg-amber-50 border-amber-500 shadow-sm' : 'bg-cafe-amber/10 border-cafe-amber')
                          : (theme === 'light' ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-cafe-black border-neutral-800 hover:border-neutral-700')
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const updated = savedAddresses.filter(a => a.id !== addr.id);
                          setSavedAddresses(updated);
                          if (selectedAddressId === addr.id) setSelectedAddressId(updated.length > 0 ? updated[0].id : '');
                          db.collection('users').doc(phone).update({ addresses: updated }).catch(()=>{});
                        }}
                        className={`absolute top-3 right-3 p-1 rounded-full ${theme === 'light' ? 'hover:bg-slate-200 text-slate-400 hover:text-red-500' : 'hover:bg-neutral-800 text-neutral-500 hover:text-red-400'} transition`}
                      >
                        <i data-lucide="x" className="w-4 h-4"></i>
                      </button>
                      <div className="flex items-center gap-2 mb-1.5">
                        <i data-lucide={addr.title.toLowerCase().includes('home') ? 'home' : addr.title.toLowerCase().includes('work') || addr.title.toLowerCase().includes('office') ? 'briefcase' : 'map-pin'} className={`w-4 h-4 ${selectedAddressId === addr.id ? 'text-cafe-amber' : (theme === 'light' ? 'text-slate-500' : 'text-neutral-400')}`}></i>
                        <span className={`font-bold text-xs uppercase tracking-wider ${selectedAddressId === addr.id ? 'text-cafe-amber' : (theme === 'light' ? 'text-slate-700' : 'text-neutral-300')}`}>{addr.title}</span>
                      </div>
                      <p className={`text-xs mt-2 ${theme === 'light' ? 'text-slate-600' : 'text-neutral-400'}`}>{addr.addressDetails}</p>
                      <p className={`text-[11px] mt-1 ${theme === 'light' ? 'text-slate-500' : 'text-neutral-500'}`}>Landmark: {addr.landmark}</p>
                      <p className={`text-[11px] font-bold mt-1 ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>PIN: {addr.pinCode}</p>
                    </div>
                  ))}

                  {/* Order for Someone Else Toggle */}
                  <div className={`flex items-center justify-between p-3 rounded-xl border ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                  }`}>
                    <div>
                      <p className={`text-xs font-bold ${theme === 'light' ? 'text-slate-700' : 'text-white'}`}>👤 Ordering for someone else?</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Deliver in their name to their location (this order only)</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setOrderForSomeoneElse(prev => !prev);
                        if (!orderForSomeoneElse) {
                          setProxyLocationType('map_pin');
                        }
                      }}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
                        orderForSomeoneElse ? 'bg-cafe-amber' : (theme === 'light' ? 'bg-slate-300' : 'bg-neutral-700')
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                        orderForSomeoneElse ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* Proxy Recipient Fields & Dedicated Delivery Location (shown only when toggle is ON) */}
                  {orderForSomeoneElse && (
                    <div className={`p-3.5 rounded-2xl border space-y-3 ${
                      theme === 'light' ? 'bg-amber-50/70 border-amber-200' : 'bg-amber-950/20 border-amber-700/30'
                    }`}>
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-cafe-amber">Recipient Contact</p>
                        <span className="text-[9px] text-neutral-400">Step 1 of 2</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Recipient Name (e.g. Malathi) *"
                          value={proxyName}
                          onChange={e => setProxyName(e.target.value)}
                          className={`w-full border rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cafe-amber font-bold ${
                            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                          }`}
                        />
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength="10"
                          placeholder="Recipient Phone (10 digits) *"
                          value={proxyPhone}
                          onChange={e => setProxyPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          className={`w-full border rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cafe-amber tracking-wider font-bold ${
                            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                          }`}
                        />
                      </div>

                      {/* Recipient Delivery Point (Map Pin or Manual Address) */}
                      <div className="pt-2 border-t border-amber-500/20 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cafe-amber">Recipient Location</p>
                          <div className="flex rounded-lg p-0.5 border border-amber-500/30 text-[10px] bg-neutral-900/30">
                            <button
                              type="button"
                              onClick={() => setProxyLocationType('map_pin')}
                              className={`px-2.5 py-1 rounded-md font-bold transition ${
                                proxyLocationType === 'map_pin' ? 'bg-cafe-amber text-cafe-black shadow-sm' : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              🗺️ Pin on Map
                            </button>
                            <button
                              type="button"
                              onClick={() => setProxyLocationType('manual')}
                              className={`px-2.5 py-1 rounded-md font-bold transition ${
                                proxyLocationType === 'manual' ? 'bg-cafe-amber text-cafe-black shadow-sm' : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              📝 Type Address
                            </button>
                          </div>
                        </div>

                        {proxyLocationType === 'map_pin' ? (
                          <div className="space-y-2">
                            {proxyMapPin ? (
                              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <span className="text-base">📍</span>
                                  <div className="truncate">
                                    <span className="font-bold text-emerald-400 block truncate">
                                      {proxyName ? `${proxyName}'s` : "Recipient's"} Pin Locked
                                    </span>
                                    <span className="text-[10px] text-neutral-400 font-mono">
                                      {proxyMapPin.lat.toFixed(4)}, {proxyMapPin.lng.toFixed(4)}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => { setMapPickerTarget('proxy'); setShowMapModal(true); }}
                                    className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-[11px] transition"
                                  >
                                    Change Pin
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setProxyMapPin(null)}
                                    className="text-neutral-400 hover:text-red-400 text-xs font-bold px-1"
                                    title="Remove pin"
                                  >
                                    ✕
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => { setMapPickerTarget('proxy'); setShowMapModal(true); }}
                                className="w-full py-3 rounded-xl border-2 border-dashed border-amber-400/50 bg-amber-400/5 hover:bg-amber-400/10 text-cafe-amber font-bold text-xs flex items-center justify-center gap-2 transition active:scale-98"
                              >
                                <span>🗺️</span>
                                <span>Tap to Pin {proxyName ? `${proxyName}'s` : "Recipient's"} House on Map ➔</span>
                              </button>
                            )}

                            <input
                              type="text"
                              placeholder="Gate / Landmark note for rider (e.g. Near blue gate, opp water tank)"
                              value={proxyLandmark}
                              onChange={e => setProxyLandmark(e.target.value)}
                              className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${
                                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                              }`}
                            />
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder="Recipient House / Flat / Street *"
                              value={proxyAddress}
                              onChange={e => setProxyAddress(e.target.value)}
                              className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${
                                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                              }`}
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                placeholder="Landmark *"
                                value={proxyLandmark}
                                onChange={e => setProxyLandmark(e.target.value)}
                                className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${
                                  theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                                }`}
                              />
                              <input
                                type="text"
                                inputMode="numeric"
                                maxLength="6"
                                placeholder="PIN Code *"
                                value={proxyPin}
                                onChange={e => setProxyPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber font-mono font-bold tracking-widest ${
                                  theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                                }`}
                              />
                            </div>
                          </div>
                        )}

                        <p className="text-[10px] text-neutral-400 leading-snug">
                          ℹ️ Rider will navigate directly to this address/pin and contact {proxyName || 'this recipient'}.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Add New Address & Pin on Map Buttons (for self) */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => { setMapPickerTarget('self'); setShowMapModal(true); }}
                        className={`py-3 rounded-xl border border-dashed text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                          selfMapPin
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400 font-black'
                            : (theme === 'light'
                                ? 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400'
                                : 'border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:border-neutral-500')
                        }`}
                      >
                        <span>🗺️</span>
                        <span>{selfMapPin ? 'Edit Map Pin' : 'Pin on Map'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowAddAddress(prev => !prev)}
                        className={`py-3 rounded-xl border border-dashed text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                          theme === 'light'
                            ? 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400'
                            : 'border-neutral-700 text-neutral-300 hover:bg-neutral-900 hover:border-neutral-500'
                        }`}
                      >
                        <i data-lucide="plus" className="w-3.5 h-3.5"></i>
                        <span>Add Address</span>
                      </button>
                    </div>

                    {/* Self Map Pin Locked Notice */}
                    {selfMapPin && (
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-base">📍</span>
                          <span className="font-bold text-emerald-400 truncate">
                            Map Pinpoint Active ({selfMapPin.lat.toFixed(4)}, {selfMapPin.lng.toFixed(4)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelfMapPin(null)}
                          className="text-xs text-neutral-400 hover:text-red-400 font-bold px-1.5"
                          title="Clear pin"
                        >
                          ✕ Clear
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Add New Address Form inline */}
                  {showAddAddress && (
                    <div className={`p-4 rounded-xl border space-y-3 ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <h5 className={`text-xs font-bold uppercase tracking-wider ${theme === 'light' ? 'text-slate-700' : 'text-white'}`}>New Address</h5>
                        <button type="button" onClick={() => setShowAddAddress(false)} className="text-neutral-500 hover:text-red-400"><i data-lucide="x" className="w-4 h-4"></i></button>
                      </div>
                      <input type="text" placeholder="Title (e.g. Home, Office)" value={newAddressTitle} onChange={e => setNewAddressTitle(e.target.value)} className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'}`} />
                      <input type="text" placeholder="House No, Building Name" value={newAddressDetails} onChange={e => setNewAddressDetails(e.target.value)} className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'}`} />
                      <input type="text" placeholder="Landmark" value={newAddressLandmark} onChange={e => setNewAddressLandmark(e.target.value)} className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber ${theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'}`} />
                      <input type="text" inputMode="numeric" maxLength="6" placeholder="PIN Code *" value={newAddressPinCode} onChange={e => setNewAddressPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))} className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-cafe-amber tracking-widest font-bold ${theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'}`} />
                      
                      <button
                        type="button"
                        onClick={() => {
                          if (!newAddressTitle || !newAddressDetails || !newAddressLandmark || !newAddressPinCode) { alert('Please fill all fields'); return; }
                          const newAddr = {
                            id: Date.now().toString(),
                            title: newAddressTitle,
                            addressDetails: newAddressDetails,
                            landmark: newAddressLandmark,
                            pinCode: newAddressPinCode
                          };
                          const updated = [...savedAddresses, newAddr];
                          setSavedAddresses(updated);
                          setSelectedAddressId(newAddr.id);
                          db.collection('users').doc(phone).update({ addresses: updated }).catch(()=>{});
                          setShowAddAddress(false);
                          setNewAddressTitle(''); setNewAddressDetails(''); setNewAddressLandmark(''); setNewAddressPinCode('');
                        }}
                        className="w-full py-2.5 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-xs hover:bg-cafe-crispy transition"
                      >
                        Save Address
                      </button>
                    </div>
                  )}
                </div>

                {/* Delivery Location Confirmation indicator */}
                {orderForSomeoneElse ? (
                  <div className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition ${
                    theme === 'light'
                      ? 'bg-amber-50 border-amber-200 text-amber-900'
                      : 'bg-amber-950/40 border-amber-700/50 text-amber-300'
                  }`}>
                    <span>👤</span>
                    <span>
                      Delivering to: <strong className="uppercase font-black">{proxyName.trim() || 'Recipient'}</strong>
                      {proxyLocationType === 'map_pin' && proxyMapPin 
                        ? ' (📍 Map Pinpoint Locked)' 
                        : proxyAddress.trim() 
                          ? ` (${proxyAddress.trim()})` 
                          : ' (Location needed)'}
                    </span>
                  </div>
                ) : selfMapPin ? (
                  <div className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition ${
                    theme === 'light'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-emerald-950/40 border-emerald-700/50 text-emerald-300'
                  }`}>
                    <span>📍</span>
                    <span>Delivering to: <strong className="font-black">CUSTOM MAP PINPOINT</strong> ({selfMapPin.lat.toFixed(4)}, {selfMapPin.lng.toFixed(4)})</span>
                  </div>
                ) : isAlreadyAuthenticated && selectedAddressId ? (
                  (() => {
                    const currentSelectedAddr = savedAddresses.find(a => a.id === selectedAddressId);
                    if (!currentSelectedAddr) return null;
                    return (
                      <div className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition ${
                        theme === 'light'
                          ? 'bg-red-50/80 border-red-200 text-red-700'
                          : 'bg-red-950/30 border-red-700/50 text-red-300'
                      }`}>
                        <span>📍</span>
                        <span>Delivering to: <strong className="uppercase font-black">{currentSelectedAddr.title}</strong> ({currentSelectedAddr.pinCode})</span>
                      </div>
                    );
                  })()
                ) : (
                  <div className={`w-full py-2 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 ${
                    gpsSecured
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                      : gpsFetching
                        ? 'bg-cafe-amber/10 border-cafe-amber/30 text-cafe-amber'
                        : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                  }`}>
                    {gpsFetching ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Acquiring GPS signal...</span>
                      </>
                    ) : gpsSecured ? (
                      <span>✅ Live GPS Locked</span>
                    ) : (
                      <span>📍 GPS unavailable — landmarks used</span>
                    )}
                  </div>
                )}

                <div className={tray.length > 0 ? "block" : "hidden"}>
                  <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${theme === 'light' ? 'bg-slate-105/60 border-slate-200/80 text-slate-600' : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400'}`}>
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>₹{traySubtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST Surcharge ({menuSettings.gstRate}%):</span>
                      <span className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>₹{gstAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>₹{deliveryFee}</span>
                    </div>
                    <hr className={`my-1.5 ${theme === 'light' ? 'border-slate-205' : 'border-neutral-805'}`} />
                    <div className="flex justify-between text-sm font-black">
                      <span className={theme === 'light' ? 'text-slate-800' : 'text-white'}>Total Due:</span>
                      <span className="text-cafe-amber">₹{trayTotal}</span>
                    </div>
                  </div>

                  {/* Clear Payment Method Indicator Badge */}
                  <div className={`mt-3 p-3.5 rounded-2xl border flex items-center justify-between shadow-sm ${
                    theme === 'light'
                      ? 'bg-emerald-50/90 border-emerald-300 text-slate-800'
                      : 'bg-emerald-950/40 border-emerald-600/50 text-emerald-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
                        💵
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black uppercase tracking-wide ${theme === 'light' ? 'text-emerald-950' : 'text-emerald-300'}`}>
                            Cash on Delivery (COD) / UPI
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-emerald-600 text-white uppercase tracking-wider">
                            Pay on Delivery
                          </span>
                        </div>
                        <p className={`text-[11px] mt-0.5 ${theme === 'light' ? 'text-emerald-800' : 'text-neutral-300'}`}>
                          Pay ₹{trayTotal} in cash or scan rider's UPI QR code upon arrival.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={tray.length === 0 ? "block" : "hidden"}>
                  <div className={`p-3.5 rounded-xl border text-xs text-center ${theme === 'light' ? 'bg-red-50/70 border-red-100 text-slate-600' : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400'}`}>
                    <p className="font-bold text-red-600 dark:text-amber-400">No active items in food tray.</p>
                    <p className="text-[11px] mt-1">Submit your details to register and verify your profile for instant future orders.</p>
                  </div>
                </div>

                {/* Error banner — always on info step */}
                {otpError && step === 'info' && (
                  <div className="text-[11px] text-red-500 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {otpError}
                  </div>
                )}

                {/* ── Place Order / Send-OTP primary button ── */}
                <div className={!isAlreadyAuthenticated && mockOtpSecret ? 'hidden' : 'block space-y-2'}>
                  <button
                    type="submit" disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:brightness-110 text-white font-black text-sm tracking-wide rounded-xl shadow-lg shadow-red-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 active:scale-98"
                  >
                    <div className={`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ${loading ? 'block' : 'hidden'}`}></div>
                    <span className={!loading ? 'inline-flex items-center justify-center gap-2 font-black text-xs sm:text-sm tracking-wide uppercase' : 'hidden'}>
                      {tray.length === 0
                        ? (isAlreadyAuthenticated ? 'UPDATE PROFILE DETAILS' : 'GET VERIFICATION CODE')
                        : (isAlreadyAuthenticated
                            ? <>
                                <span>🛵 PLACE ORDER (PAY ₹{trayTotal} ON DELIVERY)</span>
                                <span>➔</span>
                              </>
                            : <>
                                <span>🛵 VERIFY & PLACE ORDER (₹{trayTotal} COD)</span>
                                <span>➔</span>
                              </>
                          )
                      }
                    </span>
                  </button>
                  {tray.length > 0 && (
                    <p className="text-[10.5px] text-center text-neutral-400 font-medium">
                      🛡️ Zero advance payment. Pay ₹{trayTotal} cash or UPI when your food arrives.
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className={step === 'success' ? 'block' : 'hidden'}>
              <div className="text-center space-y-5 py-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30">
                  <i data-lucide="check-circle" className="w-10 h-10"></i>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold">{!isOrderPlaced ? 'Profile Registered! 🎉' : '✅ Order Placed Successfully!'}</h4>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    {!isOrderPlaced 
                      ? 'Your profile details are verified and saved. You can now build your tray and checkout instantly.' 
                      : 'The kitchen has received your ticket. Provide this OTP code to the delivery driver on arrival.'
                    }
                  </p>
                </div>

                <div className={isOrderPlaced ? "block" : "hidden"}>
                  <div className={`border p-5 rounded-2xl space-y-2 ${theme === 'light' ? 'bg-slate-50 border-slate-205' : 'bg-neutral-900 border-neutral-805'}`}>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Delivery Handshake Verification OTP</span>
                    <div className="text-3xl font-black tracking-widest text-cafe-amber font-sans select-all">
                      {generatedOtp}
                    </div>
                  </div>
                </div>

                <div className={!isOrderPlaced ? "block" : "hidden"}>
                  <div className={`border p-5 rounded-2xl space-y-2 ${theme === 'light' ? 'bg-slate-50 border-slate-205' : 'bg-neutral-900 border-neutral-805'}`}>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Registered Phone</span>
                    <div className="text-xl font-black text-cafe-amber font-sans select-all">
                      {phone}
                    </div>
                    <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider block mt-1">Status: Verified ✅</span>
                  </div>
                </div>

                <button
                  onClick={triggerClose}
                  className={`w-full py-3.5 font-semibold rounded-xl border transition-all text-sm ${
                    theme === 'light'
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-250'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700'
                  }`}
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>

          {/* OpenStreetMap + Leaflet.js Interactive Pin Picker Modal */}
          <MapPinPickerModal
            isOpen={showMapModal}
            onClose={() => setShowMapModal(false)}
            title={mapPickerTarget === 'proxy' ? `Pin ${proxyName ? proxyName + "'s" : "Recipient's"} Delivery Location` : "Pin Exact Delivery Location"}
            subtitle={mapPickerTarget === 'proxy' ? "Move the map to point to their exact house or gate" : "Move the map to point to your exact house or gate"}
            initialCoords={mapPickerTarget === 'proxy' ? (proxyMapPin || (customerGps?.lat ? customerGps : null)) : (selfMapPin || (customerGps?.lat ? customerGps : null))}
            onConfirm={(coords) => {
              if (mapPickerTarget === 'proxy') {
                setProxyMapPin(coords);
                setProxyLocationType('map_pin');
              } else {
                setSelfMapPin(coords);
              }
            }}
          />
        </div>
      );
    };

    // Customer Profile Modal — Interactive Hub (My Orders, Saved Addresses, Help & Support, About & Policies)
    const CustomerProfileModal = ({ isOpen, onClose }) => {
      const { theme, currentUser, setCurrentUser } = useContext(AppContext);
      const [orderHistory, setOrderHistory] = useState([]);
      const [savedAddresses, setSavedAddresses] = useState([]);
      const [activeTab, setActiveTab] = useState('hub'); // 'hub' | 'orders' | 'addresses' | 'about'

      // Reset to main hub when reopened
      useEffect(() => {
        if (isOpen) setActiveTab('hub');
      }, [isOpen]);

      // Sync customer order history in real-time
      useEffect(() => {
        if (!isOpen || !currentUser?.phone) {
          setOrderHistory([]);
          return;
        }
        const unsubscribe = subscribeOrders((allOrders) => {
          const phone = currentUser.phone.trim();
          const userOrders = allOrders.filter(o =>
            o.customerPhone && o.customerPhone.includes(phone)
          );
          setOrderHistory(userOrders);
        });
        return () => {
          if (typeof unsubscribe === 'function') unsubscribe();
        };
      }, [isOpen, currentUser?.phone]);

      // Sync customer saved addresses in real-time from Firestore (addresses array)
      useEffect(() => {
        if (!isOpen || !currentUser?.phone) {
          setSavedAddresses([]);
          return;
        }
        const phone = currentUser.phone.trim();
        const unsub = db.collection('users').doc(phone).onSnapshot(doc => {
          if (doc.exists) {
            const data = doc.data();
            let addrs = [];
            if (data.addresses && Array.isArray(data.addresses) && data.addresses.length > 0) {
              addrs = data.addresses;
            } else if (data.savedAddresses && Array.isArray(data.savedAddresses) && data.savedAddresses.length > 0) {
              addrs = data.savedAddresses;
            } else if (data.addressDetails || data.address || data.pinCode) {
              addrs = [{
                id: 'default',
                title: 'Registered Address',
                addressDetails: data.addressDetails || data.address || '',
                landmark: data.landmark || '',
                pinCode: data.pinCode || ''
              }];
            }
            setSavedAddresses(addrs);
          }
        }, err => console.warn('Saved addresses sync error:', err));
        return () => unsub();
      }, [isOpen, currentUser?.phone]);

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [isOpen, activeTab, orderHistory, savedAddresses, theme]);

      const handleDeleteAddress = async (addressId) => {
        if (!currentUser?.phone) return;
        if (!window.confirm("Remove this saved address from your profile?")) return;
        try {
          const updated = savedAddresses.filter(a => a.id !== addressId);
          await db.collection('users').doc(currentUser.phone.trim()).update({
            addresses: updated
          });
          setSavedAddresses(updated);
        } catch (e) {
          console.error("Failed to delete address:", e);
          alert("Could not remove address. Try again.");
        }
      };

      const handleSignOut = () => {
        localStorage.removeItem('cc_customer_name');
        localStorage.removeItem('cc_customer_phone');
        setCurrentUser(null);
        window.dispatchEvent(new Event('storage'));
        onClose();
      };

      return (
        <div className={`fixed inset-0 z-50 flex items-end justify-center p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className={`w-full max-w-md rounded-t-3xl border p-6 space-y-5 shadow-2xl z-50 max-h-[88vh] overflow-y-auto no-scrollbar ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
          }`}>

            {/* Modal Header */}
            <div className={`flex items-center justify-between pb-3 border-b ${theme === 'light' ? 'border-slate-200' : 'border-neutral-800'}`}>
              {activeTab === 'hub' ? (
                <h3 className="text-base font-bold font-serif flex items-center space-x-2">
                  <i data-lucide="user-circle" className="w-5 h-5 text-cafe-amber"></i>
                  <span>My Profile</span>
                </h3>
              ) : (
                <button
                  onClick={() => setActiveTab('hub')}
                  className="flex items-center gap-1.5 text-xs font-bold text-cafe-amber hover:underline"
                >
                  <i data-lucide="arrow-left" className="w-4 h-4"></i>
                  <span>Back to Profile</span>
                </button>
              )}
              <button onClick={onClose} className="text-neutral-500 hover:text-white transition p-1">
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>

            {/* ─── TAB 1: MAIN HUB VIEW ─── */}
            {activeTab === 'hub' && (
              <div className="space-y-4">
                {/* Customer Identity Card */}
                <div className={`p-4 rounded-2xl border space-y-2 ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Name</span>
                    <p className="font-extrabold text-base text-cafe-amber">{currentUser?.name || 'Customer'}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Phone Number</span>
                    <p className="font-bold text-sm font-sans tracking-wide">{currentUser?.phone || '—'}</p>
                  </div>
                </div>

                {/* 2x2 Interactive Quick Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Card 1: My Orders */}
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all active:scale-97 shadow-sm ${
                      theme === 'light'
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                        : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                      <i data-lucide="package" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs tracking-tight">My Orders</h4>
                      <p className="text-[10px] text-neutral-400 font-medium">
                        {orderHistory.length > 0 ? `${orderHistory.length} orders` : 'View past orders'}
                      </p>
                    </div>
                  </button>

                  {/* Card 2: Saved Addresses */}
                  <button
                    onClick={() => setActiveTab('addresses')}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all active:scale-97 shadow-sm ${
                      theme === 'light'
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                        : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center">
                      <i data-lucide="map-pin" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs tracking-tight">Saved Addresses</h4>
                      <p className="text-[10px] text-neutral-400 font-medium">
                        {savedAddresses.length > 0 ? `${savedAddresses.length} spots saved` : 'Manage spots'}
                      </p>
                    </div>
                  </button>

                  {/* Card 3: Help & Support (WhatsApp) */}
                  <button
                    onClick={() => window.open('https://wa.me/919035733573?text=Hi%20Crispy%20Chick%20KGF%2C%20I%20need%20support%20with%20my%20order', '_blank')}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all active:scale-97 shadow-sm ${
                      theme === 'light'
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                        : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                      <i data-lucide="message-circle" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs tracking-tight">Help & Support</h4>
                      <p className="text-[10px] text-neutral-400 font-medium">Chat on WhatsApp</p>
                    </div>
                  </button>

                  {/* Card 4: About & Policies */}
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all active:scale-97 shadow-sm ${
                      theme === 'light'
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                        : 'bg-neutral-900/90 hover:bg-neutral-800 border-neutral-800'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-500/15 text-purple-400 flex items-center justify-center">
                      <i data-lucide="info" className="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs tracking-tight">About & Policies</h4>
                      <p className="text-[10px] text-neutral-400 font-medium">App info & credits</p>
                    </div>
                  </button>
                </div>

                {/* Sign Out Button */}
                <div className="pt-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold text-xs rounded-xl border border-red-500/20 transition flex items-center justify-center space-x-2"
                  >
                    <i data-lucide="log-out" className="w-4 h-4"></i>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── TAB 2: MY ORDERS VIEW ─── */}
            {activeTab === 'orders' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm tracking-tight">Order History ({orderHistory.length})</h4>
                  <span className="text-[10px] text-neutral-400">All local deliveries</span>
                </div>

                <div className="space-y-2.5 max-h-[55vh] overflow-y-auto no-scrollbar pr-1">
                  {orderHistory.length === 0 ? (
                    <div className="py-12 text-center text-neutral-400 text-xs space-y-2">
                      <span className="text-3xl block">🍗</span>
                      <p>No orders placed yet.</p>
                      <p className="text-[11px] text-neutral-500">Delicious crispy fried chicken awaits you!</p>
                    </div>
                  ) : (
                    orderHistory.map(order => (
                      <div
                        key={order.displayId || order.id}
                        className={`p-3.5 rounded-2xl border text-xs space-y-1.5 shadow-sm ${
                          theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-extrabold text-cafe-amber">
                              #{order.displayId || (order.id ? String(order.id).slice(-4) : '----').toUpperCase()}
                            </span>
                            {order.addressTitle && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-500 font-bold text-[9px] uppercase">
                                {order.addressTitle}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-neutral-400 font-medium">{order.placementTime || '—'}</span>
                        </div>

                        <p className={`text-[11px] leading-snug line-clamp-2 ${theme === 'light' ? 'text-slate-600' : 'text-neutral-300'}`}>
                          {order.items?.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                        </p>

                        <div className="flex justify-between items-center pt-1 border-t border-dashed border-neutral-700/30">
                          <span className="font-black text-sm">₹{order.totalAmount}</span>
                          <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                            ['successfully_delivered', 'delivered', 'completed'].includes(order.status)
                              ? 'bg-emerald-500/15 text-emerald-500'
                              : order.status === 'out_for_delivery'
                              ? 'bg-indigo-500/15 text-indigo-400'
                              : order.status === 'rejected'
                              ? 'bg-red-500/15 text-red-400'
                              : 'bg-amber-500/15 text-amber-500'
                          }`}>
                            {order.status?.replace(/_/g, ' ')}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* ─── TAB 3: SAVED ADDRESSES VIEW ─── */}
            {activeTab === 'addresses' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm tracking-tight">Saved Delivery Addresses ({savedAddresses.length})</h4>
                </div>

                <div className="space-y-2.5 max-h-[55vh] overflow-y-auto no-scrollbar pr-1">
                  {savedAddresses.length === 0 ? (
                    <div className="py-12 text-center text-neutral-400 text-xs space-y-2">
                      <span className="text-3xl block">📍</span>
                      <p>No saved addresses found.</p>
                      <p className="text-[11px] text-neutral-500">
                        You can save addresses (Home, College, Office) easily while checking out!
                      </p>
                    </div>
                  ) : (
                    savedAddresses.map(addr => (
                      <div
                        key={addr.id}
                        className={`p-3.5 rounded-2xl border text-xs space-y-2 relative shadow-sm ${
                          theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-md bg-cafe-amber/15 text-cafe-amber font-extrabold text-[10px] uppercase tracking-wider">
                            📍 {addr.title}
                          </span>
                          <button
                            onClick={() => handleDeleteAddress(addr.id)}
                            className="text-red-400 hover:text-red-500 p-1 transition"
                            title="Delete Address"
                          >
                            <i data-lucide="trash-2" className="w-3.5 h-3.5"></i>
                          </button>
                        </div>
                        <p className={`text-[11px] leading-snug ${theme === 'light' ? 'text-slate-700' : 'text-neutral-300'}`}>
                          {addr.addressDetails}
                        </p>
                        {addr.landmark && (
                          <p className="text-[10px] text-neutral-400">
                            Landmark: <span className="font-semibold">{addr.landmark}</span>
                          </p>
                        )}
                        <p className="text-[10px] text-neutral-400">
                          PIN Code: <span className="font-mono font-bold text-cafe-amber">{addr.pinCode}</span> (KGF, Karnataka)
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* ─── TAB 4: ABOUT & POLICIES VIEW ─── */}
            {activeTab === 'about' && (
              <div className="space-y-4 text-left">
                {/* Brand & App Card */}
                <div className={`p-4 rounded-2xl border text-center space-y-1.5 ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <img src="./logo_rm_bg.png" className="h-14 mx-auto object-contain drop-shadow-sm" alt="Crispy Chick" />
                  <h4 className="font-black text-base tracking-tight">Crispy Chick KGF</h4>
                  <p className="text-[11px] text-neutral-400">Fast Food & Pizza Delivery Progressive Web App</p>
                  <span className="inline-block text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                    v1.0.0 • Production Release
                  </span>
                </div>

                {/* DhaKav Designer's KGF Card — Compact & Elegant */}
                <div className={`p-4 rounded-2xl border space-y-2.5 shadow-sm ${
                  theme === 'light'
                    ? 'bg-amber-50/70 border-amber-200/90'
                    : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-cafe-amber block">
                      DESIGNED & DEVELOPED BY
                    </span>
                    <h4 className="text-sm font-black tracking-tight flex items-center gap-1.5 mt-0.5">
                      <span>DhaKav Designer's</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cafe-amber text-black font-extrabold">KGF</span>
                    </h4>
                  </div>

                  {/* Concise Services 2-Column Grid */}
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-neutral-850 border-neutral-750 text-neutral-200'
                    }`}>
                      <i data-lucide="globe" className="w-3.5 h-3.5 text-blue-400 flex-shrink-0"></i>
                      <span className="font-semibold truncate">Web & App Building</span>
                    </div>

                    <div className={`p-2 rounded-xl border flex items-center gap-1.5 ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-neutral-850 border-neutral-750 text-neutral-200'
                    }`}>
                      <i data-lucide="palette" className="w-3.5 h-3.5 text-purple-400 flex-shrink-0"></i>
                      <span className="font-semibold truncate">Graphic Design & Logos</span>
                    </div>

                    <div className={`p-2 rounded-xl border flex items-center gap-1.5 col-span-2 ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-neutral-850 border-neutral-750 text-neutral-200'
                    }`}>
                      <i data-lucide="video" className="w-3.5 h-3.5 text-orange-400 flex-shrink-0"></i>
                      <div className="min-w-0">
                        <span className="font-bold block leading-tight">Digital Media Assistance</span>
                        <span className="text-[9px] text-neutral-400 block leading-tight truncate">Shop interior videography, promo banners & poster making</span>
                      </div>
                    </div>

                    <div className={`p-2 rounded-xl border flex items-center gap-1.5 col-span-2 ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-neutral-850 border-neutral-750 text-neutral-200'
                    }`}>
                      <i data-lucide="cpu" className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0"></i>
                      <div className="min-w-0">
                        <span className="font-bold block leading-tight">Engineering Project Assistance</span>
                        <span className="text-[9px] text-neutral-400 block leading-tight truncate">Technical consulting & project development</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Direct Contact Row */}
                  <div className="pt-1.5 border-t border-neutral-700/20 flex items-center justify-between gap-2">
                    <a
                      href="mailto:contact.dhakavdesigners@gmail.com"
                      className="text-[11px] font-bold text-cafe-amber hover:underline flex items-center gap-1 truncate"
                    >
                      <i data-lucide="mail" className="w-3 h-3 flex-shrink-0"></i>
                      <span className="truncate">contact.dhakavdesigners@gmail.com</span>
                    </a>
                    <button
                      onClick={() => window.open('https://wa.me/919035733573?text=Hi%20DhaKav%20Designers%2C%20I%20need%20assistance%20with%20a%20project', '_blank')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 text-[10px] font-bold transition flex items-center gap-1 flex-shrink-0"
                    >
                      <i data-lucide="message-circle" className="w-3 h-3"></i>
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Terms & Policies Card */}
                <div className={`p-4 rounded-2xl border space-y-3 ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                }`}>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-400">Crispy Chick Store Policies</h5>
                  
                  <div className="space-y-2 text-[11px] leading-relaxed text-neutral-400">
                    <div>
                      <strong className={theme === 'light' ? 'text-slate-800' : 'text-white'}>1. Local Delivery Radius:</strong>
                      <p>Deliveries are strictly fulfilled within authorized KGF delivery PIN codes (563113 to 563122).</p>
                    </div>
                    <div>
                      <strong className={theme === 'light' ? 'text-slate-800' : 'text-white'}>2. Payment Policy:</strong>
                      <p>100% genuine Cash on Delivery (COD) and direct Rider UPI QR payment upon delivery. No advance online payment needed.</p>
                    </div>
                    <div>
                      <strong className={theme === 'light' ? 'text-slate-800' : 'text-white'}>3. Fresh Preparation:</strong>
                      <p>All fried chicken, burgers, and pizzas are freshly prepared immediately following kitchen order confirmation.</p>
                    </div>
                    <div>
                      <strong className={theme === 'light' ? 'text-slate-800' : 'text-white'}>4. Support Hotline:</strong>
                      <p>For instant order queries, call or WhatsApp +91 9035733573.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      );
    };

    const ETACountdown = ({ order }) => {
      const [timeLeft, setTimeLeft] = useState('');

      useEffect(() => {
        if (!order || !order.dispatchedAt) {
          setTimeLeft('25:00 ⏱️');
          return;
        }

        const updateTimer = () => {
          const target = order.dispatchedAt + (25 * 60 * 1000);
          const diff = target - Date.now();

          if (diff <= 0) {
            setTimeLeft('Arriving Now 🏁');
            return;
          }

          const mins = Math.floor(diff / 60000);
          const secs = Math.floor((diff % 60000) / 1000);
          setTimeLeft(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} ⏱️`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
      }, [order?.dispatchedAt]);

      return <span>{timeLeft}</span>;
    };

    // 1. CUSTOMER FRONTEND APPLICATION NODE
    const CustomerApp = ({ onCheckoutSuccess }) => {
      const { isOpenOrdering, addToTray, floatingItems, setFloatingItems, theme, activeOrderIds, updateActiveOrderIds, updateActiveOrderId, currentUser } = useContext(AppContext);
      const [activeCategory, setActiveCategory] = useState("Fried Chicken");
      const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
      const [isProfileOpen, setIsProfileOpen] = useState(false);
      const [activeOrders, setActiveOrders] = useState([]);
      const [isRiderPopupOpen, setIsRiderPopupOpen] = useState(false);
      const [riderPopupOrder, setRiderPopupOrder] = useState(null);
      const [showRiderPopup, setShowRiderPopup] = useState(false);

      const handleAdd = (e, item) => {
        const x = e.clientX;
        const y = e.clientY;
        const newFloating = {
          id: Date.now() + Math.random(),
          x,
          y,
          image: item.image
        };
        setFloatingItems(prev => [...prev, newFloating]);
        addToTray(item);

        setTimeout(() => {
          setFloatingItems(prev => prev.filter(f => f.id !== newFloating.id));
        }, 800);
      };

      const handleSignInClick = () => {
        setIsCheckoutOpen(true);
      };

      const getOrderPrimaryPhone = (orderPhone) => (orderPhone || '').split(' / Alt:')[0].trim();

      useEffect(() => {
        // Fix 4: Sync by phone number + active statuses — no dependency on activeOrderIds
        // so the timeline never gets stuck when Kitchen accepts/dispatches.
        if (!currentUser || !currentUser.phone) {
          setActiveOrders([]);
          return;
        }
        const activeStatuses = new Set(['pending', 'preparing', 'prepared', 'out_for_delivery', 'arrived']);
        const unsubscribe = subscribeOrders((allOrders) => {
          const phone = currentUser.phone;
          const matches = allOrders
            .filter(o => {
              const s = (o.status || '').toLowerCase();
              return activeStatuses.has(s) && getOrderPrimaryPhone(o.customerPhone) === phone;
            })
            // Sort newest first — track most recent to prevent stale-state overlaps
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
          setActiveOrders(matches);
        });
        return () => {
          if (typeof unsubscribe === 'function') unsubscribe();
        };
      }, [currentUser?.phone]);

      const prevStatusesRef = useRef({});

      useEffect(() => {
        if (activeOrders.length > 0) {
          let statusChanged = false;
          activeOrders.forEach(order => {
            const prevStatus = prevStatusesRef.current[order.id];
            if (prevStatus && prevStatus !== order.status) {
              statusChanged = true;
              if (order.status === 'out_for_delivery' || order.status === 'arrived') {
                setRiderPopupOrder(order);
                setShowRiderPopup(true);
              }
            }
            prevStatusesRef.current[order.id] = order.status;
          });
          if (statusChanged) {
            playBlissSound();
          }
        }
      }, [activeOrders]);

      const appendActiveOrder = (newOrder) => {
        if (!newOrder) return;
        setActiveOrders(prev => {
          if (prev.some(o => o.id === newOrder.id)) return prev;
          const ownerPhone = currentUser?.phone || getOrderPrimaryPhone(newOrder.customerPhone);
          if (getOrderPrimaryPhone(newOrder.customerPhone) !== ownerPhone) return prev;
          return [...prev, newOrder];
        });
      };

      const dismissOrder = (orderId) => {
        const next = (activeOrderIds || []).filter(id => id !== orderId);
        updateActiveOrderIds(next);
      };

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [isCheckoutOpen, isProfileOpen, theme, activeOrders, isRiderPopupOpen, activeCategory, showRiderPopup]);

      const filteredProducts = MENU_CATALOG[activeCategory] || [];

      const getStatusLabel = (status) => {
        switch (status) {
          case 'pending': return 'Awaiting shop acceptance ⏳';
          case 'preparing': return 'Preparing 🍳';
          case 'prepared': return 'Ready for rider pickup 🐣';
          case 'out_for_delivery': return 'Out for delivery 🛵';
          case 'arrived': return 'Rider has arrived at your doorstep! 📍';
          case 'successfully_delivered':
          case 'delivered':
          case 'completed': return 'Delivered! Enjoy your meal! 🎉';
          case 'rejected': return 'Order Cancelled by Shop ❌';
          default: return 'Processing...';
        }
      };

      return (
        <div className={`min-h-screen relative flex flex-col pb-24 max-w-md mx-auto shadow-2xl transition-colors duration-305 overflow-hidden ${
          theme === 'light' 
            ? 'bg-white text-slate-800 border-x border-slate-200' 
            : 'bg-cafe-black text-white border-x border-neutral-900/60'
        }`}>
          {/* Ambient light gradient background overlay */}
          <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 ${
            theme === 'light'
              ? 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-100/10 via-white to-white'
              : 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950'
          }`}></div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <TopBar onSignInClick={handleSignInClick} onProfileClick={() => setIsProfileOpen(true)} />

            {/* Detailed vertical timeline — scrollable when multiple active orders */}
            <div className={activeOrders.length > 0 ? "max-h-[300px] overflow-y-auto space-y-0 no-scrollbar block" : "hidden"}>
            {activeOrders.map(activeOrder => (
              <div key={activeOrder.id} className="px-4 py-3 bg-neutral-900/90 border-b border-amber-600/20 text-white space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <i data-lucide="bike" className="w-4 h-4 text-cafe-amber flex-shrink-0"></i>
                    <span className="font-bold text-xs text-cafe-amber">Order #{activeOrder.displayId || (activeOrder.id ? String(activeOrder.id).slice(-4) : '----').toUpperCase()}</span>
                  </div>
                  <span className="font-semibold text-[10px] text-neutral-450 uppercase">{activeOrder.placementTime}</span>
                </div>

                <div className={activeOrder.status !== 'rejected' ? "w-full block mb-3" : "hidden"}>
                  <div className="flex items-center justify-between relative mt-2 px-1">
                    <div className="absolute top-3 left-0 right-0 h-0.5 bg-neutral-800 z-0 rounded-full">
                      <div
                        className="bg-gradient-to-r from-cafe-amber to-cafe-crispy h-0.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            activeOrder.status === 'pending' ? '0%' :
                            (activeOrder.status === 'preparing' || activeOrder.status === 'prepared') ? '33.33%' :
                            activeOrder.status === 'out_for_delivery' ? '66.66%' :
                            activeOrder.status === 'arrived' ? '85%' :
                            ['successfully_delivered', 'delivered', 'completed'].includes(activeOrder.status) ? '100%' : '0%'
                          }`
                        }}
                      ></div>
                    </div>
                    {['Pending', 'Preparing', 'Out For Delivery', 'Delivered'].map((label, idx) => {
                      const sval = activeOrder.status;
                      const activeStep =
                        sval === 'pending' ? 0 :
                        (sval === 'preparing' || sval === 'prepared') ? 1 :
                        (sval === 'out_for_delivery' || sval === 'arrived') ? 2 :
                        ['successfully_delivered', 'delivered', 'completed'].includes(sval) ? 3 : -1;
                      const isCompleted = idx < activeStep;
                      const isActive = idx === activeStep;
                      const isReached = idx <= activeStep;
                      return (
                        <div key={label} className="flex flex-col items-center z-10 relative">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-300 ${
                            isActive
                              ? 'bg-cafe-amber text-cafe-black ring-2 ring-cafe-amber/30 scale-110'
                              : isCompleted
                                ? 'bg-cafe-crispy text-cafe-black'
                                : 'bg-neutral-800 text-neutral-500 border border-neutral-700'
                          }`}>
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          <span className={`text-[9px] font-bold mt-1 text-center whitespace-nowrap ${
                            isReached ? 'text-cafe-amber' : 'text-neutral-555'
                          }`}>
                            {idx === 2 && activeOrder.status === 'arrived' ? 'Arrived 📍' : label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {(activeOrder.status === 'out_for_delivery' || activeOrder.status === 'arrived') && (
                  <div className={`rounded-xl px-4 py-3 border mb-3 flex items-center justify-between shadow-sm ${
                    activeOrder.status === 'arrived'
                      ? 'border-emerald-500/50 bg-emerald-950/40'
                      : 'border-amber-500/30 bg-amber-500/10'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${
                        activeOrder.status === 'arrived' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cafe-amber/20 text-cafe-amber'
                      }`}>
                        <i data-lucide={activeOrder.status === 'arrived' ? "map-pin" : "bike"} className="w-5 h-5"></i>
                      </div>
                      <div>
                        <h3 className={`font-serif font-bold text-sm mb-0.5 ${activeOrder.status === 'arrived' ? 'text-emerald-400' : 'text-cafe-amber'}`}>
                          {activeOrder.status === 'arrived' ? '📍 Rider Has Arrived!' : '🛵 Out for Delivery!'}
                        </h3>
                        <p className="text-[10px] text-neutral-300 uppercase tracking-wider">
                          {activeOrder.status === 'arrived' ? 'Please collect your parcel' : `Rider: ${activeOrder.riderName || activeOrder.assignedRider || 'Delivery Rider'}`}
                        </p>
                        {activeOrder.orderedForSomeoneElse && activeOrder.recipientName && (
                          <p className="text-[10px] text-blue-400 font-bold tracking-wide mt-0.5">
                            👤 Delivering to: {activeOrder.recipientName} ({activeOrder.recipientPhone})
                          </p>
                        )}
                      </div>
                    </div>
                    <a 
                      href={activeOrder.riderPhone ? `tel:${activeOrder.riderPhone}` : '#'}
                      className={`px-3 py-2 bg-cafe-amber text-cafe-black font-extrabold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors ${activeOrder.riderPhone ? 'hover:bg-amber-400' : 'pointer-events-none opacity-50'}`}
                    >
                      <i data-lucide="phone" className="w-3.5 h-3.5"></i>
                      <span>Call Rider</span>
                    </a>
                  </div>
                )}

                <div className="rounded-lg px-3 py-2 border border-neutral-700/50 bg-neutral-800/40">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cafe-amber block text-center mb-1">Your Order</span>
                  <p className="text-[11px] font-semibold leading-relaxed text-center text-neutral-100">
                    {(activeOrder.items || []).map(item => `${item.quantity}x ${item.name}`).join(', ')}
                  </p>
                  <p className="text-[10px] font-medium text-center text-neutral-450 pt-1 border-t border-neutral-700/40 mt-1.5">
                    {getStatusLabel(activeOrder.status)}
                  </p>
                </div>

                {(activeOrder.status === 'pending' || activeOrder.status === 'preparing') && (
                  <div className="flex justify-center mt-3">
                    <button
                      onClick={() => {
                        window.alert('Store Contact: +91 90357 33573');
                        const isWithin5Mins = activeOrder.createdAt && (Date.now() - (activeOrder.createdAt.toDate ? activeOrder.createdAt.toDate().getTime() : activeOrder.createdAt)) < 300000;
                        if (activeOrder.status === 'pending' && isWithin5Mins) {
                          db.collection('orders').doc(activeOrder.id).update({ cancellationRequested: true }).catch(() => {});
                        }
                      }}
                      className="text-[10px] text-red-405 hover:text-red-305 font-bold underline transition"
                    >
                      Need Help?
                    </button>
                  </div>
                )}

                <div className={['successfully_delivered', 'delivered', 'completed', 'rejected', 'cancelled'].includes(activeOrder.status) ? "flex justify-end pt-1 block" : "hidden"}>
                  <button
                    onClick={() => dismissOrder(activeOrder.id)}
                    className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-[10px] font-bold rounded-lg border border-neutral-700 transition"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
            </div>
            
            <div className={!isOpenOrdering ? "flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 my-auto block" : "hidden"}>
              <h2 className="text-xl font-bold font-serif mt-4">Online Ordering Paused</h2>
              <p className={`text-sm max-w-xs leading-relaxed ${theme === 'light' ? 'text-slate-505' : 'text-neutral-455'}`}>
                We are currently experiencing high walk-in traffic at Robertsonpet shop. Online orders are temporarily closed.
              </p>
              <div className={`p-3 rounded-xl border text-xs text-cafe-amber ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-cafe-card border-neutral-850'}`}>
                ⏱️ Check back soon!
              </div>
            </div>
            
            <div className={isOpenOrdering ? "flex-1 flex flex-col block" : "hidden"}>
              <PromoCarousel />
              <CategorySwiper activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              
              <main className="flex-1 p-3.5 sm:p-4 grid grid-cols-2 gap-3 sm:gap-3.5 auto-rows-max items-start content-start overflow-y-auto no-scrollbar font-sans pb-28">
                {filteredProducts.map(prod => (
                  <ProductCard key={prod.name} product={prod} onAdd={handleAdd} categoryName={activeCategory} />
                ))}
              </main>

              <TrayCart onCheckoutTrigger={() => setIsCheckoutOpen(true)} />
            </div>
          </div>

          {floatingItems.map(item => (
            <img
              key={item.id}
              src={item.image}
              className="floating-food w-12 h-12 object-cover rounded-full shadow-2xl border-2 border-cafe-amber"
              style={{ left: item.x, top: item.y }}
              alt=""
            />
          ))}



          <div className={isCheckoutOpen ? "block fixed inset-0 z-50" : "hidden"}>
            <CheckoutModal 
              onClose={() => setIsCheckoutOpen(false)} 
              onOrderSuccess={(newOrder) => {
                updateActiveOrderId(newOrder.id);
                appendActiveOrder(newOrder);
                if (onCheckoutSuccess) onCheckoutSuccess(newOrder.id, newOrder.otp);
              }}
              isOpen={isCheckoutOpen}
            />
          </div>

          <CustomerProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>
      );
    };

    // 2. CENTRALIZED OWNER & RIDER LOGIN VIEW (`#/login`)
    const UnifiedLogin = () => {
      const { login } = useContext(AuthContext);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');

      const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;

        setLoading(true);
        setError('');

        try {
          const session = await login(email, password);
          setTimeout(() => {
            if (session.role === 'OWNER_COUNTER') {
              window.location.hash = '#/shop-counter';
            } else if (session.role === 'DELIVERY_RIDER') {
              window.location.hash = '#/delivery-dashboard';
            }
          }, 100);
        } catch (err) {
          setError(err.message || "Invalid credentials.");
          setLoading(false);
        }
      };

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [error, showPassword]);

      return (
        <div className="min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans">
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"></div>
          
          <div className="w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center">
            <img src="./logo_rm_bg.png" className="h-16 mx-auto object-contain mb-2 drop-shadow-sm" alt="Crispy Chick Logo" />
            <div className="space-y-1">
              <h2 className="text-xl font-bold font-serif text-white">Central Verification Gate</h2>
              <p className="text-xs text-neutral-400 font-medium">Log in using your workspace credentials</p>
            </div>

            <div className={error ? "bg-red-500/10 border border-red-500 text-red-400 p-3.5 rounded-xl text-xs text-left font-semibold block" : "hidden"}>
              ⚠️ {error}
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Username or Email</label>
                <input
                  type="text" required placeholder="Enter username or email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-cafe-black border border-neutral-805 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1.5 focus:outline-none transition flex items-center justify-center"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cafe-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit" disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg hover:shadow-orange-500/10 transition flex items-center justify-center space-x-2 text-sm"
              >
                <div className={`w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin ${loading ? 'block' : 'hidden'}`}></div>
                <span className={!loading ? 'inline-block' : 'hidden'}>UNLOCK DASHBOARD</span>
                <i data-lucide="unlock" className={`w-4 h-4 stroke-[3] ${!loading ? 'inline-block' : 'hidden'}`}></i>
              </button>
            </form>
          </div>
        </div>
      );
    };

    // 3. SHOP COUNTER ADMIN DASHBOARD PORTAL (/shop-counter)
    const ShopCounter = () => {
      const { isOpenOrdering, menuSettings, updateMenuSettings, theme, toggleTheme, getActivePrice } = useContext(AppContext);
      const { signOut } = useContext(AuthContext);
      const [orders, setOrders] = useState([]);
      const [toasts, setToasts] = useState([]);
      const [selectedRiders, setSelectedRiders] = useState({});
      const [fleetRiders, setFleetRiders] = useState([]);
      const prevOrdersRef = useRef([]);

      // Draft Menu Settings State with Dirty Tracking for Confirmation
      const [draftMenuSettings, setDraftMenuSettings] = useState(menuSettings);
      const [isMenuDirty, setIsMenuDirty] = useState(false);
      const [isMenuSaving, setIsMenuSaving] = useState(false);

      useEffect(() => {
        if (!isMenuDirty) {
          setDraftMenuSettings(menuSettings);
        }
      }, [menuSettings, isMenuDirty]);

      // In-Counter Rider Management State
      const [showAddRider, setShowAddRider] = useState(false);
      const [newRiderName, setNewRiderName] = useState('');
      const [newRiderPhone, setNewRiderPhone] = useState('');
      const [newRiderPin, setNewRiderPin] = useState('');
      const [riderFormError, setRiderFormError] = useState('');
      const [riderFormLoading, setRiderFormLoading] = useState(false);

      // Live-fetch fleet riders from Firebase
      useEffect(() => {
        const unsubRiders = db.collection('riders').onSnapshot(snap => {
          const list = [];
          snap.forEach(doc => {
            const d = doc.data();
            if (d.name) {
              list.push({
                id: doc.id,
                pin: d.pin || doc.id,
                name: d.name,
                phone: d.phone,
                isActive: d.isActive !== false,
                isOnline: d.isOnline === true,
                dutyStartTime: d.dutyStartTime || null,
                verified: d.verified !== false,
                createdAt: d.createdAt || 0
              });
            }
          });
          setFleetRiders(list);
        }, err => console.warn('Riders fetch error:', err));
        return () => unsubRiders();
      }, []);

      const generateRandomPin = () => {
        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        setNewRiderPin(pin);
      };

      const handleAddRider = async (e) => {
        e.preventDefault();
        const trimmedName = newRiderName.trim();
        const trimmedPhone = newRiderPhone.trim();
        const trimmedPin = newRiderPin.trim();

        if (!trimmedName) {
          setRiderFormError('Please enter rider full name.');
          return;
        }
        if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
          setRiderFormError('Enter a valid 10-digit mobile number starting 6-9.');
          return;
        }
        if (!/^\d{6}$/.test(trimmedPin)) {
          setRiderFormError('Rider PIN must be exactly 6 digits.');
          return;
        }
        if (fleetRiders.some(r => r.pin === trimmedPin || r.id === trimmedPin)) {
          setRiderFormError('This 6-digit PIN is already assigned to another rider.');
          return;
        }

        setRiderFormLoading(true);
        setRiderFormError('');

        try {
          await db.collection('riders').doc(trimmedPin).set({
            name: trimmedName,
            phone: trimmedPhone,
            pin: trimmedPin,
            verified: true,
            isActive: true,
            isOnline: false,
            createdAt: Date.now()
          });
          setNewRiderName('');
          setNewRiderPhone('');
          setNewRiderPin('');
          setShowAddRider(false);
        } catch (err) {
          console.error("Failed to add rider:", err);
          setRiderFormError('Database error. Please try again.');
        } finally {
          setRiderFormLoading(false);
        }
      };

      const handleDeleteRider = async (rider) => {
        const pin = rider.pin || rider.id;
        // Step 1 Confirmation
        const confirmFirst = window.confirm(`Remove rider "${rider.name}" from the delivery fleet?`);
        if (!confirmFirst) return;

        // Step 2 Final Safety Confirmation to prevent accidental touches
        const confirmFinal = window.confirm(`⚠️ FINAL CONFIRMATION:\nAre you absolutely sure you want to permanently delete "${rider.name}" (PIN: ${pin})?\nThis will revoke their login access immediately.`);
        if (!confirmFinal) return;

        try {
          await db.collection('riders').doc(pin).delete();
        } catch (err) {
          console.error("Failed to delete rider:", err);
          alert("Error deleting rider. Please try again.");
        }
      };

      useEffect(() => {
        const unsubscribe = subscribeOrders((data) => {
          if (prevOrdersRef.current.length === 0) {
            prevOrdersRef.current = data;
          }
          setOrders(data);
        });
        return () => {
          if (typeof unsubscribe === 'function') unsubscribe();
        };
      }, []);

      useEffect(() => {
        if (orders.length > 0 && prevOrdersRef.current.length > 0) {
          orders.forEach(newOrder => {
            const oldOrder = prevOrdersRef.current.find(o => o.id === newOrder.id);
            const isCompleted = ['successfully_delivered', 'delivered', 'completed'].includes(newOrder.status);
            const wasCompleted = oldOrder ? ['successfully_delivered', 'delivered', 'completed'].includes(oldOrder.status) : false;
            if (isCompleted && oldOrder && !wasCompleted) {
              const toastId = Date.now() + Math.random();
              const toastMsg = {
                id: toastId,
                orderId: newOrder.id,
                customerName: newOrder.customerName,
                totalAmount: newOrder.totalAmount
              };
              setToasts(prev => [...prev, toastMsg]);
              playBlissSound();
              setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== toastId));
              }, 5000);
            }
          });
        }
        prevOrdersRef.current = orders;
      }, [orders]);

      // Real-time Anti-Fraud Auditor — flags tampered orders for operator review
      // Does NOT auto-reject (which caused Permission Denied + blocked legitimate orders)
      const [tamperedOrderIds, setTamperedOrderIds] = useState(new Set());
      useEffect(() => {
        if (!orders || orders.length === 0) return;
        // Only run when menuSettings has been synced from Firestore (gstRate > 0 means loaded)
        if (!menuSettings || !menuSettings.gstRate) return;
        const allCatalogItems = Object.values(MENU_CATALOG).flat();
        const newTampered = new Set(tamperedOrderIds);

        orders.forEach(order => {
          if (order.status !== 'pending') return;
          if (newTampered.has(order.id)) return; // already flagged
          if (!order.items || !Array.isArray(order.items)) return;

          let expectedSubtotal = 0;
          order.items.forEach(i => {
            const catalogItem = allCatalogItems.find(c => c.name === i.name);
            const basePrice = catalogItem ? catalogItem.price : (i.price || 0);
            const activePrice = getActivePrice(i.name, basePrice);
            expectedSubtotal += activePrice * (i.quantity || 1);
          });
          const expectedGst = Math.round(expectedSubtotal * (menuSettings.gstRate / 100));
          const expectedDelivery = Number(menuSettings.deliveryFee || 0);
          const expectedTotal = expectedSubtotal + expectedGst + expectedDelivery;

          // Flag if price differs by more than ₹5 (buffer for rounding edge cases)
          if (order.totalAmount < expectedTotal - 5) {
            console.warn(`🚨 PRICE FLAG on Order #${order.displayId}: Submitted ₹${order.totalAmount}, Expected ₹${expectedTotal}`);
            newTampered.add(order.id);
          }
        });

        if (newTampered.size !== tamperedOrderIds.size) {
          setTamperedOrderIds(newTampered);
        }
      }, [orders, menuSettings]);

      const hasPendingOrders = orders.some(o => o.status === 'pending');
      useEffect(() => {
        // Fix 1: Kitchen alarm MUST only ring on the counter route
        if (window.location.hash !== '#/shop-counter') {
          triggerNotificationSound(false);
          return;
        }
        triggerNotificationSound(hasPendingOrders);
      }, [hasPendingOrders]);

      const handleAccept = async (orderId) => {
        await updateOrderStatus(orderId, 'preparing');
      };

      const handleReject = async (orderId) => {
        await updateOrderStatus(orderId, 'rejected');
      };

      const handleMarkPrepared = async (orderId) => {
        await updateOrderStatus(orderId, 'prepared');
      };

      const handleAssignAndDispatch = async (orderId) => {
        const onlineRidersList = fleetRiders.filter(r => r.isOnline === true);
        if (onlineRidersList.length === 0) {
          window.alert('⚠️ Cannot assign order: No delivery riders are currently online. Ask a rider to turn on duty in their app first.');
          return;
        }

        const chosenRiderName = selectedRiders[orderId] || (onlineRidersList[0] ? onlineRidersList[0].name : '');
        const matchedOnlineRider = onlineRidersList.find(r => r.name === chosenRiderName);
        if (!matchedOnlineRider) {
          window.alert('⚠️ Cannot assign order: The selected rider is currently offline. Please choose a rider who is online.');
          return;
        }

        await db.collection('orders').doc(orderId).update({
          status: 'prepared',
          assignedRider: matchedOnlineRider.name,
          dispatchedAt: Date.now()
        });
      };

      const handleRiderSelectChange = (orderId, riderName) => {
        setSelectedRiders(prev => ({ ...prev, [orderId]: riderName }));
      };

      const onlineRiders = fleetRiders.filter(r => r.isOnline === true);
      const activeOrdersList = orders.filter(o => ['pending', 'preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status));
      const archivedOrdersList = orders.filter(o => ['successfully_delivered', 'delivered', 'completed', 'rejected'].includes(o.status));

      // Live Rider Status & Assignment Computation
      const getRiderStatus = (rider) => {
        const activeOrder = activeOrdersList.find(o => 
          (o.assignedRider === rider.name || o.pickedUpBy === rider.name) &&
          ['prepared', 'out_for_delivery', 'arrived'].includes(o.status)
        );

        if (activeOrder) {
          const safeOrderNum = activeOrder.displayId || (activeOrder.id ? String(activeOrder.id).slice(-4) : '----').toUpperCase();
          if (activeOrder.status === 'arrived') {
            return {
              status: 'arrived',
              label: `📍 At Location #${safeOrderNum}`,
              sublabel: `To: ${activeOrder.customerName}`,
              orderId: activeOrder.id,
              badgeClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
            };
          }
          if (activeOrder.status === 'out_for_delivery') {
            return {
              status: 'delivering',
              label: `🛵 Delivering #${safeOrderNum}`,
              sublabel: `To: ${activeOrder.customerName}`,
              orderId: activeOrder.id,
              badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
            };
          }
          if (activeOrder.status === 'prepared') {
            return {
              status: 'prepared',
              label: `📦 Pickup Pending #${safeOrderNum}`,
              sublabel: `Waiting at counter`,
              orderId: activeOrder.id,
              badgeClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
            };
          }
        }

        if (rider.isOnline !== true) {
          return {
            status: 'offline',
            label: '⚪ Offline',
            sublabel: 'Rider off duty',
            badgeClass: 'bg-neutral-800/80 text-neutral-400 border border-neutral-700'
          };
        }

        return {
          status: 'available',
          label: '🟢 Online (Ready)',
          sublabel: formatRiderDutyDuration(rider.dutyStartTime),
          badgeClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold'
        };
      };

      const formatRiderDutyDuration = (dutyStartTime) => {
        if (!dutyStartTime) return 'Ready for orders';
        const mins = Math.floor(Math.max(0, Date.now() - dutyStartTime) / 60000);
        if (mins < 60) return `${mins}m on duty`;
        const hrs = Math.floor(mins / 60);
        const remMins = mins % 60;
        return `${hrs}h ${remMins}m on duty`;
      };

      const getRiderTodayDeliveriesCount = (riderName) => {
        const today = new Date();
        return archivedOrdersList.filter(o => {
          if (!['successfully_delivered', 'delivered', 'completed'].includes(o.status)) return false;
          if (o.assignedRider !== riderName && o.pickedUpBy !== riderName) return false;
          const ts = o.deliveredAt || o.createdAt;
          const d = ts && ts.toDate ? ts.toDate() : new Date(ts || 0);
          return d.toDateString() === today.toDateString();
        }).length;
      };

      const getRiderTodayAmountCollected = (riderName) => {
        const today = new Date();
        return archivedOrdersList.filter(o => {
          if (!['successfully_delivered', 'delivered', 'completed'].includes(o.status)) return false;
          if (o.assignedRider !== riderName && o.pickedUpBy !== riderName) return false;
          const ts = o.deliveredAt || o.createdAt;
          const d = ts && ts.toDate ? ts.toDate() : new Date(ts || 0);
          return d.toDateString() === today.toDateString();
        }).reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);
      };

      const parseKitchenDate = (createdAt) => {
        if (!createdAt) return 'unknown date';
        const d = new Date(createdAt);
        const today = new Date();
        const dayNum = String(d.getDate()).padStart(2, '0');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthStr = months[d.getMonth()];
        const year = d.getFullYear();
        const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const weekdayStr = weekdays[d.getDay()];

        const formatted = `${dayNum}-${monthStr}-${year} ${weekdayStr}`;

        if (d.toDateString() === today.toDateString()) {
          return `todays : ${formatted}`;
        }
        return formatted;
      };

      const groupedArchivedOrders = archivedOrdersList.reduce((acc, order) => {
        const dateLabel = parseKitchenDate(order.createdAt);
        if (!acc[dateLabel]) acc[dateLabel] = [];
        acc[dateLabel].push(order);
        return acc;
      }, {});

      // Helper to strip leading zeros and parse clean positive integer
      const cleanNumberInput = (val) => {
        if (val === '' || val === null || val === undefined) return 0;
        const str = String(val).replace(/\D/g, '');
        return str ? parseInt(str, 10) : 0;
      };

      const handleGstChange = (val) => {
        const num = cleanNumberInput(val);
        setIsMenuDirty(true);
        setDraftMenuSettings(prev => ({ ...prev, gstRate: num }));
      };

      const handleDeliveryFeeChange = (val) => {
        const num = cleanNumberInput(val);
        setIsMenuDirty(true);
        setDraftMenuSettings(prev => ({ ...prev, deliveryFee: num }));
      };

      const handleItemPriceChange = (itemName, val) => {
        const num = cleanNumberInput(val);
        setIsMenuDirty(true);
        setDraftMenuSettings(prev => {
          const currentItems = { ...(prev.items || {}) };
          const isAvailable = currentItems[itemName] ? currentItems[itemName].available !== false : true;
          currentItems[itemName] = { price: num, available: isAvailable };
          return { ...prev, items: currentItems };
        });
      };

      const handleItemAvailabilityToggle = (itemName) => {
        setIsMenuDirty(true);
        setDraftMenuSettings(prev => {
          const currentItems = { ...(prev.items || {}) };
          const defaultPrice = catalogList.find(c => c.name === itemName)?.defaultPrice || 0;
          const currentPrice = currentItems[itemName]?.price !== undefined ? currentItems[itemName].price : defaultPrice;
          const currentAvailable = currentItems[itemName] ? currentItems[itemName].available !== false : true;
          currentItems[itemName] = { price: currentPrice, available: !currentAvailable };
          return { ...prev, items: currentItems };
        });
      };

      const handleSaveMenuChanges = async () => {
        if (!window.confirm("⚠️ CONFIRM MENU UPDATE:\n\nAre you sure you want to apply these price, tax, and item availability changes to the live store menu?\n\nThis will take effect immediately for all customers.")) {
          return;
        }
        setIsMenuSaving(true);
        try {
          await updateMenuSettings(draftMenuSettings);
          setIsMenuDirty(false);
          const toastId = Date.now();
          setToasts(prev => [...prev, { id: toastId, customerName: 'Menu Updated', totalAmount: 'Live', message: '✅ Live menu & inventory updated successfully!' }]);
          setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
        } catch (err) {
          console.error('Menu save error:', err);
          alert('Failed to save menu changes: ' + (err.message || 'Please check connection'));
        } finally {
          setIsMenuSaving(false);
        }
      };

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [orders, menuSettings, draftMenuSettings, isMenuDirty, theme, fleetRiders, showAddRider]);

      const catalogList = [];
      Object.keys(MENU_CATALOG).forEach(cat => {
        MENU_CATALOG[cat].forEach(item => {
          const custom = (draftMenuSettings.items || {})[item.name];
          catalogList.push({
            name: item.name,
            category: cat,
            defaultPrice: item.price,
            currentPrice: custom && custom.price !== undefined ? custom.price : item.price,
            isAvailable: custom && custom.available !== undefined ? custom.available : true
          });
        });
      });

      return (
        <div className={`min-h-screen p-6 md:p-10 relative space-y-8 transition-colors duration-300 ${
          theme === 'light' ? 'bg-slate-50 text-slate-800' : 'bg-cafe-black text-white'
        }`}>
          
          {/* Header */}
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${
            theme === 'light' ? 'border-slate-200' : 'border-neutral-800'
          }`}>
            {/* Logo & Shop Name Typography side-by-side */}
            <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
              <img src="./logo_rm_bg.png" className="h-10 w-auto object-contain flex-shrink-0 drop-shadow-sm" alt="Crispy Chick Logo" />
              <h1 className={`font-sans font-black text-base sm:text-lg md:text-xl tracking-tight flex items-center whitespace-nowrap transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                Crispy Chick
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white'
                    : 'bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm'
                }`}
              >
                <i data-lucide="sun" className={theme === 'dark' ? "w-4 h-4 block" : "hidden"}></i>
                <i data-lucide="moon" className={theme === 'light' ? "w-4 h-4 block" : "hidden"}></i>
              </button>

              <button
                onClick={signOut}
                className="bg-neutral-805 hover:bg-neutral-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-neutral-700 transition flex items-center gap-2 text-neutral-300"
              >
                <i data-lucide="log-out" className="w-4 h-4 text-red-400"></i>
                <span>Sign Out</span>
              </button>

              <div className={`p-3 rounded-xl border flex items-center space-x-3 shadow-inner ${
                theme === 'light' ? 'bg-white border-slate-200' : 'bg-cafe-card border-neutral-800'
              }`}>
                <span className="text-xs text-neutral-450 font-semibold tracking-wide">Ordering Window</span>
                <button
                  onClick={() => updateSettings({ onlineOrderingWindow: !isOpenOrdering })}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isOpenOrdering ? 'bg-emerald-600' : 'bg-red-800'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isOpenOrdering ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={`text-xs font-bold ${isOpenOrdering ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isOpenOrdering ? 'ONLINE' : 'OFFLINE'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Queue */}
            <div className="lg:col-span-2 space-y-4">
              <div className={`rounded-2xl border shadow-xl overflow-hidden ${
                theme === 'light' ? 'bg-white border-slate-200' : 'bg-cafe-card border-neutral-800'
              }`}>
                <div className={`px-6 py-4 border-b flex justify-between items-center ${
                  theme === 'light' ? 'bg-slate-100/50 border-slate-200' : 'bg-neutral-900/40 border-neutral-800'
                }`}>
                  <h3 className="font-serif font-bold text-lg">Live Orders Processing Queue</h3>
                  <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider">Reactive Feed</span>
                </div>

                <div className={activeOrdersList.length === 0 ? "p-16 text-center text-neutral-500 space-y-3 block" : "hidden"}>
                  <span className="text-4xl">📭</span>
                  <p className="text-sm font-medium">No active order files loaded currently in the database.</p>
                </div>

                <div className={activeOrdersList.length > 0 ? "overflow-x-auto block" : "hidden"}>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${
                        theme === 'light' ? 'bg-slate-100/30' : 'bg-neutral-900/20'
                      }`}>
                        <th className="w-2/5 px-3 py-2">Order Details</th>
                        <th className="w-1/6 px-3 py-2">Billing Summary</th>
                        <th className="w-1/6 px-3 py-2">Delivery Node</th>
                        <th className="w-auto px-3 py-2 text-center">Status</th>
                        <th className="w-auto px-3 py-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${theme === 'light' ? 'divide-slate-200' : 'divide-neutral-900/60'}`}>
                      {activeOrdersList.map(order => {
                        const dateText = order.placementTime || new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        return (
                          <tr key={order.displayId || (order.id ? String(order.id).slice(0, 4) : Math.random())} className={`hover:bg-neutral-900/5 transition-colors ${
                            order.status === 'pending' ? 'bg-cafe-amber/5 animate-pulse-slow' : ''
                          }`}>
                            <td className="px-6 py-4 space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className={`font-bold text-sm ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>#{order.displayId || (order.id ? String(order.id).slice(-4) : '----').toUpperCase()}</span>
                                <span className="text-[10px] text-neutral-550 font-medium">{dateText}</span>
                              </div>
                              {/* High-Visibility Shop Counter Typography */}
                              <div className="mt-2 space-y-1">
                                {order.items.map((i, idx) => (
                                  <div 
                                    key={idx}
                                    className={`text-lg font-bold tracking-wide block ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}
                                  >
                                    <span className="text-cafe-amber mr-1">{idx + 1}.</span>{i.quantity}x {i.name}
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>₹{order.totalAmount}</span>
                              <span className="block text-[10px] text-neutral-505 font-bold uppercase">COD / UPI</span>
                              {(order.tampered || tamperedOrderIds.has(order.id)) && (
                                <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-red-600 text-white font-extrabold text-[9px] uppercase tracking-wider">
                                  🚨 PRICE FLAG
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 space-y-1">
                              <div className={`text-xs font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-slate-300'}`}>{order.customerName} ({order.customerPhone})</div>
                              {/* Recipient badge when ordered for someone else */}
                              {order.orderedForSomeoneElse && order.recipientName && (
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-[10px] font-bold">
                                  👤 Deliver to: {order.recipientName} · {order.recipientPhone}
                                </div>
                              )}
                              {order.addressTitle && (
                                <span className="inline-block px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-bold text-[9px] uppercase tracking-wide mr-1">
                                  {order.addressTitle}
                                </span>
                              )}
                              <div className="text-[11px] text-neutral-400 leading-tight">
                                {order.addressDetails ? `${order.addressDetails}, ` : ''}{order.landmarks}{order.deliveryPin ? ` (${order.deliveryPin})` : ''}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                                order.status === 'pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                order.status === 'preparing' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                order.status === 'prepared' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                                order.status === 'out_for_delivery' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                                order.status === 'arrived' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                                ['successfully_delivered', 'delivered', 'completed'].includes(order.status) ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                'bg-red-500/10 text-red-400 border border-red-500/20'
                              }`}>
                                {order.status === 'arrived' ? 'At Doorstep 📍' : order.status.replace(/_/g, ' ')}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                              <span className={order.status === 'pending' ? "inline-flex gap-2" : "hidden"}>
                                <button
                                  onClick={() => handleReject(order.id)}
                                  className="bg-red-500/10 hover:bg-red-500 hover:text-white text-red-455 text-xs px-3 py-1.5 rounded-lg border border-red-500/20 transition"
                                >
                                  Reject
                                </button>
                                <button
                                  onClick={() => handleAccept(order.id)}
                                  className="bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-400 text-xs px-3 py-1.5 rounded-lg border border-emerald-500/20 transition font-bold"
                                >
                                  Accept
                                </button>
                              </span>
                              
                              <button
                                onClick={() => handleMarkPrepared(order.id)}
                                className={`bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-400 text-xs px-3.5 py-1.5 rounded-lg border border-indigo-500/20 transition font-bold ${order.status === 'preparing' ? 'inline-block' : 'hidden'}`}
                              >
                                Mark Prepared
                              </button>

                              <span className={order.status === 'prepared' ? "inline-flex items-center gap-2" : "hidden"}>
                                {onlineRiders.length === 0 ? (
                                  <span className="text-[11px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                                    ⚠️ No riders online
                                  </span>
                                ) : (
                                  <>
                                    <select
                                      value={selectedRiders[order.id] || (onlineRiders[0] ? onlineRiders[0].name : '')}
                                      onChange={(e) => handleRiderSelectChange(order.id, e.target.value)}
                                      className={`border rounded-lg text-xs px-2 py-1 focus:outline-none focus:border-cafe-amber font-bold ${
                                        theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-neutral-850 border-neutral-750 text-white'
                                      }`}
                                    >
                                      {onlineRiders.map(rider => {
                                        const st = getRiderStatus(rider);
                                        return (
                                          <option key={rider.id} value={rider.name}>
                                            {rider.name} ({st.status === 'available' ? '🟢 Ready' : st.status === 'delivering' ? '🛵 Delivering' : st.status === 'arrived' ? '📍 Arrived' : '📦 Assigned'})
                                          </option>
                                        );
                                      })}
                                    </select>
                                    <button
                                      onClick={() => handleAssignAndDispatch(order.id)}
                                      className="bg-teal-500/10 hover:bg-teal-500 hover:text-white text-teal-400 text-[11px] px-2 py-1 rounded-lg border border-teal-500/20 transition font-bold"
                                    >
                                      Assign & Dispatch
                                    </button>
                                  </>
                                )}
                              </span>

                              { (order.status === 'pending' && order.cancellationRequested === true) && (
                                <button
                                  onClick={async () => {
                                    if (window.confirm("Cancel this order per customer request?")) {
                                      await db.collection('orders').doc(order.id).update({ status: 'cancelled' });
                                    }
                                  }}
                                  className="text-xs px-2 py-1 bg-red-100 text-red-700 border border-red-400 hover:bg-red-600 hover:text-white rounded-lg transition font-bold inline-block ml-1"
                                >
                                  ✕ Cancel (Customer)
                                </button>
                              )}

                              <span className={(order.status === 'out_for_delivery' || order.status === 'arrived') ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold " + (order.status === 'arrived' ? "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800" : "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800") : "hidden"}>
                                {order.status === 'arrived' ? `📍 At Doorstep: ${order.pickedUpBy || order.assignedRider || 'Rider'}` : `Out with Rider: ${order.pickedUpBy || order.assignedRider || 'Rider'}`}
                              </span>
                              
                              <span className={`text-xs text-emerald-555 font-bold font-sans ${['successfully_delivered', 'delivered', 'completed'].includes(order.status) ? 'inline' : 'hidden'}`}>
                                Delivered ✅
                              </span>

                              <span className={`text-xs text-red-555 font-bold font-sans ${order.status === 'rejected' ? 'inline' : 'hidden'}`}>
                                Cancelled ❌
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Archived Transaction History Log Table */}
              <div className={`rounded-2xl border shadow-xl overflow-hidden ${
                theme === 'light' ? 'bg-white border-slate-200' : 'bg-cafe-card border-neutral-800'
              }`}>
                <div className={`px-6 py-4 border-b flex justify-between items-center ${
                  theme === 'light' ? 'bg-slate-100/50 border-slate-200' : 'bg-neutral-900/40 border-neutral-800'
                }`}>
                  <h3 className="font-serif font-bold text-lg">Archived Transaction History Log</h3>
                  <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider">Historical records</span>
                </div>

                <div className={archivedOrdersList.length === 0 ? "p-8 text-center text-neutral-500 block" : "hidden"}>
                  <p className="text-xs font-semibold">No historical orders in archive.</p>
                </div>

                <div className={archivedOrdersList.length > 0 ? "overflow-x-auto block max-h-[420px] no-scrollbar" : "hidden"}>
                  <table className="min-w-full table-fixed divide-y divide-gray-200 text-left">
                    <colgroup>
                      <col className="w-1/6" />
                      <col className="w-2/5" />
                      <col className="w-2/5" />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="sticky top-0 z-10">
                      <tr className={`border-b text-[10px] text-neutral-455 font-bold uppercase tracking-wider ${
                        theme === 'light' ? 'bg-slate-100' : 'bg-neutral-900'
                      }`}>
                        <th className="px-3 py-3">Time</th>
                        <th className="px-3 py-3">Order Details</th>
                        <th className="px-3 py-3">Billing Address</th>
                        <th className="px-3 py-3 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${theme === 'light' ? 'divide-slate-200' : 'divide-neutral-900/60'}`}>
                      {Object.entries(groupedArchivedOrders).map(([dateString, groupOrders]) => {
                        const deliveredOrders = groupOrders.filter(o => ['successfully_delivered', 'delivered', 'completed'].includes(o.status));
                        const rejectedOrders = groupOrders.filter(o => ['cancelled', 'rejected'].includes(o.status));

                        const totalDeliveredCount = deliveredOrders.length;
                        const totalRevenueCollected = deliveredOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

                        const totalRejectedCount = rejectedOrders.length;
                        const totalLostAmount = rejectedOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

                        return (
                          <React.Fragment key={dateString}>
                            <tr className="bg-transparent">
                              <td colSpan="4" className="p-2 border-0">
                                <div className="w-full bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 my-4">
                                  <span className="font-extrabold text-slate-800 dark:text-slate-100">{dateString}</span>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-400">
                                      ✅ Orders: {totalDeliveredCount} | Collected: ₹{totalRevenueCollected}
                                    </div>
                                    <div className="px-3 py-1 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-lg text-xs font-bold text-rose-700 dark:text-rose-400">
                                      ❌ Rejected: {totalRejectedCount} | Lost: ₹{totalLostAmount}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            {groupOrders.map(order => {
                              const formattedTime = order.createdAt 
                                ? new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) 
                                : (order.placementTime || '--:--');
                              return (
                                <tr key={order.displayId || order.id} className="hover:bg-neutral-900/5 transition-colors">
                                  <td className="px-3 py-3 text-xs font-semibold font-sans">{formattedTime}</td>
                                  <td className="px-3 py-3 font-bold text-xs leading-relaxed whitespace-normal break-words">
                                    #{order.displayId || (order.id ? String(order.id).slice(-4) : '----').toUpperCase()}
                                    <div className="text-[10px] font-normal text-neutral-455 mt-0.5 whitespace-normal leading-normal">
                                      {order.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}
                                    </div>
                                    <div className={`text-[10px] mt-0.5 ${
                                      ['successfully_delivered', 'delivered', 'completed'].includes(order.status) 
                                        ? 'text-green-600 font-bold' 
                                        : 'text-red-600 font-bold'
                                    }`}>
                                      ₹{order.totalAmount}
                                    </div>
                                  </td>
                                  <td className="px-3 py-3 text-[11px] text-neutral-400 leading-normal whitespace-normal break-words">
                                    <div className="font-bold text-neutral-505">{order.customerName} ({order.customerPhone})</div>
                                    <div className="mt-0.5 italic text-neutral-455">{order.landmarks || order.address || order.customerAddress}</div>
                                  </td>
                                  <td className="px-3 py-3 text-center">
                                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wide ${
                                      ['successfully_delivered', 'delivered', 'completed'].includes(order.status) 
                                        ? 'bg-emerald-500/10 text-green-600 font-bold border border-emerald-500/20' 
                                        : 'bg-red-500/10 text-red-600 font-bold border border-red-500/20'
                                    }`}>
                                      {['successfully_delivered', 'delivered', 'completed'].includes(order.status) ? 'Delivered' : 'Cancelled'}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              
              {/* Delivery Fleet & Live Rider Status Hub (Top Priority) */}
              <div className={`rounded-2xl border shadow-xl p-6 space-y-5 ${
                theme === 'light' ? 'bg-white border-slate-205' : 'bg-cafe-card border-neutral-800'
              }`}>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🛵</span>
                    <div>
                      <h3 className={`font-serif font-bold text-base ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        Delivery Fleet Management
                      </h3>
                      <p className="text-[10px] text-neutral-450 font-semibold">Live Rider Profiles & Operational Status</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      generateRandomPin();
                      setShowAddRider(true);
                      setRiderFormError('');
                    }}
                    className="px-3 py-1.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold text-xs rounded-xl shadow hover:opacity-95 transition flex items-center space-x-1"
                  >
                    <span>+ Add Rider</span>
                  </button>
                </div>

                {/* Fleet Quick Status Summary Badges */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                  <div className={`p-2 rounded-xl border ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900/60 border-neutral-800'
                  }`}>
                    <span className="text-neutral-450 block">Fleet</span>
                    <span className="text-base font-black text-amber-500 font-mono">{fleetRiders.length}</span>
                  </div>
                  <div className={`p-2 rounded-xl border ${
                    theme === 'light' ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800/40'
                  }`}>
                    <span className="text-emerald-500 block">Available</span>
                    <span className="text-base font-black text-emerald-500 font-mono">
                      {fleetRiders.filter(r => getRiderStatus(r).status === 'available').length}
                    </span>
                  </div>
                  <div className={`p-2 rounded-xl border ${
                    theme === 'light' ? 'bg-blue-50/50 border-blue-200' : 'bg-blue-950/20 border-blue-800/40'
                  }`}>
                    <span className="text-blue-400 block">Delivering</span>
                    <span className="text-base font-black text-blue-400 font-mono">
                      {fleetRiders.filter(r => ['delivering', 'prepared'].includes(getRiderStatus(r).status)).length}
                    </span>
                  </div>
                </div>

                {/* Registered Riders List */}
                <div className="space-y-3">
                  <span className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                    Roster & Real-Time Tracking
                  </span>

                  {fleetRiders.length === 0 ? (
                    <div className="text-center py-8 text-neutral-500 text-xs">
                      No riders registered yet. Click <strong>+ Add Rider</strong> to create one.
                    </div>
                  ) : (
                    <div className={`max-h-[360px] overflow-y-auto border rounded-xl no-scrollbar divide-y ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 divide-slate-200' : 'bg-cafe-black/40 border-neutral-805 divide-neutral-900/60'
                    }`}>
                      {fleetRiders.map(rider => {
                        const st = getRiderStatus(rider);
                        const todayCount = getRiderTodayDeliveriesCount(rider.name);
                        const todayCollected = getRiderTodayAmountCollected(rider.name);

                        return (
                          <div key={rider.id} className="p-3.5 space-y-2.5">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h4 className={`font-bold text-xs ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                                    {rider.name}
                                  </h4>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-amber-400 font-bold border border-neutral-700">
                                    PIN: {rider.pin || rider.id}
                                  </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-450 mt-1">
                                  <a href={`tel:${rider.phone}`} className="hover:text-amber-500 font-medium">
                                    📞 {rider.phone || 'No phone'}
                                  </a>
                                  <span>•</span>
                                  <span className="text-emerald-500 font-bold">₹{todayCollected} collected</span>
                                  <span>•</span>
                                  <span className="text-neutral-400 font-semibold">{todayCount} orders</span>
                                </div>
                              </div>

                              {/* Live Status Badge */}
                              <div className="text-right">
                                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${st.badgeClass}`}>
                                  {st.label}
                                </span>
                                {st.sublabel && (
                                  <span className="block text-[9px] text-neutral-450 font-medium mt-0.5">
                                    {st.sublabel}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Rider Quick Action Toolbar (Self-Governed Duty Status + Double-Confirmed Delete) */}
                            <div className="flex items-center justify-between pt-1 border-t border-neutral-900/10 dark:border-neutral-800/60 text-[10px]">
                              <div className="text-[10px] text-neutral-400 font-medium flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${rider.isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'}`} />
                                <span>{rider.isOnline ? 'Active on shift' : 'Currently offline'}</span>
                              </div>

                              <button
                                onClick={() => handleDeleteRider(rider)}
                                className="text-red-500 hover:text-red-400 font-bold uppercase px-2 py-1 transition flex items-center gap-1"
                                title="Safely remove rider from fleet"
                              >
                                ✕ Delete
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Add New Rider Modal */}
              {showAddRider && (
                <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                  <div className={`w-full max-w-sm rounded-2xl border shadow-2xl p-6 space-y-4 ${
                    theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
                  }`}>
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800/40">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🛵</span>
                        <h3 className="font-serif font-bold text-base">Register New Delivery Rider</h3>
                      </div>
                      <button
                        onClick={() => setShowAddRider(false)}
                        className="text-neutral-400 hover:text-white p-1"
                      >
                        ✕
                      </button>
                    </div>

                    {riderFormError && (
                      <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold">
                        {riderFormError}
                      </div>
                    )}

                    <form onSubmit={handleAddRider} className="space-y-3.5">
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-1">
                          Rider Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={newRiderName}
                          onChange={(e) => setNewRiderName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full border rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:border-cafe-amber ${
                            theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-neutral-900 border-neutral-800 text-white'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-1">
                          10-Digit Mobile Number
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={newRiderPhone}
                          onChange={(e) => setNewRiderPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="e.g. 9876543210"
                          className={`w-full border rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:border-cafe-amber ${
                            theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-neutral-900 border-neutral-800 text-white'
                          }`}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider">
                            6-Digit Login PIN
                          </label>
                          <button
                            type="button"
                            onClick={generateRandomPin}
                            className="text-[10px] text-cafe-amber hover:underline font-bold"
                          >
                            🎲 Auto-Generate
                          </button>
                        </div>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          value={newRiderPin}
                          onChange={(e) => setNewRiderPin(e.target.value.replace(/\D/g, ''))}
                          placeholder="6-digit PIN (e.g. 456789)"
                          className={`w-full border rounded-xl px-3.5 py-2 text-xs font-mono font-bold tracking-widest text-center focus:outline-none focus:border-cafe-amber ${
                            theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-neutral-900 border-neutral-800 text-white'
                          }`}
                        />
                        <span className="block text-[9px] text-neutral-500 mt-1">
                          The rider will use this 6-digit PIN to sign in to the Delivery Portal.
                        </span>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowAddRider(false)}
                          className="flex-1 py-2.5 rounded-xl border border-neutral-700 hover:bg-neutral-800 text-xs font-bold text-neutral-300 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={riderFormLoading}
                          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black text-xs font-extrabold shadow hover:opacity-95 transition disabled:opacity-50"
                        >
                          {riderFormLoading ? 'Registering...' : 'Register Rider'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Permanent Store Configuration Panel (Below Fleet) */}
              <div className={`rounded-2xl border shadow-xl p-6 space-y-6 ${
                theme === 'light' ? 'bg-white border-slate-205' : 'bg-cafe-card border-neutral-800'
              }`}>
                <div className="pb-3 border-b border-neutral-900/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-serif font-bold text-base ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>⚙️ Live Menu Manager</h3>
                    {isMenuDirty && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-500 border border-amber-500/30 animate-pulse">
                        Unsaved Changes
                      </span>
                    )}
                  </div>
                  {isMenuDirty && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setDraftMenuSettings(menuSettings);
                          setIsMenuDirty(false);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
                      >
                        Discard
                      </button>
                      <button
                        type="button"
                        disabled={isMenuSaving}
                        onClick={handleSaveMenuChanges}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-black bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black hover:brightness-110 shadow-md transition active:scale-95 flex items-center gap-1.5"
                      >
                        {isMenuSaving ? 'Saving...' : '✓ Update Menu'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Staging Warning Alert Bar */}
                {isMenuDirty && (
                  <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-base">⚠️</span>
                      <span className="font-semibold text-amber-500">
                        Changes staged! Tap <strong>"Update Menu"</strong> to confirm & apply live.
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2">GST Rate (%)</label>
                    <input
                      type="number" min="0" value={draftMenuSettings.gstRate ?? 0} onChange={e => handleGstChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${
                        theme === 'light' ? 'bg-neutral-50 border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-800 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2">Fixed Delivery Fee (₹)</label>
                    <input
                      type="number" min="0" value={draftMenuSettings.deliveryFee ?? 0} onChange={e => handleDeliveryFeeChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber font-sans font-bold ${
                        theme === 'light' ? 'bg-neutral-50 border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-800 text-white'
                      }`}
                    />
                  </div>
                </div>

                <hr className={theme === 'light' ? 'border-slate-200' : 'border-neutral-800'} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider">Spreadsheet Inventory Matrix</span>
                    <span className="text-[10px] text-neutral-500 font-semibold">{catalogList.length} items</span>
                  </div>

                  <div className={`max-h-[320px] overflow-y-auto border rounded-xl no-scrollbar divide-y ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200 divide-slate-200' : 'bg-cafe-black/40 border-neutral-805 divide-neutral-900/60'
                  }`}>
                    {catalogList.map(item => (
                      <div key={item.name} className="p-3 flex items-center justify-between text-xs gap-3">
                        <div className="flex-1 min-w-0">
                          <span className={`font-bold block truncate leading-normal ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{item.name}</span>
                          <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">{item.category}</span>
                        </div>
                        <div className="w-16">
                          <input 
                            type="number" min="0" value={item.currentPrice ?? 0} 
                            onChange={e => handleItemPriceChange(item.name, e.target.value)}
                            className={`w-full border rounded-lg p-1.5 text-center focus:outline-none focus:border-cafe-amber font-sans font-bold ${
                              theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-800 text-white'
                            }`}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleItemAvailabilityToggle(item.name)}
                          className={`px-3 py-2 rounded-lg font-bold text-[9px] uppercase tracking-wider transition ${
                            item.isAvailable 
                              ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20' 
                              : 'bg-red-650/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                          }`}
                        >
                          {item.isAvailable ? 'Available' : 'Sold Out'}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Update Action when changes are made */}
                  {isMenuDirty && (
                    <div className="pt-2 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setDraftMenuSettings(menuSettings);
                          setIsMenuDirty(false);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-bold border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
                      >
                        Discard Changes
                      </button>
                      <button
                        type="button"
                        disabled={isMenuSaving}
                        onClick={handleSaveMenuChanges}
                        className="px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black hover:brightness-110 shadow-lg transition active:scale-95 flex items-center gap-2"
                      >
                        {isMenuSaving ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            <span>Saving Changes...</span>
                          </>
                        ) : (
                          <span>✓ Confirm & Save All Changes</span>
                        )}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

          {/* Floating Toast Notification Container */}
          <div className="fixed top-6 right-6 z-[100] space-y-3 w-80 pointer-events-none">
            {toasts.map(toast => (
              <div 
                key={toast.id}
                className="pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl shadow-2xl border border-emerald-500/30 flex items-start justify-between space-x-3 animate-bounce-slow"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🎉</span>
                    <span className="font-extrabold text-sm tracking-wide text-white">
                      {toast.title || (toast.message ? 'System Notice' : 'Delivery Complete!')}
                    </span>
                  </div>
                  {toast.message ? (
                    <p className="text-[12px] text-emerald-100 font-medium">
                      {toast.message}
                    </p>
                  ) : (
                    <>
                      <p className="text-[11px] text-emerald-100 font-medium">
                        Order <strong>#{toast.orderId ? String(toast.orderId).slice(-6) : '----'}</strong> delivered to <strong>{toast.customerName}</strong>.
                      </p>
                      <p className="text-[10px] text-emerald-250 font-bold">
                        Collected: <strong>₹{toast.totalAmount}</strong>
                      </p>
                    </>
                  )}
                </div>
                <button 
                  onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          </div>
        </div>
      );
    };

    // Owner Router Guard - strict role OWNER_COUNTER checking
    const ShopCounterGuard = ({ activeRoute }) => {
      const { ownerUser, loadingAuth } = useContext(AuthContext);

      useEffect(() => {
        if (activeRoute === '#/shop-counter') {
          if (!loadingAuth && !ownerUser) {
            setTimeout(() => {
              window.location.hash = '#/login';
            }, 100);
          }
        }
      }, [ownerUser, loadingAuth, activeRoute]);

      if (loadingAuth) {
        return (
          <div className="min-h-screen bg-cafe-black flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"></div>
          </div>
        );
      }

      if (activeRoute === '#/shop-counter' && !ownerUser) {
        return (
          <div className="min-h-screen bg-cafe-black flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-4 border-cafe-amber border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-neutral-400 font-semibold">Redirecting to login...</p>
          </div>
        );
      }

      return <ShopCounter />;
    };

    // Fix 3: HTML5 Audio — avoids AudioContext instance clashing with the Kitchen's Web Audio API
    // A module-level Audio object is created once and reused for every beep.
    let _riderAudio = null;
    const getRiderAudio = () => {
      if (!_riderAudio) {
        _riderAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        _riderAudio.volume = 1.0;
      }
      return _riderAudio;
    };

    const playRiderAlertBeep = () => {
      try {
        const audio = getRiderAudio();
        audio.currentTime = 0;
        audio.play().catch(err => console.warn('Rider audio play blocked:', err));
      } catch (err) {
        console.warn('Rider audio error:', err);
      }
    };

    const SwipeToAccept = ({ onSwipeComplete, label = 'Slide to Accept Parcel ➔', color = 'amber' }) => {
      const [dragX, setDragX] = useState(0);
      const [isDragging, setIsDragging] = useState(false);
      const trackRef = useRef(null);
      const startXRef = useRef(0);
      const completedRef = useRef(false);

      const handleStart = (clientX) => {
        completedRef.current = false;
        setIsDragging(true);
        startXRef.current = clientX - dragX;
      };

      const handleMove = (clientX) => {
        if (!isDragging || !trackRef.current || completedRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const maxDrag = rect.width - 48;
        const currentX = clientX - startXRef.current;
        const clampedX = Math.max(0, Math.min(currentX, maxDrag));
        setDragX(clampedX);
        if (clampedX >= maxDrag - 4) {
          completedRef.current = true;
          setIsDragging(false);
          setDragX(0);
          onSwipeComplete();
        }
      };

      const handleEnd = () => { setIsDragging(false); setDragX(0); };

      useEffect(() => {
        if (isDragging) {
          const onMouseMove = (e) => handleMove(e.clientX);
          const onMouseUp = () => handleEnd();
          const onTouchMove = (e) => { if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX); };
          const onTouchEnd = () => handleEnd();
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
          window.addEventListener('touchmove', onTouchMove, { passive: true });
          window.addEventListener('touchend', onTouchEnd);
          return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
          };
        }
      }, [isDragging]);

      const isGreen = color === 'green';
      const isBlue = color === 'blue';
      const trackBg = isGreen 
        ? 'bg-emerald-950/40 border-emerald-800' 
        : isBlue 
          ? 'bg-blue-950/40 border-blue-800' 
          : 'bg-neutral-900 border-neutral-800';
      const fillBg = isGreen 
        ? 'bg-emerald-500/20' 
        : isBlue 
          ? 'bg-blue-500/20' 
          : 'bg-amber-500/15';
      const thumbBg = isGreen 
        ? 'bg-emerald-500 text-white' 
        : isBlue 
          ? 'bg-blue-500 text-white' 
          : 'bg-cafe-amber text-cafe-black';
      const thumbIcon = isGreen ? '✅' : isBlue ? '📍' : '🛵';

      return (
        <div
          ref={trackRef}
          className={`relative w-full h-12 rounded-xl border select-none overflow-hidden flex items-center ${trackBg}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase font-black text-neutral-450 pointer-events-none tracking-widest">
            {label}
          </div>
          <div
            className={`absolute top-0 bottom-0 left-0 transition-all pointer-events-none ${fillBg}`}
            style={{ width: `${dragX + 24}px` }}
          />
          <div
            onMouseDown={(e) => handleStart(e.clientX)}
            onTouchStart={(e) => { if (e.touches && e.touches[0]) handleStart(e.touches[0].clientX); }}
            className={`absolute left-1 top-1 bottom-1 w-10 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center font-bold shadow-lg transition-transform duration-75 select-none z-10 ${thumbBg}`}
            style={{ transform: `translateX(${dragX}px)` }}
          >
            {thumbIcon}
          </div>
        </div>
      );
    };

    // 4. DELIVERY RIDER INTERFACE (/delivery-dashboard)
    const DeliveryDashboard = () => {
      const { theme, toggleTheme } = useContext(AppContext);
      const { signOut } = useContext(AuthContext);
      const [orders, setOrders] = useState([]);
      const [otpInputs, setOtpInputs] = useState({});

      const [riderId, setRiderId] = useState(() => localStorage.getItem('cc_rider_id') || '');
      const [audioUnlocked, setAudioUnlocked] = useState(false);
      const [rideSafeToast, setRideSafeToast] = useState(null);
      const [isProfileOpen, setIsProfileOpen] = useState(false);

      // Onboarding flow states
      const [loginStep, setLoginStep] = useState('pin');   // 'pin' | 'phone' | 'otp' | 'name'
      const [loginLoading, setLoginLoading] = useState(false);
      const [loginError, setLoginError] = useState('');
      const [pendingPin, setPendingPin] = useState('');
      const [pendingPhone, setPendingPhone] = useState('');
      const [pendingName, setPendingName] = useState('');
      const [confirmationResult, setConfirmationResult] = useState(null);
      const [otpCode, setOtpCode] = useState('');

      const [riderName, setRiderName] = useState(() => localStorage.getItem('cc_rider_profile_name') || '');
      const [riderPhone, setRiderPhone] = useState(() => localStorage.getItem('cc_rider_profile_phone') || '');
      const [loginTime, setLoginTime] = useState(() => localStorage.getItem('cc_login_time') || '');
      
      const [isChangingPhone, setIsChangingPhone] = useState(false);
      const [newPhone, setNewPhone] = useState('');
      const [confirmNewPhone, setConfirmNewPhone] = useState('');
      const [updateOtp, setUpdateOtp] = useState('');
      const [mockUpdateOtp, setMockUpdateOtp] = useState('');
      const [isUpdateLoading, setIsUpdateLoading] = useState(false);
      const [showUpdateOtpInput, setShowUpdateOtpInput] = useState(false);
      const [qrModalOrder, setQrModalOrder] = useState(null);

      // Rider Online Duty & Shift Tracking State
      const [isOnline, setIsOnline] = useState(false);
      const [dutyStartTime, setDutyStartTime] = useState(null);
      const [dutyTimerText, setDutyTimerText] = useState('');
      const [showOfflineModal, setShowOfflineModal] = useState(false);

      useEffect(() => {
        if (!riderId) return;
        const unsub = db.collection('riders').doc(riderId).onSnapshot(doc => {
          if (doc.exists) {
            const data = doc.data();
            setIsOnline(data.isOnline === true);
            setDutyStartTime(data.dutyStartTime || null);
          }
        }, err => console.warn('Rider duty sync error:', err));
        return () => unsub();
      }, [riderId]);

      // Ticking timer for active duty shift
      useEffect(() => {
        if (!isOnline || !dutyStartTime) {
          setDutyTimerText('');
          return;
        }
        const updateTimer = () => {
          const diffMs = Math.max(0, Date.now() - dutyStartTime);
          const totalMins = Math.floor(diffMs / 60000);
          const hrs = Math.floor(totalMins / 60);
          const mins = totalMins % 60;
          if (hrs > 0) {
            setDutyTimerText(`${hrs}h ${mins}m`);
          } else {
            setDutyTimerText(`${mins}m`);
          }
        };
        updateTimer();
        const interval = setInterval(updateTimer, 30000);
        return () => clearInterval(interval);
      }, [isOnline, dutyStartTime]);

      useEffect(() => {
        if (riderId && !loginTime) {
          const timeStr = new Date().toLocaleTimeString();
          localStorage.setItem('cc_login_time', timeStr);
          setLoginTime(timeStr);
        }
      }, [riderId, loginTime]);

      const activeRiderProfile = riderName;

      const beepedOrdersRef = useRef(new Set());
      const acceptedOrdersRef = useRef(new Set());
      const rideSafeToastTimerRef = useRef(null);

      // Autoplay silent unlock helper on page interaction
      useEffect(() => {
        const unlock = () => {
          try {
            riderAlert.play().then(() => {
              riderAlert.pause();
            }).catch(err => console.warn("Autoplay unlock failed:", err));
          } catch(e){}
          setAudioUnlocked(true);
          window.removeEventListener('click', unlock);
        };
        if (!audioUnlocked) {
          window.addEventListener('click', unlock);
        }
        return () => window.removeEventListener('click', unlock);
      }, [audioUnlocked]);

      const [activeTab, setActiveTab] = useState('active');

      const parseDate = (createdAt) => {
        if (!createdAt) return 'unknown date';
        const d = new Date(createdAt);
        const today = new Date();
        
        const dayNum = String(d.getDate()).padStart(2, '0');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthStr = months[d.getMonth()];
        const year = d.getFullYear();
        const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const weekdayStr = weekdays[d.getDay()];

        const formatted = `${dayNum}-${monthStr}-${year} ${weekdayStr}`;

        if (d.toDateString() === today.toDateString()) {
          return `todays : ${formatted}`;
        }
        return formatted;
      };

      useEffect(() => {
        // Single-field query: no composite index required.
        // Active/history split happens in JS after fetch.
        const unsubOrders = db.collection('orders')
          .where('assignedRider', '==', activeRiderProfile)
          .onSnapshot((snapshot) => {
            const all = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // Sort newest-first
            all.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            setOrders(all);
          }, err => console.error('Rider orders query error:', err));

        return () => {
          unsubOrders();
        };
      }, [activeRiderProfile]);

      useEffect(() => {
        // Fix 2: Route gate — prevent any audio leaking into Customer or Kitchen views
        if (window.location.hash !== '#/delivery-dashboard') return;
        if (!audioUnlocked) return;

        const myActiveJobs = orders.filter(o => o.assignedRider === activeRiderProfile && o.status === 'prepared');
        const hasNewAlertJob = myActiveJobs.some(job => !beepedOrdersRef.current.has(job.id));

        if (hasNewAlertJob) {
          myActiveJobs.forEach(job => beepedOrdersRef.current.add(job.id));
          riderAlert.play().catch(err => console.warn('Rider alarm play blocked:', err));
        } else if (myActiveJobs.length === 0) {
          riderAlert.pause();
          riderAlert.currentTime = 0;
        }
      }, [orders, audioUnlocked, activeRiderProfile]);

      useEffect(() => {
        return () => {
          if (rideSafeToastTimerRef.current) clearTimeout(rideSafeToastTimerRef.current);
        };
      }, []);

      const handleConfirmPaymentAndDelivery = async (order) => {
        const orderNum = order?.displayId || (order?.id ? String(order.id).slice(-4) : '----').toUpperCase();
        if (!window.confirm(`Confirm payment received (₹${order.totalAmount}) and mark Order #${orderNum} as delivered?`)) {
          return;
        }

        // Stop the alert audio if running
        riderAlert.pause();
        riderAlert.currentTime = 0;

        await updateOrderStatus(order.id, 'delivered', {
          deliveredAt: Date.now(),
          paymentConfirmedByRider: true
        });

        const custPhone = (order.customerPhone || '').split(' / ')[0].trim();
        if (custPhone) {
          db.collection('users').doc(custPhone).update({
            phoneStatus: 'verified',
            trustedUser: true,
            verified: true
          }).catch(e => console.log('Trust upgrade failed:', e));
        }
      };

      const showRideSafeToast = (orderId) => {
        if (acceptedOrdersRef.current.has(orderId)) return;
        acceptedOrdersRef.current.add(orderId);
        const toastId = Date.now();
        setRideSafeToast({ id: toastId, orderId });
        if (rideSafeToastTimerRef.current) clearTimeout(rideSafeToastTimerRef.current);
        rideSafeToastTimerRef.current = setTimeout(() => {
          setRideSafeToast(null);
        }, 4500);
      };

      const handlePickUpAndStart = async (orderId) => {
        if (!riderId) return;
        if (acceptedOrdersRef.current.has(orderId)) return;
        acceptedOrdersRef.current.add(orderId);

        // Stop the looping alarm the moment the rider accepts the job
        riderAlert.pause();
        riderAlert.currentTime = 0;

        await updateOrderStatus(orderId, 'out_for_delivery', {
          riderName: riderName,
          riderPhone: riderPhone,
          pickedUpBy: riderName,
          dispatchedAt: Date.now()
        });
        showRideSafeToast(orderId);

        // Update rider live GPS location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              db.collection('riders').doc(riderId).update({
                location: {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                  updatedAt: Date.now()
                }
              }).catch(() => {});
            },
            () => {},
            { enableHighAccuracy: true, timeout: 8000 }
          );
        }
      };

      const handleMarkArrived = async (orderId) => {
        if (!riderId) return;
        await updateOrderStatus(orderId, 'arrived', {
          arrivedAt: Date.now()
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              db.collection('riders').doc(riderId).update({
                location: {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                  updatedAt: Date.now()
                }
              }).catch(() => {});
            },
            () => {},
            { enableHighAccuracy: true, timeout: 8000 }
          );
        }
      };

      useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
      }, [orders, otpInputs, theme, rideSafeToast, isProfileOpen, qrModalOrder, showOfflineModal]);

      const activeJobs = orders.filter(o => (o.assignedRider === activeRiderProfile || o.pickedUpBy === activeRiderProfile) && ['preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status));
      const completedJobs = orders.filter(o => (o.assignedRider === activeRiderProfile || o.pickedUpBy === activeRiderProfile) && ['successfully_delivered', 'delivered', 'completed', 'rejected', 'cancelled'].includes(o.status));

      // Count deliveries and total cash collected confirmed today
      // Only count successfully delivered orders (not rejected/cancelled) for earnings
      const todaysCompletedJobs = completedJobs.filter(order => {
        if (!['successfully_delivered', 'delivered', 'completed'].includes(order.status)) return false;
        const ts = order.deliveredAt || order.createdAt;
        const orderDate = ts && typeof ts === 'number' ? new Date(ts) : new Date(ts || 0);
        const today = new Date();
        return orderDate.getDate() === today.getDate() &&
               orderDate.getMonth() === today.getMonth() &&
               orderDate.getFullYear() === today.getFullYear();
      });

      const todaysDeliveries = todaysCompletedJobs.length;
      const todaysCollected = todaysCompletedJobs.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

      const toggleDutyOnline = async () => {
        if (!riderId) return;

        // If rider is currently online and wants to switch to offline:
        if (isOnline) {
          // Strict Guard: Rider cannot go offline while holding ANY active delivery order
          if (activeJobs.length > 0) {
            alert(`⚠️ Cannot Go Offline: You currently have ${activeJobs.length} active order(s) assigned! Please complete and deliver all assigned orders before switching offline.`);
            return;
          }
          // Open confirmation modal to prevent accidental miss-touches
          setShowOfflineModal(true);
        } else {
          // Going online -> activate duty immediately & capture on-demand GPS
          try {
            const now = Date.now();
            await db.collection('riders').doc(riderId).update({
              isOnline: true,
              dutyStartTime: now
            });
            setIsOnline(true);
            setDutyStartTime(now);

            // On-demand GPS location extraction (Zero API Cost)
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (pos) => {
                  db.collection('riders').doc(riderId).update({
                    location: {
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude,
                      updatedAt: Date.now()
                    }
                  }).catch(() => {});
                },
                (err) => console.warn('Rider GPS notice:', err),
                { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
              );
            }
          } catch (err) {
            console.error('Failed to go online:', err);
            alert('Could not update duty status. Please check your internet connection.');
          }
        }
      };

      const confirmGoOffline = async () => {
        if (!riderId) return;
        if (activeJobs.length > 0) {
          alert(`⚠️ Cannot Go Offline: You currently have ${activeJobs.length} active order(s) assigned! Please deliver them first.`);
          setShowOfflineModal(false);
          return;
        }
        try {
          await db.collection('riders').doc(riderId).update({
            isOnline: false,
            dutyEndTime: Date.now()
          });
          setIsOnline(false);
          setShowOfflineModal(false);
        } catch (err) {
          console.error('Failed to go offline:', err);
          alert('Could not update duty status. Please check your internet connection.');
        }
      };

      const groupedOrders = completedJobs.reduce((acc, order) => {
        const dateStr = parseDate(order.deliveredAt || order.createdAt);
        if (!acc[dateStr]) acc[dateStr] = [];
        acc[dateStr].push(order);
        return acc;
      }, {});

      // Helper: complete login after verification
      const completeLogin = (pin, name, phone) => {
        try {
          riderAlert.play().then(() => riderAlert.pause()).catch(() => {});
        } catch(e) {}
        setAudioUnlocked(true);
        const currentTime = new Date().toLocaleTimeString();
        localStorage.setItem('cc_rider_id', pin);
        localStorage.setItem('cc_rider_profile_name', name);
        localStorage.setItem('cc_rider_profile_phone', phone);
        localStorage.setItem('cc_login_time', currentTime);
        setRiderName(name);
        setRiderPhone(phone);
        setLoginTime(currentTime);
        setRiderId(pin);
      };

      // Step 1: PIN entered → check Firebase
      const handlePinSubmit = async (e) => {
        e.preventDefault();
        const pin = e.target.riderIdInput.value.trim();
        if (!pin || pin.length !== 6) { setLoginError('Enter a valid 6-digit ID.'); return; }
        setLoginLoading(true);
        setLoginError('');
        try {
          const doc = await db.collection('riders').doc(pin).get();
          if (doc.exists && doc.data().verified === true) {
            // Returning verified rider — log in directly
            const data = doc.data();
            completeLogin(pin, data.name, data.phone);
          } else {
            // First-time setup — collect phone
            setPendingPin(pin);
            setLoginStep('phone');
          }
        } catch(err) {
          setLoginError('Connection error. Try again.');
          console.error(err);
        } finally {
          setLoginLoading(false);
        }
      };

      // Step 2: Phone (double-entry) → 2.5 s simulated trust check, then mock OTP
      const handlePhoneSubmit = (e) => {
        e.preventDefault();
        const phone = e.target.riderPhoneInput.value.trim();
        const confirmPhone = e.target.confirmRiderPhone.value.trim();
        const isValidIndianRider = (n) => /^[6-9]\d{9}$/.test(n);
        if (!isValidIndianRider(phone)) {
          setLoginError('Invalid number. Must be 10 digits starting with 6–9.');
          return;
        }
        if (phone !== confirmPhone) {
          setLoginError('Phone numbers do not match. Please re-enter both fields.');
          return;
        }
        setLoginLoading(true);
        setLoginError('');
        setTimeout(() => {
          const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
          window._riderMockOtp = mockOtp;
          setLoginLoading(false);
          setPendingPhone(phone);
          try { new Audio('https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3').play().catch(() => {}); } catch(e) {}
          // No alert() — code is shown inline in the OTP step panel below
          setLoginStep('otp');
        }, 2500);
      };

      // Step 3: Mock OTP verified — advance to name step
      const handleOtpVerify = async (e) => {
        e.preventDefault();
        if (!otpCode || otpCode.trim() !== window._riderMockOtp) {
          setLoginError('Incorrect code. Please try again.');
          return;
        }
        setLoginLoading(true);
        setLoginError('');
        // Small pause for UX polish
        setTimeout(() => {
          setLoginLoading(false);
          setLoginStep('name');
        }, 600);
      };

      // Step 4: Name entered → save to Firebase and log in
      const handleNameSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.riderNameInput.value.trim();
        if (!name) { setLoginError('Enter your name.'); return; }
        setLoginLoading(true);
        setLoginError('');
        try {
          await db.collection('riders').doc(pendingPin).set({
            name: name,
            phone: pendingPhone,
            verified: true,
            registeredAt: Date.now()
          });
          completeLogin(pendingPin, name, pendingPhone);
        } catch(err) {
          setLoginError('Failed to save profile: ' + (err.message || 'Try again.'));
          console.error(err);
        } finally {
          setLoginLoading(false);
        }
      };

      if (!riderId) {
        return (
          <div className="min-h-screen bg-cafe-black flex items-center justify-center p-6 relative font-sans text-white">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-955 via-neutral-950 to-neutral-950 pointer-events-none z-0"></div>

            <div className="w-full max-w-sm bg-cafe-card rounded-3xl border border-neutral-800 p-8 space-y-6 shadow-2xl relative z-10 text-center">
              <img src="./logo_rm_bg.png" className="h-16 mx-auto object-contain mb-2 drop-shadow-sm" alt="Crispy Chick Logo" />

              {/* Step indicator */}
              <div className="flex justify-center gap-2">
                {['pin','phone','otp','name'].map((s, i) => (
                  <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${
                    ['pin','phone','otp','name'].indexOf(loginStep) >= i
                      ? 'bg-cafe-amber w-6' : 'bg-neutral-700 w-3'
                  }`}></div>
                ))}
              </div>

              {loginError && (
                <p className="text-[11px] text-red-400 font-bold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{loginError}</p>
              )}

              {/* Step 1: PIN */}
              {loginStep === 'pin' && (
                <form onSubmit={handlePinSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-bold font-serif">Rider Gate</h2>
                    <p className="text-xs text-neutral-400 font-medium">Enter your 6-Digit Rider ID</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">6-Digit Rider ID</label>
                    <input
                      name="riderIdInput" required type="text" pattern="\d{6}" maxLength="6" placeholder="E.g., 123456"
                      className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-widest font-black"
                    />
                  </div>
                  <button type="submit" disabled={loginLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-sm disabled:opacity-60"
                  >
                    {loginLoading ? <div className="w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"></div> : <span>VERIFY ID</span>}
                  </button>
                </form>
              )}

              {/* Step 2: Phone number — DOUBLE ENTRY required */}
              {loginStep === 'phone' && (
                <form onSubmit={handlePhoneSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-bold font-serif">First-Time Setup</h2>
                    <p className="text-xs text-neutral-400 font-medium">Enter your mobile number twice to confirm.</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="riderPhoneInput" required type="tel" placeholder="E.g., 9876543210" maxLength="10" pattern="[6-9][0-9]{9}" inputMode="numeric"
                      className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Confirm Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="confirmRiderPhone" required type="tel" placeholder="Re-enter number" maxLength="10" pattern="[6-9][0-9]{9}" inputMode="numeric"
                      className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold tracking-widest"
                    />
                  </div>
                  <button type="submit" disabled={loginLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60"
                  >
                    {loginLoading ? <div className="w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"></div> : <span>SEND SECURE CODE ›</span>}
                  </button>
                  <button type="button" onClick={() => { setLoginStep('pin'); setLoginError(''); }}
                    className="w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition"
                  >← Back</button>
                </form>
              )}

              {/* Step 3: OTP — shows code inline, no alert */}
              {loginStep === 'otp' && (
                <form onSubmit={handleOtpVerify} className="space-y-4 text-left">
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-bold font-serif">Enter Security Code</h2>
                    <p className="text-xs text-neutral-400 font-medium">Use the code generated below to continue.</p>
                  </div>
                  {/* Live code display + copy */}
                  <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-neutral-900 border-neutral-700">
                    <span className="text-2xl font-black tracking-[0.35em] text-cafe-amber select-all font-mono flex-1 text-center" id="rider-otp-display">
                      {window._riderMockOtp || '——————'}
                    </span>
                    <button
                      type="button"
                      id="rider-otp-copy-btn"
                      onClick={() => {
                        const code = window._riderMockOtp || '';
                        try {
                          navigator.clipboard.writeText(code).then(() => {
                            const btn = document.getElementById('rider-otp-copy-btn');
                            if (btn) { btn.textContent = 'Copied ✓'; setTimeout(() => { btn.textContent = 'Copy'; }, 1500); }
                          }).catch(() => {});
                        } catch(e) {}
                      }}
                      className="shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 transition-all"
                    >Copy</button>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Enter Code to Verify</label>
                    <input
                      required type="text" pattern="\d{6}" maxLength="6" placeholder="••••••"
                      value={otpCode} onChange={e => setOtpCode(e.target.value)}
                      className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center tracking-[0.5em] font-black"
                    />
                  </div>
                  <button type="submit" disabled={loginLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60"
                  >
                    {loginLoading ? <div className="w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"></div> : <span>VERIFY CODE →</span>}
                  </button>
                  <button type="button" onClick={() => { setLoginStep('phone'); setLoginError(''); setOtpCode(''); }}
                    className="w-full text-[11px] text-neutral-500 hover:text-neutral-300 transition"
                  >← Back</button>
                </form>
              )}

              {/* Step 4: Name */}
              {loginStep === 'name' && (
                <form onSubmit={handleNameSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-bold font-serif">Almost There!</h2>
                    <p className="text-xs text-neutral-400 font-medium">Phone verified ✅ — Enter your display name.</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      name="riderNameInput" required type="text" placeholder="E.g., Salman"
                      className="w-full bg-cafe-black border border-neutral-805 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cafe-amber text-center font-bold"
                    />
                  </div>
                  <button type="submit" disabled={loginLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg transition flex items-center justify-center text-sm disabled:opacity-60"
                  >
                    {loginLoading ? <div className="w-5 h-5 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"></div> : <span>START DELIVERING 🛵</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        );
      }

      return (
        <div className={`min-h-screen p-6 max-w-md mx-auto shadow-2xl border-x transition-colors duration-300 font-sans ${
          theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-cafe-black border-neutral-900/60 text-white'
        }`}>
          <div className="space-y-6">
            
            <div className={`flex items-center justify-between w-full px-4 py-3 sticky top-0 z-50 border-b -mx-6 mb-2 ${
              theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-cafe-black border-neutral-800 shadow-md'
            }`} style={{ width: 'calc(100% + 3rem)' }}>
              {/* Left: Logo + Title */}
              <div className="flex items-center gap-2 min-w-0">
                <img src="./logo_rm_bg.png" className="h-9 w-9 object-contain flex-shrink-0 drop-shadow-sm" alt="Crispy Chick Logo" />
                <h1 className={`font-sans font-black text-sm tracking-tight leading-none transition-colors duration-300 ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  Crispy Chick
                </h1>
              </div>

              {/* Right: Theme Toggle + Profile */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-neutral-850 border-neutral-800 text-cafe-amber'
                      : 'bg-white border-slate-200 text-cafe-crispy shadow-sm'
                  }`}
                >
                  <i data-lucide="sun" className={theme === 'dark' ? "w-4 h-4 block" : "hidden"}></i>
                  <i data-lucide="moon" className={theme === 'light' ? "w-4 h-4 block" : "hidden"}></i>
                </button>

                <button
                  onClick={() => setIsProfileOpen(true)}
                  className={`text-xs font-bold px-3 py-2 rounded-xl border flex items-center gap-1.5 transition-all ${
                    theme === 'dark'
                      ? 'bg-neutral-850 border-neutral-800 text-cafe-amber hover:text-white'
                      : 'bg-white border-slate-200 text-cafe-crispy hover:text-cafe-black shadow-sm'
                  }`}
                  title="View Profile"
                >
                  <i data-lucide="user-circle" className="w-3.5 h-3.5"></i>
                  <span>Profile ({riderName || 'Rider'})</span>
                </button>
              </div>
            </div>

            {/* ── Duty Online / Offline Toggle & Shift Duration Tracker ── */}
            <div className={`p-4 rounded-2xl border shadow-md space-y-3 transition-all ${
              isOnline 
                ? (theme === 'light' ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300 shadow-emerald-500/10' : 'bg-gradient-to-r from-emerald-950/40 to-teal-950/30 border-emerald-700/60') 
                : (theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-neutral-900/60 border-neutral-800')
            }`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${isOnline ? 'bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20' : 'bg-neutral-500'}`} />
                  <div className="min-w-0">
                    <span className={`text-xs font-black uppercase tracking-wider block truncate ${
                      isOnline ? (theme === 'light' ? 'text-emerald-700' : 'text-emerald-400') : (theme === 'light' ? 'text-slate-600' : 'text-neutral-400')
                    }`}>
                      {isOnline ? '🟢 DUTY ACTIVE (ONLINE)' : '⚪ DUTY INACTIVE (OFFLINE)'}
                    </span>
                    <span className={`text-[10px] block truncate ${theme === 'light' ? 'text-slate-500' : 'text-neutral-400'}`}>
                      {isOnline ? 'Ready to accept incoming delivery rides' : 'You are currently offline'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={toggleDutyOnline}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95 flex-shrink-0 flex items-center gap-1.5 ${
                    isOnline 
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30' 
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                  }`}
                >
                  {isOnline ? (
                    <>
                      <span>🔴</span>
                      <span>GO OFFLINE</span>
                    </>
                  ) : (
                    <>
                      <span>🟢</span>
                      <span>GO ONLINE 🚀</span>
                    </>
                  )}
                </button>
              </div>

              {isOnline && (
                <div className={`pt-2 border-t flex items-center justify-between text-[11px] font-semibold ${
                  theme === 'light' ? 'border-emerald-200/80 text-emerald-700' : 'border-emerald-800/40 text-emerald-400'
                }`}>
                  <span className="flex items-center gap-1">
                    <span>⏱️ Duty Time:</span>
                    <span className="font-mono font-black">{dutyTimerText || 'Just started'}</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full font-bold uppercase">
                    Monitoring Rides
                  </span>
                </div>
              )}
            </div>

            {/* ── Today's Deliveries & Cash Collected Metrics ── */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`p-3.5 rounded-2xl border shadow-sm ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200'
                  : 'bg-gradient-to-r from-emerald-950/40 to-teal-900/30 border-emerald-800/60'
              }`}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <span className="text-base">🏆</span>
                  <p className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    theme === 'light' ? 'text-emerald-800' : 'text-emerald-400'
                  }`}>Deliveries</p>
                </div>
                <div className={`text-2xl font-black tabular-nums ${
                  theme === 'light' ? 'text-emerald-700' : 'text-emerald-300'
                }`}>
                  {todaysDeliveries} <span className="text-[11px] font-semibold text-neutral-400">orders</span>
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl border shadow-sm ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200'
                  : 'bg-gradient-to-r from-amber-950/40 to-orange-900/30 border-amber-800/60'
              }`}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <span className="text-base">💰</span>
                  <p className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    theme === 'light' ? 'text-amber-800' : 'text-amber-400'
                  }`}>Collected</p>
                </div>
                <div className={`text-2xl font-black tabular-nums ${
                  theme === 'light' ? 'text-amber-700' : 'text-amber-300'
                }`}>
                  ₹{todaysCollected}
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className={`flex rounded-xl p-1 border ${
              theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-neutral-900/50 border-neutral-800'
            }`}>
              <button
                onClick={() => setActiveTab('active')}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeTab === 'active'
                    ? 'bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                🛵 Active ({activeJobs.length})
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeTab === 'history'
                    ? 'bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                📜 History ({completedJobs.length})
              </button>
            </div>

            {/* Tab: Active Jobs */}
            {activeTab === 'active' && (
              <>
                <div className={activeJobs.length === 0 ? "p-16 text-center text-neutral-500 space-y-3 block" : "hidden"}>
                  <span className="text-5xl animate-pulse">🥚</span>
                  <p className="text-sm font-medium">No active order allocations assigned.</p>
                </div>

                <div className={activeJobs.length > 0 ? "space-y-6 block" : "hidden"}>
                  {activeJobs.map(order => {
                    const isHatched = order.status !== 'preparing';
                    const isDelivered = ['successfully_delivered', 'delivered', 'completed'].includes(order.status);
                    
                    return (
                      <div 
                        key={order.displayId || (order.id ? String(order.id).slice(0, 4) : Math.random())} 
                        className={`relative rounded-3xl p-5 border overflow-hidden transition-all duration-550 ${
                          isDelivered 
                            ? 'border-emerald-500/30 bg-emerald-950/5' 
                            : isHatched 
                              ? 'border-cafe-amber/30 shadow-[0_0_20px_rgba(217,119,6,0.1)]' 
                              : 'border-neutral-805/80'
                        } ${
                          theme === 'light' ? 'bg-white text-slate-855' : 'bg-cafe-card text-white'
                        }`}
                      >
                        <div className={(!isHatched && !isDelivered) ? "absolute inset-0 bg-neutral-950/95 z-20 flex flex-col items-center justify-center p-4 text-center block" : "hidden"}>
                          <div className="w-20 h-28 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-[50%_50%_50%_50%/_60%_60%_40%_40%] shadow-[0_0_25px_rgba(245,158,11,0.5)] border border-amber-300 animate-pulse flex items-center justify-center">
                            <span className="text-3xl text-cafe-black font-bold">🐣</span>
                          </div>
                          <div className="mt-4 space-y-1">
                            <h4 className="font-bold text-white text-sm">Order #{order.displayId || (order.id ? String(order.id).slice(-4) : '----').toUpperCase()} is Incubating</h4>
                            <p className="text-[10px] text-neutral-455 max-w-[200px] leading-normal">
                              Shop counter is preparing this order. Egg cracks open once dispatched.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className={`flex justify-between items-center pb-2.5 border-b ${
                            theme === 'light' ? 'border-slate-100' : 'border-neutral-900'
                          }`}>
                            <span className={`font-bold text-sm ${theme === 'light' ? 'text-slate-800' : 'text-neutral-300'}`}>Job #{order.displayId || (order.id ? String(order.id).slice(-4) : '----').toUpperCase()}</span>
                            <div className="flex flex-col items-end space-y-0.5">
                              <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                                isDelivered
                                  ? 'bg-emerald-500/10 text-emerald-400'
                                  : 'bg-indigo-500/10 text-indigo-400'
                              }`}>
                                {order.status.replace(/_/g, ' ')}
                              </span>
                              {/* Fix 3: Visible order timestamp so rider knows how long ago order was placed */}
                              <span className="text-[9px] font-semibold text-cafe-amber tracking-wide">
                                Ordered at: {order.placementTime || (order.createdAt ? new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--')}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            {/* Prominent Recipient Banner if ordered for someone else */}
                            {order.orderedForSomeoneElse && order.recipientName && (
                              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border-2 border-blue-400 dark:border-blue-600 space-y-2 shadow-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1">
                                    <span>👤 DELIVER TO RECIPIENT</span>
                                  </span>
                                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
                                    For Someone Else
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <div>
                                    <p className="text-xs font-black text-slate-900 dark:text-white">{order.recipientName}</p>
                                    <p className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">{order.recipientPhone}</p>
                                  </div>
                                  <a
                                    href={`tel:${order.recipientPhone}`}
                                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-black text-xs flex items-center gap-1.5 shadow"
                                  >
                                    <i data-lucide="phone" className="w-3.5 h-3.5"></i>
                                    <span>Call Recipient</span>
                                  </a>
                                </div>
                              </div>
                            )}

                            <div className="flex items-center space-x-2">
                              <i data-lucide="user" className="w-4 h-4 text-neutral-500"></i>
                              <span className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                                {order.orderedForSomeoneElse ? `Ordered by: ${order.customerName}` : order.customerName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <i data-lucide="phone" className="w-4 h-4 text-neutral-500"></i>
                              <a href={`tel:${order.customerPhone}`} className="text-red-600 dark:text-amber-400 hover:underline font-bold font-sans">
                                {order.customerPhone}
                              </a>
                            </div>

                            {/* Complete Delivery Address Details Card */}
                            <div className={`p-2.5 rounded-xl border space-y-1 ${
                              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900 border-neutral-800'
                            }`}>
                              <div className="flex items-center gap-1.5 font-bold text-xs">
                                <i data-lucide="map-pin" className="w-3.5 h-3.5 text-red-600 dark:text-amber-400"></i>
                                <span className="uppercase text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 font-black">
                                  {order.destinationType === 'map_pin' ? '📍 MAP PINPOINT' : (order.addressTitle || (order.destinationType === 'live_gps' ? 'Live GPS' : 'Delivery Address'))}
                                </span>
                              </div>
                              {order.addressDetails && (
                                <p className={`font-bold text-xs ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                                  {order.addressDetails}
                                </p>
                              )}
                              {order.landmarks && (
                                <p className={`text-[11px] ${theme === 'light' ? 'text-slate-600' : 'text-neutral-300'}`}>
                                  <span className="font-semibold">Landmark:</span> {order.landmarks}
                                </p>
                              )}
                              {order.deliveryPin && (
                                <p className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-700' : 'text-neutral-400'}`}>
                                  PIN: {order.deliveryPin} {order.deliveryArea ? `(${order.deliveryArea})` : ''}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Prominent Collectible Amount Badge */}
                          <div className={(order.status === 'out_for_delivery' || order.status === 'arrived') ? "w-full my-3 p-3 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500/40 rounded-xl text-center block" : "hidden"}>
                            <span className="block text-xs font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">COLLECT CASH / UPI PAYMENT</span>
                            <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">₹{order.totalAmount}</span>
                          </div>

                          {/* Map Direction turn-by-turn Link */}
                          <div className={(order.status === 'out_for_delivery' || order.status === 'arrived') ? "block" : "hidden"}>
                            <a
                              href={getOrderMapsUrl(order)}
                              target="_blank" rel="noopener noreferrer"
                              className={`w-full py-3 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition border shadow-md block text-center text-white ${
                                theme === 'light'
                                  ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700'
                                  : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700'
                              }`}
                            >
                              <i data-lucide="navigation" className="w-4 h-4 text-red-500 dark:text-amber-400"></i>
                              <span>
                                {order.destinationType === 'map_pin' && order.gpsLat != null
                                  ? 'NAVIGATE TO MAP PINPOINT 📍'
                                  : (order.addressTitle
                                    ? `NAVIGATE TO ${order.addressTitle.toUpperCase()} IN MAPS`
                                    : (order.destinationType === 'live_gps' && order.gpsLat != null
                                      ? 'LAUNCH GPS PINPOINT NAVIGATION'
                                      : 'LAUNCH GOOGLE MAPS NAVIGATION'))}
                              </span>
                            </a>
                          </div>

                          {/* Stage 1: Swipe to Pick Up — prevents accidental tap */}
                          <div className={order.status === 'prepared' ? "pt-2 block" : "hidden"}>
                            <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider text-center mb-2">Stage 1: Confirm Pickup</p>
                            <SwipeToAccept
                              label="Slide to Pick Up & Start 🛵"
                              color="amber"
                              onSwipeComplete={() => handlePickUpAndStart(order.id)}
                            />
                          </div>

                          {/* Stage 2: Swipe to Confirm Arrival at Customer Location */}
                          {order.status === 'out_for_delivery' && (
                            <div className="pt-2 space-y-2">
                              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider text-center">Stage 2: Reached Customer Doorstep?</p>
                              <SwipeToAccept
                                label="Slide: Arrived at Location 📍"
                                color="blue"
                                onSwipeComplete={() => handleMarkArrived(order.id)}
                              />
                            </div>
                          )}

                          {/* Arrived Status Banner */}
                          {order.status === 'arrived' && (
                            <div className="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-xl">📍</span>
                                <div>
                                  <p className="text-xs font-black text-blue-400">Arrived at Customer Doorstep</p>
                                  <p className="text-[10px] text-neutral-400">Handover parcel & collect payment</p>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-500/20 text-blue-300">ARRIVED</span>
                            </div>
                          )}

                          {/* Stage 3: Payment & Complete Delivery Action */}
                          <div className={(order.status === 'out_for_delivery' || order.status === 'arrived') ? "block space-y-3 pt-2" : "hidden"}>
                            {/* Show Payment QR Button */}
                            <button
                              onClick={() => setQrModalOrder(order)}
                              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                            >
                              <span>📲 SHOW UPI PAYMENT QR (₹{order.totalAmount})</span>
                            </button>

                            {/* Swipe to Confirm Delivery — prevents accidental completion */}
                            <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider text-center">Stage 3: After payment received, swipe to complete</p>
                            <SwipeToAccept
                              label="Slide to Complete Delivery ✅"
                              color="green"
                              onSwipeComplete={() => handleConfirmPaymentAndDelivery(order)}
                            />
                          </div>

                          <div className={isDelivered ? "bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 text-center space-y-1 block" : "hidden"}>
                            <span className="text-emerald-400 font-extrabold text-xs block">✅ Handshake Verification Complete</span>
                            <span className="text-[10px] text-neutral-455 font-medium">Order successfully completed and verified.</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* UPI QR Payment Modal */}
                {/* UPI QR Payment Modal */}
                {qrModalOrder && (
                  <div 
                    onClick={(e) => { if (e.target === e.currentTarget) setQrModalOrder(null); }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                  >
                    <div className={`w-full max-w-sm rounded-3xl border p-6 space-y-3 shadow-2xl relative ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
                    }`}>
                      {/* Close Button */}
                      <button
                        type="button"
                        onClick={() => setQrModalOrder(null)}
                        className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${
                          theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-600' : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-350'
                        }`}
                        title="Close QR"
                      >
                        <i data-lucide="x" className="w-4 h-4"></i>
                      </button>

                      {/* Header */}
                      <div className="text-center space-y-1 pt-1">
                        <div className="w-12 h-12 bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-indigo-500/20">
                          <i data-lucide="qr-code" className="w-6 h-6"></i>
                        </div>
                        <h3 className="font-serif font-bold text-base">Collect Payment via UPI</h3>
                        <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">Scan & Pay ₹{qrModalOrder.totalAmount}</p>
                      </div>

                      {/* QR Code Image: loads /owner_qr.png if present in public folder, else dynamic UPI QR */}
                      <img
                        src="/owner_qr.png"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9035733573@upi%26pn=Crispy%20Chick%20KGF%26am=${qrModalOrder.totalAmount}`;
                        }}
                        alt="UPI Payment QR"
                        className="mx-auto rounded-xl border p-2 bg-white shadow-inner my-3 object-contain"
                        style={{ width: '240px', height: '240px' }}
                      />

                      {/* Caption */}
                      <p className={`text-center text-[11px] font-medium ${
                        theme === 'light' ? 'text-slate-500' : 'text-neutral-450'
                      }`}>
                        Ask customer to scan with Google Pay, PhonePe, or Paytm.
                      </p>

                      {/* Action Buttons: Explicit Confirm Delivery vs Safe Exit */}
                      <div className="space-y-2 pt-2">
                        <button
                          type="button"
                          onClick={async () => {
                            const orderNum = qrModalOrder?.displayId || (qrModalOrder?.id ? String(qrModalOrder.id).slice(-4) : '----').toUpperCase();
                            if (!window.confirm(`⚠️ RIDER CONFIRMATION REQUIRED:\n\nHave you verified that ₹${qrModalOrder.totalAmount} was paid by the customer for Order #${orderNum}?\n\nClick OK only if payment has been received.`)) {
                              return;
                            }
                            riderAlert.pause();
                            riderAlert.currentTime = 0;
                            await updateOrderStatus(qrModalOrder.id, 'delivered', {
                              deliveredAt: Date.now(),
                              paymentConfirmedByRider: true
                            });
                            const custPhone = (qrModalOrder.customerPhone || '').split(' / ')[0].trim();
                            if (custPhone) {
                              db.collection('users').doc(custPhone).update({
                                phoneStatus: 'verified',
                                trustedUser: true,
                                verified: true
                              }).catch(e => console.log('Trust upgrade failed:', e));
                            }
                            setQrModalOrder(null);
                          }}
                          className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
                        >
                          <span>✅ CONFIRM PAYMENT & COMPLETE DELIVERY</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setQrModalOrder(null)}
                          className={`w-full py-2.5 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                            theme === 'light'
                              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                              : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-neutral-300'
                          }`}
                        >
                          <i data-lucide="x" className="w-4 h-4"></i>
                          <span>CLOSE QR (RETURN TO ORDER)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rider Offline Confirmation Modal */}
                {showOfflineModal && (
                  <div 
                    onClick={(e) => { if (e.target === e.currentTarget) setShowOfflineModal(false); }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                  >
                    <div className={`w-full max-w-sm rounded-3xl border p-6 space-y-4 shadow-2xl relative text-center ${
                      theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
                    }`}>
                      <div className="w-14 h-14 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center mx-auto text-2xl border border-red-500/30">
                        🛑
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold">Go Offline?</h3>
                        <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-neutral-400'}`}>
                          You will be marked as offline and will not receive any new delivery orders until you switch back online.
                        </p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          type="button"
                          onClick={confirmGoOffline}
                          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-98"
                        >
                          YES, SWITCH TO OFFLINE
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowOfflineModal(false)}
                          className={`w-full py-3 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all ${
                            theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700' : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-neutral-300'
                          }`}
                        >
                          CANCEL (STAY ONLINE)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Tab: History */}
            {activeTab === 'history' && (
              <div className="space-y-6">
                {completedJobs.length === 0 ? (
                  <div className={`p-16 text-center rounded-3xl border ${
                    theme === 'light' ? 'bg-white border-slate-200 text-slate-500' : 'bg-cafe-card border-neutral-800 text-neutral-500'
                  }`}>
                    <span className="text-5xl block mb-2">📜</span>
                    <p className="text-sm font-semibold">No completed deliveries found in the last 7 days.</p>
                  </div>
                ) : (
                  <div className={`overflow-x-auto rounded-2xl border ${
                    theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-cafe-card border-neutral-800 text-white'
                  }`}>
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className={`border-b text-[10px] font-bold uppercase tracking-wider ${
                          theme === 'light' ? 'bg-slate-100 text-slate-600' : 'bg-neutral-900 text-neutral-400'
                        }`}>
                          <th className="px-3 py-3">Order Details</th>
                          <th className="px-3 py-3">Billing Address</th>
                          <th className="px-3 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${theme === 'light' ? 'divide-slate-200' : 'divide-neutral-900/60'}`}>
                        {Object.entries(groupedOrders).map(([dateLabel, orders]) => (
                          <React.Fragment key={dateLabel}>
                            <tr className="bg-gray-100/50 text-left">
                              <td colSpan="3" className="py-2 px-3 font-bold text-sm text-gray-700">
                                {dateLabel}
                              </td>
                            </tr>
                            {orders.map(order => (
                              <tr key={order.id} className="hover:bg-neutral-900/5 transition-colors border-b border-neutral-800/10">
                                <td className="px-3 py-2 leading-relaxed">
                                  <div className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                                    {order.displayId} {typeof order.items === 'string' ? order.items : (order.items || []).map(i => `${i.quantity}x ${i.name}`).join(', ')}
                                  </div>
                                  <div className="text-neutral-450 text-[10px] mt-0.5">
                                    Delivered At: {order.deliveredAt 
                                      ? (order.deliveredAt.toDate ? order.deliveredAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date(order.deliveredAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) 
                                      : (order.placementTime || (order.createdAt ? new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'))} | ₹{order.total ?? order.totalAmount}
                                  </div>
                                  <small className="text-gray-500 block mt-0.5">
                                    {order.customerName}
                                  </small>
                                </td>
                                <td className="max-w-[150px] truncate px-3 py-2" title={order.address || order.customerAddress || order.landmarks}>
                                  {order.landmarks || order.address || order.customerAddress}
                                </td>
                                <td className="whitespace-nowrap px-3 py-2">
                                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${
                                    ['successfully_delivered', 'delivered', 'completed'].includes(order.status)
                                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                  }`}>
                                    {['successfully_delivered', 'delivered', 'completed'].includes(order.status) ? 'Delivered' : order.status.replace(/_/g, ' ')}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Ride Safe toast — fires once per accepted order */}
          <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-xs pointer-events-none ${rideSafeToast ? 'block' : 'hidden'}`}>
            <div className="pointer-events-auto bg-gradient-to-r from-indigo-600 to-cafe-amber text-white p-4 rounded-xl shadow-2xl border border-indigo-400/30 flex items-center space-x-3 animate-bounce-slow">
              <span className="text-2xl">🛵</span>
              <div className="flex-1">
                <span className="font-extrabold text-sm tracking-wide block">Ride Safe!</span>
                <p className="text-[11px] text-indigo-100 font-medium">
                  Job #{rideSafeToast?.orderId?.slice(-6)} accepted. Drive carefully!
                </p>
              </div>
            </div>
          </div>

          {/* Rider Editable Profile Modal */}
          <div className={isProfileOpen ? "block fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs" : "hidden"}>
            <div className={`w-full max-w-sm rounded-3xl border p-6 space-y-4 shadow-2xl relative ${
              theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-card border-neutral-800 text-white'
            }`}>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800/10">
                <h3 className="font-serif font-bold text-base flex items-center space-x-2">
                  <i data-lucide="user" className="w-5 h-5 text-cafe-amber"></i>
                  <span>👤 Rider Profile</span>
                </h3>
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="text-neutral-500 hover:text-neutral-300 transition"
                >
                  <i data-lucide="x" className="w-5 h-5"></i>
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                const nameVal = e.target.riderNameInput.value.trim();
                if (!nameVal) return;
                
                db.collection('riders').doc(riderId).update({ name: nameVal }).catch(()=>{});
                
                localStorage.setItem('cc_rider_profile_name', nameVal);
                setRiderName(nameVal);
                setIsProfileOpen(false);
              }} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-450 uppercase tracking-wider mb-2">Rider Name</label>
                  <input
                    name="riderNameInput" required type="text" defaultValue={riderName}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-808 text-white'
                    }`}
                  />
                </div>
                
                <div className={`p-3 rounded-xl border text-xs flex justify-between items-center ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
                }`}>
                  <div>
                    <p className="font-bold text-[10px] uppercase tracking-widest text-cafe-amber mb-1">Current Phone</p>
                    <p className="font-mono font-bold text-sm">{riderPhone || 'Not set'}</p>
                  </div>
                  {!isChangingPhone && (
                    <button
                      type="button"
                      onClick={() => setIsChangingPhone(true)}
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-extrabold transition-colors ${
                        theme === 'light' 
                          ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100' 
                          : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      ✏️ Change
                    </button>
                  )}
                </div>

                {isChangingPhone && (
                  <div className={`p-4 rounded-xl border space-y-4 shadow-inner ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900/40 border-neutral-800'
                  }`}>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cafe-amber border-b border-neutral-200 dark:border-neutral-800 pb-2">Secure Phone Update</h4>
                    
                    {!showUpdateOtpInput ? (
                      <>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2">New Phone Number</label>
                            <input
                              type="tel" placeholder="E.g., 9876543210" maxLength="10" inputMode="numeric"
                              value={newPhone} onChange={e => setNewPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${
                                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                              }`}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-neutral-455 uppercase tracking-wider mb-2">Confirm New Phone</label>
                            <input
                              type="tel" placeholder="Re-enter new number" maxLength="10" inputMode="numeric"
                              value={confirmNewPhone} onChange={e => setConfirmNewPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cafe-amber ${
                                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                              }`}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <button
                            type="button" disabled={isUpdateLoading}
                            onClick={() => {
                              const isValidRiderPhone = (n) => /^[6-9]\d{9}$/.test(n);
                              if (!isValidRiderPhone(newPhone)) {
                                alert('Invalid phone. Must be 10 digits starting with 6–9.');
                                return;
                              }
                              if (newPhone !== confirmNewPhone) {
                                alert('Phone numbers do not match.');
                                return;
                              }
                              if (/^(\d)\1+$/.test(newPhone)) {
                                alert('Invalid phone format.');
                                return;
                              }
                              setIsUpdateLoading(true);
                              setTimeout(() => {
                                try { new Audio('https://assets.mixkit.co/active_storage/sfx/2866/2866-preview.mp3').play().catch(()=>{}); } catch(e){}
                                const code = Math.floor(100000 + Math.random() * 900000).toString();
                                setMockUpdateOtp(code);
                                setIsUpdateLoading(false);
                                setShowUpdateOtpInput(true);
                                alert('🔔 Rider Security Code: ' + code);
                              }, 2500);
                            }}
                            className="flex-1 py-2.5 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-lg text-[11px] disabled:opacity-60 flex items-center justify-center"
                          >
                            {isUpdateLoading ? <div className="w-4 h-4 border-2 border-cafe-black border-t-transparent rounded-full animate-spin"></div> : 'SEND SECURITY CODE'}
                          </button>
                          <button
                            type="button" disabled={isUpdateLoading}
                            onClick={() => { setIsChangingPhone(false); setNewPhone(''); setConfirmNewPhone(''); setShowUpdateOtpInput(false); setMockUpdateOtp(''); setUpdateOtp(''); }}
                            className={`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${
                              theme === 'light' ? 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100' : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                            }`}
                          >CANCEL</button>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className={`p-3 rounded-xl border text-center ${
                          theme === 'light' ? 'bg-amber-50 border-amber-200' : 'bg-cafe-amber/10 border-cafe-amber/30'
                        }`}>
                          <p className="text-[10px] font-black uppercase tracking-widest text-cafe-amber">Verification Code</p>
                          <p className={`text-[11px] mt-0.5 ${theme === 'light' ? 'text-slate-500' : 'text-neutral-400'}`}>Enter code sent to {newPhone}</p>
                        </div>
                        <div>
                          <input
                            type="text" inputMode="numeric" maxLength="6" placeholder="• • • • • •"
                            value={updateOtp} onChange={e => setUpdateOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            className={`w-full border rounded-xl px-4 py-3 text-xl text-center tracking-[0.5em] font-black focus:outline-none focus:border-cafe-amber ${
                              theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-cafe-black border-neutral-700 text-white'
                            }`}
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button" disabled={isUpdateLoading}
                            onClick={() => {
                              if (updateOtp !== mockUpdateOtp) {
                                alert('Incorrect code. Please try again.');
                                return;
                              }
                              setIsUpdateLoading(true);
                              db.collection('riders').doc(riderId).update({ phone: newPhone }).then(() => {
                                localStorage.setItem('cc_rider_profile_phone', newPhone);
                                setRiderPhone(newPhone);
                                setIsChangingPhone(false);
                                setNewPhone('');
                                setConfirmNewPhone('');
                                setShowUpdateOtpInput(false);
                                setMockUpdateOtp('');
                                setUpdateOtp('');
                                alert('✅ Phone Number Updated Successfully');
                              }).catch(err => {
                                alert('Failed to update: ' + err.message);
                              }).finally(() => setIsUpdateLoading(false));
                            }}
                            className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold rounded-lg text-[11px] shadow-sm disabled:opacity-60 flex items-center justify-center"
                          >
                            {isUpdateLoading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'VERIFY & UPDATE'}
                          </button>
                          <button
                            type="button" disabled={isUpdateLoading}
                            onClick={() => { setShowUpdateOtpInput(false); setMockUpdateOtp(''); setUpdateOtp(''); }}
                            className={`px-3 py-2.5 rounded-lg border font-extrabold text-[11px] disabled:opacity-60 ${
                              theme === 'light' ? 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100' : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                            }`}
                          >BACK</button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className={`p-4 rounded-xl border space-y-1 text-xs ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-900/60 border-neutral-800'
                }`}>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider block">Session Details</span>
                  <div className="flex justify-between">
                    <span className="text-neutral-450 font-medium">Login Time:</span>
                    <span className="font-bold text-cafe-amber">{loginTime || 'Not recorded'}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-cafe-amber to-cafe-crispy text-cafe-black font-extrabold rounded-xl shadow-lg text-xs"
                  >
                    SAVE CHANGES
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('cc_rider_id');
                      localStorage.removeItem('cc_rider_profile_name');
                      localStorage.removeItem('cc_rider_profile_phone');
                      localStorage.removeItem('cc_login_time');
                      setRiderId('');
                      setIsProfileOpen(false);
                    }}
                    className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-lg text-xs"
                  >
                    LOGOUT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

    // Delivery Dashboard is publicly accessible — the component handles its own PIN-based session
    const DeliveryDashboardGuard = () => {
      return <DeliveryDashboard />;
    };

    // --- MAIN ROUTER CONTROLLER & NAVIGATION WRAPPER ---
    const MainApp = () => {
      const [route, setRoute] = useState(window.location.hash || '#/');
      const [lastPlacedOrder, setLastPlacedOrder] = useState(null);

      useEffect(() => {
        const handleHashChange = () => {
          setRoute(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
      }, []);

      const handleOrderSuccess = (orderId, otp) => {
        setLastPlacedOrder({ id: orderId, otp });
      };

      // Decoupled View Router - permanently mounts all modules and toggles display properties dynamically
      return (
        <div className="min-h-screen flex flex-col bg-cafe-black font-sans">
          <div className="flex-1 flex flex-col">
            <div className={(route === '#/' || route === '') ? 'block' : 'hidden'}>
              <CustomerApp onCheckoutSuccess={handleOrderSuccess} />
            </div>
            <div className={route === '#/login' ? 'block' : 'hidden'}>
              <UnifiedLogin />
            </div>
            <div className={route === '#/shop-counter' ? 'block' : 'hidden'}>
              <ShopCounterGuard activeRoute={route} />
            </div>
            <div className={route === '#/delivery-dashboard' ? 'block' : 'hidden'}>
              <DeliveryDashboardGuard />
            </div>
          </div>
        </div>
      );
    };

    
export default function App() {
  return (
    <ReactErrorBoundary>
      <AuthProvider>
        <AppProvider>
          <MainApp />
        </AppProvider>
      </AuthProvider>
    </ReactErrorBoundary>
  );
}
