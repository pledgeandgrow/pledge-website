"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslatedJobPositions } from "@/data/careers-data";
import { useTranslations } from "@/hooks/useTranslations";

export default function OpenPositions() {
  const { t, locale } = useTranslations('careers');
  const translatedJobs = useTranslatedJobPositions();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationTypeFilter, setLocationTypeFilter] = useState("all");
  
  // Format date with translations
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return t('openPositions.positionCard.today', { fallback: 'today' });
    } else if (diffDays === 2) {
      return t('openPositions.positionCard.yesterday', { fallback: 'yesterday' });
    } else if (diffDays <= 7) {
      return `${diffDays - 1} ${t('openPositions.positionCard.daysAgo', { fallback: 'days ago' })}`;
    } else {
      // Use the browser's locale for date formatting based on current language
      const localeString = locale === 'fr' ? 'fr-FR' : 'en-US';
      return date.toLocaleDateString(localeString, { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  // Get unique departments for filter
  const departments = ["all", ...new Set(translatedJobs.map(job => job.department))];
  
  // Get unique location types for filter
  const locationTypes = ["all", ...new Set(translatedJobs.map(job => job.locationType))];

  // Filter jobs based on search term and filters
  const filteredJobs = translatedJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
    
    const matchesLocationType = locationTypeFilter === "all" || job.locationType === locationTypeFilter;
    
    return matchesSearch && matchesDepartment && matchesLocationType;
  });

  // Sort jobs by posted date (newest first)
  const sortedJobs = [...filteredJobs].sort((a, b) => 
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );

  return (
    <section id="open-positions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('openPositions.title', { fallback: 'Open Positions' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('openPositions.description', { fallback: 'Explore our current job openings and find the perfect role to match your skills and career goals.' })}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t('openPositions.filters.search', { fallback: 'Search positions...' })}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder={t('openPositions.filters.department', { fallback: 'Filter by department' })} />
              </SelectTrigger>
              <SelectContent>
                {departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department === "all" ? t('openPositions.filters.allDepartments', { fallback: 'All Departments' }) : t(`openPositions.departments.${department.toLowerCase()}`, { fallback: department })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={locationTypeFilter} onValueChange={setLocationTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder={t('openPositions.filters.locationType', { fallback: 'Filter by location type' })} />
              </SelectTrigger>
              <SelectContent>
                {locationTypes.map((locationType) => (
                  <SelectItem key={locationType} value={locationType}>
                    {locationType === "all" ? t('openPositions.filters.allLocationTypes', { fallback: 'All Location Types' }) : t(`openPositions.positionCard.${locationType.toLowerCase()}`, { fallback: locationType })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {sortedJobs.length > 0 ? (
          <>
            {/* Mobile Scroll View (visible only on mobile) */}
            <div className="md:hidden overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {sortedJobs.map((job) => (
                  <div key={job.id} className="w-[85vw] max-w-[350px] flex-shrink-0">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge variant={
                            job.locationType === "Remote" ? "outline" : 
                            job.locationType === "Hybrid" ? "secondary" : "default"
                          }>
                            {t(`openPositions.positionCard.${job.locationType.toLowerCase().replace(' ', '-')}`, { fallback: job.locationType })}
                          </Badge>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            <span>{t(`openPositions.departments.${job.department.toLowerCase()}`, { fallback: job.department })} • {t(`openPositions.positionCard.${job.employmentType.toLowerCase().replace(' ', '-')}`, { fallback: job.employmentType })}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{t('openPositions.positionCard.postedOn', { fallback: 'Posted' })} {formatDate(job.postedDate)}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={`/careers/${job.id}`} className="flex items-center justify-center">
                            {t('openPositions.positionCard.viewDetails', { fallback: 'View Details' })} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 md:hidden">
                <div className="flex space-x-2">
                  {sortedJobs.slice(0, Math.min(5, sortedJobs.length)).map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                  {sortedJobs.length > 5 && (
                    <div className="h-2 w-2 rounded-full bg-primary/30">...</div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Desktop Grid (visible only on desktop) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {sortedJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge variant={
                          job.locationType === "Remote" ? "outline" : 
                          job.locationType === "Hybrid" ? "secondary" : "default"
                        }>
                          {job.locationType}
                        </Badge>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{t(`openPositions.departments.${job.department.toLowerCase()}`, { fallback: job.department })} • {t(`openPositions.positionCard.${job.employmentType.toLowerCase().replace(' ', '-')}`, { fallback: job.employmentType })}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{t('openPositions.positionCard.postedOn', { fallback: 'Posted' })} {formatDate(job.postedDate)}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/careers/${job.id}`} className="flex items-center justify-center">
                          {t('openPositions.positionCard.viewDetails', { fallback: 'View Details' })} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {t('openPositions.noPositions', { fallback: 'No positions match your search criteria. Please try adjusting your filters.' })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
