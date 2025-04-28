"use client";

import { useState } from "react";
import PartnerCard from "./PartnerCard";
import PartnerCategories from "./PartnerCategories";

// Partner data interface
interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  featured?: boolean;
}

// Sample partner data
const partnersData: Partner[] = [
  {
    id: "1",
    name: "Microsoft",
    logo: "/images/partners/microsoft.svg",
    category: "Technology",
    description: "Strategic technology partner providing cloud infrastructure and AI solutions to power our digital transformation initiatives.",
    website: "https://microsoft.com",
    featured: true
  },
  {
    id: "2",
    name: "AWS",
    logo: "/images/partners/aws.svg",
    category: "Cloud",
    description: "Cloud infrastructure partner enabling scalable, reliable, and secure hosting for our enterprise solutions.",
    website: "https://aws.amazon.com",
    featured: true
  },
  {
    id: "3",
    name: "Google Cloud",
    logo: "/images/partners/google-cloud.svg",
    category: "Cloud",
    description: "Cloud partner providing advanced analytics and machine learning capabilities for our data-driven solutions.",
    website: "https://cloud.google.com",
  },
  {
    id: "4",
    name: "Stripe",
    logo: "/images/partners/stripe.svg",
    category: "Financial",
    description: "Payment processing partner enabling secure and seamless transactions for our e-commerce and marketplace solutions.",
    website: "https://stripe.com",
  },
  {
    id: "5",
    name: "Salesforce",
    logo: "/images/partners/salesforce.svg",
    category: "CRM",
    description: "CRM partner providing integrated customer relationship management solutions for our enterprise clients.",
    website: "https://salesforce.com",
  },
  {
    id: "6",
    name: "HubSpot",
    logo: "/images/partners/hubspot.svg",
    category: "Marketing",
    description: "Marketing automation partner helping our clients streamline their inbound marketing and sales processes.",
    website: "https://hubspot.com",
  },
  {
    id: "7",
    name: "Adobe",
    logo: "/images/partners/adobe.svg",
    category: "Design",
    description: "Creative tools partner providing design and content creation solutions for our digital experiences.",
    website: "https://adobe.com",
  },
  {
    id: "8",
    name: "Shopify",
    logo: "/images/partners/shopify.svg",
    category: "E-commerce",
    description: "E-commerce platform partner enabling online store creation and management for our retail clients.",
    website: "https://shopify.com",
  }
];

export default function PartnersList() {
  // Get unique categories from partners data
  const categories = Array.from(new Set(partnersData.map(partner => partner.category)));
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter partners based on active category
  const filteredPartners = activeCategory === "all" 
    ? partnersData 
    : partnersData.filter(partner => partner.category === activeCategory);

  return (
    <section id="partners-list" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Strategic Partners
        </h2>
        
        <PartnerCategories 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <PartnerCard 
              key={partner.id}
              id={partner.id}
              name={partner.name}
              logo={partner.logo}
              category={partner.category}
              description={partner.description}
              website={partner.website}
              featured={partner.featured}
            />
          ))}
        </div>
        
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No partners found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
