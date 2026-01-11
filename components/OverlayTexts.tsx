import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AFFIRMATIONS } from '../constants';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const OverlayTexts: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Create a master timeline that spans the entire scrollable height
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body, // The body has the height
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Soft catch-up for that "weighty" feel
      },
    });

    // Total duration of the timeline can be arbitrary (e.g., 100).
    // We map the affirmations to slots within this timeline.
    const totalDuration = 100;
    const itemsCount = AFFIRMATIONS.length;
    const segmentDuration = totalDuration / itemsCount;
    
    // Customize overlap. 
    // If overlap is 0.5, the next one starts when the current one is halfway done.
    const overlapFactor = 0.6; 

    AFFIRMATIONS.forEach((_, i) => {
      const el = textsRef.current[i];
      if (!el) return;

      const startTime = i * segmentDuration;
      
      // Phase 1: Fade In & Slight Scale (Approach)
      // Starts invisible and slightly small
      tl.fromTo(
        el,
        { 
          opacity: 0, 
          scale: 0.8, 
          z: -100, // Hint of 3D transform for GPU 
          filter: 'blur(10px)',
          y: 20 // Slight rise
        },
        { 
          opacity: 1, 
          scale: 1, 
          z: 0,
          filter: 'blur(0px)',
          y: 0,
          duration: segmentDuration * 0.4, // 40% of slot to fully appear
          ease: "power2.out"
        },
        startTime // Insert at start time
      );

      // Phase 2: Hold/Slow Drift (Readability)
      tl.to(
        el,
        {
          scale: 1.15, // Slightly increased from 1.1 for more presence
          duration: segmentDuration * 0.3, // 30% of slot stay readable
          ease: "none" // Linear movement for the "hold" phase
        },
        startTime + (segmentDuration * 0.4)
      );

      // Phase 3: Scale Up & Fade Out (Move through)
      // Becomes uncomfortably large and fades
      tl.to(
        el,
        {
          opacity: 0,
          scale: 2.5,
          filter: 'blur(20px)',
          duration: segmentDuration * 0.6, // Longer fade out for smoothness
          ease: "power2.in", // Accelerate out
        },
        startTime + (segmentDuration * 0.7) - (segmentDuration * overlapFactor * 0.5) 
        // Start fading out while next one is appearing
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"
    >
      {AFFIRMATIONS.map((text, i) => (
        <h1
          key={i}
          ref={(el) => (textsRef.current[i] = el)}
          className="absolute text-center px-4 w-full max-w-6xl font-serif-display text-5xl md:text-7xl lg:text-8xl text-white/90 drop-shadow-lg leading-tight opacity-0"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {text}
        </h1>
      ))}
      
      {/* Optional: Scroll prompt at the very start */}
      <div className="absolute bottom-10 left-0 right-0 text-center animate-pulse opacity-50 font-sans-light text-sm tracking-widest text-white">
        SCROLL SLOWLY
      </div>
    </div>
  );
};

export default OverlayTexts;