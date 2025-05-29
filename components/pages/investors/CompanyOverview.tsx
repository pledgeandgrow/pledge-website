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

export default function CompanyOverview() {
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
  const highlights = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Consistent Growth",
      description: "35% year-over-year revenue growth since our founding"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Global Team",
      description: "200+ talented professionals across 15 countries"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Market Reach",
      description: "Serving clients in over 30 countries worldwide"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Industry Recognition",
      description: "Multiple awards for innovation and excellence"
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
              Company Overview
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pledge & Grow is a leading technology company specializing in digital transformation, web and mobile development, cloud solutions, and innovative software products.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, we&apos;ve rapidly expanded our operations globally, serving clients ranging from startups to Fortune 500 companies. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              With a focus on quality, innovation, and client satisfaction, we&apos;ve established ourselves as a trusted partner for businesses looking to thrive in the digital age.
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
