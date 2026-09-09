import React, { useEffect } from 'react';
import { SafeImage } from './SafeImage';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface LightboxModalProps {
  project: ProjectItem | null;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, currentIndex]);

  if (!isOpen || !project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        id="lightbox-close-btn"
        className="absolute top-5 right-5 z-50 p-2.5 bg-[#333333] text-white hover:text-[#d4a843] border border-zinc-700 transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative w-full max-w-6xl h-[85vh] mx-4 flex flex-col justify-between">
        {/* Top Details */}
        <div className="bg-[#333333] border border-zinc-700 px-6 py-3 flex flex-wrap items-center justify-between text-zinc-300 text-xs sm:text-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-1 bg-[#d4a843]"></div>
            <span className="text-[#d4a843] text-xs font-bold tracking-widest uppercase">
              {project.category}
            </span>
            <span className="text-white font-heading text-lg font-bold uppercase">
              {project.title}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-zinc-400 mt-2 sm:mt-0">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#d4a843]" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#d4a843]" />
              {project.year}
            </span>
            <span className="text-[#d4a843] font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Center Image View with Nav Buttons */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black border border-zinc-800">
          <SafeImage
            src={images[currentIndex]}
            alt={`${project.title} - View ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain select-none"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                id="lightbox-prev-btn"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-[#333333]/90 text-white hover:text-[#d4a843] border border-zinc-700 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                id="lightbox-next-btn"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#333333]/90 text-white hover:text-[#d4a843] border border-zinc-700 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnails */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-3 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-14 h-14 overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  currentIndex === idx ? 'border-[#d4a843] scale-105' : 'border-zinc-700 opacity-60 hover:opacity-100'
                }`}
              >
                <SafeImage src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
