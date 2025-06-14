"use client";

import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ArrowUp, Shield, FileText } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

interface Section {
  id: string;
  title: string;
  icon?: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: ReactNode;
  relatedPages?: {
    title: string;
    href: string;
  }[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  children,
  relatedPages,
}: LegalPageLayoutProps) {
  const { t } = useTranslations('common');
  const [activeSection, setActiveSection] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position to highlight active section in table of contents
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Find current active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );

      // Find the section that is currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors bg-primary/5 px-3 py-1.5 rounded-md hover:bg-primary/10 border border-primary/10"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            {t('navigation.backToHome', 'Back to Home')}
          </Link>
        </div>
        
        {/* Main Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-primary/5 dark:bg-primary/5 rounded-lg p-6 shadow-sm border-l-2 border-primary">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t('legal.tableOfContents', 'Table of Contents')}</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block py-1 px-2 text-sm rounded-md transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Legal Pages */}
              {relatedPages && relatedPages.length > 0 && (
                <div className="bg-primary/5 dark:bg-primary/5 rounded-lg p-6 shadow-sm border-l-2 border-primary">
                  <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t('legal.relatedDocuments', 'Related Legal Documents')}</h2>
                  <nav className="space-y-2">
                    {relatedPages.map((page, index) => (
                      <Link
                        key={index}
                        href={page.href}
                        className="flex items-center py-1 px-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 rounded-md transition-colors"
                      >
                        <FileText className="h-4 w-4 mr-2 text-primary" />
                        {page.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border-l-4 border-primary">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
              
              <div className="flex items-center mb-8 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-6">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                <span>{lastUpdated}</span>
              </div>
              
              <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-primary/80 dark:hover:prose-a:text-primary/80 prose-a:transition-colors">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
