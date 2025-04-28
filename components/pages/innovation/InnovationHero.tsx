"use client";

import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InnovationHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Driving <span className="text-primary">Innovation</span> Forward
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover how Pledge & Grow stays at the cutting edge of technology to deliver exceptional digital solutions, support startups, and build innovative internal projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="#incubator" className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Startup Incubator
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#internal-projects" className="flex items-center gap-2">
                <Rocket className="h-5 w-5" /> Our Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
