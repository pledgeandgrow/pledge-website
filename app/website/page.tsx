import type { Metadata } from 'next';
import { 
  WebsiteHero, 
  WebsiteSpecifications, 
  WebsiteTarget, 
  WebsiteAdvantage 
} from '@/components/pages/website';

export const metadata: Metadata = {
  title: 'Website Development | Pledge & Grow',
  description: 'Professional website development services tailored to your business needs. We create custom, high-performance websites that deliver exceptional user experiences.',
  openGraph: {
    title: 'Website Development | Pledge & Grow',
    description: 'Professional website development services tailored to your business needs. We create custom, high-performance websites that deliver exceptional user experiences.',
    url: 'https://pledgeandgrow.com/website',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function WebsitePage() {
  return (
    <>
      <main className="flex-grow pt-16">
        <WebsiteHero />
        <WebsiteSpecifications />
        <WebsiteTarget />
        <WebsiteAdvantage />
      </main>
    </>
  );
}