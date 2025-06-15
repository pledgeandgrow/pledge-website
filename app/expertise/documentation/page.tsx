"use client";

import React, { Suspense } from "react";
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

// Component to handle the actual content rendering
function DocumentationExpertiseContent() {
  // Use translations for this expertise page
  const { t, isLoading, translations } = useTranslations('documentation');

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
    slug: t('slug') || "documentation",
    title: t('title') || "Technical Documentation",
    subtitle: t('subtitle') || "Clear, comprehensive documentation for your products",
    description: t('description') || "We create user-friendly technical documentation that improves product adoption, reduces support costs, and enhances user experience.",
    heroImage: t('heroImage') || "/images/expertise/documentation-hero.jpg",
    heroButton: t('heroButton') || "Start Your Documentation Project",
    cta: {
      title: t('cta.title') || "Ready to improve your documentation?",
      description: t('cta.description') || "Let's discuss how we can create clear, effective documentation that enhances your product experience.",
      buttonText: t('cta.buttonText') || "Start Your Documentation Project",
      buttonLink: t('cta.buttonLink') || "/contact"
    }
  };

  // Section titles and subtitles from translations
  const sectionTitles = {
    features: {
      title: t('sections.features.title') || "What We Offer",
      subtitle: t('sections.features.subtitle') || "Clear, comprehensive, and user-friendly documentation"
    },
    technologies: {
      title: t('sections.technologies.title') || "Technologies & Tools",
      subtitle: t('sections.technologies.subtitle') || "Modern solutions for effective technical writing"
    },
    benefits: {
      title: t('sections.benefits.title') || "Benefits",
      subtitle: t('sections.benefits.subtitle') || "Why quality documentation matters"
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

// Main page component with Suspense boundary
export default function DocumentationExpertisePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading documentation expertise...</div>}>
      <DocumentationExpertiseContent />
    </Suspense>
  );
}
