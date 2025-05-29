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
        title="What We Offer"
        subtitle="Transformative blockchain capabilities"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Cutting-edge tools for distributed solutions"
        />
      )}
      

      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="How distributed ledgers transform business"
      />
      


    </ExpertiseLayout>
  );
}
