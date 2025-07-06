"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Linkedin, 
  Github, 
  Mail, 
  Globe,
  Code,
  Coffee,
  BookOpen,
  Users,
  Brain,
  Zap,
  Lightbulb,
  Share2
} from "lucide-react";

export default function About() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alec-d-alelio-72230b81/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/alecdalelio",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "Email",
      url: "mailto:alecdalelio@gmail.com",
      icon: Mail,
      color: "hover:text-red-600"
    }
  ];

  const interests = [
    {
      icon: Users,
      title: "Technical Account Management",
      description: "Guiding partners from idea to launch, aligning technical implementation with product strategy"
    },
    {
      icon: Zap,
      title: "Agentic Workflows",
      description: "Designing practical AI agents that reason, act, and integrate into real-world tools and teams"
    },
    {
      icon: Brain,
      title: "Creative Systems Thinking",
      description: "Building frameworks that balance automation, human context, and elegant logic"
    },
    {
      icon: Coffee,
      title: "Rapid Experimentation",
      description: "Prototyping with new technologies to explore what's possible — before it's obvious"
    },
    {
      icon: Lightbulb,
      title: "Toolmaking for Thinkers",
      description: "Creating interfaces and automations that amplify insight, creativity, and decision-making"
    },
    {
      icon: Share2,
      title: "Community & Collaboration",
      description: "Sharing ideas, contributing to early-stage projects, and building in public"
    }
  ];

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
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Exploring the technologies shaping our future — currently focused on agentic workflows and multi-component prompting.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Hi! I'm Alec D'Alelio — a builder and systems thinker exploring the technologies shaping how we live, work, and create.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Right now, I'm deep-diving into agentic workflows and model context protocol (MCP), designing AI systems that can reason, act, and collaborate in increasingly complex ways. At Attention, I've helped ship dozens of production AI agents for real-world sales and success teams.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Previously, I worked at the intersection of creative code and crypto, launching generative art projects and guiding web3 partners at Art Blocks Engine. That experience sharpened my love for emergent systems — and how small decisions in code, design, or incentives can ripple into massive outcomes.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This site is a place to document what I'm learning, share personal experiments, and connect with others building toward the future of intelligent systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {interest.title}
                        </h3>
                        <p className="text-foreground/70 text-sm">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <link.icon className={`h-5 w-5 transition-colors ${link.color}`} />
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 