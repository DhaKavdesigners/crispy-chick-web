import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, ChefHat, Bike } from 'lucide-react';

export const LoginView = ({ onLoginSuccess }) => {
  const { login } = useAuth();
  const [roleTab, setRoleTab] = useState('OWNER_COUNTER'); // 'OWNER_COUNTER' | 'DELIVERY_RIDER'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const session = await login(email, password);
      if (onLoginSuccess) {
        onLoginSuccess(session);
      } else {
        if (session.role === 'OWNER_COUNTER') {
          window.location.hash = '#/shop-counter';
        } else {
          window.location.hash = '#/delivery-dashboard';
        }
      }
    } catch (err) {
      setErrorMsg(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillQuickCredentials = (role) => {
    setRoleTab(role);
    if (role === 'OWNER_COUNTER') {
      setEmail('owner@crispychick.com');
      setPassword('OwnerPassKGFcode77');
    } else {
      setEmail('rider@crispychick.com');
      setPassword('RiderPassKGFcode88');
    }
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-cafe-black text-white flex flex-col justify-center items-center px-4 py-8">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-md w-full bg-cafe-card border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2 shadow-lg">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold font-serif tracking-wide text-amber-400">Crispy Chick Portal</h1>
          <p className="text-xs text-neutral-400">Authorized Kitchen & Logistics Access</p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="flex bg-neutral-900/80 p-1 rounded-xl border border-neutral-800">
          <button
            type="button"
            onClick={() => fillQuickCredentials('OWNER_COUNTER')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              roleTab === 'OWNER_COUNTER'
                ? 'bg-amber-500 text-cafe-black shadow-md font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>Store Counter</span>
          </button>
          <button
            type="button"
            onClick={() => fillQuickCredentials('DELIVERY_RIDER')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              roleTab === 'DELIVERY_RIDER'
                ? 'bg-amber-500 text-cafe-black shadow-md font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bike className="w-4 h-4" />
            <span>Delivery Fleet</span>
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="flex items-center gap-2 bg-red-950/60 border border-red-800/80 p-3 rounded-xl text-red-200 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Authorized Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@crispychick.com"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cafe-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Secure Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Back to Customer Menu */}
        <div className="pt-2 text-center border-t border-neutral-800/80">
          <a
            href="#/"
            className="text-xs text-neutral-400 hover:text-amber-400 transition"
          >
            &larr; Return to Customer Ordering Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
