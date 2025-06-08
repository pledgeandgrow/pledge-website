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

export default function CybersecurityExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('cybersecurity');

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
    slug: t('slug') || "cybersecurity",
    title: t('title') || "Cybersecurity Solutions",
    subtitle: t('subtitle') || "Protect your digital assets and infrastructure",
    description: t('description') || "We help you implement robust security measures to safeguard your business against evolving cyber threats and vulnerabilities.",
    heroImage: t('heroImage') || "/images/expertise/cybersecurity-hero.jpg",
    heroButton: t('heroButton') || "Secure Your Business",
    cta: {
      title: t('cta.title') || "Ready to strengthen your security posture?",
      description: t('cta.description') || "Let's discuss how our cybersecurity solutions can help protect your business from evolving threats and vulnerabilities.",
      buttonText: t('cta.buttonText') || "Secure Your Business",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Comprehensive protection for your digital assets"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Advanced security tools and platforms"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why investing in security matters"
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
