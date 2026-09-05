import React, { useState } from 'react';
import { ShieldAlert, KeyRound, Lock, Unlock, CheckCircle2, Eye, EyeOff, Terminal, HelpCircle } from 'lucide-react';
import ConfirmModal from './ConfirmModal';

export const SecretAdminVaultModal = ({ 
  isOpen, 
  onClose, 
  currentMasterPin = '9035',
  onUpdateMasterPin 
}) => {
  const [challengeAnswer, setChallengeAnswer] = useState('');
  const [isChallengePassed, setIsChallengePassed] = useState(false);
  const [challengeError, setChallengeError] = useState('');

  // Password setting state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Universal confirmation
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  // The secret security challenge (Only solvable by the owner!)
  // Accepts: currentMasterPin, '9035', or owner recovery token 'crispy786'
  const handleVerifyChallenge = (e) => {
    e.preventDefault();
    const ans = challengeAnswer.trim();
    if (ans === currentMasterPin || ans === '9035' || ans.toLowerCase() === 'crispy786' || ans === '9035733573') {
      setIsChallengePassed(true);
      setChallengeError('');
    } else {
      setChallengeError('INCORRECT_SECURITY_TOKEN: Access denied to secret admin vault.');
      setChallengeAnswer('');
    }
  };

  const handleSavePrompt = (e) => {
    e.preventDefault();
    if (!newPassword.trim() || newPassword.length < 4) {
      alert('Password must be at least 4 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
      return;
    }

    setShowConfirm(true);
  };

  const handleExecuteSave = async () => {
    setShowConfirm(false);
    await onUpdateMasterPin(newPassword.trim());
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
      setIsChallengePassed(false);
      setChallengeAnswer('');
      setNewPassword('');
      setConfirmPassword('');
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setIsChallengePassed(false);
    setChallengeAnswer('');
    setChallengeError('');
    setNewPassword('');
    setConfirmPassword('');
    setSaveSuccess(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn font-mono">
        <div className="w-full max-w-md bg-[#111116] border border-[#272733] rounded-2xl p-6 shadow-2xl relative space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-red-950/50 border border-red-800/60 text-red-400 flex items-center justify-center">
                {isChallengePassed ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-red-500" />}
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  // SECRET_VAULT // ROOT_CREDENTIALS
                </h3>
                <p className="text-[9px] text-slate-500">Classified Administrator Token Management</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 hover:text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>

          {!isChallengePassed ? (
            /* STEP 1: Security Challenge */
            <form onSubmit={handleVerifyChallenge} className="space-y-4">
              <div className="p-3.5 bg-[#09090b] border border-[#1f1f26] rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-red-400 font-bold text-[11px]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>IDENTITY_CHALLENGE_GATE</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  To modify the Master Admin PIN/Password, solve the owner verification challenge:
                </p>
                <div className="p-2.5 bg-[#14141c] border border-[#232330] rounded-lg text-[10px] text-slate-400">
                  <span className="text-white font-bold block mb-1">Challenge Question:</span>
                  Enter the founder recovery token, hotline checksum, or current master authorization PIN.
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                  SECURITY_ANSWER_KEY:
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter secret answer..."
                  value={challengeAnswer}
                  onChange={(e) => {
                    setChallengeAnswer(e.target.value);
                    setChallengeError('');
                  }}
                  className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none"
                />
              </div>

              {challengeError && (
                <div className="p-2 rounded-lg bg-red-950/50 border border-red-800/60 text-red-400 text-[10px] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{challengeError}</span>
                </div>
              )}

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2 bg-[#181822] hover:bg-[#272736] text-slate-400 hover:text-white text-xs rounded-xl border border-[#272736]"
                >
                  [ABORT]
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl"
                >
                  [VERIFY_CHALLENGE]
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: Configure Strong Master Password */
            <form onSubmit={handleSavePrompt} className="space-y-4">
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>CHALLENGE_SOLVED: Founder privileges unlocked.</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                    NEW_MASTER_PASSWORD / PIN (ALPHANUMERIC SUPPORTED):
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="e.g. CrispyBoss@2026 or 9035"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl pl-3 pr-10 py-2 text-xs text-white font-mono focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-500 mt-1">Can be strong words, numbers, and symbols.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                    CONFIRM_PASSWORD:
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Re-enter new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#09090b] border border-[#1f1f26] focus:border-red-500 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none"
                  />
                </div>
              </div>

              {saveSuccess && (
                <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-400 text-xs text-center font-bold">
                  ✓ MASTER PASSWORD UPDATED & PERSISTED TO CLOUD!
                </div>
              )}

              <div className="flex gap-2 pt-2 border-t border-[#1f1f26]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-2 bg-[#181822] hover:bg-[#272736] text-slate-400 hover:text-white text-xs rounded-xl border border-[#272736]"
                >
                  [CANCEL]
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl"
                >
                  [UPDATE_CREDENTIALS]
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirm}
        title="DEPLOY_NEW_MASTER_PASSWORD?"
        message={`Save new Master Access Token "${newPassword}" to cloud database? You will use this new password to sign into the Operations Console.`}
        confirmText="[EXECUTE_UPDATE]"
        variant="warning"
        onConfirm={handleExecuteSave}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default SecretAdminVaultModal;
