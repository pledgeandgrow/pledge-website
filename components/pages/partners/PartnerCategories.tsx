"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

interface PartnerCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function PartnerCategories({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: PartnerCategoriesProps) {
  const { t } = useTranslations('partners');
  
  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {/* Manually sort categories to put Exclusive first */}
        {categories.includes("Exclusive") && (
          <Button
            key="Exclusive"
            variant={activeCategory === "Exclusive" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory("Exclusive")}
          >
            {t(`partnersList.categories.Exclusive`) || "Exclusive"}
          </Button>
        )}
        
        {/* Show all other categories */}
        {categories.filter(cat => cat !== "Exclusive").map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory(category)}
          >
            {t(`partnersList.categories.${category}`) || category}
          </Button>
        ))}
      </div>
    </div>
  );
}
