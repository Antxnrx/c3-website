import React from 'react';

const BLOGS = [
  { id: 1, title: "Serverless Horizons", excerpt: "Why the industry is moving towards fully event-driven systems and what it means for cost.", link: "/blogs/1" },
  { id: 2, title: "Kubernetes at Scale", excerpt: "Managing thousands of clusters without losing your mind: A practical guide for DevOps.", link: "/blogs/2" },
  { id: 3, title: "The Blue Cloud", excerpt: "Understanding the aesthetic and functional shift in modern cloud UI design patterns.", link: "/blogs/3" },
  { id: 4, title: "Optimizing Costs", excerpt: "Strategies to reduce your AWS bill by 40% this quarter using spot instances.", link: "/blogs/4" },
  { id: 5, title: "AI in DevOps", excerpt: "How generative models are automatically writing and fixing CI/CD pipelines.", link: "/blogs/5" },
  { id: 6, title: "Zero Trust Security", excerpt: "Implementing security principles in a distributed microservices environment.", link: "/blogs/6" }
];

// Transparent Footer for Blogs page
const BlogsFooter: React.FC = () => {
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
            <a href="mailto:info  @aexiz.com" className="hover:text-blue-600 transition-colors">info@aexiz.com</a>
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

const BlogsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full text-slate-800 overflow-x-hidden">

      {/* Scrollable Content Wrapper */}
      <div className="relative z-10 w-full">

        {/* HERO SECTION */}
        <section className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center relative">
          <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-slate-700 tracking-widest opacity-90 drop-shadow-lg text-center px-4">
            BLOGS
          </h1>

          {/* Animated Arrow */}
          <div className="absolute bottom-12 animate-bounce flex flex-col items-center gap-2 opacity-60 text-slate-600">
            <span className="text-xs font-sans-light tracking-[0.3em]">SCROLL</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </section>

        {/* BLOGS GRID SECTION - Fully transparent background */}
        <section className="min-h-screen py-32 px-6 md:px-12 bg-transparent">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', blog.link);
                  window.dispatchEvent(new Event('pushstate'));
                }}
                className="group block p-10 h-96 flex flex-col justify-between border border-slate-400/30 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div>
                  <div className="text-slate-400/40 font-serif-display text-5xl mb-6">
                    0{blog.id}
                  </div>
                  <h2 className="font-serif-display text-3xl text-slate-700 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="font-sans-light text-slate-600 text-sm leading-relaxed tracking-wide">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-400/20 mt-auto">
                  <span className="text-xs tracking-[0.2em] uppercase text-slate-500 group-hover:text-slate-700 transition-colors">
                    Read Article
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 opacity-50 group-hover:translate-x-2 transition-transform duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <BlogsFooter />
      </div>
    </div>
  );
};

export default BlogsPage;