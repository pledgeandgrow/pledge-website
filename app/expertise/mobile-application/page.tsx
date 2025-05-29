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
  title: "Mobile Application Development | Pledge & Grow",
  description: "Create powerful, user-friendly mobile applications for iOS and Android. Our mobile development expertise helps you reach your audience on any device.",
};

export default function MobileAppExpertisePage() {
  const expertise = getExpertiseBySlug('mobile-app');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Everything you need for a successful mobile application"
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
        subtitle="Why your business needs a mobile presence"
      />
      

    </ExpertiseLayout>
  );
}


