"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Lightbulb, TrendingUp, Zap } from "lucide-react";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";

export default function InvestmentOpportunities() {
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
  const opportunities = [
    {
      title: "Verdalize",
      status: "Active",
      description: "AI powered financial solution that transforms how businesses manage their finances.",
      details: [
        "AI-driven financial analytics",
        "Automated reporting systems",
        "Predictive financial modeling"
      ],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "P&C",
      status: "Ongoing",
      description: "Pledge & Companies with different classic approaches integrated with innovative solutions.",
      details: [
        "Traditional business models",
        "Innovation integration",
        "Cross-industry applications"
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Gardian",
      status: "Active",
      description: "Cloud tools with anonymity in mind, providing secure and private digital solutions.",
      details: [
        "Privacy-focused cloud services",
        "Anonymous data processing",
        "Secure infrastructure"
      ],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "P&G Foundation",
      status: "Active",
      description: "Foundation dedicated to supporting orphans and providing essential care and opportunities.",
      details: [
        "Orphan support programs",
        "Educational initiatives",
        "Healthcare and wellbeing"
      ],
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
            Investment Opportunities
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover current and upcoming investment opportunities with Pledge & Grow. 
            We offer various ways to invest in our growth and innovation journey.
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
                        {opportunity.details.map((detail, i) => (
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
                        ))}
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
                      {opportunity.details.map((detail, i) => (
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
                      ))}
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
