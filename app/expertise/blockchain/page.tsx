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

export default function BlockchainExpertisePage() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('blockchain');

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
    slug: t('slug') || "blockchain",
    title: t('title') || "Blockchain Development",
    subtitle: t('subtitle') || "Implement secure, transparent blockchain solutions",
    description: t('description') || "We help you leverage distributed ledger technology for innovation, trust, and new business models through custom blockchain solutions.",
    heroImage: t('heroImage') || "/images/expertise/blockchain-hero.jpg",
    heroButton: t('heroButton') || "Explore Blockchain Solutions",
    cta: {
      title: t('cta.title') || "Ready to leverage blockchain technology?",
      description: t('cta.description') || "Let's discuss how blockchain solutions can bring transparency, security, and innovation to your business processes.",
      buttonText: t('cta.buttonText') || "Explore Blockchain Solutions",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Transformative blockchain capabilities"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Cutting-edge tools for distributed solutions"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "How distributed ledgers transform business"
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
