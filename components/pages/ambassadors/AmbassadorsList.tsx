"use client";

import { useState } from "react";
import AmbassadorCard from "./AmbassadorCard";
import AmbassadorCategories from "./AmbassadorCategories";

// Ambassador data interface
interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'instagram';
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
    name: "Sarah Johnson",
    image: "/images/ambassadors/ambassador-1.jpg",
    role: "Tech Evangelist",
    location: "San Francisco, USA",
    region: "North America",
    bio: "Sarah is a passionate tech evangelist with over 10 years of experience in software development and AI. She represents Pledge & Grow at major tech conferences and community events.",
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' }
    ],
    featured: true
  },
  {
    id: "2",
    name: "Michael Chen",
    image: "/images/ambassadors/ambassador-2.jpg",
    role: "Innovation Advocate",
    location: "Singapore",
    region: "Asia",
    bio: "Michael specializes in digital transformation and innovation strategies. He helps businesses in Asia understand how Pledge & Grow solutions can accelerate their growth.",
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' }
    ],
    featured: true
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    image: "/images/ambassadors/ambassador-3.jpg",
    role: "Community Leader",
    location: "Madrid, Spain",
    region: "Europe",
    bio: "Sophia builds and nurtures developer communities across Europe. She organizes workshops and hackathons to showcase Pledge & Grow technologies.",
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' }
    ]
  },
  {
    id: "4",
    name: "David Okafor",
    image: "/images/ambassadors/ambassador-4.jpg",
    role: "Startup Mentor",
    location: "Lagos, Nigeria",
    region: "Africa",
    bio: "David helps African startups leverage technology to solve local challenges. He mentors entrepreneurs on using Pledge & Grow platforms for rapid development.",
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' }
    ]
  },
  {
    id: "5",
    name: "Emma Wilson",
    image: "/images/ambassadors/ambassador-5.jpg",
    role: "Education Advocate",
    location: "Sydney, Australia",
    region: "Oceania",
    bio: "Emma focuses on bringing technology education to underserved communities. She conducts training programs on Pledge & Grow tools for students and educators.",
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' }
    ]
  },
  {
    id: "6",
    name: "Carlos Mendez",
    image: "/images/ambassadors/ambassador-6.jpg",
    role: "Digital Transformation Expert",
    location: "São Paulo, Brazil",
    region: "South America",
    bio: "Carlos helps businesses across South America modernize their operations with digital solutions. He showcases how Pledge & Grow technologies can drive efficiency and innovation.",
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' }
    ]
  },
  {
    id: "7",
    name: "Aisha Al-Farsi",
    image: "/images/ambassadors/ambassador-7.jpg",
    role: "Women in Tech Advocate",
    location: "Dubai, UAE",
    region: "Middle East",
    bio: "Aisha promotes diversity in the tech industry and encourages women to pursue careers in technology. She represents Pledge & Grow at women in tech events across the Middle East.",
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'instagram', url: 'https://instagram.com' }
    ]
  },
  {
    id: "8",
    name: "Raj Patel",
    image: "/images/ambassadors/ambassador-8.jpg",
    role: "Enterprise Solutions Specialist",
    location: "Mumbai, India",
    region: "Asia",
    bio: "Raj helps large enterprises implement Pledge & Grow solutions to streamline their operations and enhance customer experiences. He specializes in digital transformation for traditional industries.",
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' }
    ]
  }
];

export default function AmbassadorsList() {
  // Get unique regions from ambassadors data
  const regions = Array.from(new Set(ambassadorsData.map(ambassador => ambassador.region)));
  
  // State for active region filter
  const [activeRegion, setActiveRegion] = useState("all");
  
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAmbassadors.map((ambassador) => (
            <AmbassadorCard 
              key={ambassador.id}
              id={ambassador.id}
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
        
        {filteredAmbassadors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No ambassadors found in this region.</p>
          </div>
        )}
      </div>
    </section>
  );
}
