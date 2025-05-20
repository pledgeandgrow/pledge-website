"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Headphones } from "lucide-react";

export default function PodcastsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Headphones className="h-3.5 w-3.5 mr-1" />
            Podcast Appearances
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured on Podcasts</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our team regularly appears on industry podcasts to share insights on technology trends, 
            digital transformation, and business innovation.
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center p-12 border border-dashed rounded-lg"
        >
          <div className="bg-primary/10 p-4 rounded-full mb-6">
            <Headphones className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
          <p className="text-muted-foreground max-w-xl">
            We&apos;re preparing to share our podcast appearances. Stay tuned for expert insights and discussions from our team on various technology and business topics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
