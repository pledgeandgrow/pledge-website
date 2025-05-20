import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Pledge & Grow',
  description: 'Terms and conditions for using Pledge & Grow services',
};

export default function TermsPage() {
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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: May 20, 2025
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to Pledge & Grow. These Terms of Service govern your use of our website and services. 
            By accessing or using our services, you agree to be bound by these Terms.
          </p>
          
          <h2>2. Definitions</h2>
          <p>
            <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong> refers to Pledge & Grow.
            <br />
            <strong>"Services"</strong> refers to the services offered by Pledge & Grow, including but not limited to our website, digital solutions, and consulting services.
            <br />
            <strong>"User"</strong>, <strong>"you"</strong>, or <strong>"your"</strong> refers to the individual or entity using our Services.
          </p>
          
          <h2>3. Use of Services</h2>
          <p>
            Our Services are provided for business and professional use. You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          
          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Pledge & Grow or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2>5. User Content</h2>
          <p>
            By submitting content to our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media. You represent and warrant that you own or have the necessary rights to the content you submit.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Pledge & Grow, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
          </p>
          
          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
          </p>
          
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            <a href="mailto:legal@pledgeandgrow.com" className="text-primary hover:underline">legal@pledgeandgrow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
