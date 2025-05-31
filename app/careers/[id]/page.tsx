"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, MapPin, Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { jobDetails, JobDetail } from "@/data/careers-data";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the job with the matching ID
    const foundJob = jobDetails.find(j => j.id === params.id);
    
    if (foundJob) {
      setJob(foundJob);
    }
    
    setLoading(false);
  }, [params.id]);

  // If job not found, show 404 page
  if (!loading && !job) {
    notFound();
  }

  if (loading || !job) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col space-y-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium truncate">{job.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          asChild
        >
          <Link href="/careers" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all positions
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant={
                  job.locationType === "Remote" ? "outline" : 
                  job.locationType === "Hybrid" ? "secondary" : "default"
                }>
                  {job.locationType}
                </Badge>
                <Badge variant="outline">{job.employmentType}</Badge>
                <Badge variant="outline">{job.department}</Badge>
              </div>

              <div className="flex flex-col space-y-3 text-muted-foreground mb-8">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{job.department} • {job.employmentType}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Posted {formatDate(job.postedDate)}</span>
                </div>
                {job.startDate && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Start date: {job.startDate}</span>
                  </div>
                )}

              </div>

              <Separator className="my-8" />

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                  <p className="text-muted-foreground">{job.overview}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
                  <p className="text-muted-foreground">{job.applicationProcess}</p>
                </section>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-lg border p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Job Details</h3>
                
                <div className="space-y-4 mb-6">

                  
                  {job.reportingTo && (
                    <div>
                      <h4 className="text-sm font-medium mb-1">Reporting To</h4>
                      <p className="text-muted-foreground">{job.reportingTo}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Department</h4>
                    <p className="text-muted-foreground">{job.department}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  <Link href={`mailto:careers@pledgeandgrow.com?subject=Application for ${job.title} (${job.id})`} className="w-full">
                    Apply Now
                  </Link>
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  or email your resume to{" "}
                  <a href="mailto:careers@pledgeandgrow.com" className="text-primary hover:underline">
                    careers@pledgeandgrow.com
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
