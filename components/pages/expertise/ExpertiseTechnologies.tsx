"use client";

import React from "react";
import Image from "next/image";
import { ExpertiseTechnology } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiPython, SiDjango, SiFlask, SiPhp, SiLaravel, SiRuby, SiRubyonrails,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes,
  SiGit, SiGithub, SiGitlab, SiJira, SiTrello, SiAsana,
  SiAndroid, SiApple, SiSwift, SiKotlin, SiFlutter, 
  SiWordpress, SiShopify, SiMagento, SiWoocommerce, SiStripe, SiPaypal,
  SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiSketch,
  SiGoogleanalytics, SiGooglesearchconsole, SiGoogleads, SiMozilla,
  SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiKeras,
  SiEthereum, SiSolidity, SiPolkadot, SiBitcoin,
  SiNginx, SiApache, SiLinux, SiUbuntu, SiDebian, SiCentos,
  SiJenkins, SiCircleci, SiTravisci, SiGithubactions,
  SiFirebase, SiSupabase, SiAuth0, SiOkta,
  SiRedis, SiElasticsearch, SiGraphql, SiApollographql, SiPrisma,
  SiUnity, SiUnrealengine, SiGodotengine, SiBlender, SiCplusplus
} from "react-icons/si";
import {
  FaCode, FaDatabase, FaServer, FaCloud, FaMobile, FaShoppingCart, 
  FaPaintBrush, FaChartLine, FaRobot, FaShieldAlt, FaFileAlt, FaTools, 
  FaUserTie, FaDesktop, FaGamepad, FaReact, FaNodeJs, FaAws, FaMicrosoft,
  FaEthereum, FaBitcoin, FaDocker, FaJava, FaPython, FaPhp, FaHtml5, FaCss3
} from "react-icons/fa";

interface ExpertiseTechnologiesProps {
  technologies: ExpertiseTechnology[];
  title?: string;
  subtitle?: string;
}

