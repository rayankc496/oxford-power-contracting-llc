import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  delay: number;
}

export const ParticleBackground: React.FC<{ className?: string; count?: number }> = ({
  className = '',
  count = 50
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        setDimensions({ width: canvas.width, height: canvas.height });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const newParticles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * (dimensions.width || 1920),
      y: Math.random() * (dimensions.height || 1080),
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      delay: Math.random() * 1000,
    }));
    setParticles(newParticles);

    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particles.forEach((p, i) => {
        const newX = p.x + p.speedX;
        const newY = p.y + p.speedY;

        // Wrap around
        const wrappedX = newX < 0 ? dimensions.width : newX > dimensions.width ? 0 : newX;
        const wrappedY = newY < 0 ? dimensions.height : newY > dimensions.height ? 0 : newY;

        ctx.beginPath();
        ctx.arc(wrappedX, wrappedY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${p.opacity})`;
        ctx.fill();

        particles[i] = { ...p, x: wrappedX, y: wrappedY };
      });

      setParticles([...particles]);
      animationRef.current = requestAnimationFrame(animate);
    };

    if (dimensions.width > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions.width, dimensions.height, count, particles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

// Floating geometric shapes
export const FloatingShapes: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shapes = [
    { type: 'triangle', size: 60, x: 10, y: 15, rotation: 0, speed: 0.3 },
    { type: 'square', size: 40, x: 85, y: 25, rotation: 45, speed: -0.2 },
    { type: 'circle', size: 80, x: 50, y: 80, rotation: 0, speed: 0.15 },
    { type: 'triangle', size: 30, x: 90, y: 70, rotation: 180, speed: 0.4 },
    { type: 'square', size: 50, x: 20, y: 60, rotation: 30, speed: -0.25 },
    { type: 'circle', size: 35, x: 70, y: 10, rotation: 0, speed: 0.2 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ rotate: shape.rotation }}
          animate={{ rotate: shape.rotation + 360 }}
          transition={{ duration: 20 / Math.abs(shape.speed), repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            opacity: 0.06,
            transformOrigin: 'center center',
          }}
        >
          {shape.type === 'triangle' && (
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: 'linear-gradient(135deg, #d4a843, #c49833)',
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="w-full h-full border-[1px]"
              style={{ borderColor: '#d4a843', borderStyle: 'solid' }}
            />
          )}
          {shape.type === 'circle' && (
            <div
              className="w-full h-full rounded-full border-[1px]"
              style={{ borderColor: '#d4a843', borderStyle: 'solid' }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Magnetic button effect
export const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}> = ({ children, className = '', onClick, strength = 0.3 }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
};

// Scroll progress indicator
export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollTop / docHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none"
      style={{ background: 'linear-gradient(90deg, #d4a843, #c49833)', transformOrigin: 'left center' }}
      animate={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    />
  );
};

// Text reveal on scroll (per word/char)
export const TextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ children, className = '', delay = 0, stagger = 0.03 }) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
          style={{ display: 'inline-block' }}
        >
          {word}{i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
};

// Glowing orb background
export const GlowingOrbs: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 0 }}>
      <motion.div
        className="absolute rounded-full blur-[150px] opacity-20"
        style={{ width: '600px', height: '600px', background: '#d4a843', top: '10%', left: '-10%' }}
        initial={{ scale: 0.5 }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-[150px] opacity-15"
        style={{ width: '400px', height: '400px', background: '#c49833', bottom: '10%', right: '-10%' }}
        initial={{ scale: 0.5 }}
        animate={{ scale: [1, 1.15, 1], x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px] opacity-10"
        style={{ width: '300px', height: '300px', background: '#d4a843', top: '50%', left: '50%' }}
        initial={{ scale: 0.5 }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
    </div>
  );
};

// Parallax scroll component
export const ParallaxLayer: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = (viewportCenter - elementCenter) * speed;
      setOffset(distance);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: offset }}
    >
      {children}
    </motion.div>
  );
};

// Shimmer text effect
export const ShimmerText: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number;
}> = ({ children, className = '', speed = 2 }) => {
  return (
    <motion.span
      className={`relative inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #d4a843, #fff, #d4a843)',
        backgroundSize: '200% 100%',
      }}
      animate={{ backgroundPositionX: ['0%', '200%', '0%'] }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  );
};

// Staggered container for lists
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ children, className = '', staggerDelay = 0.1, direction = 'up' }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, {
              variants: itemVariants,
              key: child.key || index,
            })
          : child
      )}
    </motion.div>
  );
};
// Countdown badge pulse
export const CountdownBadge: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg'
}> = ({ className = '', size = 'md' }) => {
  const sizes = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-14 h-14' };
  const pulseDuration = { sm: '2s', md: '3s', lg: '4s' };

  return (
    <motion.div
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#d4a843] text-[10px] font-bold uppercase tracking-widest shadow-sm ${sizes[size]}`}
      style={{ background: 'rgba(212,168,67,0.1)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <span className="text-[#d4a843]">{size === 'md' && '100%'}</span>
      <span className="text-zinc-300 text-[8px]">{size === 'md' && 'DEWA Compliant'}</span>
      <motion.span
        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#d4a843]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: pulseDuration[size], repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

// Zoom-in image reveal on hover
export const ZoomImageReveal: React.FC<{
  className?: string;
  speed?: number
}> = ({ className = '', speed = 0.6 }) => {
  return (
    <motion.div
      className={`relative overflow-hidden group bg-zinc-900 ${className}`}
    >
      <motion.img
        className="w-full h-full object-cover transition-transform duration-700"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30, delay: 0 }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
};
