import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageRoute, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { BackToTop } from './components/BackToTop';
import { LightboxModal } from './components/LightboxModal';
import { QuoteModal } from './components/QuoteModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { IntroLoader } from './components/IntroLoader';

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Always reset to home page and clean URL on initial page load / refresh
  useEffect(() => {
    // Force scroll to top immediately on mount/refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Clear URL params / hash so any refresh lands cleanly on home page
    if (window.location.search || window.location.hash) {
      window.history.replaceState({ page: 'home' }, '', window.location.pathname);
    }
    setCurrentPage('home');

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageRoute | null;
      if (pageParam && ['home', 'about', 'services', 'projects', 'contact'].includes(pageParam)) {
        setCurrentPage(pageParam);
      } else {
        const hash = window.location.hash.replace('#', '') as PageRoute;
        if (hash && ['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
          setCurrentPage(hash);
        } else {
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageRoute) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentPage(page);
    const newUrl = page === 'home' ? window.location.pathname : `?page=${page}`;
    window.history.pushState({ page }, '', newUrl);
  };

  const handleOpenQuoteModal = (service?: string) => {
    setPreselectedService(service || '');
    setIsQuoteModalOpen(true);
  };

  const handleOpenLightbox = (project: ProjectItem) => {
    setLightboxProject(project);
  };

  const handleIntroComplete = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenLightbox={handleOpenLightbox}
            isIntroComplete={isIntroComplete}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            isIntroComplete={isIntroComplete}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
            isIntroComplete={isIntroComplete}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenLightbox={handleOpenLightbox}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            isIntroComplete={isIntroComplete}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onShowToast={(msg) => setToastMessage(msg)}
            isIntroComplete={isIntroComplete}
          />
        );
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#333333] selection:bg-[#d4a843] selection:text-white relative">
      {!isIntroComplete && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky Quick Contact / Quote Trigger */}
      <StickyCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Back to Top */}
      <BackToTop />

      {/* Multi-column Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Image Lightbox Modal */}
      <LightboxModal
        project={lightboxProject}
        isOpen={!!lightboxProject}
        onClose={() => setLightboxProject(null)}
      />

      {/* Quote & Tendering Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
