"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
  name: string;
  description: string;
  website: string;
  featured?: boolean;
}

export default function PartnerCard({ name, description, website, featured = false }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${featured ? 'border-primary/50 bg-primary/5 dark:bg-primary/10' : ''}`}>
        <CardHeader className="pb-4">
          {/* Category and featured tags removed as requested */}
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
