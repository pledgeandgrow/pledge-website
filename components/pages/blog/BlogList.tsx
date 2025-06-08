"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "../../../components/ui/pagination";
import { CalendarIcon, Clock, Filter, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useArticles, useAllCategories, useSearchArticles, Article } from "@/data/blog-data-i18n";
import { useTranslations } from "@/hooks/useTranslations";

export default function BlogList() {
  const { t } = useTranslations('blog');
  const allBlogPosts: Article[] = useArticles();
  const searchResults = useSearchArticles(""); // Initialize with empty search

  // State for filters and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    search: "",
    category: "all"
  });
  
  // Mobile carousel state
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);

  // Reset filters when blog posts change
  useEffect(() => {
    setFilteredPosts(allBlogPosts);
    setCurrentPage(1);
  }, [allBlogPosts]);

  // Filter posts when filters change
  useEffect(() => {
    let results = allBlogPosts;
    
    if (activeFilters.search) {
      results = searchResults.filter(post => 
        post.title.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(activeFilters.search.toLowerCase())
      );
    }
    
    if (activeFilters.category && activeFilters.category !== "all") {
      results = results.filter(post => post.category === activeFilters.category);
    }
    
    setFilteredPosts(results);
  }, [activeFilters, allBlogPosts, searchResults]);

  // Pagination settings
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          onClick={() => paginate(1)} 
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Add ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last pages as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => paginate(i)} 
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2 && totalPages > 3) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            onClick={() => paginate(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  // Get all categories for the filter
  const categories = ["all", ...useAllCategories()];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('pageTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            {t('pageDescription')}
          </p>
          
          {/* Search and filter */}
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('filterByCategory')} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? t('allCategories') : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button 
                  onClick={() => setActiveFilters({ search: searchTerm, category: selectedCategory })} 
                  className="flex-1"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {t('filterByCategory')}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveFilters({ search: "", category: "all" });
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  disabled={!activeFilters.search && activeFilters.category === "all"}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Active filters */}
            {(activeFilters.search || activeFilters.category !== "all") && (
              <div className="flex flex-wrap gap-2 mt-4">
                {activeFilters.search && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {t('searchPlaceholder').replace('...', '')}: {activeFilters.search}
                  </Badge>
                )}
                {activeFilters.category !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {t('category')}: {activeFilters.category}
                  </Badge>
                )}
                <div className="text-sm text-muted-foreground ml-2">
                  {filteredPosts.length} {filteredPosts.length === 1 ? t('noPosts') : t('noPosts')}
                </div>
              </div>
            )}
          </div>
          
          {/* Blog posts grid - Desktop view (md and above) */}
          {currentPosts.length > 0 ? (
            <>
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post, index) => (
                  <Link key={post.id} href={`/blog/article/${post.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
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
                          <div className="absolute bottom-4 right-4">
                            <Button variant="link" size="sm" className="p-0 h-auto font-medium">
                              {t('readMore')}
                            </Button>
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
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-3.5 w-3.5" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span className="text-xs text-muted-foreground">{t('readTime', { time: post.readTime, defaultValue: '{{time}} min read' })}</span>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              </div>
              
              {/* Mobile carousel view (below md) */}
              <div className="md:hidden mb-12">
                <div className="relative">
                  {/* Carousel navigation buttons */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
                      onClick={() => setMobileCurrentIndex(prev => Math.max(0, prev - 1))}
                      disabled={mobileCurrentIndex === 0}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
                      onClick={() => setMobileCurrentIndex(prev => Math.min(currentPosts.length - 1, prev + 1))}
                      disabled={mobileCurrentIndex === currentPosts.length - 1}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Single post display */}
                  <div className="overflow-hidden">
                    <div 
                      className="transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${mobileCurrentIndex * 100}%)` }}
                    >
                      <Link href={`/blog/article/${currentPosts[mobileCurrentIndex].id}`}>
                        <Card className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                          <div className="aspect-video relative">
                            <Image
                              src={currentPosts[mobileCurrentIndex].image}
                              alt={currentPosts[mobileCurrentIndex].title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
                                {currentPosts[mobileCurrentIndex].category}
                              </Badge>
                            </div>
                            <div className="absolute bottom-4 right-4">
                              <Button variant="link" size="sm" className="p-0 h-auto font-medium">
                                {t('readMore')}
                              </Button>
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                              {currentPosts[mobileCurrentIndex].title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-4">
                            <CardDescription className="text-muted-foreground line-clamp-3 mb-4">
                              {currentPosts[mobileCurrentIndex].excerpt}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between pt-0 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <span>{currentPosts[mobileCurrentIndex].author.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-3.5 w-3.5" />
                                <span>{currentPosts[mobileCurrentIndex].date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                <span className="text-xs text-muted-foreground">{t('readTime', { time: currentPosts[mobileCurrentIndex].readTime, defaultValue: '{{time}} min read' })}</span>
                              </div>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Pagination indicators */}
                  <div className="flex justify-center gap-1 mt-4">
                    {currentPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setMobileCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${mobileCurrentIndex === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground mb-4">{t('noPosts')}</p>
              <Button onClick={() => {
                setActiveFilters({ search: "", category: "all" });
                setSearchTerm("");
                setSelectedCategory("all");
              }} variant="outline">{t('clearFilters', { defaultValue: 'Clear Filters' })}</Button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {renderPaginationItems()}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    aria-disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </motion.div>
      </div>
    </section>
  );
}
