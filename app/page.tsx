"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, Brain, Zap, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RotatingTagline from "@/components/rotating-tagline";
import FloatingContextBlocks from "@/components/floating-context-blocks";
import ParticleNetwork from "@/components/particle-network";
import HeroCTA from "@/components/hero-cta";
import { useState, useEffect } from "react";

export default function Home() {
  const [randomTagline, setRandomTagline] = useState<string>("");

  const taglines = [
    "Designing intelligent systems at the edge of code, creativity, and curiosity.",
    "Helping AI agents learn how to think — not just reply.",
    "Deploying agents, building tools, and asking better questions."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setRandomTagline(taglines[randomIndex]);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentActivities = [
    {
      icon: Brain,
      title: "Agent Design",
      description: "Currently experimenting with agentic workflows, multi-agent orchestration, and model context protocol (MCP)"
    },
    {
      icon: Zap,
      title: "Systems Prototyping",
      description: "Using tools like Attention, Zapier and n8n to build agent orchestration, self-healing workflows, and creative automation stacks."
    },
    {
      icon: Palette,
      title: "Creative Experiments",
      description: "Exploring generative UI, LLM-driven sketching, and ways to bring my creative coding roots into AI interfaces."
    },
    {
      icon: Code,
      title: "Exploring the Edges of Prompt Design",
      description: "From embedded instructions to modular context assembly — always tinkering with how words shape machines."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <FloatingContextBlocks />
        <ParticleNetwork />
        
        <div className="text-center space-y-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Name with enhanced styling */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Alec D'Alelio
            </motion.h1>
            
            {/* Rotating subtitle with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <RotatingTagline />
            </motion.div>
            
            {/* Dynamic tagline with typewriter effect */}
            {randomTagline && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed"
              >
                {randomTagline}
              </motion.p>
            )}
            
            {/* Supporting copy with enhanced styling */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              I build AI agents that 80+ companies rely on to think faster, sell smarter, and report better.
            </motion.p>
            
            {/* Tertiary line with subtle animation */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm md:text-base text-foreground/60 max-w-2xl mx-auto font-medium"
            >
              → Previously at Art Blocks • Now at Attention
            </motion.p>
          </motion.div>

          {/* New CTA Component */}
          <HeroCTA onScrollToAbout={scrollToAbout} />
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center backdrop-blur-sm bg-background/20"
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
            I’m a builder and systems thinker working at the edge of automation, intelligence, and creative technology. From deploying AI agents into sales teams to launching generative art on-chain, I’ve led projects that connect emerging tech with real-world impact. Right now, I’m deep in the world of prompt-chaining, agent orchestration, and experimental interfaces for the next wave of human-computer collaboration.
            </p>
            <Button variant="outline" asChild>
              <a href="/about">Read More</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What I'm Up To Now Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center justify-center space-x-2">
              <Clock className="h-8 w-8" />
              <span>What I'm Up To Now</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A quick snapshot of what I'm building, exploring, and obsessing over right now. This updates as fast as I do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <activity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="font-semibold text-foreground">
                            {activity.title}
                          </h3>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
