import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GDPR Compliance | Pledge & Grow',
  description: 'GDPR compliance information for Pledge & Grow services',
};

export default function GDPRPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">GDPR Compliance</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: May 20, 2025
          </p>
          
          <h2>1. Introduction to GDPR</h2>
          <p>
            The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union. 
            At Pledge & Grow, we are committed to ensuring that all our data processing activities comply with the GDPR.
          </p>
          
          <h2>2. Our Role Under GDPR</h2>
          <p>
            Depending on the circumstances, Pledge & Grow may act as either:
          </p>
          <ul>
            <li><strong>Data Controller:</strong> When we determine the purposes and means of processing personal data.</li>
            <li><strong>Data Processor:</strong> When we process personal data on behalf of our clients.</li>
          </ul>
          
          <h2>3. Legal Basis for Processing</h2>
          <p>
            Under GDPR, we process personal data on one or more of the following legal bases:
          </p>
          <ul>
            <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose.</li>
            <li><strong>Contract:</strong> The processing is necessary for a contract we have with you.</li>
            <li><strong>Legal Obligation:</strong> The processing is necessary for us to comply with the law.</li>
            <li><strong>Legitimate Interests:</strong> The processing is necessary for our legitimate interests or the legitimate interests of a third party.</li>
          </ul>
          
          <h2>4. Your Rights Under GDPR</h2>
          <p>
            The GDPR provides the following rights for individuals:
          </p>
          <ul>
            <li><strong>Right to be informed:</strong> You have the right to be informed about the collection and use of your personal data.</li>
            <li><strong>Right of access:</strong> You have the right to access your personal data and supplementary information.</li>
            <li><strong>Right to rectification:</strong> You have the right to have inaccurate personal data rectified, or completed if it is incomplete.</li>
            <li><strong>Right to erasure:</strong> You have the right to have your personal data erased in certain circumstances.</li>
            <li><strong>Right to restrict processing:</strong> You have the right to request the restriction or suppression of your personal data.</li>
            <li><strong>Right to data portability:</strong> You have the right to obtain and reuse your personal data for your own purposes across different services.</li>
            <li><strong>Right to object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
            <li><strong>Rights related to automated decision making and profiling:</strong> You have rights related to automated decision making and profiling.</li>
          </ul>
          
          <h2>5. Data Protection Measures</h2>
          <p>
            We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
          </p>
          <ul>
            <li>Encryption of personal data</li>
            <li>Regular testing and evaluation of security measures</li>
            <li>Staff training on data protection</li>
            <li>Access controls and authentication procedures</li>
            <li>Data minimization practices</li>
          </ul>
          
          <h2>6. Data Breach Notification</h2>
          <p>
            In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, 
            where feasible. If the breach is likely to result in a high risk to the rights and freedoms of individuals, 
            we will also notify the affected individuals without undue delay.
          </p>
          
          <h2>7. International Data Transfers</h2>
          <p>
            When we transfer personal data outside the European Economic Area (EEA), we ensure that appropriate safeguards are in place 
            to protect your personal data, such as Standard Contractual Clauses approved by the European Commission.
          </p>
          
          <h2>8. Data Protection Officer</h2>
          <p>
            Our Data Protection Officer can be contacted at:
            <br />
            <a href="mailto:dpo@pledgeandgrow.com" className="text-primary hover:underline">dpo@pledgeandgrow.com</a>
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us at:
            <br />
            <a href="mailto:gdpr@pledgeandgrow.com" className="text-primary hover:underline">gdpr@pledgeandgrow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
