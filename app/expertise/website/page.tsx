import React from "react";
import { Metadata } from "next";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseBenefits
} from "@/components/pages/expertise";
import { getExpertiseBySlug } from "@/data/expertise-data";

export const metadata: Metadata = {
  title: "Website Development | Pledge & Grow",
  description: "Create a powerful online presence with our custom website solutions. We build responsive, high-performance websites that engage your audience and drive conversions.",
};

export default function WebsiteExpertisePage() {
  const expertise = getExpertiseBySlug('website');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Everything you need for a successful website"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Modern tools for modern websites"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why invest in a custom website"
      />
      

      

    </ExpertiseLayout>
  );
}
