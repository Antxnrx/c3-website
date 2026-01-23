import React from 'react';

const TEAM_MEMBERS = [
  { id: 1, name: "Anton Raj", role: "Founder & Community Lead", bio: "Passionate about building scalable cloud solutions and modern architectures.", linkedin: "https://www.linkedin.com/in/anton-raj-singh/" },
  { id: 2, name: "Vyas Megh", role: "Founder & Community Lead", bio: "Creating seamless experiences across web and cloud platforms.", linkedin: "https://www.linkedin.com/in/meghvyas3132/" },
  { id: 3, name: "Mayuresh", role: "Co-Founder & Community Lead", bio: "Connecting cloud enthusiasts and fostering knowledge sharing.", linkedin: "https://www.linkedin.com/in/mayu-esh/" },
  { id: 4, name: "Monali", role: "Co-Founder & Community Manager", bio: "Building and nurturing the cloud community ecosystem.", linkedin: "https://www.linkedin.com/in/monali-bundela-7048b12a7/" },
  { id: 5, name: "Vignesh", role: "Co-Founder & Community Lead", bio: "Empowering cloud builders by creating spaces to learn, collaborate, and grow together.", linkedin: "https://www.linkedin.com/in/vignesh-b-84545a27b/" }
];

const STUDENT_MENTORS = [
  { id: 1, name: "Priya Sharma", program: "GitHub Campus Ambassador", photo: "PS" },
  { id: 2, name: "Arjun Kumar", program: "Microsoft Learn Student Ambassador", photo: "AK" },
  { id: 3, name: "Neha Patel", program: "Google Cloud Facilitator", photo: "NP" },
  { id: 4, name: "Rohan Singh", program: "AWS Community Builder", photo: "RS" },
  { id: 5, name: "Isha Gupta", program: "GitHub Campus Ambassador", photo: "IG" },
  { id: 6, name: "Vikram Reddy", program: "Azure Student Ambassador", photo: "VR" },
  { id: 7, name: "Aanya Desai", program: "Google Developer Expert", photo: "AD" },
  { id: 8, name: "Kunal Verma", program: "AWS Captain", photo: "KV" }
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
            <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new Event('pushstate')); window.scrollTo(0, 0); }} className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Privacy Policy</a>
            <a href="/terms" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms'); window.dispatchEvent(new Event('pushstate')); window.scrollTo(0, 0); }} className="hover:text-blue-600 transition-colors w-fit opacity-70 hover:opacity-100">Terms of Use</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">CONTACT</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide opacity-70">
            <a href="mailto:info@aexiz.com" className="hover:text-blue-600 transition-colors">info@aexiz.com</a>
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
            {/* All team members in one line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
              {TEAM_MEMBERS.map((member) => (
                <a
                  key={member.id}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 md:p-6 border border-slate-300/40 bg-white/30 backdrop-blur-md rounded-lg hover:bg-white/60 hover:border-slate-400/60 hover:shadow-2xl hover:shadow-blue-200/30 hover:-translate-y-2 transition-all duration-500 ease-out text-center block"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/20 rounded-lg transition-all duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Avatar - smaller for more tiles per line */}
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400/60 via-blue-500/50 to-purple-500/40 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <span className="font-serif-display text-2xl md:text-3xl text-white drop-shadow-md">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-lg md:text-xl text-slate-700 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {member.name}
                    </h3>

                    <p className="font-sans-light text-slate-500 text-xs tracking-[0.15em] uppercase mb-3 group-hover:text-slate-600 transition-colors line-clamp-2">
                      {member.role}
                    </p>

                    <p className="font-sans-light text-slate-600 text-xs md:text-sm leading-relaxed group-hover:text-slate-700 transition-colors mb-3 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* LinkedIn indicator - always visible */}
                    <div className="flex items-center justify-center gap-2 text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="text-xs font-sans-light tracking-wide">Profile</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT MENTORS SECTION */}
        <section className="py-32 px-6 md:px-12 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif-display text-4xl md:text-5xl text-slate-700 mb-16 tracking-wide text-center">
              Student Mentors
            </h2>
            <p className="text-center font-sans-light text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Passionate ambassadors from leading technology programs, guiding the next generation of cloud innovators.
            </p>
            {/* Grid of 8 student mentor tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-7xl mx-auto">
              {STUDENT_MENTORS.map((mentor) => (
                <a
                  key={mentor.id}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 md:p-4 border border-slate-300/30 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/50 hover:border-slate-400/50 hover:shadow-xl hover:shadow-blue-200/20 hover:-translate-y-1 transition-all duration-400 ease-out text-center block"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/30 rounded-lg transition-all duration-400 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center h-full">
                    {/* Avatar - smaller */}
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-2 rounded-full bg-gradient-to-br from-cyan-400/70 via-blue-500/60 to-purple-600/50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-400">
                      <span className="font-serif-display text-sm md:text-base text-white drop-shadow-md">
                        {mentor.photo}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xs md:text-sm text-slate-700 mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {mentor.name}
                    </h3>

                    <p className="font-sans-light text-slate-500 text-[10px] md:text-xs tracking-wider uppercase mb-2 group-hover:text-slate-600 transition-colors line-clamp-2">
                      {mentor.program}
                    </p>

                    {/* LinkedIn icon - appears on hover */}
                    <div className="mt-auto pt-2 flex items-center justify-center gap-1 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </div>
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
