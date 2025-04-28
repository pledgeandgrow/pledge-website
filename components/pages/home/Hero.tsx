import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none mb-6">
              Building the future with innovative solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
              We create cutting-edge digital experiences that transform businesses and delight users with modern technology and exceptional design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="animate-scale-in" style={{ animationDelay: "0.2s" }} asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in" style={{ animationDelay: "0.3s" }} asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur rounded-lg"></div>
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
                className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                width={500}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
