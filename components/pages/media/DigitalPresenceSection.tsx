"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";



export default function DigitalPresenceSection() {

  return (
    <section id="digital-presence" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <BookOpen className="h-3.5 w-3.5 mr-1" />
            Digital Presence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured in Digital Media</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our features in leading digital publications, industry recognitions, and thought leadership articles across the web.
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
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
          <p className="text-muted-foreground max-w-xl">
            We&apos;re preparing to share our digital media features and publications. Stay tuned for articles, interviews, and industry recognition featuring our team and work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
