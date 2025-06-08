"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Lightbulb, TrendingUp, Zap } from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";
import { useTranslations } from "@/hooks/useTranslations";

export default function InvestmentOpportunities() {
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
  
  // Get opportunities from translations
  const opportunities = [
    {
      title: t('investmentOpportunities.opportunities.events.title'),
      status: t('investmentOpportunities.opportunities.events.status'),
      description: t('investmentOpportunities.opportunities.events.description'),
      details: t('investmentOpportunities.opportunities.events.details', { returnObjects: true }) as string[],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: t('investmentOpportunities.opportunities.cloud.title'),
      status: t('investmentOpportunities.opportunities.cloud.status'),
      description: t('investmentOpportunities.opportunities.cloud.description'),
      details: t('investmentOpportunities.opportunities.cloud.details', { returnObjects: true }) as string[],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: t('investmentOpportunities.opportunities.properties.title'),
      status: t('investmentOpportunities.opportunities.properties.status'),
      description: t('investmentOpportunities.opportunities.properties.description'),
      details: t('investmentOpportunities.opportunities.properties.details', { returnObjects: true }) as string[],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: t('investmentOpportunities.opportunities.give.title'),
      status: t('investmentOpportunities.opportunities.give.status'),
      description: t('investmentOpportunities.opportunities.give.description'),
      details: t('investmentOpportunities.opportunities.give.details', { returnObjects: true }) as string[],
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <section id="investment-opportunities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('investmentOpportunities.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('investmentOpportunities.description')}
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mb-16">
            <MobileCarousel>
              {opportunities.map((opportunity, index) => (
                <MobileCarouselItem key={index}>
                  <Card className="h-full flex flex-col mx-2">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                          {opportunity.icon}
                        </div>
                        <Badge 
                          variant={opportunity.status === "Active" ? "default" : 
                                  opportunity.status === "Upcoming" ? "secondary" : "outline"}
                        >
                          {opportunity.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <CardDescription>{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {Array.isArray(opportunity.details) ? opportunity.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                              <svg
                                className="h-2 w-2 fill-primary"
                                viewBox="0 0 6 6"
                                aria-hidden="true"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        )) : (
                          <li className="flex items-start">
                            <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                              <svg
                                className="h-2 w-2 fill-primary"
                                viewBox="0 0 6 6"
                                aria-hidden="true"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </div>
                            <span className="text-sm text-muted-foreground">{opportunity.details ? (opportunity.details as unknown as string) : ''}</span>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                    {/* Learn More button removed as requested */}
                  </Card>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                        {opportunity.icon}
                      </div>
                      <Badge 
                        variant={opportunity.status === "Active" ? "default" : 
                                opportunity.status === "Upcoming" ? "secondary" : "outline"}
                      >
                        {opportunity.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {Array.isArray(opportunity.details) ? opportunity.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                            <svg
                              className="h-2 w-2 fill-primary"
                              viewBox="0 0 6 6"
                              aria-hidden="true"
                            >
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      )) : (
                        <li className="flex items-start">
                          <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                            <svg
                              className="h-2 w-2 fill-primary"
                              viewBox="0 0 6 6"
                              aria-hidden="true"
                            >
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground">{opportunity.details ? (opportunity.details as unknown as string) : ''}</span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                  {/* Learn More button removed as requested */}
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact?subject=Investment Inquiry">
              Contact Our Investment Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
