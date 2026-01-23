import React, { useState, useEffect } from 'react';

// Transparent Footer for Overview page
const OverviewFooter: React.FC = () => {
  return (
    <footer className="w-full py-20 relative z-20 text-slate-700/80 font-sans-light bg-transparent">
      {/* Floating Divider */}
      <div className="w-[80%] mx-auto h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent mb-16" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">QUICK LINKS</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide">
            <a href="/" className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Home</a>
            <a href="/blogs" className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Blogs</a>
            <a href="/about" className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">About</a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">LEGAL</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new Event('pushstate')); window.scrollTo(0, 0); }} className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Privacy Policy</a>
            <a href="/terms" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms'); window.dispatchEvent(new Event('pushstate')); window.scrollTo(0, 0); }} className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Terms of Use</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">CONTACT</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide opacity-70">
            <a href="mailto:info@aexiz.com" className="hover:text-blue-600 transition-colors">info@aexiz.com</a>
            {/* <p>+1 (555) 123-4567</p> */}
            <p>Bangalore, IN</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">SOCIALS</h3>
          <div className="flex gap-6 text-sm tracking-wide">

            <a href="https://www.linkedin.com/company/c3aexiz" className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100">LinkedIn</a>

          </div>
        </div>
      </div>

      <div className="text-center mt-20 text-xs opacity-70 font-sans-light tracking-widest text-slate-600">
        © 2024 CLOUD COMPUTING COMMUNITY. ALL RIGHTS RESERVED.
      </div>

      {/* Developer Credit */}
      <div className="flex justify-center mt-8 pb-4">
        <a href="https://aexiz.com" target="_blank" rel="noopener noreferrer" className="group text-slate-600 text-sm font-light tracking-wide">
          Developed by <span className="text-slate-700 group-hover:text-blue-600 transition-colors font-medium">Aexiz</span> Solutions
        </a>
      </div>
    </footer>
  );
};

