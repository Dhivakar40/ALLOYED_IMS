import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------- DATA: THE 6 STANDARD INDUSTRIAL PROCESSES ----------------
const projects = [
  { 
    id: 1,
    title: "Aerospace Impellers", 
    industry: "AEROSPACE",
    process: "5-Axis CNC Milling", 
    material: "Titanium Grade 5",
    specs: "Tolerance: +/- 0.002mm | Surface: Polished",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" // Replaced placeholder
  },
  { 
    id: 2,
    title: "Heavy Structural Frames", 
    industry: "CONSTRUCTION",
    process: "MIG & TIG Welding",
    material: "Structural Steel",
    specs: "Certified: AWS D1.1 | NDT Tested",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" // Replaced placeholder
  },
  { 
    id: 3,
    title: "Precision Drive Shafts", 
    industry: "AUTOMOTIVE",
    process: "CNC Turning (Lathe)",
    material: "Hardened Steel 4140",
    specs: "Concentricity: 0.01mm | High Volume",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" // Replaced placeholder
  },
  { 
    id: 4,
    title: "Electronic Enclosures", 
    industry: "ELECTRONICS",
    process: "Laser Cutting & Folding",
    material: "Aluminum 5052",
    specs: "Complex Bend Radii | Powder Coated",
    img: "https://images.unsplash.com/photo-1565514020176-db99c857e231?q=80&w=2070&auto=format&fit=crop" // Replaced placeholder
  },
  { 
    id: 5,
    title: "Engine Housings", 
    industry: "AUTOMATION",
    process: "High-Pressure Die Casting",
    material: "Aluminum Alloy",
    specs: "Mold Life: 100k Shots | Porosity Free",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" // Replaced placeholder
  },
  { 
    id: 6,
    title: "Industrial Gears", 
    industry: "MINING & OIL",
    process: "Heat Treatment & Hardening",
    material: "Carbon Steel",
    specs: "Hardness: 58-62 HRC | Carburized",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" // Replaced placeholder
  }
];

// ---------------- COMPONENT ----------------
export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Show top 3 or all 6 based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: '#0F1115',
        color: '#FFFFFF',
        paddingBottom: '120px',
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
          Process <br /> Capabilities
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          padding: '0 20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <AnimatePresence initial={false}>
          {visibleProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }} // Smooth exit
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth ease
              
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              
              style={{
                position: 'relative',
                height: '500px',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#151515',
                border: '1px solid #333'
              }}
            >
              {/* 1. BACKGROUND IMAGE */}
              <motion.div
                style={{ width: '100%', height: '100%' }}
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                  filter: hoveredId === project.id ? "grayscale(100%) brightness(0.4)" : "grayscale(20%) brightness(0.7)"
                }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              {/* 2. INDUSTRY TAG (Top Left) */}
              <div style={{ position: 'absolute', top: 25, left: 25, zIndex: 10 }}>
                <span style={{
                    fontFamily: '"Oswald", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    backgroundColor: '#FFFFFF',
                    color: '#000',
                    padding: '6px 12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    {project.industry}
                </span>
              </div>

              {/* 3. CONTENT OVERLAY (Bottom) */}
              <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '30px',
                  zIndex: 10,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)'
              }}>
                  <h3 style={{
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: '2rem',
                      textTransform: 'uppercase',
                      margin: '0 0 10px 0',
                      color: '#FFF',
                      lineHeight: 1
                  }}>
                      {project.title}
                  </h3>

                  {/* 4. SLIDE UP "DATASHEET" DETAILS */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                        height: hoveredId === project.id ? 'auto' : 0,
                        opacity: hoveredId === project.id ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                      <div style={{ 
                          paddingTop: '15px', 
                          borderTop: '1px solid rgba(255,255,255,0.2)',
                          marginTop: '15px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                      }}>
                          {/* PRIMARY PROCESS HIGHLIGHT */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px'}}>
                             <div style={{ 
                                 width: '8px', 
                                 height: '8px', 
                                 background: '#00ffcc', 
                                 borderRadius: '50%',
                                 boxShadow: '0 0 8px #00ffcc'
                             }}></div>
                             <span style={{ 
                                 color: '#00ffcc', 
                                 fontFamily: '"Oswald", sans-serif', 
                                 letterSpacing: '0.05em',
                                 fontSize: '1rem'
                             }}>
                                 {project.process}
                             </span>
                          </div>

                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#AAA', fontFamily: '"Manrope", sans-serif' }}>
                              <strong style={{ color: '#FFF' }}>Material:</strong> {project.material}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#AAA', fontFamily: '"Manrope", sans-serif' }}>
                              <strong style={{ color: '#FFF' }}>Specs:</strong> {project.specs}
                          </p>
                      </div>
                  </motion.div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- EXPAND BUTTON --- */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
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
  );
}