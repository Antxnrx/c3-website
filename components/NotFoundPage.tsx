import React from 'react';

const NotFoundPage: React.FC = () => {
  const navigate = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black/30 overflow-x-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">
        {/* 404 Text */}
        <div>
          <h1 className="font-serif-display text-9xl md:text-[15rem] lg:text-[18rem] text-white/10 font-bold tracking-widest drop-shadow-lg mb-4">
            404
          </h1>
          <h2 className="font-serif-display text-4xl md:text-6xl text-white tracking-wider drop-shadow-lg mb-6">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="font-sans-light text-white/70 text-lg md:text-2xl tracking-wide max-w-2xl mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          onClick={navigate}
          className="group relative inline-block px-8 py-4 mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          <button className="relative px-8 py-4 border-2 border-white/30 text-white/80 font-sans-light tracking-widest uppercase text-sm group-hover:text-white group-hover:border-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
            Return to Home
          </button>
        </a>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new Event('pushstate'));
              window.scrollTo(0, 0);
            }}
            className="text-white/60 hover:text-white/90 transition-colors font-sans-light tracking-wide underline-offset-4 hover:underline"
          >
            Home
          </a>
          <a
            href="/blogs"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/blogs');
              window.dispatchEvent(new Event('pushstate'));
              window.scrollTo(0, 0);
            }}
            className="text-white/60 hover:text-white/90 transition-colors font-sans-light tracking-wide underline-offset-4 hover:underline"
          >
            Blogs
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/about');
              window.dispatchEvent(new Event('pushstate'));
              window.scrollTo(0, 0);
            }}
            className="text-white/60 hover:text-white/90 transition-colors font-sans-light tracking-wide underline-offset-4 hover:underline"
          >
            About
          </a>
          <a
            href="/overview"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/overview');
              window.dispatchEvent(new Event('pushstate'));
              window.scrollTo(0, 0);
            }}
            className="text-white/60 hover:text-white/90 transition-colors font-sans-light tracking-wide underline-offset-4 hover:underline"
          >
            Overview
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
