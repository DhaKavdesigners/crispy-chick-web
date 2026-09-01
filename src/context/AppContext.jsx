import React, { createContext, useContext, useState, useEffect } from 'react';
import { subscribeSettings, updateSettings, subscribeMenuConfig, updateMenuConfig, subscribeOrders, subscribeRiders } from '../firebase/firestore';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tray, setTray] = useState(() => {
    try {
      const saved = localStorage.getItem('crispy_tray_cache');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpenOrdering, setIsOpenOrdering] = useState(true);
  const [menuConfig, setMenuConfig] = useState({});
  const [floatingItems, setFloatingItems] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [riders, setRiders] = useState([]);

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
    } catch {
      return [];
    }
  });

  // Sync tray to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('crispy_tray_cache', JSON.stringify(tray));
    } catch (e) {}
  }, [tray]);

  // Apply theme class to document body
  useEffect(() => {
    localStorage.setItem('crispy_theme_settings', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#080808';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [theme]);

  // Subscribe to real-time store settings, menu config, orders, and riders
  useEffect(() => {
    const unsubSettings = subscribeSettings((settings) => {
      if (settings && typeof settings.onlineOrderingWindow === 'boolean') {
        setIsOpenOrdering(settings.onlineOrderingWindow);
      }
    });

    const unsubMenu = subscribeMenuConfig((cfg) => {
      setMenuConfig(cfg || {});
    });

    const unsubOrders = subscribeOrders((orders) => {
      setAllOrders(orders);
    });

    const unsubRiders = subscribeRiders((rList) => {
      setRiders(rList);
    });

    return () => {
      if (unsubSettings) unsubSettings();
      if (unsubMenu) unsubMenu();
      if (unsubOrders) unsubOrders();
      if (unsubRiders) unsubRiders();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

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

  const updateActiveOrderId = (id) => {
    if (id) {
      setActiveOrderIds(prev => {
        const next = prev.includes(id) ? prev : [id, ...prev];
        localStorage.setItem('cc_customer_active_order_ids', JSON.stringify(next));
        return next;
      });
    }
  };

  const triggerFlyAnimation = (event, imageSrc) => {
    if (!event) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const newItem = {
      id,
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2,
      image: imageSrc
    };
    setFloatingItems(prev => [...prev, newItem]);
    setTimeout(() => {
      setFloatingItems(prev => prev.filter(i => i.id !== id));
    }, 800);
  };

  const addToTray = (item, event) => {
    if (event && item.image) {
      triggerFlyAnimation(event, item.image);
    }
    setTray(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromTray = (itemName) => {
    setTray(prev => prev.filter(i => i.name !== itemName));
  };

  const updateQuantity = (itemName, delta) => {
    setTray(prev => {
      return prev.map(i => {
        if (i.name === itemName) {
          const newQty = i.quantity + delta;
          return newQty > 0 ? { ...i, quantity: newQty } : null;
        }
        return i;
      }).filter(Boolean);
    });
  };

  const clearTray = () => {
    setTray([]);
    localStorage.removeItem('crispy_tray_cache');
  };

  const totalTrayCount = tray.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = tray.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const saveStoreOpenState = async (open) => {
    setIsOpenOrdering(open);
    await updateSettings({ onlineOrderingWindow: open });
  };

  const saveMenuConfigState = async (newCfg) => {
    setMenuConfig(newCfg);
    await updateMenuConfig(newCfg);
  };

  return (
    <AppContext.Provider value={{
      tray,
      addToTray,
      removeFromTray,
      updateQuantity,
      clearTray,
      totalTrayCount,
      subtotal,
      isOpenOrdering,
      saveStoreOpenState,
      menuConfig,
      saveMenuConfigState,
      theme,
      toggleTheme,
      currentUser,
      setCurrentUser,
      activeOrderIds,
      updateActiveOrderIds,
      updateActiveOrderId,
      floatingItems,
      allOrders,
      riders
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
