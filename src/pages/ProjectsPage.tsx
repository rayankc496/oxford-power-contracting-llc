import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { PageRoute, ProjectItem } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/companyData';
import { SafeImage } from '../components/SafeImage';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Maximize2, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenLightbox: (project: ProjectItem) => void;
  onOpenQuoteModal: () => void;
  isIntroComplete: boolean;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenQuoteModal,
  isIntroComplete,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Commercial', 'Residential', 'Healthcare', 'Hospitality', 'Industrial'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

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
    hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20">
      <Helmet>
        <title>Projects & Portfolio | Oxford Power Contracting LLC Landmarks UAE</title>
        <meta name="description" content="Browse landmark construction projects by Oxford Power Contracting LLC across Dubai, Sharjah, and Abu Dhabi. Commercial towers, healthcare facilities, hospitality, residential, and industrial developments." />
        <meta name="keywords" content="construction projects UAE, landmark buildings Dubai, commercial tower Sharjah, healthcare construction UAE, hospitality projects Abu Dhabi, residential developments UAE, industrial construction projects" />
        <link rel="canonical" href="https://oxford-power-contracting-llc.vercel.app/?page=projects" />
      </Helmet>
      {/* 1. Geometric Header Banner */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            variants={headingRevealVariant}
            initial={isIntroComplete ? "hidden" : "visible"}
            whileInView={isIntroComplete ? "visible" : undefined}
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-3xl space-y-4"
          >
            <div className="w-20 h-1 bg-[#d4a843] mb-6"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Iconic Landmark Portfolio • UAE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#333333]">
              Projects & <span className="text-[#d4a843]">Portfolio</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans">
              Explore our landmark construction track record spanning Commercial Towers, Specialized Hospitals, Luxury Waterfront Resorts, Signature Residential Enclaves, and High-Bay Logistics Hubs across the Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Engineering Progression Spotlight: Al Majaz Waterfront */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white border border-gray-200 p-8 sm:p-10 shadow-sm"
        >
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
              Engineering Progression
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#333333] uppercase tracking-tight">
              Featured Project: Al Majaz Waterfront Commercial Tower
            </h2>
            <p className="text-gray-600 text-sm font-sans">
              From complex underground piling and dewatering to turnkey skyscraper energization and DEWA substation commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phase 1: Substructure */}
            <div className="space-y-4">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900 border border-gray-200">
                <SafeImage
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop"
                  alt="Excavation and Substructure Piling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#222222] text-[#d4a843] text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-zinc-700">
                  Phase 1: Substructure & Deep Piling
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-heading text-sm font-bold uppercase">Excavation, Shoring & Dewatering</p>
                  <p className="text-[11px] text-zinc-300">Continuous raft foundation pour complying with UAE seismic codes</p>
                </div>
              </div>
            </div>

            {/* Phase 2: Completed Landmark */}
            <div className="space-y-4">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900 border border-gray-200">
                <SafeImage
                  src="https://d3ob0s3rxbjyep.cloudfront.net/content/Business_Tower_20210123_1_eac08d6967_2b5f51d361.jpg?q=80&w=1200&auto=format&fit=crop"
                  alt="Handover and Full DEWA Energization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#d4a843] text-[#1e1e1e] text-[10px] font-bold uppercase tracking-widest px-3 py-1 font-sans">
                  Phase 2: Handover & DEWA Energized
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-heading text-sm font-bold uppercase">Turnkey Commercial Skyscraper</p>
                  <p className="text-[11px] text-zinc-300">Bespoke curtain walling, 24/7 central HVAC, and full municipal occupancy certificate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Category Filter & Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-200"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mr-2">Category:</span>
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
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Showing <strong className="text-[#333333]">{filteredProjects.length}</strong> Completed Projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-gray-200 hover:border-[#d4a843] shadow-sm transition-all flex flex-col justify-between group relative"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-zinc-900">
                  <SafeImage
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#333333] text-[10px] font-bold uppercase tracking-widest text-[#d4a843] px-3 py-1 border border-zinc-700">
                      {project.category}
                    </span>
                    {project.dewaApproved && (
                      <span className="bg-[#d4a843] text-[#1e1e1e] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                        DEWA Verified
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenLightbox(project)}
                    className="absolute bottom-3 right-3 bg-[#333333]/90 hover:bg-[#d4a843] hover:text-[#1e1e1e] text-white p-2.5 transition-colors cursor-pointer border border-zinc-600"
                    aria-label="View Image Lightbox"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d4a843]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#d4a843]" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#333333] uppercase leading-snug group-hover:text-[#c49833] transition-colors">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="text-xs text-gray-500 font-sans">
                      Client: <span className="font-bold text-[#333333]">{project.client}</span>
                    </p>
                  )}

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1 font-sans">
                    <strong className="text-zinc-800">Scope:</strong> {project.scope}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-sans">
                  Built-Up Area: <strong className="text-[#333333] font-bold">{project.areaSqFt}</strong>
                </span>
                <button
                  onClick={() => onOpenLightbox(project)}
                  className="font-bold uppercase tracking-wider text-[#d4a843] hover:text-[#333333] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Gallery ({project.gallery.length})</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Call to Action - Geometric Balance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-[#333333] text-white p-8 sm:p-14 border border-zinc-700 shadow-xl"
        >
          <div className="w-12 h-1 bg-[#d4a843] mb-4"></div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-3">
            Have a Similar Construction Project in Mind?
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mb-6 font-sans">
            Our engineering team provides comprehensive bill of quantities (BOQ) review and turnkey value engineering to optimize capital expense.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold uppercase text-xs tracking-widest transition-all cursor-pointer shadow-md"
          >
            Submit RFP / Tender Documents
          </button>
        </motion.div>
      </section>
    </div>
  );
};