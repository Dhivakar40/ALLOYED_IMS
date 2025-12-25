import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIG: Define Menu Items and their Target IDs ---
const NAV_ITEMS = [
  { label: "ABOUT US", targetId: "about" },
  { label: "SECTORS", targetId: "sectors" }, 
  { label: "SERVICES", targetId: "portfolio" },
  { label: "METRICS", targetId: "metrics" }, 
  { label: "CERTIFICATIONS", targetId: "certifications" } 
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Detect Scroll for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Detect Mobile Screen Size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', checkMobile);
    checkMobile(); 
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 3. Smooth Scroll Logic
  const scrollToSection = (e, targetId) => {
    e.preventDefault(); 
    setMenuOpen(false); // Close mobile menu if open
    
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section #${targetId} not found`);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100, // Main Navbar Z-Index
          padding: isScrolled ? '15px 20px' : '25px 40px',
          background: isScrolled ? 'rgba(15, 17, 21, 0.9)' : 'transparent', 
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        {/* --- BRAND LOGO --- */}
        <div 
          onClick={handleLogoClick}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            lineHeight: '1',
            zIndex: 200 // High Z-Index to stay above mobile menu
          }}
        >
          <h1 style={{
            fontFamily: '"Orbitron", sans-serif', 
            fontWeight: '900',
            fontSize: '1.2rem', 
            letterSpacing: '0.05em',
            color: '#FFFFFF',
            margin: 0,
            textTransform: 'uppercase',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            INTEGRITY
          </h1>

          <span style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.6rem', 
            color: '#FFFFFF',
            letterSpacing: '0.3em', 
            textTransform: 'uppercase',
            fontWeight: '400',
            marginTop: '4px',
            marginLeft: '2px' 
          }}>
            Machining Solutions
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION (THE "FRAME") --- */}
        {!isMobile && (
          <ul style={{ 
            display: 'flex', 
            gap: '30px', 
            listStyle: 'none', 
            margin: 0, 
            // --- NEW FRAME STYLING ---
            padding: '12px 35px', // Padding inside the frame
            border: '1px solid rgba(255,255,255,0.15)', // Very light visible border
            borderRadius: '50px', // Pill shape
            backgroundColor: 'rgba(255,255,255,0.03)', // Subtle background tint
            backdropFilter: 'blur(5px)', // Slight blur inside the frame
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)' // Subtle shadow for depth
          }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label} style={{ position: 'relative' }}>
                <a 
                  href={`#${item.targetId}`}
                  onClick={(e) => scrollToSection(e, item.targetId)}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '0.85rem', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    opacity: 0.9,
                    transition: 'opacity 0.3s, color 0.3s',
                    fontWeight: '500',
                    position: 'relative',
                    display: 'block',
                    paddingBottom: '5px' 
                  }}
                  className="nav-link"
                  onMouseOver={(e) => { e.target.style.opacity = 1; e.target.style.color = '#fff'; }}
                  onMouseOut={(e) => { e.target.style.opacity = 0.9; }}
                >
                  {item.label}
                  <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%', // Starts invisible
                      height: '2px',
                      backgroundColor: '#FFFFFF',
                      transition: 'width 0.3s ease-out'
                  }} className="hover-underline"/>
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* --- DESKTOP CTA BUTTON --- */}
        {!isMobile && (
          <button 
            onClick={(e) => scrollToSection(e, 'contact')} 
            style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#FFF',
                padding: '12px 30px',
                fontFamily: '"Oswald", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '2px'
            }}
            onMouseOver={(e) => {
                e.target.style.background = '#FFF';
                e.target.style.color = '#000';
                e.target.style.borderColor = '#FFF';
            }}
            onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#FFF';
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            LET'S TALK
          </button>
        )}

        {/* --- MOBILE HAMBURGER / CLOSE BUTTON --- */}
        {isMobile && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFF',
              fontSize: '1.8rem',
              cursor: 'pointer',
              zIndex: 200, // CRITICAL: This keeps it ON TOP of the overlay
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px'
            }}
          >
            {/* Toggle between Menu Icon and X Icon */}
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Slides in from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#0F1115', 
              zIndex: 150, // Below the X button (200) but above everything else
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={`#${item.targetId}`}
                onClick={(e) => scrollToSection(e, item.targetId)}
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: '"Oswald", sans-serif',
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={(e) => scrollToSection(e, 'contact')} 
              style={{
                  marginTop: '20px',
                  background: '#FFF',
                  border: '1px solid #FFF',
                  color: '#000',
                  padding: '15px 40px',
                  fontFamily: '"Oswald", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderRadius: '2px'
              }}
            >
              LET'S TALK
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover .hover-underline {
          width: 100% !important;
        }
      `}</style>
    </>
  );
}