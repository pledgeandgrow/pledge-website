"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExpertiseData } from "@/data/expertise-data";
import { motion } from "framer-motion";

interface ExpertiseLayoutProps {
  expertise: ExpertiseData;
  children?: React.ReactNode;
}

export default function ExpertiseLayout({ expertise, children }: ExpertiseLayoutProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={expertise.heroImage || "/images/expertise/default-hero.jpg"}
            alt={expertise.title}
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {expertise.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {expertise.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {expertise.subtitle}
            </p>
            <Button asChild size="lg">
              <Link href={expertise.cta?.buttonLink || "/contact"}>
                {expertise.heroButton || "Start Your Project"}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-center text-foreground/90 leading-relaxed">
                {expertise.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {expertise.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {expertise.cta.description}
              </p>
              <Button asChild size="lg">
                <Link href={expertise.cta.buttonLink}>
                  {expertise.cta.buttonText}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
