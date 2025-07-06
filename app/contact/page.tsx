"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

export default function Contact() {

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Reach Out Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Mail className="h-6 w-6" />
                <span>Reach Out</span>
              </h2>
              <p className="text-foreground/70 mb-8">
                Let's connect and explore opportunities to collaborate on interesting projects.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <p className="text-foreground/70 leading-relaxed">
                        Let's chat. Whether you're building something interesting or just want to jam on AI agents and creative systems, I'd love to hear from you.
                      </p>
                      
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            asChild 
                            size="lg" 
                            className="w-full group"
                          >
                            <a 
                              href="mailto:alecdalelio@gmail.com?subject=Let's Collaborate"
                              className="flex items-center justify-center"
                            >
                              <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                              Send Email
                            </a>
                          </Button>
                        </motion.div>
                        
                        <div className="space-y-3 text-sm border-t pt-4">
                          <p className="text-foreground/70">
                            <strong>Email:</strong>{" "}
                            <a
                              href="mailto:alecdalelio@gmail.com"
                              className="text-primary hover:underline"
                            >
                              alecdalelio@gmail.com
                            </a>
                          </p>
                          <p className="text-foreground/70">
                            <strong>LinkedIn:</strong>{" "}
                            <a
                              href="https://www.linkedin.com/in/alec-d-alelio-72230b81/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              Alec D'Alelio
                            </a>
                          </p>
                          <p className="text-foreground/70">
                            <strong>Response Time:</strong> Usually within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Now Accepting Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-4 rounded-lg bg-muted/50 border border-border/50"
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/80 flex items-center">
                    <span className="mr-2">✨</span>
                    Now connecting with folks building:
                  </p>
                  <ul className="text-xs text-foreground/60 space-y-1 ml-6">
                    <li>• agentic infrastructure</li>
                    <li>• creative AI tools</li>
                    <li>• thoughtful automation</li>
                    <li>• weird experiments that might just work</li>
                  </ul>
                </div>
              </motion.div>

              {/* Latest Build Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">🛠</span>
                        <h3 className="font-semibold text-foreground">Latest Build</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">PLAYCE – Context Engineering Playground</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          A visual playground for understanding how different types of context affect LLM responses. Users can toggle between system prompts, user messages, examples, and constraints to observe how small changes impact model behavior — all within a minimal, real-time interface. Built to help developers and prompt engineers explore multi-component prompting concepts with clarity.
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              React
                            </span>
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              Framer Motion
                            </span>
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              OpenAI API
                            </span>
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              Cursor
                            </span>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-xs"
                            asChild
                          >
                            <a
                              href="https://playceai.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 