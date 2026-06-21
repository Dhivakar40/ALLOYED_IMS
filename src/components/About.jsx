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
                Delivering World-Class <br/> Machining Solutions.
              </h2>
              <p style={{ color: '#B0B0B0', lineHeight: '2.0', fontSize: '1.1rem', marginBottom: '1rem' }}>
                Bunny Industries is a recognized leader in the manufacturing and export of high-quality machined components, press tools, and precision parts in Hosur. With over <span style={{ color: '#FFF', fontWeight: 'bold' }}>16 years of industry experience</span>, we have developed strong expertise in the manufacturing of automotive and precision components.
              </p>
              <p style={{ color: '#B0B0B0', lineHeight: '2.0', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Backed by a dedicated team of engineers and quality inspectors, we operate from an advanced infrastructure equipped with <span style={{ color: '#FFF', fontWeight: 'bold' }}>VMC, CNC, and fabrication facilities</span> to consistently meet the diverse requirements of our valued customers.
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
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>EXPERT EXCELLENCE</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Utilizing advanced VMC machining as well as conventional machining processes, our goal is to transform your complex engineering challenges into seamless industrial solutions.
                    </p>
                </motion.div>

                {/* LONG-TERM PARTNERSHIPS */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#6B9BD0', borderLeftStyle: 'solid', borderLeftWidth: '3px', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>BUILDING THE FUTURE</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Beyond manufacturing, we prioritize long-term partnerships built on trust and transparency. We don’t just supply components, we power your journey toward success.
                    </p>
                </motion.div>

                {/* CONTINUOUS INNOVATION */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderLeftWidth: '8px' }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeftColor: '#6B9BD0', borderLeftStyle: 'solid', borderLeftWidth: '3px', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontFamily: '"Oswald", sans-serif', color: '#FFF', margin: '0 0 5px 0', letterSpacing: '0.05em' }}>CONTINUOUS INNOVATION</h3>
                    <p style={{ color: '#AAA', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                        By continuously upgrading our technology, we ensure your projects stay ahead of the curve. Our focus remains on innovation and reliability.
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
                "Our organization has implemented a robust Quality Management System to ensure that every product complies with <strong style={{color: '#FFF'}}>ISO 9001:2015 standards</strong>. As a customer-centric company, we are committed to driving operational excellence by delivering high-quality products that meet and exceed customer expectations."
            </p>
        </motion.div>

        {/* --- VALUED CUSTOMERS SECTION (Replaced Leadership) --- */}
        <div>
            <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center', color: '#FFFFFF' }}>
                OUR VALUED CUSTOMERS
            </h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 50px auto' }}>
                Our strengths and commitment to quality have enabled us to successfully serve reputed industry leaders.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                
                {/* Customer 1 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ background: '#15161A', padding: '40px 30px', borderTop: '3px solid #6B9BD0', textAlign: 'center' }}
                >
                    <h3 style={{ color: '#FFF', fontFamily: '"Oswald", sans-serif', fontSize: '1.6rem', margin: '0 0 10px 0', letterSpacing: '0.05em' }}>Rangsons Aerospace</h3>
                    <p style={{ color: '#6B9BD0', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pvt Ltd</p>
                </motion.div>
                
                {/* Customer 2 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ background: '#15161A', padding: '40px 30px', borderTop: '3px solid #6B9BD0', textAlign: 'center' }}
                >
                    <h3 style={{ color: '#FFF', fontFamily: '"Oswald", sans-serif', fontSize: '1.6rem', margin: '0 0 10px 0', letterSpacing: '0.05em' }}>Narasipur Auto Components</h3>
                    <p style={{ color: '#6B9BD0', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pvt Ltd</p>
                </motion.div>

                {/* Customer 3 */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ background: '#15161A', padding: '40px 30px', borderTop: '3px solid #6B9BD0', textAlign: 'center' }}
                >
                    <h3 style={{ color: '#FFF', fontFamily: '"Oswald", sans-serif', fontSize: '1.6rem', margin: '0 0 10px 0', letterSpacing: '0.05em' }}>Molbio Diagnostics</h3>
                    <p style={{ color: '#6B9BD0', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', textTransform: 'uppercase' }}>Pvt Ltd</p>
                </motion.div>

            </div>
        </div>

      </div>
    </section>
  );
}