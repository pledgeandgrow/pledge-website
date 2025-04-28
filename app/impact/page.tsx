import type { Metadata } from 'next';
import { 
  ImpactHero, 
  ImpactMission, 
  ProBonoInitiatives, 
  ImpactMetrics, 
  SustainablePractices, 
  ImpactCTA
} from '@/components/pages/impact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Our Impact | Pledge & Grow',
  description: 'Learn about Pledge & Grow\'s commitment to social responsibility, sustainability, and making a positive impact through technology.',
  openGraph: {
    title: 'Our Impact | Pledge & Grow',
    description: 'Learn about Pledge & Grow\'s commitment to social responsibility, sustainability, and making a positive impact through technology.',
    url: 'https://pledgeandgrow.com/impact',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <ImpactHero />
        <ImpactMission />
        <ProBonoInitiatives />
        <ImpactMetrics />
        <SustainablePractices />
        <ImpactCTA />
      </main>
      <Footer />
    </>
  );
}
