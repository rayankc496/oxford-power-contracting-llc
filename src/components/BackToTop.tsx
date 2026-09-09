import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      id="back-to-top-btn"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-[#333333] text-[#d4a843] border border-zinc-700 shadow-xl flex items-center justify-center hover:bg-[#d4a843] hover:text-[#1e1e1e] transition-all cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
