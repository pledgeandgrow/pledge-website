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
  title: "SaaS Development | Pledge & Grow",
  description: "Build scalable, cloud-based software solutions. Our SaaS development expertise helps you create subscription-based applications that solve real business problems.",
};

export default function SaasExpertisePage() {
  const expertise = getExpertiseBySlug('saas');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Everything you need for a successful SaaS product"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Technologies & Tools"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Process"
          subtitle="How we bring your SaaS vision to life"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why choose the SaaS model for your business"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about SaaS development"
        />
      )}
    </ExpertiseLayout>
  );
}


