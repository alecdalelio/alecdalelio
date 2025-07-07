"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, TrendingUp, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";

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

interface ProjectCarouselProps {
  projects: Project[];
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProjectCarousel({ projects, title, description, icon: IconComponent }: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView: 1, spacing: 24 },
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!instanceRef.current) return;
      
      if (event.key === 'ArrowLeft') {
        instanceRef.current.prev();
      } else if (event.key === 'ArrowRight') {
        instanceRef.current.next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [instanceRef]);

  const renderProjectCard = (project: Project, index: number) => (
    <div key={project.title} className="keen-slider__slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        className="h-full"
      >
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative group">
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
            
            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-3">
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
              
              {/* Navigation buttons positioned at bottom-right */}
              {loaded && instanceRef.current && (
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
                    onClick={() => instanceRef.current?.prev()}
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
                    onClick={() => instanceRef.current?.next()}
                    disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>
        
        {/* Slide indicator */}
        {loaded && instanceRef.current && projects.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  idx === currentSlide ? 'bg-primary' : 'bg-border hover:bg-border/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
} 