import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isLoaded, setIsLoaded] = useState(false); 

  // 1. Mobile Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile(); 
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Wait for page load, then start animation
  useEffect(() => {
    const timer = setTimeout(() => { 
        setIsLoaded(true);
        setStartAnimation(true); 
    }, 1200); 
    return () => clearTimeout(timer);
  }, []);

  // 3. Spark Trigger
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

  const titleFontSize = isMobile ? '3rem' : 'clamp(3rem, 6vw, 7rem)';

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
        overflow: 'visible', 
        pointerEvents: 'none',
      }}>
        
        {/* MAIN MOVING CONTAINER - 100% GPU ACCELERATED */}
        <motion.div
          style={{
            textAlign: isMobile ? 'center' : 'left',
            width: 'fit-content', 
            height: 'fit-content',
            pointerEvents: 'auto',
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            maxWidth: '100%',
            padding: isMobile ? '0 20px' : '0', 
            willChange: 'transform, opacity', 
          }}
          initial={{ 
            y: "-50%",
            x: "calc(50vw - 50%)", 
            // FIX: Start at 1.5x size!
            scale: 1.5,
            opacity: 0 
          }} 
          animate={{ 
            y: "-50%",
            x: isMobile ? "calc(50vw - 50%)" : (startAnimation ? "10vw" : "calc(50vw - 50%)"), 
            // FIX: Shrink down to normal size exactly as it slides!
            scale: startAnimation ? 1 : 1.5,
            opacity: 1
          }} 
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            // Both X and Scale are synced to identical durations and ultra-smooth curves
            x: { duration: 2.5, ease: [0.16, 1, 0.3, 1] }, 
            scale: { duration: 2.5, ease: [0.16, 1, 0.3, 1] }
          }} 
        >
          
            {/* 1. TITLE TEXT */}
            <motion.h1
              style={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: '900',
                textTransform: 'uppercase',
                lineHeight: '1.05', 
                letterSpacing: isMobile ? '0.02em' : 'normal', 
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
              <span style={{ display: 'block' }}>BUNNY</span>
              <span style={{ display: 'block' }}>INDUSTRIES</span>
            </motion.h1>

            {/* 2. HR & TAGLINE */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: startAnimation ? 1 : 0, x: startAnimation ? 0 : -100 }}
              // Slight delay so the tagline slides in *after* the big text starts shrinking
              transition={{ delay: 1.8, duration: 1 }}
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
                fontSize: isMobile ? '0.85rem' : '1.5rem', 
                lineHeight: isMobile ? '1.5' : '1.2', 
                fontWeight: '600',
                margin: 0,
                color: '#A0A0A0',
                textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,1)' 
              }}>
                 WORLD CLASS MACHINING SOLUTIONS
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
}