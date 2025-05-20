import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mark Thompson",
      role: "CTO, TechVision",
      quote: "Pledge delivered an exceptional website that exceeded our expectations. Their team was professional, responsive, and truly understood our vision.",
      rating: 5,
      image: "/images/testimonials/mark-thompson.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, GrowthHub",
      quote: "Working with Pledge was a game-changer for our business. Their expertise in web development and design helped us increase our conversion rate by 40%.",
      rating: 5,
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "David Chen",
      role: "Founder, Innovate Solutions",
      quote: "Pledge's team went above and beyond to deliver a mobile app that perfectly aligned with our brand and user needs. Highly recommended!",
      rating: 4,
      image: "/images/testimonials/david-chen.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-muted/30'}`} 
        fill={i < rating ? 'currentColor' : 'none'} 
      />
    ));
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Don&apos;t just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-lg italic mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
