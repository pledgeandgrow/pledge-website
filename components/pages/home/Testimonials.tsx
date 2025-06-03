"use client";

import { useState, useMemo } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "@/data/portfolio-data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // For desktop view, we'll show 3 cards at a time
  const [desktopStartIndex, setDesktopStartIndex] = useState(0);
  const cardsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextDesktopSlide = () => {
    setDesktopStartIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerPage;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevDesktopSlide = () => {
    setDesktopStartIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerPage;
      return nextIndex < 0 ? Math.max(0, testimonials.length - cardsPerPage) : nextIndex;
    });
  };

  // Extract testimonials from portfolio projects case studies
  const testimonials = useMemo(() => {
    return portfolioProjects
      .filter(project => project.outcome?.testimonial) // Only projects with testimonials
      .map(project => ({
        name: project.outcome.testimonial.author,
        role: `${project.outcome.testimonial.position}, ${project.name}`,
        quote: project.outcome.testimonial.quote,
        rating: 5, // Assuming all case study testimonials are 5 stars
        projectId: project.id // Store project ID for potential link to case study
      }));
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-muted/30'}`} 
        fill={i < rating ? 'currentColor' : 'none'} 
      />
    ));
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Testimonials from our case studies and completed projects.
          </p>
        </div>
        
        {/* Desktop View - 3 cards per row with navigation */}
        <div className="hidden md:block relative">
          <div className="grid gap-8 grid-cols-3">
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
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextDesktopSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors shadow-md"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Carousel - 1 card at a time */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="overflow-hidden relative min-h-[280px]">
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
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-base italic mb-4">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">{testimonials[currentIndex].name}</h3>
                    <p className="text-muted-foreground text-xs">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous review"
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
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Leave a Review Button */}
        <div className="mt-12 text-center">
          <Button asChild className="group">
            <a 
              href="https://g.co/kgs/Nkzc3iu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Leave a review
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
