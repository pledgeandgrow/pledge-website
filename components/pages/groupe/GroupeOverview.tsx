"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function GroupeOverview() {
  const { t } = useTranslations('groupe');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const overviewItems = [
    {
      title: t('overview.items.0.title'),
      description: t('overview.items.0.description')
    },
    {
      title: t('overview.items.1.title'),
      description: t('overview.items.1.description')
    },
    {
      title: t('overview.items.2.title'),
      description: t('overview.items.2.description')
    },
    {
      title: t('overview.items.3.title'),
      description: t('overview.items.3.description')
    }
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('overview.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('overview.description')}
            </p>
          </div>
          
          {/* Mobile Carousel View */}
          {isMobile && (
            <div className="mt-12">
              <div className="overflow-x-auto pb-6">
                <div className="flex space-x-4 w-max px-4">
                  {overviewItems.map((item, index) => (
                    <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                      <div className="bg-card p-8 rounded-lg border shadow-sm h-full">
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {overviewItems.map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-2 w-2 rounded-full bg-primary/30`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Desktop Grid View */}
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {overviewItems.map((item, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
