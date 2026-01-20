import React from 'react';

const TEAM_MEMBERS = [
  { id: 1, name: "Anton Raj", role: "Founder & Community Lead", bio: "Passionate about building scalable cloud solutions and modern architectures.", linkedin: "https://www.linkedin.com/in/anton-raj-singh/" },
  { id: 2, name: "Megh Vyas", role: "Founder & Community Lead", bio: "Creating seamless experiences across web and cloud platforms.", linkedin: "https://www.linkedin.com/in/meghvyas3132/" },
  { id: 3, name: "Mayuresh", role: "Co-Founder & Community Lead", bio: "Connecting cloud enthusiasts and fostering knowledge sharing.", linkedin: "https://www.linkedin.com/in/mayu-esh/" },
  { id: 4, name: "Monali", role: "Co-Founder & Community Manager", bio: "Building and nurturing the cloud community ecosystem.", linkedin: "https://www.linkedin.com/in/monali-bundela-7048b12a7/" }
];

// Icons as SVG components
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-slate-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-slate-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-slate-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

// Transparent Footer for About page
const AboutFooter: React.FC = () => {
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
            <a href="/privacy" className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Terms of Use</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">CONTACT</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide opacity-70">
            <p>hello@cloudcommunity.com</p>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">SOCIALS</h3>
          <div className="flex gap-6 text-sm tracking-wide">
            <a href="https://linkedin.com/company/c3aexiz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 text-xs opacity-30 font-sans-light tracking-widest text-slate-600">
        © 2024 CLOUD COMPUTING COMMUNITY. ALL RIGHTS RESERVED.
      </div>

      {/* Developer Credit */}
      <div className="flex justify-center mt-8 pb-4">
        <a href="https://aexiz.com" target="_blank" rel="noopener noreferrer" className="bg-white px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-shadow">
          <span className="text-black text-sm font-medium tracking-wide">Developed by Aexiz Solutions</span>
        </a>
      </div>
    </footer>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-slate-800 overflow-x-hidden">

      {/* Scrollable Content Wrapper */}
      <div className="relative z-10 w-full">

        {/* HERO SECTION */}
        <section className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center relative">
          <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-slate-700 tracking-widest opacity-90 drop-shadow-lg text-center px-4">
            ABOUT
          </h1>
          <p className="mt-8 font-sans-light text-slate-600 text-lg md:text-xl tracking-wide text-center max-w-2xl px-6">
            Building the future of cloud computing, together.
          </p>

          {/* Animated Arrow */}
          <div className="absolute bottom-12 animate-bounce flex flex-col items-center gap-2 opacity-60 text-slate-600">
            <span className="text-xs font-sans-light tracking-[0.3em]">SCROLL</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="min-h-screen py-32 px-6 md:px-12 bg-transparent flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif-display text-4xl md:text-5xl text-slate-700 mb-12 tracking-wide">
              Our Mission
            </h2>
            <p className="font-sans-light text-slate-600 text-lg md:text-xl leading-relaxed tracking-wide mb-8">
              We believe in democratizing cloud knowledge. Our community brings together developers,
              architects, and enthusiasts from around the world to share insights, best practices,
              and the latest innovations in cloud computing.
            </p>
            <p className="font-sans-light text-slate-600 text-lg md:text-xl leading-relaxed tracking-wide">
              From serverless architectures to multi-cloud strategies, we explore the technologies
              shaping the future of digital infrastructure.
            </p>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-32 px-6 md:px-12 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif-display text-4xl md:text-5xl text-slate-700 mb-16 tracking-wide text-center">
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <a
                  key={member.id}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 border border-slate-400/30 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-500 ease-out text-center block"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-300/50 to-blue-500/50 flex items-center justify-center">
                    <span className="font-serif-display text-2xl text-slate-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-sans-light text-slate-500 text-xs tracking-[0.2em] uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-32 px-6 md:px-12 bg-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif-display text-4xl md:text-5xl text-slate-700 mb-16 tracking-wide text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="text-center flex flex-col items-center">
                <div className="mb-6"><GlobeIcon /></div>
                <h3 className="font-serif-display text-xl text-slate-700 mb-4">Open Knowledge</h3>
                <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                  We believe knowledge should be accessible to everyone, everywhere.
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="mb-6"><UsersIcon /></div>
                <h3 className="font-serif-display text-xl text-slate-700 mb-4">Community First</h3>
                <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                  Our strength lies in the diverse perspectives of our members.
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="mb-6"><RocketIcon /></div>
                <h3 className="font-serif-display text-xl text-slate-700 mb-4">Innovation</h3>
                <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                  We embrace change and continuously explore new possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <AboutFooter />
      </div>
    </div>
  );
};

export default AboutPage;
