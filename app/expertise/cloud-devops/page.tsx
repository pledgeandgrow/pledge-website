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
  title: "Cloud & DevOps Solutions | Pledge & Grow",
  description: "Optimize your infrastructure with our cloud and DevOps expertise. We help you implement scalable, efficient cloud solutions and streamline your development pipeline.",
};

export default function CloudDevOpsExpertisePage() {
  const expertise = getExpertiseBySlug('cloud-devops');
  
  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={expertise.features} 
        title="Key Cloud & DevOps Features"
        subtitle="Scalable infrastructure and efficient pipelines"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Cloud Platforms & DevOps Tools"
          subtitle="Modern solutions for infrastructure and automation"
        />
      )}
      
      {/* Process Section */}
      {expertise.process && (
        <ExpertiseProcess 
          process={expertise.process}
          title="Our Implementation Process"
          subtitle="How we transform your infrastructure and workflows"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits of Cloud & DevOps"
        subtitle="How modern infrastructure transforms business"
      />
      
      {/* FAQs Section */}
      {expertise.faqs && (
        <ExpertiseFAQ 
          faqs={expertise.faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about cloud and DevOps"
        />
      )}
      
      {/* Case Studies Section */}
      {expertise.casestudies && (
        <ExpertiseCaseStudies 
          cases={expertise.casestudies}
          title="Success Stories"
          subtitle="Real cloud solutions for real businesses"
        />
      )}
    </ExpertiseLayout>
  );
}
