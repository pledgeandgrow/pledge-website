"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial display count
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const testimonials = [
    {
      name: "Ali Tombari",
      role: "ERB BTP",
      quote: "Site web parfait qui représente exactement notre expertise dans le bâtiment.",
      rating: 5
    },
    {
      name: "Nizar Ounich",
      role: "Chronos Corp. / Dualink",
      quote: "Expertise technique et design impeccables, résultats au-delà de nos attentes.",
      rating: 5
    },
    {
      name: "Pierre Mouton",
      role: "JABB EVENT",
      quote: "Notre e-commerce performe au-delà de nos espérances, merci Pledge!",
      rating: 5
    },
    {
      name: "Alexandre Besombes",
      role: "GUDULE",
      quote: "Site web impeccable qui reflète parfaitement notre identité de marque.",
      rating: 5
    },
    {
      name: "Jonathan Alev",
      role: "JABB",
      quote: "Développement web de qualité supérieure, résultats au-delà de nos attentes.",
      rating: 5
    }
  ];

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
            Client Reviews
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            See what our clients are saying about our services.
          </p>
        </div>
        
        {/* Desktop View - 3 cards per row */}
        <div className="hidden md:grid gap-8 grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
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
      </div>
    </section>
  );
}
