"use client";

import { useState, useEffect } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Team() {
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
    setCurrentIndex((prev) => Math.min(teamMembers.length - 1, prev + 1));
  };
  const teamMembers = [
    {
      name: "Mehdi BEREL",
      role: "Founder",
      companyRole: "Chief Executive Officer",
      bio: "With extensive experience in business leadership, Mehdi drives the strategic vision and growth of our company.",

      social: {
        linkedin: "https://linkedin.com/in/mehdi-berel"
      }
    },
    {
      name: "Shihab BEREL",
      role: "Founder",
      companyRole: "Chief Technology Officer",
      bio: "Shihab brings innovative thinking and technical expertise to our leadership team, focusing on product development.",

      social: {
        linkedin: "https://linkedin.com/in/shihab-berel"
      }
    },
    {
      name: "Ilyas BEREL",
      role: "Founder",
      companyRole: "Chief Financial Officer",
      bio: "Ilyas oversees operations and client relationships, ensuring we deliver exceptional value and service.",

      social: {
        linkedin: "https://linkedin.com/in/ilyas-berel"
      }
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership Team
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Meet our leadership team guiding the vision and success of our company.
          </p>
        </div>
        {/* Desktop view - grid layout */}
        <div className={`${!isMobile ? 'grid gap-8 grid-cols-1 md:grid-cols-3' : 'hidden'}`}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in p-6"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >

              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>

                <p className="text-muted-foreground text-sm mb-2">{member.companyRole}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - carousel */}
        {isMobile && (
          <div className="relative">
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
                <span className="sr-only">Previous</span>
              </Button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handleNext}
                disabled={currentIndex >= teamMembers.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            {/* Single card display */}
            <div className="px-4 transition-all duration-300">
              <div 
                key={teamMembers[currentIndex].name} 
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in p-6"
              >
                <div>
                  <h3 className="text-xl font-bold">{teamMembers[currentIndex].name}</h3>
                  <p className="text-primary font-medium mb-1">{teamMembers[currentIndex].role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{teamMembers[currentIndex].companyRole}</p>
                  <p className="text-muted-foreground mb-4">{teamMembers[currentIndex].bio}</p>
                  <div className="flex space-x-3">
                    <Link href={teamMembers[currentIndex].social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {teamMembers.map((_, idx) => (
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
