import React, { useState } from 'react';
import { AudioControl } from './AudioControl';
import { AUDIO_URL } from '../constants';

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 md:h-24 px-6 md:px-12 lg:px-24 flex items-center justify-between pointer-events-none">

      {/* Left side: Overview (PC only) and Title */}
      <div className="z-50 pointer-events-auto flex items-center gap-8">
        <button
          onClick={(e) => navigate(e, '/overview')}
          className="hidden lg:block px-6 py-2 rounded-full border border-[#000000a3]/50 bg-transparent hover:bg-[#00000026] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <span className="font-sans-light text-[#000000a3]/80 text-[10px] tracking-widest uppercase group-hover:text-white transition-all duration-300">
            Overview
          </span>
        </button>

        <a
          href="/"
          onClick={(e) => navigate(e, '/')}
          className="group cursor-pointer inline-block"
        >
          <h1 className="font-sans-light text-[#000000a3]/80 text-sm md:text-base tracking-[0.2em] uppercase group-hover:text-[#000000a3] transition-colors flex flex-col md:flex-row md:gap-2">
            <span>Cloud</span>
            <span>Computing Community</span>
          </h1>
        </a>
      </div>

      {/* Desktop Navigation - Hidden on md and below */}
      <nav className="hidden lg:flex items-center gap-8 pointer-events-auto">
        <a
          href="/"
          onClick={(e) => navigate(e, '/')}
          className="font-sans-light text-[#000000a3]/70 text-[10px] tracking-widest uppercase hover:text-[#000000a3] transition-colors duration-300 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#000000a3] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/blogs"
          onClick={(e) => navigate(e, '/blogs')}
          className="font-sans-light text-[#000000a3]/70 text-[10px] tracking-widest uppercase hover:text-[#000000a3] transition-colors duration-300 relative group"
        >
          Blogs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#000000a3] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/about"
          onClick={(e) => navigate(e, '/about')}
          className="font-sans-light text-[#000000a3]/70 text-[10px] tracking-widest uppercase hover:text-[#000000a3] transition-colors duration-300 relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#000000a3] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Hamburger Menu Button - Visible on lg and below (tablet/mobile) */}
      <div className="lg:hidden z-50 pointer-events-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#000000a3]/80 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-[#000000a3]/80 transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[#000000a3]/80 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-[#000000a3]/80 transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out z-40 lg:hidden flex flex-col items-center justify-center gap-10 pointer-events-auto ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <a
          href="/"
          onClick={(e) => navigate(e, '/')}
          className="font-sans-light text-[#000000a3]/80 text-xl tracking-widest uppercase hover:text-black transition-colors"
        >
          Home
        </a>
        <a
          href="/blogs"
          onClick={(e) => navigate(e, '/blogs')}
          className="font-sans-light text-[#000000a3]/80 text-xl tracking-widest uppercase hover:text-black transition-colors"
        >
          Blogs
        </a>
        <a
          href="/about"
          onClick={(e) => navigate(e, '/about')}
          className="font-sans-light text-[#000000a3]/80 text-xl tracking-widest uppercase hover:text-black transition-colors"
        >
          About
        </a>
        <a
          href="/overview"
          onClick={(e) => navigate(e, '/overview')}
          className="font-sans-light text-[#000000a3]/80 text-xl tracking-widest uppercase hover:text-black transition-colors"
        >
          Overview
        </a>

      </div>

      {/* Audio Control for Mobile/Tablet - Positioned bottom-right of screen */}
      <div className="fixed bottom-12 right-12 z-30 lg:hidden pointer-events-auto flex flex-col items-center gap-2">
        <span className="text-[10px] font-sans-light text-[#000000a3]/60 tracking-widest uppercase">Ambient Sound</span>
        <AudioControl url={AUDIO_URL} mobileMode={true} />
      </div>
    </header>
  );
};

export default TopNav;