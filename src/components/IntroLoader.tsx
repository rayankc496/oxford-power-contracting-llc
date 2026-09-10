import React, { useState, useEffect, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);

  // Synchronize progress to ref for watchdog check
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. We start the video as muted to guarantee the browser allows immediate autoplay.
    // This prevents the video from freezing or failing to play.
    video.muted = true;
    video.setAttribute('muted', '');
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatically attempt to unmute after exactly 300ms of starting the video
        setTimeout(() => {
          if (video) {
            video.muted = false;
            video.removeAttribute('muted');
            
            // Check if unmuting caused it to pause
            if (video.paused) {
              video.muted = true;
              video.setAttribute('muted', '');
              video.play().catch(e => console.error("Muted replay failed on 300ms timeout:", e));
            } else {
              console.log("Audio successfully unmuted automatically at 300ms!");
            }
          }
        }, 300);
      }).catch((err) => {
        console.log("Initial autoplay play() call was blocked. Re-trying muted.", err);
        video.muted = true;
        video.setAttribute('muted', '');
        video.play().catch(e => console.error("Muted autoplay retry failed:", e));
      });
    }

    // 2. Unmute on ANY interaction with the screen to play sound as early as possible
    const handleGestureToUnmute = () => {
      if (video) {
        video.muted = false;
        video.removeAttribute('muted');
        // Re-call play in case it was paused
        if (video.paused) {
          video.play().catch(e => console.log("Failed to play on gesture:", e));
        }
      }
    };

    window.addEventListener('pointerdown', handleGestureToUnmute);
    window.addEventListener('click', handleGestureToUnmute);
    window.addEventListener('touchstart', handleGestureToUnmute);
    window.addEventListener('keydown', handleGestureToUnmute);

    // 3. --- WATCHDOG FOR ULTRA-RELIABILITY ---
    // If the video is paused, blocked, heavy, or not advancing, the watchdog drives progress
    // so the loading page never hangs.
    let lastTime = 0;
    const watchdogInterval = setInterval(() => {
      if (!video) return;

      const isVideoPlaying = video.currentTime > lastTime && !video.paused;
      lastTime = video.currentTime;

      if (!isVideoPlaying) {
        setProgress((prev) => {
          const next = prev + 1.4;
          if (next >= 100) {
            clearInterval(watchdogInterval);
            handleComplete();
            return 100;
          }
          return next;
        });
      }
    }, 100);

    // Safety timeout: loader ends after 8.5 seconds max
    const safetyTimeout = setTimeout(() => {
      clearInterval(watchdogInterval);
      handleComplete();
    }, 8500);

    return () => {
      window.removeEventListener('pointerdown', handleGestureToUnmute);
      window.removeEventListener('click', handleGestureToUnmute);
      window.removeEventListener('touchstart', handleGestureToUnmute);
      window.removeEventListener('keydown', handleGestureToUnmute);
      clearInterval(watchdogInterval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration && !video.paused) {
      const pct = (video.currentTime / video.duration) * 100;
      if (pct > progressRef.current) {
        setProgress(pct);
      }
    }
  };

  const handleComplete = () => {
    setProgress(100);
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 700); // matches transition-opacity duration-700
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-sm px-8 flex flex-col items-center">
        {/* Centered 1:1 aspect video with luxurious background */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 aspect-square rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl border border-neutral-800/40 mb-8">
          <video
            ref={videoRef}
            src="/oxfordlogo.mp4"
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            muted
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleComplete}
          />
        </div>

        {/* Loading progress counter text */}
        <div className="text-white/70 font-mono text-xs tracking-[0.2em] uppercase mb-3">
          Loading {Math.min(100, Math.floor(progress))}%
        </div>

        {/* Loading line progress bar */}
        <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-white transition-all duration-100 ease-out shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        {/* Brand identity subtext */}
        <div className="mt-4 text-neutral-500 font-sans text-[10px] tracking-widest uppercase">
          Oxford Power Contracting LLC
        </div>
      </div>
    </div>
  );
};
