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
        title="What We Offer"
        subtitle="Scalable infrastructure and efficient pipelines"
      />
      
      {/* Technologies Section */}
      {expertise.technologies && (
        <ExpertiseTechnologies 
          technologies={expertise.technologies}
          title="Technologies & Tools"
          subtitle="Modern solutions for infrastructure and automation"
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={expertise.benefits}
        title="Benefits"
        subtitle="How modern infrastructure transforms business"
      />
      
    </ExpertiseLayout>
  );
}
