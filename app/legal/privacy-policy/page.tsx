"use client";

import React from 'react';
import { 
  Info, 
  Database, 
  Shield, 
  Clock, 
  UserCheck, 
  RefreshCw, 
  Mail
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';
import { useTranslations } from '@/hooks/useTranslations';

export default function PrivacyPolicyPage() {
  const { t } = useTranslations('legal/privacy-policy');
  
  // Define sections for the table of contents based on translations
  const sectionKeys = [
    'introduction',
    'informationWeCollect',
    'howWeUseYourInformation',
    'disclosureOfYourInformation',
    'thirdPartyWebsites',
    'dataRetention',
    'dataProtectionRights',
    'doNotTrackSignals',
    'childrenPrivacy',
    'changesToPrivacyPolicy',
    'contactUs'
  ];
  
  const sections = sectionKeys
    .filter(key => t(`sections.${key}`, { returnObjects: true }))
    .map(sectionKey => {
      return { 
        id: sectionKey, 
        title: t(`sections.${sectionKey}.title`) 
      };
    });

  // Define related legal pages using translations
  const { t: commonT } = useTranslations('common');
  
  const relatedPages = [
    { title: commonT('footer.legal.gdpr', 'GDPR Compliance'), href: '/legal/gdpr' },
    { title: commonT('footer.legal.cookiePolicy', 'Cookie Policy'), href: '/legal/cookie-policy' },
    { title: commonT('footer.legal.termsOfService', 'Terms & Conditions'), href: '/legal/terms-conditions' },
    { title: commonT('footer.legal.legalNotice', 'Legal Notice'), href: '/legal/legal-notice' }
  ];

  // Map section keys to icons
  const sectionIcons = {
    introduction: <Info className="h-6 w-6" />,
    dataCollection: <Database className="h-6 w-6" />,
    dataUsage: <Database className="h-6 w-6" />,
    dataSecurity: <Shield className="h-6 w-6" />,
    dataRetention: <Clock className="h-6 w-6" />,
    legalRights: <UserCheck className="h-6 w-6" />,
    policyChanges: <RefreshCw className="h-6 w-6" />,
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
          
          {/* Contact information is included directly in content when needed */}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
