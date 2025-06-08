'use client';

import { useRouter } from 'next/navigation';
import { useTranslation as useTranslationOriginal } from 'next-i18next';
import { useEffect, useState } from 'react';

// English articles
import article1En from '../locales/en/blog/article-1.json';
import article2En from '../locales/en/blog/article-2.json';
import article3En from '../locales/en/blog/article-3.json';

// French articles - imported from locales
import article1Fr from '../locales/fr/blog/article-1.json';
import article2Fr from '../locales/fr/blog/article-2.json';
import article3Fr from '../locales/fr/blog/article-3.json';

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

// Define articles by language
const articlesByLanguage = {
  en: [
    article1En as Article,
    article2En as Article,
    article3En as Article
  ],
  fr: [
    article1Fr as Article,
    article2Fr as Article,
    article3Fr as Article
  ]
};

// Helper function to get the current language
export const useCurrentLanguage = () => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Check for language in cookie
    const cookieLocale = typeof window !== 'undefined' ? window.document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] : null;
      
    if (cookieLocale) {
      setLanguage(cookieLocale);
    } else {
      // Fallback to i18n if available
      const { i18n } = useTranslationOriginal();
      if (i18n?.language) {
        setLanguage(i18n.language);
      }
    }
  }, []);
  
  return language;
};

// Get articles in the current language
export const useArticles = (): Article[] => {
  const [articles, setArticles] = useState<Article[]>(articlesByLanguage.en);
  const currentLanguage = useCurrentLanguage();
  
  useEffect(() => {
    const lang = currentLanguage.substring(0, 2); // Get just the language code (en, fr)
    setArticles(articlesByLanguage[lang as keyof typeof articlesByLanguage] || articlesByLanguage.en);
  }, [currentLanguage]);
  
  return articles;
};

// Get featured articles in the current language
export const useFeaturedArticles = (): Article[] => {
  const articles = useArticles();
  return articles.filter(article => article.featured);
};

// Get article by ID in the current language
export const useArticleById = (id: string): Article | undefined => {
  const articles = useArticles();
  return articles.find(article => article.id === id);
};

// Get article by slug in the current language
export const useArticleBySlug = (slug: string): Article | undefined => {
  const articles = useArticles();
  return articles.find(article => article.slug === slug);
};

// Get related articles in the current language
export const useRelatedArticles = (currentArticleId: string, category?: string, limit: number = 3): Article[] => {
  const articles = useArticles();
  return articles
    .filter(article => article.id !== currentArticleId)
    .filter(article => category ? article.category === category : true)
    .slice(0, limit);
};

// Get all categories in the current language
export const useAllCategories = (): string[] => {
  const articles = useArticles();
  const categories = new Set<string>();
  articles.forEach(article => categories.add(article.category));
  return Array.from(categories);
};

// Get all tags in the current language
export const useAllTags = (): string[] => {
  const articles = useArticles();
  const tags = new Set<string>();
  articles.forEach(article => article.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
};

// Get articles by category in the current language
export const useArticlesByCategory = (category: string): Article[] => {
  const articles = useArticles();
  return articles.filter(article => article.category === category);
};

// Get articles by tag in the current language
export const useArticlesByTag = (tag: string): Article[] => {
  const articles = useArticles();
  return articles.filter(article => article.tags.includes(tag));
};

// Search articles in the current language
export const useSearchArticles = (query: string): Article[] => {
  const articles = useArticles();
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) || 
    article.excerpt.toLowerCase().includes(lowercaseQuery) || 
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    article.category.toLowerCase().includes(lowercaseQuery)
  );
};

// For backward compatibility
export const getArticles = (): Article[] => {
  return articlesByLanguage.en;
};

export const articles = articlesByLanguage.en;
export const featuredArticles = articles.filter(article => article.featured);

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentArticleId: string, category?: string, limit: number = 3): Article[] => {
  return articles
    .filter(article => article.id !== currentArticleId)
    .filter(article => category ? article.category === category : true)
    .slice(0, limit);
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  articles.forEach(article => categories.add(article.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  articles.forEach(article => article.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => article.tags.includes(tag));
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) || 
    article.excerpt.toLowerCase().includes(lowercaseQuery) || 
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    article.category.toLowerCase().includes(lowercaseQuery)
  );
};

export default articles;
