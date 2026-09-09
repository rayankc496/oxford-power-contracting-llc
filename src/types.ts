export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Civil & Turnkey' | 'MEP & Systems' | 'Finishing & Fit-Out' | 'Life Safety';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  deliverables: string[];
  dewaCompliance?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Healthcare' | 'Hospitality' | 'Industrial';
  location: string;
  year: string;
  client?: string;
  scope: string;
  areaSqFt: string;
  heroImage: string;
  gallery: string[];
  featured?: boolean;
  dewaApproved?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectRef: string;
  rating: number;
  source: 'Google Reviews' | 'Emarat Directory' | 'Direct Client Reference';
}

export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
}

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  issuedBy: string;
  year: string;
  description: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'DEWA & Approvals' | 'Contracts & Tendering' | 'Execution & Safety' | 'General';
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectLocation: string;
  estimatedBudget: string;
  timeline: string;
  message: string;
}
