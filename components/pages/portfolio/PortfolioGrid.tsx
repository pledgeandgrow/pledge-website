"use client";

import { useState } from "react";
import ClientCard from "./ClientCard";
import { ClientProject } from "@/components/ui/client-modal";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface PortfolioGridProps {
  projects: ClientProject[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Get unique industries and years for filters
  const industries = ["all", ...new Set(projects.map(project => project.industry))];
  const years = ["all", ...new Set(projects.map(project => project.year.toString()))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return parseInt(b) - parseInt(a); // Sort years in descending order
  });

  // Filter projects based on search query and filters
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      searchQuery === "" || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.methodology.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesIndustry = industryFilter === "all" || project.industry === industryFilter;
    const matchesYear = yearFilter === "all" || project.year.toString() === yearFilter;
    
    return matchesSearch && matchesIndustry && matchesYear;
  });

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="text-muted-foreground h-4 w-4" />
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry === "all" ? "All Industries" : industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="text-muted-foreground h-4 w-4" />
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Grid of projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ClientCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2 text-foreground">No projects found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  );
}
