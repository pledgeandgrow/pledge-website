"use client";

import { useState, useEffect } from "react";
import AmbassadorCard from "./AmbassadorCard";
import AmbassadorCategories from "./AmbassadorCategories";
import AmbassadorCarousel from "./AmbassadorCarousel";

// Ambassador data interface
interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'instagram' | 'tiktok';
  url: string;
}

interface Ambassador {
  id: string;
  name: string;
  image: string;
  role: string;
  location: string;
  region: string;
  bio: string;
  socialLinks: SocialLink[];
  featured?: boolean;
}

// Sample ambassador data
const ambassadorsData: Ambassador[] = [
  {
    id: "1",
    name: "SHARKA",
    image: "/images/ambassadors/sharka.jpg",
    role: "Global",
    location: "France",
    region: "Community",
    bio: "SHARKA helps us promote our brand specifically for France and the French community. With a unique perspective and engaging presence, SHARKA helps communicate our values and mission to the French-speaking audience.",
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/sharka_ugc?igsh=NzFoNmVhNWozYmd1' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@sharka.ugc?_t=ZN-8wkCdQWpoMI&_r=1' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/maxime-neau-966761301/' }
    ],
    featured: true
  }
];

export default function AmbassadorsList() {
  // Get unique regions from ambassadors data
  const regions = Array.from(new Set(ambassadorsData.map(ambassador => ambassador.region)));
  
  // State for active region filter and screen size
  const [activeRegion, setActiveRegion] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Filter ambassadors based on active region
  const filteredAmbassadors = activeRegion === "all" 
    ? ambassadorsData 
    : ambassadorsData.filter(ambassador => ambassador.region === activeRegion);

  return (
    <section id="ambassadors-list" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Global Ambassadors
        </h2>
        
        <AmbassadorCategories 
          regions={regions} 
          activeRegion={activeRegion} 
          setActiveRegion={setActiveRegion} 
        />
        
        {isMobile ? (
          <AmbassadorCarousel ambassadors={filteredAmbassadors} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAmbassadors.map((ambassador) => (
              <AmbassadorCard 
                key={ambassador.id}
                name={ambassador.name}
                image={ambassador.image}
                role={ambassador.role}
                location={ambassador.location}
                bio={ambassador.bio}
                socialLinks={ambassador.socialLinks}
                featured={ambassador.featured}
              />
            ))}
          </div>
        )}
        
        {filteredAmbassadors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No ambassadors found in this region.</p>
          </div>
        )}
      </div>
    </section>
  );
}
