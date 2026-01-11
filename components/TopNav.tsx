import React from 'react';

const TopNav: React.FC = () => {
  const navigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-24 flex items-center justify-center pointer-events-none px-8">
      
      {/* Overview Button (Left aligned) */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 pointer-events-auto z-10">
        <button 
          onClick={(e) => navigate(e, '/overview')}
          className="group px-6 py-2 rounded-full border border-white/50 bg-transparent hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <span className="font-sans-light text-white/80 text-xs tracking-widest uppercase group-hover:mix-blend-difference transition-all duration-300">
            Overview
          </span>
        </button>
      </div>

      {/* Centered Title - Links to Home */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <a 
          href="/" 
          onClick={(e) => navigate(e, '/')}
          className="group cursor-pointer pointer-events-auto"
        >
          <h1 className="font-sans-light text-white/80 text-sm md:text-base tracking-[0.2em] uppercase mix-blend-overlay group-hover:text-white transition-colors">
            Cloud Computing Community
          </h1>
        </a>
      </div>

      {/* Navigation Links (Right aligned) */}
      <nav className="absolute right-24 top-1/2 -translate-y-1/2 flex gap-8 items-center pointer-events-auto">
        <a 
          href="/" 
          onClick={(e) => navigate(e, '/')}
          className="font-sans-light text-white/70 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="/blogs" 
          onClick={(e) => navigate(e, '/blogs')}
          className="font-sans-light text-white/70 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 relative group"
        >
          Blogs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a 
          href="/about" 
          onClick={(e) => navigate(e, '/about')}
          className="font-sans-light text-white/70 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  );
};

export default TopNav;