import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isMobile, setIsMobile] = useState(false); // 1. Add Mobile State

  // 2. Detect Scroll for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Detect Mobile Screen Size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile(); // Check on mount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 4. Smooth Scroll Logic
  const scrollToSection = (e, targetId) => {
    e.preventDefault(); 
    
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
        background: isScrolled ? 'rgba(15, 17, 21, 0.8)' : 'transparent', 
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
          lineHeight: '1'
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
          fontSize: '0.65rem',
          color: '#FFFFFF',
          letterSpacing: '0.4em', 
          textTransform: 'uppercase',
          fontWeight: '400',
          marginTop: '4px',
          marginLeft: '2px' 
        }}>
          Machining Solutions
        </span>
      </div>

      {/* --- NAVIGATION LINKS (HIDDEN ON MOBILE) --- */}
      {!isMobile && (
        <ul style={{ 
            display: 'flex', 
            gap: '30px', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0 
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
                    opacity: 0.7,
                    transition: 'opacity 0.3s, color 0.3s',
                    fontWeight: '500',
                    position: 'relative',
                    display: 'block',
                    paddingBottom: '5px' 
                }}
                onMouseOver={(e) => { 
                    e.target.style.opacity = 1; 
                    e.target.style.color = '#fff'; 
                }}
                onMouseOut={(e) => { 
                    e.target.style.opacity = 0.7; 
                }}
                >
                {item.label}
                {/* Underline Element */}
                <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#FFFFFF',
                    transition: 'width 0.3s ease-out'
                }} className="hover-underline"/>
                </a>
                
                <style jsx>{`
                a:hover .hover-underline {
                    width: 100% !important;
                }
                `}</style>
            </li>
            ))}
        </ul>
      )}

      {/* --- CTA BUTTON --- */}
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
    </motion.nav>
  );
}