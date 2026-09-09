import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  fallbackSrc, 
  src, 
  alt, 
  className,
  priority = false,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          {...props}
          src={fallbackSrc}
          alt={alt}
          className={className}
          referrerPolicy="no-referrer"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          onLoad={() => setIsLoaded(true)}
        />
      );
    }
    return (
      <div className={`bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center p-4 text-center ${className || ''}`}>
        <Building2 className="w-8 h-8 text-[#d4a843] mb-2 opacity-60" />
        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{alt || 'Oxford Project'}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={`${className || ''} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      referrerPolicy="no-referrer"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
    />
  );
};