"use client";

import { useState, useEffect } from "react";
import { Lightbulb, Link2, Laptop } from "lucide-react";

export default function Mission() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const missionItems = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Simplify",
      description: "Making technology accessible to everyone through simplified solutions."
    },
    {
      icon: <Link2 className="h-8 w-8 text-primary" />,
      title: "Connect",
      description: "Linking innovation with business needs through strategic technology solutions."
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Digitalize",
      description: "Transforming businesses through custom software solutions that drive growth and efficiency."
    }
  ];
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            We&apos;re on a mission to transform how businesses connect with their audiences through innovative digital solutions.
          </p>
        </div>
        
        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mt-12">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {missionItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-[85vw] max-w-[300px] flex-shrink-0 bg-card rounded-lg p-6 shadow-sm border border-border"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {missionItems.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {missionItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in" 
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
