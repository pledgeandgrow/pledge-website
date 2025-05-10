import type { Metadata } from 'next';
import { 
  HelpCenterHero, 
  Documentation, 
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
        <HelpCenterHero />
        <Documentation />
        <FAQs />
        <ContactSupport />
      </main>
      <Footer />
    </>
  );
}