const OverviewPage: React.FC = () => {
  const rotationRef = React.useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  // Continuous infinite clockwise rotation using ref to avoid state updates
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Speed: normal = 0.03, hovered = 0.008 (slower)
      const speed = isHovered ? 0.008 : 0.03;
      rotationRef.current = rotationRef.current + deltaTime * speed;

      // Apply transform directly - tilted towards north-east, top facing up
      if (elementRef.current) {
        elementRef.current.style.transform = `rotateX(20deg) rotateY(20deg) rotateZ(${rotationRef.current}deg) scale(1.8)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="relative min-h-screen w-full text-slate-800 overflow-x-hidden">

      {/* Scrollable Content Wrapper */}
      <div className="relative z-10 w-full">

        {/* What We Do Section */}
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-8">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif-display tracking-widest text-[#000000a3] mb-16 text-center">
            WHAT WE DO
          </h2>

          {/* Content Grid with Star in Center */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 px-4 shadow-sm">

            {/* Left Side - 3 Items */}
            <div className="flex flex-col gap-8 lg:gap-12 flex-1 items-center lg:items-end text-center lg:text-right w-full lg:w-auto order-2 lg:order-1">
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Community Events</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light">Learning sessions, discussions, and meetups.</p>
              </div>
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Hackathons</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light">Real-world problem solving using cloud technologies.</p>
              </div>
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Cloud-Ready Learning</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light">Structured learning paths across major cloud platforms.</p>
              </div>
            </div>

            {/* Center - Rotating Asterisk */}
            <div className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2 my-8 lg:my-0" style={{ perspective: '1500px' }}>
              <div
                ref={elementRef}
                className="relative cursor-pointer transition-transform duration-500 scale-[0.06] md:scale-[1.1] lg:scale-[1.8]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(20deg) rotateY(20deg) rotateZ(0deg)`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Back shadow/depth layer */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: 'translateZ(-60px)',
                  }}
                >
                  <svg width="400" height="400" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="backDepth" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                        <stop offset="100%" stopColor="rgba(200,220,245,0.7)" />
                      </linearGradient>
                    </defs>
                    {/* 8-pointed asterisk - back face */}
                    <g transform="translate(100,100)">
                      {/* Vertical arm */}
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#backDepth)" />
                      {/* Horizontal arm */}
                      <rect x="-75" y="-12" width="150" height="24" rx="12" fill="url(#backDepth)" />
                      {/* Diagonal arm 1 */}
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#backDepth)" transform="rotate(45)" />
                      {/* Diagonal arm 2 */}
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#backDepth)" transform="rotate(-45)" />
                    </g>
                  </svg>
                </div>

                {/* Side depth layer - creates 3D extrusion effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: 'translateZ(-30px)',
                  }}
                >
                  <svg width="400" height="400" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                        <stop offset="50%" stopColor="rgba(220,235,255,0.6)" />
                        <stop offset="100%" stopColor="rgba(200,225,250,0.75)" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(100,100)">
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#sideGradient)" />
                      <rect x="-75" y="-12" width="150" height="24" rx="12" fill="url(#sideGradient)" />
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#sideGradient)" transform="rotate(45)" />
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#sideGradient)" transform="rotate(-45)" />
                    </g>
                  </svg>
                </div>

                {/* Main glass asterisk - front layer */}
                <div style={{ transform: 'translateZ(0px)' }}>
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    className="drop-shadow-2xl"
                  >
                    <defs>
                      {/* Main glass gradient - white/sky blue */}
                      <linearGradient id="glassMain" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                        <stop offset="30%" stopColor="rgba(240,248,255,0.75)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                        <stop offset="70%" stopColor="rgba(235,245,255,0.75)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
                      </linearGradient>

                      {/* Edge rim gradient - subtle sky blue */}
                      <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(180,210,240,0.8)" />
                        <stop offset="50%" stopColor="rgba(200,225,250,0.6)" />
                        <stop offset="100%" stopColor="rgba(180,210,240,0.8)" />
                      </linearGradient>

                      {/* Highlight gradient */}
                      <linearGradient id="asteriskHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                        <stop offset="30%" stopColor="rgba(255,255,255,0.5)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>

                      {/* Inner light - white frosted */}
                      <radialGradient id="innerGlow" cx="40%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                        <stop offset="50%" stopColor="rgba(245,250,255,0.5)" />
                        <stop offset="100%" stopColor="rgba(230,242,255,0.4)" />
                      </radialGradient>

                      {/* Soft shadow filter */}
                      <filter id="asteriskShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="rgba(150,180,210,0.35)" />
                      </filter>
                    </defs>

                    {/* Main asterisk shape */}
                    <g transform="translate(100,100)" filter="url(#asteriskShadow)">
                      {/* Base shape with glass fill */}
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#glassMain)" stroke="url(#rimGradient)" strokeWidth="1.5" />
                      <rect x="-75" y="-12" width="150" height="24" rx="12" fill="url(#glassMain)" stroke="url(#rimGradient)" strokeWidth="1.5" />
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#glassMain)" stroke="url(#rimGradient)" strokeWidth="1.5" transform="rotate(45)" />
                      <rect x="-12" y="-75" width="24" height="150" rx="12" fill="url(#glassMain)" stroke="url(#rimGradient)" strokeWidth="1.5" transform="rotate(-45)" />

                      {/* Inner glow overlay */}
                      <rect x="-10" y="-73" width="20" height="146" rx="10" fill="url(#innerGlow)" opacity="0.8" />
                      <rect x="-73" y="-10" width="146" height="20" rx="10" fill="url(#innerGlow)" opacity="0.8" />
                      <rect x="-10" y="-73" width="20" height="146" rx="10" fill="url(#innerGlow)" opacity="0.8" transform="rotate(45)" />
                      <rect x="-10" y="-73" width="20" height="146" rx="10" fill="url(#innerGlow)" opacity="0.8" transform="rotate(-45)" />

                      {/* Center circle */}
                      <circle cx="0" cy="0" r="18" fill="url(#glassMain)" stroke="url(#rimGradient)" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="14" fill="url(#innerGlow)" opacity="0.9" />
                    </g>

                    {/* Highlight lines on arms */}
                    <g transform="translate(100,100)">
                      <line x1="-8" y1="-70" x2="-8" y2="70" stroke="url(#asteriskHighlight)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                      <line x1="-70" y1="-8" x2="70" y2="-8" stroke="url(#asteriskHighlight)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                      <line x1="-8" y1="-70" x2="-8" y2="70" stroke="url(#asteriskHighlight)" strokeWidth="3" strokeLinecap="round" opacity="0.9" transform="rotate(45)" />
                      <line x1="-8" y1="-70" x2="-8" y2="70" stroke="url(#asteriskHighlight)" strokeWidth="3" strokeLinecap="round" opacity="0.9" transform="rotate(-45)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - 3 Items */}
            <div className="flex flex-col gap-8 lg:gap-12 flex-1 items-center lg:items-start text-center lg:text-left w-full lg:w-auto order-3">
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Mentorship & Guidance</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light text-center lg:text-left">Support from experienced members and mentors.</p>
              </div>
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Giveaways & Opportunities</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light text-center lg:text-left">Learning resources, credits, and community perks.</p>
              </div>
              <div className="max-w-sm transition-all duration-300 hover:scale-105 bg-white/40 backdrop-blur-md border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-[#000000a3] mb-2 tracking-wide">Open Collaboration</h3>
                <p className="text-sm text-[#000000a3]/70 leading-relaxed font-sans-light text-center lg:text-left">Peer learning, shared resources, and projects.</p>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <OverviewFooter />
      </div>
    </div>
  );
};

export default OverviewPage;
