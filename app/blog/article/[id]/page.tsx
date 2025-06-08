import type { Metadata } from 'next';
import ArticleContent from '@/components/pages/blog/ArticleContent';

// Define the page params type
type ArticlePageParams = { id: string };

// Generate static metadata for the page
export const metadata: Metadata = {
  title: 'Blog Article',
  description: 'Read our latest blog article',
};

export default function ArticlePage({ params }: { params: ArticlePageParams }) {
  // Client-side component will handle data fetching and rendering
  return <ArticleContent id={params.id} />;
}