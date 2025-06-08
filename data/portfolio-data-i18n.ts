'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { ClientProject } from "@/components/ui/client-modal";
import { useTranslations } from "@/hooks/useTranslations";
import { getCookie } from "cookies-next";

// This file replaces portfolio-data.ts by loading project data from translation files

// Helper function to get the current language
export const useCurrentLanguage = () => {
  // Use a ref to track if this is the first render
  const isFirstRender = useRef(true);
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Only run this effect once to prevent infinite loops
    if (isFirstRender.current) {
      isFirstRender.current = false;
      
      // Check for language in cookie
      const cookieLocale = typeof window !== 'undefined' ? getCookie('NEXT_LOCALE') : null;
        
      if (cookieLocale && typeof cookieLocale === 'string') {
        setLanguage(cookieLocale);
      } else {
        // Fallback to browser language
        if (typeof navigator !== 'undefined') {
          const browserLang = navigator.language.split('-')[0];
          if (browserLang === 'fr') {
            setLanguage('fr');
          }
        }
      }
    }
  }, []);
  
  return language;
};

// Hook to get all portfolio projects based on current language
export const useProjects = (): ClientProject[] => {
  const language = useCurrentLanguage();
  const { t } = useTranslations('portfolio');
  
  // Return projects based on language
  return useMemo(() => {
    try {
      // Get all translation data first to inspect structure
      const allTranslations = t('', { returnObjects: true }) as Record<string, any>;
      
      // Check if projects key exists and is an object
      let projectsData: Record<string, any> | null = null;
      
      if (allTranslations && typeof allTranslations === 'object' && allTranslations.projects && typeof allTranslations.projects === 'object') {
        projectsData = allTranslations.projects;
      } else {
        // Try direct access as fallback
        try {
          projectsData = t('projects', { returnObjects: true }) as Record<string, any>;
        } catch (e) {
          console.warn('Could not find projects in translation file');
          return [];
        }
      }
      
      if (projectsData && typeof projectsData === 'object') {
        // Convert object to array of projects
        return Object.entries(projectsData)
          .filter(([_, data]) => data && typeof data === 'object') // Filter out invalid entries
          .map(([id, data]: [string, any]) => {
            // Ensure methodology and outcome objects exist and have proper structure
            const methodology = data.methodology || {};
            const outcome = data.outcome || {};
            const testimonial = outcome.testimonial || {};
            
            return {
              id: data.id || id, // Use the provided ID or the object key
              name: data.name || '',
              logo: data.logo || '',
              description: data.description || '',
              industry: data.industry || '',
              year: typeof data.year === 'number' ? data.year : 
                    typeof data.year === 'string' ? parseInt(data.year) : 
                    new Date().getFullYear(),
              deliverables: Array.isArray(data.deliverables) ? data.deliverables : [],
              needs: Array.isArray(data.needs) ? data.needs : [],
              methodology: {
                approach: methodology.approach || '',
                technologies: Array.isArray(methodology.technologies) ? methodology.technologies : [],
                languages: Array.isArray(methodology.languages) ? methodology.languages : [],
                frameworks: Array.isArray(methodology.frameworks) ? methodology.frameworks : [],
                libraries: Array.isArray(methodology.libraries) ? methodology.libraries : [],
                apis: Array.isArray(methodology.apis) ? methodology.apis : []
              },
              outcome: {
                statistics: Array.isArray(outcome.statistics) ? outcome.statistics : [],
                benefits: Array.isArray(outcome.benefits) ? outcome.benefits : [],
                improvements: Array.isArray(outcome.improvements) ? outcome.improvements : [],
                testimonial: testimonial && (testimonial.quote || testimonial.author) ? {
                  quote: testimonial.quote || '',
                  author: testimonial.author || '',
                  position: testimonial.position || ''
                } : undefined
              }
            } as ClientProject;
          });
      } else {
        console.warn('No portfolio projects found in translation file');
        return [];
      }
    } catch (error) {
      console.error('Error loading portfolio projects:', error);
      return [];
    }
  }, [t, language]); // Depend on t and language to update when language changes
};

