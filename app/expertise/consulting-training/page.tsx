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

export default function ConsultingTrainingExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('consulting-training');

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
    slug: t('slug') || "consulting-training",
    title: t('title') || "Consulting & Training",
    subtitle: t('subtitle') || "Expert guidance and knowledge transfer for digital transformation",
    description: t('description') || "We provide strategic consulting and specialized training to help organizations build internal capabilities and navigate digital challenges effectively.",
    heroImage: t('heroImage') || "/images/expertise/consulting-training-hero.jpg",
    heroButton: t('heroButton') || "Get Expert Guidance",
    cta: {
      title: t('cta.title') || "Ready to enhance your team's capabilities?",
      description: t('cta.description') || "Let's discuss how our consulting and training services can help your organization navigate digital challenges and build internal expertise.",
      buttonText: t('cta.buttonText') || "Get Expert Guidance",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Expert guidance and specialized training"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Modern tools we teach and implement"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why investing in your team's capabilities matters"
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
      <ExpertiseTechnologies 
        technologies={technologies}
        title={sectionTitles.technologies.title}
        subtitle={sectionTitles.technologies.subtitle}
      />
      
      {/* Benefits Section */}
      <ExpertiseBenefits 
        benefits={benefits}
        title={sectionTitles.benefits.title}
        subtitle={sectionTitles.benefits.subtitle}
      />
    </ExpertiseLayout>
  );
}
