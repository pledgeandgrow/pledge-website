import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-70"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Let&apos;s work together to bring your vision to life with our expertise in design and development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 animate-scale-in" 
              style={{ animationDelay: "0.2s" }} 
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 animate-scale-in" 
              style={{ animationDelay: "0.3s" }} 
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
