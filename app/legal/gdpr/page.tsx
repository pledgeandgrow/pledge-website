import React from 'react';
import { Metadata } from 'next';
import { 
  Shield, 
  Users, 
  Scale, 
  UserCheck, 
  Lock, 
  Mail
} from 'lucide-react';

import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'GDPR Compliance | Pledge & Grow',
  description: 'GDPR compliance information for Pledge & Grow services',
};

// Define sections for the table of contents
const sections = [
  { id: 'introduction', title: 'Introduction to GDPR' },
  { id: 'our-role', title: 'Our Role Under GDPR' },
  { id: 'legal-basis', title: 'Legal Basis for Processing' },
  { id: 'data-subject-rights', title: 'Data Subject Rights' },
  { id: 'data-security', title: 'Data Security Measures' },
  { id: 'data-breaches', title: 'Data Breach Procedures' },
  { id: 'contact', title: 'Contact Us' },
];

// Define related legal pages
const relatedPages = [
  { title: 'Privacy Policy', href: '/legal/privacy-policy' },
  { title: 'Cookie Policy', href: '/legal/cookie-policy' },
  { title: 'Terms of Service', href: '/legal/terms-conditions' },
];

export default function GDPRPage() {
  return (
    <LegalPageLayout
      title="GDPR Compliance"
      lastUpdated="May 20, 2025"
      sections={sections}
      relatedPages={relatedPages}
    >
          
      <LegalSection id="introduction" title="Introduction to GDPR" icon={<Shield className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union. 
          At Pledge & Grow, we are committed to ensuring that all our data processing activities comply with the GDPR.
        </p>
      </LegalSection>
          
      <LegalSection id="our-role" title="Our Role Under GDPR" icon={<Users className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Depending on the circumstances, Pledge & Grow may act as either:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Data Controller</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">When we determine the purposes and means of processing personal data.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Data Processor</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">When we process personal data on behalf of our clients.</p>
          </div>
        </div>
      </LegalSection>
          
      <LegalSection id="legal-basis" title="Legal Basis for Processing" icon={<Scale className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Under GDPR, we process personal data on one or more of the following legal bases:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Consent</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">The individual has given clear consent for us to process their personal data for a specific purpose.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contract</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">The processing is necessary for a contract we have with the individual.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Legal Obligation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">The processing is necessary for us to comply with the law.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Legitimate Interests</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">The processing is necessary for our legitimate interests or the legitimate interests of a third party.</p>
          </div>
        </div>
      </LegalSection>
      
      <LegalSection id="data-subject-rights" title="Data Subject Rights" icon={<UserCheck className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The GDPR provides the following rights for individuals:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to be Informed</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to be informed about the collection and use of your personal data.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right of Access</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to access your personal data and supplementary information.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to Rectification</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to have inaccurate personal data rectified, or completed if it is incomplete.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to Erasure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to have your personal data erased in certain circumstances.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to Restrict Processing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to request the restriction or suppression of your personal data.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Right to Data Portability</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have the right to obtain and reuse your personal data for your own purposes across different services.</p>
          </div>
        </div>
          
      </LegalSection>
      
      <LegalSection id="data-security" title="Data Security Measures" icon={<Lock className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Encryption of personal data</li>
          <li>Regular testing and evaluation of security measures</li>
          <li>Staff training on data protection</li>
          <li>Access controls and authentication procedures</li>
          <li>Data minimization practices</li>
        </ul>
          
      </LegalSection>
      
      <LegalSection id="data-breaches" title="Data Breach Procedures" icon={<Shield className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, 
          where feasible. If the breach is likely to result in a high risk to the rights and freedoms of individuals, 
          we will also notify the affected individuals without undue delay.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          When we transfer personal data outside the European Economic Area (EEA), we ensure that appropriate safeguards are in place 
          to protect your personal data, such as Standard Contractual Clauses approved by the European Commission.
        </p>
      </LegalSection>
      
      <LegalSection id="contact" title="Contact Us" icon={<Mail className="h-6 w-6" />}>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our Data Protection Officer can be contacted at:
        </p>
        <div className="mt-2 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block mb-4">
          <a href="mailto:dpo@pledgeandgrow.com" className="text-primary hover:underline font-medium">dpo@pledgeandgrow.com</a>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us at:
        </p>
        <div className="mt-2 p-4 bg-primary/5 border border-primary/20 rounded-lg inline-block">
          <a href="mailto:gdpr@pledgeandgrow.com" className="text-primary hover:underline font-medium">gdpr@pledgeandgrow.com</a>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
