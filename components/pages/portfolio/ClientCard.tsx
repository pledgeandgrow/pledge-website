"use client";

import { useState } from "react";
import Image from "next/image";
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
          <Image 
            src={project.logo} 
            alt={project.name} 
            width={200} 
            height={100} 
            className="max-h-32 w-auto object-contain" 
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.industry}</p>
            </div>
            <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded">
              {project.year}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.methodology.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.methodology.technologies.length > 3 && (
              <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                +{project.methodology.technologies.length - 3}
              </span>
            )}
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)} 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
          >
            View Project Details
            <ArrowRight className="h-4 w-4" />
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
