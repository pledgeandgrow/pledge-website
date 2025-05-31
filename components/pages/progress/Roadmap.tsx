"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapItem {
  title: string;
  description: string;
  timeline: string;
  icon: React.ReactNode;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: "Advanced AI Integration",
    description: "Implementing AI solutions for predictive analytics and automation",
    timeline: "Q3 2025",
    icon: <Cpu className="h-5 w-5" />
  },
  {
    title: "Enterprise Blockchain Solutions",
    description: "Secure, scalable blockchain infrastructure for businesses",
    timeline: "Q4 2025",
    icon: <Database className="h-5 w-5" />
  },
  {
    title: "Global Development Centers",
    description: "24/7 support and development capabilities worldwide",
    timeline: "Q2 2026",
    icon: <Globe className="h-5 w-5" />
  },
  {
    title: "Enhanced Security Framework",
    description: "Comprehensive security to protect client applications",
    timeline: "Q3 2026",
    icon: <Shield className="h-5 w-5" />
  },
  {
    title: "Unified Cross-Platform Development",
    description: "Efficient creation of applications across all platforms",
    timeline: "Q4 2026",
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: "Anonymity & Proprietary Tools",
    description: "Our own suite of privacy-focused development tools",
    timeline: "Q1 2027",
    icon: <Shield className="h-5 w-5" />
  }
];

export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile detection is handled by CSS media queries instead

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === roadmapItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? roadmapItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Technology Roadmap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our strategic vision for delivering greater value to clients
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Grid View */}
          <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmapItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-lg shadow-sm flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                
                <div className="mt-auto flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  {item.timeline}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-card border border-border rounded-lg shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-full">
                      {roadmapItems[currentIndex].icon}
                    </div>
                    <h3 className="font-semibold">{roadmapItems[currentIndex].title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{roadmapItems[currentIndex].description}</p>
                  
                  <div className="mt-auto flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    {roadmapItems[currentIndex].timeline}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-1.5">
                {roadmapItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              <span>Updated quarterly based on industry trends and client needs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
