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
  title: "Application Maintenance | Pledge & Grow",
  description: "Keep your digital products secure, stable, and up-to-date with our comprehensive maintenance services. We ensure your applications remain performant and aligned with evolving business needs.",
};

export default function MaintenanceExpertisePage() {
  const expertise = getExpertiseBySlug('maintenance');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Complete maintenance solutions for your applications"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Technologies & Tools"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why ongoing maintenance is crucial for your business"
      />
      
    </ExpertiseLayout>
  );
}
