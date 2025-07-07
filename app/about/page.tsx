"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Exploring the technologies shaping our future — currently focused on agentic workflows and context engineering.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <section className="max-w-prose mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                Now
              </h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                I'm focused on agentic workflows and context engineering — designing AI systems that reason, act, and collaborate inside real-world tools. At Attention, I've helped deploy dozens of production agents for Sales, Success and RevOps teams.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                Before
              </h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                I worked at the edge of creative tech and crypto, launching generative art systems and guiding web3 infrastructure projects at Art Blocks Engine. That work sharpened my ability to bridge creative vision with technical execution — ensuring complex, on-chain projects shipped reliably and at scale.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                This Site
              </h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                This is where I share what I'm building, learning, and thinking about — and connect with others working toward the future of intelligent tools.
              </p>
            </motion.div>
          </section>
        </motion.div>

        {/* Focus Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Focus Stack
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FocusCard 
              title="Agentic Workflows" 
              icon="🤖" 
              desc="Designing AI agents that reason, act, and integrate into real-world tools." 
              delay={0.5}
            />
            <FocusCard 
              title="Rapid Prototyping" 
              icon="⚡" 
              desc="Exploring what's possible with new tech — before it's obvious." 
              delay={0.6}
            />
            <FocusCard 
              title="Toolmaking" 
              icon="🧰" 
              desc="Creating interfaces and automations that amplify insight and decision-making." 
              delay={0.7}
            />
            <FocusCard 
              title="Technical Account Mgmt" 
              icon="🤝" 
              desc="Guiding partners from idea to launch, aligning technical implementation with product strategy." 
              delay={0.8}
            />
            <FocusCard 
              title="Creative Systems Thinking" 
              icon="🧠" 
              desc="Building frameworks that balance automation, context, and elegance." 
              delay={0.9}
            />
            <FocusCard 
              title="Community & Collaboration" 
              icon="🌐" 
              desc="Sharing ideas, contributing to early-stage projects, and building in public." 
              delay={1.0}
            />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Always open to connecting with builders, designers, and thinkers working on the future of intelligent tools.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/alec-d-alelio-72230b81/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:alecdalelio@gmail.com">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/alecdalelio" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FocusCard({ title, desc, icon, delay }: { title: string; desc: string; icon: string; delay: number }) {
  return (
    <Card delay={delay}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <CardTitle>{title}</CardTitle>
      </div>
      <CardContent>{desc}</CardContent>
    </Card>
  );
} 