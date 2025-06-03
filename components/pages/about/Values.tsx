"use client";

import { useState, useEffect } from "react";
import { Award, Users, Heart, Shield } from "lucide-react";

export default function Values() {
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
  const values = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, constantly pushing boundaries to deliver exceptional results for our clients."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Culture",
      description: "We foster a diverse and inclusive environment that celebrates creativity, collaboration, and continuous growth for our team and partners."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Loyalty",
      description: "We build lasting relationships based on trust, commitment, and mutual respect with our clients, team members, and stakeholders."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Privacy",
      description: "We are dedicated to protecting data confidentiality and respecting individual privacy rights in all our operations and solutions."
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            These principles guide our decisions, shape our culture, and define how we work with clients.
          </p>
        </div>
        
        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mt-12">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="w-[85vw] max-w-[300px] flex-shrink-0 p-6 bg-card rounded-lg shadow-sm border border-border"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {values.map((_, index) => (
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
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex gap-6 p-6 bg-card rounded-lg shadow-sm border border-border animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
