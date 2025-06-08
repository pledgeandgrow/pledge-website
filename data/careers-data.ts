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
  
  // Get positions object from careers.json
  const positions = t('positions', { returnObjects: true }) || {};
  
  // Create an array of job positions from the positions object
  return Object.entries(positions).map(([id, position]: [string, any]) => {
    return {
      id,
      title: position.title || '',
      department: position.department || '',
      location: position.location || '',
      locationType: position.locationType || 'Remote',
      employmentType: position.employmentType || 'Full-time',
      description: position.description || '',
      postedDate: position.postedDate || new Date().toISOString().split('T')[0],
      overview: position.overview || '',
      responsibilities: position.responsibilities || [],
      requirements: position.requirements || [],
      benefits: position.benefits || [],
      applicationProcess: position.applicationProcess || '',
      salary: position.salary || '',
      skills: position.skills || [],
      reportingTo: position.reportingTo || '',
      startDate: position.startDate || ''
    };
  });
}

/**
 * Hook to get a specific job position by ID
 * @returns Function to get a job position by ID
 */
export function useTranslatedJobDetails() {
  const positions = useTranslatedJobPositions();
  
  // Return a function that takes a job ID and returns the job position
  return (id: string): JobPosition | undefined => {
    return positions.find(position => position.id === id);
  };
}