// Hook to get all unique industries from portfolio projects
export const useAllIndustries = (): string[] => {
  const projects = useProjects();
  
  if (!projects || projects.length === 0) {
    return ["all"];
  }
  
  // Filter out any undefined or empty industries
  const validIndustries = projects
    .filter(project => project && project.industry)
    .map(project => project.industry);
  
  // Create a set of unique industries
  const uniqueIndustries = [...new Set(validIndustries)];
  return ["all", ...uniqueIndustries];
};

// Hook to get all unique years from portfolio projects
export const useAllYears = (): string[] => {
  const projects = useProjects();
  
  if (!projects || projects.length === 0) {
    return ["all"];
  }
  
  // Filter out any undefined or empty years
  const validYears = projects
    .filter(project => project && project.year)
    .map(project => project.year.toString());
  
  // Create a set of unique years and sort them in descending order
  const uniqueYears = [...new Set(validYears)];
  return ["all", ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
};

// Hook to filter projects by search query, industry, and year
export const useFilteredProjects = (
  searchQuery: string,
  industryFilter: string,
  yearFilter: string
): ClientProject[] => {
  const projects = useProjects();
  
  return projects.filter((project: ClientProject) => {
    const matchesSearch = searchQuery === "" || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesIndustry = industryFilter === "all" || project.industry === industryFilter;
    const matchesYear = yearFilter === "all" || project.year.toString() === yearFilter;
    
    return matchesSearch && matchesIndustry && matchesYear;
  });
};

// Hook to get a single project by ID
export const useProjectById = (id: string): ClientProject | undefined => {
  const projects = useProjects();
  return projects.find((project: ClientProject) => project.id === id);
};

// Hook to get projects by industry
export const useProjectsByIndustry = (industry: string): ClientProject[] => {
  const projects = useProjects();
  return industry === 'all' ? projects : projects.filter((project: ClientProject) => project.industry === industry);
};

// Hook to get projects by year
export const useProjectsByYear = (year: string): ClientProject[] => {
  const projects = useProjects();
  return year === 'all' ? projects : projects.filter((project: ClientProject) => project.year.toString() === year);
};

// Hook to search projects
export const useSearchProjects = (query: string): ClientProject[] => {
  const projects = useProjects();
  if (!query) return projects;
  
  const lowerQuery = query.toLowerCase();
  return projects.filter((project: ClientProject) => 
    project.name.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.industry.toLowerCase().includes(lowerQuery) ||
    project.methodology.technologies.some((tech: string) => tech.toLowerCase().includes(lowerQuery))
  );
};

// For backward compatibility - empty array as placeholder
// WARNING: This should not be used directly, use the hooks instead
export const projects = [] as ClientProject[];

// NOTE: The following functions are NOT React hooks and should NOT be used in React components
// They are provided only for backward compatibility with non-React code
// For React components, use the corresponding hooks above (useProjectById, useProjectsByIndustry, etc.)

// These functions will throw errors if used in React components because they call hooks internally
// They should only be used in non-React contexts or during SSR
export const getProjectById = (id: string): ClientProject | undefined => {
  console.warn('getProjectById is deprecated - use useProjectById hook instead');
  // This is not ideal but maintains backward compatibility for non-React code
  try {
    // This will work during SSR but will fail in React components
    const { t } = useTranslations('portfolio');
    const projectsData = t('projects', { returnObjects: true }) as Record<string, any>;
    if (projectsData && typeof projectsData === 'object' && projectsData[id]) {
      return projectsData[id] as unknown as ClientProject;
    }
    return undefined;
  } catch (error) {
    console.error('Error in getProjectById:', error);
    return undefined;
  }
};

// For backward compatibility with non-React code
export const getProjectsByIndustry = (industry: string): ClientProject[] => {
  console.warn('getProjectsByIndustry is deprecated - use useProjectsByIndustry hook instead');
  return [];
};

export const getProjectsByYear = (year: string): ClientProject[] => {
  console.warn('getProjectsByYear is deprecated - use useProjectsByYear hook instead');
  return [];
};

export const getAllIndustries = (): string[] => {
  console.warn('getAllIndustries is deprecated - use useAllIndustries hook instead');
  return ['all'];
};

export const getAllYears = (): string[] => {
  console.warn('getAllYears is deprecated - use useAllYears hook instead');
  return ['all'];
};

export const searchProjects = (query: string): ClientProject[] => {
  console.warn('searchProjects is deprecated - use useSearchProjects hook instead');
  return [];
};

export default projects;
