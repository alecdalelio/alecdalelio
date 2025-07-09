"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  animX: number;
  animY: number;
  duration: number;
}

export default function ParticleNetwork() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles only on client-side
    const generatedParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      delay: Math.random() * 2,
      animX: Math.random() * 20 - 10,
      animY: Math.random() * 20 - 10,
      duration: 4 + Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) {
    return null; // Don't render until particles are generated
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.animX, 0],
            y: [0, particle.animY, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 