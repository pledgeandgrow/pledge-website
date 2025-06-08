"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Button import removed as it was unused
// Link import removed as it was unused
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Languages, Globe, FileText, Code } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function LocalizationServices() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslations('international');

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

  // Helper function to safely get features as an array
  const getFeatures = (key: string): string[] => {
    const features = t(key, { returnObjects: true });
    // Si features est un tableau, le retourner, sinon retourner un tableau vide
    return Array.isArray(features) ? features : [];
  };
  
  // Helper function to safely get string translations
  const getText = (key: string, fallback: string): string => {
    const text = t(key);
    return typeof text === 'string' ? text : fallback;
  };

  // Define a type for our services
  interface ServiceItem {
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
  }

  const services: ServiceItem[] = [
    {
      title: getText('localizationServices.services.webAppLocalization.title', "Website & App Localization"),
      description: getText('localizationServices.services.webAppLocalization.description', "Comprehensive localization of your digital products for global markets, including UI/UX adaptation, content translation, and cultural optimization."),
      features: getFeatures('localizationServices.services.webAppLocalization.features'),
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: getText('localizationServices.services.contentTranslation.title', "Content Translation"),
      description: getText('localizationServices.services.contentTranslation.description', "Professional translation services for all your digital content, ensuring accurate and culturally appropriate messaging across languages."),
      features: getFeatures('localizationServices.services.contentTranslation.features'),
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: getText('localizationServices.services.multilingualDevelopment.title', "Multilingual Development"),
      description: getText('localizationServices.services.multilingualDevelopment.description', "Technical implementation of multilingual capabilities in your applications, with proper internationalization (i18n) architecture."),
      features: getFeatures('localizationServices.services.multilingualDevelopment.features'),
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: getText('localizationServices.services.globalCompliance.title', "Global Compliance"),
      description: getText('localizationServices.services.globalCompliance.description', "Ensuring your digital products comply with regional regulations and standards across different markets."),
      features: getFeatures('localizationServices.services.globalCompliance.features'),
      icon: <Languages className="h-6 w-6 text-primary" />
    }
  ];

  // Languages array removed as requested

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {getText('localizationServices.title', 'Localization Services')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t('localizationServices.description') || "We help businesses reach global audiences with comprehensive localization services. From translation to cultural adaptation, we ensure your digital products resonate worldwide."}
          </motion.p>
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {services.map((service, index) => (
                  <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {services.map((_, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
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
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Supported Languages section removed as requested */}
      </div>
    </section>
  );
}
