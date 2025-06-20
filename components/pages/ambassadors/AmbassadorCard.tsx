"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Globe } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'instagram' | 'tiktok';
  url: string;
}

interface AmbassadorCardProps {
  name: string;
  image: string;
  role: string;
  location: string;
  bio: string;
  socialLinks: SocialLink[];
  featured?: boolean;
}

export default function AmbassadorCard({ 
  name, 
  image, 
  role, 
  location, 
  bio, 
  socialLinks, 
  featured = false 
}: AmbassadorCardProps) {
  const { t } = useTranslations('ambassadors');
  
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={16} />;
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'instagram':
        return <Instagram size={16} />;
      case 'tiktok':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
          </svg>
        );
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${featured ? 'border-primary/50 bg-primary/5 dark:bg-primary/10' : ''}`}>
        {featured && <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary/90">{t('ambassadorsList.featured')}</Badge>}
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="mb-2">{role}</Badge>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-background shadow-md">
              <Image
                src={image}
                alt={`${name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <CardTitle className="text-xl text-center">{name}</CardTitle>
          <CardDescription className="text-center text-sm">
            <span className="font-medium">{t('ambassadorsList.ambassador.location')}:</span> {location}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">{t('ambassadorsList.ambassador.role')}:</span> {role}
          </p>
          <p className="text-sm text-muted-foreground mt-2">{bio}</p>
        </CardContent>
        <CardFooter className="pt-4 flex justify-center gap-2">
          {socialLinks.map((link, index) => (
            <Button 
              key={index} 
              asChild 
              variant="outline" 
              size="icon" 
              className="rounded-full h-9 w-9"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {getSocialIcon(link.platform)}
              </Link>
            </Button>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
