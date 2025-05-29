import React from "react";
import { Metadata } from "next";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseProcess,
  ExpertiseBenefits,
  ExpertiseFAQ
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
        title="What We Offer"
        subtitle="Comprehensive protection for your digital assets"
      />
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Process"
          subtitle="How we secure your business"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
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
    </ExpertiseLayout>
  );
}

