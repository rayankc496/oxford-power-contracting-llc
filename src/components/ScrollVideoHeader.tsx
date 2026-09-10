import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface ScrollVideoHeaderProps {
  onNavigate?: (page: PageRoute) => void;
  onOpenQuoteModal?: (service?: string) => void;
  isIntroComplete?: boolean;
}

export const ScrollVideoHeader: React.FC<ScrollVideoHeaderProps> = ({
  onNavigate,
  onOpenQuoteModal,
  isIntroComplete,
}) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const text1 = 'Shaping Skylines,';
  const text2 = 'Building Landmarks';

  useEffect(() => {
    if (!isIntroComplete) {
      setLine1('');
      setLine2('');
      setIsDone(false);
      setIsDeleting(false);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (milliseconds: number) => new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        timers.splice(timers.indexOf(timer), 1);
        resolve();
      }, milliseconds);
      timers.push(timer);
    });

    const runTypewriter = async () => {
      while (!cancelled) {
        setLine1('');
        setLine2('');
        setIsDone(false);
        setIsDeleting(false);

        for (let index = 1; index <= text1.length; index += 1) {
          if (cancelled) return;
          setLine1(text1.substring(0, index));
          await wait(42);
        }

        await wait(450);
        if (cancelled) return;

        for (let index = 1; index <= text2.length; index += 1) {
          if (cancelled) return;
          setLine2(text2.substring(0, index));
          await wait(42);
        }

        setIsDone(true);
        await wait(3800);
        if (cancelled) return;

        setIsDone(false);
        setIsDeleting(true);

        for (let index = text2.length; index >= 0; index -= 1) {
          if (cancelled) return;
          setLine2(text2.substring(0, index));
          await wait(28);
        }

        for (let index = text1.length; index >= 0; index -= 1) {
          if (cancelled) return;
          setLine1(text1.substring(0, index));
          await wait(28);
        }

        setIsDeleting(false);
        await wait(900);
      }
    };

    void runTypewriter();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [isIntroComplete]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] w-full flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Self-contained styling for the typewriter blinking cursor */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.85s step-end infinite;
        }
      `}} />

      {/* Luxury Architectural Villa Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')",
          backgroundPosition: 'center 35%',
        }}
      />
      {/* Secondary atmospheric overlay: warm dusk tones matching luxury UAE villas */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/65 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/80 pointer-events-none" />

      {/* Geometric subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Hero Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 sm:py-32 w-full flex flex-col justify-center"
        initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
        animate={isIntroComplete ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 36, filter: 'blur(6px)' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        data-testid="hero-content"
      >
        <div className="max-w-3xl space-y-6">
          {/* Accreditation Tag & Location */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#222222]/90 border border-[#d4a843]/40 text-[#d4a843] text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4a843]" />
              <span>DEWA Registered Contractor • Since 2006</span>
            </div>
            <span className="text-zinc-400 text-xs font-semibold block uppercase tracking-wider">
              Sharjah • Dubai • Abu Dhabi
            </span>
          </div>

          {/* Main Display Headline with Typewriter Animation */}
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[1.08] block"
            data-testid="hero-headline"
          >
            <span className="block min-h-[1.1em]" data-testid="hero-line-1">
              {line1}
              {!isDone && line2 === '' && <span className="animate-blink text-white ml-0.5">|</span>}
            </span>
            <span className="block min-h-[1.1em]" data-testid="hero-line-2">
              <span className="text-[#d4a843]">{line2}</span>
              {!isDone && line2 !== '' && <span className="animate-blink text-[#d4a843] ml-0.5">|</span>}
              {isDone && <span className="animate-blink text-[#d4a843] ml-0.5">|</span>}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl font-light">
            Oxford Power Contracting LLC is a premier turnkey contractor in the UAE, delivering two decades of excellence in civil structural engineering, DEWA-certified electrical infrastructure, and high-end developments.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : undefined}
              className="px-8 py-4 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold uppercase text-xs tracking-widest transition-all cursor-pointer shadow-xl flex items-center gap-2 group"
            >
              <span>Request Tender Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('projects') : undefined}
              className="px-8 py-4 bg-[#222222]/90 hover:bg-[#333333] text-white border border-zinc-600 hover:border-[#d4a843] font-bold uppercase text-xs tracking-widest transition-all cursor-pointer backdrop-blur-sm"
            >
              Explore Portfolio
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="pt-8 sm:pt-12 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-1">
              <AnimatedCounter end={20} suffix="+" duration={2000} className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none tracking-tight text-white block" />
              <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-sans block">Years in the UAE</span>
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={450} suffix="+" duration={2200} className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none tracking-tight text-[#d4a843] block" />
              <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-sans block">Completed Projects</span>
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={1200000} suffix="+" duration={2500} className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none tracking-tight text-white block" />
              <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-sans block">Safe Man-Hours</span>
            </div>
            <div className="space-y-1">
              <AnimatedCounter end={100} suffix="%" duration={1800} className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none tracking-tight text-[#d4a843] block" />
              <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-sans block">DEWA Compliant</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Bottom Edge Divider */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#fafafa] to-transparent pointer-events-none" />
    </section>
  );
};