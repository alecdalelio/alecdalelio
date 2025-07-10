"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-border bg-background/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-foreground/70 text-sm">
            Vibe coded with love by{" "}
            <Link
              href="https://www.linkedin.com/in/alec-d-alelio-72230b81/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Alec D'Alelio
            </Link>{" "}
            👨🏽‍💻
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 