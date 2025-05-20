"use client";

import { Button } from "@/components/ui/button";
import { Tv, Radio, Instagram, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MediaHero() {
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
            Our <span className="text-primary">Media</span> Presence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover Pledge & Grow&apos;s appearances across various media platforms, from social networks to TV shows, podcasts, and digital publications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="#social-media" className="flex items-center gap-2">
                <Instagram className="h-5 w-5" /> Social Media
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#tv-appearances" className="flex items-center gap-2">
                <Tv className="h-5 w-5" /> TV Appearances
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#podcasts" className="flex items-center gap-2">
                <Radio className="h-5 w-5" /> Podcasts
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#digital-presence" className="flex items-center gap-2">
                <Globe className="h-5 w-5" /> Digital Presence
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
