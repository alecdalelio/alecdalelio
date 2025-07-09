"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * ProceduralBackground - Generates a subtle noise pattern using SVG
 * Uses Perlin-like noise pattern with very low opacity for texture
 * Optimized for performance and retina displays
 */
export default function ProceduralBackground() {
  const [floatingDots, setFloatingDots] = useState<Array<{
    cx: number;
    cy: number;
    r: number;
    opacity: number;
  }>>([]);

  // Generate random coordinates only on client-side to prevent hydration mismatch
  useEffect(() => {
    const dots = Array.from({ length: 20 }).map(() => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setFloatingDots(dots);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute inset-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-[0.08] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Generate subtle noise pattern using SVG filters */}
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0"
            />
          </filter>
          
          {/* Radial gradient for subtle vignette effect */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.02" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.01" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Main noise pattern */}
        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          fill="currentColor"
          className="text-foreground"
        />
        
        {/* Subtle vignette overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#vignette)"
          className="text-foreground"
        />
        
        {/* Additional subtle geometric elements */}
        <g className="text-foreground opacity-[0.03]">
          {/* Floating dots pattern - only render after coordinates are generated */}
          {floatingDots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="currentColor"
              opacity={dot.opacity}
            />
          ))}
          
          {/* Subtle grid lines */}
          <g stroke="currentColor" strokeWidth="0.5" opacity="0.1">
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 100}
                x2="1000"
                y2={i * 100}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 100}
                y1="0"
                x2={i * 100}
                y2="1000"
              />
            ))}
          </g>
        </g>
      </svg>
    </motion.div>
  );
} 