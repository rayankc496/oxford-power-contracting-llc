import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl space-y-3 ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
    >
      {tag && (
        <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <div className="w-12 h-1 bg-[#d4a843]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a843] block">
            {tag}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] uppercase tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
