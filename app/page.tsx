"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import RotatingTagline from "@/components/rotating-tagline";
import { useState, useEffect } from "react";

export default function Home() {
  const [randomTagline, setRandomTagline] = useState<string>("");

  const taglines = [
    "Designing intelligent systems at the edge of code, creativity, and curiosity.",
    "Exploring the future through AI agents, automation, and creative tech.",
    "Building tools that think, adapt, and evolve — just like the people who use them.",
    "Prototyping what's next in agentic workflows, creative systems, and automation.",
    "Building expressive tools for the future of intelligence."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setRandomTagline(taglines[randomIndex]);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-8 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Alec D'Alelio
            </h1>
            <RotatingTagline />
            {randomTagline && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
              >
                {randomTagline}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              Learn More
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              I'm an engineer and systems thinker exploring how emerging technologies — from AI agents to multi-component prompting — are reshaping how we work, learn, and create. I've helped scale generative art on-chain, deployed AI into live sales teams, and now I'm building tools and experiments at the edge of automation and intelligence.
            </p>
            <Button variant="outline" asChild>
              <a href="/about">Read More</a>
            </Button>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
