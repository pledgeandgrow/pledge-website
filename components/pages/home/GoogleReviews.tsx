"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of reviews to display at once based on screen size
  const [displayCount, setDisplayCount] = useState(3);

  // Update display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 768 ? 1 : 3);
    };
    
    // Set initial display count
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would be an API route that securely calls the Google Places API
        // For now, we'll simulate the API response
        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Google reviews');
        }
        
        const data = await response.json();
        setReviews(data.reviews || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Could not load reviews at this time');
        // Fallback to sample reviews for demo purposes
        setReviews(sampleReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, Math.max(0, reviews.length - displayCount))
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-muted/30'}`} 
        fill={i < rating ? 'currentColor' : 'none'} 
      />
    ));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Visible reviews based on current index
  const visibleReviews = reviews.slice(currentIndex, currentIndex + displayCount);

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Google Reviews
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            See what our clients are saying about us on Google.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="p-8 bg-card border border-border rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Skeleton className="h-5 w-28" />
                </div>
                <Skeleton className="h-24 w-full mb-4" />
                <div className="flex items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground">{error}</div>
        ) : (
          <>
            <div className="relative">
              {/* Navigation Buttons */}
              {reviews.length > displayCount && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 rounded-full bg-background shadow-md"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    <span className="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 rounded-full bg-background shadow-md"
                    onClick={handleNext}
                    disabled={currentIndex >= reviews.length - displayCount}
                  >
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Button>
                </>
              )}

              {/* Reviews Grid - 1 card per line on mobile */}
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3 transition-all duration-300">
                {visibleReviews.map((review, index) => (
                  <div 
                    key={index} 
                    className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <blockquote className="text-lg italic mb-4 line-clamp-4">
                      &quot;{review.text}&quot;
                    </blockquote>
                    <div className="flex items-center">
                      {review.profile_photo_url ? (
                        <Image 
                          src={review.profile_photo_url} 
                          alt={review.author_name} 
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {review.author_name.charAt(0)}
                        </div>
                      )}
                      <div className="ml-3">
                        <h3 className="text-lg font-medium">{review.author_name}</h3>
                        <p className="text-muted-foreground text-sm">{formatDate(review.time)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://g.page/r/pledge-and-company/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>Leave us a review on Google</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Sample reviews for demonstration purposes
const sampleReviews: GoogleReview[] = [
  {
    author_name: "Jean Dupont",
    rating: 5,
    text: "Excellent work! The Pledge team has completely transformed our online presence. Our new website is not only beautiful, but it also generates many more leads for our business.",
    time: 1714503600, // May 1, 2024
  },
  {
    author_name: "Marie Lambert",
    rating: 5,
    text: "I highly recommend Pledge for any web development project. Their technical expertise and design sense have created a site that exceeds all our expectations. Very professional and attentive.",
    time: 1712084400, // April 3, 2024
  },
  {
    author_name: "Thomas Martin",
    rating: 4,
    text: "Very good experience with Pledge. The team is responsive and professional. Our mobile application works perfectly and user feedback has been excellent.",
    time: 1709492400, // March 4, 2024
  },
  {
    author_name: "Sophie Dubois",
    rating: 5,
    text: "A big thank you to the entire Pledge team for their excellent work on our e-commerce project. The site is fast, easy to use, and our sales have increased by 35% since launch!",
    time: 1706900400, // February 3, 2024
  },
  {
    author_name: "Pierre Moreau",
    rating: 5,
    text: "Pledge developed a custom solution for our company that has significantly improved our efficiency. Their methodical approach and clear communication made the process very smooth.",
    time: 1704308400, // January 4, 2024
  }
];
