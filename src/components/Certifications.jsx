import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        text: "ISO 9001:2015",
        metallic: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 25%, #A8A8A8 50%, #FFFFFF 75%, #B8B8B8 100%)",
        desc: "Quality Management System",
        img: "iso.png",
        color: "#C0C0C0"
    },
    {
        text: "MSME Registered",
        metallic: "linear-gradient(135deg, #0066CC 0%, #3399FF 25%, #007ACC 50%, #E6F3FF 75%, #0066CC 100%)",
        desc: "Micro, Small & Medium Enterprises",
        img: "msme.png",
        color: "#3399FF"
    }
];

const qualityFocusPoints = [
    { title: "Customer Satisfaction", desc: "Achieved through consistent product quality and service excellence." },
    { title: "Risk-Based Thinking", desc: "Adopting a proactive process approach to mitigate risks." },
    { title: "Continuous Improvement", desc: "Relentless optimization of manufacturing and quality systems." },
    { title: "Regulatory Compliance", desc: "Strict adherence to statutory and regulatory requirements." },
    { title: "Documentation & Control", desc: "Complete traceability and rigorous control of records." }
];

const CertLogo = ({ cert, index }) => (
    <motion.div
        initial="initial"
        whileInView="inView"
        whileHover="hover"
        viewport={{ once: true }}
        variants={{
            initial: { opacity: 0, y: 30 },
            inView: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }
            }
        }}
        style={{
            position: 'relative',
            padding: '3rem 2rem',
            color: '#FFFFFF',
            fontFamily: 'inherit',
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.02)',
            textAlign: 'center',
            minWidth: '280px',
            borderRadius: '16px',
            overflow: 'visible'
        }}
    >
        {/* Static Border */}
        <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', zIndex: 0 }} />

        {/* Animated Running Border */}
        <motion.div
            animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
                position: 'absolute', inset: -1,
                background: `linear-gradient(90deg, transparent, transparent 30%, ${cert.color}, transparent 70%, transparent)`,
                backgroundSize: '200% 100%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px', borderRadius: '16px', opacity: 0.5, zIndex: 1, pointerEvents: 'none'
            }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                variants={{
                    initial: { scale: 1, filter: "brightness(1) drop-shadow(0 0 0px transparent)" },
                    hover: { scale: 1.1, filter: `brightness(1.1) drop-shadow(0 0 15px ${cert.color}60)` }
                }}
                transition={{ duration: 0.4 }}
                style={{
                    width: '120px', height: '120px', marginBottom: '1.5rem',
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `radial-gradient(circle at center, ${cert.color}20 0%, transparent 70%)`,
                    borderRadius: '50%'
                }}
            >
                <img src={cert.img} alt={cert.text} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.5))' }} />
            </motion.div>

            <motion.h3
                variants={{
                    initial: { color: '#FFFFFF' },
                    hover: { color: cert.color, textShadow: `0 0 20px ${cert.color}40` }
                }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '0.05em', margin: '0 0 0.5rem 0' }}
            >
                {cert.text}
            </motion.h3>

            <p style={{ fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', margin: 0 }}>
                {cert.desc}
            </p>
        </div>
    </motion.div>
);

export default function Certifications() {
    return (
        <section
            id="certifications"
            style={{
                backgroundColor: '#0A0F1C',
                padding: '120px 0',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Accent (Simplified for Glossy Look) */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 80%)',
                opacity: 0.5
            }} />

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

                {/* --- HEADER --- */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.85rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: '600' }}
                    >
                        Trust & Compliance
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
                    >
                        Industry Certifications
                    </motion.h2>
                    <div style={{ width: '100px', height: '3px', background: 'rgba(255,255,255,0.1)', margin: '2rem auto', position: 'relative', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, #FFFFFF, transparent)' }}
                        />
                    </div>
                </div>

                {/* --- LOGOS GRID --- */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '800px', margin: '0 auto', justifyItems: 'center' }}>
                    {certifications.map((cert, index) => (
                        <CertLogo key={index} cert={cert} index={index} />
                    ))}
                </div>

                {/* --- QUALITY COMMITMENT SECTION --- */}
                <div style={{ marginTop: '120px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px auto' }}
                    >
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#FFF', marginBottom: '20px' }}>
                            OUR QUALITY COMMITMENT
                        </h3>
                        <p style={{ color: '#AAA', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Integrity Machining Solutions is committed to implementing and maintaining robust quality
                            management systems in line with international standards. Our quality system is aligned with ISO 9001
                            requirements.
                        </p>
                    </motion.div>

                    {/* MODULAR QUALITY GRID (Flexbox for 3-2 Layout) */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center', // This centers the last row (the 2 items)
                        gap: '24px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {qualityFocusPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    borderLeft: `3px solid ${i % 2 === 0 ? '#00ffcc' : '#3399FF'}`,
                                    // Flex properties for responsive layout:
                                    // Grow: 1, Shrink: 1, Basis: 300px. 
                                    // Max Width creates the "card" look without filling full width on last row.
                                    flex: '1 1 300px',
                                    maxWidth: '360px'
                                }}
                            >
                                <div style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.2rem',
                                    color: '#FFF',
                                    marginBottom: '10px',
                                    letterSpacing: '0.05em'
                                }}>
                                    {point.title}
                                </div>
                                <p style={{ margin: 0, color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    {point.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}