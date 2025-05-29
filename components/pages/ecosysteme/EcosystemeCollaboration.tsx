"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BadgePercent, Users, Briefcase, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";

export default function EcosystemeCollaboration() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const clientBenefits = [
    {
      title: "Exclusive Discounts",
      description: "Up to 30% off on services from our group companies and partners",
      icon: <BadgePercent className="w-10 h-10 text-green-700 dark:text-green-400" />
    },
    {
      title: "Priority Support",
      description: "Dedicated account manager and faster response times",
      icon: <Users className="w-10 h-10 text-green-500 dark:text-green-400" />
    },
    {
      title: "Business Growth",
      description: "Access to networking events and business development opportunities",
      icon: <Briefcase className="w-10 h-10 text-green-500 dark:text-green-400" />
    },
    {
      title: "Innovation Access",
      description: "Early access to beta features and innovation projects",
      icon: <Sparkles className="w-10 h-10 text-green-500 dark:text-green-400" />
    }
  ];

  const steps = [
    "Schedule a consultation with our team",
    "Discuss your business needs and goals",
    "Receive a tailored ecosystem access plan",
    "Become a client and unlock all ecosystem benefits"
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Join Our <span className="text-green-600 dark:text-green-400">Ecosystem</span> Today
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Becoming a Pledge & Grow client is your gateway to exclusive benefits, resources, and opportunities that will accelerate your business growth.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mb-16">
            <MobileCarousel className="w-full">
              {clientBenefits.map((benefit, index) => (
                <MobileCarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4 w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {clientBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How to Join Our Ecosystem
            </h3>
            
            <ul className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{step}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Start Your Journey Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 to-emerald-700 p-1">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center p-8">
                <div className="w-full h-full relative">
                  {/* Ecosystem Benefits Diagram */}
                  <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="currentColor" className="text-green-600 dark:text-green-400">
                      {/* Central Client Node */}
                      <circle cx="200" cy="150" r="40" className="fill-green-100 dark:fill-green-900/30" strokeWidth="2" />
                      <text x="200" y="155" textAnchor="middle" className="fill-current text-sm font-medium">Client</text>
                      
                      {/* Benefit Nodes */}
                      <circle cx="120" cy="80" r="30" className="fill-green-50 dark:fill-green-900/20" strokeWidth="1.5" />
                      <text x="120" y="85" textAnchor="middle" className="fill-current text-xs">Group Companies</text>
                      <line x1="200" y1="150" x2="120" y2="80" strokeWidth="1.5" />
                      
                      <circle cx="280" cy="80" r="30" className="fill-green-50 dark:fill-green-900/20" strokeWidth="1.5" />
                      <text x="280" y="85" textAnchor="middle" className="fill-current text-xs">Partners</text>
                      <line x1="200" y1="150" x2="280" y2="80" strokeWidth="1.5" />
                      
                      <circle cx="120" cy="220" r="30" className="fill-green-50 dark:fill-green-900/20" strokeWidth="1.5" />
                      <text x="120" y="225" textAnchor="middle" className="fill-current text-xs">Discounts</text>
                      <line x1="200" y1="150" x2="120" y2="220" strokeWidth="1.5" />
                      
                      <circle cx="280" cy="220" r="30" className="fill-green-50 dark:fill-green-900/20" strokeWidth="1.5" />
                      <text x="280" y="225" textAnchor="middle" className="fill-current text-xs">Innovation</text>
                      <line x1="200" y1="150" x2="280" y2="220" strokeWidth="1.5" />
                      
                      {/* Connecting lines between benefits */}
                      <line x1="120" y1="80" x2="280" y2="80" strokeWidth="1" strokeDasharray="4" />
                      <line x1="120" y1="220" x2="280" y2="220" strokeWidth="1" strokeDasharray="4" />
                      <line x1="120" y1="80" x2="120" y2="220" strokeWidth="1" strokeDasharray="4" />
                      <line x1="280" y1="80" x2="280" y2="220" strokeWidth="1" strokeDasharray="4" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-70"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* Text about community and statistics removed as requested */}
        </motion.div>
      </div>
    </section>
  );
}
