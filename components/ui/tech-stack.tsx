"use client";

import React from "react";
import * as SiIcons from "react-icons/si";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Type for the icons from react-icons/si
type SiIconType = keyof typeof SiIcons;

export interface TechItem {
  name: string;
  icon: SiIconType;
  color?: string;
}

interface TechStackProps {
  technologies: TechItem[];
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
}

export function TechStack({
  technologies,
  size = "md",
  showLabels = false,
  className,
}: TechStackProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex flex-wrap gap-4 items-center", className)}>
      {technologies.map((tech) => {
        const IconComponent = SiIcons[tech.icon];
        
        return (
          <TooltipProvider key={tech.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-muted/50 p-3 rounded-lg flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent
                        className={cn(
                          sizeClasses[size],
                          tech.color || "text-foreground"
                        )}
                      />
                    )}
                  </div>
                  {showLabels && (
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}

// Predefined technology stacks
export const frontendTechnologies: TechItem[] = [
  { name: "React", icon: "SiReact", color: "text-blue-400" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-500" },
  { name: "Framer Motion", icon: "SiFramer" }
];

export const backendTechnologies: TechItem[] = [
  { name: "Node.js", icon: "SiNodedotjs", color: "text-green-600" },
  { name: "Python", icon: "SiPython", color: "text-blue-500" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-700" },
  { name: "Supabase", icon: "SiSupabase", color: "text-emerald-600" },
  { name: "GraphQL", icon: "SiGraphql", color: "text-pink-600" }
];

export const cloudTechnologies: TechItem[] = [
  { name: "AWS", icon: "SiAmazon", color: "text-orange-500" },
  { name: "Vercel", icon: "SiVercel" },
  { name: "Docker", icon: "SiDocker", color: "text-blue-500" },
  { name: "GitHub", icon: "SiGithub" },
  { name: "Netlify", icon: "SiNetlify", color: "text-teal-500" }
];

export const mobileTechnologies: TechItem[] = [
  { name: "React Native", icon: "SiReact", color: "text-blue-400" },
  { name: "iOS", icon: "SiIos", color: "text-gray-500" },
  { name: "Android", icon: "SiAndroid", color: "text-green-500" },
  { name: "Expo", icon: "SiExpo" },
  { name: "Firebase", icon: "SiFirebase", color: "text-yellow-500" }
];
