"use client";

import { motion } from "framer-motion";
import { Compass, FileText, Palette as PaletteIcon, Bot, Palette, Users, MessageSquare, DollarSign, Music, Code, Building2 } from "lucide-react";
import ProjectFilters from "@/components/project-filters";
import ProjectTimeline from "@/components/project-timeline";
import { useProjectFilters } from "@/contexts/project-filter-context";
import { ProjectFilterProvider } from "@/contexts/project-filter-context";
import StickyCategoryNav from "@/components/sticky-category-nav";
import WorkCard from "@/components/work-card";

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
  icon: any;
  category: 'fulltime' | 'contract' | 'personal';
  dates: string;
}

function WorkSection({ id, icon, title, description, children }: { id: string; icon: React.ReactNode; title: string; description: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32">
      <header className="sticky top-24 z-10 bg-background/80 backdrop-blur border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 dark:border-zinc-800 mb-8">
        <div className="flex items-center space-x-3 py-4">
          <div className="p-3 bg-primary/10 rounded-lg">{icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-foreground/70 text-sm md:text-base">{description}</p>
          </div>
        </div>
      </header>
      {children}
    </section>
  );
}

function ProjectsContent() {
  const { filters } = useProjectFilters();
  
  const projects: Project[] = [
    {
      title: "Attention.com - AI Sales Agents",
      description: "As Founding Forward Deployed Engineer at Attention, I design and deploy AI agents that integrate directly with CRM and communication systems — surfacing insights, coaching reps, and accelerating deal velocity in real time. In my first six months, I’ve shipped 200+ agents now used daily by 80+ companies across AI healthcare, cybersecurity, legal tech, real estate, and more.",
      tags: ["AI", "Sales Enablement", "CRM Integration", "Context Engineering", "Account Management", "GTM"],
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
      icon: Bot,
      category: 'fulltime',
      dates: "February 2025 - Present"
    },
    {
      title: "Art Blocks Engine - Generative Art Platform",
      description: "As Founding Technical Account Manager, I guided 50+ partners from startup to enterprise to launch on-chain, creative code-based art projects generating $20M+ in total sales. Ensured every project met Art Blocks' standards for security, deterministic rendering, and cross-device performance.",
      tags: ["Account Management", "Creative Coding", "Smart Contracts", "Partner Relations", "Technical Documentation", "GTM"],
      links: {
        live: "https://artblocks.io",
        github: "https://github.com/ArtBlocks"
      },
      featured: false,
      results: [
        "Drove $20M+ in sales with marquee brands like Red Bull Racing, Sotheby's, and Shiseido",
        "Audited and quality-assured 200+ creative code scripts for resolution-agnostic outputs",
        "Owned core tooling including proprietary script-audit utility and AB Engine React template",
        "Accelerated contract renewals and informed roadmap enhancements across Engineering, Product, Legal"
      ],
      icon: Palette,
      category: 'fulltime',
      dates: "August 2023 - February 2025"
    },
    {
      title: "Mochi! – Tokenized Coordination for DAO Communities",
      description: "Mochi! is a habit-forming, goal-setting game for DAO contributors. As a two-time contributor to the project, I first worked as a Full Stack Engineer, helping build the coordination protocol's Ethereum-based app using React, TypeScript, Django, and WalletConnect. Later, I transitioned to Onboarding & Implementation Lead, where I led GTM efforts and supported 25+ teams as they adopted Mochi's unique 8-week 'Journey' framework.",
      tags: ["Web3", "Ethereum", "React", "TypeScript", "Django", "DAOs", "Developer Experience", "Product Strategy", "Community Enablement", "Discord Bots", "GTM"],
      links: {
        live: "https://mochi.game/",
        github: null
      },
      featured: false,
      results: [
        "Built frontend components for the Mochi coordination game using React, Redux, Styled Components, and Storybook",
        "Integrated Stripe payments via Dj-Stripe and helped increase backend test coverage from <50% to 80%",
        "Supported onboarding for over 25 teams, driving >1000% growth in user activity across Slack & Discord",
        "Served as technical liaison between protocol developers, DAO operators, and community organizers"
      ],
      icon: Users,
      category: 'fulltime',
      dates: "February 2021 - December 2022"
    },
    {
      title: "Launch Pad – National Coworking Network",
      description: "Launch Pad is a network of coworking spaces across the U.S. focused on community-driven entrepreneurship. Backed by $1.3M in seed funding, Launch Pad expanded aggressively with a mission to support founders and close access gaps in underserved cities. As a Sales & Marketing Associate, I played a key role across five national locations.",
      tags: ["Sales Ops", "Content Marketing", "Community Building", "CRM", "Events"],
      links: {
        live: "https://siliconbayounews.com/2019/02/14/coworking-space-launch-pad-raises-1-3-million-plans-25-locations-by-2020/",
        github: null
      },
      featured: false,
      results: [
        "Led full-cycle B2B sales process for Memphis, Newark, and Stockton markets — from prospecting to contract",
        "Produced monthly event series drawing 200+ attendees to drive top-of-funnel pipeline and deepen community ties",
        "Managed all social media channels (IG, Twitter, LinkedIn) for five sites, improving engagement through localized content",
        "Published 3+ blog posts per week to support SEO and founder storytelling"
      ],
      icon: Building2,
      category: 'fulltime',
      dates: "September 2019 - May 2020"
    },
    {
      title: "BONKbot – Solana Trading Bot Docs",
      description: "I joined the BONKbot team as a contractor to overhaul their product documentation and write new user guides for advanced trading features like Limit Orders, Trailing Stop Loss, and DCA. BONKbot is a Telegram-native trading bot for the Solana ecosystem, known for its lightning-fast UX and deep DEX integration. Over the 5 months I worked on this project, BONKbot generated over $100M in trading volume.",
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
      icon: MessageSquare,
      category: 'contract',
      dates: "September 2024 - January 2025"
    },
    {
      title: "Reveel – Web3 Payments Protocol",
      description: "As a part-time Growth Consultant, I helped scale Reveel's developer ecosystem by executing hackathons, maintaining technical documentation, and leading strategic partnerships. Reveel enables seamless, multi-chain stablecoin payments across any currency, chain, or wallet — including AI agent use cases.",
      tags: ["Blockchain", "SDK Documentation", "Developer Relations", "Web3 Payments", "Protocol Integration", "GTM"],
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
      icon: DollarSign,
      category: 'contract',
      dates: "January 2023 - August 2023"
    },
    {
      title: "Metamorphic – 3D Audiovisual NFT Album",
      description: "I served as Project Manager for Metamorphic, a genre-defying audiovisual NFT album experience by UK-based artist DAILLY, produced in collaboration with BeetsDAO and Async Art. I coordinated all project deliverables across three continents and secured key partnerships including the minting platform (Async Art) and the launch venue at Art Basel Miami 2021.",
      tags: ["Project Management", "Creative Technology", "Web3", "NFT Infrastructure", "Async Art", "XR Experiences", "PM"],
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
      icon: Music,
      category: 'contract',
      dates: "March 2022 - January 2023"
    },
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
      icon: Code,
      category: 'personal',
      dates: "2025"
    },
    {
      title: "Everything In Its Right Place",
      description: "Managed end-to-end production of _Everything In Its Right Place_, a curated anthology on blockchain's impact in the music industry—coordinating writers, designers, and freelance contractors to deliver a polished manuscript on schedule. Designed and maintained the project's Trello workflow for seamless task handoffs and cross-functional alignment. Supervised all book formatting and cover art design, ensuring high-quality deliverables and on-time publication.",
      tags: ["Project Management", "Publishing", "Blockchain", "Music Industry", "Content Coordination", "Design Oversight"],
      links: {
        live: "https://www.amazon.com/Everything-Its-Right-Place-Transparent/dp/0999331604",
        github: null
      },
      featured: false,
      results: [
        "Coordinated end-to-end production of a curated anthology on blockchain's music industry impact",
        "Managed writers, designers, and freelance contractors to deliver polished manuscript on schedule",
        "Designed and maintained Trello workflow for seamless task handoffs and cross-functional alignment",
        "Supervised book formatting and cover art design, ensuring high-quality deliverables and on-time publication"
      ],
      icon: FileText,
      category: 'personal',
      dates: "June 2017 - September 2017"
    },
    {
      title: "Sofa King Fest – Emergency Response Livestream Festival",
      description: "Sofa King Fest was an emergency-response online music and arts festival launched at the onset of the COVID-19 pandemic. Designed to fight quarantine boredom and support artists, it featured livestream performances, an artist directory, and donation campaigns benefiting musicians, crew, and industry workers worldwide. As part of the organizing team via 504LIFE, I helped launch and promote the festival.",
      tags: ["Music", "COVID Relief", "Partnerships", "Web Design", "Event Marketing"],
      links: {
        live: "https://concreteplayground.com/brisbane/arts-entertainment/sofa-king-fest#:~:text=Dubbed%20an%20%22emergency%20response%20online,Underground%20(formerly%20The%20Basement).&text=While%20the%20artists%20are%20playing,adhering%20to%20self%2Disolation%20measures.",
        github: null
      },
      featured: false,
      results: [
        "Built the main 504LIFE.org site using Squarespace to host livestream programming and resources",
        "Managed partnerships with New Orleans–based venues and nonprofits",
        "Executed a multi-channel distribution strategy across dozens of orgs",
        "Helped raise over $100,000 for COVID-19 relief efforts in Louisiana and Colorado"
      ],
      icon: Music,
      category: 'personal',
      dates: "April 2020 - July 2020"
    }
  ];

  // Filter projects based on active filters
  const filteredProjects = projects.filter(project => {
    // Check tag filters
    if (filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => 
        project.tags.some(projectTag => 
          projectTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
      if (!hasMatchingTag) return false;
    }

    // Check role filters
    if (filters.roles.length > 0) {
      const hasMatchingRole = filters.roles.some(role => {
        const roleLower = role.toLowerCase();
        return project.description.toLowerCase().includes(roleLower) ||
               project.tags.some(tag => tag.toLowerCase().includes(roleLower));
      });
      if (!hasMatchingRole) return false;
    }

    // Check category filters
    if (filters.categories.length > 0) {
      if (!filters.categories.includes(project.category)) {
        return false;
      }
    }

    return true;
  });

  // Helper function to parse dates for sorting
  const parseDate = (dateString: string) => {
    // Handle different date formats
    if (dateString.includes('Present')) return new Date('2099-12-31'); // Future date for "Present"
    if (dateString.includes('-')) {
      // Format like "June 2017 - September 2017" or "2025"
      const parts = dateString.split('-');
      const firstPart = parts[0].trim();
      if (firstPart.match(/^\d{4}$/)) {
        // Just year like "2025"
        return new Date(`${firstPart}-01-01`);
      } else {
        // Month year format like "June 2017"
        const monthYear = firstPart.split(' ');
        if (monthYear.length === 2) {
          const month = monthYear[0];
          const year = monthYear[1];
          const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
          return new Date(`${year}-${(monthIndex + 1).toString().padStart(2, '0')}-01`);
        }
      }
    }
    // Fallback for other formats
    return new Date('1900-01-01');
  };

  // Group filtered projects by category and sort by date (newest first)
  const fulltimeProjects = filteredProjects.filter(p => p.category === 'fulltime')
    .sort((a, b) => parseDate(b.dates).getTime() - parseDate(a.dates).getTime());
  const contractProjects = filteredProjects.filter(p => p.category === 'contract')
    .sort((a, b) => parseDate(b.dates).getTime() - parseDate(a.dates).getTime());
  const personalProjects = filteredProjects.filter(p => p.category === 'personal')
    .sort((a, b) => parseDate(b.dates).getTime() - parseDate(a.dates).getTime());

  const sections = [
    {
      id: "fulltime",
      label: "Full-Time Work",
      icon: <Compass className="h-5 w-5" />,
      projects: fulltimeProjects,
      description: "Projects I've led or contributed to in a full-time capacity"
    },
    {
      id: "contract",
      label: "Contract & Consulting",
      icon: <FileText className="h-5 w-5" />,
      projects: contractProjects,
      description: "Shorter-term roles and strategic initiatives"
    },
    {
      id: "personal",
      label: "Personal Projects",
      icon: <PaletteIcon className="h-5 w-5" />,
      projects: personalProjects,
      description: "Self-initiated tools and experiments"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Work Across AI, Web3 & Creative Systems
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          A collection of the work that’s shaped how I build — from deploying AI Agents for Sales & Ops teams to launching DAO coordination protocols & generative art on-chain.
          </p>
        </motion.div>

        {/* Sticky Category Nav */}
        <StickyCategoryNav
          sections={sections.map(({ id, label, icon }) => ({ id, label, icon }))}
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <ProjectFilters />
        </motion.div>

        {/* Sectioned Timeline View */}
        <div className="space-y-24">
          {sections.map((section, sIdx) =>
            section.projects.length > 0 ? (
              <WorkSection
                key={section.id}
                id={section.id}
                icon={section.icon}
                title={section.label}
                description={section.description}
              >
                <div className="space-y-8">
                  {section.projects.map((project, idx) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none transition-colors duration-150"
                    >
                      <WorkCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </WorkSection>
            ) : null
          )}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-foreground/70 text-lg">No projects match your current filters.</p>
              <p className="text-foreground/50 text-sm mt-2">Try adjusting your filter criteria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <ProjectFilterProvider>
      <ProjectsContent />
    </ProjectFilterProvider>
  );
} 