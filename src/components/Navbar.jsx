import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Detect Scroll for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Smooth Home Redirect Function
  const handleLogoClick = () => {
    // If we are already on the page, smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // If you are using React Router and have multiple pages, 
    // uncomment the line below to ensure it navigates home first:
    // window.location.href = "/"; 
  };

  return (
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
        padding: isScrolled ? '15px 40px' : '30px 40px',
        background: isScrolled ? 'rgba(15, 17, 21, 0.8)' : 'transparent', // Glass effect on scroll
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      {/* --- BRAND LOGO (Matches your Image) --- */}
      <div 
        onClick={handleLogoClick}
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          lineHeight: '1'
        }}
      >
        {/* Top Line: INTEGRITY */}
        <h1 style={{
          fontFamily: '"Orbitron", sans-serif', // The Industrial/Sci-fi Font
          fontWeight: '900',
          fontSize: '1.2rem', // Adjust size as needed
          letterSpacing: '0.05em',
          color: '#FFFFFF',
          margin: 0,
          textTransform: 'uppercase',
          // Optional: Add a subtle text shadow for depth
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          INTEGRITY
        </h1>

        {/* Bottom Line: MACHINING SOLUTIONS */}
        <span style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: '0.65rem',
          color: '#FFFFFF',
          letterSpacing: '0.4em', // Wide spacing like the image
          textTransform: 'uppercase',
          fontWeight: '400',
          marginTop: '4px',
          marginLeft: '2px' // Visual optical alignment
        }}>
          Machining Solutions
        </span>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <ul style={{ 
        display: 'flex', 
        gap: '40px', 
        listStyle: 'none', 
        margin: 0, 
        padding: 0 
      }}>
        {['About', 'Services', 'Works', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontFamily: '"Manrope", sans-serif',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                opacity: 0.7,
                transition: 'opacity 0.3s'
              }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0.7}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* --- CTA BUTTON --- */}
      <button style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#FFF',
        padding: '10px 25px',
        fontFamily: '"Oswald", sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '0.85rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.background = '#FFF';
        e.target.style.color = '#000';
      }}
      onMouseOut={(e) => {
        e.target.style.background = 'transparent';
        e.target.style.color = '#FFF';
      }}
      >
        Get Quote
      </button>
    </motion.nav>
  );
}