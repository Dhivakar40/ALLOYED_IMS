import React, { useEffect, useState } from "react";

// --- CONFIGURATION ---
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKJwf4jetoCtkbDfjaPqDS_aAwBfZkP0wY3F9Nst9IGxqME3XILukM4NuI5IgzBZyW7-ijF2zoIgJv/pub?output=csv";

// Fallback values
const INITIAL_STATE = {
  machines: 50,
  shipped: 9800000,
  tolerance: 2,
  legacy: 35
};

/* ---------------- SLOT DIGIT ---------------- */
const SlotDigit = ({ digit }) => {
  const DIGIT_HEIGHT = 48; // Kept constant for JS logic

  return (
    <div
      style={{
        overflow: "hidden",
        height: `${DIGIT_HEIGHT}px`,
        width: "28px", // Fixed width per digit
        display: "inline-block",
      }}
    >
      <div
        style={{
          transform: `translateY(-${digit * DIGIT_HEIGHT}px)`,
          transition: "transform 1.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div
            key={n}
            style={{
              height: `${DIGIT_HEIGHT}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              fontWeight: 300,
              color: '#FFF'
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- SLOT NUMBER ---------------- */
const SlotNumber = ({ value }) => {
  const safeValue = Math.floor(value || 0);
  const digits = safeValue.toString().split("").map(Number);

  return (
    <div style={{ display: "flex" }}>
      {digits.map((digit, index) => (
        <SlotDigit key={index} digit={digit} />
      ))}
    </div>
  );
};

/* ---------------- STAT ITEM ---------------- */
const StatItem = ({ value, suffix, text, live }) => (
  <div
    style={{
      textAlign: "center",
      padding: "1rem 0.5rem",
      minWidth: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* SCALER WRAPPER */}
    <div style={{ 
        display: "flex", 
        alignItems: "flex-end",
        transform: 'scale(0.8)', 
        transformOrigin: 'bottom center',
    }}>
      <SlotNumber value={value} />
      <span
        style={{
          marginLeft: "6px",
          fontSize: "1.6rem",
          color: '#00cc88', // FIXED: Removed duplicate key
          marginBottom: '5px'
        }}
      >
        {suffix}
      </span>
    </div>

    {/* LARGE LABEL */}
    <p
      style={{
        marginTop: "0.5rem",
        fontSize: "1rem", 
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: "#A0A0A0",
        fontWeight: "800",
        minHeight: "1.6rem",
      }}
    >
      {text}
    </p>

    {/* LIVE INDICATOR */}
    <div
      style={{
        height: "22px",
        marginTop: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {live && (
        <div
          style={{
            fontSize: "0.75rem",
            color: "limegreen",
            letterSpacing: "0.15em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "limegreen",
              animation: "pulse 1.5s infinite",
            }}
          />
          LIVE
        </div>
      )}
    </div>
    
    <style>{`
      @keyframes pulse {
        0% { opacity: 1; box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.7); }
        70% { opacity: 1; box-shadow: 0 0 0 6px rgba(50, 205, 50, 0); }
        100% { opacity: 1; box-shadow: 0 0 0 0 rgba(50, 205, 50, 0); }
      }
    `}</style>
  </div>
);

/* ---------------- MAIN ---------------- */
export default function Metrics() {
  const [metrics, setMetrics] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const cacheBuster = new Date().getTime();
        const response = await fetch(`${SHEET_URL}&t=${cacheBuster}`);
        const text = await response.text();
        
        const rows = text.split(/\r?\n/);
        const newMetrics = { ...metrics };

        rows.forEach(row => {
          const parts = row.split(',');
          if (parts.length >= 2) {
            const key = parts[0].trim().toLowerCase();
            const valString = parts[1].replace(/,/g, '').trim(); 
            const val = parseFloat(valString);
            
            if (!isNaN(val)) {
                if(key.includes('machine')) newMetrics.machines = val;
                if(key.includes('shipped')) newMetrics.shipped = val;
                if(key.includes('tolerance')) newMetrics.tolerance = val;
                if(key.includes('legacy')) newMetrics.legacy = val;
            }
          }
        });
        setMetrics(newMetrics);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <section
      id="metrics"
      className="section-padding"
      style={{
        background: "#0F1115",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 0"
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        {/* SECTION TITLE */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)", 
              fontWeight: "700",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "1rem"
            }}
          >
            We Value Transparency
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 4vw, 1.2rem)",
              color: "#A0A0A0",
              maxWidth: "500px",
              marginInline: "auto",
              lineHeight: 1.6
            }}
          >
            Real-time metrics that reflect our commitment to precision,
            performance, and trust.
          </p>
        </div>

        {/* METRICS BOX */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            padding: "2rem 1rem",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <StatItem value={metrics.machines} suffix="+" text="CNC Machines" live />
            <StatItem value={metrics.shipped} suffix="+" text="Components Shipped" live />
            <StatItem value={metrics.tolerance} suffix="µm" text="Tolerance" />
            <StatItem value={metrics.legacy} suffix="Yrs" text="Legacy" />
          </div>
        </div>

      </div>
    </section>
  );
}