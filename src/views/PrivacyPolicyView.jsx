import React from 'react';
import { ArrowLeft, Shield, Trash2 } from 'lucide-react';

export const PrivacyPolicyView = () => {
  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear your saved delivery addresses and cache from this device?")) {
      localStorage.clear();
      window.alert("Your local device data has been cleared successfully.");
      window.location.hash = '#/';
    }
  };

  return (
    <div className="min-h-screen bg-cafe-black text-white px-4 py-8 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <a href="#/" className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:text-amber-400 transition">
          <ArrowLeft className="w-5 h-5" />
        </a>
        <h1 className="text-xl font-bold font-serif text-amber-400">Privacy Policy & Data Security</h1>
      </div>

      <div className="bg-cafe-card border border-neutral-800 rounded-2xl p-6 space-y-4 text-xs text-neutral-300 leading-relaxed">
        <div className="flex items-center gap-2 text-amber-400 font-semibold">
          <Shield className="w-4 h-4" />
          <span>Crispy Chick KGF Privacy Statement</span>
        </div>
        
        <p>
          At Crispy Chick KGF, we respect your privacy. This policy explains how we collect and protect your delivery details when you use our online food ordering application.
        </p>

        <h3 className="font-bold text-white text-sm">1. Information We Collect</h3>
        <p>
          We only collect information necessary to fulfill your food orders:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-neutral-400">
          <li>Your Name and 10-digit Mobile Number for order updates.</li>
          <li>Delivery Address, Landmarks, and Area PIN code.</li>
          <li>Optional GPS location when you choose &quot;Current Location&quot; during checkout.</li>
        </ul>

        <h3 className="font-bold text-white text-sm">2. How We Use Your Data</h3>
        <p>
          Your information is used strictly by our kitchen and delivery fleet to prepare and deliver your meal to your doorstep. We never sell or share your phone number with third-party advertisers.
        </p>

        <h3 className="font-bold text-white text-sm">3. Delete Your Account / Clear Data</h3>
        <p>
          You have full control over your saved addresses and local device data at any time.
        </p>

        <button
          onClick={handleClearData}
          className="mt-2 px-4 py-2.5 bg-red-950/60 border border-red-800 text-red-300 hover:bg-red-900/60 rounded-xl font-semibold flex items-center gap-2 transition"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear My Saved Device Data</span>
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
