"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
// Button import removed as it was unused

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [activeCategory, setActiveCategory] = useState("board");

  const boardMembers = [
    {
      name: "Mehdi BEREL",
      role: "Chairman",
      companyRole: "Chief Executive Officer",
      bio: "With extensive experience in business leadership, Mehdi drives the strategic vision and growth of our company.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Shihab BEREL",
      role: "Chairman",
      companyRole: "Chief Technology Officer",
      bio: "Shihab brings innovative thinking and technical expertise to our leadership team, focusing on product development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Ilyas BEREL",
      role: "Chairman",
      companyRole: "Chief Financial Officer",
      bio: "Ilyas oversees operations and client relationships, ensuring we deliver exceptional value and service.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Noah PLA",
      role: "Board Member",
      companyRole: "Chief Operating Officer",
      bio: "Noah contributes strategic insights and industry expertise to guide our company's direction and growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Maxime NEAU",
      role: "Board Member",
      companyRole: "Ambassador",
      bio: "Maxime brings financial acumen and business development expertise to our board of directors.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Zakaria HADRAOUI",
      role: "Board Member",
      companyRole: "Chief Information Officer",
      bio: "Zakaria's technical background and innovation mindset help shape our product strategy and development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mazen ISMAIL",
      role: "Board Member",
      companyRole: "Chief Blockchain Officer",
      bio: "Mazen's international business experience helps guide our global expansion and partnerships.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const staffMembers = [
    {
      name: "Louis JUNQUA",
      role: "Staff Member",
      companyRole: "Chargé commercial",
      bio: "Louis manages our commercial relationships and helps clients find the perfect solutions for their needs.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Lyna",
      role: "Staff Member",
      companyRole: "Chargé de communication",
      bio: "Lyna oversees our communication strategy, ensuring our message reaches the right audience effectively.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mehdi OUALI",
      role: "Staff Member",
      companyRole: "Chargé de réseaux sociaux",
      bio: "Mehdi manages our social media presence, creating engaging content that connects with our community.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Brandon MERYEL",
      role: "Staff Member",
      companyRole: "Modérateur Discord",
      bio: "Brandon maintains our Discord community, ensuring a positive and supportive environment for all members.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Rayane BEDRANI",
      role: "Staff Member",
      companyRole: "Business Développeur",
      bio: "Rayane identifies and pursues new business opportunities, helping our company grow and expand into new markets.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
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
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Meet the talented individuals behind our success.
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
              Board Members
            </button>
            <button
              onClick={() => switchCategory("staff")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "staff" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Staff
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
