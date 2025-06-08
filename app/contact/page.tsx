"use client";

import { 
  ContactForm, 
  ContactInfo,
  Faq,
  Map, 
} from "@/components/pages/contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslations } from "@/hooks/useTranslations";

// Separate component for the main content to allow for Suspense boundary
function ContactContent() {
  const { PageViewTracker } = useAnalytics();
  // Translation hook is available when needed but we're not destructuring variables
  // since translations are handled within child components
  useTranslations('contact');
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add PageViewTracker to handle page view analytics */}
      <PageViewTracker />
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
        <Faq />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

// Loading fallback component
function ContactLoading() {
  const { t } = useTranslations('contact');
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">{t('page.loading', { defaultValue: 'Loading contact page...' })}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactContent />
    </Suspense>
  );
}
