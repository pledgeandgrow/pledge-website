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

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  postedDate: string;
}

export default function OpenPositions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationTypeFilter, setLocationTypeFilter] = useState("all");

  const jobPositions: JobPosition[] = [
    {
      id: "dev-001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Paris, France",
      locationType: "Hybrid",
      employmentType: "Full-time",
      description: "We're looking for an experienced Frontend Developer with expertise in React, Next.js, and TypeScript to join our engineering team.",
      postedDate: "2025-04-15"
    },
    {
      id: "dev-002",
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      locationType: "Remote",
      employmentType: "Full-time",
      description: "Join our backend team to build scalable and robust APIs and services using Node.js, Express, and PostgreSQL.",
      postedDate: "2025-04-18"
    },
    {
      id: "design-001",
      title: "UX/UI Designer",
      department: "Design",
      location: "Lyon, France",
      locationType: "Hybrid",
      employmentType: "Full-time",
      description: "We're seeking a talented UX/UI Designer to create intuitive and engaging user experiences for our digital products.",
      postedDate: "2025-04-20"
    },
    {
      id: "marketing-001",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Paris, France",
      locationType: "On-site",
      employmentType: "Full-time",
      description: "Help us grow our digital presence and reach new clients through innovative marketing strategies and campaigns.",
      postedDate: "2025-04-10"
    },
    {
      id: "pm-001",
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      locationType: "Remote",
      employmentType: "Full-time",
      description: "Lead and coordinate digital projects from inception to completion, ensuring they meet client requirements and deadlines.",
      postedDate: "2025-04-22"
    },
    {
      id: "intern-001",
      title: "Web Development Intern",
      department: "Engineering",
      location: "Paris, France",
      locationType: "On-site",
      employmentType: "Internship",
      description: "Gain hands-on experience in web development while working alongside our experienced engineering team.",
      postedDate: "2025-04-25"
    }
  ];

  // Get unique departments for filter
  const departments = ["all", ...new Set(jobPositions.map(job => job.department))];
  
  // Get unique location types for filter
  const locationTypes = ["all", ...new Set(jobPositions.map(job => job.locationType))];

  // Filter jobs based on search term and filters
  const filteredJobs = jobPositions.filter(job => {
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
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our current job openings and find the perfect role to match your skills and career goals.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search positions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department === "all" ? "All Departments" : department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={locationTypeFilter} onValueChange={setLocationTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by location type" />
              </SelectTrigger>
              <SelectContent>
                {locationTypes.map((locationType) => (
                  <SelectItem key={locationType} value={locationType}>
                    {locationType === "all" ? "All Location Types" : locationType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {sortedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                        <span>{job.department} • {job.employmentType}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Posted {formatDate(job.postedDate)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/careers/${job.id}`} className="flex items-center justify-center">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground">
              No positions found matching your criteria. Please try different search terms or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) {
    return "today";
  } else if (diffDays === 2) {
    return "yesterday";
  } else if (diffDays <= 7) {
    return `${diffDays - 1} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
