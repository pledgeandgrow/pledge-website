"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioGridProps {
  projects: ClientProject[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Get unique industries and years for filters
  const industries = ["all", ...new Set(projects.map(project => project.industry))];
  const years = ["all", ...new Set(projects.map(project => project.year.toString()))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return parseInt(b) - parseInt(a); // Sort years in descending order
  });

  // Reset currentIndex when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchQuery, industryFilter, yearFilter]);

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
      <div className="mb-10 p-6 bg-card border border-border rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Find Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-primary/20 focus-visible:ring-primary/30"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Industry</label>
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="border-primary/20 focus:ring-primary/30">
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
          
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Year</label>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="border-primary/20 focus:ring-primary/30">
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
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-primary">{filteredProjects.length}</span> of {projects.length} projects
          </p>
          
          {(searchQuery || industryFilter !== "all" || yearFilter !== "all") && (
            <button 
              onClick={() => {
                setSearchQuery("");
                setIndustryFilter("all");
                setYearFilter("all");
              }}
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Projects display - Grid for desktop, Carousel for mobile */}
      {filteredProjects.length > 0 ? (
        <>
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ClientCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Mobile Carousel View */}
          {isMobile && (
            <div className="md:hidden">
              <div className="relative overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <ClientCard project={filteredProjects[currentIndex]} />
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setCurrentIndex((prev) => 
                      prev === 0 ? filteredProjects.length - 1 : prev - 1
                    )}
                    disabled={filteredProjects.length <= 1}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{currentIndex + 1}</span> / {filteredProjects.length}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setCurrentIndex((prev) => 
                      prev === filteredProjects.length - 1 ? 0 : prev + 1
                    )}
                    disabled={filteredProjects.length <= 1}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
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
