import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import GearAnimation from './GearAnimation';

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });

    return (
        <section id="about" ref={containerRef} className={`section-padding about ${isInView ? 'is-in-view' : ''}`}>
            <div className="container about-grid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>

                {/* --- LEFT SIDE: TEXT --- */}
                <div className="about-text" style={{ flex: '1 1 300px' }}>
                    <div className="reveal-text">
                        <span style={{ 
                            fontSize: '0.9rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.2em', 
                            marginBottom: '1rem', 
                            opacity: 0.6, 
                            color: 'var(--color-accent)', 
                            display: 'block' 
                        }}>
                            About Us
                        </span>
                    </div>

                    <h2>
                        <div className="reveal-text"><span style={{ transitionDelay: '0.1s' }}>Precision is</span></div>
                        <div className="reveal-text"><span style={{ transitionDelay: '0.2s' }}>not an act,</span></div>
                        <div className="reveal-text"><span style={{ transitionDelay: '0.3s' }}>it is a habit.</span></div>
                    </h2>

                    <div className="reveal-text">
                        <span style={{ transitionDelay: '0.4s', display: 'block', marginTop: '20px' }} className="about-desc">
                            We strip away the non-essential to reveal the pure mechanical soul of your industry. Our systems are designed not just to function, but to elevate the very concept of production.
                        </span>
                    </div>
                    
                    <br />

                    <div className="reveal-text">
                        <span style={{ transitionDelay: '0.5s', display: 'block' }} className="reveal-block">
                            <button className="btn-primary" style={{ marginTop: '20px' }}>
                                <span>Our Story</span>
                            </button>
                        </span>
                    </div>
                </div>

                {/* --- RIGHT SIDE: 3D GEAR ANIMATION --- */}
                <div className="about-visual" style={{ 
                    flex: '1 1 300px',
                    position: 'relative', 
                    // --- CHANGED SIZE HERE ---
                    height: '600px',  // Increased from 500px
                    minHeight: '600px', // Increased minimum height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    
                    {/* The 3D Canvas */}
                    <div style={{ width: '100%', height: '100%', zIndex: 10 }}>
                        <GearAnimation />
                    </div>

                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '500px', // Also increased glow size
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 70%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }} />

                </div>

            </div>
        </section>
    );
}