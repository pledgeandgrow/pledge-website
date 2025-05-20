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
  title: "Technical Documentation | Pledge & Grow",
  description: "Create comprehensive, clear technical documentation for your products and services. Our documentation expertise helps you communicate effectively with users and developers.",
};

export default function DocumentationExpertisePage() {
  const expertise = getExpertiseBySlug('documentation');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Documentation Features"
        subtitle="Clear, comprehensive, and user-friendly documentation"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Documentation Tools & Platforms"
          subtitle="Modern solutions for effective technical writing"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Documentation Process"
          subtitle="How we create clear and effective documentation"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Professional Documentation"
        subtitle="Why quality documentation matters"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about technical documentation"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Documentation Success Stories"
          subtitle="Real documentation solutions for real products"
        />
      )}
    </ExpertiseLayout>
  );
}
