"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Handshake, ArrowRight, BadgePercent, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";
import Link from "next/link";

export default function EcosystemePartners() {
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
  const partnerBenefits = [
    {
      title: "Exclusive Discounts",
      description: "Receive special pricing and offers available only to Pledge & Grow clients",
      icon: <BadgePercent className="h-8 w-8 text-green-700 dark:text-green-400" />
    },
    {
      title: "Priority Access",
      description: "Get first access to new services and features from our partner network",
      icon: <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
    },
    {
      title: "Expanded Network",
      description: "Connect with other businesses in our ecosystem for collaboration opportunities",
      icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
    },
    {
      title: "Trusted Partners",
      description: "Work with pre-vetted partners that meet our high quality standards",
      icon: <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            <span>Exclusive Partnerships</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Partner Ecosystem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a Pledge & Grow client, you gain exclusive access to our network of trusted partners, each offering special discounts and benefits.
          </p>
        </motion.div>

        {/* Partner Benefits */}
        {isMobile ? (
          <div className="mb-16">
            <MobileCarousel className="w-full">
              {partnerBenefits.map((benefit, index) => (
                <MobileCarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* Partner Network Description */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">A Growing Network of Industry Leaders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our partner ecosystem includes companies across various industries, from marketing and design to technology and finance. 
                We carefully select partners who share our commitment to quality and innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As our network continues to expand, you'll gain access to an ever-growing range of services and benefits, 
                all designed to help your business thrive in today's competitive landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Partner Network Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Average of 15-30% discount on partner services</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Dedicated support channels for ecosystem members</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Quarterly networking events with partners and clients</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500/90 dark:bg-green-600/90 flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Seamless integration between partner services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section removed as requested */}
      </div>
    </section>
  );
}
