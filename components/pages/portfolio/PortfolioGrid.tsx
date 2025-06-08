"use client";

import { useState, useEffect, useMemo } from "react";
import { ClientProject } from "@/components/ui/client-modal";
import ClientCard from "./ClientCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useProjects } from "@/data/portfolio-data-i18n";

interface PortfolioGridProps {
  projects?: ClientProject[];
}

export default function PortfolioGrid({ projects: externalProjects }: PortfolioGridProps) {
  const { t } = useTranslations('portfolio');
  const i18nProjects = useProjects();
  
  // States for filtering and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  
  // Determine which projects to use - external or i18n
  const projectsToUse = useMemo(() => {
    if (externalProjects && externalProjects.length > 0) {
      return externalProjects;
    } else if (i18nProjects && i18nProjects.length > 0) {
      return i18nProjects;
    }
    return [];
  }, [externalProjects, i18nProjects]);

  // Set projects per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setProjectsPerPage(isMobileView ? 3 : 6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get unique industries and years for filters
  const allIndustries = useMemo(() => {
    if (!projectsToUse || projectsToUse.length === 0) {
      return [];
    }
    
    const validIndustries = projectsToUse
      .filter((project: ClientProject) => project && project.industry)
      .map((project: ClientProject) => project.industry);
    
    return [...new Set(validIndustries)];
  }, [projectsToUse]);
  
  const allYears = useMemo(() => {
    if (!projectsToUse || projectsToUse.length === 0) {
      return [];
    }
    
    const validYears = projectsToUse
      .filter((project: ClientProject) => project && project.year)
      .map((project: ClientProject) => project.year.toString());
    
    return [...new Set(validYears)].sort((a, b) => parseInt(b) - parseInt(a));
  }, [projectsToUse]);
  
  // Filter options are directly used in the JSX below with allIndustries and allYears

  // Reset currentIndex when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchQuery, industryFilter, yearFilter]);

  // Filter projects based on search query, industry, and year
  const filteredProjects = useMemo(() => {
    return projectsToUse.filter((project: ClientProject) => {
      const matchesSearch = 
        searchQuery === "" || 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.methodology && project.methodology.technologies && 
          project.methodology.technologies.some((tech: string) => 
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      
      const matchesIndustry = industryFilter === "all" || project.industry === industryFilter;
      const matchesYear = yearFilter === "all" || project.year.toString() === yearFilter;
      
      return matchesSearch && matchesIndustry && matchesYear;
    });
  }, [projectsToUse, searchQuery, industryFilter, yearFilter]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + projectsPerPage < filteredProjects.length;
  
  // Handle pagination
  const goToPreviousPage = () => {
    if (canGoBack) {
      setCurrentIndex(prev => Math.max(0, prev - projectsPerPage));
    }
  };
  
  const goToNextPage = () => {
    if (canGoForward) {
      setCurrentIndex(prev => prev + projectsPerPage);
    }
  };
  
  // Calculate visible projects
  const visibleProjects = useMemo(() => {
    const startIndex = currentIndex;
    const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentIndex, projectsPerPage]);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="mb-10 p-6 bg-card border border-border rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-foreground">{t('title')}</h2>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 mb-8">
          {/* Search input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder={t('search')}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Industry filter */}
          <div className="w-full md:w-48">
            <div className="relative w-full">
              <select
                className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="all">{t('filters.industry')}</option>
                {allIndustries.map((industry, index) => (
                  <option key={`industry-${index}-${industry}`} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </div>
          </div>
          
          {/* Year filter */}
          <div className="w-full md:w-36">
            <div className="relative w-full">
              <select
                className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="all">{t('filters.year')}</option>
                {allYears.map((year, index) => (
                  <option key={`year-${index}-${year}`} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </div>
          </div>
            
        </div>
        
        {/* Results count */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <p className="text-muted-foreground">
            {t('pagination.showing', { 
              start: 1, 
              end: filteredProjects.length, 
              total: projectsToUse.length 
            })}
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
              {t('resetFilters')}
            </button>
          )}
        </div>

        {/* Projects display - Grid for desktop, Carousel for mobile */}
        {filteredProjects.length > 0 ? (
          <>
            {/* Desktop Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {visibleProjects.map((project: ClientProject) => (
                <ClientCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Pagination Controls */}
            {filteredProjects.length > projectsPerPage && (
              <div className="flex justify-between items-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={goToPreviousPage} 
                  disabled={!canGoBack}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t('pagination.previous')}
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  {t('pagination.page')} {Math.floor(currentIndex / projectsPerPage) + 1} {t('pagination.of')} {totalPages}
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={goToNextPage} 
                  disabled={!canGoForward}
                  className="flex items-center gap-2"
                >
                  {t('pagination.next')}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">{t('noResults')}</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">{t('noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
