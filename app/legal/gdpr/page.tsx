"use client";

import React from 'react';
// No need to import Metadata as we're not exporting it from this client component
import { 
  Shield, 
  Users, 
  Scale, 
  UserCheck, 
  Lock, 
  Mail
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';
import { useTranslations } from '@/hooks/useTranslations';

// Metadata is handled in layout.tsx

export default function GDPRPage() {
  const { t } = useTranslations('legal/gdpr');
  
  // Define sections for the table of contents based on translations
  const sectionKeys = [
    'introduction',
    'dataController',
    'dataProtectionOfficer',
    'dataProcessingPrinciples',
    'lawfulBasis',
    'dataSubjectRights',
    'exercisingRights',
    'dataRetention',
    'internationalTransfers',
    'dataSecurityMeasures',
    'updates',
    'contact'
  ];
  
  const sections = sectionKeys
    .filter(key => t(`sections.${key}`, { returnObjects: true }))
    .map(sectionKey => {
      return { 
        id: sectionKey, 
        title: t(`sections.${sectionKey}.title`) 
      };
    });

  // Define related legal pages with hardcoded values to ensure they always display correctly
  const relatedPages = [
    { title: 'Privacy Policy', href: '/legal/privacy-policy' },
    { title: 'Cookie Policy', href: '/legal/cookie-policy' },
    { title: 'Terms & Conditions', href: '/legal/terms-conditions' },
    { title: 'Legal Notice', href: '/legal/legal-notice' }
  ];

  // Map section keys to icons
  const sectionIcons = {
    introduction: <Shield className="h-6 w-6" />,
    dataProtectionPrinciples: <Users className="h-6 w-6" />,
    ourRole: <Scale className="h-6 w-6" />,
    legalBasis: <Scale className="h-6 w-6" />,
    dataSubjectRights: <UserCheck className="h-6 w-6" />,
    dataSecurity: <Lock className="h-6 w-6" />,
    dataBreaches: <Shield className="h-6 w-6" />,
    dataRetention: <Shield className="h-6 w-6" />,
    changes: <Shield className="h-6 w-6" />,
    contact: <Mail className="h-6 w-6" />
  };

  return (
    <LegalPageLayout
      title={t('hero.title')}
      lastUpdated={t('hero.subtitle')}
      sections={sections}
      relatedPages={relatedPages}
    >
      {/* Dynamically generate sections from translations */}
      {sectionKeys
        .filter(key => t(`sections.${key}`, { returnObjects: true }))
        .map((sectionKey) => (
        <LegalSection 
          key={sectionKey}
          id={sectionKey} 
          title={t(`sections.${sectionKey}.title`)} 
          icon={sectionIcons[sectionKey as keyof typeof sectionIcons]}
        >
          {/* Render each paragraph in the content array */}
          {Array.isArray(t(`sections.${sectionKey}.content`, { returnObjects: true })) ? 
            t(`sections.${sectionKey}.content`, { returnObjects: true }).map((paragraph: string, i: number) => (
            <p key={i} className="text-gray-700 dark:text-gray-300 mb-4">
              {paragraph}
            </p>
          )) : 
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t(`sections.${sectionKey}.content`)}
            </p>
          }
          
          {/* Contact information is included directly in content when needed */}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
