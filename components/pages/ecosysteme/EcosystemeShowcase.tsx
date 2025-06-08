"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Network, Info, Plus, Minus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import EcosystemeModal from "@/components/pages/ecosysteme/EcosystemeModal";
import { useTranslations } from "@/hooks/useTranslations";

// Partner data will be loaded from translations

// Function to generate positions in a circle
function getCirclePosition(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI;
  // Arrondir les valeurs à 2 décimales pour éviter des différences minimes entre SSR et client
  const x = Math.round(radius * Math.cos(angle) * 100) / 100;
  const y = Math.round(radius * Math.sin(angle) * 100) / 100;
  return { x, y };
}

export default function EcosystemeShowcase() {
  const { t } = useTranslations('ecosystem');
  // Define partner type for better type safety
  type Partner = {
    id: string;
    name: string;
    description: string;
    discount: string;
    category: string;
    color: string;
    logo?: string;
    benefits?: string[];
    website?: string;
    position?: { x: number; y: number };
  };
  
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [open, setOpen] = useState(false);
  
  // Load partner data from translations
  const partners = useMemo(() => [
    { 
      id: "taskmate",
      name: t('showcase.partners.taskmate.name'),
      description: t('showcase.partners.taskmate.description'),
      discount: t('showcase.partners.taskmate.discount'),
      category: t('showcase.partners.taskmate.category'),
      color: "#4ade80" // green-400
    },
    { 
      id: "sharka",
      name: t('showcase.partners.sharka.name'),
      description: t('showcase.partners.sharka.description'),
      discount: t('showcase.partners.sharka.discount'),
      category: t('showcase.partners.sharka.category'),
      color: "#f97316" // orange-500
    },
    { 
      id: "cordunite",
      name: t('showcase.partners.cordunite.name'),
      description: t('showcase.partners.cordunite.description'),
      discount: t('showcase.partners.cordunite.discount'),
      category: t('showcase.partners.cordunite.category'),
      color: "#8b5cf6" // violet-500
    }
  ], [t]);
  const [isMobile, setIsMobile] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Total number of partner slots (60)
  const totalSlots = 60;
  
  // Calculate positions for all slots in a single circle - responsive radius
  const getBaseRadius = () => {
    if (typeof window === 'undefined') return 220; // Default for SSR
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 640) return 150; // Small mobile
    if (viewportWidth < 768) return 180; // Mobile
    if (viewportWidth < 1024) return 200; // Tablet
    return 220; // Desktop
  };
  
  const [baseCircleRadius, setBaseCircleRadius] = useState(220);
  
  // Update radius on resize
  useEffect(() => {
    const updateRadius = () => {
      setBaseCircleRadius(getBaseRadius());
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);
  
  const circleRadius = baseCircleRadius * zoomLevel;
  
  // Use client-side rendering only for slot positions
  const [slots, setSlots] = useState(() => {
    return Array(totalSlots).fill(null).map(() => ({
      position: { x: 0, y: 0 }, // Initial empty positions
      circle: "single"
    }));
  });
  
  // Calculate positions client-side only
  useEffect(() => {
    const calculatedSlots = Array(totalSlots).fill(null).map((_, index) => ({
      position: getCirclePosition(index, totalSlots, circleRadius),
      circle: "single"
    }));
    setSlots(calculatedSlots);
  }, [totalSlots, circleRadius]);
  
  // Partner type already defined above

  // Assign partners to slots (first 3 slots of inner circle)
  const [partnersWithPositions, setPartnersWithPositions] = useState<Partner[]>([]);
  
  // Update partner positions when slots change
  useEffect(() => {
    if (slots[0].position.x === 0 && slots[0].position.y === 0) return;
    
    const newPartnersWithPositions = partners.map((partner, index) => {
      const slotIndex = index * Math.floor(totalSlots / partners.length);
      return {
        ...partner,
        position: slots[slotIndex]?.position || { x: 0, y: 0 }
      };
    });
    
    setPartnersWithPositions(newPartnersWithPositions);
  }, [slots, partners, totalSlots]);
  
  // Handle partner click
  const handlePartnerClick = (partner: (typeof partners)[0]) => {
    setSelectedPartner(partner);
    setOpen(true);
  };
  
  // Handle zoom
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 1.0)); // Max 100%
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.6)); // Min 60%
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <Network className="w-4 h-4 mr-2" />
            <span>{t('showcase.subtitle')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('showcase.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('showcase.description')}
            {!isMobile ? t('modal.cta.learnMore') : t('modal.cta.contact')}
          </p>
        </motion.div>

        {/* Partner Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Array.from(new Set(partners.map(p => p.category))).map((category, index) => (
            <Badge key={index} variant="outline" className="bg-white dark:bg-gray-800 shadow-sm">
              {t(`partners.categories.${category.toLowerCase().replace(/\s+/g, '_')}.title`, { fallback: category })}
            </Badge>
          ))}
          <Badge variant="outline" className="bg-white dark:bg-gray-800 shadow-sm">{t('showcase.moreCategories')}</Badge>
        </div>

        {/* Zoom Controls */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" 
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.6}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xs font-medium px-1">{Math.round(zoomLevel * 100)}%</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" 
              onClick={handleZoomIn}
              disabled={zoomLevel >= 1.0}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Instructions */}
        {isMobile && (
          <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <Info className="h-4 w-4" />
            <span>{t('showcase.mobileInstructions')}</span>
          </div>
        )}

        {/* Circular Partner Showcase */}
        <div 
          className="relative mx-auto overflow-hidden touch-manipulation" 
          style={{ 
            height: isMobile ? '350px' : '600px', 
            maxWidth: '100%',
            transformOrigin: 'center center'
          }}
        >
          {/* Center point reference (invisible) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1 h-1"></div>
          
          {/* Connection circles */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {/* Main circle */}
            <circle 
              cx="50%" 
              cy="50%" 
              r={circleRadius} 
              fill="none" 
              stroke="#10b98130" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
            
            {/* Inner circle */}
            <circle 
              cx="50%" 
              cy="50%" 
              r={circleRadius * 0.6} 
              fill="none" 
              stroke="#10b98120" 
              strokeWidth="1.5" 
              strokeDasharray="3 3" 
            />
            
            {/* Center highlight circle */}
            <circle 
              cx="50%" 
              cy="50%" 
              r="40" 
              fill="#10b98108" 
              stroke="#10b98115" 
              strokeWidth="1" 
            />
          </svg>
          
          {/* Empty slots */}
          {slots.map((slot, index) => {
            // Skip slots that have partners
            if (partnersWithPositions.some(p => 
              p.position?.x === slot.position.x && p.position?.y === slot.position.y
            )) return null;
            
            const { position } = slot;
            const size = 4; // Smaller uniform size for all points
            
            return (
              <div
                key={`slot-${index}`}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `calc(50% + ${Math.round(position.x)}px)`, 
                  top: `calc(50% + ${Math.round(position.y)}px)`,
                }}
              >
                <div 
                  className={`rounded-full bg-gray-200 dark:bg-gray-800 opacity-30`}
                  style={{ width: `${size}px`, height: `${size}px` }}
                ></div>
              </div>
            );
          })}
          
          {/* Partner nodes */}
          {partnersWithPositions.map((partner, index) => {
            // Skip partners without position data
            if (!partner.position) return null;
            
            const { position, color } = partner;
            const isHovered = hoveredPartner === partner.id;
            
            return (
              <TooltipProvider key={`partner-${index}`}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => handlePartnerClick(partner)}
                      onMouseEnter={() => setHoveredPartner(partner.id)}
                      onMouseLeave={() => setHoveredPartner(null)}
                      style={{ 
                        left: `calc(50% + ${Math.round(position.x)}px)`, 
                        top: `calc(50% + ${Math.round(position.y)}px)`,
                        transform: hoveredPartner === partner.id ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.2s'
                      }}
                    >
                      <div 
                        className="rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center border-2"
                        style={{ 
                          width: isHovered ? '20px' : '14px', 
                          height: isHovered ? '20px' : '14px',
                          borderColor: color,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span 
                          className="font-bold text-[8px] md:text-[10px]"
                          style={{ color: color }}
                        >
                          {partner.name.substring(0, 1)}
                        </span>
                      </div>
                      
                      {/* Connection line to center */}
                      <svg className="absolute top-0 left-0 z-10 opacity-40" style={{width: '100%', height: '100%'}}>
                        <line 
                          x1="0" 
                          y1="0" 
                          x2={Math.round((position.x - (partnersWithPositions.find(p => p.id === 'cordunite')?.position?.x || 0)) * 100) / 100} 
                          y2={Math.round((position.y - (partnersWithPositions.find(p => p.id === 'cordunite')?.position?.y || 0)) * 100) / 100} 
                          stroke="#8b5cf6" 
                          strokeWidth="1"
                          strokeOpacity="0.5"
                        />
                      </svg>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-white dark:bg-gray-800 shadow-md border-none p-2">
                    <div className="text-xs">
                      <div className="font-semibold">{partner.name}</div>
                      <div className="text-gray-500 dark:text-gray-400">{partner.category}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
          
          {/* Empty slots indicator */}
          <div className="absolute bottom-2 left-0 right-0 text-center text-gray-500 dark:text-gray-400 text-xs">
            <p>{t('showcase.availableSlots', { count: totalSlots - partners.length })}</p>
          </div>
        </div>
        
        {/* Partner Modal */}
        {selectedPartner && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: `${selectedPartner.color}20` }}
                  >
                    <span 
                      className="font-bold text-sm"
                      style={{ color: selectedPartner.color }}
                    >
                      {selectedPartner.name.substring(0, 2)}
                    </span>
                  </div>
                  <DialogTitle>{selectedPartner.name}</DialogTitle>
                </div>
                <DialogDescription>
                  {selectedPartner.category}
                </DialogDescription>
                <div className="mt-2">
                  <Badge variant="outline">
                    {t('showcase.partnerCategory', { category: selectedPartner.category })}
                  </Badge>
                </div>
              </DialogHeader>
              <EcosystemeModal partner={selectedPartner} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
