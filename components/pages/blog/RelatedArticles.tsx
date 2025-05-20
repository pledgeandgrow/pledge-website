import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getRelatedArticles } from '@/data/blog-data';

// Using the Article interface from data/blog-data.ts

interface RelatedArticlesProps {
  currentArticleId: string;
  category?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  currentArticleId,
  category
}) => {
  // Get related articles based on category and tags
  const relatedArticles = getRelatedArticles(currentArticleId, category, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Related Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <Link key={article.id} href={`/blog/article/${article.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
