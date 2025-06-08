import type { Metadata } from 'next';
import { SitePlanList } from '@/components/pages/site-plan';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Site Plan | Pledge & Grow',
  description: 'Complete overview of all pages available on the Pledge & Grow website to help you navigate our digital presence.',
  keywords: 'site plan, website map, navigation, Pledge & Grow pages, digital agency site plan',
  openGraph: {
    title: 'Site Plan | Pledge & Grow',
    description: 'Complete overview of all pages available on the Pledge & Grow website to help you navigate our digital presence.',
    url: 'https://pledgeandgrow.com/site-plan',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SitePlanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <SitePlanList />
      </main>
      <Footer />
    </>
  );
}
