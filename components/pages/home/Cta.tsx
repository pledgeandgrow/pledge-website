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
              Ready to transform your digital presence?
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Contact us today to discuss how we can help you achieve your business goals with our innovative solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 animate-scale-in px-8"
            asChild
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
