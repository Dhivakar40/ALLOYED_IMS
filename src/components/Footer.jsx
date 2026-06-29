import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { legalContent } from './legalData'; // Make sure you created legalData.js in the same folder!

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Fallback to top
    }
  };

  return (
    <>
      <footer style={{ 
          backgroundColor: '#050608', // Slightly darker than main bg
          color: '#FFFFFF', 
          padding: '80px 0 30px 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          fontFamily: '"Manrope", sans-serif',
          position: 'relative',
          overflow: 'hidden'
      }}>
        
        {/* Optional: Background Faint Industrial Overlay (Gradient for now) */}
        <div style={{
            position: 'absolute', inset: 0, 
            background: 'radial-gradient(circle at 50% -20%, rgba(255,255,255,0.03), transparent 70%)',
            zIndex: 0, pointerEvents: 'none'
        }} />

        <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            padding: '0 40px', 
            position: 'relative', 
            zIndex: 1,
            display: 'grid',
            // Auto-fit grid: Creates 4 columns on desktop, stacks on mobile
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '60px'
        }}>

          {/* --- COLUMN 1: BRAND & INFO --- */}
          <div>
             {/* LOGO REUSE */}
             <div style={{ marginBottom: '20px' }}>
                  <h1 style={{
                      fontFamily: '"Orbitron", sans-serif', 
                      fontWeight: '900', 
                      fontSize: '1.5rem', 
                      color: '#FFFFFF', 
                      margin: 0, 
                      textTransform: 'uppercase'
                  }}>
                      BUNNY
                  </h1>
                  <span style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '0.7rem', 
                      color: '#A0A0A0', 
                      letterSpacing: '0.3em', 
                      textTransform: 'uppercase'
                  }}>
                      INDUSTRIES
                  </span>
              </div>

              <p style={{ color: '#A0A0A0', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '300px' }}>
                  From concept to completion, manufacturing perfection. Setting new standards in manufacturing excellence through precision engineering and advanced robotics.
              </p>
          </div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div>
              <h3 style={{ fontFamily: '"Oswald", sans-serif', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                  Quick Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                      { label: "Home", id: "hero" }, 
                      { label: "About Us", id: "about" },
                      { label: "Sectors", id: "sectors" },
                      { label: "Infrastructure", id: "infrastructure" }, // <--- UPDATED HERE
                      { label: "Certifications", id: "certifications" }
                  ].map((item, i) => (
                      <li key={i}>
                          <button 
                              onClick={() => scrollToSection(item.id)}
                              style={{ 
                                  background: 'transparent', border: 'none', color: '#CCC', cursor: 'pointer', 
                                  fontSize: '0.9rem', textAlign: 'left', padding: 0, transition: 'color 0.3s' 
                              }}
                              onMouseOver={(e) => e.target.style.color = '#FFF'}
                              onMouseOut={(e) => e.target.style.color = '#CCC'}
                          >
                              {item.label}
                          </button>
                      </li>
                  ))}
              </ul>
          </div>

          {/* --- COLUMN 3: OUR SERVICES (Taken from Sectors) --- */}
          <div>
              <h3 style={{ fontFamily: '"Oswald", sans-serif', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                  Our Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {["Automotive Precision", "Aerospace Systems", "Locomotive & Rail", "Energy & Petrochemical", "Medical Robotics", "Defense & Marine"].map((item, i) => (
                      <li key={i} style={{ color: '#CCC', fontSize: '0.9rem' }}>
                          {item}
                      </li>
                  ))}
              </ul>
          </div>

          {/* --- COLUMN 4: COMPANY / LEGAL --- */}
          <div>
              <h3 style={{ fontFamily: '"Oswald", sans-serif', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                  Our Company
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <li>
                    <button 
                      onClick={() => setActiveModal('privacy')}
                      style={{ background: 'none', border: 'none', padding: 0, color: '#CCC', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s', textAlign: 'left' }}
                      onMouseOver={(e) => e.target.style.color = '#FFF'}
                      onMouseOut={(e) => e.target.style.color = '#CCC'}
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveModal('disclaimer')}
                      style={{ background: 'none', border: 'none', padding: 0, color: '#CCC', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s', textAlign: 'left' }}
                      onMouseOver={(e) => e.target.style.color = '#FFF'}
                      onMouseOut={(e) => e.target.style.color = '#CCC'}
                    >
                      Disclaimer
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveModal('terms')}
                      style={{ background: 'none', border: 'none', padding: 0, color: '#CCC', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s', textAlign: 'left' }}
                      onMouseOver={(e) => e.target.style.color = '#FFF'}
                      onMouseOut={(e) => e.target.style.color = '#CCC'}
                    >
                      Terms and Conditions
                    </button>
                  </li>
                  
                  <li style={{ marginTop: '20px' }}>
                      <button 
                          onClick={() => scrollToSection('contact')}
                          style={{
                              background: '#FFF', color: '#000', border: 'none', 
                              padding: '10px 25px', fontFamily: '"Oswald", sans-serif', 
                              textTransform: 'uppercase', fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '0.1em',
                              transition: 'transform 0.2s ease', borderRadius: '2px'
                          }}
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                      >
                          Contact Us
                      </button>
                  </li>
              </ul>
          </div>

        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div style={{ 
            maxWidth: '1400px', margin: '60px auto 0 auto', padding: '20px 40px 0 40px', 
            borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#555', fontSize: '0.8rem' 
        }}>
            © {new Date().getFullYear()} Bunny Industries. All Rights Reserved.
        </div>
      </footer>

      {/* --- THE LEGAL MODAL OVERLAY --- */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
            onClick={closeModal} // Clicking the dark background closes it
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                backgroundColor: '#15161A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '40px',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside the text from closing the modal
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '25px',
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#FFF'}
                onMouseOut={(e) => e.target.style.color = '#888'}
              >
                ✕
              </button>

              {/* Title */}
              <h2 style={{ 
                fontFamily: '"Oswald", sans-serif', 
                color: '#FFF', 
                fontSize: '2rem', 
                marginBottom: '20px', 
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '15px'
              }}>
                {legalContent[activeModal].title}
              </h2>

              {/* Content */}
              <div style={{ color: '#B0B0B0', lineHeight: '1.8', fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {legalContent[activeModal].content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}