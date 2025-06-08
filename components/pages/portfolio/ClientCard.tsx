"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ClientModal, ClientProject } from "@/components/ui/client-modal";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface ClientCardProps {
  project: ClientProject;
}

export default function ClientCard({ project }: ClientCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslations('portfolio');
  // Get translations for tag labels
  const tagLabels = {
    deliverables: t('tags.deliverables', { fallback: 'Deliverables' }),
    technologies: t('tags.technologies', { fallback: 'Technologies' })
  };

  // Get translated content for this specific project with fallbacks
  const projectName = t(`projects.${project.id}.name`, { fallback: project.name });
  const projectDescription = t(`projects.${project.id}.description`, { fallback: project.description });
  const projectIndustry = t(`projects.${project.id}.industry`, { fallback: project.industry });
  
  // Use direct values for technologies and deliverables
  const technologies = useMemo(() => {
    try {
      if (!project.methodology || !Array.isArray(project.methodology.technologies)) {
        return [];
      }
      
      return project.methodology.technologies;
    } catch (error) {
      console.error(`Error processing technologies for project ${project.id}:`, error);
      return [];
    }
  }, [project.methodology, project.id]);
  
  // Use direct values for deliverables
  const deliverables = useMemo(() => {
    try {
      if (!Array.isArray(project.deliverables)) {
        return [];
      }
      
      return project.deliverables;
    } catch (error) {
      console.error(`Error processing deliverables for project ${project.id}:`, error);
      return [];
    }
  }, [project.deliverables, project.id]);

  return (
    <>
      <div className="bg-card dark:bg-card border border-border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group">
        {/* Gradient top bar with increased height and animation */}
        <div className="h-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 group-hover:from-primary/90 group-hover:to-primary transition-all duration-500"></div>
        
        <div className="p-6">
          {/* Header with year */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{projectName}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary/60"></span>
                {projectIndustry}
              </p>
            </div>
            <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
              {project.year}
            </span>
          </div>
          
          {/* Description with improved line clamping */}
          <p className="text-muted-foreground mb-5 line-clamp-3 group-hover:text-foreground/90 transition-colors duration-300">
            {projectDescription}
          </p>
          
          {/* Tags section with categories */}
          <div className="space-y-3 mb-5">
            {/* Deliverable tags */}
            {deliverables.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">{tagLabels.deliverables}</p>
                <div className="flex flex-wrap gap-2">
                  {deliverables.slice(0, 2).map((deliverable: string, index: number) => (
                    <span 
                      key={index} 
                      className="inline-block bg-secondary/30 text-secondary-foreground text-xs px-3 py-1 rounded-full border border-secondary/20 group-hover:border-secondary/40 transition-all duration-300"
                    >
                      {deliverable}
                    </span>
                  ))}
                  {deliverables.length > 2 && (
                    <span className="inline-block bg-secondary/10 text-secondary-foreground text-xs px-3 py-1 rounded-full border border-secondary/20">
                      +{deliverables.length - 2} {t('more')}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* Technology tags */}
            {technologies.length > 0 && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">{tagLabels.technologies}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 3).map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className="inline-block bg-muted/70 text-foreground/80 text-xs px-3 py-1 rounded-full border border-border/30 group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 3 && (
                    <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full border border-primary/20">
                      +{technologies.length - 3} {t('more')}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Button with enhanced hover effect */}
          <Button 
            onClick={() => setIsModalOpen(true)} 
            variant="default" 
            className="w-full flex items-center justify-center gap-2 transition-all duration-300 bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow group-hover:shadow-md"
          >
            {t('viewDetails')}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      <ClientModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
