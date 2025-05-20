"use client";

import React from "react";
import Image from "next/image";
import { ExpertiseTechnology } from "@/data/expertise-data";
import { motion } from "framer-motion";

interface ExpertiseTechnologiesProps {
  technologies: ExpertiseTechnology[];
  title?: string;
  subtitle?: string;
}

export default function ExpertiseTechnologies({ 
  technologies, 
  title = "Technologies We Use", 
  subtitle = "Modern tools for modern solutions" 
}: ExpertiseTechnologiesProps) {
  return (
    <section className="py-16 bg-muted/30">
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
        
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              {tech.logo ? (
                <div className="relative h-16 w-16 mb-3">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-16 w-16 mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{tech.name.substring(0, 2)}</span>
                </div>
              )}
              <h3 className="text-lg font-medium text-foreground">{tech.name}</h3>
              {tech.description && (
                <p className="text-sm text-muted-foreground text-center mt-1 max-w-[200px]">
                  {tech.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
