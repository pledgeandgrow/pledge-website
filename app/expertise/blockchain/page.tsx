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
  title: "Blockchain Development | Pledge & Grow",
  description: "Implement secure, transparent blockchain solutions for your business. Our blockchain expertise helps you leverage distributed ledger technology for innovation and trust.",
};

export default function BlockchainExpertisePage() {
  const expertise = getExpertiseBySlug('blockchain');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Features"
        subtitle="Transformative blockchain capabilities"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Blockchain Technologies & Frameworks"
          subtitle="Cutting-edge tools for distributed solutions"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Blockchain Implementation Process"
          subtitle="How we integrate blockchain into your business"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Blockchain Technology"
        subtitle="How distributed ledgers transform business"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about blockchain implementation"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Blockchain Success Stories"
          subtitle="Real blockchain solutions for real businesses"
        />
      )}
    </ExpertiseLayout>
  );
}
