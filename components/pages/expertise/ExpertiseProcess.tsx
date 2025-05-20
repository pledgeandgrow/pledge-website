"use client";

import React from "react";
import type { ExpertiseProcess } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { 
  Lightbulb, Map, Palette, Code, Bug, Rocket
} from "lucide-react";

interface ExpertiseProcessProps {
  process: ExpertiseProcess[];
  title?: string;
  subtitle?: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'lightbulb': <Lightbulb className="h-6 w-6" />,
  'map': <Map className="h-6 w-6" />,
  'palette': <Palette className="h-6 w-6" />,
  'code': <Code className="h-6 w-6" />,
  'bug': <Bug className="h-6 w-6" />,
  'rocket-launch': <Rocket className="h-6 w-6" />
};

export default function ExpertiseProcess({ 
  process, 
  title = "Our Process", 
  subtitle = "How we bring your vision to life" 
}: ExpertiseProcessProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 hidden md:block" />
          
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    <span className="text-primary mr-2">Step {step.step}:</span> {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground my-4 md:my-0 relative z-10">
                {step.icon && iconMap[step.icon] ? iconMap[step.icon] : <span className="font-bold">{step.step}</span>}
              </div>
              
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
