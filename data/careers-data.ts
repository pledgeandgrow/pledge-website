export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  postedDate: string;
}

export interface JobDetail extends JobPosition {
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationProcess: string;
  salary?: string;
  skills: string[];
  reportingTo?: string;
  startDate?: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: "dev-001",
    title: "Chief Sales Officer",
    department: "Executive",
    location: "Paris, France",
    locationType: "Hybrid",
    employmentType: "Full-time",
    description: "We're looking for an experienced Chief Sales Officer to lead our sales strategy, drive revenue growth, and build strong client relationships across all markets.",
    postedDate: "2025-04-15"
  },
  {
    id: "dev-002",
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    locationType: "Remote",
    employmentType: "Full-time",
    description: "Join our marketing team to develop and implement internal marketing strategies that strengthen our brand identity and company culture.",
    postedDate: "2025-04-18"
  },
  {
    id: "design-001",
    title: "IT Development Intern",
    department: "Engineering",
    location: "Lyon, France",
    locationType: "Hybrid",
    employmentType: "Internship",
    description: "Join our engineering team as an IT Development Intern to gain hands-on experience with modern web technologies while working on real-world projects under experienced mentors.",
    postedDate: "2025-04-20"
  },
  {
    id: "pm-001",
    title: "Salesman",
    department: "Sales",
    location: "Remote",
    locationType: "Remote",
    employmentType: "Full-time",
    description: "Drive revenue growth by identifying and pursuing new sales opportunities, building client relationships, and closing deals effectively.",
    postedDate: "2025-04-22"
  }
];

