"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Headphones, 
  BookOpen, 
  Zap, 
  Globe, 
  Shield 
} from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function DiscordBenefits() {
  const { t } = useTranslations("discord");
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

  const benefitItems = [
    {
      key: "realTimeSupport",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      key: "networking",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      key: "liveEvents",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      key: "voiceChannels",
      icon: <Headphones className="h-6 w-6 text-primary" />
    },
    {
      key: "exclusiveResources",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      key: "earlyUpdates",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      key: "globalCommunity",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      key: "safeEnvironment",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="discord-benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("benefits.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("benefits.description")}
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {benefitItems.map((benefit, index) => (
                  <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-xl">{t(`benefits.items.${benefit.key}.title`)}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-muted-foreground">
                          {t(`benefits.items.${benefit.key}.description`)}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {benefitItems.map((_, index) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitItems.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{t(`benefits.items.${benefit.key}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-muted-foreground">
                      {t(`benefits.items.${benefit.key}.description`)}
                    </CardDescription>
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
