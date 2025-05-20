"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Linkedin, Instagram } from "lucide-react";

interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'instagram';
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
  
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={16} />;
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'instagram':
        return <Instagram size={16} />;
      default:
        return <ExternalLink size={16} />;
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
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <Badge variant={featured ? "default" : "secondary"} className="mb-2">
              {role}
            </Badge>
            {featured && (
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                Featured Ambassador
              </Badge>
            )}
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
          <CardDescription className="text-center text-sm">{location}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">
            {bio}
          </p>
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
