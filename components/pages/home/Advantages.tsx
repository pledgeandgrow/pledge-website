"use client";

import { useState, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Advantages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) { // lg breakpoint
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    
    // Set initial visible items
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const advantages = [
    {
      title: "Innovative Solutions",
      description: "We leverage the latest technologies to create cutting-edge solutions that keep you ahead of the competition.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Expert Team",
      description: "Our team of experienced professionals brings diverse skills and perspectives to every project.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Tailored Approach",
      description: "We understand that every business is unique, so we customize our solutions to meet your specific needs.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Scalable Technology",
      description: "Our solutions are built to grow with your business, ensuring long-term success and adaptability.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Responsive Support",
      description: "We provide ongoing support and maintenance to ensure your digital assets continue to perform optimally.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business objectives and ROI.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Pledge & Grow?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            We combine innovation, expertise, and dedication to deliver exceptional results for our clients.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background shadow-md"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background shadow-md"
              onClick={() => setCurrentIndex(Math.max(0, Math.min(advantages.length - visibleItems, currentIndex + 1)))}
              disabled={currentIndex >= Math.max(0, advantages.length - visibleItems)}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Advantages Grid - Carousel with 1 card per line on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
            {advantages.slice(currentIndex, currentIndex + visibleItems).map((advantage, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {advantage.icon}
                  <h3 className="ml-2 text-xl font-bold">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
