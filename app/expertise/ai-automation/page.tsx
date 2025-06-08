"use client";

import React from "react";
import { 
  ExpertiseLayout, 
  ExpertiseFeatures, 
  ExpertiseTechnologies, 
  ExpertiseBenefits,
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

export default function AIAutomationExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('ai-automation');

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
    slug: t('slug') || "ai-automation",
    title: t('title') || "AI & Automation",
    subtitle: t('subtitle') || "Transform your business with intelligent automation and insights",
    description: t('description') || "Leverage artificial intelligence and automation to transform your business processes.",
    heroImage: t('heroImage') || "/images/expertise/ai-solutions-hero.jpg",
    heroButton: t('heroButton') || "Start Your AI Project",
    cta: {
      title: t('cta.title') || "Ready to harness the power of AI?",
      subtitle: t('cta.description') || "Let's explore how artificial intelligence can solve challenges and create opportunities for your business.",
      buttonText: t('cta.buttonText') || "Start Your AI Project",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Transformative AI & automation capabilities"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Cutting-edge tools for intelligent solutions"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "How intelligent technology transforms business"
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
