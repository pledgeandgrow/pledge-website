"use client";

import dynamic from "next/dynamic";
import { useTestingVisibility } from "./TestingVisibilityProvider";

// Dynamically import DevTools with no SSR
const DevTools = dynamic(
  () => import("./DevTools").then((mod) => mod.DevTools),
  { ssr: false }
);

export function ClientDevTools() {
  const { isTestingVisible, isAdminPage } = useTestingVisibility();
  
  // Only render in development mode and on admin pages
  if (!isTestingVisible || !isAdminPage) {
    return null;
  }
  
  return <DevTools />;
}
