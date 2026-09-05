import React, { useState, useEffect, useMemo } from 'react';
import { 
  db, 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot 
} from './config/firebase';

import AuthGuard from './components/AuthGuard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WarRoomView from './views/WarRoomView';
import OrderInspectorView from './views/OrderInspectorView';
import OrdersControlView from './views/OrdersControlView';
import CustomersView from './views/CustomersView';
import FleetView from './views/FleetView';
import SecuritySettingsView from './views/SecuritySettingsView';
import SecretAdminVaultModal from './components/SecretAdminVaultModal';

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('crispy_ops_session_active') === 'true';
  });

  const [activeTab, setActiveTab] = useState('war-room');
  const [inspectOrderId, setInspectOrderId] = useState('');
  const [showSecretVault, setShowSecretVault] = useState(false);
  const [isStealthMode, setIsStealthMode] = useState(false);

  // Live Data State
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [fleetRiders, setFleetRiders] = useState([]);
  const [storeSettings, setStoreSettings] = useState({ onlineOrderingWindow: true });
  const [lastSynced, setLastSynced] = useState(Date.now());

  // Master Access Lock
  const handleLock = () => {
    sessionStorage.removeItem('crispy_ops_session_active');
    setIsUnlocked(false);
  };

  const handleUnlock = () => {
    sessionStorage.setItem('crispy_ops_session_active', 'true');
    setIsUnlocked(true);
  };

  const handleUpdateMasterPin = async (newPin) => {
    try {
      await setDoc(doc(db, 'settings', 'global'), {
        masterPin: newPin
      }, { merge: true });
    } catch (err) {
      console.error('Failed to update master PIN:', err);
      alert('Failed to update cloud master PIN: ' + err.message);
    }
  };

  // Real-time Firestore Subscriptions
  useEffect(() => {
    if (!isUnlocked) return;

    // 1. Orders Listener
    const unsubOrders = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const list = [];
      snapshot.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setOrders(list);
      setLastSynced(Date.now());
    }, (err) => console.error('Orders snapshot error:', err));

    // 2. Users Listener
    const unsubUsers = onSnapshot(collection(db, 'users'), (snapshot) => {
      const list = [];
      snapshot.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      setUsers(list);
    }, (err) => console.error('Users snapshot error:', err));

    // 3. Riders Fleet Listener
    const unsubRiders = onSnapshot(collection(db, 'riders'), (snapshot) => {
      const list = [];
      snapshot.forEach(d => {
        list.push({ id: d.id, ...d.data() });
      });
      setFleetRiders(list);
    }, (err) => console.error('Riders snapshot error:', err));

    // 4. Store Global Settings Listener
    const unsubSettings = onSnapshot(doc(db, 'settings', 'global'), (snapshot) => {
      if (snapshot.exists()) {
        setStoreSettings(snapshot.data());
      } else {
        setStoreSettings({ onlineOrderingWindow: true });
      }
    }, (err) => console.error('Settings snapshot error:', err));

    return () => {
      unsubOrders();
      unsubUsers();
      unsubRiders();
      unsubSettings();
    };
  }, [isUnlocked]);

  // Merge users from orders so guest checkouts without profile appear in directory
  const unifiedCustomers = useMemo(() => {
    const map = new Map();
    // From users collection
    users.forEach(u => {
      const p = (u.phone || u.id || '').replace(/\D/g, '');
      if (p) map.set(p, { ...u, phone: p });
    });

    // From orders collection
    orders.forEach(o => {
      const p = (o.customerPhone || '').split(' / ')[0].replace(/\D/g, '');
      if (p && !map.has(p)) {
        map.set(p, {
          id: p,
          phone: p,
          name: o.customerName || 'Customer',
          address: o.address || o.landmarks || '',
          addresses: o.address ? [{ address: o.address, landmark: o.landmarks || '', type: 'Home' }] : [],
          isGuest: true,
          createdAt: o.createdAt || Date.now()
        });
      }
    });

    return Array.from(map.values());
  }, [users, orders]);

  // Navigation to deep inspector
  const handleSelectOrder = (orderId) => {
    setInspectOrderId(orderId);
    setActiveTab('inspector');
  };

  // Order Status Override
  const handleUpdateOrderStatus = async (orderId, newStatus, extraFields = {}) => {
    try {
      const timestampKey = 
        newStatus === 'accepted' ? 'acceptedAt' :
        newStatus === 'prepared' ? 'preparedAt' :
        newStatus === 'out_for_delivery' ? 'dispatchedAt' :
        newStatus === 'arrived' ? 'arrivedAt' :
        ['successfully_delivered', 'delivered'].includes(newStatus) ? 'deliveredAt' : null;

      const payload = {
        status: newStatus,
        lastUpdatedBy: 'Master Ops Command',
        lastUpdatedAt: Date.now(),
        ...extraFields
      };

      if (timestampKey && !payload[timestampKey]) {
        payload[timestampKey] = Date.now();
      }

      await updateDoc(doc(db, 'orders', orderId), payload);
    } catch (err) {
      console.error('Error updating order:', err);
      alert('Failed to update order: ' + err.message);
    }
  };

  // Delete Single Order
  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteDoc(doc(db, 'orders', orderId));
    } catch (err) {
      console.error('Error deleting order:', err);
      alert('Failed to delete order: ' + err.message);
    }
  };

  // Batch Delete Orders
  const handleBatchDeleteOrders = async (orderIds = []) => {
    try {
      await Promise.all(orderIds.map(id => deleteDoc(doc(db, 'orders', id))));
    } catch (err) {
      console.error('Error batch deleting orders:', err);
      alert('Failed to delete orders: ' + err.message);
    }
  };

  // Delete Customer
  const handleDeleteCustomer = async (phone) => {
    try {
      await deleteDoc(doc(db, 'users', phone));
    } catch (err) {
      console.error('Error deleting customer:', err);
      alert('Failed to delete customer: ' + err.message);
    }
  };

  // Toggle Store Status (Open / Emergency Halt)
  const handleToggleStoreStatus = async () => {
    try {
      const currentOpen = storeSettings?.onlineOrderingWindow !== false;
      const nextOpen = !currentOpen;
      await setDoc(doc(db, 'settings', 'global'), {
        onlineOrderingWindow: nextOpen,
        haltedAt: nextOpen ? null : Date.now(),
        lastHaltedBy: 'Master Ops Command'
      }, { merge: true });
    } catch (err) {
      console.error('Error toggling store status:', err);
      alert('Failed to update store status: ' + err.message);
    }
  };

  // Update Global Store Settings
  const handleUpdateStoreSettings = async (updates) => {
    await setDoc(doc(db, 'settings', 'global'), updates, { merge: true });
  };

  // Onboard Rider
  const handleAddRider = async (riderData) => {
    const riderId = riderData.pin || riderData.id || String(Math.floor(1000 + Math.random() * 9000));
    await setDoc(doc(db, 'riders', riderId), {
      ...riderData,
      id: riderId,
      pin: riderId
    });
  };

  // Update Rider Profile & Login PIN
  const handleUpdateRider = async (riderId, updates) => {
    try {
      const existingRider = fleetRiders.find(r => r.id === riderId) || {};
      const newPin = updates.pin?.trim();

      // If the rider PIN changed, migrate document to new PIN ID so login succeeds instantly
      if (newPin && newPin !== riderId) {
        const fullData = {
          ...existingRider,
          ...updates,
          id: newPin,
          pin: newPin,
          lastUpdated: Date.now()
        };
        // Create new doc under new PIN
        await setDoc(doc(db, 'riders', newPin), fullData);
        // Remove old doc under old PIN
        await deleteDoc(doc(db, 'riders', riderId));
      } else {
        // PIN unchanged, regular update
        await updateDoc(doc(db, 'riders', riderId), {
          ...updates,
          lastUpdated: Date.now()
        });
      }
    } catch (err) {
      console.error('Error updating rider:', err);
      alert('Failed to update rider: ' + err.message);
    }
  };

  // Delete Rider from Fleet
  const handleDeleteRider = async (riderId) => {
    try {
      await deleteDoc(doc(db, 'riders', riderId));
    } catch (err) {
      console.error('Error deleting rider:', err);
      alert('Failed to delete rider: ' + err.message);
    }
  };

  // Ban / Unban Customer
  const handleToggleBanCustomer = async (phone, isBanned, reason = '') => {
    try {
      await setDoc(doc(db, 'users', phone), {
        isBanned,
        banReason: reason || null,
        bannedAt: isBanned ? Date.now() : null
      }, { merge: true });
    } catch (err) {
      console.error('Error updating customer status:', err);
      alert('Failed to update customer: ' + err.message);
    }
  };

  // Badges
  const liveOrdersCount = orders.filter(o => 
    ['pending', 'preparing', 'prepared', 'out_for_delivery', 'arrived'].includes(o.status)
  ).length;

  const onlineRidersCount = fleetRiders.filter(r => r.isOnline === true).length;

  if (!isUnlocked) {
    return (
      <AuthGuard 
        onUnlock={handleUnlock} 
        masterPasscode="9035" 
        dynamicPin={storeSettings?.masterPin || ''} 
      />
    );
  }

  return (
    <div className="flex h-screen bg-[#09090b] text-[#f1f5f9] font-mono antialiased overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        liveOrdersCount={liveOrdersCount}
        onlineRidersCount={onlineRidersCount}
        onLock={handleLock}
        onOpenSecretVault={() => setShowSecretVault(true)}
      />

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header
          storeSettings={storeSettings}
          onToggleStoreStatus={handleToggleStoreStatus}
          lastSynced={lastSynced}
          isStealthMode={isStealthMode}
          onToggleStealth={() => setIsStealthMode(!isStealthMode)}
        />

        <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'war-room' && (
              <WarRoomView
                orders={orders}
                fleetRiders={fleetRiders}
                storeSettings={storeSettings}
                onSelectOrder={handleSelectOrder}
                onNavigate={setActiveTab}
                isStealthMode={isStealthMode}
              />
            )}

            {activeTab === 'inspector' && (
              <OrderInspectorView
                orders={orders}
                initialOrderId={inspectOrderId}
                onUpdateOrderStatus={handleUpdateOrderStatus}
                fleetRiders={fleetRiders}
              />
            )}

            {activeTab === 'orders' && (
              <OrdersControlView
                orders={orders}
                fleetRiders={fleetRiders}
                onSelectOrder={handleSelectOrder}
                onUpdateOrderStatus={handleUpdateOrderStatus}
                onDeleteOrder={handleDeleteOrder}
                onBatchDeleteOrders={handleBatchDeleteOrders}
              />
            )}

            {activeTab === 'customers' && (
              <CustomersView
                customers={unifiedCustomers}
                orders={orders}
                onToggleBanCustomer={handleToggleBanCustomer}
                onDeleteCustomer={handleDeleteCustomer}
              />
            )}

            {activeTab === 'fleet' && (
              <FleetView
                fleetRiders={fleetRiders}
                orders={orders}
                onAddRider={handleAddRider}
                onUpdateRider={handleUpdateRider}
                onDeleteRider={handleDeleteRider}
              />
            )}

            {activeTab === 'security' && (
              <SecuritySettingsView
                storeSettings={storeSettings}
                onUpdateStoreSettings={handleUpdateStoreSettings}
                ordersCount={orders.length}
                usersCount={unifiedCustomers.length}
                ridersCount={fleetRiders.length}
              />
            )}
          </div>
        </main>
      </div>

      {/* Secret Admin Vault Modal (Founder Only) */}
      <SecretAdminVaultModal
        isOpen={showSecretVault}
        onClose={() => setShowSecretVault(false)}
        currentMasterPin={storeSettings?.masterPin || '9035'}
        onUpdateMasterPin={handleUpdateMasterPin}
      />
    </div>
  );
}

export default App;
