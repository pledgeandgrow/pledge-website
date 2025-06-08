"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award 
} from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";
import { useTranslations } from "@/hooks/useTranslations";

export default function CompanyOverview() {
  const { t } = useTranslations('investors');
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
  
  // Get highlights from translations
  const highlights = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: t('companyOverview.highlights.consistentGrowth.title'),
      description: t('companyOverview.highlights.consistentGrowth.description')
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t('companyOverview.highlights.globalTeam.title'),
      description: t('companyOverview.highlights.globalTeam.description')
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('companyOverview.highlights.marketReach.title'),
      description: t('companyOverview.highlights.marketReach.description')
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t('companyOverview.highlights.localRecognition.title'),
      description: t('companyOverview.highlights.localRecognition.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('companyOverview.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('companyOverview.description')}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t('companyOverview.mission.description')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('companyOverview.vision.description')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isMobile ? (
              <div className="mt-8">
                <MobileCarousel>
                  {highlights.map((highlight, index) => (
                    <MobileCarouselItem key={index}>
                      <Card className="h-full mx-2">
                        <CardContent className="p-6">
                          <div className="mb-4">{highlight.icon}</div>
                          <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                          <p className="text-muted-foreground">{highlight.description}</p>
                        </CardContent>
                      </Card>
                    </MobileCarouselItem>
                  ))}
                </MobileCarousel>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="mb-4">{highlight.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
