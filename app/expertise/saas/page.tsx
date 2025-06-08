"use client";

import React from "react";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseBenefits
} from "@/components/pages/expertise";
import { useTranslations } from "@/hooks/useTranslations";
import { TranslationLoader } from "@/components/ui/translation-loader";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface TechnologyItem {
  name: string;
  logo?: string;
  icon?: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export default function SaasExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('saas');

  if (isLoading) {
    return <TranslationLoader isLoading={isLoading}>
      <div className="min-h-screen" />
    </TranslationLoader>;
  }

  // Extract data from translations
  const features: FeatureItem[] = translations.features?.map((feature: { title: string; description: string; icon: string }) => ({
    title: feature.title,
    description: feature.description,
    icon: feature.icon
  })) || [];

  const technologies: TechnologyItem[] = translations.technologies?.map((tech: { name: string; logo?: string; icon?: string }) => ({
    name: tech.name,
    logo: tech.logo,
    icon: tech.icon
  })) || [];

  const benefits: BenefitItem[] = translations.benefits?.map((benefit: { title: string; description: string; icon: string }) => ({
    title: benefit.title,
    description: benefit.description,
    icon: benefit.icon
  })) || [];

  // Basic expertise data for the layout
  const expertise = {
    slug: t('slug') || "saas",
    title: t('title') || "SaaS Development",
    subtitle: t('subtitle') || "Build scalable, cloud-based software solutions",
    description: t('description') || "We design and develop Software-as-a-Service applications that solve real business problems.",
    heroImage: t('heroImage') || "/images/expertise/saas-hero.jpg",
    heroButton: t('heroButton') || "Start Your SaaS Project",
    cta: {
      title: t('cta.title') || "Ready to build your SaaS product?",
      description: t('cta.description') || "Let's discuss how we can create a scalable, user-friendly SaaS solution for your business.",
      buttonText: t('cta.buttonText') || "Start Your SaaS Project",
      buttonLink: t('cta.buttonLink') || "/digital-project?service=saas"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Comprehensive SaaS solutions for your business"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "The best technologies for your SaaS solution"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why choose a SaaS model for your business"
    }
  };

  return (
    <ExpertiseLayout expertise={expertise}>
      {/* Features Section */}
      <ExpertiseFeatures 
        features={features}
        title={sectionTitles.features.title}
        subtitle={sectionTitles.features.subtitle}
      />
      
      {/* Technologies Section */}
      {technologies.length > 0 && (
        <ExpertiseTechnologies 
          technologies={technologies}
          title={sectionTitles.technologies.title}
          subtitle={sectionTitles.technologies.subtitle}
        />
      )}
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={benefits}
        title={sectionTitles.benefits.title}
        subtitle={sectionTitles.benefits.subtitle}
      />
    </ExpertiseLayout>
  );
}
