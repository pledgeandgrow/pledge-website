"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function ReferencesHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-primary">References</span> & Case Studies
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Discover how we&apos;ve helped businesses across various industries achieve their digital goals through innovative solutions and strategic partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#case-studies" className="flex items-center gap-2">
                Explore Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild size="lg">
              <Link href="#testimonials">
                Read Testimonials
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
