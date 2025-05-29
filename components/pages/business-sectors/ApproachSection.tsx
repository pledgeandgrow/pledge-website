"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Lightbulb, 
  Settings, 
  BarChart, 
  Shield 
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ApproachStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ApproachSection() {
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
  const steps: ApproachStep[] = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Industry Analysis",
      description: "We begin by thoroughly understanding your industry's specific challenges, regulatory requirements, and competitive landscape."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Tailored Strategy",
      description: "We develop a customized digital strategy that addresses your sector-specific needs and aligns with your business objectives."
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Specialized Implementation",
      description: "Our industry experts work alongside our technical teams to implement solutions that incorporate sector best practices."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Industry Benchmarking",
      description: "We measure performance against industry standards and continuously optimize to ensure your competitive advantage."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Compliance & Security",
      description: "We ensure all solutions adhere to industry-specific regulations and security requirements, protecting your business and customers."
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
            Our Industry-Focused Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a structured methodology that combines industry expertise with technical excellence to deliver solutions that truly address your sector-specific needs.
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {steps.map((step, index) => (
                  <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <div className="flex flex-col items-center text-center h-full bg-card rounded-lg p-6 shadow-sm border border-border">
                      <div className="bg-primary/10 p-6 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {steps.slice(0, Math.min(5, steps.length)).map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                  {steps.length > 5 && (
                    <div className="h-2 w-2 rounded-full bg-primary/30">...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop List View */}
        {!isMobile && (
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0 items-center"
              >
                <div className="bg-primary/10 p-6 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
