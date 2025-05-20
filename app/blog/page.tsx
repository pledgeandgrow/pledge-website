import type { Metadata } from 'next';
import { 
  BlogFeatured,
  BlogNewsletter,
  BlogList
} from '@/components/pages/blog';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Blog | Pledge & Grow',
  description: 'Insights, trends, and expert perspectives on digital transformation, technology innovation, and sustainable business growth.',
  openGraph: {
    title: 'Blog | Pledge & Grow',
    description: 'Insights, trends, and expert perspectives on digital transformation, technology innovation, and sustainable business growth.',
    url: 'https://pledgeandgrow.com/blog',
    siteName: 'Pledge & Grow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16">
        <BlogFeatured />
        <BlogList />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  );
}
