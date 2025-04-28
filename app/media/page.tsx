import type { Metadata } from 'next';
import { 
  MediaHero, 
  SocialMediaSection,
  TVAppearancesSection,
  PodcastsSection,
  DigitalPresenceSection,
  MediaCTA
} from '@/components/pages/media';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Media Center | Pledge & Grow',
  description: 'Access press releases, media coverage, brand resources, and media contact information for Pledge & Grow.',
  openGraph: {
    title: 'Media Center | Pledge & Grow',
    description: 'Access press releases, media coverage, brand resources, and media contact information for Pledge & Grow.',
    url: 'https://pledgeandgrow.com/media',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <MediaHero />
        <SocialMediaSection />
        <TVAppearancesSection />
        <PodcastsSection />
        <DigitalPresenceSection />
        <MediaCTA />
      </main>
      <Footer />
    </>
  );
}
