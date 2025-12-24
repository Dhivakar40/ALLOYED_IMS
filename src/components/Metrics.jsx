import React, { useEffect, useState } from "react";

/* ---------------- SLOT DIGIT ---------------- */

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
        {[0,1,2,3,4,5,6,7,8,9].map((n) => (
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

/* ---------------- SLOT NUMBER ---------------- */

const SlotNumber = ({ value }) => {
  const digits = Math.floor(value).toString().split("").map(Number);

  return (
    <div style={{ display: "flex" }}>
      {digits.map((digit, index) => (
        <SlotDigit key={index} digit={digit} />
      ))}
    </div>
  );
};

/* ---------------- LIVE SLOT COUNTER ---------------- */

const LiveSlotCounter = ({ start, suffix, live }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!live) return;

    let current = start;

    const interval = setInterval(() => {
      current += Math.random() * 3 + 1;
      setValue(current);
    }, 1800);

    return () => clearInterval(interval);
  }, [live, start]);

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

/* ---------------- STAT ITEM ---------------- */

const StatItem = ({ start, suffix, text, live }) => (
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
    <LiveSlotCounter start={start} suffix={suffix} live={live} />

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
  return (
    <section
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
            <StatItem start={50} suffix="+" text="CNC Machines" live />
            <StatItem start={9800000} suffix="+" text="Components Shipped" live />
            <StatItem start={2} suffix="µm" text="Tolerance" />
            <StatItem start={35} suffix="Yrs" text="Legacy" />
          </div>
        </div>

      </div>
    </section>
  );
}