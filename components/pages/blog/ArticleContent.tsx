'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogNewsletter } from '@/components/pages/blog';
import RelatedArticles from '@/components/pages/blog/RelatedArticles';
import { useArticleById, useRelatedArticles } from '@/data/blog-data-i18n';
import { useTranslations } from '@/hooks/useTranslations';

interface ArticleContentProps {
  id: string;
}

export default function ArticleContent({ id }: ArticleContentProps) {
  const { t } = useTranslations('blog');
  const article = useArticleById(id);
  // Get related articles for the current article
  const relatedArticles = useRelatedArticles(id, article?.category, 3);
  
  if (!article) {
    // Redirect to 404 page if article not found
    notFound();
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold">{t('articleNotFound')}</h1>
            <p className="mt-4">{t('articleNotFoundDesc')}</p>
            <Link href="/blog" className="mt-6 inline-block">
              <Button variant="default" className="mt-4">
                {t('backToBlog')}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Back to blog button */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {t('backToBlog')}
            </Button>
          </Link>
        </div>
        
        {/* Article header */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{t('author')}: {article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{t('readTime', { time: article.readTime, defaultValue: '{{time}} min read' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('publishedOn')}: {article.date}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{t('tags')}:</span>
                {article.tags.map((tag) => (
                  <Link href={`/blog?tag=${tag}`} key={tag}>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
        
        {/* Tags */}
        <div className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link href={`/blog?tag=${tag}`} key={tag}>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Related articles */}
        <RelatedArticles articles={relatedArticles} currentArticleId={id} category={article?.category} />
        
        {/* Newsletter */}
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  );
}
