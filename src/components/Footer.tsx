import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Facebook, 
  Instagram, 
  Award
} from 'lucide-react';
import { WhatsAppIcon, WhatsAppOutlineIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handlePageClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#333333] text-zinc-300 pt-16 pb-12 border-t border-zinc-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-zinc-800">
          {/* Column 1: Brand & Credentials (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logo}
                  alt="Oxford Building Contracting Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-white uppercase leading-none">
                  OXFORD <span className="text-[#d4a843]">POWER</span>
                </span>
                <span className="text-[10px] text-[#d4a843] font-semibold uppercase tracking-[0.2em] mt-1">
                  CONTRACTING LLC • UAE
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-sans">
              Leading construction contractor in the UAE with 20+ years of proven delivery across healthcare, hospitality, commercial, residential, and industrial sectors. Specializing in turnkey civil engineering, DEWA-certified MEP, and infrastructure.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#222222] text-[#d4a843] border border-zinc-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                DEWA Registered Contractor
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#222222] text-zinc-300 border border-zinc-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4a843]" />
                ISO 9001 & 45001
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4a843] mb-3">Connect With Us</p>
              <div className="flex items-center space-x-3">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  id="footer-facebook-link"
                  className="w-9 h-9 bg-[#222222] border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4a843] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  id="footer-instagram-link"
                  className="w-9 h-9 bg-[#222222] border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4a843] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  id="footer-whatsapp-link"
                  className="w-9 h-9 bg-[#222222] border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4a843] transition-colors"
                >
                  <WhatsAppOutlineIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-widest block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-semibold text-zinc-400">
              <li>
                <button 
                  onClick={() => handlePageClick('home')} 
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('about')} 
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
                >
                  <span>About Our Firm</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('services')} 
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
                >
                  <span>Turnkey & MEP Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('projects')} 
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
                >
                  <span>Projects & Portfolio</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('contact')} 
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
                >
                  <span>Contact & Location</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenQuoteModal} 
                  className="text-[#d4a843] hover:underline flex items-center gap-1 font-bold pt-1"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="space-y-4">
            <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-widest block">
              Key Capabilities
            </span>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handlePageClick('services')}
                    className="hover:text-[#d4a843] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="space-y-4">
            <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-widest block">
              UAE Headquarters
            </span>
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4a843] shrink-0 mt-0.5" />
                <a 
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#d4a843] transition-colors leading-snug group"
                >
                  <span>{COMPANY_INFO.address}</span>
                  <span className="block text-[10px] text-[#d4a843] font-bold uppercase tracking-wider mt-1 group-hover:underline">
                    View on Google Maps →
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4a843] shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="text-zinc-300 hover:text-[#d4a843] transition-colors font-semibold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4a843] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-zinc-300 hover:text-[#d4a843] transition-colors font-semibold uppercase"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#d4a843] shrink-0 mt-0.5" />
                <div className="text-[11px] text-zinc-400">
                  <p className="text-zinc-300 font-semibold uppercase tracking-wider">Mon – Thu & Sat:</p>
                  <p>07:00 AM – 05:00 PM</p>
                  <p className="text-[#d4a843] text-[10px] mt-0.5 uppercase tracking-wider">Friday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>
            <p>
              Copyright © 2026 <span className="text-zinc-400 font-medium">Oxford Power Contracting LLC</span> (Oxford Building Contracting). All rights reserved.
            </p>
            <p className="mt-1 text-[11px] text-zinc-600">
              Commercial License: Sharjah Economic Development Dept & DEWA Approved Electrical Contractor.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-zinc-400">
            <button onClick={() => handlePageClick('about')} className="hover:text-[#d4a843] transition-colors">
              Regulatory Compliance
            </button>
            <span>•</span>
            <button onClick={() => handlePageClick('services')} className="hover:text-[#d4a843] transition-colors">
              DEWA Registration
            </button>
            <span>•</span>
            <button onClick={() => handlePageClick('contact')} className="hover:text-[#d4a843] transition-colors">
              Tender Submissions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
