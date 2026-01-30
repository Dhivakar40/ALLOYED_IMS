import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------- DATA: UPDATED PROCESS CAPABILITIES ----------------
const projects = [
  {
    id: 1,
    title: "CNC Turning",
    industry: "CORE CAPABILITY",
    process: "High-Precision Lathe Operations",
    material: "Steel, Aluminum, Brass",
    specs: "Dia: 165mm - 210mm | LMW Machines",
    img: "/cnc_turning_new.png"
  },
  {
    id: 2,
    title: "CNC Turn-Milling",
    industry: "ADVANCED MACHINING",
    process: "Integrated Mill-Turn Operations",
    material: "Stainless Steel & Alloys",
    specs: "Complex Geometries | Single Setup",
    img: "/cnc_turn_milling_new.jpg"
  },
  {
    id: 3,
    title: "Precision Manufacturing",
    industry: "COMPONENT FABRICATION",
    process: "End-to-End Production",
    material: "All Engineering Metals",
    specs: "ISO 9001 Standards | Zero Defect",
    img: "/precision_manufacturing_final.jpg"
  },
  {
    id: 4,
    title: "Prototype & Batch",
    industry: "SCALABLE SOLUTIONS",
    process: "Development to Mass Production",
    material: "Rapid Prototyping",
    specs: "Flexible Volumes | Fast Turnaround",
    img: "/prototype_batch_final.jpg"
  },
  {
    id: 5,
    title: "Tight Tolerance",
    industry: "HIGH ACCURACY",
    process: "Micron-Level Machining",
    material: "Titanium, Inconel, Copper",
    specs: "+/- 0.005mm | Super Finishing",
    img: "/tight_tolerance_final.png"
  },
  {
    id: 6,
    title: "Multi-Material Machining",
    industry: "MATERIAL EXPERTISE",
    process: "Steel, SS, Al, Copper, Brass",
    material: "Special Alloys & Hardened Steel",
    specs: "Hardness up to 62 HRC",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  }
];

// ---------------- INFRASTRUCTURE DATA (FROM PDF) ----------------
const machines = [
  {
    category: "CNC TURNING CENTERS",
    make: "LMW (Lakshmi Machine Works)",
    items: [
      { name: "S Turn 1 (165mm Dia)", count: 2 },
      { name: "S Turn 1 (210mm Dia)", count: 2 },
      { name: "Smart Turn 1 (165mm Dia)", count: 2 }
    ]
  },
  {
    category: "CNC TURN-MILL",
    make: "LMW (Lakshmi Machine Works)",
    items: [
      { name: "TurnMill (210mm Dia)", count: 1 },
      { name: "Complex Geometry Capable", count: "✓" }
    ]
  },
  {
    category: "QUALITY ASSURANCE",
    make: "Precision Metrology Lab",
    items: [
      { name: "Vernier Calipers & Micrometers", count: "✓" },
      { name: "Bore Gauges & Height Gauges", count: "✓" },
      { name: "Dial Indicators & Surface Plate", count: "✓" },
      { name: "Thread & Plug Gauges", count: "✓" }
    ]
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
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}

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

              {/* 2. INDUSTRY TAG */}
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

              {/* 3. CONTENT OVERLAY */}
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

                {/* 4. SLIDE UP DETAILS */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                      <div style={{
                        width: '8px', height: '8px', background: '#00ffcc',
                        borderRadius: '50%', boxShadow: '0 0 8px #00ffcc'
                      }}></div>
                      <span style={{
                        color: '#00ffcc', fontFamily: '"Oswald", sans-serif',
                        letterSpacing: '0.05em', fontSize: '1rem'
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

      {/* --- IMPROVED INFRASTRUCTURE SECTION --- */}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, #00ffcc, transparent)' }} />

              <h4 style={{
                color: '#FFFFFF',
                margin: '0 0 5px 0',
                fontFamily: '"Oswald", sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '0.05em'
              }}>
                {cat.category}
              </h4>
              <p style={{
                color: '#666',
                fontSize: '0.8rem',
                margin: '0 0 25px 0',
                fontFamily: '"Manrope", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {cat.make}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    padding: '12px 0',
                    fontSize: '0.95rem',
                    color: '#AAA'
                  }}>
                    <span>{item.name}</span>
                    <span style={{
                      background: 'rgba(0, 255, 204, 0.1)',
                      color: '#00ffcc',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontFamily: '"Oswald", sans-serif'
                    }}>
                      {typeof item.count === 'number' ? `${item.count} UNITS` : item.count}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}