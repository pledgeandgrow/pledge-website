import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Mehdi BEREL",
      role: "Chairman",
      companyRole: "Chief Executive Officer",
      bio: "With extensive experience in business leadership, Mehdi drives the strategic vision and growth of our company.",

      social: {
        linkedin: "https://linkedin.com/in/mehdi-berel",
        twitter: "https://twitter.com/mehdi-berel",
        github: "https://github.com/mehdi-berel"
      }
    },
    {
      name: "Shihab BEREL",
      role: "Chairman",
      companyRole: "Chief Technology Officer",
      bio: "Shihab brings innovative thinking and technical expertise to our leadership team, focusing on product development.",

      social: {
        linkedin: "https://linkedin.com/in/shihab-berel",
        twitter: "https://twitter.com/shihab-berel",
        github: "https://github.com/shihab-berel"
      }
    },
    {
      name: "Ilyas BEREL",
      role: "Chairman",
      companyRole: "Chief Financial Officer",
      bio: "Ilyas oversees operations and client relationships, ensuring we deliver exceptional value and service.",

      social: {
        linkedin: "https://linkedin.com/in/ilyas-berel",
        twitter: "https://twitter.com/ilyas-berel",
        github: "https://github.com/ilyas-berel"
      }
    }
  ];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chairmen
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Meet our leadership team guiding the vision and success of our company.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in p-6"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >

              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.companyRole}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
