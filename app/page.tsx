"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, Brain, Zap, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  const currentActivities = [
    {
      icon: Brain,
      title: "Agent Design",
      description: "Currently experimenting with multi-step agent flows, memory graphs, and multi-component prompting (MCP) techniques.",
      status: "Deep Dive",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    },
    {
      icon: Zap,
      title: "Systems Prototyping",
      description: "Using tools like n8n, Cursor, and Pika to build agent orchestration, self-healing workflows, and creative automation stacks.",
      status: "Actively Shipping",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    },
    {
      icon: Palette,
      title: "Creative Experiments",
      description: "Exploring generative UI, LLM-driven sketching, and ways to bring my creative coding roots into AI interfaces.",
      status: "Personal R&D",
      statusColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
      icon: Code,
      title: "Exploring the Edges of Prompt Design",
      description: "From embedded instructions to modular context assembly — always tinkering with how words shape machines.",
      status: "Always On",
      statusColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    }
  ];

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
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">
                            {activity.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${activity.statusColor}`}>
                            {activity.status}
                          </span>
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
