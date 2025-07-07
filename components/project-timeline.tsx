"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
  category: 'fulltime' | 'contract' | 'personal';
}

interface ProjectTimelineProps {
  projects: Project[];
}

export default function ProjectTimeline({ projects }: ProjectTimelineProps) {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleExpanded = (projectTitle: string) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle);
      } else {
        newSet.add(projectTitle);
      }
      return newSet;
    });
  };

  const isExpanded = (projectTitle: string) => expandedProjects.has(projectTitle);

  return (
    <div className="space-y-8">
      {projects.map((project, index) => {
        const expanded = isExpanded(project.title);
        const visibleResults = expanded ? project.results : project.results?.slice(0, 2);
        const hasMoreResults = project.results && project.results.length > 2;

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < projects.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
            )}
            
            <div className="flex items-start space-x-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              {/* Project content */}
              <div className="flex-1 min-w-0">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg md:text-xl mb-1">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-foreground/70">
                          <span className="capitalize">{project.category}</span>
                          <span>•</span>
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                            {project.featured ? 'Featured' : 'Project'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
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
                                className="text-xs md:text-sm text-foreground/70 flex items-start space-x-2"
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
                              onClick={() => toggleExpanded(project.title)}
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

                    {/* Tags - Compact display */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 pt-2">
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
                              {project.title.includes("Metamorphic") ? "View Case Study" : "Visit Site"}
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 