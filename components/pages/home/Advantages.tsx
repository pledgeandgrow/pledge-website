import { CheckCircle } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      title: "Innovative Solutions",
      description: "We leverage the latest technologies to create cutting-edge solutions that keep you ahead of the competition.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Expert Team",
      description: "Our team of experienced professionals brings diverse skills and perspectives to every project.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Tailored Approach",
      description: "We understand that every business is unique, so we customize our solutions to meet your specific needs.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Scalable Technology",
      description: "Our solutions are built to grow with your business, ensuring long-term success and adaptability.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Responsive Support",
      description: "We provide ongoing support and maintenance to ensure your digital assets continue to perform optimally.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business objectives and ROI.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Pledge & Grow?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            We combine innovation, expertise, and dedication to deliver exceptional results for our clients.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {advantage.icon}
                <h3 className="ml-2 text-xl font-bold">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
