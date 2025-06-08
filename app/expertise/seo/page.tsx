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

export default function SEOExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('seo');

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
    slug: t('slug') || "seo",
    title: t('title') || "Search Engine Optimization (SEO)",
    subtitle: t('subtitle') || "Improve your online visibility and drive organic traffic",
    description: t('description') || "We help businesses rank higher in search results, increase organic traffic, and reach their target audience through comprehensive SEO strategies.",
    heroImage: t('heroImage') || "/images/expertise/seo-hero.jpg",
    heroButton: t('heroButton') || "Boost Your Online Visibility",
    cta: {
      title: t('cta.title') || "Ready to improve your search rankings?",
      description: t('cta.description') || "Let's discuss how our SEO strategies can help your business gain better visibility and attract more qualified traffic.",
      buttonText: t('cta.buttonText') || "Boost Your Online Visibility",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Comprehensive optimization strategies for better visibility"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Advanced tools for search optimization"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why search optimization matters for your business"
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

