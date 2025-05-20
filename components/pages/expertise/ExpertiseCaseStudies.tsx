"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExpertiseCase } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ExpertiseCaseStudiesProps {
  cases: ExpertiseCase[];
  title?: string;
  subtitle?: string;
}

export default function ExpertiseCaseStudies({ 
  cases, 
  title = "Case Studies", 
  subtitle = "Real solutions for real clients" 
}: ExpertiseCaseStudiesProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                {caseStudy.client && caseStudy.industry && (
                  <div className="text-sm text-muted-foreground mb-2">
                    {caseStudy.client} • {caseStudy.industry}
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-foreground">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                
                {caseStudy.link && (
                  <Link 
                    href={caseStudy.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
