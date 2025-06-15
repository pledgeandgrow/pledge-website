"use client";

import React from 'react';
import { 
  Info, 
  FileText, 
  ShieldCheck, 
  Scale, 
  Bookmark, 
  AlertTriangle, 
  Mail
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';
import { useTranslations } from '@/hooks/useTranslations';

export default function TermsPage() {
  const { t } = useTranslations('legal/terms-conditions');
  
  // Define sections for the table of contents based on translations
  const sectionKeys = [
    'introduction',
    'intellectualProperty',
    'userRepresentations',
    'prohibitedActivities',
    'userGeneratedContent',
    'contributionLicense',
    'submissions',
    'thirdPartyWebsites',
    'siteManagement',
    'privacyPolicy',
    'termAndTermination',
    'modificationsAndInterruptions',
    'governingLaw',
    'disclaimers',
    'limitations',
    'indemnification',
    'userData',
    'electronicCommunications',
    'miscellaneous',
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

  // Define related legal pages using translations
  const { t: commonT } = useTranslations('common');
  
  const relatedPages = [
    { title: commonT('footer.legal.privacyPolicy', 'Privacy Policy'), href: '/legal/privacy-policy' },
    { title: commonT('footer.legal.cookiePolicy', 'Cookie Policy'), href: '/legal/cookie-policy' },
    { title: commonT('footer.legal.gdpr', 'GDPR Compliance'), href: '/legal/gdpr' },
    { title: commonT('footer.legal.legalNotice', 'Legal Notice'), href: '/legal/legal-notice' }
  ];

  // Map section keys to icons
  const sectionIcons = {
    introduction: <Info className="h-6 w-6" />,
    definitions: <FileText className="h-6 w-6" />,
    useOfServices: <ShieldCheck className="h-6 w-6" />,
    intellectualProperty: <Bookmark className="h-6 w-6" />,
    limitationOfLiability: <AlertTriangle className="h-6 w-6" />,
    termination: <Scale className="h-6 w-6" />,
    governingLaw: <Scale className="h-6 w-6" />,
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
          
          {/* Render address if available for contact section */}
          {sectionKey === 'contact' && t(`sections.${sectionKey}.address`, { returnObjects: true }) && (
            <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
              {(() => {
                const address = t(`sections.${sectionKey}.address`, { returnObjects: true });
                if (Array.isArray(address)) {
                  return address.map((line: string, i: number) => (
                    <div key={i}>
                      {line.includes('@') ? (
                        <a href={`mailto:${line}`} className="text-primary hover:underline font-medium">
                          {line}
                        </a>
                      ) : line.startsWith('+') ? (
                        <a href={`tel:${line.replace(/\s/g, '')}`} className="text-primary hover:underline font-medium">
                          {line}
                        </a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{line}</span>
                      )}
                    </div>
                  ));
                } else {
                  return (
                    <div className="text-gray-700 dark:text-gray-300">
                      {String(address)}
                    </div>
                  );
                }
              })()}
            </div>
          )}
        </LegalSection>
      ))}
    </LegalPageLayout>
  );
}
