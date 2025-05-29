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
  title: "Search Engine Optimization (SEO) | Pledge & Grow",
  description: "Improve your online visibility and drive organic traffic with our comprehensive SEO services. We help businesses rank higher in search results and reach their target audience.",
};

export default function SEOExpertisePage() {
  const expertise = getExpertiseBySlug('seo');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="What We Offer"
        subtitle="Comprehensive optimization strategies for better visibility"
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
          subtitle="How we improve your search rankings"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="Why search optimization matters for your business"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about SEO services"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Success Stories"
          subtitle="Real results from our SEO strategies"
        />
      )}
    </ExpertiseLayout>
  );
}

