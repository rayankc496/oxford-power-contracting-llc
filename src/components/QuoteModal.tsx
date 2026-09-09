import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Building2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ContactFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onShowToast: (msg: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  onShowToast,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || 'Construction Project Management',
    projectLocation: 'Sharjah, UAE',
    estimatedBudget: 'AED 500,000 - 2,000,000',
    timeline: 'Immediate (1-3 months)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent background body scroll when modal is open & restore on close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid UAE contact number required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onShowToast('Your tender quote inquiry has been logged! Our senior engineering estimator will contact you within 24 hours.');
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*New Quote Request - Oxford Power Contracting LLC*\n` +
      `*Name:* ${formData.fullName || 'Prospective Client'}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Location:* ${formData.projectLocation}\n` +
      `*Budget Range:* ${formData.estimatedBudget}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Message:* ${formData.message || 'Please provide a formal quote/consultation.'}`
    );
    window.open(`https://wa.me/971504181220?text=${text}`, '_blank');
    onShowToast('Launching official WhatsApp chat with Oxford Engineering Desk...');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 flex flex-col items-center justify-start animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#333333] border border-zinc-600 shadow-2xl p-5 sm:p-8 text-white mt-auto mb-6 max-h-[92vh] flex flex-col min-h-[200px]">
        {/* Sticky Header Bar for guaranteed Close button visibility */}
        <div className="sticky top-0 z-50 bg-[#333333] pb-3 mb-2 border-b border-zinc-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-[#d4a843]/50">
              <img
                src={COMPANY_INFO.logo}
                alt="Oxford Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#d4a843] uppercase tracking-widest block leading-tight">
                DEWA Registered Contractor
              </span>
              <span className="text-xs text-zinc-200 font-bold uppercase tracking-wider block font-heading leading-tight">
                Oxford Power Contracting LLC
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            id="modal-close-btn"
            className="p-2 bg-zinc-700 hover:bg-[#d4a843] text-white hover:text-[#1e1e1e] transition-colors cursor-pointer border border-zinc-600 rounded-sm shadow-md flex items-center gap-1 text-xs font-bold uppercase"
            aria-label="Close Modal"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body Container */}
        <div className="overflow-y-auto pr-1 flex-1 space-y-4 pt-2">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#d4a843]/20 border border-[#d4a843] text-[#d4a843] flex items-center justify-center mx-auto rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="w-12 h-1 bg-[#d4a843] mx-auto mb-2"></div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                Quote Request Submitted Successfully
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto font-sans">
                Thank you, <span className="text-[#d4a843] font-bold">{formData.fullName}</span>. Your project inquiry has been assigned to our Chief Estimating Engineer. You will receive a preliminary consultation by email and phone.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase text-xs tracking-wider px-6 py-3 flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Forward via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-wider px-6 py-3 cursor-pointer border border-zinc-700"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                  Request a Formal Construction Quote
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-sans">
                  Share your structural, MEP, or turnkey requirements for detailed bill of quantities (BOQ) review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eng. Tariq Al Nuaimi"
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Company / Developer Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Al Majaz Properties LLC"
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.ae"
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
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
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Project Location in UAE
                    </label>
                    <select
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    >
                      <option value="Sharjah, UAE">Sharjah (All Municipal Zones)</option>
                      <option value="Dubai, UAE">Dubai (Commercial / Residential)</option>
                      <option value="Abu Dhabi, UAE">Abu Dhabi</option>
                      <option value="Ajman / Northern Emirates">Ajman / Northern Emirates</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Estimated Budget (AED)
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    >
                      <option value="Under AED 500,000">Under AED 500,000</option>
                      <option value="AED 500,000 - 2,000,000">AED 500,000 - 2,000,000</option>
                      <option value="AED 2,000,000 - 10,000,000">AED 2,000,000 - 10,000,000</option>
                      <option value="AED 10,000,000+ (Major Tender)">AED 10,000,000+ (Major Tender)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                    >
                      <option value="Immediate (1-3 months)">Immediate Mobilization (1-3 months)</option>
                      <option value="3-6 months">Within 3-6 months</option>
                      <option value="6-12 months">Planning stage (6-12 months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">
                    Project Scope / Special Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide approximate built-up area (sq.ft), structural floors (G+), DEWA load requirements, or municipal status..."
                    className="w-full bg-[#262626] border border-zinc-600 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4a843]"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    id="modal-submit-btn"
                    className="w-full sm:flex-1 bg-[#d4a843] hover:bg-[#c49833] text-[#1e1e1e] font-bold py-3.5 px-6 uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Transmitting Request...' : 'Submit Tendering Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    id="modal-whatsapp-quick-btn"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase text-xs tracking-wider py-3.5 px-5 flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <p className="text-[10px] text-zinc-400 text-center pt-1 font-sans">
                  Your tender documents and specifications are safeguarded under strict UAE non-disclosure and commercial compliance standards.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
