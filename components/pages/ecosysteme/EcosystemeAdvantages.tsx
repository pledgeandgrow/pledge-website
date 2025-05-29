"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePercent, Handshake, Zap, Building, ShieldCheck, Clock } from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function AdvantageCard({ title, description, icon, delay }: AdvantageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-md bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="mb-4 w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function EcosystemeAdvantages() {
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
  
  const advantages = [
    {
      title: "Exclusive Discounts",
      description: "Receive significant reductions on services from our partner companies, helping you save on essential business needs.",
      icon: <BadgePercent className="w-6 h-6" />,
    },
    {
      title: "Priority Access",
      description: "Get priority access to new features, services, and innovation projects before they're available to the general public.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Group Resources",
      description: "Leverage the combined expertise and resources of all Pledge & Grow group companies for your projects.",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Strategic Partnerships",
      description: "Connect with our network of trusted partners to expand your business opportunities and reach.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: "Enhanced Support",
      description: "Benefit from dedicated support and extended service hours exclusively available to ecosystem members.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Early Innovation Access",
      description: "Be among the first to test and implement cutting-edge solutions from our internal innovation projects.",
      icon: <Clock className="w-6 h-6" />,
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Benefits of Our Ecosystem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a client of Pledge & Grow, you gain access to a wealth of advantages that help your business grow and thrive.
          </p>
        </motion.div>

        {isMobile ? (
          <MobileCarousel className="w-full">
            {advantages.map((advantage, index) => (
              <MobileCarouselItem key={index}>
                <AdvantageCard
                  title={advantage.title}
                  description={advantage.description}
                  icon={advantage.icon}
                  delay={index}
                />
              </MobileCarouselItem>
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                title={advantage.title}
                description={advantage.description}
                icon={advantage.icon}
                delay={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
