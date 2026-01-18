import React, { useRef, useEffect, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Clouds } from './Clouds';
import { gsap } from 'gsap';
import { Group } from 'three';

interface SceneProps {
  cloudsPosition?: 'normal' | 'footer';
}

// Memoized clouds component - NEVER re-renders, preserving the same cloud shapes
const StaticClouds = memo(() => (
  <Clouds opacity={0.9} speed={0} color="#ffffff" />
), () => true); // Custom comparison: always return true = never re-render
StaticClouds.displayName = 'StaticClouds';

// Animated clouds wrapper - moves Y position for page transitions
// The clouds inside never re-render, only the group's Y position changes
const AnimatedClouds = memo<{ isFooterMode: boolean }>(({ isFooterMode }) => {
  const groupRef = useRef<Group>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const initializedRef = useRef(false);
  const prevModeRef = useRef(isFooterMode);

  useEffect(() => {
    if (!groupRef.current) return;

    // Set initial position on mount (no animation)
    if (!initializedRef.current) {
      initializedRef.current = true;
      groupRef.current.position.y = isFooterMode ? -30 : 0;
      return;
    }

    // Only animate if mode actually changed
    if (prevModeRef.current === isFooterMode) return;
    prevModeRef.current = isFooterMode;

    // Kill any existing animation
    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    // Animate position - slow and smooth
    const targetY = isFooterMode ? -30 : 0;
    tweenRef.current = gsap.to(groupRef.current.position, {
      y: targetY,
      duration: 5,
      ease: 'power2.inOut'
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [isFooterMode]);

  return (
    <group ref={groupRef}>
      <StaticClouds />
    </group>
  );
});
AnimatedClouds.displayName = 'AnimatedClouds';

// Main Scene component - memoized to prevent Canvas remounting
const Scene: React.FC<SceneProps> = memo(({ cloudsPosition = 'normal' }) => {
  const isFooterMode = cloudsPosition === 'footer';
  const gradientRef = useRef<HTMLDivElement>(null);
  const hasInitializedGradient = useRef(false);
  const gradientTweenRef = useRef<gsap.core.Tween | null>(null);

  // Animate gradient with GSAP for smooth transition
  // Two-color gradient only: blue to white (no bottom blue)
  useEffect(() => {
    if (!gradientRef.current) return;

    // Where white starts: 60% for home (more blue visible), 85% for blogs/about (more white)
    const targetVia = isFooterMode ? 85 : 60;

    // Set initial state without animation
    if (!hasInitializedGradient.current) {
      hasInitializedGradient.current = true;
      gradientRef.current.style.background = `linear-gradient(to bottom, #a0c4ff 0%, #ffffff ${targetVia}%)`;
      return;
    }

    // Kill existing gradient animation
    if (gradientTweenRef.current) {
      gradientTweenRef.current.kill();
    }

    // Get current via value
    const currentVia = isFooterMode ? 60 : 85;
    const obj = { via: currentVia };

    gradientTweenRef.current = gsap.to(obj, {
      via: targetVia,
      duration: 5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (gradientRef.current) {
          // Two-color gradient: blue to white only
          gradientRef.current.style.background = `linear-gradient(to bottom, #a0c4ff 0%, #ffffff ${obj.via}%)`;
        }
      }
    });

    return () => {
      if (gradientTweenRef.current) gradientTweenRef.current.kill();
    };
  }, [isFooterMode]);

  return (
    <div
      ref={gradientRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `linear-gradient(to bottom, #a0c4ff 0%, #ffffff 60%)`
      }}
    >

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] z-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Canvas - clouds always visible, only Y position animates. Hidden on tablet/mobile for performance and clarity */}
      <div className="absolute inset-0 hidden lg:block">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <fog attach="fog" args={['#ffffff', 10, 60]} />
          <ambientLight intensity={0.9} color="#ffffff" />
          <directionalLight position={[0, 10, 5]} intensity={1.2} color="#ffffff" />

          {/* Clouds - only Y position changes during transitions */}
          <AnimatedClouds isFooterMode={isFooterMode} />
        </Canvas>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 via-transparent to-blue-400/10 mix-blend-overlay pointer-events-none z-10" />
    </div>
  );
});
Scene.displayName = 'Scene';

export default Scene;