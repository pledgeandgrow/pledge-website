"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ClientModal, ClientProject } from "@/components/ui/client-modal";
import { useProjects } from "@/data/portfolio-data-i18n";
import { useTranslations } from "@/hooks/useTranslations";

export default function CaseStudiesSlider() {
  const { t } = useTranslations("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Get all case studies from the portfolio data using the i18n hook
  const caseStudies = useProjects();
  
  // Update based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset current index if we're switching to mobile and current index is too high
      if (mobile && currentIndex > caseStudies.length - 1) {
        setCurrentIndex(caseStudies.length - 1);
      } else if (!mobile && currentIndex > caseStudies.length - 3) {
        setCurrentIndex(Math.max(0, caseStudies.length - 3));
      }
    };
    
    // Set initial values
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [caseStudies.length, currentIndex]);
  
  // Calculate max index based on mobile or desktop
  const maxIndex = Math.max(0, caseStudies.length - (isMobile ? 1 : 3));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const openProjectModal = (project: ClientProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Get currently visible case studies
  const visibleCaseStudies = caseStudies.slice(currentIndex, currentIndex + (isMobile ? 1 : 3));

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("caseStudies.title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t("caseStudies.description")}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background shadow-md"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">{t("accessibility.previous")}</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background shadow-md"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">{t("accessibility.next")}</span>
            </Button>
          </div>

          {/* Case Studies Grid - 1 card per line on mobile, 3 cards per line on desktop */}
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8 transition-all duration-300`}>
            {visibleCaseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="bg-card border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{study.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => openProjectModal(study)}
                  >
                    {t("buttons.viewCaseStudy")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/portfolio">{t("buttons.viewAllCaseStudies")}</Link>
          </Button>
        </div>

        {/* Project Modal */}
        <ClientModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
}
