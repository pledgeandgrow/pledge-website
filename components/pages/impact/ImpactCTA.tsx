"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ImpactCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Join Us in Making a Difference
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a nonprofit organization in need of technology support, 
              a company looking to partner on social impact initiatives, 
              or an individual who wants to contribute, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact?subject=Pro Bono Application" className="flex items-center gap-2">
                  <Heart className="h-5 w-5" /> 
                  Apply for Pro Bono Support
                </Link>
              </Button>
              
              <Button variant="outline" asChild size="lg">
                <Link href="/contact?subject=Impact Partnership" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> 
                  Discuss a Partnership
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-3">Pro Bono Application</h3>
            <p className="text-muted-foreground mb-4">
              Nonprofit organizations can apply for pro bono technology services through our quarterly selection process.
            </p>
            <Button variant="link" asChild>
              <Link href="/pro-bono-application" className="flex items-center gap-1 justify-center">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-3">Volunteer Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              Join our team in volunteering technical expertise and time to support worthy causes in our communities.
            </p>
            <Button variant="link" asChild>
              <Link href="/careers#volunteer" className="flex items-center gap-1 justify-center">
                Get Involved <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-3">Impact Events</h3>
            <p className="text-muted-foreground mb-4">
              Attend our workshops, hackathons, and community events focused on technology for social good.
            </p>
            <Button variant="link" asChild>
              <Link href="/events" className="flex items-center gap-1 justify-center">
                View Calendar <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
