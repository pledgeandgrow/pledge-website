"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  logo: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: "retail-case",
      industry: "Retail & E-commerce",
      company: "FashionForward",
      logo: "/images/business-sectors/logo-fashionforward.jpg",
      challenge: "A growing fashion retailer needed to unify their online and in-store shopping experiences while managing inventory across multiple locations.",
      solution: "We implemented an integrated omnichannel platform with real-time inventory management, personalized customer experiences, and seamless checkout across all channels.",
      results: [
        "42% increase in online sales within 6 months",
        "Inventory accuracy improved to 98.5%",
        "Customer satisfaction scores increased by 28%"
      ],
      testimonial: {
        quote: "The omnichannel solution transformed how we engage with customers and manage our business. We now have a unified view of inventory and customer data that has dramatically improved our operations.",
        author: "Sophie Laurent",
        position: "Digital Director, FashionForward"
      }
    },
    {
      id: "healthcare-case",
      industry: "Healthcare",
      company: "MediCare Plus",
      logo: "/images/business-sectors/logo-medicare.jpg",
      challenge: "A healthcare provider struggled with inefficient patient management processes and limited telehealth capabilities during the pandemic.",
      solution: "We developed a comprehensive patient management system with integrated telehealth functionality, secure medical records, and automated administrative workflows.",
      results: [
        "Reduced administrative time by 35%",
        "Successfully transitioned 60% of consultations to telehealth",
        "Improved patient satisfaction ratings by 45%"
      ],
      testimonial: {
        quote: "The digital transformation of our patient management has revolutionized how we deliver care. The telehealth integration came at a critical time and has now become a permanent enhancement to our service offering.",
        author: "Dr. Jean Moreau",
        position: "Medical Director, MediCare Plus"
      }
    },
    {
      id: "finance-case",
      industry: "Finance & Banking",
      company: "SecureBank",
      logo: "/images/business-sectors/logo-securebank.jpg",
      challenge: "A regional bank needed to modernize its digital banking services while ensuring compliance with evolving financial regulations.",
      solution: "We created a secure, user-friendly digital banking platform with enhanced fraud detection, regulatory compliance features, and personalized financial insights.",
      results: [
        "Digital banking adoption increased by 65%",
        "Customer acquisition costs reduced by 28%",
        "Compliance reporting time decreased by 40%"
      ],
      testimonial: {
        quote: "Our digital transformation has positioned us to compete effectively with larger institutions and fintech startups. The platform's security features and regulatory compliance capabilities give us and our customers peace of mind.",
        author: "Philippe Dubois",
        position: "CTO, SecureBank"
      }
    },
    {
      id: "hospitality-case",
      industry: "Hospitality & Tourism",
      company: "LuxStay Hotels",
      logo: "/images/business-sectors/logo-luxstay.jpg",
      challenge: "A boutique hotel chain wanted to enhance guest experiences through digital innovation while streamlining operations across properties.",
      solution: "We implemented an integrated property management system with mobile check-in/out, personalized guest services, and operational analytics.",
      results: [
        "Guest satisfaction scores improved by 38%",
        "Operational efficiency increased by 25%",
        "Direct bookings grew by 45% year-over-year"
      ],
      testimonial: {
        quote: "The digital solutions have transformed both our guest experience and our operational efficiency. Our staff can now focus more on personalized service rather than administrative tasks.",
        author: "Marie Clement",
        position: "Operations Director, LuxStay Hotels"
      }
    },
    {
      id: "manufacturing-case",
      industry: "Manufacturing",
      company: "TechPrecision",
      logo: "/images/business-sectors/logo-techprecision.jpg",
      challenge: "A precision manufacturing company struggled with production inefficiencies, quality control issues, and limited visibility into their operations.",
      solution: "We implemented an IoT-enabled production monitoring system with predictive maintenance, quality control automation, and comprehensive analytics.",
      results: [
        "Production downtime reduced by 32%",
        "Quality defects decreased by 45%",
        "Overall equipment effectiveness improved by 28%"
      ],
      testimonial: {
        quote: "The production monitoring system has given us unprecedented visibility into our operations. The predictive maintenance capabilities alone have saved us countless hours of downtime and associated costs.",
        author: "Thomas Lefevre",
        position: "Production Manager, TechPrecision"
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we&apos;ve helped businesses across different sectors overcome challenges and achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm" 
              onClick={prevCase}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm" 
              onClick={nextCase}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-primary/10">
                              <Image
                                src={caseStudy.logo}
                                alt={`${caseStudy.company} logo`}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{caseStudy.company}</h3>
                              <Badge variant="outline" className="mt-1">
                                {caseStudy.industry}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-medium mb-2">Challenge</h4>
                            <p className="text-muted-foreground">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-2">Solution</h4>
                            <p className="text-muted-foreground">{caseStudy.solution}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium mb-2">Results</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {caseStudy.results.map((result, index) => (
                              <li key={index} className="bg-muted p-3 rounded-md text-sm">
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {caseStudy.testimonial && (
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <blockquote className="italic text-muted-foreground mb-3">
                              &quot;{caseStudy.testimonial.quote}&quot;
                            </blockquote>
                            <div className="text-right">
                              <p className="font-medium">{caseStudy.testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex justify-end">
                          <Button asChild variant="outline" size="sm">
                            <a href="#" className="flex items-center gap-2">
                              View Full Case Study <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
