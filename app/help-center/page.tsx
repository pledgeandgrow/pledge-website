import type { Metadata } from 'next';
import { Suspense } from 'react';
import { 
  FAQs, 
  ContactSupport
} from '@/components/pages/help-center';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Help Center | Pledge & Grow',
  description: 'Find documentation, tutorials, FAQs, and support resources for Pledge & Grow services.',
  openGraph: {
    title: 'Help Center | Pledge & Grow',
    description: 'Find documentation, tutorials, FAQs, and support resources for Pledge & Grow services.',
    url: 'https://pledgeandgrow.com/help-center',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HelpCenterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading support...</div>}>
          <ContactSupport />
        </Suspense>
        <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading FAQs...</div>}>
          <FAQs />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
