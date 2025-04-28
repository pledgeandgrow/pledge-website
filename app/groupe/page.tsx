import type { Metadata } from 'next';
import { 
  GroupeHero, 
  GroupeOverview,
  CompanyShowcase,
  GroupePartners,
  GroupeCTA
} from '@/components/pages/groupe';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Groupe | Pledge & Grow',
  description: 'Learn about the Pledge & Grow group, our companies, partnerships, and global ecosystem.',
  openGraph: {
    title: 'Groupe | Pledge & Grow',
    description: 'Learn about the Pledge & Grow group, our companies, partnerships, and global ecosystem.',
    url: 'https://pledgeandgrow.com/groupe',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function GroupePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <GroupeHero />
        <GroupeOverview />
        <CompanyShowcase />
        <GroupePartners />
        <GroupeCTA />
      </main>
      <Footer />
    </>
  );
}
