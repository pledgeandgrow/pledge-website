"use client";

import { useState, useRef, useEffect, useCallback } from "react";
// motion import removed as it was unused
import AmbassadorCard from "./AmbassadorCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

interface Ambassador {
  id: string;
  name: string;
  image: string;
  role: string;
  location: string;
  region: string;
  bio: string;
  socialLinks: {
    platform: 'twitter' | 'linkedin' | 'instagram' | 'tiktok';
    url: string;
  }[];
  featured?: boolean;
}

interface AmbassadorCarouselProps {
  ambassadors: Ambassador[];
}

export default function AmbassadorCarousel({ ambassadors }: AmbassadorCarouselProps) {
  const { t } = useTranslations('ambassadors');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? ambassadors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === ambassadors.length - 1 ? 0 : prevIndex + 1
    );
  }, [ambassadors.length]);

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

  if (ambassadors.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{t('ambassadorsList.noAmbassadors')}</h3>
        <p className="text-muted-foreground">
          {t('ambassadorsList.tryAdjusting')}
        </p>
      </div>
    );
  }

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
          {ambassadors.map((ambassador) => (
            <div key={ambassador.id} className="w-full flex-shrink-0 px-4">
              <AmbassadorCard 
                name={ambassador.name}
                image={ambassador.image}
                role={ambassador.role}
                location={ambassador.location}
                bio={ambassador.bio}
                socialLinks={ambassador.socialLinks}
                featured={ambassador.featured}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {ambassadors.map((_, index) => (
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

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-lg transform transition-transform hover:scale-110 z-10"
        onClick={handlePrev}
        aria-label="Previous ambassador"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-lg transform transition-transform hover:scale-110 z-10"
        onClick={handleNext}
        aria-label="Next ambassador"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </Button>
    </div>
  );
}
