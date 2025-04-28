import type { Metadata } from 'next';
import { 
  ReferencesHero, 
  ReferencesList
} from '@/components/pages/references';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'References & Listings | Pledge & Grow',
  description: 'Websites, directories, and publications that feature or mention Pledge & Grow.',
  openGraph: {
    title: 'References & Listings | Pledge & Grow',
    description: 'Websites, directories, and publications that feature or mention Pledge & Grow.',
    url: 'https://pledgeandgrow.com/references',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ReferencesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <ReferencesHero />
        <ReferencesList />
      </main>
      <Footer />
    </>
  );
}
