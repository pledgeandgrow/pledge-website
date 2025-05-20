// Import expertise data from JSON files
import website from './expertise/website.json';
import saas from './expertise/saas.json';
import mobileApp from './expertise/mobile-app.json';

// Define interfaces for expertise data structure
export interface ExpertiseFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ExpertiseTechnology {
  name: string;
  logo?: string;
  description?: string;
}

export interface ExpertiseProcess {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ExpertiseFAQ {
  question: string;
  answer: string;
}

export interface ExpertiseBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ExpertiseCase {
  title: string;
  description: string;
  image: string;
  link?: string;
  client?: string;
  industry?: string;
}

export interface ExpertiseData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  category: 'Creation' | 'Integration' | 'Complementary';
  features: ExpertiseFeature[];
  technologies?: ExpertiseTechnology[];
  process?: ExpertiseProcess[];
  benefits: ExpertiseBenefit[];
  faqs?: ExpertiseFAQ[];
  casestudies?: ExpertiseCase[];
  relatedExpertise?: string[]; // Array of related expertise slugs
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

// Expertise data for each area
export const expertiseData: Record<string, ExpertiseData> = {
  'website': website as unknown as ExpertiseData,
  'saas': saas as unknown as ExpertiseData,
  'mobile-app': mobileApp as unknown as ExpertiseData
  // Add more expertise areas as they are created
};

// Helper functions to work with expertise data
export function getExpertiseBySlug(slug: string): ExpertiseData | undefined {
  return expertiseData[slug];
}

export function getExpertiseByCategory(category: 'Creation' | 'Integration' | 'Complementary'): ExpertiseData[] {
  return Object.values(expertiseData).filter(expertise => expertise.category === category);
}

export function getAllExpertise(): ExpertiseData[] {
  return Object.values(expertiseData);
}

export function getRelatedExpertise(currentSlug: string, limit: number = 3): ExpertiseData[] {
  const current = expertiseData[currentSlug];
  if (!current || !current.relatedExpertise) return [];
  
  return current.relatedExpertise
    .map(slug => expertiseData[slug])
    .filter(Boolean)
    .slice(0, limit);
}

export default expertiseData;
