"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectorsOverview() {
  // Always show the image in both layouts instead of conditionally rendering
  // This ensures the image is always visible regardless of client-side detection
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image section - visible on desktop, hidden on mobile with CSS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/business-sectors/business-sector.png"
                alt="Business sectors overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Pledge & Grow, we understand that each industry faces unique challenges and opportunities in the digital landscape. Our specialized teams combine deep sector knowledge with technical expertise to deliver solutions that address your specific business needs.
            </p>
            {/* Removed additional paragraphs as requested */}
          </motion.div>
          
          {/* Image section - visible only on mobile, after the text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mt-8 md:hidden"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/business-sectors/business-sector.png"
                alt="Business sectors overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Industries Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
