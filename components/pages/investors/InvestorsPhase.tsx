"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";

interface InvestmentPhase {
  id: string;
  title: string;
  status: "active" | "coming-soon";
  description: string;
  details: string[];
  cta?: {
    text: string;
    link: string;
  };
}

export default function InvestorsPhase() {
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
  const phases: InvestmentPhase[] = [
    {
      id: "seed",
      title: "SEED",
      status: "active",
      description: "Initial funding round for early-stage development and market validation.",
      details: [
        "5 angel investors",
        "€100K investment per investor",
        "1% non-dilutable equity per investor",
        "Investment with guarantee",
        "Limited availability"
      ],
      cta: {
        text: "Inquire About Seed Investment",
        link: "/contact?subject=Seed%20Investment"
      }
    },
    {
      id: "grow",
      title: "GROW",
      status: "coming-soon",
      description: "Second funding phase focused on scaling operations and market expansion.",
      details: [
        "Series A funding round",
        "Strategic investors welcome",
        "Focused on business scaling",
        "Enhanced growth opportunities",
        "Projected for Q3 2025"
      ]
    },
    {
      id: "pledge",
      title: "PLEDGE",
      status: "coming-soon",
      description: "Final investment phase for established business with proven market success.",
      details: [
        "Series B funding round",
        "Institutional investors focus",
        "International expansion funding",
        "Strategic acquisitions",
        "Projected for Q2 2026"
      ]
    }
  ];

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
            Investment Phases
          </h2>
          <p className="text-lg text-muted-foreground">
            Our strategic investment plan is structured in three distinct phases,
            each offering unique opportunities for investors to participate in our growth journey.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mb-10">
            <MobileCarousel>
              {phases.map((phase) => (
                <MobileCarouselItem key={phase.id}>
                  <Card className="h-full flex flex-col mx-2">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <CardTitle className="text-2xl font-bold">{phase.title}</CardTitle>
                        <Badge variant={phase.status === "active" ? "default" : "secondary"}>
                          {phase.status === "active" ? (
                            <>
                              <CheckCircle className="h-3.5 w-3.5 mr-1" />
                              Active
                            </>
                          ) : (
                            <>
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              Coming Soon
                            </>
                          )}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {phase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {phase.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    {phase.cta && (
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={phase.cta.link} className="flex items-center justify-center gap-2">
                            {phase.cta.text}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col relative overflow-hidden">
                  {phase.status === "coming-soon" && (
                    <div className="absolute top-0 right-0 bg-muted-foreground/10 px-3 py-1 rounded-bl-lg">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">Coming Soon</span>
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-center mt-2">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {phase.cta ? (
                      <Button asChild className="w-full">
                        <Link href={phase.cta.link} className="flex items-center justify-center gap-2">
                          {phase.cta.text}
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full opacity-70">
                        Coming Soon
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
