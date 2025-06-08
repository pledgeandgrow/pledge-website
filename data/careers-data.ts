import { useTranslations } from '@/hooks/useTranslations';

// Job position interface matching the structure in careers.json
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
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

/**
 * Hook to get translated job positions from careers.json
 * @returns Array of translated job positions
 */
export function useTranslatedJobPositions(): JobPosition[] {
  const { t } = useTranslations('careers');
  
  try {
    // Get positions object from careers.json
    const positions = t('positions', { returnObjects: true, fallback: {} }) as Record<string, any>;
    
    console.log('Positions object:', positions);
    console.log('Position keys in careers.json:', Object.keys(positions));
    
    if (!positions || typeof positions !== 'object') {
      console.error('Invalid positions data structure in careers.json');
      return [];
    }
    
    // Create an array of job positions from the positions object
    const jobPositions: JobPosition[] = [];
    
    // Process each position entry
    Object.entries(positions).forEach(([id, position]: [string, any]) => {
      if (!position || typeof position !== 'object') {
        console.error(`Invalid position data for ID: ${id}`);
        return; // Skip this entry
      }
      
      console.log(`Processing position ${id}:`, {
        title: position.title,
        department: position.department,
        employmentType: position.employmentType
      });
      
      // Create a valid JobPosition object with fallbacks for all fields
      jobPositions.push({
        id,
        title: position.title || '',
        department: position.department || '',
        location: position.location || '',
        locationType: (position.locationType as "Remote" | "Hybrid" | "On-site") || 'Remote',
        employmentType: (position.employmentType as "Full-time" | "Part-time" | "Contract" | "Internship") || 'Full-time',
        description: position.description || '',
        postedDate: position.postedDate || new Date().toISOString().split('T')[0],
        overview: position.overview || '',
        responsibilities: Array.isArray(position.responsibilities) ? position.responsibilities : [],
        requirements: Array.isArray(position.requirements) ? position.requirements : [],
        benefits: Array.isArray(position.benefits) ? position.benefits : [],
        applicationProcess: position.applicationProcess || '',
        salary: position.salary || '',
        skills: Array.isArray(position.skills) ? position.skills : [],
        reportingTo: position.reportingTo || '',
        startDate: position.startDate || ''
      });
    });
      
    return jobPositions;
  } catch (error) {
    console.error('Error processing career data:', error);
    return [];
  }
}

/**
 * Hook to get a specific job position by ID
 * @returns Function to get a job position by ID
 */
export function useTranslatedJobDetails() {
  const { t } = useTranslations('careers');
  const allPositions = useTranslatedJobPositions();
  
  return (id: string): JobPosition | undefined => {
    try {
      console.log(`Looking for job position with ID: ${id}`);
      
      // First try to find the position in our already processed positions
      const foundPosition = allPositions.find(position => position.id === id);
      if (foundPosition) {
        console.log(`Found position ${id} in cached positions`);
        return foundPosition;
      }
      
      // If not found, try to get it directly from translations
      const positions = t('positions', { returnObjects: true, fallback: {} }) as Record<string, any>;
      const position = positions[id];
      
      console.log(`Direct lookup for position ${id}:`, position ? 'Found' : 'Not found');
      
      if (!position || typeof position !== 'object' || !('title' in position)) {
        console.error(`Job position with ID ${id} not found or invalid`);
        return undefined;
      }
      
      // Create a valid JobPosition object with fallbacks for all fields
      const jobPosition: JobPosition = {
        id,
        title: position.title || '',
        department: position.department || '',
        location: position.location || '',
        locationType: (position.locationType as "Remote" | "Hybrid" | "On-site") || 'Remote',
        employmentType: (position.employmentType as "Full-time" | "Part-time" | "Contract" | "Internship") || 'Full-time',
        description: position.description || '',
        postedDate: position.postedDate || new Date().toISOString().split('T')[0],
        overview: position.overview || '',
        responsibilities: Array.isArray(position.responsibilities) ? position.responsibilities : [],
        requirements: Array.isArray(position.requirements) ? position.requirements : [],
        benefits: Array.isArray(position.benefits) ? position.benefits : [],
        applicationProcess: position.applicationProcess || '',
        salary: position.salary || '',
        skills: Array.isArray(position.skills) ? position.skills : [],
        reportingTo: position.reportingTo || '',
        startDate: position.startDate || ''
      };
      
      return jobPosition;
    } catch (error) {
      console.error(`Error getting job details for ID ${id}:`, error);
      return undefined;
    }
  };
}
