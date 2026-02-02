import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="about"
      style={{
        padding: '100px 20px',
        backgroundColor: '#0F1115',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Grid Accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* --- TOP SECTION: INTRO --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span style={{ color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
              Who We Are
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Precision You <br /> Can Trust.
            </h2>
            <p style={{ color: '#B0B0B0', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Integrity Machining Solutions is a premier precision CNC manufacturing firm based in Hosur.
              <span style={{ color: '#FFF' }}> We are part of a group of manufacturing companies</span> serving leading OEMs and Tier-1 customers across automobile, automation, aerospace, and medical sectors.
              Our promoters bring long-standing relationships and proven performance with reputed customers through these group companies.
            </p>

            <motion.button
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '15px 40px',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-serif)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background-color 0.3s, color 0.3s'
              }}
            >
              <span>▶</span> Watch Our Story
            </motion.button>
          </motion.div>

          {/* --- CARDS GRID (Vision, Mission, Manpower) --- */}
          <div style={{ display: 'grid', gap: '20px' }}>
            {/* VISION */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
              style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #00ffcc' }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR VISION</h3>
              <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                To become a preferred and reliable CNC machining partner by delivering world-class quality, precision, and service.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
              style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #00aaff' }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR MISSION</h3>
              <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                To provide innovative, cost-effective, and high-precision machining solutions while maintaining the highest standards of integrity.
              </p>
            </motion.div>

            {/* MANPOWER (NEW) */}
            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
              style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #ffaa00' }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>SKILLED MANPOWER</h3>
              <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                Our team comprises skilled CNC operators, programmers, quality engineers, and production supervisors with extensive experience in precision machining.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- QUALITY POLICY BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(90deg, #1A1A1A, #0F1115)',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '80px',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#FFF', marginBottom: '15px' }}>QUALITY CONTROL POLICY</h3>
          <p style={{ color: '#CCC', fontSize: '1.1rem', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            "We are committed to delivering defect-free products by implementing stringent quality control systems at every stage of production,
            from raw material inspection to in-process and final inspection, ensuring compliance with customer and industry standards."
          </p>
        </motion.div>

        {/* --- LEADERSHIP SECTION --- */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>
            LEADERSHIP
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Partner 1 */}
            <div style={{ background: '#15161A', padding: '40px' }}>
              <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '0 0 5px 0' }}>Mr. R. Chinnadurai</h3>
              <p style={{ color: '#00ffcc', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '20px' }}>PARTNER (DME) | 35+ YEARS EXP</p>
              <p style={{ color: '#888', lineHeight: '1.6' }}>
                With over 35 years of extensive experience in CNC machining,
                quality assurance, and production operations, Mr. R. Chinnadurai brings deep technical expertise and
                hands-on leadership to Integrity Machining Solutions. His strong background in precision
                manufacturing and process control ensures consistent quality, optimized production, and adherence
                to the highest engineering standards.
              </p>
            </div>
            {/* Partner 2 */}
            <div style={{ background: '#15161A', padding: '40px' }}>
              <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '0 0 5px 0' }}>Mr. S. Varatharajaperumal</h3>
              <p style={{ color: '#00ffcc', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '20px' }}>PARTNER (DME, BBA) | 33+ YEARS EXP</p>
              <p style={{ color: '#888', lineHeight: '1.6' }}>
                Mr. S. V Perumal has over 33 years of rich
                experience in CNC machining, quality systems, production planning, purchase, and overall
                management. With a blend of technical knowledge and business administration, he plays a key role in
                strategic planning, customer coordination, supply chain management, and continuous improvement
                initiatives, driving the company’s growth with a strong focus on operational excellence and customer
                satisfaction.

              </p>
            </div>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999,
              display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
            }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              style={{ width: '100%', maxWidth: '900px', aspectRatio: '16/9', backgroundColor: '#000', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsVideoOpen(false)} style={{ position: 'absolute', top: '-40px', right: '0', background: 'transparent', border: 'none', color: '#FFF', fontSize: '2rem', cursor: 'pointer' }}>✕</button>
              <video width="100%" height="100%" controls autoPlay>
                <source src="https://videos.pexels.com/video-files/5824640/5824640-hd_1920_1080_24fps.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}