"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Award, Users, Megaphone } from "lucide-react";
import BenefitsCarousel from "./BenefitsCarousel";

export default function BecomeAmbassador() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <section id="become-ambassador" className="py-16 md:py-24 bg-gradient-to-b from-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our global community of ambassadors and help us spread our mission. 
              As an ambassador, you&apos;ll represent Pledge & Grow in your region and connect with like-minded professionals.
            </p>
          </motion.div>
        </div>

        {isMobile ? (
          <div className="mb-16">
            <BenefitsCarousel />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Global Network</h3>
              <p className="text-muted-foreground">
                Connect with a diverse community of technology enthusiasts and professionals from around the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Exclusive Benefits</h3>
              <p className="text-muted-foreground">
                Gain access to exclusive resources, early product releases, and special ambassador-only events.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Community Impact</h3>
              <p className="text-muted-foreground">
                Make a difference in your local tech community by sharing knowledge and fostering innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Megaphone className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Amplify Your Voice</h3>
              <p className="text-muted-foreground">
                Enhance your personal brand and establish yourself as a thought leader in your field.
              </p>
            </motion.div>
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact?subject=Ambassador Program Inquiry">
              Apply to Become an Ambassador
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
