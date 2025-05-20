import article1 from './articles/article-1.json';
import article2 from './articles/article-2.json';
import article3 from './articles/article-3.json';

export interface Author {
  name: string;
  role: string;
  avatar: string;
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

export const articles: Article[] = [
  article1 as Article,
  article2 as Article,
  article3 as Article
];

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
  const searchTerm = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) || 
    article.excerpt.toLowerCase().includes(searchTerm) || 
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export default articles;
