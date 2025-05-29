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
  title: "Software Development | Pledge & Grow",
  description: "Custom software solutions tailored to your business needs. Our software development expertise helps you automate processes and improve efficiency.",
};

export default function SoftwareExpertisePage() {
  const expertise = getExpertiseBySlug('software');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Features"
        subtitle="Everything you need for successful software solutions"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies We Use"
          subtitle="Modern tools for robust software development"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Custom Software"
        subtitle="Why invest in tailored software solutions"
      />
      

    </ExpertiseLayout>
  );
}

