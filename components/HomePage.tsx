import React from 'react';
import { NumberTicker } from './ui/number-ticker';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start px-8 md:px-16 lg:px-24 pt-40 md:pt-48">
      
      {/* Main Content Container - Single Row Layout */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        
        {/* C3 */}
        <div className="flex-shrink-0">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight">
            C3
          </h1>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-white/20"></div>
        
        {/* Description */}
        <div className="flex-1 max-w-md">
          <p className="text-sm font-light text-white/80 leading-relaxed tracking-wide text-center md:text-left">
            We are a community built around cloud computing, focused on learning, collaboration, and long-term growth. What started as a Google Cloud-centric initiative has evolved into a vendor-neutral space spanning AWS, GCP, Azure, and Oracle. Our goal is to create a space where individuals build real cloud skills together.
          </p>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-white/20"></div>
        
        {/* Stats */}
        <div className="flex flex-row gap-8 lg:gap-12">
          
          <div className="flex flex-col items-center">
            <NumberTicker value={700} suffix="+" className="text-2xl md:text-3xl font-light text-white tracking-tight" />
            <span className="text-[10px] font-light text-white/60 tracking-widest uppercase mt-1">members</span>
          </div>
          
          <div className="flex flex-col items-center">
            <NumberTicker value={8} suffix="+" className="text-2xl md:text-3xl font-light text-white tracking-tight" />
            <span className="text-[10px] font-light text-white/60 tracking-widest uppercase mt-1">contributors</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-light text-white tracking-tight">Global</span>
            <span className="text-[10px] font-light text-white/60 tracking-widest uppercase mt-1">reach</span>
          </div>
          
        </div>
        
      </div>
      
      {/* Powered by */}
      <div className="mt-16 text-center">
        <span className="text-xs font-light text-white/50 tracking-wide">powered by </span>
        <a href="https://aexiz.com" target="_blank" rel="noopener noreferrer" className="text-xs font-light text-white/70 tracking-wide hover:text-white transition-colors">Aexiz Solutions</a>
      </div>
      
    </div>
  );
};

export default HomePage;