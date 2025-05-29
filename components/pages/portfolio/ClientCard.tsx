"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClientModal, ClientProject } from "@/components/ui/client-modal";
import { ArrowRight } from "lucide-react";

interface ClientCardProps {
  project: ClientProject;
}

export default function ClientCard({ project }: ClientCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-card dark:bg-card border border-border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
        <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:opacity-80 transition-opacity duration-300">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.industry}</p>
            </div>
            <span className="text-sm font-medium bg-muted text-foreground px-3 py-1 rounded-full border border-muted-foreground/20">
              {project.year}
            </span>
          </div>
          <p className="text-muted-foreground mb-5 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.methodology.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.methodology.technologies.length > 3 && (
              <span className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                +{project.methodology.technologies.length - 3}
              </span>
            )}
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)} 
            variant="default" 
            className="w-full flex items-center justify-center gap-2 transition-all duration-300 bg-foreground text-background hover:bg-foreground/90"
          >
            View Project Details
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
