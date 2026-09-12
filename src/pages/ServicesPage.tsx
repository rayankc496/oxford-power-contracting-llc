import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageRoute, ServiceItem } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { SafeImage } from '../components/SafeImage';
import { motion } from 'motion/react';
import { 
  Building2, 
  HardHat, 
  Cpu, 
  Zap, 
  ShieldAlert, 
  Radio, 
  Lightbulb, 
  Wind, 
  Droplets, 
  Layers, 
  Paintbrush, 
  Hammer, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calculator
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
  isIntroComplete: boolean;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  isIntroComplete,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Estimator State
  const [estimatorService, setEstimatorService] = useState<string>('Turnkey (Civil + MEP)');
  const [estimatorArea, setEstimatorArea] = useState<number>(25000);
  const [estimatorEmirate, setEstimatorEmirate] = useState<string>('Sharjah');

  const categories = ['All', 'Civil & Turnkey', 'MEP & Systems', 'Life Safety', 'Finishing & Fit-Out'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#d4a843]" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#d4a843]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#d4a843]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#d4a843]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#d4a843]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#d4a843]" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-[#d4a843]" />;
      case 'Wind': return <Wind className="w-6 h-6 text-[#d4a843]" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-[#d4a843]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#d4a843]" />;
      case 'Paintbrush': return <Paintbrush className="w-6 h-6 text-[#d4a843]" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-[#d4a843]" />;
      default: return <Layers className="w-6 h-6 text-[#d4a843]" />;
    }
  };

  // Quick estimator calculation logic
  const calculateEstimatedWeeks = () => {
    let base = 12;
    if (estimatorArea > 50000) base = 36;
    else if (estimatorArea > 20000) base = 24;
    else if (estimatorArea > 10000) base = 16;
    return `${base} - ${base + 8} weeks`;
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const popUpVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeRightVariant = {
    hidden: { opacity: 0, x: -35 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeLeftVariant = {
    hidden: { opacity: 0, x: 35 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const headingRevealVariant = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20">
      <Helmet>
        <title>Construction Services UAE | Turnkey Civil, MEP & DEWA Contracting</title>
        <meta name="description" content="Full-scope contracting services including civil engineering, MEP, DEWA electrical, HVAC, fire safety, finishing, and turnkey construction across the UAE." />
        <meta name="keywords" content="construction services UAE, civil engineering Dubai, MEP contracting Sharjah, DEWA electrical contractor, HVAC installation UAE, turnkey construction services, fire safety contracting, architectural finishing Dubai" />
        <link rel="canonical" href="https://oxford-power-contracting-llc.vercel.app/?page=services" />
      </Helmet>
      {/* 1. Geometric Services Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            variants={headingRevealVariant}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <div className="w-20 h-1 bg-[#d4a843] mb-6"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Full-Scope Contracting Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#333333]">
              Turnkey & Specialized <span className="text-[#d4a843]">Services</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans">
              From heavy civil substructures to certified DEWA electrical substations, central HVAC plants, and luxury marble finishing. Oxford Power Contracting LLC delivers complete turnkey execution across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Buttons - Sharp Rectangular */}
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mr-2">Filter Sector:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#333333] text-[#d4a843] border border-[#333333]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-[#333333]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 12 Services Grid - Geometric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.12 }}
              className="bg-white border border-gray-200 hover:border-[#d4a843] transition-all flex flex-col justify-between shadow-sm group relative"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[0.15] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#333333] text-[10px] font-bold uppercase tracking-widest text-[#d4a843] px-3 py-1 border border-zinc-700">
                      {service.category}
                    </span>
                    {service.dewaCompliance && (
                      <span className="bg-[#d4a843] text-[#1e1e1e] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                        DEWA Approved
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#333333] border border-[#d4a843] flex items-center justify-center shadow-lg">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-[#333333] group-hover:text-[#c49833] transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {service.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                      Key Deliverables
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-600 font-sans">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#d4a843] shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="text-xs font-bold uppercase tracking-widest text-[#333333] hover:text-[#d4a843] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="bg-[#333333] hover:bg-[#d4a843] hover:text-[#1e1e1e] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 transition-colors cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Quick Project Estimator & Scope Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white border border-gray-200 p-8 sm:p-12 shadow-sm"
        >
          <div className="max-w-3xl mb-8">
            <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Interactive Scoping Tool
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#333333] uppercase tracking-tight">
              Project Timeline & Authority Feasibility Estimator
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 font-sans">
              Select your expected built-up area and core requirements to estimate municipal approval windows and mobilization schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  Scope of Contract:
                </label>
                <select
                  value={estimatorService}
                  onChange={(e) => setEstimatorService(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 p-3 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                >
                  <option value="Turnkey (Civil + MEP)">Full Turnkey (Civil + Structural + MEP + Handover)</option>
                  <option value="Civil Engineering & Substructure">Civil Engineering & Reinforced Concrete Substructures</option>
                  <option value="MEP & DEWA Substation">MEP Systems, HVAC Central Plant & DEWA Substation</option>
                  <option value="Interior Finishing & Stone Tiling">Commercial Interior Fit-Out & Architectural Marble</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  <span>Built-Up Area:</span>
                  <span className="font-mono text-[#d4a843] font-bold text-sm">
                    {estimatorArea.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={150000}
                  step={5000}
                  value={estimatorArea}
                  onChange={(e) => setEstimatorArea(Number(e.target.value))}
                  className="w-full accent-[#d4a843] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-sans">
                  <span>5,000 sq.ft (Villa / Facility)</span>
                  <span>75,000 sq.ft</span>
                  <span>150,000+ sq.ft (Tower / Logistics)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                  Project Location / Municipal Jurisdiction:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Sharjah', 'Dubai', 'Northern Emirates'].map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setEstimatorEmirate(em)}
                      className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                        estimatorEmirate === em
                          ? 'bg-[#333333] text-[#d4a843] border-[#333333]'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Panel - Charcoal Geometric Box */}
            <div className="lg:col-span-5 bg-[#333333] text-white p-6 sm:p-8 border border-zinc-700 space-y-4 shadow-lg">
              <h3 className="font-heading text-lg font-bold text-white uppercase border-b border-zinc-700 pb-2">
                Estimated Project Horizon
              </h3>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex justify-between items-center py-1 border-b border-zinc-700">
                  <span className="text-zinc-400">Estimated Execution Window:</span>
                  <span className="font-heading text-base font-bold text-[#d4a843]">
                    {calculateEstimatedWeeks()}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-zinc-700">
                  <span className="text-zinc-400">DEWA / Municipal NOC Path:</span>
                  <span className="font-semibold text-zinc-200">
                    {estimatorEmirate === 'Dubai' ? 'DEWA & DCD Fast-Track' : 'Sharjah Mun. & DEWA'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-zinc-700">
                  <span className="text-zinc-400">Site Mobilization Lead Time:</span>
                  <span className="font-semibold text-zinc-200">10 – 14 Working Days</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">Contract Standard:</span>
                  <span className="font-semibold text-zinc-200">FIDIC Red/Yellow Book</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal(`${estimatorService} (${estimatorArea.toLocaleString()} sq.ft in ${estimatorEmirate})`)}
                  className="w-full bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold py-3.5 px-4 text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  Formalize Quotation For This Scope
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Detailed Service Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#333333] border border-zinc-700 text-white max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#222222] border border-[#d4a843] flex items-center justify-center">
                {renderIcon(selectedServiceDetail.iconName)}
              </div>
              <div>
                <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-widest">
                  {selectedServiceDetail.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white uppercase">
                  {selectedServiceDetail.title}
                </h3>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
              {selectedServiceDetail.fullDesc}
            </p>

            <div className="bg-[#222222] border border-zinc-800 p-5 mb-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Comprehensive Engineering Deliverables:
              </h4>
              <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                {selectedServiceDetail.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a843] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="px-5 py-2.5 text-xs uppercase font-bold text-zinc-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onOpenQuoteModal(s);
                }}
                className="bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
              >
                Request Quote For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};