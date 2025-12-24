import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. THE ICONS (With Official Brand Colors) ---
const Icons = {
    gmail: (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="#EA4335" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    ),
    whatsapp: (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15Z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="#0A66C2" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <defs>
                <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
            </defs>
            <path fill="url(#instaGradient)" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 3.8 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
    )
};

// --- 2. FLOATING INPUT COMPONENT ---
const FloatingInput = ({ label, type = "text", placeholder, isTextArea = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={{ marginBottom: '35px', position: 'relative' }}>
            {/* UPDATED LABEL: Bolder, Larger, No Transparency */}
            <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                color: 'var(--color-text-secondary)',
                opacity: 1
            }}>
                {label}
            </label>

            {isTextArea ? (
                <textarea
                    rows="4"
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        background: 'rgba(255,255,255, 0.05)', // Dark tint
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255, 0.1)',
                        padding: '15px',
                        borderRadius: '0', // Sharp corners
                        fontSize: '1rem',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none'
                    }}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        background: 'rgba(255,255,255, 0.05)',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255, 0.1)',
                        padding: '15px',
                        borderRadius: '0',
                        fontSize: '1rem',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'inherit',
                        outline: 'none'
                    }}
                />
            )}

            {/* The Animated Bottom Line */}
            <motion.div
                initial={{ width: '0%' }}
                animate={{ width: isFocused ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    bottom: isTextArea ? '6px' : '0',
                    left: 0,
                    height: '2px',
                    backgroundColor: 'var(--color-accent)'
                }}
            />
        </div>
    );
};

// --- 3. SOCIAL ICON COMPONENT ---
const SocialLink = ({ icon }) => (
    <motion.a
        href="#"
        whileHover={{ scale: 1.1, y: -5, borderColor: 'var(--color-text-primary)' }}
        whileTap={{ scale: 0.9 }}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'transparent',
            borderRadius: '0px', // Sharp
            cursor: 'pointer',
            color: 'var(--color-text-primary)'
        }}
    >
        {icon}
    </motion.a>
);

// --- 4. MAIN COMPONENT ---
export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container" style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '60px'
            }}>

                {/* 1. LEFT SIDE: Typography & Logos */}
                <div style={{ flex: '1 1 400px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 style={{
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            marginBottom: '2rem',
                            opacity: 0.5
                        }}>
                            Inquiry
                        </h4>
                        <h1 className="contact-headline" style={{ marginBottom: '60px' }}>
                            LET'S <br /> TALK.
                        </h1>

                        {/* Social Logos Row */}
                        <div>
                            <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '1.5rem' }}>Connect</h5>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <SocialLink icon={Icons.gmail} />
                                <SocialLink icon={Icons.whatsapp} />
                                <SocialLink icon={Icons.linkedin} />
                                <SocialLink icon={Icons.instagram} />
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* 2. RIGHT SIDE: The Floating Form */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 400px' }}
                >
                    <div style={{
                        backgroundColor: 'var(--color-surface)', // Dark Surface
                        padding: '60px',
                        borderRadius: '0',
                        border: '1px solid var(--color-accent)',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        <form onSubmit={(e) => e.preventDefault()}>

                            <FloatingInput label="Your Name" placeholder="John Doe" />
                            <FloatingInput label="Email Address" type="email" placeholder="john@company.com" />
                            <FloatingInput label="How can we help?" isTextArea={true} placeholder="Tell us about your project..." />

                            {/* SUBMIT BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    marginTop: '20px',
                                    width: '100%',
                                    padding: '20px',
                                    backgroundColor: 'transparent',
                                    color: 'var(--color-text-primary)',
                                    border: '1px solid var(--color-text-primary)',
                                    borderRadius: '0',
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Send Request
                            </motion.button>

                        </form>
                    </div>
                </motion.div>

            </div>

            {/* Footer Copyright inside section */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '40px',
                fontSize: '0.75rem',
                opacity: 0.3,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>
                © 2025 Integrity Machinery Solutions.
            </div>
        </section>
    );
}