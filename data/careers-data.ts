import { useTranslations } from '@/hooks/useTranslations';

// Job position interface
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site" | "À distance" | "Hybride" | "Sur site";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Temps plein" | "Temps partiel" | "Contrat" | "Stage";
  description: string;
  postedDate: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationProcess: string;
  salary?: string;
  skills: string[];
  reportingTo?: string;
  startDate?: string;
}

// Job IDs that we know exist in the translations
// These must match exactly the keys in the positions object in careers.json
const jobIds = ["cso", "marketing-intern", "it-intern", "salesman"];

/**
 * Hook to get job positions with translations applied
 * @returns Array of job positions
 */
export function useTranslatedJobPositions(): JobPosition[] {
  const { t } = useTranslations('careers');
  
  try {
    // Create an array to store all job positions
    const positions: JobPosition[] = [];
    
    // Get all positions from translations directly
    const allPositions = t('positions', { returnObjects: true, fallback: {} });
    
    // If we have hardcoded IDs, use those to ensure we only get valid positions
    if (jobIds && jobIds.length > 0) {
      // Process each job ID
      jobIds.forEach(id => {
        try {
          // Get position data from translations
          const position = allPositions[id];
          
          if (!position || typeof position !== 'object') {
            return;
          }
          
          // Create a job position with data from translations
          const jobPosition: JobPosition = {
            id,
            title: position.title || id,
            department: position.department || '',
            location: position.location || '',
            locationType: position.locationType || 'Remote',
            employmentType: position.employmentType || 'Full-time',
            description: position.description || '',
            postedDate: position.postedDate || new Date().toISOString().split('T')[0],
            overview: position.overview || '',
            responsibilities: Array.isArray(position.responsibilities) ? position.responsibilities : [],
            requirements: Array.isArray(position.requirements) ? position.requirements : [],
            benefits: Array.isArray(position.benefits) ? position.benefits : [],
            applicationProcess: position.applicationProcess || '',
            salary: position.salary,
            skills: Array.isArray(position.skills) ? position.skills : [],
            reportingTo: position.reportingTo,
            startDate: position.startDate
          };
          
          positions.push(jobPosition);
        } catch {
          // Silent error handling
        }
      });
    }
    
    return positions;
  } catch {
    return [];
  }
}

/**
 * Hook to get a specific job position by ID
 * @returns Function to get a job position by ID
 */
export function useTranslatedJobDetails() {
  const { t } = useTranslations('careers');
  
  return (id: string): JobPosition | undefined => {
    if (!id) return undefined;
    
    try {
      // Normalize the ID to ensure consistent matching
      const normalizedId = String(id).trim();
      
      // Get all positions from translations directly
      const allPositions = t('positions', { returnObjects: true, fallback: {} });
      
      // Get position data from translations
      const position = allPositions[normalizedId];
      
      if (!position || typeof position !== 'object') {
        // Try to find the position by ID in our known job IDs
        if (jobIds.includes(normalizedId)) {
          // If the ID is valid but data is missing, create a minimal job position
          return {
            id: normalizedId,
            title: normalizedId,
            department: '',
            location: '',
            locationType: 'Remote',
            employmentType: 'Full-time',
            description: '',
            postedDate: new Date().toISOString().split('T')[0],
            overview: '',
            responsibilities: [],
            requirements: [],
            benefits: [],
            applicationProcess: '',
            skills: [],
            reportingTo: undefined,
            startDate: undefined,
            salary: undefined
          };
        }
        return undefined;
      }
      
      // Create a job position with data from translations
      const jobPosition: JobPosition = {
        id: normalizedId,
        title: position.title || normalizedId,
        department: position.department || '',
        location: position.location || '',
        locationType: position.locationType || 'Remote',
        employmentType: position.employmentType || 'Full-time',
        description: position.description || '',
        postedDate: position.postedDate || new Date().toISOString().split('T')[0],
        overview: position.overview || '',
        responsibilities: Array.isArray(position.responsibilities) ? position.responsibilities : [],
        requirements: Array.isArray(position.requirements) ? position.requirements : [],
        benefits: Array.isArray(position.benefits) ? position.benefits : [],
        applicationProcess: position.applicationProcess || '',
        salary: position.salary,
        skills: Array.isArray(position.skills) ? position.skills : [],
        reportingTo: position.reportingTo,
        startDate: position.startDate
      };
      
      return jobPosition;
    } catch {
      return undefined;
    }
  };
}
