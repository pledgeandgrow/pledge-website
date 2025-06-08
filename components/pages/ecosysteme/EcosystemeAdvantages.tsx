"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePercent, Handshake, Zap, Building, ShieldCheck, Clock } from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";
import { useTranslations } from "@/hooks/useTranslations";

export default function EcosystemeAdvantages() {
  const [isMobile, setIsMobile] = useState(false);
  const { t, isLoading } = useTranslations('ecosystem');
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Get advantages from translations - memoized to prevent unnecessary re-renders
  const advantages = useMemo(() => {
    if (isLoading) return [];
    
    // Map of advantage keys to their corresponding icons (moved inside useMemo)
    const advantageIcons: Record<string, React.ReactNode> = {
      exclusiveDiscounts: <BadgePercent className="w-6 h-6" />,
      priorityAccess: <Zap className="w-6 h-6" />,
      groupResources: <Building className="w-6 h-6" />,
      strategicPartnerships: <Handshake className="w-6 h-6" />,
      enhancedSupport: <ShieldCheck className="w-6 h-6" />,
      earlyInnovation: <Clock className="w-6 h-6" />,
    };
    
    const items = t('advantages.items', { returnObjects: true }) || {};
    return Object.entries(items).map(([key, value]) => {
      // Type assertion after we know it's an object
      const itemValue = value as { title?: string; description?: string };
      return {
        key,
        title: itemValue.title || key,
        description: itemValue.description || '',
        icon: advantageIcons[key] || <Building className="w-6 h-6" />,
      };
    }).filter(item => item.title && item.description);
  }, [t, isLoading]);

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
            {t('advantages.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('advantages.description')}
          </p>
        </motion.div>

        {isMobile ? (
          <MobileCarousel className="w-full">
            {advantages.map((advantage, index) => (
              <MobileCarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none shadow-md bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-400">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{advantage.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </MobileCarouselItem>
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-900/40 flex items-center justify-center text-green-700 dark:text-green-400">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{advantage.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
