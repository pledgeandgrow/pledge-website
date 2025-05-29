import React from "react";
import { Metadata } from "next";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseBenefits,
} from "@/components/pages/expertise";
import { getExpertiseBySlug } from "@/data/expertise-data";

export const metadata: Metadata = {
  title: "AI & Automation | Pledge & Grow",
  description: "Leverage artificial intelligence and automation to transform your business processes. Our AI expertise helps you implement cutting-edge solutions for efficiency and growth.",
};

export default function AIAutomationExpertisePage() {
  const expertise = getExpertiseBySlug('ai-automation');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Transformative AI & automation capabilities"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Cutting-edge tools for intelligent solutions"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="How intelligent technology transforms business"
      />
    </ExpertiseLayout>
  );
}
