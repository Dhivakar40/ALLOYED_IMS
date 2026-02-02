import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT THE PDF AS A CONSTANT ---
// This ensures the path is correctly resolved by the build tool
import portfolioPDF from '../assets/portfolio.pdf';

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
    setMenuOpen(false);

    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Common Button Style Helper for Industrial Look
  const industrialButtonStyle = {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.4)',
    color: '#FFF',
    padding: isScrolled ? '10px 22px' : '12px 26px',
    fontFamily: 'var(--font-serif)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    borderRadius: '2px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontWeight: '500'
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
          zIndex: 100,
          padding: isScrolled ? '20px 40px' : '25px 40px',
          background: isScrolled ? 'rgba(15, 17, 21, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* --- LEFT: BRAND LOGO --- */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <div
            onClick={handleLogoClick}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              lineHeight: '1',
              zIndex: 201
            }}
          >
            <img
              src="/imslogo.png"
              alt="IMS Logo"
              style={{
                height: isScrolled ? '52px' : '58px',
                width: 'auto',
                display: 'block',
                transition: 'height 0.3s ease'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: '900',
                fontSize: isScrolled ? '1.22rem' : '1.35rem',
                letterSpacing: '0.05em',
                color: '#FFFFFF',
                margin: 0,
                textTransform: 'uppercase',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                transition: 'font-size 0.3s ease'
              }}>
                INTEGRITY
              </h1>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.55rem',
                color: '#FFFFFF',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: '400',
                marginTop: '3px',
                marginLeft: '1px',
                opacity: 0.8
              }}>
                Machining Solutions
              </span>
            </div>
          </div>
        </div>

        {/* --- CENTER: DESKTOP NAVIGATION --- */}
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{
              display: 'flex',
              gap: '30px',
              listStyle: 'none',
              margin: 0,
              padding: '10px 30px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} style={{ position: 'relative' }}>
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => scrollToSection(e, item.targetId)}
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      opacity: 0.8,
                      transition: 'opacity 0.3s, color 0.3s',
                      fontWeight: '500',
                      position: 'relative',
                      display: 'block',
                      paddingBottom: '2px'
                    }}
                    className="nav-link"
                    onMouseOver={(e) => { e.target.style.opacity = 1; e.target.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.target.style.opacity = 0.8; }}
                  >
                    {item.label}
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: '1.5px',
                      backgroundColor: '#FFFFFF',
                      transition: 'width 0.3s ease-out'
                    }} className="hover-underline" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* --- RIGHT: ACTIONS (Download & Contact) --- */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px' }}>
          {!isMobile && (
            <>
              {/* DOWNLOAD PORTFOLIO BUTTON - PATH UPDATED TO IMPORTED CONSTANT */}
              <motion.a
                href={portfolioPDF}
                download="IMS_Company_Portfolio.pdf"
                style={industrialButtonStyle}
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
                whileTap={{ scale: 0.95 }}
              >
                DOWNLOAD BROCHURE
              </motion.a>

              {/* CONTACT BUTTON */}
              <motion.button
                onClick={(e) => scrollToSection(e, 'contact')}
                style={industrialButtonStyle}
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S TALK
              </motion.button>
            </>
          )}

          {isMobile && !menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFF',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 202,
                padding: '5px'
              }}
            >
              ☰
            </button>
          )}
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
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
              zIndex: 190,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                color: '#FFF',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={`#${item.targetId}`}
                onClick={(e) => scrollToSection(e, item.targetId)}
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE DOWNLOAD LINK - PATH UPDATED TO IMPORTED CONSTANT */}
            <a
              href={portfolioPDF}
              download
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                letterSpacing: '0.2em',
                marginTop: '10px'
              }}
            >
              DOWNLOAD BROCHURE ↓
            </a>

            <motion.button
              onClick={(e) => scrollToSection(e, 'contact')}
              whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: '10px',
                background: 'transparent',
                color: '#FFF',
                padding: '15px 40px',
                fontFamily: 'var(--font-serif)',
                textTransform: 'uppercase',
                fontSize: '1rem',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s'
              }}
            >
              LET'S TALK
            </motion.button>
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