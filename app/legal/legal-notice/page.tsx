import React from 'react';
import { Metadata } from 'next';
import { 
  Info, 
  Building, 
  Server, 
  Clock, 
  Cookie, 
  Shield
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'Legal Notice | Pledge & Grow',
  description: 'Legal notice and information about Pledge & Grow',
};

// Define sections for the table of contents
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'publisher', title: 'Publisher Information' },
  { id: 'hosting', title: 'Hosting Provider' },
  { id: 'access', title: 'Website Access' },
  { id: 'data', title: 'Data Collection' },
];

// Define related legal pages
const relatedPages = [
  { title: 'Privacy Policy', href: '/legal/privacy-policy' },
  { title: 'Cookie Policy', href: '/legal/cookie-policy' },
  { title: 'Terms of Service', href: '/legal/terms-conditions' },
  { title: 'GDPR Compliance', href: '/legal/gdpr' },
];

export default function LegalNotice() {
  return (
    <LegalPageLayout
      title="Legal Notice"
      lastUpdated="January 9, 2024"
      sections={sections}
      relatedPages={relatedPages}
    >
      <LegalSection id="introduction" title="Introduction" icon={<Info className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to the legal notice page of Pledge and Grow. We are committed to transparency and compliance with regulations.
          This section presents our legal structure, practices, and the general terms of use of our website.
          The use of our services implies acceptance of these terms.
        </p>
      </LegalSection>
      
      <LegalSection id="publisher" title="Publisher Information" icon={<Building className="h-6 w-6" />}>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Publisher and Owner</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Company Name:</span>
                <span>PLEDGE AND GROW</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Registered Office:</span>
                <span>4Bis Rue Alfred Nobel – Champs-sur-Marne – France</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">SIREN:</span>
                <span>931577662</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">SIRET:</span>
                <span>93157766200017</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">EU VAT Number:</span>
                <span>FR38931577662</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">NAF Code:</span>
                <span>62.01Z - Computer Programming</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Phone:</span>
                <span>+33 7 53 69 58 40</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Website:</span>
                <span>pledgeandgrow.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Email:</span>
                <span>contact@pledgeandgrow.com</span>
              </li>
            </ul>
          </div>
        </div>
      </LegalSection>
      
      <LegalSection id="hosting" title="Hosting Provider" icon={<Server className="h-6 w-6" />}>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-4">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Vercel Inc</li>
            <li>440 N Barranca Ave #4133</li>
            <li>Covina, CA 91723</li>
            <li className="flex items-start">
              <span className="font-semibold min-w-32 inline-block">Email:</span>
              <span>privacy@vercel.com</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          For users from the EEA, UK, and California, Vercel may collect your personal data as a "data controller"
          when it determines the means and purposes of processing (e.g., visitor data, event participants, or customers).
          As a "data processor" or "service provider," Vercel processes data on behalf of its customers who use
          its hosting services or analytics tools. More information is available at: Vercel.com
        </p>
      </LegalSection>
      
      <LegalSection id="access" title="Website Access" icon={<Clock className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          The site is accessible from anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruptions
          that may arise from maintenance requirements. In the event of modification, interruption, or suspension of services, pledgeandgrow.com cannot be held responsible.
        </p>
      </LegalSection>
      
      <LegalSection id="data" title="Data Collection" icon={<Cookie className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          The User is informed that during visits to the site, a cookie may automatically install on their browser software.
          By browsing the site, they choose to accept cookies or not. A cookie is an element that does not identify the User but serves
          to record information relating to their navigation on the website. The User can disable this cookie through the settings in their browser software.
        </p>
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
          <a href="/legal/privacy-policy" className="text-primary hover:underline font-medium">View our Privacy Policy for more details</a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
