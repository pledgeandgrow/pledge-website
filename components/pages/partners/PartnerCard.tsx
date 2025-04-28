"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  featured?: boolean;
}

export default function PartnerCard({ id, name, logo, category, description, website, featured = false }: PartnerCardProps) {
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
              {category}
            </Badge>
            {featured && (
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                Featured Partner
              </Badge>
            )}
          </div>
          <div className="flex justify-center items-center h-20 mb-4 bg-white dark:bg-black/40 rounded-md p-4">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={160}
              height={80}
              className="object-contain max-h-full"
            />
          </div>
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-4">
          <Button asChild variant="outline" className="w-full" size="sm">
            <Link href={website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Visit Website
              <ExternalLink size={14} />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
