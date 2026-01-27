import React from 'react';
import { motion } from 'framer-motion';

[cite_start]// Specific Group Customers List [cite: 61-70]
const CLIENTS = [
    "ASHOK LEYLAND",
    "TATA ELECTRONICS",
    "TITAN ENGINEERING",
    "SHEFFLER INDIA",
    "HUBBEL INDIA",
    "MINI AEROSPACE",
    "SFO GROUP",
    "ICON MEDICARE"
];

export default function Clients() {
  return (
    <section style={{ 
        backgroundColor: '#0F1115', 
        padding: '60px 0', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden'
    }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
            <p style={{ 
                color: '#888', 
                fontSize: '0.9rem', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase',
                fontFamily: '"Manrope", sans-serif',
                marginBottom: '10px'
            }}>
                Our Group Customers
            </p>
            <p style={{ color: '#555', fontSize: '0.8rem', maxWidth: '600px', margin: '0 auto' }}>
                Serving leading OEMs and Tier-1 customers across automobile, automation, aerospace, and medical sectors.
            </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div style={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
            
            {/* Gradient Masks */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, #0F1115, transparent)', zIndex: 2 }}></div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, #0F1115, transparent)', zIndex: 2 }}></div>

            {/* Moving Track */}
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{ display: 'flex', gap: '80px', paddingLeft: '80px' }}
            >
                {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <h3 key={i} style={{ 
                        fontFamily: '"Oswald", sans-serif', 
                        fontSize: '2rem', 
                        color: 'rgba(255,255,255,0.15)', 
                        margin: 0,
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap'
                    }}>
                        {client}
                    </h3>
                ))}
            </motion.div>
        </div>
    </section>
  );
}