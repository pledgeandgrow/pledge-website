import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pledge & Grow',
  description: 'Privacy policy for Pledge & Grow services',
};

export default function PrivacyPolicyPage() {
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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: May 20, 2025
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            At Pledge & Grow, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2>2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li>Identity Data: includes first name, last name, username or similar identifier</li>
            <li>Contact Data: includes email address, telephone numbers, and address</li>
            <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location</li>
            <li>Usage Data: includes information about how you use our website and services</li>
          </ul>
          
          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To provide and improve our services</li>
            <li>To respond to your inquiries</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, 
            or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, 
            agents, contractors, and other third parties who have a business need to know.
          </p>
          
          <h2>5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <h2>6. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
          </p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to correction of your personal data</li>
            <li>The right to erasure of your personal data</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
          
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at:
            <br />
            <a href="mailto:privacy@pledgeandgrow.com" className="text-primary hover:underline">privacy@pledgeandgrow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
