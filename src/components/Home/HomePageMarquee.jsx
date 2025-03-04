"use client";

import React, { useMemo } from "react";
import { Brush, Code, BarChart, Palette, Smartphone } from "@mui/icons-material";

const marqueeItems = [
  { text: "UI-UX Experience", icon: <Brush className="icon" /> },
  { text: "Web Development", icon: <Code className="icon" /> },
  { text: "Digital Marketing", icon: <BarChart className="icon" /> },
  { text: "Branding", icon: <Palette className="icon" /> },
  { text: "Mobile Solutions", icon: <Smartphone className="icon" /> }
];

function HomePageMarquee() {
  const duplicatedItems = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  return (
    <section className="main-marq">
      <div className="box">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.text}-${index}`} className="item">
            <h4>{item.text} {item.icon}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePageMarquee;
