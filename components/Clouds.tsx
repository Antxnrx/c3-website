import React, { memo } from 'react';
import { Cloud } from '@react-three/drei';
import { CloudProps } from '../types';

// Memoized to prevent re-renders which would regenerate random cloud shapes
export const Clouds: React.FC<CloudProps> = memo(({ 
  opacity = 0.8, 
  speed = 0.2, 
  color = '#ffffff'
}) => {
  // Subtle cloud turbulence - clouds stay in place but have gentle internal movement
  
  return (
    <group>
      {/* All clouds in fixed positions with subtle turbulence */}
      
      {/* Backdrop Wall - Anchors the depth */}
      <Cloud opacity={opacity * 0.5} speed={0.15} scale={5} segments={80} bounds={[90, 10, 10]} position={[0, -20, -50]} color={color} />

      {/* Mid Ground Left */}
      <Cloud opacity={opacity} speed={0.2} scale={4} segments={60} bounds={[40, 10, 10]} position={[-30, -10, -30]} color={color} />

      {/* Mid Ground Right */}
      <Cloud opacity={opacity} speed={0.2} scale={4} segments={60} bounds={[40, 10, 10]} position={[30, -10, -30]} color={color} />

      {/* Core Volume - Center Mass */}
      <Cloud opacity={opacity * 0.7} speed={0.18} scale={4.5} segments={80} bounds={[40, 10, 10]} position={[0, -25, -25]} color={color} />

      {/* Upper Surface / Horizon */}
      <Cloud opacity={opacity} speed={0.25} scale={3} segments={50} bounds={[30, 5, 5]} position={[-15, -14, -20]} color={color} />
      <Cloud opacity={opacity} speed={0.22} scale={3} segments={50} bounds={[30, 5, 5]} position={[15, -14, -20]} color={color} />
       
      {/* Center Horizon */}
      <Cloud opacity={opacity * 0.3} speed={0.15} scale={4} segments={40} bounds={[50, 10, 10]} position={[0, -19, -22]} color={color} />

      {/* Bottom Fillers */}
      <Cloud opacity={opacity * 0.6} speed={0.18} scale={5} segments={50} bounds={[45, 15, 15]} position={[-35, -22, -35]} color={color} />
      <Cloud opacity={opacity * 0.6} speed={0.18} scale={5} segments={50} bounds={[45, 15, 15]} position={[35, -22, -35]} color={color} />

      {/* Foreground Clouds */}
      <Cloud opacity={opacity * 0.4} speed={0.3} scale={2.5} segments={30} bounds={[20, 5, 5]} position={[-10, -16, -10]} color={color} />
      <Cloud opacity={opacity * 0.4} speed={0.28} scale={2.5} segments={30} bounds={[20, 5, 5]} position={[10, -18, -10]} color={color} />
      
      {/* Corner overlays */}
      <Cloud opacity={opacity * 0.2} speed={0.2} scale={4} segments={40} bounds={[30, 10, 10]} position={[35, -20, -25]} color={color} />
      <Cloud opacity={opacity * 0.2} speed={0.2} scale={4} segments={40} bounds={[30, 10, 10]} position={[-35, -20, -25]} color={color} />
    </group>
  );
});

// Display name for debugging
Clouds.displayName = 'Clouds';