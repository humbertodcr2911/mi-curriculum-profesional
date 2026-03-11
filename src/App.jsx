import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PDFResume from './components/PDFResume';

import { IonApp, IonContent, setupIonicReact } from '@ionic/react';

function App() {
  // theme: 'light' | 'dark' | 'system'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Default to 'light' if user has not chosen a theme
    return saved || 'light';
  });

  // Apply theme to document root and persist
  useEffect(() => {
    const root = document.documentElement;

    const apply = (t) => {
      if (t === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
    };

    if (theme === 'system') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      apply(prefersDark ? 'dark' : 'light');
      localStorage.removeItem('theme');
    } else {
      apply(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Listen to system changes only when in 'system' mode
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (theme === 'system') {
        const root = document.documentElement;
        if (e.matches) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const [scrolled, setScrolled] = useState(false);
  const contentRef = React.useRef(null);

  const handleScroll = (ev) => {
    setScrolled(ev.detail.scrollTop > 50);
  };

  const scrollToTop = () => {
    contentRef.current?.scrollToTop(500);
  };

  return (
    <IonApp>
      <Header theme={theme} setTheme={setTheme} scrolledForce={scrolled} />
      <IonContent ref={contentRef} scrollEvents={true} onIonScroll={handleScroll}>
        <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark bg-[#0A0A0B]' : 'bg-white'}`}>
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
          
          {/* Hidden PDF Template */}
          <div style={{ position: 'absolute', left: '-9999px', top: '0' }}>
            <PDFResume />
          </div>
        </div>
      </IonContent>
      <ScrollToTop scrolledForce={scrolled} onScrollToTop={scrollToTop} />
    </IonApp>
  );
}

export default App;