import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "ERB-BTP Website Redesign",
      category: "Web Development",
      description: "A complete redesign of the ERB-BTP construction company website with modern UI and improved user experience.",
      image: "/images/case-studies/erb-btp.jpg",
      link: "/case-studies/erb-btp"
    },
    {
      title: "Pledge Auto Platform",
      category: "Custom Software",
      description: "Development of an intelligent automation platform with agent workflows and third-party integrations.",
      image: "/images/case-studies/pledge-auto.jpg",
      link: "/case-studies/pledge-auto"
    },
    {
      title: "Wingman Mobile App",
      category: "Mobile Development",
      description: "A React Native mobile app for peer-to-peer shipping with real-time messaging and tracking.",
      image: "/images/case-studies/wingman.jpg",
      link: "/case-studies/wingman"
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Explore our recent projects and see how we&apos;ve helped businesses achieve their goals.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-48 bg-muted">
                {/* Image placeholder - in production, use next/image with proper src */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                  {study.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={study.link}>View Case Study</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
