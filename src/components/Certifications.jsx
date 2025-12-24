import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    { 
        text: "ISO 9001:2015", 
        metallic: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 25%, #A8A8A8 50%, #FFFFFF 75%, #B8B8B8 100%)", // Silver
        desc: "Quality Management",
        icon: "✓",
        color: "#C0C0C0"
    },
    { 
        text: "MSME", 
        metallic: "linear-gradient(135deg, #0066CC 0%, #3399FF 25%, #007ACC 50%, #E6F3FF 75%, #0066CC 100%)", // Professional Blue
        desc: "Micro, Small & Medium Enterprises",
        icon: "🏭",
        color: "#0066CC"
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
            padding: '2.5rem 2rem',
            color: '#FFFFFF',
            fontFamily: 'inherit',
            fontWeight: '700',
            fontSize: '1.4rem',
            cursor: 'pointer',
            background: 'transparent',
            textAlign: 'center',
            minWidth: '280px',
            borderRadius: '8px',
            overflow: 'visible'
        }}
    >
        {/* Static Border */}
        <div style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            zIndex: 0
        }} />

        {/* Animated Running Border - Top & Bottom */}
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
                inset: -2,
                background: `linear-gradient(90deg, transparent, transparent 30%, ${cert.color}, transparent 70%, transparent)`,
                backgroundSize: '200% 100%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px',
                borderRadius: '8px',
                opacity: 0.4,
                zIndex: 1,
                pointerEvents: 'none'
            }}
        />

        {/* Metallic Running Border on Hover */}
        <motion.div
            variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
            }}
            animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
            }}
            transition={{
                opacity: { duration: 0.3 },
                backgroundPosition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                }
            }}
            style={{
                position: 'absolute',
                inset: -3,
                background: cert.metallic,
                backgroundSize: '200% 100%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '3px',
                borderRadius: '8px',
                zIndex: 2,
                pointerEvents: 'none',
                boxShadow: `0 0 20px ${cert.color}60, inset 0 0 20px ${cert.color}40`
            }}
        />

        {/* Rotating Border Chase Light */}
        <motion.div
            variants={{
                hover: {
                    rotate: 360,
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                    }
                }
            }}
            style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '8px',
                background: `conic-gradient(from 0deg, transparent 0deg, ${cert.color} 90deg, transparent 180deg, transparent 360deg)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '4px',
                opacity: 0,
                zIndex: 3,
                pointerEvents: 'none',
                filter: `drop-shadow(0 0 10px ${cert.color})`
            }}
        >
            <motion.div
                variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: 0
                }}
            />
        </motion.div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Icon */}
            <motion.div
                variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: { 
                        scale: 1.2,
                        rotate: 360
                    }
                }}
                transition={{ duration: 0.6 }}
                style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    opacity: 0.4,
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }}
            >
                {cert.icon}
            </motion.div>

            {/* Certification Text with Metallic Effect */}
            <motion.div
                variants={{
                    initial: { 
                        color: '#FFFFFF'
                    },
                    hover: { 
                        background: cert.metallic,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        scale: 1.05,
                        filter: `drop-shadow(0 0 15px ${cert.color}80)`
                    }
                }}
                transition={{ duration: 0.4 }}
                style={{
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                    backgroundSize: '200% 200%',
                    fontWeight: '800'
                }}
            >
                {cert.text}
            </motion.div>

            {/* Description */}
            <motion.div
                variants={{
                    initial: { opacity: 0, height: 0 },
                    hover: { 
                        opacity: 1,
                        height: 'auto',
                        transition: { duration: 0.3 }
                    }
                }}
                style={{
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#CCCCCC',
                    overflow: 'hidden'
                }}
            >
                {cert.desc}
            </motion.div>

            {/* Corner Glow Effects */}
            <motion.div
                variants={{
                    hover: { opacity: 1 }
                }}
                style={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '40px',
                    height: '40px',
                    background: `radial-gradient(circle, ${cert.color}60, transparent 70%)`,
                    opacity: 0,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />
            <motion.div
                variants={{
                    hover: { opacity: 1 }
                }}
                style={{
                    position: 'absolute',
                    bottom: -20,
                    left: -20,
                    width: '40px',
                    height: '40px',
                    background: `radial-gradient(circle, ${cert.color}60, transparent 70%)`,
                    opacity: 0,
                    pointerEvents: 'none',
                    filter: 'blur(10px)'
                }}
            />
        </div>
    </motion.div>
);

export default function Certifications() {
    return (
        <section 
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
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
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
                        transition={{ duration: 0.8, delay: 0.3 }}
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

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            position: 'relative',
                            width: '100px',
                            height: '3px',
                            margin: '2rem auto 0',
                            transformOrigin: 'center',
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Running color through line - Updated for 2 certifications */}
                        <motion.div
                            animate={{
                                x: ['-100%', '200%']
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '50%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, #C0C0C0, #0066CC, transparent)'
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Certifications Grid - Now 2-column perfect alignment */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '40px',
                    maxWidth: '620px',
                    margin: '0 auto',
                    justifyItems: 'center'
                }}>
                    {certifications.map((cert, index) => (
                        <CertLogo key={index} cert={cert} index={index} />
                    ))}
                </div>

                {/* Additional Info with Running Border */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '80px',
                        padding: '40px',
                        background: 'transparent',
                        borderRadius: '8px',
                        position: 'relative'
                    }}
                >
                    {/* Static border */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                    }} />

                    {/* Running border - Updated colors */}
                    <motion.div
                        animate={{
                            backgroundPosition: ['0% 0%', '200% 0%']
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        style={{
                            position: 'absolute',
                            inset: -2,
                            background: 'linear-gradient(90deg, transparent, transparent 40%, #C0C0C0, #0066CC, transparent 60%, transparent)',
                            backgroundSize: '200% 100%',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            padding: '2px',
                            borderRadius: '8px',
                            opacity: 0.6
                        }}
                    />
                    
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#CCCCCC',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '300',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        Our commitment to excellence is validated through rigorous international standards. 
                        Every process is audited, every component traceable, ensuring aerospace-grade quality across all sectors.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}