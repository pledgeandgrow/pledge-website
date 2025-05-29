import React from 'react';
import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Cookie Policy | Pledge & Grow',
  description: 'Cookie policy for Pledge & Grow website',
};

// Define sections for the table of contents
const sections = [
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'how-we-use-cookies', title: 'How We Use Cookies' },
  { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
  { id: 'managing-cookies', title: 'Managing Your Cookies' },
  { id: 'third-party-cookies', title: 'Third-Party Cookies' },
  { id: 'changes', title: 'Changes to This Cookie Policy' },
  { id: 'contact', title: 'Contact Us' },
];

// Define related legal pages
const relatedPages = [
  { title: 'Privacy Policy', href: '/legal/privacy-policy' },
  { title: 'GDPR Compliance', href: '/legal/gdpr' },
  { title: 'Terms of Service', href: '/legal/terms-conditions' },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="May 20, 2025"
      sections={sections}
      relatedPages={relatedPages}
    >
          
      <LegalSection id="what-are-cookies" title="What Are Cookies" icon={<Cookie className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
      </LegalSection>
          
      <LegalSection id="how-we-use-cookies" title="How We Use Cookies" icon={<Info className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use cookies for various purposes including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Essential Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These are necessary for the website to function properly and cannot be switched off.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Functional Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These enable the website to provide enhanced functionality and personalization.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Targeting Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These may be set through our site by our advertising partners to build a profile of your interests.</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="types-of-cookies" title="Types of Cookies We Use" icon={<Settings className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our website uses the following types of cookies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Session Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These are temporary cookies that expire when you close your browser.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Persistent Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These remain on your device until they expire or you delete them.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">First-party Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These are set by the website you are visiting.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Third-party Cookies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">These are set by a domain other than the one you are visiting.</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="managing-cookies" title="Managing Your Cookies" icon={<ToggleLeft className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>Delete cookies from your browser</li>
          <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
          <li>Set your browser to notify you when you receive a cookie</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Please note that if you choose to disable cookies, some features of our website may not function properly.
        </p>
      </LegalSection>
          
      <LegalSection id="third-party-cookies" title="Third-Party Cookies" icon={<ShieldAlert className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use the following specific cookies on our website:
        </p>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Essential cookies:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400">
              <li>Session cookies for maintaining user sessions</li>
              <li>Security cookies for protecting our website and users</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance cookies:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400">
              <li>Google Analytics to analyze website usage</li>
              <li>Hotjar to understand user behavior</li>
            </ul>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="changes" title="Changes to This Cookie Policy" icon={<Trash2 className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          We may update our cookie policy from time to time. We will notify you of any changes by posting the new cookie policy on this page.
        </p>
      </LegalSection>
          
      <LegalSection id="contact" title="Contact Us" icon={<Mail className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about our cookie policy, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
          <a href="mailto:privacy@pledgeandgrow.com" className="text-primary hover:underline font-medium">privacy@pledgeandgrow.com</a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
