import React from 'react';
import { FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface StickyCTAProps {
  onOpenQuoteModal: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Trigger with enlarged WhatsApp logo */}
      <a
        href={COMPANY_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        id="sticky-whatsapp-btn"
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 shadow-2xl transition-all cursor-pointer rounded-xl hover:scale-105"
      >
        <WhatsAppIcon showRect={false} className="w-6 h-6 sm:w-6 sm:h-6 shrink-0 text-white fill-current" />
        <span className="hidden sm:inline font-bold uppercase text-[11px] tracking-widest text-white pr-1">
          WhatsApp Direct
        </span>
      </a>

      {/* Request Quote Sticky Trigger */}
      <button
        onClick={onOpenQuoteModal}
        aria-label="Request Fast Quote"
        id="sticky-quote-btn"
        className="pointer-events-auto flex items-center gap-2 bg-[#333333] hover:bg-[#222222] text-[#d4a843] border border-[#d4a843] px-4 py-2.5 shadow-2xl transition-all cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span className="text-[10px] font-bold tracking-widest uppercase">
          Request Quote
        </span>
      </button>
    </aside>
  );
};
