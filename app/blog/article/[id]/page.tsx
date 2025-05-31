import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogNewsletter } from '@/components/pages/blog';
import RelatedArticles from '@/components/pages/blog/RelatedArticles';
import { Button } from '@/components/ui/button';
import { getArticleById } from '@/data/blog-data';

// Define the page params type
type ArticlePageParams = { id: string };

// Generate metadata for the page
export function generateMetadata({ params }: { params: ArticlePageParams }): Metadata {
  const article = getArticleById(params.id);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default function ArticlePage({ params }: { params: ArticlePageParams }) {
  const article = getArticleById(params.id);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Back to blog button */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2 mb-8">
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>
          
          {/* Article header */}
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <User size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-200">Nesrine CHTINI</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="w-full max-w-4xl mx-auto mb-8 px-4">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title}
                width={1000}
                height={562}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12 article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                '--article-p-margin': '1.5rem',
                '--article-h2-margin-top': '2.5rem',
                '--article-h2-margin-bottom': '1.5rem',
                '--article-h3-margin-top': '2rem',
                '--article-h3-margin-bottom': '1rem',
                '--article-list-margin': '1.5rem',
                '--article-list-item-margin': '0.5rem',
              } as React.CSSProperties}
            />
            
            {/* Tags */}
            <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <Tag size={16} className="text-gray-600 dark:text-gray-400" />
                {article.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            

          </div>
          
          {/* Newsletter */}
          <div className="max-w-4xl mx-auto">
            <RelatedArticles currentArticleId={params.id} category={article.category} />
            <BlogNewsletter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
