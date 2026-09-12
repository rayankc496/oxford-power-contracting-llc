import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SafeImage } from '../components/SafeImage';
import { PageRoute } from '../types';
import { COMPANY_INFO, TEAM_MEMBERS, CERTIFICATIONS } from '../data/companyData';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Building, 
  HardHat, 
  Phone, 
  ArrowRight,
  Flame,
  Globe2,
  Users
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
  isIntroComplete: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal, isIntroComplete }) => {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const milestones = [
    {
      year: '2006',
      title: 'Company Foundation in Sharjah',
      desc: 'Established as a specialized electro-mechanical and civil engineering firm, undertaking commercial installations in Sharjah and Dubai.',
    },
    {
      year: '2008',
      title: 'Official DEWA Registration',
      desc: 'Awarded formal DEWA accreditation for medium and low-voltage electrical works, opening direct municipal and government project avenues.',
    },
    {
      year: '2012',
      title: 'Turnkey Civil Expansion',
      desc: 'Expanded into full-scale reinforced concrete framing, multi-storey residential towers, and deep foundation engineering.',
    },
    {
      year: '2016',
      title: 'ISO 9001 & ISO 45001 Certification',
      desc: 'Formalized international standards for quality management and occupational health & safety with Bureau Veritas accreditation.',
    },
    {
      year: '2021',
      title: 'Healthcare & Cleanroom Specialization',
      desc: 'Successfully delivered specialized surgical wards, hospital HVAC, and medical gas networks for leading UAE healthcare operators.',
    },
    {
      year: '2026',
      title: 'Two Decades of Middle East Landmarks',
      desc: 'Celebrating 20 years with over 450 completed projects and 1.2M+ safe man-hours, pioneering sustainable UAE engineering.',
    },
  ];

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

  const timelineContainerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.1,
      },
    },
  };

  const timelineCardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.93, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const mobileTimelineCardVariant = {
    mobileHidden: { opacity: 0, y: 35 },
    mobileVisible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const vibrantHeaderContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const vibrantHeaderItem = {
    hidden: { opacity: 0, y: 35, scale: 0.95, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };


  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20">
      <Helmet>
        <title>About Oxford Power Contracting LLC | 20+ Years UAE Construction Heritage</title>
        <meta name="description" content="Learn about Oxford Power Contracting LLC's 20-year heritage in UAE construction. DEWA-registered, ISO-certified, with 450+ landmark projects across Dubai, Sharjah, and Abu Dhabi." />
        <meta name="keywords" content="about Oxford Power Contracting, UAE construction company history, DEWA registered contractor Sharjah, ISO certified construction UAE, civil engineering firm Dubai" />
        <link rel="canonical" href="https://oxford-power-contracting-llc.vercel.app/?page=about" />
      </Helmet>
      {/* 1. Geometric Header Banner */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.div 
              variants={vibrantHeaderContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl space-y-4"
            >
              <motion.div variants={vibrantHeaderItem} className="w-20 h-1 bg-[#d4a843] mb-6" />
              <motion.span variants={vibrantHeaderItem} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
                Corporate Heritage • Est. 2006
              </motion.span>
              <motion.h1 variants={vibrantHeaderItem} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#333333]">
                About Oxford Power <span className="text-[#d4a843]">Contracting</span>
              </motion.h1>
              <motion.p variants={vibrantHeaderItem} className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans">
                Founded in 2006, Oxford Power Contracting LLC (operating as Oxford Building Contracting) has delivered landmark civil engineering, MEP infrastructure, and high-spec architectural projects across the United Arab Emirates.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={fadeLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.15 }}
              className="shrink-0 flex items-center justify-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logo}
                  alt="Oxford Building Contracting Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Narrative & Safety Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="border-l-4 border-[#d4a843] pl-6 py-2 bg-gray-50">
              <p className="font-heading text-xl sm:text-2xl font-bold text-[#333333] uppercase">
                "We focus on delivering quality while maintaining the highest health and safety standards."
              </p>
              <p className="text-[10px] font-bold text-[#d4a843] uppercase tracking-widest mt-2">
                — Oxford Power Contracting Corporate Mandate
              </p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed font-sans">
              Operating out of King Faisal Street, Sharjah, Oxford Power Contracting has established a proven track record as a premier contracting partner for commercial developers, hospitality groups, healthcare authorities, and industrial leaders.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-sans">
              Unlike contractors who subcontract critical engineering tasks, Oxford maintains an integrated in-house roster of certified civil structural engineers, DEWA-registered electrical masters, HVAC technicians, and master masons. This unified delivery framework ensures total accountability, eliminates timeline disputes, and accelerates final municipal handover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <span className="font-heading text-3xl font-bold text-[#d4a843] block">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#333333] block mt-1">
                  DEWA & Municipality Approvals
                </span>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  Full statutory compliance across Sharjah & Dubai authorities.
                </p>
              </div>
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <span className="font-heading text-3xl font-bold text-[#d4a843] block">1.2M+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#333333] block mt-1">
                  Safe Man-Hours Without LTI
                </span>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  Strict adherence to ISO 45001 & UAE labor laws.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="overflow-hidden border border-gray-200 shadow-lg bg-zinc-900">
              <SafeImage
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Oxford Site Operations and Engineering Oversight"
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#333333] text-white p-6 border border-zinc-700 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 text-[#d4a843] mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-heading text-sm font-bold uppercase tracking-wider">DEWA Registered</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Official accreditation for electrical substations and water connection networks across Dubai and Sharjah.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Company Milestones / Timeline - Geometric Cards */}
      <section className="bg-gray-50 py-16 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            className="max-w-2xl mb-12"
          >
            <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Historical Track Record
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#333333] uppercase tracking-tight">
              Our 20-Year Evolution
            </h2>
            <p className="text-gray-600 text-sm mt-1 font-sans">
              Key milestones shaping Oxford Power Contracting from 2006 to 2026.
            </p>
          </motion.div>

          <motion.div 
            variants={isMobile ? undefined : timelineContainerVariant}
            initial={isMobile ? undefined : "hidden"}
            whileInView={isMobile ? undefined : "visible"}
            viewport={isMobile ? undefined : { amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                variants={isMobile ? mobileTimelineCardVariant : timelineCardVariant}
                initial={isMobile ? "mobileHidden" : undefined}
                whileInView={isMobile ? "mobileVisible" : undefined}
                viewport={isMobile ? { amount: 0.3, once: false, margin: "0px 0px -40px 0px" } : undefined}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white p-6 border border-gray-200 shadow-sm relative hover:border-[#d4a843] transition-colors will-change-transform"
              >
                <div className="font-heading text-4xl font-bold text-[#d4a843] mb-2 leading-none">
                  {item.year}
                </div>
                <h3 className="font-heading text-base font-bold text-[#333333] mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Certifications & Statutory Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          className="max-w-3xl mb-12"
        >
          <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
            Accredited Standards
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#333333] uppercase tracking-tight">
            Registrations & Certifications
          </h2>
          <p className="text-gray-600 text-sm font-sans">
            Audited and certified by leading UAE municipal departments and global standards institutes.
          </p>
        </motion.div>

        <motion.div 
          variants={scaleUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white p-6 border border-gray-200 shadow-sm hover:border-[#d4a843] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono text-zinc-600 bg-gray-100 px-2.5 py-1 border border-gray-200">
                    {cert.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] bg-[#d4a843] px-2.5 py-0.5">
                    {cert.badge}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#333333] uppercase mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 font-sans">
                  Issued By: <strong className="text-zinc-800">{cert.issuedBy}</strong> ({cert.year})
                </p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-[#333333] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#d4a843]" />
                <span>Verified Active Registration</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. Executive Leadership & Engineering Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          className="max-w-3xl mb-12"
        >
          <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
            Executive Leadership
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#333333] uppercase tracking-tight">
            Meet the Engineering Directors
          </h2>
          <p className="text-gray-600 text-sm font-sans">
            Over 80 collective years of Gulf construction and electro-mechanical leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-gray-200 shadow-sm hover:border-[#d4a843] transition-all group"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-900">
              <SafeImage
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-500"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-widest block">
                    {member.experience}
                  </span>
                  <p className="font-heading text-base font-bold uppercase leading-tight">
                    {member.name}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#d4a843]">
                  {member.role}
                </p>
                <p className="text-[11px] text-gray-500 font-sans">
                  {member.qualification}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed pt-1 font-sans">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Contact CTA - Geometric Balance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          className="bg-[#333333] text-white p-8 sm:p-14 border border-zinc-700 shadow-xl"
        >
          <div className="w-12 h-1 bg-[#d4a843] mb-4"></div>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase mb-3">
            Partner With a 20-Year UAE Construction Leader
          </h3>
          <p className="text-zinc-300 text-sm max-w-xl mb-6 font-sans">
            Get in touch with our commercial engineering team to discuss tender documents, joint ventures, or DEWA substation connections.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold uppercase text-xs tracking-widest transition-all cursor-pointer shadow-md"
            >
              Get a Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-zinc-500 font-bold uppercase text-xs tracking-widest transition-all cursor-pointer"
            >
              Visit Sharjah Headquarters
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};