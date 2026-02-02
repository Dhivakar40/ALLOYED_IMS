import React, { useState, useEffect, Suspense } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false); // New loading state

  // 1. Mobile Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Wait for page load, then start animation
  useEffect(() => {
    // We add a small delay to ensure the 3D canvas has mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setStartAnimation(true);
    }, 1000);
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

  // FIX: This was breaking the layout. 
  // On mobile we use a fixed size, on desktop we use clamp.
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

        {/* MAIN MOVING CONTAINER */}
        <motion.div
          style={{
            textAlign: isMobile ? 'center' : 'left',
            width: 'fit-content',
            height: 'fit-content',
            pointerEvents: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            // Fix for visual centering on mobile
            maxWidth: '100%',
            padding: '0 20px',
          }}
          initial={{ x: "-50%", y: "-50%", scale: 1.3 }}
          animate={{
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
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.2em',
              fontSize: isMobile ? '1rem' : '1.5rem',
              fontWeight: '600',
              margin: 0,
              color: '#A0A0A0'
            }}>
              THE HARDWARE OF INDUSTRIAL EVOLUTION
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}