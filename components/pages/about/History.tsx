"use client";

import { useState, useEffect } from "react";

export default function History() {
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
  const milestones = [
    {
      year: "2022",
      title: "The Vision Begins",
      description: "Started as a vision by Mehdi BEREL, as a group of freelancers and entrepreneurs offering services in different fields through our brand and our names. We were planning on building a consulting agency that offered tailored solutions in various fields."
    },
    {
      year: "2023",
      title: "Growing Team & Diverse Clients",
      description: "The team expanded and began working with clients from different fields. We saw huge demands particularly in marketing and IT sectors, which helped shape our future direction."
    },
    {
      year: "2024",
      title: "Official Establishment & Specialization",
      description: "We transitioned completely and specialized in different IT fields and sectors due to increased demands and a growing network. The company was officially established in June of this year, marking a significant milestone in our journey."
    },
    {
      year: "2025",
      title: "New Vision & Expansion",
      description: "Implemented a new roadmap, refined our vision, launched our new website, and set ambitious goals for the future. This marks the beginning of an exciting new chapter with much more to come."
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            From humble beginnings to where we are today, our story is one of vision, growth, and continuous innovation.
          </p>
        </div>
        
        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mt-12">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="w-[85vw] max-w-[300px] flex-shrink-0 bg-card rounded-lg p-6 shadow-sm border border-border"
                  >
                    <div className="text-primary font-bold text-lg mb-1 text-center">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-3 text-center">{milestone.title}</h3>
                    <p className="text-muted-foreground text-center">{milestone.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {milestones.map((_, index) => (
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
        
        {/* Desktop Timeline View */}
        {!isMobile && (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
