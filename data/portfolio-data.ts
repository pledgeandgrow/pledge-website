import { ClientProject } from "@/components/ui/client-modal";

export const portfolioProjects: ClientProject[] = [
  {
    id: "1",
    name: "TechVision",
    logo: "/images/portfolio/techvision-logo.png",
    description: "A comprehensive SaaS platform for AI-powered business analytics and insights, helping companies make data-driven decisions.",
    industry: "Technology",
    year: 2024,
    deliverables: [
      "Web Application",
      "Admin Dashboard",
      "API Integration",
      "Data Visualization"
    ],
    needs: [
      "Create a scalable SaaS platform with real-time analytics",
      "Develop intuitive data visualization tools",
      "Implement secure user authentication and role management",
      "Integrate with third-party data sources and APIs"
    ],
    methodology: {
      approach: "We used an Agile development approach with two-week sprints, focusing on delivering incremental value. The project was divided into core modules that were developed in parallel by specialized teams.",
      technologies: ["Cloud Computing", "Big Data", "Machine Learning", "Real-time Analytics"],
      languages: ["TypeScript", "Python", "SQL"],
      frameworks: ["Next.js", "FastAPI", "TensorFlow"],
      libraries: ["React", "D3.js", "Pandas", "NumPy"],
      apis: ["Google Analytics", "Stripe", "AWS S3"]
    },
    outcome: {
      statistics: [
        { label: "Increase in Data Processing Speed", value: "85%" },
        { label: "Reduction in Analysis Time", value: "60%" },
        { label: "User Adoption Rate", value: "92%" }
      ],
      benefits: [
        "Reduced decision-making time from days to hours",
        "Increased accuracy of business forecasts by 40%",
        "Streamlined reporting process saving 20 hours per week",
        "Enabled real-time monitoring of critical business metrics"
      ],
      improvements: [
        "Automated data collection and preprocessing",
        "Implemented predictive analytics for trend forecasting",
        "Created customizable dashboards for different user roles",
        "Developed API connectors for seamless third-party integration"
      ],
      testimonial: {
        quote: "The platform has transformed how we analyze data and make decisions. What used to take days now happens in real-time, giving us a significant competitive advantage.",
        author: "Sarah Johnson",
        position: "CTO, TechVision"
      }
    }
  },
  {
    id: "2",
    name: "GreenEarth",
    logo: "/images/portfolio/greenearth-logo.png",
    description: "An eco-friendly e-commerce platform specializing in sustainable products with carbon footprint tracking and ethical sourcing information.",
    industry: "Retail",
    year: 2023,
    deliverables: [
      "E-commerce Website",
      "Mobile App",
      "Payment Gateway",
      "Inventory Management"
    ],
    needs: [
      "Build a sustainable e-commerce platform with carbon footprint tracking",
      "Create a transparent supply chain visualization system",
      "Implement secure payment processing",
      "Develop a responsive design for all devices"
    ],
    methodology: {
      approach: "We employed a user-centered design process, starting with extensive research on eco-conscious consumers. The development followed a feature-driven approach with continuous user testing.",
      technologies: ["E-commerce", "PWA", "Sustainable Tech", "Supply Chain Tracking"],
      languages: ["JavaScript", "PHP", "HTML/CSS"],
      frameworks: ["React", "Laravel", "Bootstrap"],
      libraries: ["Redux", "Chart.js", "Leaflet"],
      apis: ["PayPal", "Stripe", "Google Maps", "Carbon Footprint API"]
    },
    outcome: {
      statistics: [
        { label: "Conversion Rate", value: "4.8%" },
        { label: "Reduction in Cart Abandonment", value: "32%" },
        { label: "Increase in Average Order Value", value: "28%" }
      ],
      benefits: [
        "Established a strong brand identity in the sustainable market",
        "Created transparency in product sourcing and manufacturing",
        "Reduced customer support inquiries by 45% through improved UX",
        "Increased customer retention through loyalty program integration"
      ],
      improvements: [
        "Implemented real-time carbon footprint calculation for each purchase",
        "Created an interactive supply chain map for product origins",
        "Developed a recommendation engine based on sustainability preferences",
        "Optimized checkout process reducing steps by 40%"
      ],
      testimonial: {
        quote: "Our vision was to create an e-commerce platform that aligned with our values of sustainability and transparency. Pledge & Grow delivered beyond our expectations, creating a beautiful and functional site that our customers love.",
        author: "Michael Chen",
        position: "Founder, GreenEarth"
      }
    }
  },
  {
    id: "3",
    name: "HealthPlus",
    logo: "/images/portfolio/healthplus-logo.png",
    description: "A comprehensive healthcare management system connecting patients with healthcare providers, managing appointments, prescriptions, and medical records securely.",
    industry: "Healthcare",
    year: 2023,
    deliverables: [
      "Web Portal",
      "Mobile App",
      "Telemedicine Integration",
      "Secure Medical Records"
    ],
    needs: [
      "Develop a HIPAA-compliant healthcare platform",
      "Create seamless appointment scheduling system",
      "Implement secure messaging between patients and providers",
      "Build a prescription management system"
    ],
    methodology: {
      approach: "Given the sensitive nature of healthcare data, we prioritized security and compliance throughout the development process. We used a modular architecture to ensure scalability and ease of maintenance.",
      technologies: ["Telemedicine", "Encryption", "Cloud Security", "Real-time Communication"],
      languages: ["TypeScript", "Java", "Swift"],
      frameworks: ["Angular", "Spring Boot", "SwiftUI"],
      libraries: ["RxJS", "Hibernate", "HealthKit"],
      apis: ["Twilio", "Stripe", "Google Calendar", "Electronic Health Records API"]
    },
    outcome: {
      statistics: [
        { label: "Reduction in Appointment No-shows", value: "68%" },
        { label: "Increase in Patient Satisfaction", value: "47%" },
        { label: "Time Saved on Administrative Tasks", value: "15 hrs/week" }
      ],
      benefits: [
        "Streamlined appointment scheduling and management",
        "Improved patient engagement through secure messaging",
        "Enhanced prescription tracking and refill process",
        "Reduced administrative burden on healthcare staff"
      ],
      improvements: [
        "Implemented AI-powered symptom checker",
        "Created a secure document sharing system",
        "Developed automated appointment reminders",
        "Built a comprehensive analytics dashboard for healthcare providers"
      ],
      testimonial: {
        quote: "HealthPlus has revolutionized how we interact with our patients. The platform is intuitive for both our staff and patients, while maintaining the highest standards of security and compliance.",
        author: "Dr. Emily Rodriguez",
        position: "Medical Director, HealthPlus"
      }
    }
  },
  {
    id: "4",
    name: "FinTrack",
    logo: "/images/portfolio/fintrack-logo.png",
    description: "A personal finance management application helping users track expenses, set budgets, and achieve financial goals with AI-powered insights.",
    industry: "Finance",
    year: 2022,
    deliverables: [
      "Mobile App",
      "Web Dashboard",
      "Financial Analytics",
      "Bank Integration"
    ],
    needs: [
      "Create an intuitive personal finance tracking app",
      "Develop secure bank account integration",
      "Implement budget planning and goal setting features",
      "Build AI-powered financial insights and recommendations"
    ],
    methodology: {
      approach: "We followed a mobile-first design approach, focusing on creating a seamless user experience across devices. Security was paramount given the sensitive financial data being handled.",
      technologies: ["FinTech", "Open Banking", "Data Encryption", "Machine Learning"],
      languages: ["JavaScript", "Kotlin", "Swift"],
      frameworks: ["React Native", "Express.js", "CoreML"],
      libraries: ["Redux", "TensorFlow.js", "Chart.js"],
      apis: ["Plaid", "Yodlee", "OpenBanking API"]
    },
    outcome: {
      statistics: [
        { label: "User Retention Rate", value: "78%" },
        { label: "Average Savings Increase", value: "24%" },
        { label: "App Store Rating", value: "4.8/5" }
      ],
      benefits: [
        "Helped users reduce unnecessary spending by 18% on average",
        "Increased financial literacy through educational content",
        "Simplified expense tracking and categorization",
        "Enabled better financial planning and goal achievement"
      ],
      improvements: [
        "Implemented automated expense categorization using AI",
        "Created personalized savings recommendations",
        "Developed visual budget tracking with predictive analysis",
        "Built a secure multi-factor authentication system"
      ],
      testimonial: {
        quote: "FinTrack has completely changed how I manage my finances. The insights are incredibly helpful, and I've been able to save more than ever before. The interface is beautiful and intuitive.",
        author: "Alex Thompson",
        position: "FinTrack User"
      }
    }
  },
  {
    id: "5",
    name: "EduLearn",
    logo: "/images/portfolio/edulearn-logo.png",
    description: "An interactive e-learning platform with personalized learning paths, progress tracking, and collaborative tools for students and educators.",
    industry: "Education",
    year: 2022,
    deliverables: [
      "Learning Management System",
      "Interactive Content Creator",
      "Progress Analytics",
      "Collaboration Tools"
    ],
    needs: [
      "Build a comprehensive learning management system",
      "Create tools for interactive content development",
      "Implement personalized learning paths",
      "Develop robust analytics for tracking student progress"
    ],
    methodology: {
      approach: "We used a collaborative approach, working closely with educators and students throughout the development process. The platform was built with modularity in mind, allowing for easy expansion and customization.",
      technologies: ["EdTech", "Adaptive Learning", "Gamification", "Real-time Collaboration"],
      languages: ["TypeScript", "Python", "HTML/CSS"],
      frameworks: ["Vue.js", "Django", "Tailwind CSS"],
      libraries: ["Vuex", "Socket.io", "D3.js"],
      apis: ["Google Classroom", "YouTube", "OpenAI"]
    },
    outcome: {
      statistics: [
        { label: "Improvement in Student Engagement", value: "62%" },
        { label: "Increase in Course Completion Rate", value: "41%" },
        { label: "Reduction in Administrative Time", value: "35%" }
      ],
      benefits: [
        "Enhanced student engagement through interactive content",
        "Improved learning outcomes with personalized paths",
        "Simplified course management for educators",
        "Enabled data-driven teaching strategies"
      ],
      improvements: [
        "Implemented adaptive learning algorithms",
        "Created a collaborative virtual classroom environment",
        "Developed comprehensive progress tracking and reporting",
        "Built an intuitive content creation system for educators"
      ],
      testimonial: {
        quote: "EduLearn has transformed our online learning program. The platform is incredibly flexible, allowing us to create engaging content while providing valuable insights into student progress and performance.",
        author: "Professor James Wilson",
        position: "Education Director, EduLearn"
      }
    }
  }
];
