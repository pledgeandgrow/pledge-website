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
  title: "E-commerce Development | Pledge & Grow",
  description: "Build powerful online stores and marketplaces with our e-commerce expertise. From small shops to large marketplaces, we create scalable solutions that drive sales.",
};

export default function ECommerceExpertisePage() {
  const expertise = getExpertiseBySlug('e-commerce');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Features"
        subtitle="Everything you need for a successful online store"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="E-commerce Platforms & Technologies"
          subtitle="Powerful tools for online retail success"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our E-commerce Development Process"
          subtitle="How we build your online store"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Professional E-commerce"
        subtitle="Why invest in a custom online store"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about e-commerce development"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="E-commerce Success Stories"
          subtitle="Real online stores for real businesses"
        />
      )}
    </ExpertiseLayout>
  );
}
