"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Button import removed as it was unused
// Link import removed as it was unused
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Languages, Globe, FileText, Code } from "lucide-react";

export default function LocalizationServices() {
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
  const services = [
    {
      title: "Website & App Localization",
      description: "Comprehensive localization of your digital products for global markets, including UI/UX adaptation, content translation, and cultural optimization.",
      features: [
        "Multi-language interface implementation",
        "Bidirectional text support (RTL/LTR)",
        "Currency, date, and number format adaptation",
        "Cultural UX considerations"
      ],
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Content Translation",
      description: "Professional translation services for all your digital content, ensuring accurate and culturally appropriate messaging across languages.",
      features: [
        "Website and app content translation",
        "Marketing material localization",
        "Technical documentation translation",
        "SEO-optimized multilingual content"
      ],
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Multilingual Development",
      description: "Technical implementation of multilingual capabilities in your applications, with proper internationalization (i18n) architecture.",
      features: [
        "i18n framework implementation",
        "Language switching functionality",
        "Content management for multiple languages",
        "Automated translation workflows"
      ],
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: "Global Compliance",
      description: "Ensuring your digital products comply with regional regulations and standards across different markets.",
      features: [
        "GDPR, CCPA, and other privacy regulations",
        "Accessibility standards compliance",
        "Regional legal requirements",
        "Industry-specific compliance"
      ],
      icon: <Languages className="h-6 w-6 text-primary" />
    }
  ];

  // Languages array removed as requested

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Localization Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We help businesses reach global audiences with comprehensive localization services.
            From translation to cultural adaptation, we ensure your digital products resonate worldwide.
          </p>
        </motion.div>

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
