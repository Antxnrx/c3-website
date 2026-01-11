import React from 'react';

export interface CloudProps {
  opacity?: number;
  speed?: number;
  width?: number;
  depth?: number;
  segments?: number;
  color?: string;
  position?: [number, number, number];
}

export interface OverlayProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export interface AudioControlProps {
  url: string;
}