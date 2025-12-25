import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    { 
        text: "ISO 9001:2015", 
        metallic: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 25%, #A8A8A8 50%, #FFFFFF 75%, #B8B8B8 100%)", 
        desc: "Quality Management System",
        // REPLACE THIS URL WITH YOUR ISO LOGO IMAGE PATH
        img: "iso.png", 
        color: "#C0C0C0"
    },
    { 
        text: "MSME Registered", 
        metallic: "linear-gradient(135deg, #0066CC 0%, #3399FF 25%, #007ACC 50%, #E6F3FF 75%, #0066CC 100%)", 
        desc: "Micro, Small & Medium Enterprises",
        // REPLACE THIS URL WITH YOUR MSME LOGO IMAGE PATH
        img: "msme.png",
        color: "#C0C0C0"
    }
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
                transition: { 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 1, 0.5, 1]
                }
            }
        }}
        style={{
            position: 'relative',
            padding: '3rem 2rem', // Increased padding for better spacing
            color: '#FFFFFF',
            fontFamily: 'inherit',
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.02)', // Slight fill
            textAlign: 'center',
            minWidth: '280px',
            borderRadius: '16px', // Softer corners
            overflow: 'visible'
        }}
    >
        {/* Static Border */}
        <div style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            zIndex: 0
        }} />

        {/* Animated Running Border */}
        <motion.div
            animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
            }}
            style={{
                position: 'absolute',
                inset: -1,
                background: `linear-gradient(90deg, transparent, transparent 30%, ${cert.color}, transparent 70%, transparent)`,
                backgroundSize: '200% 100%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1px',
                borderRadius: '16px',
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none'
            }}
        />

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* --- LOGO IMAGE CONTAINER --- */}
            <motion.div
                variants={{
                    initial: { scale: 1, filter: "brightness(1) drop-shadow(0 0 0px transparent)" },
                    hover: { 
                        scale: 1.1,
                        filter: `brightness(1.1) drop-shadow(0 0 15px ${cert.color}60)`
                    }
                }}
                transition={{ duration: 0.4 }}
                style={{
                    width: '120px', // Increased size
                    height: '120px', // Increased size
                    marginBottom: '1.5rem',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `radial-gradient(circle at center, ${cert.color}20 0%, transparent 70%)`, // Glow behind image
                    borderRadius: '50%'
                }}
            >
                <img 
                    src={cert.img} 
                    alt={cert.text}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // Keeps logo aspect ratio
                        filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.5))'
                    }}
                />
            </motion.div>

            {/* Certification Text */}
            <motion.h3
                variants={{
                    initial: { color: '#FFFFFF' },
                    hover: { 
                        color: cert.color, // Changes text color to match logo on hover
                        textShadow: `0 0 20px ${cert.color}40`
                    }
                }}
                transition={{ duration: 0.3 }}
                style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0'
                }}
            >
                {cert.text}
            </motion.h3>

            {/* Description */}
            <motion.p
                style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#888',
                    margin: 0
                }}
            >
                {cert.desc}
            </motion.p>
        </div>

        {/* Background Hover Glow */}
        <motion.div
            variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${cert.color}15 0%, transparent 80%)`,
                borderRadius: '16px',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
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
            {/* Background Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                opacity: 0.4
            }} />

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.3em', 
                            fontSize: '0.85rem',
                            color: '#FFFFFF',
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}
                    >
                        Trust & Compliance
                    </motion.p>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF',
                            margin: 0
                        }}
                    >
                        Industry Certifications
                    </motion.h2>

                    <div style={{
                        width: '100px',
                        height: '3px',
                        background: 'rgba(255,255,255,0.1)',
                        margin: '2rem auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <motion.div 
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(90deg, transparent, #FFFFFF, transparent)'
                            }}
                        />
                    </div>
                </div>

                {/* Certifications Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    maxWidth: '800px', // Constrained width to keep them centered
                    margin: '0 auto',
                    justifyItems: 'center'
                }}>
                    {certifications.map((cert, index) => (
                        <CertLogo key={index} cert={cert} index={index} />
                    ))}
                </div>

                {/* --- BOTTOM TEXT WITH GLOW FRAME --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        marginTop: '70px',
                        maxWidth: '800px',
                        marginInline: 'auto',
                        padding: '30px 40px',
                        // Subtle metallic blue/silver border
                        border: '1px solid rgba(100, 150, 255, 0.2)', 
                        borderRadius: '20px',
                        // The glow effect: Outer blueish glow + subtle inner glow
                        boxShadow: '0 0 30px -5px rgba(0, 102, 204, 0.25), inset 0 0 20px -10px rgba(0, 102, 204, 0.15)',
                        // Very slight dark tint background to make it feel solid
                        background: 'rgba(0, 10, 30, 0.3)', 
                        position: 'relative',
                    }}
                >
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.25rem',
                        lineHeight: '1.7',
                        // Slightly brighter text inside the frame
                        color: '#E0E0E0', 
                        margin: 0,
                        fontWeight: '400',
                        letterSpacing: '0.02em'
                    }}>
                        Our commitment to excellence is validated through rigorous international standards, ensuring aerospace-grade quality across all sectors.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}