import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS FOR STAGGERED SCROLL ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
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
        background: 'radial-gradient(circle, rgba(107, 155, 208, 0.05) 0%, transparent 70%)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* --- TOP SECTION: INTRO --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            
            {/* LEFT SIDE: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span style={{ color: '#6B9BD0', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1.2rem', display: 'block', marginBottom: '1rem', fontWeight: '600' }}>
                About Bunny Industries
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: '"Oswald", sans-serif', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                ENGINEERING EXCELLENCE <br/> BUILT ON TRUST
              </h2>
              <p style={{ color: '#B0B0B0', lineHeight: '2.0', fontSize: '1.1rem', marginBottom: '1rem' }}>
                Established in 2015 under the leadership of Founder & Proprietor Mr. Varatharajaperumal S, Bunny Industries has grown into a trusted name in precision engineering and high-quality manufacturing.<span style={{ color: '#FFF', fontWeight: 'bold' }}> Over a decade of steady growth, </span>we have partnered with industry leaders across diverse sectors, earning a reputation for mechanical excellence, technical innovation, and operational reliability. 
              </p>
              <p style={{ color: '#B0B0B0', lineHeight: '2.0', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Driven by a dedicated team of <span style={{ color: '#FFF', fontWeight: 'bold' }}>over 25 skilled employees</span>, Bunny Industries achieved a financial turnover of ₹ 4.5 Crores for the financial year 2025–2026, reflecting our strong market presence and continuous scaling capabilities.
              </p>
            </motion.div>

            {/* --- RIGHT SIDE: CARDS GRID (Stagger Fade Entry) --- */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: 'grid', gap: '20px' }} 
            >
                {/* EXPERT EXCELLENCE */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#6B9BD0', borderLeftStyle: 'solid', borderLeftWidth: '3px', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR MISSION</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Premium-grade precision components that empower client supply chains with reliability, structural safety and efficiency.
                    </p>
                </motion.div>

                {/* LONG-TERM PARTNERSHIPS */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#6B9BD0', borderLeftStyle: 'solid', borderLeftWidth: '3px', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR VISION</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        To be a global benchmark in smart precision engineering, powering the next generation of industrial growth.
                    </p>
                </motion.div>

                {/* CONTINUOUS INNOVATION */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#6B9BD0', borderLeftStyle: 'solid', borderLeftWidth: '3px', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR VALUES</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Safety, Precision, Integrity and Continuous Improvement across every process, every shift.
                    </p>
                </motion.div>
            </motion.div>
        </div>

        {/* --- QUALITY POLICY BANNER --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
                background: 'linear-gradient(90deg, #1A1A1A, #0F1115)', 
                padding: '50px 20px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                marginBottom: '80px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
        >
            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '1.5rem', color: '#6B9BD0', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Robust Quality Management</h3>
            <p style={{ color: '#EAEAEA', fontSize: '1.15rem', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                "Operating under strict quality management systems, our facility is <strong style={{color: '#FFF'}}>ISO 9001:2015 certificate </strong>and holds a <strong style={{color: '#FFF'}}>ZED Silver Certificate, </strong>reflecting our commitment to zero-defect manufacturing and <br></br> sustainable practices"
            </p>
        </motion.div>
      </div>
    </section>
  );
}