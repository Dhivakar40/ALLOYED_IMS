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
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none'
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
              <span style={{ color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
                Who We Are
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: '"Oswald", sans-serif', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                Precision You <br/> Can Trust.
              </h2>
              <p style={{ color: '#B0B0B0', lineHeight: '2.0', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Integrity Machining Solutions is a premier precision CNC manufacturing firm based in Hosur. 
                <span style={{ color: '#FFF' }}> We are part of a group of manufacturing companies</span> serving leading OEMs and Tier-1 customers across automobile, automation, aerospace, and medical sectors. 
                Our promoters bring long-standing relationships and proven performance with reputed customers through these group companies.
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
                {/* VISION */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#00ffcc', borderLeftStyle: 'solid', borderLeftWidth: '3px' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR VISION</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        To become a preferred and reliable CNC machining partner by delivering world-class quality, precision, and service.
                    </p>
                </motion.div>

                {/* MISSION */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#00FFCC', borderLeftStyle: 'solid', borderLeftWidth: '3px' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>OUR MISSION</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        To provide innovative, cost-effective, and high-precision machining solutions while maintaining the highest standards of integrity.
                    </p>
                </motion.div>

                {/* MANPOWER */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#00FFCC', borderLeftStyle: 'solid', borderLeftWidth: '3px' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>SKILLED MANPOWER</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Our team comprises skilled CNC operators, programmers, quality engineers, and production supervisors with extensive experience in precision machining.
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
                textAlign: 'center'
            }}
        >
            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '1.5rem', color: '#FFF', marginBottom: '20px', letterSpacing: '0.1em' }}>QUALITY CONTROL POLICY</h3>
            <p style={{ color: '#EAEAEA', fontSize: '1.15rem', fontStyle: 'italic', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8' }}>
                "We are committed to delivering defect-free products by implementing stringent quality control systems at every stage of production, 
                from raw material inspection to in-process and final inspection, ensuring compliance with customer and industry standards."
            </p>
        </motion.div>

        {/* --- LEADERSHIP SECTION --- */}
        <div>
            <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>
                LEADERSHIP
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {/* Partner 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ background: '#15161A', padding: '40px', borderTop: '2px solid rgba(255,255,255,0.05)' }}
                >
                    <h3 style={{ color: '#FFF', fontFamily: '"Oswald", sans-serif', fontSize: '1.8rem', margin: '0 0 5px 0' }}>Mr. R. Chinnadurai</h3>
                    <p style={{ color: '#3399FF', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '20px' }}>PARTNER (DME) | 35+ YEARS EXP</p>
                    <p style={{ color: '#888', lineHeight: '1.8' }}>
                        With over 35 years of extensive experience in CNC machining, quality assurance, and production operations, Mr. R. Chinnadurai brings deep technical expertise and hands-on leadership to Integrity Machining Solutions. His strong background in precision manufacturing and process control ensures consistent quality, optimized production, and adherence to the highest engineering standards. 
                    </p>
                </motion.div>
                
                {/* Partner 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ background: '#15161A', padding: '40px', borderTop: '2px solid rgba(255,255,255,0.05)' }}
                >
                    <h3 style={{ color: '#FFF', fontFamily: '"Oswald", sans-serif', fontSize: '1.8rem', margin: '0 0 5px 0' }}>Mr. S. Varatharajaperumal</h3>
                    <p style={{ color: '#3399FF', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '20px' }}>PARTNER (DME, BBA) | 33+ YEARS EXP</p>
                    <p style={{ color: '#888', lineHeight: '1.8' }}>
                        Mr. S. V Perumal has over 33 years of rich experience in CNC machining, quality systems, production planning, purchase, and overall management. With a blend of technical knowledge and business administration, he plays a key role in strategic planning, customer coordination, supply chain management, and continuous improvement initiatives, driving the company’s growth with a strong focus on operational excellence and customer satisfaction.
                    </p>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
}