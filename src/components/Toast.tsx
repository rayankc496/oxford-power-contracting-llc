import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <aside aria-label="Notification" className="fixed top-20 right-6 z-50 max-w-md bg-[#333333] border border-[#d4a843] text-white p-4 shadow-2xl flex items-start gap-3 animate-in slide-in-from-top-4 duration-300">
      <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
      <div className="flex-1 text-xs sm:text-sm text-zinc-200 leading-snug font-sans">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-zinc-400 hover:text-white p-1 transition-colors cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
