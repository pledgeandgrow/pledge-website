"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

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
  const { t } = useTranslations('ambassadors');
  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <Button
          variant={activeRegion === "all" ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setActiveRegion("all")}
        >
          {t('ambassadorsList.regions.all')}
        </Button>
        
        {regions.map((region) => (
          <Button
            key={region}
            variant={activeRegion === region ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveRegion(region)}
          >
            {t(`ambassadorsList.regions.${region.toLowerCase()}`)}
          </Button>
        ))}
      </div>
    </div>
  );
}
