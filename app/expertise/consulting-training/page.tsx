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
  title: "Consulting & Training | Pledge & Grow",
  description: "Expert guidance and knowledge transfer for digital transformation. Our consulting and training services help organizations build internal capabilities and navigate digital challenges.",
};

export default function ConsultingTrainingExpertisePage() {
  const expertise = getExpertiseBySlug('consulting-training');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Expert guidance and specialized training"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Modern tools we teach and implement"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why investing in your team's capabilities matters"
      />
      
    </ExpertiseLayout>
  );
}
