"use client";

import {
  WorkflowIcon,
  Lightbulb,
  TimerIcon,
  EuroIcon,
} from "lucide-react";
import Link from "next/link";
import { useLayoutEffect } from "react";
import WOW from "wow.js";

function HomeAbout() {
  useLayoutEffect(() => {
    new WOW({ animateClass: "animated", offset: 100 }).init();
  }, []);

  const features = [
    {
      icon: WorkflowIcon,
      title: "Start-up et PME",
      description: "Boostez votre entreprise avec des solutions IT innovantes",
    },
    {
      icon: Lightbulb,
      title: "Solutions Personnalisées",
      description: "Des stratégies adaptées à votre vision unique.",
    },
    {
      icon: TimerIcon,
      title: "Délais Courts",
      description: "Transformez vos idées en réalité, plus rapidement que jamais.",
    },
    {
      icon: EuroIcon,
      title: "Économie de coûts et de temps",
      description: "Optimisez vos ressources et maximisez votre efficacité.",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-5 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          {/* Left Section */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="md-mb30 sec-lg-head">
              <h6 className="mb-4 wow fadeIn inline-block px-7 py-2 text-lg uppercase tracking-wide rounded-full border border-white/50">
                ACCOMPAGNEMENT PERSONNALISÉ
              </h6>
              <h2 className="wow d-rotate text-5xl font-bold leading-[4rem]">
                <span className="rotate-text">
                Une équipes d’experts dédiés aux technologies numériques.
                </span>
              </h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-5/12 lg:ml-auto flex items-center">
          <div className="text">
              <p className="d-slideup wow text-[1.1rem]">
                Pledge & Grow vous accompagne dans votre transition vers l’avenir numérique. Plus qu’une simple agence de développement informatique, nous sommes vos partenaires dans la transformation digitale. Grâce à notre maîtrise du marché français et des technologies de pointe, nous créons des solutions sur-mesure pour vous aider à innover et à réussir dans un monde en constante évolution.
              </p>
              <div className="view-all mt-12 ml-6 mb-24 wow fadeIn" data-wow-delay=".8s">
                <Link className="text-lg flex items-center gap-2" href="/Blog">
                  Consultez toutes nos actualités
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center px-4">
          <h2 className="wow d-rotate mt-16">
            <span className="rotate-text text-5xl font-bold">Libérez votre potentiel.</span>
            </h2>
            <div className="features mt-20 flex flex-wrap justify-center gap-4 py-10">
              {features.map((item, index) => (
                <div
                  key={index}
                    
                  className="wow fadeInUp trust-card flex flex-col items-center justify-center px-4 py-5 w-[280px] rounded-xl shadow-[0px_0px_10px_rgba(255,255,255,0.5)] transition-all duration-300 bg-transparent cursor-pointer"
                  data-wow-delay={`${0.4 + index * 1}s`}
                 
                >
                  <item.icon className="w-16 h-16" />
                  
                  <h6 className="mt-2 text-2xl">{item.title}</h6>
                  <p className="text-lg text-white/50 mt-4">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
