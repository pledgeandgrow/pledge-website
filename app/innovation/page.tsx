import type { Metadata } from 'next';
import { 
  InnovationApproach, 
  TechnologyRadar,
  InternalProjects,
  InnovationCTA
} from '@/components/pages/innovation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Innovation | Pledge & Grow',
  description: 'Explore Pledge & Grow\'s innovation initiatives, research projects, and cutting-edge technology solutions.',
  openGraph: {
    title: 'Innovation | Pledge & Grow',
    description: 'Explore Pledge & Grow\'s innovation initiatives, research projects, and cutting-edge technology solutions.',
    url: 'https://pledgeandgrow.com/innovation',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function InnovationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <InnovationApproach />
        <TechnologyRadar />
        <InternalProjects />
        <InnovationCTA />
      </main>
      <Footer />
    </>
  );
}
