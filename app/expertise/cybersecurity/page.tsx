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
  title: "Cybersecurity Solutions | Pledge & Grow",
  description: "Protect your digital assets with our comprehensive cybersecurity expertise. We help you implement robust security measures to safeguard your business against threats.",
};

export default function CybersecurityExpertisePage() {
  const expertise = getExpertiseBySlug('cybersecurity');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Security Features"
        subtitle="Comprehensive protection for your digital assets"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Security Technologies & Tools"
          subtitle="Advanced solutions for robust protection"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Security Implementation Process"
          subtitle="How we secure your business"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Professional Cybersecurity"
        subtitle="Why investing in security matters"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about cybersecurity"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Security Success Stories"
          subtitle="Real security solutions for real businesses"
        />
      )}
    </ExpertiseLayout>
  );
}
