import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. THE ICONS (Gmail & WhatsApp Only) ---
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
    )
};

// --- 2. FLOATING INPUT COMPONENT ---
const FloatingInput = ({ label, type = "text", placeholder, isTextArea = false, name, value, onChange, required }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={{ marginBottom: '35px', position: 'relative' }}>
            <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                color: '#A0A0A0', // Muted text for label
                opacity: 1
            }}>
                {label} {required && <span style={{ color: '#EA4335' }}>*</span>}
            </label>

            {isTextArea ? (
                <textarea
                    rows="4"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
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
                        color: '#FFFFFF',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none'
                    }}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
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
                        color: '#FFFFFF',
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
                    backgroundColor: '#FFFFFF'
                }}
            />
        </div>
    );
};

// --- 3. SOCIAL ICON COMPONENT ---
const SocialLink = ({ icon, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5, borderColor: '#FFFFFF' }}
        whileTap={{ scale: 0.9 }}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'transparent',
            borderRadius: '0px', 
            cursor: 'pointer',
            color: '#FFFFFF'
        }}
    >
        {icon}
    </motion.a>
);

// --- 4. MAIN COMPONENT ---
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Capture exact date and time of submission
        const currentDateTime = new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'long'
        });

        // 2. Construct the Formal Official Service Request Template
        const subject = encodeURIComponent(`Official Service Request: ${formData.name}`);
        const body = encodeURIComponent(`
==================================================
FORMAL SERVICE REQUEST - INTEGRITY MACHINING SOLUTIONS
==================================================

TIMESTAMP OF REQUEST: 
${currentDateTime}

SENDER DETAILS:
--------------------------------------------------
Name: ${formData.name}
Email: ${formData.email}

PROJECT / REQUIREMENT DESCRIPTION:
--------------------------------------------------
${formData.message}

==================================================
Note to IMS Admin: Please reply directly to the sender's email to acknowledge receipt and proceed with the inquiry.
`);

        // 3. Open Email Client with pre-filled data
        window.location.href = `mailto:integritymachiningsolutions@gmail.com?subject=${subject}&body=${body}`;
        
        // Optional: Clear form after opening mail client
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={{ backgroundColor: '#0F1115', color: '#FFFFFF', padding: '100px 0', position: 'relative' }}>
            <div style={{
                maxWidth: '1200px', // Adjusted to match the tight, boxed alignment in the image
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start', // Ensures top alignment
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
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            marginBottom: '1rem',
                            opacity: 0.5,
                            fontFamily: '"Oswald", sans-serif'
                        }}>
                            Inquiry
                        </h4>
                        
                        <h1 style={{ 
                            fontSize: 'clamp(4rem, 8vw, 7rem)', 
                            fontFamily: '"Oswald", sans-serif',
                            fontWeight: '800',
                            lineHeight: 0.9, 
                            marginBottom: '60px', 
                            textTransform: 'uppercase',
                            margin: '0 0 60px 0'
                        }}>
                            LET'S <br /> TALK.
                        </h1>

                        {/* Social Logos Row */}
                        <div>
                            <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '1.5rem', fontFamily: '"Oswald", sans-serif' }}>
                                Connect
                            </h5>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <SocialLink 
                                    icon={Icons.gmail} 
                                    href="mailto:integritymachiningsolutions@gmail.com" 
                                />
                                <SocialLink 
                                    icon={Icons.whatsapp} 
                                    href="https://wa.me/919364360603" 
                                />
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* 2. RIGHT SIDE: The Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 400px' }}
                >
                    <div style={{
                        backgroundColor: 'transparent', 
                        padding: '40px', // Adjusted padding to match screenshot proportion
                        borderRadius: '0',
                        border: '1px solid rgba(255,255,255,0.1)', // Subtle grey border matching image
                        position: 'relative'
                    }}>
                        <form onSubmit={handleSubmit}>

                            <FloatingInput 
                                label="Your Name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                required={true}
                            />
                            
                            <FloatingInput 
                                label="Email Address" 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com" 
                                required={true}
                            />
                            
                            <FloatingInput 
                                label="How can we help?" 
                                isTextArea={true} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..." 
                                required={true}
                            />

                            {/* SUBMIT BUTTON (Matched to original styling) */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, backgroundColor: '#FFFFFF', color: '#000000' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    marginTop: '20px',
                                    width: '100%',
                                    padding: '20px',
                                    backgroundColor: 'transparent',
                                    color: '#FFFFFF',
                                    border: '1px solid rgba(255,255,255,0.2)', // Subtle border
                                    borderRadius: '0',
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, color 0.3s'
                                }}
                            >
                                Send Request
                            </motion.button>

                        </form>
                    </div>
                </motion.div>

            </div>

            {/* Footer Copyright */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '40px',
                fontSize: '0.75rem',
                opacity: 0.3,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>
                © 2026 Integrity Machinery Solutions.
            </div>
        </section>
    );
}