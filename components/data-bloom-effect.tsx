"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BloomParticle {
  x: number;
  y: number;
}

export default function DataBloomEffect({ children }: { children: React.ReactNode }) {
  const [particles, setParticles] = useState<BloomParticle[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Generate random particles only on client-side
    const generatedParticles = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * 200 - 100, // -100 to 100
      y: Math.random() * 200 - 100, // -100 to 100
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) {
    return <div>{children}</div>; // Fallback until particles are generated
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Bloom effect particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0, 
              opacity: 0 
            }}
            animate={isHovered ? {
              x: particle.x,
              y: particle.y,
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            } : {
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
} 