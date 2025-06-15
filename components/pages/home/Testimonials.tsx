"use client";

import { useState, useMemo, Suspense } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";
import { TestimonialSkeleton } from "@/components/ui/LoadingSkeleton";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

function TestimonialsContent() {
  const { t } = useTranslations("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  // For desktop view, we'll show 3 cards at a time
  const [desktopStartIndex, setDesktopStartIndex] = useState(0);
  const cardsPerPage = 3;
  
  // Get testimonials from translation files with better error handling
  const testimonials = useMemo(() => {
    try {
      // First try to get the testimonials directly
      let items;
      try {
        // Try to get items directly as an array
        items = t('testimonials.items', { returnObjects: true });
      } catch (e) {
        console.warn('Error getting testimonials directly:', e);
        // Fallback to hardcoded testimonials if translation fails
        items = [
          {
            name: "Aida BEN SALAH",
            role: "CEO, Global Corporate Business",
            quote: "Pledge & Grow really transformed our online presence. Their technical expertise is impressive!",
            rating: 5
          },
          {
            name: "Ali TOMBARI",
            role: "CEO, ERB-BTP",
            quote: "They perfectly understood our needs and created a site that truly represents our brand. Very satisfied!",
            rating: 5
          },
          {
            name: "Boubaker SRIRI",
            role: "Founder, Connect & Drive",
            quote: "Thanks to them, we've reached new markets and increased our revenue. Excellent work!",
            rating: 5
          }
        ];
      }
      
      // Safety checks
      if (!items) {
        console.warn('No testimonials found in translation files');
        return [];
      }
      
      // Handle case where items might be an object instead of array
      if (!Array.isArray(items)) {
        console.warn('Testimonials is not an array, attempting to convert:', items);
        // Try to convert object to array if possible
        if (typeof items === 'object') {
          const convertedItems = Object.values(items);
          if (Array.isArray(convertedItems) && convertedItems.length > 0) {
            items = convertedItems;
          } else {
            return [];
          }
        } else {
          return [];
        }
      }
      
      // Validate each testimonial item
      return items.filter(item => {
        const isValid = 
          item && 
          typeof item === 'object' && 
          typeof item.name === 'string' && 
          typeof item.role === 'string' && 
          typeof item.quote === 'string' && 
          (typeof item.rating === 'number' || item.rating === undefined);
        
        if (!isValid) {
          console.warn('Invalid testimonial item:', item);
        }
        return isValid;
      }) as Testimonial[];
    } catch (error) {
      console.error('Error loading testimonials:', error);
      return [];
    }
  }, [t]);
  
  const nextSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextDesktopSlide = () => {
    if (testimonials.length === 0) return;
    setDesktopStartIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerPage;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevDesktopSlide = () => {
    if (testimonials.length === 0) return;
    setDesktopStartIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerPage;
      return nextIndex < 0 ? Math.max(0, testimonials.length - cardsPerPage) : nextIndex;
    });
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-muted/30'}`} 
        fill={i < rating ? 'currentColor' : 'none'} 
      />
    ));
  };

  // If no testimonials are available, show a minimal version
  if (!testimonials.length) {
    return (
      <section className="bg-background text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              {t("testimonials.description")}
            </p>
          </div>
          <div className="text-center py-8">
            <p className="text-muted-foreground">{t("testimonials.noTestimonialsYet") || "No testimonials available yet."}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t("testimonials.description")}
          </p>
        </div>
        
        {/* Desktop View - 3 cards per row with navigation */}
        <div className="hidden md:block relative">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials
              .slice(desktopStartIndex, desktopStartIndex + cardsPerPage)
              .map((testimonial, index) => (
                <div 
                  key={desktopStartIndex + index} 
                  className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-base italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          
          {/* Desktop Navigation Arrows */}
          <button 
            onClick={prevDesktopSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors shadow-md"
            aria-label={t("accessibility.previousReviews")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextDesktopSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors shadow-md"
            aria-label={t("accessibility.nextReviews")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Carousel - 1 card at a time */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {testimonials.length > 0 && (
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-card border border-border rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-3">
                    {renderStars(testimonials[currentIndex]?.rating || 5)}
                  </div>
                  <blockquote className="text-base italic mb-4">
                    &quot;{testimonials[currentIndex]?.quote || t('testimonials.defaultQuote')}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {(testimonials[currentIndex]?.name?.charAt(0) || 'C').toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">{testimonials[currentIndex]?.name || t('testimonials.defaultName')}</h3>
                      <p className="text-muted-foreground text-xs">{testimonials[currentIndex]?.role || t('testimonials.defaultRole')}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label={t("accessibility.previousReview")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                  aria-label={t("accessibility.goToReview", { number: String(index + 1) })}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label={t("accessibility.nextReview")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Leave a Review Button */}
        <div className="mt-10 text-center">
          <Button asChild className="group">
            <a 
              href="https://g.co/kgs/Nkzc3iu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t("testimonials.leaveReview")}
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Wrap the component with suspense
export default function Testimonials() {
  return (
    <Suspense fallback={
      <section className="bg-background text-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Hear from businesses that have transformed their digital presence with our solutions.
            </p>
          </div>
          <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialSkeleton />
            <TestimonialSkeleton />
            <TestimonialSkeleton />
          </div>
          <div className="md:hidden max-w-sm mx-auto">
            <TestimonialSkeleton />
          </div>
        </div>
      </section>
    }>
      <TestimonialsContent />
    </Suspense>
  );
}
