import React from 'react';
import { NumberTicker } from './ui/number-ticker';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 pt-32 md:pt-40 lg:pt-48">

      {/* Main Content Container - Single Row Layout on Desktop, Column on Tablet/Mobile */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-24">

        {/* C3 */}
        <div className="flex-shrink-0">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-[#000000a3] tracking-tight">
            C3
          </h1>
        </div>

        {/* Description */}
        <div className="flex-1 max-w-md">
          <p className="text-sm font-light text-[#000000a3] leading-relaxed tracking-wide text-center lg:text-left">
            We are a community built around cloud computing, focused on learning, collaboration, and long-term growth. What started as a Google Cloud-centric initiative has evolved into a vendor-neutral space spanning AWS, GCP, Azure, and Oracle. Our goal is to create a space where individuals build real cloud skills together.
          </p>
        </div>

        {/* Divider - Only on desktop */}
        <div className="hidden lg:block w-px h-32 bg-[#000000a3]/30"></div>

        {/* Stats - Wrapped on tablet/mobile */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-12">

          <div className="flex flex-col items-center min-w-[80px]">
            <NumberTicker value={700} suffix="+" className="text-2xl md:text-3xl lg:text-3xl font-light text-[#000000a3] tracking-tight" />
            <span className="text-[10px] font-light text-[#000000a3]/70 tracking-widest uppercase mt-1">members</span>
          </div>

          <div className="flex flex-col items-center min-w-[80px]">
            <NumberTicker value={8} suffix="+" className="text-2xl md:text-3xl lg:text-3xl font-light text-[#000000a3] tracking-tight" />
            <span className="text-[10px] font-light text-[#000000a3]/70 tracking-widest uppercase mt-1">contributors</span>
          </div>

          <div className="flex flex-col items-center min-w-[80px]">
            <span className="text-2xl md:text-3xl lg:text-3xl font-light text-[#000000a3] tracking-tight">Global</span>
            <span className="text-[10px] font-light text-[#000000a3]/70 tracking-widest uppercase mt-1">reach</span>
          </div>

        </div>

      </div>

      {/* Powered by */}
      <div className="mt-16 text-center">
        <span className="text-xs font-light text-[#000000a3]/60 tracking-wide">powered by </span>
        <a href="https://aexiz.com" target="_blank" rel="noopener noreferrer" className="text-xs font-light text-[#000000a3]/80 tracking-wide hover:text-[#000000a3] transition-colors">Aexiz Solutions</a>
      </div>
    </div>
  );
};

export default HomePage;
