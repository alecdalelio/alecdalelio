"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import DataBloomEffect from "./data-bloom-effect";

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

export default function WorkCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const visibleResults = expanded ? project.results : project.results?.slice(0, 2);
  const hasMoreResults = project.results && project.results.length > 2;
  const hasMoreTags = project.tags.length > 4;
  const visibleTags = tagsExpanded ? project.tags : project.tags.slice(0, 4);

  return (
    <DataBloomEffect>
      <div className="space-y-4">
        {/* Title and metadata row */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-foreground/70">
            <span className="capitalize">{project.category}</span>
            <span>•</span>
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
              {project.featured ? 'Featured' : 'Project'}
            </span>
            <span>•</span>
            <span>{project.dates}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        {/* Results Section - Expandable */}
        {project.results && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground flex items-center space-x-2 text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Key Results</span>
            </h4>
            <div className="space-y-1">
              <AnimatePresence initial={false}>
                {visibleResults?.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs md:text-sm text-foreground/70 flex items-start space-x-2 group"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{result}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {hasMoreResults && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-1 text-xs text-foreground/50 hover:text-primary transition-colors duration-200 mt-2"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="h-3 w-3" />
                      <span>Show less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3" />
                      <span>+{project.results!.length - 2} more results</span>
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </div>
        )}

        {/* Tags - Expandable display */}
        <div className="flex flex-wrap gap-1">
          <AnimatePresence initial={false}>
            {visibleTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full cursor-pointer hover:bg-primary/20 transition-colors duration-150"
                whileHover={{ scale: 1.08, boxShadow: "0 0 0 2px #a1a1aa33" }}
              >
                {tag}
              </motion.span>
            ))}
          </AnimatePresence>
          
          {hasMoreTags && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full cursor-pointer hover:bg-secondary/80 transition-colors duration-200 hover:scale-105"
              onClick={() => setTagsExpanded((prev) => !prev)}
              role="button"
              aria-label={tagsExpanded ? "Collapse tags" : `Show ${project.tags.length - 4} more tags`}
            >
              {tagsExpanded ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Show less
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  +{project.tags.length - 4}
                </motion.span>
              )}
            </motion.button>
          )}
        </div>

        {/* Action buttons - centered with text content */}
        <div className="flex justify-start">
          {project.links.live ? (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {project.title.includes("Metamorphic") ? "View Case Study" : 
                   project.title.includes("Sofa King Fest") ? "View Article" :
                   project.title.includes("Launch Pad") ? "View Coverage" : "Visit Site"}
                </span>
                <span className="sm:hidden">View</span>
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outline" disabled>
              <span className="hidden sm:inline">More info on request</span>
              <span className="sm:hidden">Info</span>
            </Button>
          )}
        </div>
      </div>
    </DataBloomEffect>
  );
} 