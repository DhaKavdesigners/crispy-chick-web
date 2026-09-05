import React from 'react';
import { AlertTriangle, CheckCircle2, Trash2, X, Terminal, ShieldAlert } from 'lucide-react';

export const ConfirmModal = ({
  isOpen,
  title = "SECURITY OVERRIDE",
  message = "Confirm authorization to execute instruction.",
  confirmText = "[EXECUTE_OVERRIDE]",
  cancelText = "[ABORT]",
  variant = "warning", // 'danger' | 'warning' | 'primary'
  isSubmitting = false,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  const colorStyles = {
    danger: {
      btn: 'bg-red-600 hover:bg-red-500 text-white font-mono font-bold'
    },
    warning: {
      btn: 'bg-red-600 hover:bg-red-500 text-white font-mono font-bold'
    },
    primary: {
      btn: 'bg-red-600 hover:bg-red-500 text-white font-mono font-bold'
    }
  }[variant] || { btn: 'bg-red-600 hover:bg-red-500 text-white font-mono font-bold' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md bg-[#111116] border border-[#272733] rounded-2xl p-6 shadow-2xl relative space-y-4 font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1f1f26]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-red-500" />
            <span className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider">
              {title}
            </span>
          </div>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="w-6 h-6 rounded bg-[#181822] hover:bg-[#272736] text-slate-400 hover:text-white flex items-center justify-center transition text-xs"
          >
            ✕
          </button>
        </div>

        {/* Message */}
        <div className="p-4 bg-[#09090b] border border-[#1f1f26] rounded-xl text-xs text-slate-300 leading-relaxed space-y-1">
          <div className="text-[10px] text-red-500 font-mono tracking-wider">&gt; AUTH_PROMPT:</div>
          <p className="font-mono text-slate-200">{message}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onCancel}
            className="flex-1 py-2.5 bg-[#181822] hover:bg-[#272736] text-slate-300 hover:text-white font-mono text-xs rounded-xl border border-[#272736] transition disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onConfirm}
            className={`flex-1 py-2.5 rounded-xl font-mono text-xs transition active:scale-98 disabled:opacity-50 ${colorStyles.btn}`}
          >
            {isSubmitting ? '[PROCESSING...]' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
