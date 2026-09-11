import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { PageRoute, ContactFormData } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  ExternalLink,
  Copy
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface ContactPageProps {
  onShowToast: (msg: string) => void;
  isIntroComplete: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast, isIntroComplete }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'Construction Project Management',
    projectLocation: 'Sharjah, UAE',
    estimatedBudget: 'AED 500,000 - 2,000,000',
    timeline: 'Immediate (1-3 months)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email address required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid telephone number required (+971...)';
    if (!formData.message.trim()) errs.message = 'Please provide preliminary project details or requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast('Inquiry received! Our senior project director will contact you within 24 business hours.');
    }, 900);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*New Project Lead - Oxford Power Contracting LLC*\n\n` +
      `*Full Name:* ${formData.fullName || 'Prospective Client'}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Location:* ${formData.projectLocation}\n` +
      `*Estimated Budget:* ${formData.estimatedBudget}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Message:* ${formData.message || 'I would like to request an official consultation.'}`
    );
    window.open(`https://wa.me/971504181220?text=${text}`, '_blank');
    onShowToast('Directing to WhatsApp Business with pre-filled message...');
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    onShowToast('Office address copied to clipboard!');
  };

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
    <div className="pt-24 sm:pt-28 pb-20 space-y-16">
      <Helmet>
        <title>Contact Oxford Power Contracting LLC | UAE General Contracting Office</title>
        <meta name="description" content="Contact Oxford Power Contracting LLC (DEWA Registered Contractor) in Sharjah, UAE. Call +971 50 418 1220 or email INFO@OXFORDPWC.COM for tender inquiries, civil engineering, and MEP projects." />
        <meta name="keywords" content="contact Oxford Power Contracting, construction contractor Sharjah phone, DEWA contractor contact, MEP tender inquiry UAE, Oxford Building Contracting location" />
        <link rel="canonical" href="https://oxford-power-contracting-llc.vercel.app/?page=contact" />
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
              Sharjah Headquarters • UAE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#333333]">
              Contact & <span className="text-[#d4a843]">Tendering Desk</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans">
              Connect directly with our senior estimators, civil engineers, and DEWA regulatory liaison officers. We are available for site meetings, tender submissions, and feasibility reviews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Grid (Contact Info Left + Form Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Office Details */}
          <motion.div 
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
                <div>
                  <div className="w-10 h-1 bg-[#d4a843] mb-2"></div>
                  <h2 className="font-heading text-2xl font-bold text-[#333333] uppercase">
                    Corporate Office
                  </h2>
                  <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-wider block">
                    Oxford Building Contracting L.L.C.
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={COMPANY_INFO.logo}
                    alt="Oxford Building Contracting Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#333333] text-[#d4a843] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Address</span>
                    <p className="font-medium text-gray-800 leading-snug mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={copyAddressToClipboard}
                        className="text-xs text-[#d4a843] font-bold uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </button>
                      <span className="text-gray-300">•</span>
                      <a
                        href={COMPANY_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-700 hover:text-[#d4a843] font-bold uppercase tracking-wider flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>View on Map</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#333333] text-[#d4a843] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Direct Phone</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="font-bold text-[#333333] hover:text-[#d4a843] text-base leading-snug mt-0.5 block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-gray-500">Commercial tenders & urgent inquiries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <WhatsAppIcon className="w-10 h-10 shrink-0 mt-0.5" rectFill="#333333" pathFill="#d4a843" rx={0} ry={0} />
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">WhatsApp Direct</span>
                    <a
                      href={COMPANY_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#25D366] hover:underline text-xs uppercase tracking-wider leading-snug mt-0.5 inline-flex items-center gap-1"
                    >
                      <span>Chat on WhatsApp (+971 50 418 1220)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#333333] text-[#d4a843] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-semibold text-gray-800 hover:text-[#d4a843] text-sm leading-snug mt-0.5 block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 bg-[#333333] text-[#d4a843] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-gray-400 uppercase tracking-widest block">Working Hours</span>
                    <p className="text-gray-700 font-semibold">
                      Monday – Thursday: 07:00 AM – 05:00 PM
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Saturday: 07:00 AM – 05:00 PM
                    </p>
                    <p className="text-red-600 font-semibold">
                      Friday & Sunday: Closed (Emergency on-call only)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust box - Charcoal Geometric Box */}
            <div className="bg-[#333333] text-white p-6 border border-zinc-700 space-y-3 shadow-md">
              <div className="w-8 h-1 bg-[#d4a843] mb-1"></div>
              <div className="flex items-center gap-2 text-[#d4a843]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-heading text-base font-bold uppercase tracking-wider">
                  DEWA Statutory Accreditation
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Registered under DEWA contractor certification for substation works, low-to-medium voltage electrical engineering, and civil defence integrations.
              </p>
            </div>
          </motion.div>

          {/* Right: Comprehensive Lead Capture Form */}
          <motion.div 
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 sm:p-10 border border-gray-200 shadow-sm">
              <div className="mb-8 border-b border-gray-200 pb-4">
                <div className="w-12 h-1 bg-[#d4a843] mb-3"></div>
                <span className="text-[10px] font-bold text-[#d4a843] uppercase tracking-widest">
                  Lead & RFP Submission
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#333333] uppercase mt-1">
                  Request a Project Consultation
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 font-sans">
                  Fill in the project details below to receive a formal quotation or coordinate tender documents.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#d4a843]/20 text-[#d4a843] flex items-center justify-center mx-auto border border-[#d4a843]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="w-12 h-1 bg-[#d4a843] mx-auto mb-2"></div>
                  <h3 className="font-heading text-2xl font-bold text-[#333333] uppercase">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto font-sans">
                    Thank you, <strong className="text-[#d4a843] font-bold">{formData.fullName}</strong>. Your project specifications have been dispatched to our engineering estimating department. We will revert with a formal assessment.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase text-xs tracking-wider px-6 py-3 flex items-center gap-2.5 cursor-pointer shadow-md"
                    >
                      <WhatsAppIcon className="w-5 h-5 shrink-0" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-gray-100 hover:bg-gray-200 text-[#333333] text-xs font-bold uppercase tracking-wider px-6 py-3 cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eng. Tariq Al Nuaimi"
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Al Majaz Developments"
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.ae"
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Phone Number (+971) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 418 1220"
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Turnkey Full Contract (Civil + MEP)">
                          Turnkey Full Contract (Civil + MEP)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Project Location
                      </label>
                      <select
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      >
                        <option value="Sharjah, UAE">Sharjah (Industrial / Residential / Waterfront)</option>
                        <option value="Dubai, UAE">Dubai (Business Bay, Jumeirah, Deira, DAFZA)</option>
                        <option value="Abu Dhabi, UAE">Abu Dhabi</option>
                        <option value="Ajman / Northern Emirates">Ajman / Northern Emirates</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      >
                        <option value="Under AED 500,000">Under AED 500,000</option>
                        <option value="AED 500,000 - 2,000,000">AED 500,000 - 2,000,000</option>
                        <option value="AED 2,000,000 - 10,000,000">AED 2,000,000 - 10,000,000</option>
                        <option value="AED 10,000,000+">AED 10,000,000+ (Major Tender)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                        Expected Mobilization
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                      >
                        <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                        <option value="3-6 months">Within 3-6 months</option>
                        <option value="Tendering Phase (6+ months)">Tendering Phase (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#333333] mb-1">
                      Project Description / Tendering Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please indicate plot number, built-up area (sq.ft), structural floors, DEWA load requirements, or municipal status..."
                      className="w-full bg-gray-50 border border-gray-300 px-3.5 py-2.5 text-sm text-[#333333] focus:outline-none focus:border-[#d4a843]"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold py-3.5 px-6 uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Tender Details...' : 'Submit Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="bg-[#333333] hover:bg-[#222222] text-white font-bold uppercase text-xs tracking-wider py-3.5 px-6 flex items-center justify-center gap-2.5 transition-all cursor-pointer border border-zinc-700 shadow-md"
                    >
                      <WhatsAppIcon className="w-5 h-5 shrink-0" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Google Maps Embed (Oxford Building Contracting - Faisal 2, Sharjah, UAE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white border border-gray-200 shadow-sm"
        >
          <div className="p-6 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="w-8 h-1 bg-[#d4a843] mb-2"></div>
              <h3 className="font-heading text-xl font-bold text-[#333333] uppercase">
                Sharjah Office Location
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 font-sans">
                {COMPANY_INFO.address}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#333333] bg-[#d4a843] hover:bg-[#c49833] px-5 py-2.5 transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#333333] hover:bg-black px-5 py-2.5 transition-colors border border-zinc-700 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4a843]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="h-[420px] w-full relative bg-zinc-200">
            <iframe
              title="Oxford Building Contracting Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.912!2d55.3888!3d25.3488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bc4fad888e7%3A0x5841ee92f4c5a053!2sOxford+building+contracting!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};