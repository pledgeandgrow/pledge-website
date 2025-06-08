"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
// Button import removed as it was unused

export default function Team() {
  const { t } = useTranslations('about');
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [activeCategory, setActiveCategory] = useState("board");

  // Utiliser les traductions pour les membres du conseil d'administration
  const boardMembers = [
    {
      id: 'mehdi',
      name: t('team.board.mehdi.name') || "Mehdi BEREL",
      role: t('team.board.mehdi.role') || "Chairman",
      companyRole: t('team.board.mehdi.companyRole') || "Chief Executive Officer",
      bio: t('team.board.mehdi.bio') || "With extensive experience in business leadership, Mehdi drives the strategic vision and growth of our company.",
      social: {
        linkedin: t('team.board.mehdi.social.linkedin') || "#",
        twitter: t('team.board.mehdi.social.twitter') || "#",
        github: t('team.board.mehdi.social.github') || "#"
      }
    },
    {
      id: 'shihab',
      name: t('team.board.shihab.name') || "Shihab BEREL",
      role: t('team.board.shihab.role') || "Chairman",
      companyRole: t('team.board.shihab.companyRole') || "Chief Technology Officer",
      bio: t('team.board.shihab.bio') || "Shihab brings innovative thinking and technical expertise to our leadership team, focusing on product development.",
      social: {
        linkedin: t('team.board.shihab.social.linkedin') || "#",
        twitter: t('team.board.shihab.social.twitter') || "#",
        github: t('team.board.shihab.social.github') || "#"
      }
    },
    {
      id: 'ilyas',
      name: t('team.board.ilyas.name') || "Ilyas BEREL",
      role: t('team.board.ilyas.role') || "Chairman",
      companyRole: t('team.board.ilyas.companyRole') || "Chief Financial Officer",
      bio: t('team.board.ilyas.bio') || "Ilyas oversees operations and client relationships, ensuring we deliver exceptional value and service.",
      social: {
        linkedin: t('team.board.ilyas.social.linkedin') || "#",
        twitter: t('team.board.ilyas.social.twitter') || "#",
        github: t('team.board.ilyas.social.github') || "#"
      }
    },
    {
      id: 'noah',
      name: t('team.board.noah.name') || "Noah PLA",
      role: t('team.board.noah.role') || "Board Member",
      companyRole: t('team.board.noah.companyRole') || "Chief Operating Officer",
      bio: t('team.board.noah.bio') || "Noah contributes strategic insights and industry expertise to guide our company's direction and growth.",
      social: {
        linkedin: t('team.board.noah.social.linkedin') || "#",
        twitter: t('team.board.noah.social.twitter') || "#",
        github: t('team.board.noah.social.github') || "#"
      }
    },
    {
      id: 'maxime',
      name: t('team.board.maxime.name') || "Maxime NEAU",
      role: t('team.board.maxime.role') || "Board Member",
      companyRole: t('team.board.maxime.companyRole') || "Ambassador",
      bio: t('team.board.maxime.bio') || "Maxime brings financial acumen and business development expertise to our board of directors.",
      social: {
        linkedin: t('team.board.maxime.social.linkedin') || "#",
        twitter: t('team.board.maxime.social.twitter') || "#",
        github: t('team.board.maxime.social.github') || "#"
      }
    },
    {
      id: 'zakaria',
      name: t('team.board.zakaria.name') || "Zakaria HADRAOUI",
      role: t('team.board.zakaria.role') || "Board Member",
      companyRole: t('team.board.zakaria.companyRole') || "Chief Information Officer",
      bio: t('team.board.zakaria.bio') || "Zakaria's technical background and innovation mindset help shape our product strategy and development.",
      social: {
        linkedin: t('team.board.zakaria.social.linkedin') || "#",
        twitter: t('team.board.zakaria.social.twitter') || "#",
        github: t('team.board.zakaria.social.github') || "#"
      }
    },
    {
      id: 'mazen',
      name: t('team.board.mazen.name') || "Mazen ISMAIL",
      role: t('team.board.mazen.role') || "Board Member",
      companyRole: t('team.board.mazen.companyRole') || "Chief Blockchain Officer",
      bio: t('team.board.mazen.bio') || "Mazen's international business experience helps guide our global expansion and partnerships.",
      social: {
        linkedin: t('team.board.mazen.social.linkedin') || "#",
        twitter: t('team.board.mazen.social.twitter') || "#",
        github: t('team.board.mazen.social.github') || "#"
      }
    }
  ];

  // Utiliser les traductions pour les membres du personnel
  const staffMembers = [
    {
      id: 'louis',
      name: t('team.staff.louis.name') || "Louis JUNQUA",
      role: t('team.staff.louis.role') || "Staff Member",
      companyRole: t('team.staff.louis.companyRole') || "Chargé commercial",
      bio: t('team.staff.louis.bio') || "Louis manages our commercial relationships and helps clients find the perfect solutions for their needs.",
      social: {
        linkedin: t('team.staff.louis.social.linkedin') || "#",
        twitter: t('team.staff.louis.social.twitter') || "#",
        github: t('team.staff.louis.social.github') || "#"
      }
    },
    {
      id: 'lyna',
      name: t('team.staff.lyna.name') || "Lyna",
      role: t('team.staff.lyna.role') || "Staff Member",
      companyRole: t('team.staff.lyna.companyRole') || "Chargé de communication",
      bio: t('team.staff.lyna.bio') || "Lyna oversees our communication strategy, ensuring our message reaches the right audience effectively.",
      social: {
        linkedin: t('team.staff.lyna.social.linkedin') || "#",
        twitter: t('team.staff.lyna.social.twitter') || "#",
        github: t('team.staff.lyna.social.github') || "#"
      }
    },
    {
      id: 'mehdi_ouali',
      name: t('team.staff.mehdi_ouali.name') || "Mehdi OUALI",
      role: t('team.staff.mehdi_ouali.role') || "Staff Member",
      companyRole: t('team.staff.mehdi_ouali.companyRole') || "Chargé de réseaux sociaux",
      bio: t('team.staff.mehdi_ouali.bio') || "Mehdi manages our social media presence, creating engaging content that connects with our community.",
      social: {
        linkedin: t('team.staff.mehdi_ouali.social.linkedin') || "#",
        twitter: t('team.staff.mehdi_ouali.social.twitter') || "#",
        github: t('team.staff.mehdi_ouali.social.github') || "#"
      }
    },
    {
      id: 'brandon',
      name: t('team.staff.brandon.name') || "Brandon MERYEL",
      role: t('team.staff.brandon.role') || "Staff Member",
      companyRole: t('team.staff.brandon.companyRole') || "Modérateur Discord",
      bio: t('team.staff.brandon.bio') || "Brandon maintains our Discord community, ensuring a positive and supportive environment for all members.",
      social: {
        linkedin: t('team.staff.brandon.social.linkedin') || "#",
        twitter: t('team.staff.brandon.social.twitter') || "#",
        github: t('team.staff.brandon.social.github') || "#"
      }
    },
    {
      id: 'rayane',
      name: t('team.staff.rayane.name') || "Rayane BEDRANI",
      role: t('team.staff.rayane.role') || "Staff Member",
      companyRole: t('team.staff.rayane.companyRole') || "Business Développeur",
      bio: t('team.staff.rayane.bio') || "Rayane identifies and pursues new business opportunities, helping our company grow and expand into new markets.",
      social: {
        linkedin: t('team.staff.rayane.social.linkedin') || "#",
        twitter: t('team.staff.rayane.social.twitter') || "#",
        github: t('team.staff.rayane.social.github') || "#"
      }
    }
  ];

  const activeMembers = activeCategory === "board" ? boardMembers : staffMembers;

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % activeMembers.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, activeMembers.length, activeCategory]);

  // Navigation functions
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? activeMembers.length - 1 : current - 1));
    setAutoplay(false);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % activeMembers.length);
    setAutoplay(false);
  };


  const switchCategory = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(0);
    setAutoplay(true);
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('team.title') || "Our Team"}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('team.description') || "Meet the talented individuals behind our success."}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-card border border-border rounded-full p-1 inline-flex">
            <button
              onClick={() => switchCategory("board")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "board" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('team.categories.board') || "Board Members"}
            </button>
            <button
              onClick={() => switchCategory("staff")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "staff" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t('team.categories.staff') || "Staff"}
            </button>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto mb-12">
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-[-50px] -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full shadow-md hover:bg-background transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-[-50px] -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full shadow-md hover:bg-background transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main carousel slide */}
          <div className="bg-card border border-border rounded-lg shadow-md p-8 md:p-12 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">{activeMembers[activeIndex].name}</h3>
              <p className="text-primary font-medium mb-1">{activeMembers[activeIndex].role}</p>
              <p className="text-muted-foreground mb-4 text-sm">{activeMembers[activeIndex].companyRole}</p>
              <p className="text-muted-foreground mb-6 max-w-prose">{activeMembers[activeIndex].bio}</p>
              <div className="flex space-x-4">
                <Link href={activeMembers[activeIndex].social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href={activeMembers[activeIndex].social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href={activeMembers[activeIndex].social.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
        
        {/* Company Tree button removed as requested */}
      </div>
    </section>
  );
}
