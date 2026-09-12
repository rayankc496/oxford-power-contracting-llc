import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects & Portfolio' },
    { id: 'contact', label: 'Contact & Quote' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#222222]/95 backdrop-blur-md shadow-lg py-3 border-b border-zinc-800' 
          : 'bg-[#222222] py-4 border-b border-zinc-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center">
          {/* Logo & Brand Identity - Official Company Emblem */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer shrink-0"
            id="brand-logo-btn"
          >
            {/* Oxford Company Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <img
                src={COMPANY_INFO.logo}
                alt="Oxford Building Contracting Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg leading-none tracking-tight uppercase text-white font-heading group-hover:text-[#d4a843] transition-colors">
                Oxford Power
              </span>
              <span className="text-[10px] text-[#d4a843] font-semibold uppercase tracking-[0.2em] mt-1">
                Contracting LLC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - centered in remaining space */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-semibold uppercase tracking-widest flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`py-1 transition-colors relative ${
                    isActive 
                      ? 'text-[#d4a843]' 
                      : 'text-zinc-300 hover:text-[#d4a843]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4a843]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons - Sharp Rectangular CTA */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              id="nav-quote-btn"
              className="bg-[#333333] text-white border border-zinc-700 hover:border-[#d4a843] hover:bg-[#d4a843] hover:text-[#1e1e1e] font-bold uppercase text-xs tracking-widest px-6 py-3 transition-all flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden bg-[#333333] border border-[#d4a843] text-[#d4a843] font-bold uppercase text-[10px] tracking-wider px-3 py-1.5"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Menu"
              className="p-2 text-zinc-300 hover:text-white bg-[#333333] border border-zinc-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4a843]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1f1f1f] border-b border-zinc-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 mb-5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 text-left text-xs uppercase font-bold tracking-widest transition-colors ${
                      isActive 
                        ? 'bg-[#333333] text-[#d4a843] border-l-2 border-[#d4a843]' 
                        : 'text-zinc-200 hover:bg-zinc-800 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#333333] hover:bg-[#d4a843] hover:text-[#1e1e1e] border border-[#d4a843] text-white font-bold uppercase text-xs tracking-widest py-3 text-center transition-all"
              >
                Get a Free Quote
              </button>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 mt-2">
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 p-2 bg-[#333333] border border-zinc-700 hover:text-white uppercase text-[10px] tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
                  <span>Call Us</span>
                </a>
                <a 
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 bg-[#333333] border border-zinc-700 text-[#25D366] uppercase text-[10px] tracking-wider"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
