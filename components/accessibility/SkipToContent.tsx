"use client";

import { useState } from "react";

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md
        transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary
        ${isFocused ? "transform-none" : "-translate-y-16"}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  );
}
