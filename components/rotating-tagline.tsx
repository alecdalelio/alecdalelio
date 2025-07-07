"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "AI Agent Architect",
  "Systems Designer",
  "Technical Storyteller",
  "Prompt Engineer",
  "Creative Coder",
];

const RotatingTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center justify-center" aria-live="polite" aria-label="Professional titles">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          {taglines[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTagline; 