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
  title: "UX/UI Design | Pledge & Grow",
  description: "Create intuitive, engaging user experiences with our UX/UI design expertise. We help you design interfaces that delight users and drive conversions.",
};

export default function UXUIDesignExpertisePage() {
  const expertise = getExpertiseBySlug('ux-ui-design');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Design Features"
        subtitle="Creating intuitive and engaging user experiences"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Design Tools & Technologies"
          subtitle="Modern solutions for effective interface design"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Design Process"
          subtitle="How we create user-centered interfaces"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Professional UX/UI Design"
        subtitle="Why thoughtful design matters"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about UX/UI design"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Design Success Stories"
          subtitle="Real design solutions for real products"
        />
      )}
    </ExpertiseLayout>
  );
}