// Function to get the appropriate icon based on technology name
const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();
  
  // Frontend technologies
  if (name.includes('react')) return <SiReact className="text-3xl text-primary" />;
  if (name.includes('next.js') || name.includes('nextjs')) return <SiNextdotjs className="text-3xl text-primary" />;
  if (name.includes('typescript')) return <SiTypescript className="text-3xl text-primary" />;
  if (name.includes('javascript')) return <SiJavascript className="text-3xl text-primary" />;
  if (name.includes('html')) return <SiHtml5 className="text-3xl text-primary" />;
  if (name.includes('css')) return <SiCss3 className="text-3xl text-primary" />;
  if (name.includes('tailwind')) return <SiTailwindcss className="text-3xl text-primary" />;
  
  // Backend technologies
  if (name.includes('node')) return <SiNodedotjs className="text-3xl text-primary" />;
  if (name.includes('express')) return <SiExpress className="text-3xl text-primary" />;
  if (name.includes('mongodb')) return <SiMongodb className="text-3xl text-primary" />;
  if (name.includes('postgres')) return <SiPostgresql className="text-3xl text-primary" />;
  if (name.includes('mysql')) return <SiMysql className="text-3xl text-primary" />;
  if (name.includes('python')) return <SiPython className="text-3xl text-primary" />;
  if (name.includes('django')) return <SiDjango className="text-3xl text-primary" />;
  if (name.includes('flask')) return <SiFlask className="text-3xl text-primary" />;
  if (name.includes('php')) return <SiPhp className="text-3xl text-primary" />;
  if (name.includes('laravel')) return <SiLaravel className="text-3xl text-primary" />;
  if (name.includes('ruby')) return <SiRuby className="text-3xl text-primary" />;
  if (name.includes('rails')) return <SiRubyonrails className="text-3xl text-primary" />;
  
  // Cloud & DevOps
  if (name.includes('aws') || name.includes('amazon')) return <SiAmazon className="text-3xl text-primary" />;
  if (name.includes('azure') || name.includes('microsoft')) return <FaMicrosoft className="text-3xl text-primary" />;
  if (name.includes('google cloud')) return <SiGooglecloud className="text-3xl text-primary" />;
  if (name.includes('docker')) return <SiDocker className="text-3xl text-primary" />;
  if (name.includes('kubernetes')) return <SiKubernetes className="text-3xl text-primary" />;
  if (name.includes('git')) return <SiGit className="text-3xl text-primary" />;
  if (name.includes('github')) return <SiGithub className="text-3xl text-primary" />;
  if (name.includes('gitlab')) return <SiGitlab className="text-3xl text-primary" />;
  if (name.includes('jira')) return <SiJira className="text-3xl text-primary" />;
  if (name.includes('trello')) return <SiTrello className="text-3xl text-primary" />;
  if (name.includes('asana')) return <SiAsana className="text-3xl text-primary" />;
  
  // Mobile
  if (name.includes('android')) return <SiAndroid className="text-3xl text-primary" />;
  if (name.includes('ios')) return <SiApple className="text-3xl text-primary" />;
  if (name.includes('swift')) return <SiSwift className="text-3xl text-primary" />;
  if (name.includes('kotlin')) return <SiKotlin className="text-3xl text-primary" />;
  if (name.includes('flutter')) return <SiFlutter className="text-3xl text-primary" />;
  if (name.includes('react native')) return <FaReact className="text-3xl text-primary" />;
  
  // E-commerce
  if (name.includes('wordpress')) return <SiWordpress className="text-3xl text-primary" />;
  if (name.includes('shopify')) return <SiShopify className="text-3xl text-primary" />;
  if (name.includes('magento')) return <SiMagento className="text-3xl text-primary" />;
  if (name.includes('woocommerce')) return <SiWoocommerce className="text-3xl text-primary" />;
  if (name.includes('stripe')) return <SiStripe className="text-3xl text-primary" />;
  if (name.includes('paypal')) return <SiPaypal className="text-3xl text-primary" />;
  
  // Design
  if (name.includes('figma')) return <SiFigma className="text-3xl text-primary" />;
  if (name.includes('xd')) return <SiAdobexd className="text-3xl text-primary" />;
  if (name.includes('photoshop')) return <SiAdobephotoshop className="text-3xl text-primary" />;
  if (name.includes('illustrator')) return <SiAdobeillustrator className="text-3xl text-primary" />;
  if (name.includes('sketch')) return <SiSketch className="text-3xl text-primary" />;
  
  // SEO & Analytics
  if (name.includes('analytics')) return <SiGoogleanalytics className="text-3xl text-primary" />;
  if (name.includes('search console')) return <SiGooglesearchconsole className="text-3xl text-primary" />;
  if (name.includes('google ads')) return <SiGoogleads className="text-3xl text-primary" />;
  
  // AI & ML
  if (name.includes('tensorflow')) return <SiTensorflow className="text-3xl text-primary" />;
  if (name.includes('pytorch')) return <SiPytorch className="text-3xl text-primary" />;
  if (name.includes('openai')) return <SiOpenai className="text-3xl text-primary" />;
  if (name.includes('scikit')) return <SiScikitlearn className="text-3xl text-primary" />;
  if (name.includes('keras')) return <SiKeras className="text-3xl text-primary" />;
  
  // Blockchain
  if (name.includes('ethereum')) return <SiEthereum className="text-3xl text-primary" />;
  if (name.includes('solidity')) return <SiSolidity className="text-3xl text-primary" />;
  if (name.includes('hyperledger')) return <FaEthereum className="text-3xl text-primary" />;
  if (name.includes('polkadot')) return <SiPolkadot className="text-3xl text-primary" />;
  if (name.includes('bitcoin')) return <SiBitcoin className="text-3xl text-primary" />;
  
  // Server & Infrastructure
  if (name.includes('nginx')) return <SiNginx className="text-3xl text-primary" />;
  if (name.includes('apache')) return <SiApache className="text-3xl text-primary" />;
  if (name.includes('linux')) return <SiLinux className="text-3xl text-primary" />;
  if (name.includes('ubuntu')) return <SiUbuntu className="text-3xl text-primary" />;
  if (name.includes('debian')) return <SiDebian className="text-3xl text-primary" />;
  if (name.includes('centos')) return <SiCentos className="text-3xl text-primary" />;
  
  // CI/CD
  if (name.includes('jenkins')) return <SiJenkins className="text-3xl text-primary" />;
  if (name.includes('circleci')) return <SiCircleci className="text-3xl text-primary" />;
  if (name.includes('travis')) return <SiTravisci className="text-3xl text-primary" />;
  if (name.includes('github actions')) return <SiGithubactions className="text-3xl text-primary" />;
  
  // Auth & Backend services
  if (name.includes('firebase')) return <SiFirebase className="text-3xl text-primary" />;
  if (name.includes('supabase')) return <SiSupabase className="text-3xl text-primary" />;
  if (name.includes('auth0')) return <SiAuth0 className="text-3xl text-primary" />;
  if (name.includes('okta')) return <SiOkta className="text-3xl text-primary" />;
  
  // Databases & APIs
  if (name.includes('redis')) return <SiRedis className="text-3xl text-primary" />;
  if (name.includes('elasticsearch')) return <SiElasticsearch className="text-3xl text-primary" />;
  if (name.includes('graphql')) return <SiGraphql className="text-3xl text-primary" />;
  if (name.includes('apollo')) return <SiApollographql className="text-3xl text-primary" />;
  if (name.includes('prisma')) return <SiPrisma className="text-3xl text-primary" />;
  
  // Game Development
  if (name.includes('unity')) return <SiUnity className="text-3xl text-primary" />;
  if (name.includes('unreal')) return <SiUnrealengine className="text-3xl text-primary" />;
  if (name.includes('godot')) return <SiGodotengine className="text-3xl text-primary" />;
  if (name.includes('blender')) return <SiBlender className="text-3xl text-primary" />;
  if (name.includes('c++')) return <SiCplusplus className="text-3xl text-primary" />;
  
  // Generic icons by category
  if (name.includes('code') || name.includes('programming')) return <FaCode className="text-3xl text-primary" />;
  if (name.includes('database')) return <FaDatabase className="text-3xl text-primary" />;
  if (name.includes('server')) return <FaServer className="text-3xl text-primary" />;
  if (name.includes('cloud')) return <FaCloud className="text-3xl text-primary" />;
  if (name.includes('mobile')) return <FaMobile className="text-3xl text-primary" />;
  if (name.includes('ecommerce') || name.includes('shop')) return <FaShoppingCart className="text-3xl text-primary" />;
  if (name.includes('design') || name.includes('ui') || name.includes('ux')) return <FaPaintBrush className="text-3xl text-primary" />;
  if (name.includes('analytics') || name.includes('seo')) return <FaChartLine className="text-3xl text-primary" />;
  if (name.includes('ai') || name.includes('ml') || name.includes('automation')) return <FaRobot className="text-3xl text-primary" />;
  if (name.includes('security')) return <FaShieldAlt className="text-3xl text-primary" />;
  if (name.includes('documentation')) return <FaFileAlt className="text-3xl text-primary" />;
  if (name.includes('maintenance') || name.includes('support')) return <FaTools className="text-3xl text-primary" />;
  if (name.includes('consulting') || name.includes('training')) return <FaUserTie className="text-3xl text-primary" />;
  if (name.includes('software') || name.includes('application')) return <FaDesktop className="text-3xl text-primary" />;
  if (name.includes('game')) return <FaGamepad className="text-3xl text-primary" />;
  
  // Default fallback
  return <span className="text-primary font-bold">{techName.substring(0, 2)}</span>;
};

export default function ExpertiseTechnologies({ 
  technologies, 
  title = "Technologies We Use", 
  subtitle = "Modern tools for modern solutions" 
}: ExpertiseTechnologiesProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <div className="h-16 w-16 mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                {getTechIcon(tech.name)}
              </div>
              <h3 className="text-lg font-medium text-foreground">{tech.name}</h3>
              {tech.description && (
                <p className="text-sm text-muted-foreground text-center mt-1 max-w-[200px]">
                  {tech.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
