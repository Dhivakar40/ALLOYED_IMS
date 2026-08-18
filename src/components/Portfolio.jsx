import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------- DATA: NEW PROCESS CAPABILITIES ----------------
const projects = [
  { 
    id: 1,
    title: "VMC", 
    desc: "Five premium VMC machines (Doosan & Haas) featuring advanced 4+1 axis machining and capacities up to 1.2m for large-scale, high-precision projects.",
    img: "/vmc_machine.png" 
  },
  { 
    id: 2,
    title: "CNC Turning & Turnmill", 
    desc: "Complementing our milling operations, we utilize five advanced LMW CNC turning centers and one turn-mill engineered for absolute high-volume efficiency.",
    img: "/cnc_machine.png" 
  },
  { 
    id: 3,
    title: "EDM Wire Cutting", 
    desc: "Two high-precision Excon Wire EDM machines (350x450x450mm capacity) utilized to effortlessly execute complex geometries and intricate profiles.",
    img: "/wire_cutting_machine.png" 
  },
  { 
    id: 4,
    title: "EDM Sparking", 
    desc: "Advanced Electronica spark erosion technology delivering micro-level accuracy and pristine surface finishes on complex, hard-to-machine components.",
    img: "/sparking_machine.png" 
  },
  { 
    id: 5,
    title: "Conventional Machineries", 
    desc: "A versatile lineup of secondary machinery—including 3 milling machines, 3 surface grinders, 3 jig borers, and lathe operations—for comprehensive toolroom support.",
    img: "/vertical_milling_machine.png" 
  }
];

// ---------------- DATA: AGGREGATED MACHINE INFRASTRUCTURE ----------------
const machines = [
  {
    category: "VMC",
    img: "/vmc_machine.png",
    count: 6,
    items: [
      { make: "HASS", capacity: "762x508x508MM", count: 1 },
      { make: "BFW", capacity: "700x400x400MM", count: 1 },
      { make: "DHOOSAN", capacity: "1500x670x625MM", count: 1 },
      { make: "BATLIBAI", capacity: "950x520x480MM", count: 1 }
    ]
  },
  {
    category: "CNC",
    img: "/cnc_machine.png",
    count: 2,
    items: [
      { make: "LMW", capacity: "Ø160x250MM", count: 2 }
    ]
  },
  {
    category: "WIRECUTTING",
    img: "/wire_cutting_machine.png",
    count: 2,
    items: [
      { make: "EXCON", capacity: "350x450x450MM", count: 2 }
    ]
  },
  {
    category: "SPARKING",
    img: "/sparking_machine.png",
    count: 1,
    items: [
      { make: "ELECTRONICA", capacity: "400x300x400MM", count: 1 }
    ]
  },
  {
    category: "VERTICAL MILLING",
    img: "/vertical_milling_machine.png",
    count: 2,
    items: [
      { make: "HMT", capacity: "500x300x200MM", count: 1 },
      { make: "OKK", capacity: "600X300X250MM", count: 1 }
    ]
  },
  {
    category: "HORIZONDAL MILLING",
    img: "/horizontal_milling_machine.png", 
    count: 1,
    items: [
      { make: "HMT", capacity: "700x300x220MM", count: 1 }
    ]
  },
  {
    category: "SURFACE GRINDING",
    img: "/surface_grinding_machine.png",
    count: 3,
    items: [
      { make: "PERFECT", capacity: "600x300x200MM", count: 1 },
      { make: "KENT", capacity: "500x200x200MM", count: 1 },
      { make: "OKAMOTA", capacity: "500x200x200MM", count: 1 }
    ]
  },
  {
    category: "JIGBORING",
    img: "/jigboring_machine.png",
    count: 3,
    items: [
      { make: "SNT", capacity: "1100x300x280MM", count: 2 },
      { make: "AATHREYA", capacity: "1100x300x280MM", count: 1 }
    ]
  },
  {
    category: "BENCH GRINDING MACHINE",
    img: "/bench_grinding_machine.png",
    count: 1,
    items: [
      { make: "MGEEYEM", capacity: "2800RPM", count: 1 }
    ]
  },
  {
    category: "TAPPING MACHINE",
    img: "/tapping_machine.png",
    count: 1,
    items: [
      { make: "MRCM", capacity: "M2 TO M12 MM", count: 1 }
    ]
  },
  {
    category: "POWER HACKSAW MACHINE",
    img: "/power_hack_saw_machine.png",
    count: 1,
    items: [
      { make: "NU-TECH", capacity: "DIA 8MM DIA 150MM", count: 1 }
    ]
  },
  {
    category: "LATHE MACHINE",
    img: "/lathe_machine.png",
    count: 1,
    items: [
      { make: "SHREE", capacity: "Ø200x600MM", count: 1 }
    ]
  },
  {
    category: "DRILLING MACHINE",
    img: "/drilling_machine.png", 
    count: 1,
    items: [
      { make: "VERTEX", capacity: "300x150x200MM", count: 1 }
    ]
  },
  {
    category: "BUFFING MACHINE",
    img: "/buffing_machine.png",
    count: 1,
    items: [
      { make: "BARAS", capacity: "2880RPM", count: 1 }
    ]
  },
  {
    category: "ENGRAVING MACHINE",
    img: "/engraving_machine.png",
    count: 1,
    items: [
      { make: "ACME LASER", capacity: "300MM LENGTH", count: 1 }
    ]
  },
  {
    category: "COMPRESSOR",
    img: "/compressor.png",
    count: 1,
    items: [
      { make: "HANBELL", capacity: "15 HP", count: 1 }
    ]
  },
  {
    category: "GENERATOR",
    img: "/generator.png", 
    count: 1,
    items: [
      { make: "ASHOK LEYLAND", capacity: "40 KVA", count: 1 }
    ]
  }
];

