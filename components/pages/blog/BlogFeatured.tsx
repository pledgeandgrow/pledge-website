"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock } from "lucide-react";
import { featuredArticles } from "@/data/blog-data";

// Using the Article interface from data/blog-data.ts

export default function BlogFeatured() {
  // Using the featuredArticles from data/blog-data.ts

  return (
    <section id="latest-posts" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular insights and thought leadership on digital transformation, innovation, and sustainable business practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((post, index) => (
            <Link key={post.id} href={`/blog/article/${post.id}`} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <CardDescription className="text-muted-foreground line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 relative rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
