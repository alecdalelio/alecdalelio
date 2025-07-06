"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Globe, Bot, Zap, TrendingUp, LucideIcon, Palette } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    live: string;
    github?: string | null;
  };
  featured: boolean;
  results?: string[];
  icon: LucideIcon;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Attention.com - AI Sales Agents",
      description: "As Founding Forward Deployed Engineer, I build practical AI Agents that process 30,000+ hours of customer conversations monthly, turning them into revenue-driving actions for sales and success teams. Led technical onboarding and implementation efforts that bridge customer needs with AI capabilities.",
      tags: ["AI Agents", "Sales Enablement", "CRM Integration", "Context Engineering", "Account Management"],
      links: {
        live: "https://attention.com",
        github: null
      },
      featured: true,
      results: [
        "200+ production workflows live, parsing 50k+ calls monthly",
        "CRM Hygiene Agents integrating with Salesforce, HubSpot, Zoho, GoHighLevel",
        "Real-time performance scorecards via Slack, Teams, and email",
        "Briefing bots reducing meeting prep time by 50%"
      ],
      icon: Bot
    },
    {
      title: "Art Blocks Engine - Generative Art Platform",
      description: "As Founding Technical Account Manager, I guided 50+ partners from startup to enterprise to launch on-chain, creative code-based art projects generating $20M+ in total sales. Ensured every project met Art Blocks' standards for security, deterministic rendering, and cross-device performance.",
      tags: ["Account Management", "Creative Coding", "Smart Contracts", "Partner Relations", "Technical Documentation"],
      links: {
        live: "https://artblocks.io",
        github: null
      },
      featured: true,
      results: [
        "Drove $20M+ in sales with marquee brands like Red Bull Racing, Sotheby's, and Shiseido",
        "Audited and quality-assured 200+ creative code scripts for resolution-agnostic outputs",
        "Owned core tooling including proprietary script-audit utility and AB Engine React template",
        "Accelerated contract renewals and informed roadmap enhancements across Engineering, Product, Legal"
      ],
      icon: Palette
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in AI engineering, 
            sales enablement, and creating impactful technical solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Results Section */}
                    {project.results && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4" />
                          <span>Key Results</span>
                        </h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="text-sm text-foreground/70 flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Globe className="h-4 w-4" />
                          <span>Visit Site</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="ghost" asChild>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 