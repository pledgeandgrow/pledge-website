"use client";

import { useState, useEffect } from "react";
import PartnerCard from "./PartnerCard";
import PartnerCategories from "./PartnerCategories";
import { MobileCarousel, MobileCarouselItem } from "@/components/ui/mobile-carousel";

// Partner data interface
interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  featured?: boolean;
  partnerType: 'standard' | 'culture' | 'technology' | 'exclusive';
}

// Sample partner data
const partnersData: Partner[] = [
  // Standard Partners - Loyal clients with contract conditions
  {
    id: "1",
    name: "Acme Corporation",
    logo: "/images/partners/acme.svg",
    category: "Standard",
    description: "Long-term client with preferred contract terms. We've been supporting their digital transformation journey for over 5 years.",
    website: "https://example.com/acme",
    featured: true,
    partnerType: "standard"
  },
  {
    id: "2",
    name: "Global Enterprises",
    logo: "/images/partners/global.svg",
    category: "Standard",
    description: "Strategic client relationship with custom service agreements and dedicated support channels.",
    website: "https://example.com/global",
    partnerType: "standard"
  },
  
  // Culture Partners - Foundations, schools, associations, communities
  {
    id: "3",
    name: "Pepite France",
    logo: "/images/partners/pepite.svg",
    category: "Culture",
    description: "National network supporting student entrepreneurship across France. We collaborate on innovation programs and mentorship for young entrepreneurs.",
    website: "https://www.pepite-france.fr",
    featured: true,
    partnerType: "culture"
  },
  
  // Technology Partners - Platforms and tools we use and recommend
  {
    id: "5",
    name: "AWS",
    logo: "/images/partners/aws.svg",
    category: "Technology",
    description: "Cloud infrastructure provider powering our scalable, reliable, and secure hosting solutions for enterprise clients.",
    website: "https://aws.amazon.com",
    featured: true,
    partnerType: "technology"
  },
  {
    id: "6",
    name: "Vercel",
    logo: "/images/partners/vercel.svg",
    category: "Technology",
    description: "Frontend cloud platform enabling us to deliver fast, reliable web experiences with seamless deployment workflows.",
    website: "https://vercel.com",
    partnerType: "technology"
  },
  {
    id: "7",
    name: "OVH",
    logo: "/images/partners/ovh.svg",
    category: "Technology",
    description: "European cloud provider we recommend for clients with specific data sovereignty requirements and regional hosting needs.",
    website: "https://ovh.com",
    partnerType: "technology"
  },
  {
    id: "8",
    name: "Atlassian (JIRA)",
    logo: "/images/partners/atlassian.svg",
    category: "Technology",
    description: "Project management and collaboration tools that power our development workflows and client communication processes.",
    website: "https://atlassian.com",
    partnerType: "technology"
  },
  
  // Exclusive Partners - Premium network members with promotional codes/discounts
  {
    id: "9",
    name: "ERB BTP",
    logo: "/images/partners/erb-btp.svg",
    category: "Exclusive",
    description: "Premium construction partner offering special rates on building services for clients referred through our network.",
    website: "https://erb-btp.com",
    featured: true,
    partnerType: "exclusive"
  },
  {
    id: "10",
    name: "Cabinet ECD",
    logo: "/images/partners/ecd.svg",
    category: "Exclusive",
    description: "Exclusive consulting partner providing discounted business advisory services for our enterprise clients.",
    website: "https://example.com/ecd",
    partnerType: "exclusive"
  },
  {
    id: "11",
    name: "Taskmate",
    logo: "/images/partners/taskmate.svg",
    category: "Exclusive",
    description: "Premium task management solution provider offering special subscription plans for our clients.",
    website: "https://example.com/taskmate",
    partnerType: "exclusive"
  },
  {
    id: "12",
    name: "CordUnite",
    logo: "/images/partners/cordunite.svg",
    category: "Exclusive",
    description: "Exclusive communications platform with preferential rates for businesses in our partner network.",
    website: "https://example.com/cordunite",
    partnerType: "exclusive"
  },
  {
    id: "13",
    name: "N&I Personal Shopper",
    logo: "/images/partners/ni-shopper.svg",
    category: "Exclusive",
    description: "Luxury personal shopping service offering VIP packages for our enterprise clients and their executives.",
    website: "https://example.com/ni-shopper",
    partnerType: "exclusive"
  },
  {
    id: "14",
    name: "Dualink",
    logo: "/images/partners/dualink.svg",
    category: "Exclusive",
    description: "Dual-market expansion specialists providing discounted consulting services for our international clients.",
    website: "https://example.com/dualink",
    partnerType: "exclusive"
  },
  {
    id: "15",
    name: "Chronos Corp.",
    logo: "/images/partners/chronos.svg",
    category: "Exclusive",
    description: "Time management and productivity solution provider with exclusive offers for our business network members.",
    website: "https://example.com/chronos",
    partnerType: "exclusive"
  }
];

export default function PartnersList() {
  // State to detect if on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Define our partner type categories with descriptions
  const partnerTypeDescriptions = {
    standard: "Loyal clients with preferred contract terms and conditions",
    culture: "Foundations, schools, associations, and community organizations",
    technology: "Platforms and tools we use and recommend for our development projects",
    exclusive: "Premium partners in our exclusive network offering special rates and promotions"
  };
  
  // Get unique categories from partners data
  const categories = Array.from(new Set(partnersData.map(partner => partner.category)));
  
  // State for active category filter - default to first non-Standard category
  const filteredCategories = categories.filter(category => category !== "Standard");
  const [activeCategory, setActiveCategory] = useState(filteredCategories[0] || "Culture");
  
  // Filter partners based on active category and exclude Standard category
  const filteredPartners = partnersData.filter(partner => partner.category === activeCategory);

  return (
    <section id="partners-list" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Partnership Network
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          We collaborate with a diverse range of partners across different categories to deliver exceptional value to our clients.
        </p>
        
        <PartnerCategories 
          categories={categories.filter(category => category !== "Standard")} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        {/* Category description */}
        <div className="mt-4 mb-8 p-6 bg-secondary/5 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">{activeCategory} Partners</h3>
          <p className="text-muted-foreground">
            {activeCategory === "Culture" && partnerTypeDescriptions.culture}
            {activeCategory === "Technology" && partnerTypeDescriptions.technology}
            {activeCategory === "Exclusive" && partnerTypeDescriptions.exclusive}
          </p>
        </div>
        
        {isMobile ? (
          // Mobile carousel view
          <div className="mt-4">
            <MobileCarousel>
              {filteredPartners.map((partner) => (
                <MobileCarouselItem key={partner.id}>
                  <div className="px-1 py-2">
                    <PartnerCard 
                      name={partner.name}
                      category={partner.category}
                      description={partner.description}
                      website={partner.website}
                      featured={partner.featured}
                    />
                  </div>
                </MobileCarouselItem>
              ))}
            </MobileCarousel>
          </div>
        ) : (
          // Desktop grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPartners.map((partner) => (
              <PartnerCard 
                key={partner.id}
                name={partner.name}
                category={partner.category}
                description={partner.description}
                website={partner.website}
                featured={partner.featured}
              />
            ))}
          </div>
        )}
        
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No partners found in this category.</p>
          </div>
        )}
        
        {/* Category description moved above cards */}
      </div>
    </section>
  );
}
