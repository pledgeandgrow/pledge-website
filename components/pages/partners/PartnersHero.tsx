"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Trusted Partners
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions. 
            Our partnerships enable us to provide cutting-edge technology and services to our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="#partners-list">
                Explore Partners
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="#become-partner">
                Become a Partner
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
}
