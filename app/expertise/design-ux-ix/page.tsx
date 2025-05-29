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
  title: "UX/UI Design | Pledge & Grow",
  description: "Create intuitive, engaging user experiences with our UX/UI design expertise. We help you design interfaces that delight users and drive conversions.",
};

export default function UXUIDesignExpertisePage() {
  // Using the ux-ui-design.json data for the design-ux-ix page
  const expertise = getExpertiseBySlug('ux-ui-design');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Creating intuitive and engaging user experiences"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Modern solutions for effective interface design"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why thoughtful design matters"
      />
      

    </ExpertiseLayout>
  );
}


