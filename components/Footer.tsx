import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 relative z-20 text-white/80 font-sans-light bg-gradient-to-b from-transparent to-black/30">
      {/* Floating Divider: Not attached to corners (80% width) */}
      <div className="w-[80%] mx-auto h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-white border-b border-white/10 pb-2 w-fit">QUICK LINKS</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide">
            <a href="/" className="hover:text-blue-300 transition-colors w-fit opacity-70 hover:opacity-100">Home</a>
            <a href="/blogs" className="hover:text-blue-300 transition-colors w-fit opacity-70 hover:opacity-100">Blogs</a>
            <a href="/about" className="hover:text-blue-300 transition-colors w-fit opacity-70 hover:opacity-100">About</a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-white border-b border-white/10 pb-2 w-fit">LEGAL</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide">
            <a href="/privacy" className="hover:text-blue-300 transition-colors w-fit opacity-70 hover:opacity-100">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-300 transition-colors w-fit opacity-70 hover:opacity-100">Terms of Use</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-white border-b border-white/10 pb-2 w-fit">CONTACT</h3>
          <div className="flex flex-col gap-3 text-sm tracking-wide opacity-70">
            <p>hello@cloudcommunity.com</p>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif-display text-xl tracking-wider text-white border-b border-white/10 pb-2 w-fit">SOCIALS</h3>
          <div className="flex gap-6 text-sm tracking-wide">
            <a href="https://linkedin.com/company/c3aexiz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors opacity-70 hover:opacity-100">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-20 text-xs opacity-30 font-sans-light tracking-widest">
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

export default Footer;