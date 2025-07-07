"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

interface HeroCTAProps {
  onScrollToAbout: () => void;
}

const HeroCTA = ({ onScrollToAbout }: HeroCTAProps) => {
  const [activeTab, setActiveTab] = useState("work");

  const tabs = [
    { id: "about", label: "About", action: () => window.open("/about", "_self") },
    { id: "work", label: "Work", action: () => window.open("/projects", "_self") },
    { id: "contact", label: "Contact", action: () => window.open("/contact", "_self") },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex space-x-1 bg-muted/50 rounded-lg p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={tab.action}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
            onMouseEnter={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCTA; 