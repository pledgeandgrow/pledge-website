"use client";

import { Button } from "@/components/ui/button";

interface AmbassadorCategoriesProps {
  regions: string[];
  activeRegion: string;
  setActiveRegion: (region: string) => void;
}

export default function AmbassadorCategories({ 
  regions, 
  activeRegion, 
  setActiveRegion 
}: AmbassadorCategoriesProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <Button
          variant={activeRegion === "all" ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setActiveRegion("all")}
        >
          Global
        </Button>
        
        {regions.map((region) => (
          <Button
            key={region}
            variant={activeRegion === region ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveRegion(region)}
          >
            {region}
          </Button>
        ))}
      </div>
    </div>
  );
}
