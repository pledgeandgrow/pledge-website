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
  const params = useParams();
  const { t, locale } = useTranslations('careers');
  const getTranslatedJobDetail = useTranslatedJobDetails();
  const [job, setJob] = useState<JobPosition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the job with the matching ID
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    
    console.log(`Attempting to load job with ID: ${id}, locale: ${locale}`);
    
    // Use our new translation hook to get the job with translations
    // Make sure id is a string before passing to getTranslatedJobDetail
    if (id) {
      const translatedJob = getTranslatedJobDetail(id);
      console.log('Found job?', translatedJob ? 'Yes' : 'No');
      
      if (translatedJob) {
        console.log('Job details:', {
          title: translatedJob.title,
          department: translatedJob.department,
          locationType: translatedJob.locationType,
          employmentType: translatedJob.employmentType
        });
        setJob(translatedJob);
      } else {
        console.error(`Job with ID ${id} not found in ${locale} locale`);
      }
    }
    
    setLoading(false);
  }, [params.id, locale, getTranslatedJobDetail]);

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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant={job.locationType === "Remote" ? "outline" : job.locationType === "Hybrid" ? "secondary" : "default"}>
                  {t(`openPositions.positionCard.${job.locationType.toLowerCase().replace(' ', '-')}`, { fallback: job.locationType })}
                </Badge>
                <Badge variant="outline">
                  {t(`openPositions.positionCard.${job.employmentType.toLowerCase().replace(' ', '-')}`, { fallback: job.employmentType })}
                </Badge>
                <Badge variant="outline">
                  {t(`openPositions.departments.${job.department.toLowerCase()}`, { fallback: job.department })}
                </Badge>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{t(`openPositions.departments.${job.department.toLowerCase()}`, { fallback: job.department })}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{t(`openPositions.positionCard.${job.employmentType.toLowerCase().replace(' ', '-').replace(' ', '-')}`, { fallback: job.employmentType })}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{t('openPositions.positionCard.postedOn', { fallback: 'Posted on' })} {formatDate(job.postedDate)}</span>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t('openPositions.positionDetail.overview', { fallback: 'Overview' })}</h2>
                  <p className="text-muted-foreground">{job.overview}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t('openPositions.positionDetail.responsibilities', { fallback: 'Responsibilities' })}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.responsibilities.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t('openPositions.positionDetail.requirements', { fallback: 'Requirements' })}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.requirements.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t('openPositions.positionDetail.benefits', { fallback: 'Benefits' })}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.benefits.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t('openPositions.positionDetail.applicationProcess', { fallback: 'Application Process' })}</h2>
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
                <h3 className="text-xl font-semibold mb-4">{t('openPositions.positionDetail.jobDetails', { fallback: 'Job Details' })}</h3>
                
                <div className="space-y-4 mb-6">

                  
                  {job.salary && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-1">{t('openPositions.positionDetail.salaryRange', { fallback: 'Salary Range' })}</h4>
                    <p className="text-muted-foreground">{job.salary}</p>
                  </div>
                )}
                  
                  {job.reportingTo && (
                    <div>
                      <h4 className="text-sm font-medium mb-1">{t('openPositions.positionDetail.reportingTo', { fallback: 'Reporting To' })}</h4>
                      <p className="text-muted-foreground">{job.reportingTo}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">{t('openPositions.positionDetail.department', { fallback: 'Department' })}</h4>
                    <p className="text-muted-foreground">{job.department}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">{t('openPositions.positionDetail.requiredSkills', { fallback: 'Required Skills' })}</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6" size="lg">
                  {t('openPositions.positionCard.applyNow', { fallback: 'Apply Now' })}
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
  const { locale } = useTranslations('careers');
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Use the current locale for date formatting
  const localeString = locale === 'fr' ? 'fr-FR' : 'en-US';
  
  if (diffDays === 1) {
    return locale === 'fr' ? "aujourd'hui" : "today";
  } else if (diffDays === 2) {
    return locale === 'fr' ? "hier" : "yesterday";
  } else if (diffDays <= 7) {
    return locale === 'fr' 
      ? `il y a ${diffDays - 1} jour${diffDays - 1 > 1 ? 's' : ''}` 
      : `${diffDays - 1} days ago`;
  } else {
    return date.toLocaleDateString(localeString, { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
