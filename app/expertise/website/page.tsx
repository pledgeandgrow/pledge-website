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

export default function WebsiteExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('website');

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
    slug: t('slug') || "website",
    title: t('title') || "Website Development",
    subtitle: t('subtitle') || "Professional website development services",
    description: t('description') || "We create beautiful, responsive websites that help your business grow online.",
    heroImage: t('heroImage') || "/images/expertise/website-hero.jpg",
    heroButton: t('heroButton') || "Start Your Website Project",
    cta: {
      title: t('cta.title') || "Ready to build your website?",
      description: t('cta.description') || "Let's discuss how we can create a beautiful, functional website for your business.",
      buttonText: t('cta.buttonText') || "Start Your Website Project",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Everything you need for a successful website"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Modern tools for modern websites"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why invest in a custom website"
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
