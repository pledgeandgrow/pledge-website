import React from "react";
import { Metadata } from "next";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseProcess,
  ExpertiseBenefits,
  ExpertiseFAQ,
  ExpertiseCaseStudies
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
        title="Key Features"
        subtitle="Transformative AI & automation capabilities"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="AI Technologies & Frameworks"
          subtitle="Cutting-edge tools for intelligent solutions"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our AI Implementation Process"
          subtitle="How we integrate AI into your business"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of AI & Automation"
        subtitle="How intelligent technology transforms business"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about AI implementation"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="AI Success Stories"
          subtitle="Real AI solutions for real businesses"
        />
      )}
    </ExpertiseLayout>
  );
}
