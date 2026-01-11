import React from 'react';

const TEAM_MEMBERS = [
  { id: 1, name: "Sarah Chen", role: "Cloud Architect", bio: "10+ years building scalable systems at AWS and Google Cloud." },
  { id: 2, name: "Marcus Johnson", role: "DevOps Lead", bio: "Kubernetes evangelist and CI/CD automation specialist." },
  { id: 3, name: "Priya Patel", role: "Security Engineer", bio: "Zero-trust advocate with expertise in cloud-native security." },
  { id: 4, name: "Alex Rivera", role: "Community Manager", bio: "Connecting cloud enthusiasts and fostering knowledge sharing." }
];

// Transparent Footer for About page
const AboutFooter: React.FC = () => {
  return (
    <footer className="w-full py-20 relative z-20 text-slate-700/80 font-sans-light bg-transparent">
      {/* Floating Divider */}
      <div className="w-[80%] mx-auto h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent mb-16" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
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
            <p>+1 (555) 123-4567</p>
            <p>San Francisco, CA</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-slate-700 border-b border-slate-400/20 pb-2 w-fit">SOCIALS</h3>
          <div className="flex gap-6 text-sm tracking-wide">
            <a href="#" className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100">Instagram</a>
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
            <section className="h-screen w-full flex flex-col items-center justify-center relative">
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
                            <div 
                               key={member.id} 
                               className="group p-8 border border-slate-400/30 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-500 ease-out text-center"
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
                            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-5xl mb-6">🌐</div>
                            <h3 className="font-serif-display text-xl text-slate-700 mb-4">Open Knowledge</h3>
                            <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                                We believe knowledge should be accessible to everyone, everywhere.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-6">🤝</div>
                            <h3 className="font-serif-display text-xl text-slate-700 mb-4">Community First</h3>
                            <p className="font-sans-light text-slate-600 text-sm leading-relaxed">
                                Our strength lies in the diverse perspectives of our members.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-6">🚀</div>
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
