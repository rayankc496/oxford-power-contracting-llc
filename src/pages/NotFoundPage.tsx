import React from 'react';
import { PageRoute } from '../types';
import { HardHat, ArrowLeft, Home, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NotFoundPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 bg-gray-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 border border-gray-200 shadow-md">
        <div className="w-16 h-16 bg-[#333333] border border-[#d4a843] flex items-center justify-center mx-auto text-[#d4a843]">
          <HardHat className="w-8 h-8" />
        </div>

        <div>
          <div className="w-12 h-1 bg-[#d4a843] mx-auto mb-3"></div>
          <span className="font-heading text-6xl font-bold text-[#d4a843] block tracking-tight">
            404
          </span>
          <h1 className="font-heading text-2xl font-bold text-[#333333] uppercase mt-2">
            Site Zone Under Construction
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-2 font-sans">
            The page or document you requested does not exist or has been relocated within the Oxford Power Contracting directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3 font-sans">
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold uppercase text-xs tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="w-full bg-[#333333] hover:bg-[#222222] text-white font-bold uppercase text-xs tracking-wider py-3.5 px-4 transition-colors cursor-pointer border border-zinc-700"
          >
            Explore Turnkey & MEP Services
          </button>
        </div>

        <p className="text-xs text-gray-500 pt-2 font-sans">
          Need immediate support? Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#d4a843] font-bold">{COMPANY_INFO.phone}</a>
        </p>
      </div>
    </div>
  );
};
