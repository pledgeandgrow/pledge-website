w"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TechStack, 
  frontendTechnologies, 
  backendTechnologies, 
  cloudTechnologies, 
  mobileTechnologies 
} from "@/components/ui/tech-stack";
import * as SiIcons from "react-icons/si";

// Additional technology categories
const cmsAndEcommerce = [
  { name: "WordPress", icon: "SiWordpress", color: "text-blue-600" },
  { name: "Shopify", icon: "SiShopify", color: "text-green-600" },
  { name: "WooCommerce", icon: "SiWoo", color: "text-purple-600" },
  { name: "Magento", icon: "SiMagento", color: "text-orange-600" },
  { name: "Strapi", icon: "SiStrapi", color: "text-indigo-600" }
];

const designTools = [
  { name: "Figma", icon: "SiFigma", color: "text-purple-500" },
  { name: "Adobe XD", icon: "SiAdobexd", color: "text-pink-600" },
  { name: "Photoshop", icon: "SiAdobephotoshop", color: "text-blue-700" },
  { name: "Illustrator", icon: "SiAdobeillustrator", color: "text-orange-600" },
  { name: "Sketch", icon: "SiSketch", color: "text-yellow-600" }
];

const devOpsTools = [
  { name: "Git", icon: "SiGit", color: "text-orange-600" },
  { name: "GitHub Actions", icon: "SiGithubactions", color: "text-blue-500" },
  { name: "Jenkins", icon: "SiJenkins", color: "text-red-500" },
  { name: "Docker", icon: "SiDocker", color: "text-blue-500" },
  { name: "Kubernetes", icon: "SiKubernetes", color: "text-blue-600" }
];

export default function TechnologiesWeUse() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies We Use
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage cutting-edge technologies and tools to build robust, scalable, and innovative digital solutions for our clients.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="tools">Tools & CMS</TabsTrigger>
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
                <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
                <TechStack 
                  technologies={frontendTechnologies} 
                  size="lg" 
                  showLabels={true} 
                  className="justify-center"
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
                <h3 className="text-xl font-semibold mb-6 text-center">Backend & Cloud</h3>
                <div className="space-y-8">
                  <TechStack 
                    technologies={backendTechnologies} 
                    size="lg" 
                    showLabels={true} 
                    className="justify-center"
                  />
                  <div className="pt-6 border-t">
                    <h4 className="text-lg font-medium mb-6 text-center">Cloud & Deployment</h4>
                    <TechStack 
                      technologies={cloudTechnologies} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
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
                <h3 className="text-xl font-semibold mb-6 text-center">Mobile Development</h3>
                <TechStack 
                  technologies={mobileTechnologies} 
                  size="lg" 
                  showLabels={true} 
                  className="justify-center"
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
                <h3 className="text-xl font-semibold mb-6 text-center">Tools & CMS</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium mb-6 text-center">Design Tools</h4>
                    <TechStack 
                      technologies={designTools} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                    />
                  </div>
                  <div className="pt-6 border-t">
                    <h4 className="text-lg font-medium mb-6 text-center">CMS & E-commerce</h4>
                    <TechStack 
                      technologies={cmsAndEcommerce} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
                    />
                  </div>
                  <div className="pt-6 border-t">
                    <h4 className="text-lg font-medium mb-6 text-center">DevOps</h4>
                    <TechStack 
                      technologies={devOpsTools} 
                      size="lg" 
                      showLabels={true} 
                      className="justify-center"
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
