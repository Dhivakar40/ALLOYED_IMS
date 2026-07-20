import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- DATA: Extracted from Customer Document with Logo Paths ---
const CLIENT_DATA = [
  { name: "M/s Armor Plast Private Limited", logo: "/armor_plast_logo.png", location: "Bangalore", products: "1) Mould Components and 2) Electrode", since: "2021" },
  { name: "M/s Hubbell Services Private Limited", logo: "/hubbell_logo.png", location: "Chennai", products: "VMC Fixtures", since: "2024" },
  { name: "Hya tech Private Limited", logo: "/hya_tech_logo.png", location: "Hosur", products: "Fixtures and Pins", since: "2024" },
  { name: "ICAM Solutions Private Limited", logo: "/icam_logo.png", location: "Bangalore", products: "Aerospace Components", since: "2024" },
  { name: "Molbio Diagnostics Private Limited", logo: "/molbio_logo.png", location: "Visakapatnam", products: "Medical Equipment Components", since: "2024" },
  { name: "Narasipur Auto Components Private Limited", logo: "/narasipur_logo.png", location: "Bangalore", products: "Fixtures and Machined Components", since: "2022" },
  { name: "Manufactec Solutions India Private Limited", logo: "/manufactec_logo.png", location: "Hosur", products: "Automotive Components", since: "2022" },
  { name: "Rikki Plastics Private Limited", logo: "/rikki_plastics_logo.png", location: "Hosur", products: "1) Mould Components and 2) Electrode", since: "2021" },
  { name: "STS manufacturing Private Limited", logo: "/sts_mfg_logo.png", location: "Hosur", products: "VMC Machined Components", since: "2021" },
  { name: "Tata Electronics Private Limited", logo: "/tata_electronics_logo.png", location: "Hosur", products: "Fixtures and Machined Components", since: "2021" },
  { name: "TEAM Auto Tech India Pvt Ltd", logo: "/team_auto_tech_logo.png", location: "Hosur", products: "Machined Components", since: "2024" },
  { name: "Vithram India", logo: "/vithram_logo.png", location: "Coimbatore", products: "Machined Components", since: "2020" },
  { name: "Schaeffler India Limited", logo: "/schaeffler_logo.png", location: "Hosur", products: "Fixtures & Machined Components", since: "2025" },
  { name: "Rangsons Aerospace Private Limited", logo: "/rangsons_logo.png", location: "Bangalore", products: "Fixtures & Aerospace Components", since: "2025" },
  { name: "Laversab India Aviation Private Limited", logo: "/laversab_logo.png", location: "Bangaluru", products: "Aerospace Components", since: "2025" }
];

// Split the data into two rows for the dual marquee
const halfLength = Math.ceil(CLIENT_DATA.length / 2);
const ROW_1_DATA = CLIENT_DATA.slice(0, halfLength);
const ROW_2_DATA = CLIENT_DATA.slice(halfLength);

// --- 3D INTERACTIVE TILT CARD COMPONENT ---
const TiltCard = ({ client }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculates the tilt angle based on mouse position relative to the card center
  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    
    // Adjust the divider (20) to make the tilt more or less extreme
    setRotateX(-y / 20);
    setRotateY(x / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div style={{ perspective: '1000px', width: '100%', height: '100%' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered 
            ? '0 20px 40px rgba(0, 255, 204, 0.1), inset 0 0 0 1px rgba(0, 255, 204, 0.3)' 
            : '0 4px 10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          background: 'linear-gradient(145deg, rgba(30, 32, 38, 0.8) 0%, rgba(15, 17, 21, 0.9) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '30px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated Glow moving with mouse (Simulated) */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle at center, rgba(0, 255, 204, 0.08) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 0,
            transform: `translateZ(-10px)`
          }}
        />

        {/* Card Header: Year & Location */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', zIndex: 1, transform: 'translateZ(20px)' }}>
          <span style={{ 
            background: 'rgba(0, 255, 204, 0.1)', 
            color: '#00ffcc', 
            padding: '4px 10px', 
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontFamily: '"Oswald", sans-serif',
            letterSpacing: '0.1em'
          }}>
            SINCE {client.since}
          </span>
          <span style={{ 
            color: '#888', 
            fontSize: '0.8rem', 
            fontFamily: '"Manrope", sans-serif',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{ fontSize: '1rem' }}></span> {client.location}
          </span>
        </div>

        {/* Card Body: Logo & Company Name */}
        <div style={{ flex: 1, zIndex: 1, transform: 'translateZ(30px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <img 
            src={client.logo} 
            alt={`${client.name} logo`}
            onError={(e) => { e.target.style.display = 'none'; }} // Gracefully hides broken images if logo is missing
            style={{
                height: '60px',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'left',
                marginBottom: '15px',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))'
            }}
          />

          <h3 style={{
            fontFamily: '"Oswald", sans-serif',
            fontSize: '1.2rem', 
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: '0 0 15px 0',
            lineHeight: '1.3'
          }}>
            {client.name}
          </h3>
        </div>

        {/* Card Footer: Products */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '20px', 
          marginTop: 'auto',
          zIndex: 1,
          transform: 'translateZ(20px)'
        }}>
          <p style={{
            fontFamily: '"Manrope", sans-serif',
            color: '#AAA',
            fontSize: '0.85rem',
            margin: 0,
            lineHeight: '1.5'
          }}>
            <strong style={{ color: '#FFF', display: 'block', marginBottom: '4px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Products Supplied:
            </strong>
            {client.products}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// --- CONTINUOUS MARQUEE COMPONENT ---
const MarqueeRow = ({ items, direction = "left" }) => {
  // Duplicate items to create a seamless infinite loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      overflow: 'hidden', 
      padding: '15px 0',
      // Edge-to-edge fade mask
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
    }}>
      <motion.div
        animate={{ 
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] 
        }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 50 // Adjust this to speed up or slow down the marquee
        }}
        style={{ 
          display: 'flex', 
          gap: '30px', 
          width: 'max-content',
          paddingLeft: '30px'
        }}
      >
        {duplicatedItems.map((client, index) => (
          <div key={index} style={{ width: '350px', height: '320px', flexShrink: 0 }}>
            <TiltCard client={client} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Clients() {
  return (
    <section 
      id="clients"
      style={{
        backgroundColor: '#050608',
        padding: '120px 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* Background Subtle Grid & Overlay */}
      <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px', opacity: 0.3, pointerEvents: 'none'
      }} />
      <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '80%', height: '500px',
          background: 'radial-gradient(ellipse at top, rgba(0, 255, 204, 0.05), transparent 70%)',
          pointerEvents: 'none'
      }} />

      {/* --- HEADER SECTION --- */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '900px', marginInline: 'auto' }}>
            <motion.span
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                style={{
                    color: '#00ffcc', 
                    fontSize: '0.9rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '15px'
                }}
            >
                Industrial Partnerships
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
                Bunny Industries serves leading OEMs and Tier-1 customers across the Automobile, Automation, Aerospace, and Medical sectors. 
                Our promoters bring decades of proven performance through these long-standing relationships.
            </motion.p>
        </div>
      </div>

      {/* --- DUAL MARQUEE SECTION --- */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* ROW 1: Moves Left */}
        <MarqueeRow items={ROW_1_DATA} direction="left" />
        
        {/* ROW 2: Moves Right */}
        <MarqueeRow items={ROW_2_DATA} direction="right" />
      </div>

    </section>
  );
}