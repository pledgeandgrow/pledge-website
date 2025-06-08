"use client";

import React from 'react';
import { 
  Info, 
  Building, 
  Globe, 
  Database
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';
import { useTranslations } from '@/hooks/useTranslations';

export default function LegalNoticePage() {
  const { t } = useTranslations('legal/legal-notice');
  
  // Define sections for the table of contents based on translations
  const sectionKeys = [
    'editorIdentification',
    'hostingProvider',
    'siteAccess',
    'dataCollection'
  ];
  
  // Create sections array for table of contents
  const sections = sectionKeys.map(sectionKey => {
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
    { title: 'GDPR Compliance', href: '/legal/gdpr' }
  ];

  // Map section keys to icons
  const sectionIcons = {
    editorIdentification: <Building className="h-6 w-6" />,
    hostingProvider: <Globe className="h-6 w-6" />,
    siteAccess: <Info className="h-6 w-6" />,
    dataCollection: <Database className="h-6 w-6" />
  };

  return (
    <LegalPageLayout
      title={t('hero.title')}
      lastUpdated={t('hero.subtitle')}
      sections={sections}
      relatedPages={relatedPages}
    >
      {/* Generate sections from explicit sectionKeys array */}
      {sectionKeys.map((sectionKey) => (
        <LegalSection 
          key={sectionKey}
          id={sectionKey} 
          title={t(`sections.${sectionKey}.title`)} 
          icon={sectionIcons[sectionKey as keyof typeof sectionIcons]}
        >
          {/* Render each paragraph in the content array */}
          {(() => {
            const content = t(`sections.${sectionKey}.content`, { returnObjects: true });
            if (Array.isArray(content)) {
              return content.map((paragraph: string, i: number) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-4">
                  {paragraph.includes('@') ? (
                    <a href={`mailto:${paragraph}`} className="text-primary hover:underline font-medium">
                      {paragraph}
                    </a>
                  ) : paragraph.startsWith('+') ? (
                    <a href={`tel:${paragraph.replace(/\s/g, '')}`} className="text-primary hover:underline font-medium">
                      {paragraph}
                    </a>
                  ) : (
                    paragraph
                  )}
                </p>
              ));
            } else {
              return (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {String(content)}
                </p>
              );
            }
          })()}
          
          {/* Company and hosting information blocks removed as they're not needed */}
          
          {/* Email and phone links are handled directly in the content rendering */}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
