import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginWithFirebase, logoutStaff } from '../firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ownerUser, setOwnerUser] = useState(null);
  const [riderUser, setRiderUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const checkAuthTokens = () => {
      try {
        const ownerSaved = localStorage.getItem('cc_operator_auth_token');
        const riderSaved = localStorage.getItem('cc_logistics_auth_token');
        setOwnerUser(ownerSaved ? JSON.parse(ownerSaved) : null);
        setRiderUser(riderSaved ? JSON.parse(riderSaved) : null);
      } catch (err) {
        console.error("Auth state load error:", err);
      } finally {
        setLoadingAuth(false);
      }
    };
    checkAuthTokens();
  }, []);

  const login = async (email, password) => {
    const session = await loginWithFirebase(email, password);
    if (session.role === 'OWNER_COUNTER') {
      setOwnerUser(session);
    } else if (session.role === 'DELIVERY_RIDER') {
      setRiderUser(session);
    }
    return session;
  };

  const loginRiderByPin = (riderProfile) => {
    const session = {
      email: `${riderProfile.pin || 'rider'}@crispychick.com`,
      role: 'DELIVERY_RIDER',
      riderId: riderProfile.id || riderProfile.pin,
      riderName: riderProfile.name,
      riderPhone: riderProfile.phone
    };
    localStorage.setItem('cc_logistics_auth_token', JSON.stringify(session));
    setRiderUser(session);
    return session;
  };

  const signOut = async (targetRole) => {
    const roleToSignOut = targetRole || (window.location.hash.includes('shop-counter') ? 'OWNER_COUNTER' : 'DELIVERY_RIDER');
    await logoutStaff(roleToSignOut);
    if (roleToSignOut === 'OWNER_COUNTER') {
      setOwnerUser(null);
    } else {
      setRiderUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ ownerUser, riderUser, loadingAuth, login, loginRiderByPin, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
