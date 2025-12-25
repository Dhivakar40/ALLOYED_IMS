import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Certifications from './components/Certifications';

import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-main">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Metrics />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
