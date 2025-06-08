"use client";

import { useState, useEffect } from "react";
import { Award, Users, Heart, Shield } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function Values() {
  const { t } = useTranslations('about');
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
  
  const getIconComponent = (key: string) => {
    switch(key) {
      case 'excellence': return <Award className="h-10 w-10 text-primary" />;
      case 'culture': return <Users className="h-10 w-10 text-primary" />;
      case 'loyalty': return <Heart className="h-10 w-10 text-primary" />;
      case 'privacy': return <Shield className="h-10 w-10 text-primary" />;
      default: return <Award className="h-10 w-10 text-primary" />;
    }
  };
  
  const valueItems = [
    {
      key: 'excellence',
      icon: getIconComponent('excellence'),
      title: t('values.items.excellence.title') || "Excellence",
      description: t('values.items.excellence.description') || "We strive for the highest standards in everything we do, constantly pushing boundaries to deliver exceptional results for our clients."
    },
    {
      key: 'culture',
      icon: getIconComponent('culture'),
      title: t('values.items.culture.title') || "Culture",
      description: t('values.items.culture.description') || "We foster a diverse and inclusive environment that celebrates creativity, collaboration, and continuous growth for our team and partners."
    },
    {
      key: 'loyalty',
      icon: getIconComponent('loyalty'),
      title: t('values.items.loyalty.title') || "Loyalty",
      description: t('values.items.loyalty.description') || "We build lasting relationships based on trust, commitment, and mutual respect with our clients, team members, and stakeholders."
    },
    {
      key: 'privacy',
      icon: getIconComponent('privacy'),
      title: t('values.items.privacy.title') || "Privacy",
      description: t('values.items.privacy.description') || "We are dedicated to protecting data confidentiality and respecting individual privacy rights in all our operations and solutions."
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('values.title') || "Our Core Values"}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('values.description') || "These principles guide our decisions, shape our culture, and define how we work with clients."}
          </p>
        </div>
        
        {/* Desktop Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {valueItems.map((item, index: number) => (
            <div key={item.key || index} className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        {isMobile && (
          <div className="relative mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide">
              {valueItems.map((item, index: number) => (
                <div 
                  key={item.key || index}
                  className="snap-center flex-shrink-0 w-full"
                >
                  <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg shadow-md border border-border">
                    <div className="flex items-start mb-4">
                      <div className="mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
