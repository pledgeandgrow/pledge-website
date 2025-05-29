"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export interface ServiceSpecifications {
  type: string;
  clients: string[];
  sectors: string[];
  recommendedFor: string[];
}

export interface ServiceTechnology {
  programs: string[];
  technologies: string[];
  languages: string[];
  frameworks: string[];
  libraries: string[];
}

export interface ServiceConditions {
  requirements: string[];
  deliverables: string[];
  timeline: string;
  support: string;
}

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  specifications: ServiceSpecifications;
  technology: ServiceTechnology;
  conditions: ServiceConditions;
}

export function ServiceModal({
  isOpen,
  onClose,
  title,
  specifications,
  technology,
  conditions,
}: ServiceModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription>
            Discover the details of our {title} service
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="specifications" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Spécifications</TabsTrigger>
            <TabsTrigger value="technology">Technologie</TabsTrigger>
            <TabsTrigger value="conditions">Conditions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Type de service</h3>
              <p className="text-muted-foreground">{specifications.type}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Clients idéaux</h3>
              <div className="flex flex-wrap gap-2">
                {specifications.clients.map((client, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {client}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Secteurs d&apos;activité</h3>
              <div className="flex flex-wrap gap-2">
                {specifications.sectors.map((sector, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Recommandé pour</h3>
              <ul className="space-y-2">
                {specifications.recommendedFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="technology" className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Programmes utilisés</h3>
              <div className="flex flex-wrap gap-2">
                {technology.programs.map((program, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {program}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technology.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Langages</h3>
              <div className="flex flex-wrap gap-2">
                {technology.languages.map((language, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {technology.frameworks.map((framework, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {framework}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Librairies</h3>
              <div className="flex flex-wrap gap-2">
                {technology.libraries.map((library, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {library}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="conditions" className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Prérequis</h3>
              <ul className="space-y-2">
                {conditions.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Livrables</h3>
              <ul className="space-y-2">
                {conditions.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Délai</h3>
              <p className="text-muted-foreground">{conditions.timeline}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Support et maintenance</h3>
              <p className="text-muted-foreground">{conditions.support}</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
