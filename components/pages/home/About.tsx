import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We&apos;re not just another agency
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We believe in transparency, collaboration, and delivering results that exceed expectations. Our approach is centered around understanding your unique needs and crafting solutions that drive growth and innovation.
            </p>
            <Button variant="outline" className="animate-scale-in" asChild>
              <Link href="/about">Learn more about us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-70 blur rounded-lg group-hover:opacity-100 transition duration-300"></div>
              <Image 
                className="relative w-full rounded-lg transform transition-transform duration-300 group-hover:scale-[1.02]" 
                src="/images/home/homeabout1.png" 
                alt="Pledge & Grow office space"
                width={500}
                height={300}
              />
            </div>
            <div className="relative group mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-70 blur rounded-lg group-hover:opacity-100 transition duration-300"></div>
              <Image 
                className="relative w-full rounded-lg transform transition-transform duration-300 group-hover:scale-[1.02]" 
                src="/images/home/homeabout2.png" 
                alt="Pledge & Grow team collaboration"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