// ---------------- COMPONENT ----------------
export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section
        id="portfolio"
        style={{
          backgroundColor: '#0F1115',
          color: '#FFFFFF',
          position: 'relative'
        }}
      >
        {/* --- HEADER --- */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 20px 60px' }}>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            transition={{ duration: 1 }}
            style={{
              display: 'block',
              height: '3px',
              background: '#FFFFFF',
              marginBottom: '2rem'
            }}
          />
          <h2
            style={{
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              fontFamily: '"Oswald", sans-serif',
              textTransform: 'uppercase',
              lineHeight: '1',
              margin: 0
            }}
          >
            Machineries & <br /> Equipments
          </h2>

          <p
            style={{
              maxWidth: '600px',
              marginTop: '30px',
              color: '#A0A0A0',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}
          >
            We are a full-service contract manufacturer. Our facility is equipped to handle 
            every stage of production, from raw material to finished, heat-treated precision components.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div
          style={{
            display: 'grid',
            // Specifically tuned to exactly fit 3 cards in a row beautifully on desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px',
            padding: '0 20px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }} 
                transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }} 
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                style={{
                  position: 'relative',
                  height: '450px', // slightly adjusted height for a cleaner look
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#151515',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* 1. BACKGROUND IMAGE */}
                <div style={{ width: '100%', height: '100%' }}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    onError={(e) => { e.target.style.display = 'none'; }}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        filter: 'grayscale(20%) brightness(0.8)' 
                    }}
                  />
                </div>

                {/* 2. CONTENT OVERLAY */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '40px 30px 30px',
                    zIndex: 10,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    <h3 style={{
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: '1.8rem',
                        textTransform: 'uppercase',
                        margin: '0 0 12px 0',
                        color: '#FFF',
                        lineHeight: 1.1,
                        letterSpacing: '0.05em'
                    }}>
                        {project.title}
                    </h3>
                    <p style={{ 
                        margin: 0, 
                        fontSize: '1rem', 
                        color: '#B0B0B0', 
                        fontFamily: '"Manrope", sans-serif', 
                        lineHeight: '1.6' 
                    }}>
                        {project.desc}
                    </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- EXPAND BUTTON --- */}
        <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '100px' }}>
          <motion.button
            onClick={() => setShowAll(prev => !prev)}
            whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.4)',
              padding: '16px 45px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              cursor: 'pointer',
              fontFamily: '"Oswald", sans-serif',
              transition: 'background-color 0.3s, color 0.3s'
            }}
          >
            {showAll ? 'View Less Capabilities' : 'View Full Capability List'}
          </motion.button>
        </div>
      </section>

      {/* --- IMPROVED INFRASTRUCTURE SECTION (NOW ITS OWN SECTION) --- */}
      <section 
        id="infrastructure" 
        style={{ 
          backgroundColor: '#0F1115', 
          paddingBottom: '120px'
        }}
      >
        <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            padding: '0 20px' 
        }}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px', 
                marginBottom: '40px' 
            }}>
               <span style={{ height: '2px', flex: 1, background: 'linear-gradient(to right, transparent, #333)' }}></span>
               <h3 style={{ 
                   fontFamily: '"Oswald", sans-serif', 
                   fontSize: '2rem', 
                   textAlign: 'center', 
                   margin: 0,
                   color: '#FFF',
                   letterSpacing: '0.1em'
               }}>
                   MACHINE INFRASTRUCTURE
               </h3>
               <span style={{ height: '2px', flex: 1, background: 'linear-gradient(to left, transparent, #333)' }}></span>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '30px' 
            }}>
                {machines.map((cat, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        style={{
                            background: 'linear-gradient(145deg, #1A1A1A 0%, #0F1115 100%)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Top Accent Line */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, #00ffcc, transparent)', zIndex: 10 }} />
                        
                        {/* IMAGE BANNER: Updated for Edge-to-Edge full visibility */}
                        <img 
                          src={cat.img} 
                          alt={cat.category}
                          onError={(e) => { e.target.style.display = 'none'; }}
                          style={{
                              width: '100%',
                              height: '320px', // Dramatically increased height so the machine takes up most of the card
                              objectFit: 'cover', // Fills the frame edge-to-edge beautifully
                              objectPosition: 'center', // Keeps the machine perfectly centered
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              filter: 'brightness(0.95)' // Keeps the image crisp and clear
                          }}
                        />

                        {/* CONTENT WRAPPER: Align items to flex-start prevents spacing issues on short lists */}
                        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                                <h4 style={{ 
                                    color: '#FFFFFF', 
                                    margin: 0, 
                                    fontFamily: '"Oswald", sans-serif', 
                                    fontSize: '1.3rem',
                                    letterSpacing: '0.05em'
                                }}>
                                    {cat.category}
                                </h4>
                                <span style={{ 
                                    background: 'rgba(0, 255, 204, 0.1)', 
                                    color: '#00ffcc', 
                                    padding: '4px 10px', 
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    fontFamily: '"Oswald", sans-serif'
                                }}>
                                    {cat.count} {cat.count > 1 ? 'UNITS' : 'UNIT'}
                                </span>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {cat.items.map((item, j) => (
                                    <li key={j} style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'flex-start', 
                                        borderBottom: j !== cat.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                        padding: '12px 0',
                                        fontSize: '0.95rem'
                                    }}>
                                        <div>
                                          <span style={{ display: 'block', color: '#FFF', fontWeight: '500', marginBottom: '2px' }}>{item.make}</span>
                                          <span style={{ color: '#777', fontSize: '0.8rem', fontFamily: '"Manrope", sans-serif' }}>{item.capacity}</span>
                                        </div>
                                        {item.count > 1 && (
                                            <span style={{ color: '#AAA', fontSize: '0.85rem' }}>x{item.count}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}