"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingContextBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: Block[] = [];
      for (let i = 0; i < 8; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 2,
        });
      }
      setBlocks(newBlocks);
    };

    generateBlocks();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute bg-primary/10 border border-primary/20 rounded-lg"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
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
};

export default FloatingContextBlocks; 