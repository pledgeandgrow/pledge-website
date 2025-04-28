import { Target, Heart, Zap } from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            We&apos;re on a mission to transform how businesses connect with their audiences through innovative digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Purpose-Driven</h3>
            <p className="text-muted-foreground text-center">
              We create digital solutions that serve a clear purpose and deliver measurable results for our clients.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">User-Centered</h3>
            <p className="text-muted-foreground text-center">
              We put users at the heart of everything we design, creating experiences that are intuitive, accessible, and delightful.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Innovation-Focused</h3>
            <p className="text-muted-foreground text-center">
              We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
