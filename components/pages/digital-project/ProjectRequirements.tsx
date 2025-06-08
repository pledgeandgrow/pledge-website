"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Check, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "@/hooks/useTranslations";

interface CollaborationRequirement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const getCollaborationRequirements = (t: (key: string) => string): CollaborationRequirement[] => [
  {
    id: "clear-goals",
    title: t('requirements.collaborationRequirements.0.title'),
    description: t('requirements.collaborationRequirements.0.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "timeline",
    title: t('requirements.collaborationRequirements.1.title'),
    description: t('requirements.collaborationRequirements.1.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "budget",
    title: t('requirements.collaborationRequirements.2.title'),
    description: t('requirements.collaborationRequirements.2.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "feedback",
    title: t('requirements.collaborationRequirements.3.title'),
    description: t('requirements.collaborationRequirements.3.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "content",
    title: t('requirements.collaborationRequirements.4.title'),
    description: t('requirements.collaborationRequirements.4.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "decision-maker",
    title: t('requirements.collaborationRequirements.5.title'),
    description: t('requirements.collaborationRequirements.5.description'),
    icon: <Check className="h-5 w-5 text-primary" />
  }
];

const getClientProvisions = (t: (key: string, options?: { returnObjects: boolean }) => string | string[]) => [
  {
    id: "brand-assets",
    title: t('requirements.clientProvisions.categories.0.title'),
    items: t('requirements.clientProvisions.categories.0.items', { returnObjects: true }) || []
  },
  {
    id: "content-materials",
    title: t('requirements.clientProvisions.categories.1.title'),
    items: t('requirements.clientProvisions.categories.1.items', { returnObjects: true }) || []
  },
  {
    id: "technical-access",
    title: t('requirements.clientProvisions.categories.2.title'),
    items: t('requirements.clientProvisions.categories.2.items', { returnObjects: true }) || []
  },
  {
    id: "legal-requirements",
    title: t('requirements.clientProvisions.categories.3.title'),
    items: t('requirements.clientProvisions.categories.3.items', { returnObjects: true }) || []
  }
];

export default function ProjectRequirements() {
  const { t } = useTranslations('digital-project');
  const collaborationRequirements = getCollaborationRequirements(t);
  const clientProvisions = getClientProvisions(t);
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
    setCurrentIndex((prev) => Math.min(collaborationRequirements.length - 1, prev + 1));
  };
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('requirements.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('requirements.description')}
          </p>
        </div>
        
        {/* Desktop Grid View */}
        <div className={`${!isMobile ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16`}>
          {collaborationRequirements.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {req.icon}
                  </div>
                  <CardTitle className="text-xl">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative max-w-md mx-auto mb-16">
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
                <span className="sr-only">{t('requirements.clientProvisions.navigation.previous')}</span>
              </Button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handleNext}
                disabled={currentIndex >= collaborationRequirements.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">{t('requirements.clientProvisions.navigation.next')}</span>
              </Button>
            </div>

            {/* Single card display */}
            <div className="px-4 transition-all duration-300">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {collaborationRequirements[currentIndex].icon}
                  </div>
                  <CardTitle className="text-xl">{collaborationRequirements[currentIndex].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{collaborationRequirements[currentIndex].description}</p>
                  <div className="mt-4 text-center text-primary font-medium">
                    {currentIndex + 1} {t('requirements.clientProvisions.navigation.of')} {collaborationRequirements.length}
                  </div>
                </CardContent>
              </Card>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {collaborationRequirements.map((_, idx) => (
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
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Info className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">{t('requirements.clientProvisions.title')}</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            {t('requirements.clientProvisions.description')}
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {clientProvisions.map((provision) => (
              <AccordionItem key={provision.id} value={provision.id}>
                <AccordionTrigger className="text-lg font-medium">
                  {provision.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                    {Array.isArray(provision.items) ? (
                      provision.items.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>No items available</li>
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
