import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageRoute, ProjectItem } from '../types';
import { COMPANY_INFO, SERVICES, PROJECTS, TESTIMONIALS } from '../data/companyData';
import { SafeImage } from '../components/SafeImage';
import { ScrollVideoHeader } from '../components/ScrollVideoHeader';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Star, 
  Maximize2,
  HardHat,
  Cpu,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
  onOpenLightbox: (project: ProjectItem) => void;
  isIntroComplete: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenLightbox,
  isIntroComplete,
}) => {
  // Select 3 core contracting pillars for a clean, non-overwhelming presentation
  const pillarServices = [
    {
      id: 'civil-turnkey',
      title: 'Civil & Structural Engineering',
      category: 'Civil & Turnkey',
      shortDesc: 'Precision structural engineering, RCC superstructures, deep foundation work, and reinforced concrete framing complying with UAE municipal codes.',
      icon: <HardHat className="w-5 h-5 text-[#d4a843]" />,
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=900&auto=format&fit=crop',
      points: ['RCC Superstructures & Earthworks', 'Municipal & Civil Defence Permitting']
    },
    {
      id: 'mep-power',
      title: 'DEWA-Certified MEP & Power',
      category: 'MEP & Systems',
      shortDesc: 'Registered statutory accreditation for high-voltage substations, power energization, chilled-water HVAC systems, and hydraulic networks.',
      icon: <Cpu className="w-5 h-5 text-[#d4a843]" />,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop',
      points: ['DEWA Substations & Switchgear', 'Central Chilled Water & VRF HVAC']
    },
    {
      id: 'luxury-fitout',
      title: 'Architectural Finishes & Fit-Out',
      category: 'Finishing & Fit-Out',
      shortDesc: 'Masterful interior fit-out, natural Italian marble cladding, large-format porcelain slabs, and premium weatherproof exterior facades.',
      icon: <Layers className="w-5 h-5 text-[#d4a843]" />,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
      points: ['Bookmatched Italian Marble & Tiling', 'Acoustic Ceilings & Facade Cladding']
    },
  ];

  // Feature 2 flagship projects with ample breathing space
  const signatureProjects = PROJECTS.slice(0, 2);

  // Selected 2 high-trust client reviews (static cards, no clunky carousel slider)
  const clientReviews = TESTIMONIALS.slice(0, 2);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
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

  const swipeTextContainerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.15 
      } 
    }
  };

  const swipeTextItemVariant = {
    hidden: { opacity: 0, x: -80, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      <Helmet>
        <title>Oxford Power Contracting LLC | DEWA Registered Construction Contractor UAE</title>
        <meta name="description" content="Premier DEWA-registered construction contractor in UAE with 20+ years of experience. Specializing in turnkey civil engineering, MEP, electrical, HVAC, and infrastructure projects across Dubai, Sharjah, and Abu Dhabi." />
        <meta name="keywords" content="construction contractor UAE, DEWA registered contractor, civil engineering Sharjah, MEP contracting Dubai, turnkey construction UAE, electrical contractor UAE, HVAC installation Sharjah, infrastructure projects UAE" />
        <link rel="canonical" href="https://oxford-power-contracting-llc.vercel.app/" />
      </Helmet>
      {/* 1. HERO SECTION: Architectural Landmark Header with Clear CTAs */}
      <ScrollVideoHeader
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
        isIntroComplete={isIntroComplete}
      />

      {/* 2. CORPORATE OVERVIEW: Spacious 2-Column Authority Briefing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden relative">
        {/* Subtle Background Architectural Grid Watermark */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10" 
          style={{
            backgroundImage: 'linear-gradient(#333333 1px, transparent 1px), linear-gradient(90deg, #333333 1px, transparent 1px)',
            backgroundSize: '40px 48px'
          }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authority Narrative */}
          <motion.div 
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
                Two Decades of Contracting Heritage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] uppercase tracking-tight mt-1 leading-[1.15]">
                Delivering Structural Quality & Statutory Precision Since 2006
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed font-sans">
              Founded in 2006, Oxford Power Contracting LLC (operating as Oxford Building Contracting) is an accredited general contractor headquartered in Sharjah, serving high-profile developers and private clients across Dubai, Sharjah, and Abu Dhabi.
            </p>

            <p className="text-gray-600 text-base leading-relaxed font-sans">
              By consolidating in-house civil engineering, DEWA electrical licensing, and complete architectural fit-out under a single authority, we eliminate contractor friction, accelerate municipal NOCs, and protect project handover dates.
            </p>

            {/* Core Credential Highlights */}
            <div className="space-y-3.5 pt-2 font-sans">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  DEWA-Registered Electrical & Water Contractor (Lic. {COMPANY_INFO.dewaRegNo})
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Single-Contractor Turnkey Integration: Civil, MEP, Fire Fighting & Fit-Out
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-gray-800">
                  Zero-Harm Safety Culture with 1.2M+ Safe Man-Hours (ISO 9001 & 45001)
                </span>
              </div>
            </div>

            {/* Navigation Link to About Page */}
            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333] hover:text-[#d4a843] border-b-2 border-[#d4a843] pb-1.5 transition-colors group cursor-pointer"
              >
                <span>Read Full Company History & Leadership Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right: Architectural Image with Experience Badge */}
          <motion.div 
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-gray-200 overflow-hidden shadow-sm bg-zinc-900 aspect-[4/3] sm:aspect-[5/4]">
              <SafeImage
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
                alt="Oxford Engineers Reviewing Technical Blueprints"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Floating Badge with Official Logo */}
            <div className="absolute -bottom-6 right-6 ml-[25px] bg-[#222222] text-white p-5 border border-[#d4a843] shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logo}
                  alt="Oxford Building Contracting Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-[#d4a843] block uppercase leading-none">20+ Years</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 block mt-1">UAE Heritage Since 2006</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE CONTRACTING PILLARS: 3 Balanced, Spacious Cards */}
      <section className="bg-white border-y border-gray-200 py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div className="max-w-2xl space-y-3">
              <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
                Turnkey Capabilities
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] uppercase tracking-tight">
                Core Contracting Pillars
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-sans">
                Executed with certified in-house engineering staff, specialized heavy machinery, and full compliance with UAE municipal standards.
              </p>
            </div>

            {/* Navigation Link to Services Page */}
            <button
              onClick={() => onNavigate('services')}
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3.5 bg-[#333333] hover:bg-[#d4a843] hover:text-[#1e1e1e] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm shrink-0"
            >
              <span>Explore All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

            {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillarServices.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ amount: 0.15 }}
              transition={{ delay: index * 0.12 }}
              className="group bg-[#fafafa] border border-gray-200 hover:border-[#d4a843] transition-all flex flex-col justify-between shadow-sm relative"
              >
                <div>
                  {/* Pillar Image Header */}
                  <div className="relative h-56 overflow-hidden bg-zinc-900">
                    <SafeImage
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 bg-[#222222]/90 text-[10px] font-bold uppercase tracking-widest text-[#d4a843] px-3 py-1 border border-zinc-700">
                      {pillar.category}
                    </span>

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#222222] border border-[#d4a843] flex items-center justify-center shadow-lg">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-[#333333] group-hover:text-[#c49833] transition-colors uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-sans">
                      {pillar.shortDesc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-gray-200 text-xs text-gray-500 font-sans">
                      {pillar.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#d4a843] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-7 pb-7 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold uppercase tracking-widest text-[#333333] group-hover:text-[#d4a843] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Scope Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(pillar.title)}
                    className="text-xs font-bold uppercase tracking-wider text-[#d4a843] hover:underline cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED LANDMARK PROJECTS: 2 Prominent Signatures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-gray-200 pb-6"
        >
          <div className="max-w-2xl space-y-3">
            <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Flagship UAE Developments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] uppercase tracking-tight">
              Featured Portfolio
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans">
              Representative turnkey high-rises and private luxury enclaves delivered across Dubai and Sharjah.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="self-start md:self-auto px-6 py-3.5 bg-[#333333] hover:bg-[#d4a843] hover:text-[#1e1e1e] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* 2 Flagship Projects Grid with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {signatureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ amount: 0.15 }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white border border-gray-200 hover:border-[#d4a843] transition-all shadow-sm relative"
            >
              {/* Project Image Frame */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-zinc-900">
                <SafeImage
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#222222]/90 text-[10px] font-bold uppercase tracking-widest text-[#d4a843] px-3 py-1 border border-zinc-700">
                    {project.category}
                  </span>
                  {project.dewaApproved && (
                    <span className="bg-[#d4a843] text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] px-2.5 py-1">
                      DEWA Energized
                    </span>
                  )}
                </div>

                {/* Lightbox trigger */}
                <button
                  onClick={() => onOpenLightbox(project)}
                  className="absolute bottom-4 right-4 bg-[#222222] hover:bg-[#d4a843] hover:text-[#1e1e1e] text-white p-2.5 transition-colors border border-zinc-700 cursor-pointer"
                  aria-label="View Project Gallery"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Project Title overlay */}
                <div className="absolute bottom-4 left-4 right-16">
                  <p className="text-white font-heading text-xl font-bold uppercase leading-tight">
                    {project.title}
                  </p>
                  <p className="text-[11px] text-zinc-300 uppercase tracking-widest mt-1">
                    {project.location} • {project.year}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7 space-y-4">
                <p className="text-gray-600 text-sm font-sans leading-relaxed">
                  <strong className="text-zinc-800">Turnkey Scope:</strong> {project.scope}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100 font-sans">
                  <span>Built-up Area: <strong className="text-zinc-800">{project.areaSqFt}</strong></span>
                  <button
                    onClick={() => onOpenLightbox(project)}
                    className="text-[#d4a843] font-bold uppercase text-[11px] tracking-wider hover:underline cursor-pointer"
                  >
                    View Photos & Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CLIENT TRUST & REVIEWS: Clean, Static Two-Column Endorsements (NO SLIDER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white border border-gray-200 p-8 sm:p-14 shadow-sm"
        >
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Verified Client Feedback
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] uppercase tracking-tight">
              Trusted by Leading UAE Developers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientReviews.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                className="bg-[#fafafa] border border-gray-200 p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#d4a843]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#333333] text-base leading-relaxed font-sans italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-heading text-base font-bold text-[#333333] uppercase">
                    {item.clientName}
                  </p>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">
                    {item.role} • <span className="text-[#d4a843] font-bold">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-sans">
                    Project: {item.projectRef} ({item.source})
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION / TENDER MOBILIZATION: Spacious Charcoal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-[#222222] text-white p-8 sm:p-14 border border-zinc-700 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="w-12 h-1 bg-[#d4a843]"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Direct Tendering & Estimation
            </span>
            <motion.h2 
              variants={swipeTextContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight flex flex-wrap gap-x-3 gap-y-1"
            >
              {"Ready to Mobilize Your Next Project in the UAE?".split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={swipeTextItemVariant}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              Submit your engineering drawings and BOQ for direct contractor estimation. Our senior civil engineers and DEWA liaison managers are prepared to mobilize.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-8 py-4 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold uppercase text-xs tracking-widest transition-all cursor-pointer shadow-md"
              >
                Request Tender Quote
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-zinc-500 font-bold uppercase text-xs tracking-widest transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#d4a843] transition-colors py-4 px-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4a843]" />
                <span>View Sharjah Office Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

