"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function InnovationCTA() {
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
              Partner with Us on Your Next Innovation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to transform your business with cutting-edge technology, 
              join our startup incubator, or collaborate on an innovative project, 
              our team is ready to help turn your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> 
                  Contact Our Innovation Team
                </Link>
              </Button>
              
              <Button variant="outline" asChild size="lg">
                <Link href="/contact?subject=Innovation Workshop" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> 
                  Schedule an Innovation Workshop
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
            <h3 className="text-xl font-semibold mb-3">Innovation Consulting</h3>
            <p className="text-muted-foreground mb-4">
              Get expert guidance on implementing emerging technologies and innovative strategies for your business.
            </p>
            <Button variant="link" asChild>
              <Link href="/services/innovation-consulting" className="flex items-center gap-1 justify-center">
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
            <h3 className="text-xl font-semibold mb-3">Technology Workshops</h3>
            <p className="text-muted-foreground mb-4">
              Join our hands-on workshops to explore new technologies and learn how they can benefit your organization.
            </p>
            <Button variant="link" asChild>
              <Link href="/events" className="flex items-center gap-1 justify-center">
                View Schedule <ArrowRight className="h-4 w-4" />
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
            <h3 className="text-xl font-semibold mb-3">Innovation Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our monthly newsletter for insights on emerging technologies and innovation trends.
            </p>
            <Button variant="link" asChild>
              <Link href="/newsletter" className="flex items-center gap-1 justify-center">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
