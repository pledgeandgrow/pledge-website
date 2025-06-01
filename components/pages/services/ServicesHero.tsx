"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Optimized version without heavy framer-motion dependency
export default function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate the animation effect with a simple state change
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-background dark:bg-background overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            Our Services & Solutions
          </h1>
          <p 
            className={`text-xl text-muted-foreground mb-10 transition-all duration-500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Comprehensive digital solutions tailored to your business needs, from web and mobile development to cloud hosting and VIP services.
          </p>
          
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/digital-project">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 bg-primary/5 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 bg-primary/5 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>
    </section>
  );
}
