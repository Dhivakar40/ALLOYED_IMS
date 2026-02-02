import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {

    // Smooth Scroll Helper
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Fallback to top
        }
    };

    return (
        <footer style={{
            backgroundColor: '#050608', // Slightly darker than main bg
            color: '#FFFFFF',
            padding: '80px 0 30px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontFamily: '"Manrope", sans-serif',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Optional: Background Faint Industrial Overlay (Gradient for now) */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% -20%, rgba(255,255,255,0.03), transparent 70%)',
                zIndex: 0, pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 40px',
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                // Auto-fit grid: Creates 4 columns on desktop, stacks on mobile
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '60px'
            }}>

                {/* --- COLUMN 1: BRAND & INFO --- */}
                <div>
                    {/* LOGO REUSE */}
                    <div style={{ marginBottom: '20px' }}>
                        <h1 style={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontWeight: '900',
                            fontSize: '1.5rem',
                            color: '#FFFFFF',
                            margin: 0,
                            textTransform: 'uppercase'
                        }}>
                            INTEGRITY
                        </h1>
                        <span style={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontSize: '0.7rem',
                            color: '#A0A0A0',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase'
                        }}>
                            Machining Solutions
                        </span>
                    </div>

                    <p style={{ color: '#A0A0A0', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '300px' }}>
                        From concept to completion, manufacturing perfection. Setting new standards in manufacturing excellence through precision engineering and advanced robotics.
                    </p>
                    <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#888', lineHeight: '1.5' }}>
                        <br /><b>Visit us here : </b><br />
                        <br />
                        SF No. 185/2A, Door No. 185/2, <br />
                        VTR Road, Thiruvallur Nagar, <br />
                        Zuzuvadi, Hosur – 635126, <br />
                        Krishnagiri District, Tamil Nadu, India.
                    </div>
                </div>

                {/* --- COLUMN 2: QUICK LINKS --- */}
                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                        Quick Links
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            { label: "Home", id: "hero" }, // Assuming hero section exists
                            { label: "About Us", id: "about" },
                            { label: "Sectors", id: "sectors" },
                            { label: "Metrics", id: "metrics" },
                            { label: "Certifications", id: "certifications" }
                        ].map((item, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    style={{
                                        background: 'transparent', border: 'none', color: '#CCC', cursor: 'pointer',
                                        fontSize: '0.9rem', textAlign: 'left', padding: 0, transition: 'color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#FFF'}
                                    onMouseOut={(e) => e.target.style.color = '#CCC'}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- COLUMN 3: OUR SERVICES (Taken from Sectors) --- */}
                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                        Our Services
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {["Automotive Precision", "Aerospace Systems", "Locomotive & Rail", "Energy & Petrochemical", "Medical Robotics", "Defense & Marine"].map((item, i) => (
                            <li key={i} style={{ color: '#CCC', fontSize: '0.9rem' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- COLUMN 4: COMPANY / LEGAL --- */}
                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', textTransform: 'uppercase', marginBottom: '25px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                        Our Company
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li style={{ color: '#CCC', fontSize: '0.9rem', cursor: 'pointer' }}>Privacy Policy</li>
                        <li style={{ color: '#CCC', fontSize: '0.9rem', cursor: 'pointer' }}>Disclaimer</li>
                        <li style={{ color: '#CCC', fontSize: '0.9rem', cursor: 'pointer' }}>Terms and Conditions</li>
                        <li style={{ marginTop: '20px' }}>
                            <motion.button
                                onClick={() => scrollToSection('contact')}
                                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    color: '#FFF',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    padding: '10px 25px',
                                    fontFamily: 'var(--font-serif)',
                                    textTransform: 'uppercase',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    letterSpacing: '0.1em',
                                    transition: 'background-color 0.3s, color 0.3s'
                                }}
                            >
                                Contact Us
                            </motion.button>
                        </li>
                    </ul>
                </div>

            </div>

            {/* --- COPYRIGHT BAR --- */}
            <div style={{
                maxWidth: '1400px', margin: '60px auto 0 auto', padding: '20px 40px 0 40px',
                borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#555', fontSize: '0.8rem'
            }}>
                © {new Date().getFullYear()} Integrity Machining Solutions. All Rights Reserved.
            </div>
        </footer>
    );
}