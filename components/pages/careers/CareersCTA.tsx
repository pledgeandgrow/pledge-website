"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the next step in your career journey. Explore our open positions or send us your resume for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/about" className="flex items-center gap-2">
                Learn about us <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="/contact" className="flex items-center gap-2">
                <Send className="h-4 w-4" /> Join our team
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
