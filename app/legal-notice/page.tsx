"use client";

import { CanonicalUrl } from "@/components/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LegalNotice() {
  return (
    <div className="flex flex-col min-h-screen">
      <CanonicalUrl />
      <Navbar />
      
      <main className="flex-grow pt-16" id="main-content">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Legal Notice</h1>
          
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: 09/01/2024
            </p>
            
            <section className="mb-8">
              <p className="mb-6">
                Welcome to the legal notice page of Pledge and Grow. We are committed to transparency and compliance with regulations.
                This section presents our legal structure, practices, and the general terms of use of our website.
                The use of our services implies acceptance of these terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Identification of the Publisher and Website Host</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Publisher and Owner:</h3>
              <ul className="list-none space-y-2">
                <li><strong>Company Name:</strong> PLEDGE AND GROW</li>
                <li><strong>Registered Office:</strong> 4Bis Rue Alfred Nobel – Champs-sur-Marne – France</li>
                <li><strong>SIREN:</strong> 931577662</li>
                <li><strong>SIRET:</strong> 93157766200017</li>
                <li><strong>EU VAT Number:</strong> FR38931577662</li>
                <li><strong>NAF Code:</strong> 62.01Z - Computer Programming</li>
                <li><strong>Phone:</strong> +33 7 53 69 58 40</li>
                <li><strong>Website:</strong> pledgeandgrow.com</li>
                <li><strong>Email:</strong> contact@pledgeandgrow.com</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Hosting Provider:</h3>
              <ul className="list-none space-y-2">
                <li>Vercel Inc</li>
                <li>440 N Barranca Ave #4133</li>
                <li>Covina, CA 91723</li>
                <li><strong>Email:</strong> privacy@vercel.com</li>
              </ul>
              
              <p className="mt-4">
                For users from the EEA, UK, and California, Vercel may collect your personal data as a "data controller"
                when it determines the means and purposes of processing (e.g., visitor data, event participants, or customers).
                As a "data processor" or "service provider," Vercel processes data on behalf of its customers who use
                its hosting services or analytics tools. More information is available at: Vercel.com
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Website Access</h2>
              <p>
                The site is accessible from anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruptions
                that may arise from maintenance requirements. In the event of modification, interruption, or suspension of services, pledgeandgrow.com cannot be held responsible.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Collection</h2>
              <p>
                The User is informed that during visits to the site, a cookie may automatically install on their browser software.
                By browsing the site, they choose to accept cookies or not. A cookie is an element that does not identify the User but serves
                to record information relating to their navigation on the website. The User can disable this cookie through the settings in their browser software.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
