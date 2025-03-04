"use client";

import React, { useLayoutEffect } from "react";
import WOW from "wow.js";
import {
  Accessibility,
  BadgeCheck,
  CircleUserRound,
  EuroIcon,
  Globe,
  Lightbulb,
  MessageCircle,
  Users,
  Search,
  StoreIcon,
  TimerIcon,
  WorkflowIcon,
  ChartNoAxesCombined,
  Bot,
  Blocks,
  Brain,
  ScanEye,
  PersonStanding,
  Split,
  Shield,
  Scale,
  Handshake,
} from "lucide-react";

// Mapping icon names to their respective components
const iconMap = {
  Accessibility,
  Lightbulb,
  WorkflowIcon,
  TimerIcon,
  EuroIcon,
  BadgeCheck,
  Globe,
  Search,
  MessageCircle,
  CircleUserRound,
  ChartNoAxesCombined,
  Bot,
  Blocks,
  Brain,
  Users,
  ScanEye,
  PersonStanding,
  Split,
  Shield,
  Scale,
  Handshake,
};

function IntegrationAbout({ data }) {
  // Ensure data structure
  const title = data?.[0]?.title || "Default Title";
  const subtitle = data?.[0]?.subtitle || "Default Subtitle";
  const items = Array.isArray(data?.[1]) ? data[1] : [];

  useLayoutEffect(() => {
    if (typeof document !== "undefined" && !window.WOWInstance) {
      window.WOWInstance = new WOW({ animateClass: "animated", offset: 100 });
      window.WOWInstance.init();
    }
  }, []);

  return (
    <section className="about-intro section-padding mb-24">
      <div className="px-2 text-center">
        <div className="container text-center m-auto">
          <div className="sec-lg-head md:mb-8 d-rotate wow">
            <h2 className="text-4xl font-bold leading-[4rem] uppercase">
              {title}
            </h2>
            <p className="text-xl mt-2">{subtitle}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center mt-20 gap-8 max-w-full">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center wow fadeInUp trust-card 
                w-[300px] min-w-[200px] p-6 rounded-lg bg-transparent aspect-square shadow-lg 
                hover:bg-gray-800 transition-all duration-300"
                data-wow-delay={`${0.4 + index * 0.2}s`}
              >
                {IconComponent ? (
                  <IconComponent className="w-16 h-16 text-white" />
                ) : (
                  <span>Icon not found</span>
                )}
                <h6 className="mt-4 text-2xl font-semibold">{item.title}</h6>
                <p className="mt-2 text-lg">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IntegrationAbout;
