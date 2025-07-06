"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-amber-500 group-hover:text-amber-400 transition-colors duration-200" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{
          scale: theme === "dark" ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 