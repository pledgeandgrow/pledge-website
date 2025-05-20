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
  title: "Mobile Application Development | Pledge & Grow",
  description: "Create powerful, user-friendly mobile applications for iOS and Android. Our mobile development expertise helps you reach your audience on any device.",
};

export default function MobileAppExpertisePage() {
  const expertise = getExpertiseBySlug('mobile-app');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Features"
        subtitle="Everything you need for a successful mobile application"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies We Use"
          subtitle="Modern frameworks for cross-platform mobile development"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Development Process"
          subtitle="How we bring your mobile app vision to life"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Mobile Applications"
        subtitle="Why your business needs a mobile presence"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about mobile app development"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Success Stories"
          subtitle="Real mobile solutions for real clients"
        />
      )}
    </ExpertiseLayout>
  );
}
