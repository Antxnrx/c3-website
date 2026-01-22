import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import HomePage from './components/HomePage';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import OverviewPage from './components/OverviewPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6 } from './components/BlogPost';
import Scene from './components/Scene';
import TopNav from './components/TopNav';
import { AudioControl } from './components/AudioControl';
import { AUDIO_URL } from './constants';

const App: React.FC = () => {
  // Simple router based on current path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [displayedPath, setDisplayedPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cloudsPosition, setCloudsPosition] = useState<'normal' | 'footer'>(
    window.location.pathname === '/' ? 'normal' : 'footer'
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      if (newPath === currentPath) return;

      setIsTransitioning(true);
      const isGoingToHome = newPath === '/';
      const wasOnHome = currentPath === '/';

      // Fade out current content first
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
          onComplete: () => {
            // Update the displayed page
            setDisplayedPath(newPath);
            setCurrentPath(newPath);

            // Start cloud/gradient animation AFTER old content fades out
            if (wasOnHome && !isGoingToHome) {
              setCloudsPosition('footer');
            } else if (!wasOnHome && isGoingToHome) {
              setCloudsPosition('normal');
            }

            // Fade in new content together with gradient animation
            // Both happen at the same time over 5 seconds
            gsap.to(contentRef.current, {
              opacity: 1,
              duration: 5,
              ease: 'power2.inOut',
              onComplete: () => {
                setIsTransitioning(false);
              }
            });
          }
        });
      }
    };

    // Handle back/forward buttons
    window.addEventListener('popstate', handleNavigation);

    // Handle internal navigation (custom event)
    window.addEventListener('pushstate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('pushstate', handleNavigation);
    };
  }, [currentPath]);

  const renderPage = () => {
    switch (displayedPath) {
      case '/blogs':
        return <BlogsPage />;
      case '/blogs/1':
        return <Blog1 />;
      case '/blogs/2':
        return <Blog2 />;
      case '/blogs/3':
        return <Blog3 />;
      case '/blogs/4':
        return <Blog4 />;
      case '/blogs/5':
        return <Blog5 />;
      case '/blogs/6':
        return <Blog6 />;
      case '/about':
        return <AboutPage />;
      case '/overview':
        return <OverviewPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {/* Persistent Background and UI Elements */}
      <Scene cloudsPosition={cloudsPosition} />
      <TopNav />
      <AudioControl url={AUDIO_URL} />

      {/* Route Content with transition */}
      <div
        ref={contentRef}
        className={`overflow-x-hidden ${isTransitioning ? 'pointer-events-none' : ''}`}
      >
        {renderPage()}
      </div>
    </>
  );
};

export default App;