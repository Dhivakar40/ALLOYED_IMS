import React, { useEffect, useState } from "react";

// --- CONFIGURATION ---
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKJwf4jetoCtkbDfjaPqDS_aAwBfZkP0wY3F9Nst9IGxqME3XILukM4NuI5IgzBZyW7-ijF2zoIgJv/pub?output=csv";

/* ---------------- SLOT DIGIT (Unchanged) ---------------- */
const SlotDigit = ({ digit }) => {
  const DIGIT_HEIGHT = 48;

  return (
    <div
      style={{
        overflow: "hidden",
        height: `${DIGIT_HEIGHT}px`,
        width: "28px",
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
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- SLOT NUMBER (Unchanged) ---------------- */
const SlotNumber = ({ value }) => {
  // Ensure we always have a valid number to split
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

/* ---------------- LIVE SLOT COUNTER (Updated logic, same look) ---------------- */
const LiveSlotCounter = ({ value, suffix }) => {
  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <SlotNumber value={value} />
      <span
        style={{
          marginLeft: "6px",
          fontSize: "1.6rem",
          color: "var(--color-accent)",
        }}
      >
        {suffix}
      </span>
    </div>
  );
};

/* ---------------- STAT ITEM (Unchanged layout) ---------------- */
const StatItem = ({ value, suffix, text, live }) => (
  <div
    style={{
      textAlign: "center",
      padding: "1rem 2rem",
      minWidth: "220px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <LiveSlotCounter value={value} suffix={suffix} />

    {/* LARGE LABEL */}
    <p
      style={{
        marginTop: "1.25rem",
        fontSize: "1.15rem",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: "var(--color-text-primary)",
        fontWeight: "800",
        minHeight: "1.6rem",
      }}
    >
      {text}
    </p>

    {/* FIXED HEIGHT LIVE AREA */}
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
            fontSize: "0.85rem",
            color: "limegreen",
            letterSpacing: "0.15em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "limegreen",
              animation: "pulse 1.5s infinite",
            }}
          />
          LIVE
        </div>
      )}
    </div>
  </div>
);

/* ---------------- MAIN ---------------- */
export default function Metrics() {
  // Default Initial State
  const [metrics, setMetrics] = useState({
    machines: 50,
    shipped: 9800000,
    tolerance: 2,
    legacy: 35
  });

  // Fetch Google Sheet Data on Mount
 useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // TRICK: We add ?t=Timestamp to force the browser to get a fresh version
        // This stops your browser from 'remembering' old numbers.
        const cacheBuster = new Date().getTime();
        const response = await fetch(`${SHEET_URL}&t=${cacheBuster}`);
        const text = await response.text();
        
        console.log("Raw CSV Data:", text); // Check your console to see what arrives!

        // ROBUST PARSING: Handles Windows (\r\n) and Mac (\n) line breaks
        const rows = text.split(/\r?\n/);
        const newMetrics = { ...metrics };

        rows.forEach(row => {
          // Split by comma
          const parts = row.split(',');
          // We assume Column A is Key, Column B is Value
          if (parts.length >= 2) {
            const key = parts[0].trim().toLowerCase();
            // If the value has commas (e.g. "9,000"), remove them
            const valString = parts[1].replace(/,/g, '').trim(); 
            const val = parseFloat(valString);
            
            if (!isNaN(val)) {
               newMetrics[cleanKey(key)] = val;
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

  // Helper to map sheet keys to state keys (just in case of typos)
  const cleanKey = (key) => {
      if(key.includes('machine')) return 'machines';
      if(key.includes('shipped')) return 'shipped';
      if(key.includes('legacy')) return 'legacy';
      if(key.includes('tolerance')) return 'tolerance';
      return key;
  };
  return (
    <section
      id="metrics"
      className="section-padding"
      style={{
        background: "var(--color-bg)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">

        {/* SECTION TITLE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              color: "var(--color-text-primary)",
              textTransform: "uppercase",
            }}
          >
            We Value Transparency...
          </h2>

          {/* Optional subtitle */}
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "1.5rem",
              color: "var(--color-text-secondary)",
              maxWidth: "520px",
              marginInline: "auto",
            }}
          >
            Real-time metrics that reflect our commitment to precision,
            performance, and trust.
          </p>
        </div>

        {/* OUTER ROUNDED RECTANGLE */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            padding: "3rem 2rem",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "2.5rem",
            }}
          >
            {/* 1. CNC MACHINES */}
            {/* Note: Ensure your Google Sheet uses keys: 'machines', 'shipped', 'tolerance', 'legacy' */}
            <StatItem value={metrics.machines} suffix="+" text="CNC Machines" live />
            
            {/* 2. COMPONENTS SHIPPED */}
            <StatItem value={metrics.shipped} suffix="+" text="Components Shipped" live />
            
            {/* 3. TOLERANCE */}
            <StatItem value={metrics.tolerance} suffix="µm" text="Tolerance" />
            
            {/* 4. LEGACY */}
            <StatItem value={metrics.legacy} suffix="Yrs" text="Legacy" />
          </div>
        </div>

      </div>
    </section>
  );
}