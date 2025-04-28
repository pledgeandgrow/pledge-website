"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Briefcase } from "lucide-react";

export interface ClientProject {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  year: number;
  deliverables: string[];
  needs: string[];
  methodology: {
    approach: string;
    technologies: string[];
    languages: string[];
    frameworks: string[];
    libraries: string[];
    apis: string[];
  };
  outcome: {
    statistics: {
      label: string;
      value: string;
    }[];
    benefits: string[];
    improvements: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  };
}

interface ClientModalProps {
  project: ClientProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ClientModal({ project, isOpen, onClose }: ClientModalProps) {
  const [activeTab, setActiveTab] = useState("general");

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="h-8 w-auto" 
            />
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-base">
            {project.industry} • {project.year}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="methodology" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Methodology</span>
            </TabsTrigger>
            <TabsTrigger value="outcome" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Outcome</span>
            </TabsTrigger>
          </TabsList>

          {/* General Tab */}
          <TabsContent value="general" className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About the Project</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Client Needs</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.needs.map((need, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{need}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((deliverable, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10">
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Approach</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.methodology.approach}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.frameworks.map((framework, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.libraries.map((library, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {library}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {project.methodology.apis.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methodology.apis.map((api, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {api}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Outcome Tab */}
          <TabsContent value="outcome" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.outcome.statistics.map((stat, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Benefits</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.outcome.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Improvements</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.outcome.improvements.map((improvement, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{improvement}</li>
                ))}
              </ul>
            </div>
            
            {project.outcome.testimonial && (
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                  "{project.outcome.testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold">{project.outcome.testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.outcome.testimonial.position}</p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
