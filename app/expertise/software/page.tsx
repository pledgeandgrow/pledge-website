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
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Development Process"
          subtitle="How we bring your software vision to life"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Custom Software"
        subtitle="Why invest in tailored software solutions"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about software development"
        />
      )}
    </ExpertiseLayout>
  );
}

