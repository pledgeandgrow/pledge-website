import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | Pledge & Grow',
  description: 'Cookie policy for Pledge & Grow website',
};

export default function CookiePolicyPage() {
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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Cookie Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: May 20, 2025
          </p>
          
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for various purposes including:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
            <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li><strong>Functional cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
            <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
          </ul>
          
          <h2>3. Types of Cookies We Use</h2>
          <p>
            Our website uses the following types of cookies:
          </p>
          <ul>
            <li><strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser.</li>
            <li><strong>Persistent cookies:</strong> These remain on your device until they expire or you delete them.</li>
            <li><strong>First-party cookies:</strong> These are set by the website you are visiting.</li>
            <li><strong>Third-party cookies:</strong> These are set by a domain other than the one you are visiting.</li>
          </ul>
          
          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul>
            <li>Delete cookies from your browser</li>
            <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
            <li>Set your browser to notify you when you receive a cookie</li>
          </ul>
          <p>
            Please note that if you choose to disable cookies, some features of our website may not function properly.
          </p>
          
          <h2>5. Specific Cookies We Use</h2>
          <p>
            <strong>Essential cookies:</strong>
          </p>
          <ul>
            <li>Session cookies for maintaining user sessions</li>
            <li>Security cookies for protecting our website and users</li>
          </ul>
          
          <p>
            <strong>Performance cookies:</strong>
          </p>
          <ul>
            <li>Google Analytics to analyze website usage</li>
            <li>Hotjar to understand user behavior</li>
          </ul>
          
          <h2>6. Changes to Our Cookie Policy</h2>
          <p>
            We may update our cookie policy from time to time. We will notify you of any changes by posting the new cookie policy on this page.
          </p>
          
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our cookie policy, please contact us at:
            <br />
            <a href="mailto:privacy@pledgeandgrow.com" className="text-primary hover:underline">privacy@pledgeandgrow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
