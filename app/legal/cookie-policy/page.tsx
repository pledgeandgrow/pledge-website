"use client";

import React, { Suspense } from 'react';
import { 
  Cookie, 
  Info, 
  Settings, 
  ShieldAlert, 
  Trash2, 
  ToggleLeft, 
  Mail
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';
import { useTranslations } from '@/hooks/useTranslations';

// Metadata is now handled by metadata.ts

// Component to handle the actual content rendering
function CookiePolicyContent() {
  const { t } = useTranslations('legal/cookie-policy');
  
  // Define sections for the table of contents based on translations
  const sectionKeys = [
    'introduction',
    'whatAreCookies',
    'whyWeUseCookies',
    'typesOfCookies',
    'controllingCookies',
    'updates',
    'contact'
  ];
  
  // Create sections array for table of contents
  const sections = sectionKeys.map(sectionKey => {
    return { 
      id: sectionKey, 
      title: t(`sections.${sectionKey}.title`) 
    };
  });

  // Define related legal pages using translations
  const { t: commonT } = useTranslations('common');
  
  const relatedPages = [
    { title: commonT('footer.legal.privacyPolicy', 'Privacy Policy'), href: '/legal/privacy-policy' },
    { title: commonT('footer.legal.gdpr', 'GDPR Compliance'), href: '/legal/gdpr' },
    { title: commonT('footer.legal.termsOfService', 'Terms & Conditions'), href: '/legal/terms-conditions' },
    { title: commonT('footer.legal.legalNotice', 'Legal Notice'), href: '/legal/legal-notice' }
  ];

  // Map section keys to icons
  const sectionIcons = {
    introduction: <Cookie className="h-6 w-6" />,
    whatAreCookies: <Cookie className="h-6 w-6" />,
    howWeUseCookies: <Info className="h-6 w-6" />,
    typesOfCookies: <Settings className="h-6 w-6" />,
    managingCookies: <ToggleLeft className="h-6 w-6" />,
    thirdPartyCookies: <ShieldAlert className="h-6 w-6" />,
    changes: <Trash2 className="h-6 w-6" />,
    contact: <Mail className="h-6 w-6" />
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
                  {paragraph}
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
          
          {/* Contact information is handled directly in the content rendering */}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}

// Main page component with Suspense boundary
export default function CookiePolicyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading cookie policy...</div>}>
      <CookiePolicyContent />
    </Suspense>
  );
}
