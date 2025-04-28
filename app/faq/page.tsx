import type { Metadata } from 'next';
import { 
  FAQHero, 
  FAQContent, 
  FAQContact
} from '@/components/pages/faq';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Pledge & Grow',
  description: 'Find answers to common questions about Pledge & Grow services, process, and policies.',
  openGraph: {
    title: 'Frequently Asked Questions | Pledge & Grow',
    description: 'Find answers to common questions about Pledge & Grow services, process, and policies.',
    url: 'https://pledgeandgrow.com/faq',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <FAQHero />
        <FAQContent />
        <FAQContact />
      </main>
      <Footer />
    </>
  );
}
