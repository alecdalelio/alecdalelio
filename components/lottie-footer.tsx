"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * LottieFooter - Displays a subtle particle network animation
 * Uses inline SVG for performance, lazy-loaded to avoid blocking initial paint
 * Optimized for accessibility and bundle size
 */

// Simple particle network animation using SVG (no external dependencies)
const ParticleNetworkAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lazy load animation when component comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return <div ref={containerRef} className="h-24 w-full" />;
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-24 w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-[0.5] dark:opacity-[0.4]"
        viewBox="0 0 400 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for particles */}
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          
          {/* Animation definitions */}
          <animateTransform
            id="float"
            attributeName="transform"
            type="translate"
            values="0,0; 0,-2; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
          
          <animateTransform
            id="pulse"
            attributeName="transform"
            type="scale"
            values="1; 1.2; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </defs>

        {/* Animated particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={20 + i * 32}
              cy={32}
              r="1.5"
              fill="url(#particleGradient)"
              className="text-primary"
            >
              <animate
                attributeName="opacity"
                values="0.4; 0.9; 0.4"
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; 0,${-8 + i % 3 * 4}; 0,0`}
                dur={`${3 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Connecting lines */}
            {i < 11 && (
              <line
                x1={20 + i * 32}
                y1="32"
                x2={20 + (i + 1) * 32}
                y2="32"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.15"
                className="text-primary"
              >
                <animate
                  attributeName="opacity"
                  values="0.1; 0.3; 0.1"
                  dur={`${2.5 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        ))}

        {/* Floating data nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`node-${i}`}>
            <rect
              x={10 + i * 65}
              y={20 + (i % 2) * 24}
              width="10"
              height="10"
              rx="2"
              fill="currentColor"
              opacity="0.15"
              className="text-primary"
            >
              <animate
                attributeName="opacity"
                values="0.1; 0.25; 0.1"
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </rect>
            
            {/* Data flow lines */}
            <line
              x1={14 + i * 65}
              y1={24 + (i % 2) * 24}
              x2={14 + i * 65}
              y2={40}
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.08"
              className="text-primary"
            >
              <animate
                attributeName="opacity"
                values="0.05; 0.15; 0.05"
                dur={`${1.5 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        ))}
      </svg>
    </motion.div>
  );
};

export default function LottieFooter() {
  return (
    <div className="w-full">
      <ParticleNetworkAnimation />
    </div>
  );
} 