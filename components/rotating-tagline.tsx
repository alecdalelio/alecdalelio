"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "AI Agent Architect",
  "Creative Systems Thinker",
  "Automation Evangelist",
  "Web3-Formed, AI-Forged",
  "Curious Technologist",
];

const RotatingTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 flex items-center justify-center" aria-live="polite" aria-label="Professional titles">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="text-xl md:text-2xl font-medium text-primary/90 dark:text-primary/80"
        >
          {taglines[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTagline; 