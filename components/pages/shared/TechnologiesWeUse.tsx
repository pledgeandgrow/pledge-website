"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TechStack, 
  TechItem,
  frontendTechnologies, 
  backendTechnologies, 
  cloudTechnologies, 
  mobileTechnologies 
} from "@/components/ui/tech-stack";
import * as SiIcons from "react-icons/si";

type SiIconType = keyof typeof SiIcons;

// Additional technology categories
const cmsAndEcommerce: TechItem[] = [
  { name: "WordPress", icon: "SiWordpress" as SiIconType, color: "text-blue-600" },
  { name: "Shopify", icon: "SiShopify" as SiIconType, color: "text-green-600" },
  { name: "WooCommerce", icon: "SiWoo" as SiIconType, color: "text-purple-600" },
  { name: "Magento", icon: "SiMagento" as SiIconType, color: "text-orange-600" },
  { name: "Strapi", icon: "SiStrapi" as SiIconType, color: "text-indigo-600" }
];

const designTools: TechItem[] = [
  { name: "Figma", icon: "SiFigma" as SiIconType, color: "text-purple-500" },
  { name: "Adobe XD", icon: "SiAdobexd" as SiIconType, color: "text-pink-600" },
  { name: "Photoshop", icon: "SiAdobephotoshop" as SiIconType, color: "text-blue-700" },
  { name: "Illustrator", icon: "SiAdobeillustrator" as SiIconType, color: "text-orange-600" },
  { name: "Sketch", icon: "SiSketch" as SiIconType, color: "text-yellow-600" }
];

const devOpsTools: TechItem[] = [
  { name: "Git", icon: "SiGit" as SiIconType, color: "text-orange-600" },
  { name: "GitHub Actions", icon: "SiGithubactions" as SiIconType, color: "text-blue-500" },
  { name: "Jenkins", icon: "SiJenkins" as SiIconType, color: "text-red-500" },
  { name: "Docker", icon: "SiDocker" as SiIconType, color: "text-blue-500" },
  { name: "Kubernetes", icon: "SiKubernetes" as SiIconType, color: "text-blue-600" }
];

export default function TechnologiesWeUse() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Technologies We Support
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We leverage cutting-edge technologies and tools to build robust, scalable, and innovative digital solutions for our clients.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className={`${isMobile ? 'grid-cols-2 gap-y-2' : 'grid-cols-4'} grid w-full max-w-xl`}>
                <TabsTrigger value="frontend" className="text-sm md:text-base">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="text-sm md:text-base">Backend</TabsTrigger>
                <TabsTrigger value="mobile" className="text-sm md:text-base">Mobile</TabsTrigger>
                <TabsTrigger value="tools" className="text-sm md:text-base">Tools & CMS</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="frontend" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">Frontend Development</h3>
                <TechStack 
                  technologies={frontendTechnologies} 
                  size="lg" 
                  showLabels={true} 
                  className="justify-center"
                  enableMobileCarousel={true}
                  itemsPerView={isMobile ? 2 : 4}
                />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">Backend & Cloud</h3>
                <div className="space-y-8">
                  <TechStack 
                    technologies={backendTechnologies} 
                    size="lg" 
                    showLabels={true} 
                    className="justify-center"
                    enableMobileCarousel={true}
                    itemsPerView={isMobile ? 2 : 4}
                  />
                  <div className="pt-6 border-t">
                    <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-center">Cloud & Deployment</h4>
                    <TechStack 
                      technologies={cloudTechnologies} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                      enableMobileCarousel={true}
                      itemsPerView={4}
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">Mobile Development</h3>
                <TechStack 
                  technologies={mobileTechnologies} 
                  size="lg" 
                  showLabels={true} 
                  className="justify-center"
                  enableMobileCarousel={true}
                  itemsPerView={isMobile ? 2 : 4}
                />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">Tools & CMS</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-center">Design Tools</h4>
                    <TechStack 
                      technologies={designTools} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                      enableMobileCarousel={true}
                      itemsPerView={isMobile ? 2 : 4}
                    />
                  </div>
                  <div className="pt-6 border-t">
                    <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-center">CMS & E-commerce</h4>
                    <TechStack 
                      technologies={cmsAndEcommerce} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                      enableMobileCarousel={true}
                      itemsPerView={isMobile ? 2 : 4}
                    />
                  </div>
                  <div className="pt-6 border-t">
                    <h4 className="text-base md:text-lg font-medium mb-4 md:mb-6 text-center">DevOps</h4>
                    <TechStack 
                      technologies={devOpsTools} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                      enableMobileCarousel={true}
                      itemsPerView={isMobile ? 2 : 4}
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
