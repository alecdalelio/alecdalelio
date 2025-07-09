"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Block {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  animX: number;
  animY: number;
}

export default function FloatingContextBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    // Generate random blocks only on client-side
    const generatedBlocks = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      animX: Math.random() * 10 - 5,
      animY: Math.random() * 10 - 5,
    }));
    setBlocks(generatedBlocks);
  }, []);

  if (blocks.length === 0) {
    return null; // Don't render until blocks are generated
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {blocks.map((block, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
          }}
          animate={{
            x: [0, block.animX, 0],
            y: [0, block.animY, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: block.duration,
            delay: block.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 