export const jobDetails: JobDetail[] = [
  {
    id: "dev-001",
    title: "Chief Sales Officer",
    department: "Executive",
    location: "Paris, France",
    locationType: "Hybrid",
    employmentType: "Full-time",
    description: "We're looking for an experienced Chief Sales Officer to lead our sales strategy, drive revenue growth, and build strong client relationships across all markets.",
    postedDate: "2025-04-15",
    overview: "As the Chief Sales Officer at Pledge & Grow, you will be responsible for developing and executing our global sales strategy, building and leading high-performing sales teams, and driving sustainable revenue growth. You will work closely with the executive team to align sales objectives with our overall business goals and ensure consistent delivery of exceptional client experiences.",
    responsibilities: [
      "Develop and implement comprehensive sales strategies to achieve revenue targets and business objectives",
      "Build, lead, and mentor a high-performing sales team across multiple regions",
      "Establish and maintain strong relationships with key clients and strategic partners",
      "Collaborate with marketing to develop effective sales materials and campaigns",
      "Analyze market trends, competitor activities, and sales performance to identify growth opportunities",
      "Create accurate sales forecasts and reports for executive management",
      "Optimize the sales process to improve efficiency and effectiveness",
      "Represent the company at industry events and conferences"
    ],
    requirements: [
      "10+ years of progressive sales leadership experience, with at least 5 years in a senior management role",
      "Proven track record of exceeding sales targets and driving business growth",
      "Experience in the digital services, technology, or consulting industry",
      "Strong understanding of B2B sales methodologies and best practices",
      "Excellent leadership, communication, and negotiation skills",
      "Strategic thinking with a data-driven approach to decision making",
      "Bachelor's degree in Business, Marketing, or related field; MBA preferred",
      "Willingness to travel as needed (approximately 25%)"
    ],
    benefits: [
      "Competitive base salary plus performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "Retirement plan with company matching",
      "Generous paid time off and flexible work arrangements",
      "Professional development and continuing education allowance",
      "Company-sponsored events and team building activities",
      "Modern office in central Paris with hybrid work options"
    ],
    applicationProcess: "Our hiring process for this position includes an initial phone screening, followed by two rounds of interviews with the executive team and key stakeholders. Final candidates will be asked to present a 90-day sales strategy plan.",
    salary: "€120,000 - €150,000 annually plus performance bonuses",
    skills: ["Sales Leadership", "Strategic Planning", "Team Management", "Business Development", "Client Relationship Management", "Market Analysis", "Negotiation", "CRM Systems"],

    reportingTo: "CEO",
    startDate: "Immediate"
  },
  {
    id: "dev-002",
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    locationType: "Remote",
    employmentType: "Full-time",
    description: "Join our marketing team to develop and implement internal marketing strategies that strengthen our brand identity and company culture.",
    postedDate: "2025-04-18",
    overview: "As a Marketing Intern at Pledge & Grow, you will work directly with our Marketing team to support various marketing initiatives, gain hands-on experience in digital marketing, and contribute to our brand growth. This position offers an excellent opportunity to learn and develop practical marketing skills in a dynamic and supportive environment.",
    responsibilities: [
      "Assist in creating and scheduling content for social media platforms",
      "Help develop and implement internal communication strategies",
      "Support the creation of marketing materials and presentations",
      "Conduct market research and competitor analysis",
      "Assist with email marketing campaigns and newsletter creation",
      "Track and analyze marketing metrics and campaign performance",
      "Participate in brainstorming sessions for new marketing initiatives",
      "Support the team with administrative tasks related to marketing activities"
    ],
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, Business, or related field",
      "Strong interest in digital marketing and brand development",
      "Excellent written and verbal communication skills",
      "Basic knowledge of social media platforms and digital marketing concepts",
      "Creativity and willingness to contribute ideas",
      "Ability to work independently and as part of a team",
      "Basic proficiency with design tools (Canva, Adobe Creative Suite) is a plus",
      "Organized with good attention to detail"
    ],
    benefits: [
      "Paid internship with flexible remote working hours",
      "Mentorship from experienced marketing professionals",
      "Hands-on experience with real marketing projects and campaigns",
      "Networking opportunities within the industry",
      "Possibility of full-time employment upon successful completion",
      "Access to online learning resources and training",
      "Regular feedback and career development guidance"
    ],
    applicationProcess: "Our selection process includes a resume review, a brief marketing assignment, and an interview with the Marketing Manager and team members. We aim to provide a decision within two weeks of application.",
    salary: "€1,200 - €1,500 monthly stipend",
    skills: ["Social Media Marketing", "Content Creation", "Market Research", "Email Marketing", "Analytics", "Communication", "Creativity", "Organization"],

    reportingTo: "Marketing Manager",
    startDate: "Flexible"
  },
  {
    id: "design-001",
    title: "IT Development Intern",
    department: "Engineering",
    location: "Lyon, France",
    locationType: "Hybrid",
    employmentType: "Internship",
    description: "Join our engineering team as an IT Development Intern to gain hands-on experience with modern web technologies while working on real-world projects under experienced mentors.",
    postedDate: "2025-04-20",
    overview: "As an IT Development Intern at Pledge & Grow, you will be immersed in our engineering team, working on real client projects while learning modern web development practices. This internship provides a structured learning environment where you'll gain practical experience with Next.js, React, and other cutting-edge technologies under the guidance of experienced developers.",
    responsibilities: [
      "Assist in developing and maintaining web applications using Next.js and React",
      "Collaborate with senior developers on feature implementation and bug fixes",
      "Participate in code reviews and technical discussions",
      "Learn and apply best practices in web development",
      "Assist in writing and maintaining technical documentation",
      "Contribute to UI/UX improvements and implementations",
      "Test applications and identify issues",
      "Participate in agile development processes including daily stand-ups and sprint planning"
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science, Software Engineering, or related technical field",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React or similar frontend frameworks is a plus",
      "Understanding of version control systems (Git)",
      "Eager to learn and problem-solve",
      "Good communication skills and ability to work in a team",
      "Self-motivated with attention to detail",
      "Interest in web development and modern technologies"
    ],
    benefits: [
      "Paid internship with flexible hybrid working arrangement",
      "Hands-on experience with modern web technologies",
      "Mentorship from senior developers",
      "Exposure to the full software development lifecycle",
      "Opportunity to work on real client projects",
      "Regular feedback and code reviews",
      "Networking opportunities within the tech industry",
      "Possibility of full-time employment upon successful completion"
    ],
    applicationProcess: "Our selection process includes a resume review, a technical assessment to evaluate your current skills, and an interview with the Engineering team. We value potential and enthusiasm over perfect technical knowledge.",
    salary: "€1,300 - €1,600 monthly stipend",
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Git", "Responsive Design", "Problem Solving", "Teamwork"],

    reportingTo: "Lead Developer",
    startDate: "June 2025"
  },
  {
    id: "pm-001",
    title: "Salesman",
    department: "Sales",
    location: "Remote",
    locationType: "Remote",
    employmentType: "Full-time",
    description: "Drive revenue growth by identifying and pursuing new sales opportunities, building client relationships, and closing deals effectively.",
    postedDate: "2025-04-22",
    overview: "As a Salesman at Pledge & Grow, you will be responsible for generating new business opportunities, managing the sales process from lead to close, and building lasting relationships with clients. You'll work closely with our marketing and delivery teams to ensure client needs are understood and met, contributing directly to our company's growth and success.",
    responsibilities: [
      "Identify and pursue new sales opportunities through outbound calls, emails, and networking",
      "Qualify leads and manage sales pipeline effectively",
      "Conduct product demonstrations and presentations to potential clients",
      "Understand client needs and propose appropriate solutions",
      "Negotiate contracts and close deals to achieve sales targets",
      "Maintain accurate records in our CRM system",
      "Build and nurture relationships with existing and potential clients",
      "Stay informed about industry trends, competitors, and market conditions"
    ],
    requirements: [
      "2+ years of B2B sales experience, preferably in technology or digital services",
      "Proven track record of meeting or exceeding sales targets",
      "Excellent communication, presentation, and negotiation skills",
      "Strong relationship-building abilities with clients at various organizational levels",
      "Self-motivated with a results-driven approach",
      "Ability to work independently in a remote environment",
      "Proficiency with CRM systems and sales tools",
      "Bachelor's degree in Business, Marketing, or related field preferred"
    ],
    benefits: [
      "Competitive base salary plus commission structure",
      "Comprehensive health insurance package",
      "Retirement savings plan",
      "Flexible remote working arrangement",
      "Professional development opportunities",
      "Modern sales enablement tools and resources",
      "Regular team meetings and company events",
      "Career advancement opportunities in a growing company"
    ],
    applicationProcess: "Our hiring process includes an initial phone screening, a video interview with the Sales Manager, and a final interview that includes a sales role-play scenario. We aim to provide candidates with a decision within three weeks.",
    salary: "",
    skills: ["B2B Sales", "Lead Generation", "Negotiation", "CRM Management", "Relationship Building", "Product Demonstration", "Problem Solving", "Time Management"],

    reportingTo: "Sales Manager",
    startDate: "Immediate"
  }
];
