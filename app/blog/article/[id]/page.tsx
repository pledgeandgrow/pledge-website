import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
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
                {article.author.avatar ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={20} className="text-primary" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-200">{article.author.name}</p>
                  <p className="text-sm">{article.author.role}</p>
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
          <div className="max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image 
                src={article.image} 
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
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
            
            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-16">
              <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Share2 size={16} />
                Share this article
              </span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Button>
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
