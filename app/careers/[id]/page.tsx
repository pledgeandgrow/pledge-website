"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, MapPin, Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobPosition, useTranslatedJobDetails } from "@/data/careers-data";
import { useTranslations } from "@/hooks/useTranslations";

export default function JobDetailPage() {
  const params = useParams<{ id: string }>();
  const { t, locale } = useTranslations('careers');
  const getJobDetails = useTranslatedJobDetails();
  const [job, setJob] = useState<JobPosition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = () => {
      try {
        // Make sure we have a job ID
        if (!params || !params.id) {
          setLoading(false);
          return;
        }

        // Get job details directly from our hook
        // Convert the ID to string if it's not already
        const jobId = String(params.id);
        const jobData = getJobDetails(jobId);
        
        if (jobData) {
          setJob(jobData);
        }
      } catch {
        // Silent error handling
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [params, locale, getJobDetails]);

  // If job not found after loading, show 404
  if (!loading && !job) {
    notFound();
  }

  // Loading state
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
              {t('meta.home', { fallback: 'Home' })}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/careers" className="hover:text-primary transition-colors">
              {t('meta.careers', { fallback: 'Careers' })}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium truncate">
              {job.title}
            </span>
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
            {t('openPositions.backToPositions', { fallback: 'Back to all positions' })}
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
                <Badge variant="outline" className="flex items-center gap-1 text-sm py-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  {job.employmentType}
                </Badge>
                
                <Badge variant="outline" className="flex items-center gap-1 text-sm py-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location} ({job.locationType})
                </Badge>
                
                <Badge variant="outline" className="flex items-center gap-1 text-sm py-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {t('openPositions.positionCard.department', { fallback: 'Department' })}: {job.department}
                </Badge>
                
                {job.postedDate && (
                  <Badge variant="outline" className="flex items-center gap-1 text-sm py-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {t('openPositions.positionCard.posted', { fallback: 'Posted' })}: {formatDate(job.postedDate, locale)}
                  </Badge>
                )}
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8">{job.description}</p>
                
                <h2 className="text-2xl font-semibold mb-4 mt-8">{t('jobDetail.overview', { fallback: 'Overview' })}</h2>
                <p>{job.overview}</p>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-4">{t('jobDetail.responsibilities', { fallback: 'Responsibilities' })}</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Separator className="my-8" />
                
                <h2 className="text-2xl font-semibold mb-4">{t('jobDetail.requirements', { fallback: 'Requirements' })}</h2>
                <ul className="space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {job.benefits && job.benefits.length > 0 && (
                  <>
                    <Separator className="my-8" />
                    <h2 className="text-2xl font-semibold mb-4">{t('jobDetail.benefits', { fallback: 'Benefits' })}</h2>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {job.applicationProcess && (
                  <>
                    <Separator className="my-8" />
                    <h2 className="text-2xl font-semibold mb-4">{t('jobDetail.applicationProcess', { fallback: 'Application Process' })}</h2>
                    <p>{job.applicationProcess}</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-lg border shadow-sm p-6"
              >
                <h3 className="font-semibold text-xl mb-4">{t('jobDetail.applyNow', { fallback: 'Apply Now' })}</h3>
                <p className="text-muted-foreground mb-6">{t('jobDetail.applyText', { fallback: 'Ready to join our team? Submit your application today.' })}</p>
                
                <Button className="w-full mb-4">
                  {t('jobDetail.submitApplication', { fallback: 'Submit Application' })}
                </Button>
                
                <Button variant="outline" className="w-full">
                  {t('jobDetail.sharePosition', { fallback: 'Share Position' })}
                </Button>
                
                {job.skills && job.skills.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-medium mb-3">{t('jobDetail.keySkills', { fallback: 'Key Skills' })}</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {job.reportingTo && (
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">{t('jobDetail.reportingTo', { fallback: 'Reporting To' })}</h4>
                    <p className="text-sm text-muted-foreground">{job.reportingTo}</p>
                  </div>
                )}
                
                {job.startDate && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">{t('jobDetail.startDate', { fallback: 'Start Date' })}</h4>
                    <p className="text-sm text-muted-foreground">{job.startDate}</p>
                  </div>
                )}
                
                {job.salary && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">{t('jobDetail.salary', { fallback: 'Salary Range' })}</h4>
                    <p className="text-sm text-muted-foreground">{job.salary}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to format dates based on current locale
function formatDate(dateString: string, locale: string = 'en'): string {
  try {
    const date = new Date(dateString);
    // Use the current locale for date formatting
    const localeString = locale === 'fr' ? 'fr-FR' : 'en-US';
    
    return new Intl.DateTimeFormat(localeString, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch {
    return dateString;
  }
}
