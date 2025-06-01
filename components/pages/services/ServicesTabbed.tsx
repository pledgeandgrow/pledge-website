"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Use dynamic imports for service components to reduce initial bundle size
const CreationServices = lazy(() => import("./CreationServices"));
const IntegrationServices = lazy(() => import("./IntegrationServices"));
const ComplementaryServices = lazy(() => import("./ComplementaryServices"));

// Loading placeholder
const ServicePlaceholder = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading service details...</div>
  </div>
);

export default function ServicesTabbed() {
  // Track which tab is active to only load that component
  const [activeTab, setActiveTab] = useState("creation");
  const [hasInteracted, setHasInteracted] = useState(false);

  // Preload the creation services component on initial render
  useEffect(() => {
    // Preload the default tab component
    import("./CreationServices");
    
    // Mark as interacted after a delay to reduce initial load
    const timer = setTimeout(() => setHasInteracted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setHasInteracted(true);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="creation" 
          className="w-full max-w-5xl mx-auto"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid grid-cols-3 mb-12 w-full max-w-md mx-auto">
            <TabsTrigger value="creation">Creation</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="complementary">Complementary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creation" className="py-8">
            <Suspense fallback={<ServicePlaceholder />}>
              <CreationServices />
            </Suspense>
          </TabsContent>
          
          <TabsContent value="integration" className="py-8">
            {(activeTab === "integration" || hasInteracted) && (
              <Suspense fallback={<ServicePlaceholder />}>
                <IntegrationServices />
              </Suspense>
            )}
          </TabsContent>
          
          <TabsContent value="complementary" className="py-8">
            {(activeTab === "complementary" || hasInteracted) && (
              <Suspense fallback={<ServicePlaceholder />}>
                <ComplementaryServices />
              </Suspense>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
