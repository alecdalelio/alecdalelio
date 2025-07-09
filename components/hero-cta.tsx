"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeroCTAProps {
  onScrollToAbout: () => void;
}

export default function HeroCTA({ onScrollToAbout }: HeroCTAProps) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", action: () => window.open("/about", "_self") },
    { id: "work", label: "Work", action: () => window.open("/projects", "_self") },
    { id: "contact", label: "Contact", action: () => window.open("/contact", "_self") },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex space-x-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              tab.action();
            }}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-white dark:bg-zinc-700 text-foreground shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 