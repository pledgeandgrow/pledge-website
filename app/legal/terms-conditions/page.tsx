import React from 'react';
import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Terms of Service | Pledge & Grow',
  description: 'Terms and conditions for using Pledge & Grow services',
};

// Define sections for the table of contents
const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'definitions', title: 'Definitions' },
  { id: 'use-of-services', title: 'Use of Services' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Us' },
];

// Define related legal pages
const relatedPages = [
  { title: 'Privacy Policy', href: '/legal/privacy-policy' },
  { title: 'Cookie Policy', href: '/legal/cookie-policy' },
  { title: 'GDPR Compliance', href: '/legal/gdpr' },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="May 20, 2025"
      sections={sections}
      relatedPages={relatedPages}
    >
          
      <LegalSection id="introduction" title="Introduction" icon={<Info className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to Pledge & Grow. These Terms of Service govern your use of our website and services. 
          By accessing or using our services, you agree to be bound by these Terms.
        </p>
      </LegalSection>
          
      <LegalSection id="definitions" title="Definitions" icon={<FileText className="h-6 w-6" />}>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Company</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; refers to Pledge & Grow.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Services</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">&quot;Services&quot; refers to the services offered by Pledge & Grow, including but not limited to our website, digital solutions, and consulting services.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">User</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">&quot;User&quot;, &quot;you&quot;, or &quot;your&quot; refers to the individual or entity using our Services.</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="use-of-services" title="Use of Services" icon={<ShieldCheck className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our Services are provided for business and professional use. You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
      </LegalSection>
          
      <LegalSection id="intellectual-property" title="Intellectual Property" icon={<Bookmark className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Pledge & Grow or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
      </LegalSection>
          
      <LegalSection id="user-content" title="User Content" icon={<FileText className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By submitting content to our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media. You represent and warrant that you own or have the necessary rights to the content you submit.
        </p>
      </LegalSection>
          
      <LegalSection id="limitation-of-liability" title="Limitation of Liability" icon={<AlertTriangle className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In no event shall Pledge & Grow, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
        </p>
      </LegalSection>
          
      <LegalSection id="governing-law" title="Governing Law" icon={<Scale className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
        </p>
      </LegalSection>
          
      <LegalSection id="termination" title="Changes to Terms" icon={<FileText className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      </LegalSection>
          
      <LegalSection id="contact" title="Contact Us" icon={<Mail className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
          <a href="mailto:legal@pledgeandgrow.com" className="text-primary hover:underline font-medium">legal@pledgeandgrow.com</a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
