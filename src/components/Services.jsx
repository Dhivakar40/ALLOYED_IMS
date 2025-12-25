import React from 'react';
import { motion } from 'framer-motion';

// 1. DATA - UPDATED TO 6 ITEMS FOR SYMMETRY
const capabilities = [
    {
        id: "01",
        title: "Automotive Precision",
        tags: ["Engine Blocks", "Transmission", "Chassis", "EV Systems"],
        desc: "Driving the future of mobility. We manufacture high-tolerance components for internal combustion and electric vehicles.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop" 
    },
    {
        id: "02",
        title: "Aerospace Systems",
        tags: ["Turbine Blades", "Avionics Housing", "Landing Gear", "Structural"],
        desc: "Flight-critical engineering. Our components meet the rigorous safety and precision standards required for commercial aviation and defense sectors.",
        image: "flight.jpeg" 
    },
    {
        id: "03",
        title: "Locomotive & Rail",
        tags: ["Wheel Sets", "Braking Systems", "Heavy Suspension", "Couplers"],
        desc: "We manufacture heavy-duty, durable parts designed to withstand the extreme loads and long-haul demands of the rail industry.",
        image: "train.png" 
    },
    {
        id: "04",
        title: "Energy & Petrochemical",
        tags: ["High-Pressure Valves", "Drilling Rigs", "Pipeline", "Offshore"],
        desc: "Powering global infrastructure. We deliver corrosion-resistant, pressure-tested components built to survive the harshest oil and gas environments.",
        image: "oil.png" 
    },
    // --- NEW ITEM 5 ---
    {
        id: "05",
        title: "Medical Robotics",
        tags: ["Surgical Arms", "Implants", "Micro-Gears", "Bio-Compatible"],
        desc: "Precision that saves lives. We fabricate ultra-precise, sterile-ready components for next-generation surgical robots and medical devices.",
        image: "med.png"
    },
    // --- NEW ITEM 6 ---
    {
        id: "06",
        title: "Defense & Marine",
        tags: ["Naval Shafts", "Armor Plating", "Sonar Casings", "Ballistics"],
        desc: "Mission-ready hardware. We provide heavy-gauge, element-resistant manufacturing for naval fleets and tactical defense systems.",
        image: "marine.png"
    }
];

const materials = "ALUMINUM 6061 • STAINLESS STEEL 304 • TITANIUM • INCONEL • BRASS • TOOL STEEL • CARBON FIBER • ABS PLASTIC • ";

export default function Services() {
    return (
        <section 
            id="sectors" 
            style={{ 
                backgroundColor: '#0F1115', 
                color: '#FFFFFF', 
                position: 'relative',
                paddingBottom: '100px',
                minHeight: '100vh' 
            }}
        >
            {/* --- MATERIALS MARQUEE --- */}
            <div style={{
                width: '100%',
                background: '#1A1A1A',
                borderBottom: '1px solid #333',
                overflow: 'hidden',
                padding: '15px 0',
                marginBottom: '80px'
            }}>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    style={{
                        whiteSpace: 'nowrap',
                        fontSize: '0.9rem',
                        fontFamily: '"Oswald", sans-serif',
                        letterSpacing: '0.2em',
                        color: '#888',
                        display: 'flex',
                        gap: '40px'
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i}>{materials}</span>
                    ))}
                </motion.div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                
                {/* --- HEADER --- */}
                <div style={{ marginBottom: '60px', paddingLeft: '20px' }}>
                    <span style={{ 
                        display: 'block', 
                        width: '5rem', 
                        height: '3px', 
                        background: '#FFFFFF', 
                        marginBottom: '2rem' 
                    }}></span>
                    <h2 style={{ 
                        fontSize: 'clamp(3rem, 5vw, 5rem)', 
                        fontFamily: '"Oswald", sans-serif', 
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        Industries <br /> We Power.
                    </h2>
                    <p style={{ maxWidth: '600px', color: '#A0A0A0', lineHeight: '1.6', fontSize: '1.1rem' }}>
                        From the tarmac to the tracks, we provide the hardware backbone for the world's most critical sectors.
                    </p>
                </div>

                {/* --- GRID CONTAINER --- */}
                <div style={{
                    display: 'grid',
                    // Using 300px min width ensures 3 columns on desktop, 2 on tablet, 1 on mobile
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '60px', 
                    width: '100%',
                    alignItems: 'start' 
                }}>
                    {capabilities.map((service, i) => (
                        <motion.div 
                            key={i} 
                            initial="initial"
                            whileHover="hover" 
                            style={{ 
                                position: 'relative',
                                width: '100%',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Text Content */}
                            <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1, paddingRight: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ 
                                        fontSize: '4rem', 
                                        fontFamily: '"Oswald", sans-serif', 
                                        opacity: 0.2,
                                        fontWeight: 'bold'
                                    }}>
                                        {service.id}
                                    </span>
                                    {/* Tech Tags */}
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                        {service.tags.map((tag, t) => (
                                            <span key={t} style={{ 
                                                fontSize: '0.8rem', 
                                                border: '1px solid #444', 
                                                padding: '6px 12px', 
                                                borderRadius: '4px',
                                                color: '#CCC',
                                                backgroundColor: 'rgba(0,0,0,0.3)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 style={{ 
                                    fontSize: '2.5rem', 
                                    fontFamily: '"Oswald", sans-serif', 
                                    marginBottom: '1rem',
                                    color: '#FFF'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{ 
                                    fontSize: '1.1rem', 
                                    color: '#B0B0B0',
                                    lineHeight: '1.6',
                                    maxWidth: '95%'
                                }}>
                                    {service.desc}
                                </p>
                            </div>

                            {/* FRAME IMAGE */}
                            <motion.div 
                                variants={{
                                    initial: { 
                                        scale: 1, 
                                        y: 0,
                                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                                        zIndex: 1,
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    },
                                    hover: { 
                                        scale: 1.03, // Slight Frame Pop
                                        y: -10,      
                                        boxShadow: "0 30px 60px rgba(0,0,0,0.5)", 
                                        zIndex: 10,
                                        border: '1px solid rgba(255,255,255,0.4)'
                                    }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ 
                                    width: '100%', 
                                    height: '450px', 
                                    overflow: 'hidden', 
                                    borderRadius: '8px',
                                    background: '#000' 
                                }}
                            >
                                <motion.img 
                                    src={service.image} 
                                    alt={service.title}
                                    variants={{
                                        initial: { scale: 1 }, 
                                        hover: { scale: 1.05 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover' 
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}