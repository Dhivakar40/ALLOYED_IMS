import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoboticClaw from './RoboticClaw';

const IMAGES = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1565514020176-db99c857e231?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
];

export default function Hero() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showSpark, setShowSpark] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Mobile Detection Logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile(); // Run once on mount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Trigger Main Animation
  useEffect(() => {
    const timer = setTimeout(() => { setStartAnimation(true); }, 500); 
    return () => clearTimeout(timer);
  }, []);

  // 3. Trigger Spark (Only if not mobile, to save resources)
  useEffect(() => {
    if (startAnimation && !isMobile) {
        const sparkTimer = setTimeout(() => { setShowSpark(true); }, 3200);
        return () => clearTimeout(sparkTimer);
    }
  }, [startAnimation, isMobile]);

  // 4. Background Slideshow
  useEffect(() => {
    if (!startAnimation) return;
    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3500); 
    return () => clearInterval(slideTimer);
  }, [startAnimation]);

  const getImageState = (index) => {
    if (index === currentIndex) return "active";
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    if (index === prevIndex) return "exit";
    return "inactive";
  };

  // Responsive Font Size
  const titleFontSize = isMobile ? '3rem' : 'clamp(3rem, 50vw, 7rem)';

  return (
    <section 
      style={{ 
        height: '100dvh', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#0F1115',
        color: '#FFFFFF'
      }}
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        {IMAGES.map((imgSrc, i) => (
            <motion.img
              key={i}
              src={imgSrc}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={getImageState(i) === "active" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 2 }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
            />
        ))}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'linear-gradient(to right, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0.4) 100%)' }} />
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        height: '100%', 
        width: '100%',
        overflow: 'hidden', // Prevent scrollbars from animations
        pointerEvents: 'none',
      }}>
        
        {/* MAIN MOVING CONTAINER */}
        <motion.div
          style={{
            textAlign: isMobile ? 'center' : 'left', // Center text on mobile
            width: 'fit-content', 
            height: 'fit-content',
            pointerEvents: 'auto',
            position: 'absolute', 
            top: '50%', 
            left: '50%', // Always pivot from center
          }}
          initial={{ x: "-50%", y: "-50%", scale: 1.3 }} 
          animate={{ 
            // Mobile: Stay centered. Desktop: Slide left.
            left: isMobile ? "50%" : (startAnimation ? "10%" : "50%"), 
            x: isMobile ? "-50%" : (startAnimation ? "0%" : "-50%"), 
            y: "-50%",
            scale: startAnimation ? 1 : 1.3 
          }} 
          transition={{ duration: 2.5, ease: [0.65, 0, 0.35, 1] }} 
        >
          
            {/* 1. TITLE TEXT */}
            <motion.h1
              style={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: '800',
                textTransform: 'uppercase',
                lineHeight: '0.9',
                fontSize: titleFontSize,
                margin: 0,
                whiteSpace: 'nowrap',
                backgroundImage: 'linear-gradient(135deg, #666 0%, #ddd 25%, #888 50%, #fff 75%, #444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent', 
                position: 'relative',
                zIndex: 10
              }}
            >
              <span style={{ display: 'block' }}>Integrity</span>
              <span style={{ display: 'block' }}>Machining</span>
              <span style={{ display: 'block' }}>Solutions</span>
            </motion.h1>

            {/* --- WELDING SPARK (Hidden on Mobile) --- */}
            {!isMobile && (
              <motion.div
                  initial={{ opacity: 0 }} 
                  animate={{ 
                      opacity: showSpark ? [1, 0.3, 1, 0.1, 0.8, 1, 0.2] : 0, 
                      scale: showSpark ? [1, 1.4, 0.9, 1.2, 0.8, 1.3] : 1 
                  }}
                  transition={{ 
                      duration: 0.08, 
                      repeat: Infinity, 
                      repeatType: "mirror",
                      ease: "linear"
                  }}
                  style={{
                      position: 'absolute',
                      top: '26%',     
                      right: '149px', 
                      width: '10px',  
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF', 
                      boxShadow: '0 0 5px 2px #fff, 0 0 15px 5px #ffdd00, 0 0 30px 10px #ff5500', 
                      zIndex: 25,
                      pointerEvents: 'none',
                  }}
              />
            )}

            {/* 2. HR & TAGLINE */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : -100 }}
              transition={{ delay: 1.5, duration: 1 }}
              style={{
                marginTop: '20px', 
                borderTop: '1px solid rgba(255,255,255,0.3)', 
                paddingTop: '20px',
                width: '100%', 
              }}
            >
              <p style={{ 
                fontFamily: '"Manrope", sans-serif', 
                letterSpacing: '0.2em', 
                fontSize: isMobile ? '1rem' : '1.5rem', // Smaller on mobile
                fontWeight: '600',
                margin: 0,
                color: '#A0A0A0'
              }}>
                 THE HARDWARE OF INDUSTRIAL EVOLUTION
              </p>
            </motion.div>

            {/* 3. THE 3D MODEL (Responsive Positioning) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : 50 }}
              transition={{ delay: 2.0, duration: 1 }}
              style={{
                position: 'absolute',
                // DESKTOP: Right side (-65px)
                // MOBILE: Centered at bottom (50% right, translated)
                right: isMobile ? '50%' : '-65px', 
                top: isMobile ? '110%' : '-20px', // Pushed down below text on mobile
                transform: isMobile ? 'translateX(50%)' : 'none', 
                
                // Slightly smaller model on mobile
                height: isMobile ? '280px' : '350px',
                width: isMobile ? '280px' : '350px',
                
                zIndex: 20, 
                pointerEvents: 'none',
              }}
            >
               <RoboticClaw startAnimation={startAnimation} />
            </motion.div>

        </motion.div>
      </div>

    </section>
  );
}