import React from 'react';
import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Privacy Policy | Pledge & Grow',
  description: 'Privacy policy for Pledge & Grow services',
};

// Define sections for the table of contents
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'data-collection', title: 'Data We Collect' },
  { id: 'data-usage', title: 'How We Use Your Data' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'legal-rights', title: 'Your Legal Rights' },
  { id: 'policy-changes', title: 'Changes to Policy' },
  { id: 'contact', title: 'Contact Us' },
];

// Define related legal pages
const relatedPages = [
  { title: 'Cookie Policy', href: '/legal/cookie-policy' },
  { title: 'GDPR Compliance', href: '/legal/gdpr' },
  { title: 'Terms of Service', href: '/legal/terms-conditions' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="May 20, 2025"
      sections={sections}
      relatedPages={relatedPages}
    >
          
      <LegalSection id="introduction" title="Introduction" icon={<Info className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At Pledge & Grow, we respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you visit our website 
          and tell you about your privacy rights and how the law protects you.
        </p>
      </LegalSection>
          
      <LegalSection id="data-collection" title="Data We Collect" icon={<Database className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Identity Data</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">First name, last name, username or similar identifier</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contact Data</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Email address, telephone numbers, and address</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Data</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">IP address, browser type and version, time zone setting and location</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Usage Data</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Information about how you use our website and services</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="data-usage" title="How We Use Your Data" icon={<Database className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>To provide and improve our services</li>
          <li>To respond to your inquiries</li>
          <li>To send you marketing communications (with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </LegalSection>
          
      <LegalSection id="data-security" title="Data Security" icon={<Shield className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, 
          or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, 
          agents, contractors, and other third parties who have a business need to know.
        </p>
      </LegalSection>
          
      <LegalSection id="data-retention" title="Data Retention" icon={<Clock className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
          including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>
      </LegalSection>
          
      <LegalSection id="legal-rights" title="Your Legal Rights" icon={<UserCheck className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Right to Access</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You can request access to your personal data</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Right to Correction</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You can request correction of your personal data</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Right to Erasure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You can request deletion of your personal data</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Right to Object</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You can object to processing of your data</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Right to Data Portability</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You can request transfer of your data</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="policy-changes" title="Changes to This Privacy Policy" icon={<RefreshCw className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
        </p>
      </LegalSection>
          
      <LegalSection id="contact" title="Contact Us" icon={<Mail className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about this privacy policy, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
          <a href="mailto:privacy@pledgeandgrow.com" className="text-primary hover:underline font-medium">privacy@pledgeandgrow.com</a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
