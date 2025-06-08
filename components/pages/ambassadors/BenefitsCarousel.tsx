"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Award, Users, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitsCarousel() {
  const { t } = useTranslations('ambassadors');
  const benefits: BenefitCard[] = [
    {
      icon: <Globe className="text-primary h-6 w-6" />,
      title: t('becomeAmbassador.benefits.globalNetwork.title'),
      description: t('becomeAmbassador.benefits.globalNetwork.description')
    },
    {
      icon: <Award className="text-primary h-6 w-6" />,
      title: t('becomeAmbassador.benefits.exclusiveBenefits.title'),
      description: t('becomeAmbassador.benefits.exclusiveBenefits.description')
    },
    {
      icon: <Users className="text-primary h-6 w-6" />,
      title: t('becomeAmbassador.benefits.communityImpact.title'),
      description: t('becomeAmbassador.benefits.communityImpact.description')
    },
    {
      icon: <Megaphone className="text-primary h-6 w-6" />,
      title: t('becomeAmbassador.benefits.amplifyVoice.title'),
      description: t('becomeAmbassador.benefits.amplifyVoice.description')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? benefits.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
    );
  }, [benefits.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev();
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative">
      <div 
        className="overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {benefits.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index 
                ? "w-6 bg-foreground" 
                : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-background shadow-lg transform transition-transform hover:scale-110 z-10"
        onClick={handlePrev}
        aria-label="Previous benefit"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-background shadow-lg transform transition-transform hover:scale-110 z-10"
        onClick={handleNext}
        aria-label="Next benefit"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </Button>
    </div>
  );
}
