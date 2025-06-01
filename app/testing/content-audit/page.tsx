"use client";

import { useEffect } from 'react';
import { ContentAudit } from '@/components/testing/ContentAudit';
import { ColorContrastChecker } from '@/components/testing/ColorContrastChecker';
import { ContentChecker } from '@/components/testing/ContentChecker';
import { LinkChecker } from '@/components/testing/LinkChecker';
import { LaunchChecklist } from '@/components/testing/LaunchChecklist';

export default function ContentAuditPage() {
  // Only show this page in development mode
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Testing Tools</h1>
        <p>This page is only available in development mode.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Content Audit Tools</h1>
      
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        Use these tools to check for content quality, accessibility, and functionality issues before launch.
        Run each tool individually and fix any issues found.
      </p>
      
      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Color Contrast Checker</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Checks if text colors meet WCAG accessibility standards for readability.
          </p>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <ColorContrastChecker />
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">2. Spelling & Grammar Checker</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Scans for common spelling and grammar errors in page content.
          </p>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <ContentChecker />
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">3. Link Checker</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Finds broken or invalid links on the current page.
          </p>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <LinkChecker />
          </div>
        </section>
        
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Launch Readiness</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            After running all checks and fixing issues, update the launch checklist to mark these items as completed.
          </p>
          <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-medium text-green-800 dark:text-green-400 mb-2">Checklist Items to Update</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Color contrast compliance (Accessibility category)</li>
              <li>Spelling and grammar (Content category)</li>
              <li>Broken links check (Content category)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              The LaunchChecklist component will appear in the bottom-right corner of any page in development mode.
            </p>
          </div>
        </section>
      </div>
      
      <LaunchChecklist />
    </div>
  );
}
