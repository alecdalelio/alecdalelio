"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Globe, Bot, Zap, TrendingUp, LucideIcon, Palette, Code, MessageSquare, DollarSign, Music } from "lucide-react";

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
      title: "PLAYCE – Context Engineering Playground",
      description: "A visual playground for understanding how different types of context affect LLM responses. Users can toggle between system prompts, user messages, examples, and constraints to observe how small changes impact model behavior — all within a minimal, real-time interface. Built to help developers and prompt engineers explore multi-component prompting concepts with clarity.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "OpenAI API", "Cursor"],
      links: {
        live: "https://playceai.vercel.app",
        github: null
      },
      featured: true,
      results: [
        "Built entirely in Cursor using React, Tailwind, and Framer Motion",
        "Modular UI allows composable prompt construction and instant response rendering",
        "Designed for LLM power users, AI engineers, and curious tinkerers",
        "Deploys instantly on Vercel with full light/dark mode support"
      ],
      icon: Code
    },
    {
      title: "Metamorphic – 3D Audiovisual NFT Album",
      description: "I served as Project Manager for Metamorphic, a genre-defying audiovisual NFT album experience by UK-based artist DAILLY, produced in collaboration with BeetsDAO and Async Art. I coordinated all project deliverables across three continents and secured key partnerships including the minting platform (Async Art) and the launch venue at Art Basel Miami 2021.",
      tags: ["Project Management", "Creative Technology", "Web3", "NFT Infrastructure", "Async Art", "XR Experiences"],
      links: {
        live: "https://www.entrine.com/cases/metamorphic",
        github: null
      },
      featured: false,
      results: [
        "Coordinated between international teams in the UK, Eastern Europe, and the US",
        "Managed artist relations, creative agency deliverables, and DAO-level stakeholder updates",
        "Led negotiations and logistics for venue partnership with Art Basel Miami",
        "Oversaw minting and smart contract deployment on Async Art",
        "Delivered the first immersive web3-native audiovisual album launched with multi-device 3D access",
      ],
      icon: Music
    },
    {
      title: "BONKbot – Solana Trading Bot Docs",
      description: "I joined the BONKbot team as a contractor to overhaul their product documentation and write new user guides for advanced trading features like Limit Orders, Trailing Stop Loss, and DCA. BONKbot is a Telegram-native trading bot for the Solana ecosystem, known for its lightning-fast UX and deep DEX integration. Over the 5 months I worked on this project, BONKbot generated over $100M in trading volume**.",
      tags: ["Technical Writing", "Product Documentation", "Solana", "Telegram Bots", "DeFi UX", "Advanced Trading"],
      links: {
        live: "https://docs.bonkbot.io/",
        github: null
      },
      featured: false,
      results: [
        "Rewrote and structured core product documentation for both new and power users",
        "Authored guides for high-frequency features like Limit Orders, Trailing SL, and Dollar Cost Averaging",
        "Collaborated with product and engineering teams to ship educational content alongside feature releases",
        "Helped onboard thousands of users into Solana trading through accessible, well-structured docs"
      ],
      icon: MessageSquare
    },
    {
      title: "Reveel – Web3 Payments Protocol",
      description: "As a part-time Growth Consultant, I helped scale Reveel's developer ecosystem by executing hackathons, maintaining technical documentation, and leading strategic partnerships. Reveel enables seamless, multi-chain stablecoin payments across any currency, chain, or wallet — including AI agent use cases.",
      tags: ["Blockchain", "SDK Documentation", "Developer Relations", "Web3 Payments", "Protocol Integration"],
      links: {
        live: "https://reveel.id/",
        github: null
      },
      featured: false,
      results: [
        "Executed global hackathon activations, driving 5x growth in developer participation",
        "Maintained V2 documentation for Reveel Protocol and Revenue Share platform",
        "Wrote detailed guides on SDK usage, protocol concepts, marketplace integrations, and use cases",
        "Helped drive protocol revenue through artist collaborations and partner integrations",
        "Collaborated with a team backed by Binance Labs and trusted by 100K+ users"
      ],
      icon: DollarSign
    },
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
      featured: false,
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
            Projects that reflect how I think and build. Whether I'm designing AI workflows, managing cross-continental web3 releases, or writing docs that make complex systems click.
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                        New
                      </span>
                    </div>
                  )}
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
                      {project.links.live ? (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <Globe className="h-4 w-4" />
                            <span>{project.title.includes("Metamorphic") ? "View Case Study" : "Visit Site"}</span>
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled>
                          <span>More info on request</span>
                        </Button>
                      )}
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