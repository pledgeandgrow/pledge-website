"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TechStack, TechItem } from "@/components/ui/tech-stack";

export default function WebsiteSpecifications() {
  const frontendTechnologies: TechItem[] = [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Framer Motion", icon: "SiFramer" }
  ];

  const backendTechnologies: TechItem[] = [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Firebase", icon: "SiFirebase" }
  ];

  const cmsSystems: TechItem[] = [
    { name: "WordPress", icon: "SiWordpress" },
    { name: "Strapi", icon: "SiStrapi" },
    { name: "Contentful", icon: "SiContentful" },
    { name: "Sanity", icon: "SiSanity" },
    { name: "Shopify", icon: "SiShopify" },
    { name: "WooCommerce", icon: "SiWoo" }
  ];

  const deploymentPlatforms: TechItem[] = [
    { name: "Vercel", icon: "SiVercel" },
    { name: "Netlify", icon: "SiNetlify" },
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "Digital Ocean", icon: "SiDigitalocean" },
    { name: "Cloudflare", icon: "SiCloudflare" },
    { name: "Heroku", icon: "SiHeroku" }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use modern, industry-standard technologies to build websites that are fast, secure, and scalable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <p className="text-muted-foreground mb-6">
                  Modern frontend frameworks and libraries for building responsive, interactive user interfaces.
                </p>
                <TechStack 
                  technologies={frontendTechnologies} 
                  size="md" 
                  showLabels 
                  className="justify-start flex-wrap"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
                <p className="text-muted-foreground mb-6">
                  Robust backend solutions for data management, API development, and server-side logic.
                </p>
                <TechStack 
                  technologies={backendTechnologies} 
                  size="md" 
                  showLabels 
                  className="justify-start flex-wrap"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Content Management Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Flexible CMS solutions that make content updates easy and efficient for your team.
                </p>
                <TechStack 
                  technologies={cmsSystems} 
                  size="md" 
                  showLabels 
                  className="justify-start flex-wrap"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Deployment & Hosting</h3>
                <p className="text-muted-foreground mb-6">
                  Reliable hosting platforms that ensure your website is fast, secure, and always available.
                </p>
                <TechStack 
                  technologies={deploymentPlatforms} 
                  size="md" 
                  showLabels 
                  className="justify-start flex-wrap"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
