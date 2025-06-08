"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Code, 
  Rocket, 
  Zap, 
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const getProcessSteps = (t: (key: string) => string): ProcessStep[] => [
  {
    id: "discovery",
    title: t('process.steps.0.title'),
    description: t('process.steps.0.description'),
    icon: <Lightbulb className="h-8 w-8 text-primary" />
  },
  {
    id: "design-development",
    title: t('process.steps.1.title'),
    description: t('process.steps.1.description'),
    icon: <Code className="h-8 w-8 text-primary" />
  },
  {
    id: "testing",
    title: t('process.steps.2.title'),
    description: t('process.steps.2.description'),
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    id: "deployment",
    title: t('process.steps.3.title'),
    description: t('process.steps.3.description'),
    icon: <Rocket className="h-8 w-8 text-primary" />
  },
  {
    id: "support",
    title: t('process.steps.4.title'),
    description: t('process.steps.4.description'),
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

export default function ProjectProcess() {
  const { t } = useTranslations('digital-project');
  const processSteps = getProcessSteps(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(processSteps.length - 1, prev + 1));
  };
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('process.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('process.description')}
          </p>
        </div>
        
        {/* Desktop Timeline View */}
        <div className={`${!isMobile ? 'block' : 'hidden'} relative max-w-5xl mx-auto`}>
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 block" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative mb-16 last:mb-0 flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className={`w-1/2 ${
                index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
              }`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Center icon for desktop */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary/20 absolute left-1/2 top-0 -translate-x-1/2 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative max-w-md mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">{t('process.navigation.previous')}</span>
              </Button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handleNext}
                disabled={currentIndex >= processSteps.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">{t('process.navigation.next')}</span>
              </Button>
            </div>

            {/* Single card display */}
            <div className="px-4 transition-all duration-300">
              <div 
                key={processSteps[currentIndex].id} 
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    {processSteps[currentIndex].icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">{processSteps[currentIndex].title}</h3>
                <p className="text-muted-foreground text-center">{processSteps[currentIndex].description}</p>
                <div className="mt-4 text-center text-primary font-medium">
                  {t('process.navigation.step')} {currentIndex + 1} {t('process.navigation.of')} {processSteps.length}
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {processSteps.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
