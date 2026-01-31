import React from 'react';
import { motion } from 'framer-motion';

// Specific Group Customers List
const CLIENTS = [
    "ASHOK LEYLAND",
    "TATA ELECTRONICS",
    "SCHAEFFLER INDIA",
    "HUBBELL INDIA",
    "MAINI AEROSPACE",
    "TITAN ENGINEERING",
    "SFO GROUP",
    "ICON MEDICARE"
];

// Client Logo Mapping
const LOGO_MAP = {
    "ASHOK LEYLAND": "/ashok_leyland_logo.jpg",
    "TATA ELECTRONICS": "/tata_logo.png",
    "SCHAEFFLER INDIA": "/schaeffler_logo.png",
    "HUBBELL INDIA": "/hubbell_logo.png",
    "MAINI AEROSPACE": "/maini_logo.png",
    "SFO GROUP": "/sfo_logo.jpg",
    "TITAN ENGINEERING": "/titan_engineering_logo.jpg",
    "ICON MEDICARE": "/icon_medicare_logo.png"
};

const ClientCard = ({ name, index }) => {
    const logoSrc = LOGO_MAP[name];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'default',
                overflow: 'hidden',
                minHeight: '180px' // Ensure uniform box height
            }}
        >
            {/* Hover Glow Effect */}
            <motion.div
                className="glow-effect"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(50, 150, 255, 0.15), transparent 70%)',
                    zIndex: 0
                }}
            />

            {/* Corner Accents (Tech Look) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)' }} />

            {/* Client Name or Logo */}
            {logoSrc ? (
                <img
                    src={logoSrc}
                    alt={`${name} logo`}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '90%',
                        maxHeight: '90px',
                        objectFit: 'contain',
                        zIndex: 1,
                        position: 'relative'
                    }}
                />
            ) : (
                <h3 style={{
                    fontFamily: '"Oswald", sans-serif',
                    fontSize: '1.5rem',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: 0,
                    zIndex: 1,
                    position: 'relative'
                }}>
                    {name}
                </h3>
            )}
        </motion.div>
    );
};

export default function Clients() {
    return (
        <section style={{
            backgroundColor: '#0F1115',
            padding: '120px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Subtle Grid */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '100px 100px', opacity: 0.3, pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>

                {/* --- HEADER SECTION --- */}
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '900px', marginInline: 'auto' }}>
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{
                            color: '#3399FF', // Electric Blue (Professional)
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            display: 'block',
                            marginBottom: '15px'
                        }}
                    >
                        Major Group Customers
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontFamily: '"Oswald", sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: '#FFFFFF',
                            textTransform: 'uppercase',
                            lineHeight: '1.1',
                            marginBottom: '30px'
                        }}
                    >
                        Trusted by <br /> Industry Giants
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            color: '#B0B0B0',
                            fontSize: '1.1rem',
                            lineHeight: '1.8'
                        }}
                    >
                        Integrity Machining Solutions is part of a manufacturing group serving leading OEMs
                        and Tier-1 customers across the Automobile, Automation, Aerospace, and Medical sectors.
                        Our promoters bring decades of proven performance through these long-standing relationships.
                    </motion.p>
                </div>

                {/* --- CLIENTS GRID --- */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive Grid
                    gap: '20px',
                    marginTop: '60px'
                }}>
                    {CLIENTS.map((client, index) => (
                        <ClientCard key={index} name={client} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}