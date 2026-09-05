import { useState, useEffect } from 'react';

import { useScrollReveal, useActiveSection } from '@/hooks';
import { ScrollProgressBar } from '@/components/ui';
import { Nav, SocialStrip, MobileSidebar } from '@/components/Nav';
import { Hero }               from '@/components/Hero';
import { DesignationTicker }  from '@/components/DesignationTicker';
import { About }              from '@/components/About';
import { Languages }          from '@/components/Languages';
import { Skills }             from '@/components/Skills';
import { Experience }         from '@/components/Experience';
import { Projects }           from '@/components/Projects';
import { Contact }            from '@/components/Contact';
import { Footer, WhatsAppFloat } from '@/components/Footer';
import { SplashScreen }       from '@/components/SplashScreen';
import { Certificates }       from '@/components/Certificates';

type View = 'home' | 'certificates';

export default function App() {
  /* Default light mode */
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<View>('home');

  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('splash-seen');
  });

  const active = useActiveSection();
  useScrollReveal();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  const handleSplashDone = () => {
    sessionStorage.setItem('splash-seen', '1');
    setShowSplash(false);
  };

  const handleCerts = () => {
    setView('certificates');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div style={{ minHeight: '100%', background: 'var(--bg)', transition: 'background 0.5s ease' }}>

      {showSplash && <SplashScreen onDone={handleSplashDone} />}

      <ScrollProgressBar />
      <SocialStrip />

      <Nav
        dark={dark} toggle={toggle} active={active}
        onMenuOpen={() => setMobileMenuOpen(true)}
        onCerts={handleCerts}
      />
      <MobileSidebar
        open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}
        dark={dark} toggle={toggle} active={active}
        onCerts={handleCerts}
      />

      {/* Certificates page — mounted on top, home always stays mounted below */}
      {view === 'certificates' && (
        <div style={{ position: 'relative', zIndex: 10, background: 'var(--bg)', minHeight: '100vh' }}>
          <Certificates onBack={handleBack} />
        </div>
      )}

      {/* Home — always mounted so IntersectionObserver keeps .in classes */}
      <div style={{ display: view === 'home' ? 'block' : 'none' }}>
        <Hero dark={dark} />
        <DesignationTicker />
        <About />
        <Languages />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <WhatsAppFloat />
        <Footer />
      </div>
    </div>
  );
}
