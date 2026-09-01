import firebase, { db } from './config';

// --- Orders Collection ---
export const subscribeOrders = (callback) => {
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

export const addOrder = async (orderData) => {
  // Unified 4-digit PIN for order delivery verification
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
  
  // Isolated Telegram Alert
  try {
    triggerTelegramNotification(newOrder, docRef.id);
  } catch (telegramErr) {
    console.error("Telegram notification failed (non-fatal):", telegramErr);
  }

  return { ...newOrder, id: docRef.id };
};

export const updateOrderStatus = async (orderId, newStatus, extraFields = {}) => {
  return db.collection('orders').doc(orderId).update({ status: newStatus, ...extraFields });
};

// --- Store Settings & Global Configuration ---
export const subscribeSettings = (callback) => {
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

export const updateSettings = async (settings) => {
  return db.collection('settings').doc('global').set(settings, { merge: true });
};

export const subscribeMenuConfig = (callback) => {
  return db.collection('settings').doc('menuConfig').onSnapshot((docSnapshot) => {
    if (docSnapshot.exists) {
      callback(docSnapshot.data());
    } else {
      callback({});
    }
  }, (err) => {
    console.error('MenuConfig listener error:', err);
  });
};

export const updateMenuConfig = async (menuConfig) => {
  return db.collection('settings').doc('menuConfig').set(menuConfig, { merge: true });
};

// --- Riders Fleet ---
export const subscribeRiders = (callback) => {
  return db.collection('riders').onSnapshot((querySnapshot) => {
    const riders = [];
    querySnapshot.forEach((doc) => {
      riders.push({ id: doc.id, ...doc.data() });
    });
    callback(riders);
  }, (err) => {
    console.error('Riders listener error:', err);
  });
};

export const getRiderByPin = async (pin) => {
  const doc = await db.collection('riders').doc(pin).get();
  if (doc.exists) {
    return { id: doc.id, ...doc.data() };
  }
  return null;
};

export const saveRiderProfile = async (pin, riderData) => {
  return db.collection('riders').doc(pin).set(riderData, { merge: true });
};

export const updateRiderProfile = async (pin, riderData) => {
  return db.collection('riders').doc(pin).update(riderData);
};

// --- Customer Profiles & Saved Addresses ---
export const getUserProfile = async (phone) => {
  const doc = await db.collection('users').doc(phone).get();
  return doc.exists ? doc.data() : null;
};

export const saveUserProfile = async (phone, data) => {
  return db.collection('users').doc(phone).set(data, { merge: true });
};

export const updateUserAddresses = async (phone, addresses) => {
  return db.collection('users').doc(phone).update({ addresses });
};

// Telegram Fallback API Trigger
export const triggerTelegramNotification = (order, orderId) => {
  const botToken = localStorage.getItem('telegram_bot_token');
  const chatId = localStorage.getItem('telegram_chat_id');
  if (!botToken || !chatId) return;

  const itemsText = order.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
  const text = `*New Order Placed!*\n` +
               `• Order ID: \`${orderId}\`\n` +
               `• Customer: ${order.customerName}\n` +
               `• Phone: ${order.customerPhone}\n` +
               `• Landmarks: ${order.landmarks}\n` +
               `• Items: ${itemsText}\n` +
               `• Total: ₹${order.totalAmount}\n` +
               `• Delivery PIN: *${order.displayId}*`;

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
