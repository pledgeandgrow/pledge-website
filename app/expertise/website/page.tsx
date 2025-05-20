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
  title: "Website Development | Pledge & Grow",
  description: "Create a powerful online presence with our custom website solutions. We build responsive, high-performance websites that engage your audience and drive conversions.",
};

export default function WebsiteExpertisePage() {
  const expertise = getExpertiseBySlug('website');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Features"
        subtitle="Everything you need for a successful website"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies We Use"
          subtitle="Modern tools for modern websites"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Development Process"
          subtitle="How we bring your website to life"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Professional Website Development"
        subtitle="Why invest in a custom website"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about website development"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Success Stories"
          subtitle="Real websites for real clients"
        />
      )}
    </ExpertiseLayout>
  );
}
