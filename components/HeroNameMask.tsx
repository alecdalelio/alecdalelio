import React from "react";

export default function HeroNameMask() {
  return (
    <svg
      className="block w-full px-4 select-none"
      viewBox="0 0 1600 300"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Greyscale 3-stop gradient */}
        <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="40%"  stopColor="#cccccc" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>

        {/* Mask for text fill */}
        <mask id="nameMask">
          <text
            x="50%"
            y="66%"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            style={{
              fontSize: "clamp(3.75rem, 20vw, 10rem)",
              paintOrder: "stroke",
              strokeWidth: 0.5,
              stroke: "rgba(0,0,0,0.25)",
              opacity: 1,
            }}
            fill="white"
          >
            Alec D&apos;Alelio
          </text>
        </mask>
      </defs>

      {/* Gradient-filled text */}
      <rect

        width="100%"
        height="300"
        fill="url(#nameGradient)"
        mask="url(#nameMask)"
      />
    </svg>
  );
} 
