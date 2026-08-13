import type { Project, Skill, SocialLink, TimelineItem } from "@/types";

export const profile = {
  name: "Praveen Kumar C",
  location: "Tamil Nadu, India",
  role: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "Multi-Tenant Architect",
    "Event-Driven Systems Engineer",
    "Java & Node.js Developer"
  ],
  email: "djpraveenkumar5@gmail.com",
  phone: "+91 8903164053",
  resumeUrl: "/files/Praveenupdate.pdf",
  avatar: "/images/phone-background.png",
  logo: "/images/logo.png",
  heroImage: "/images/phone-background.png",
  about: [
    "Full Stack Developer specializing in building scalable, event-driven multi-tenant web applications and RESTful microservices.",
    "Proficient in implementing high-concurrency architectures using Node.js, Express, Java/Spring Boot, React.js, Redis, and MongoDB ACID transactions.",
    "Hands-on experience with asynchronous background event queues (BullMQ + Redis), real-time WebSockets (Socket.io), and containerized deployment via Docker, with a strong track record of building automated CI/CD pipelines, interactive dashboards, and AI-powered telemetry endpoints."
  ],
};

export const coursework = [
  "Full Stack Web Dev",
  "Multi-Tenant Architecture",
  "Event-Driven Systems",
  "RESTful Web Services",
  "MongoDB ACID Transactions",
  "Asynchronous Queues (BullMQ)",
  "Database Systems (SQL)",
  "Software Testing & QA"
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "HTML5 & CSS3", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js & Express.js", level: 92, category: "backend" },
  { name: "Core Java & Spring Boot", level: 88, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PHP & JSP", level: 75, category: "backend" },

  // Database & Middleware
  { name: "MongoDB (ACID Transactions)", level: 88, category: "database" },
  { name: "Redis & BullMQ", level: 86, category: "database" },
  { name: "Socket.io (Real-time)", level: 85, category: "database" },
  { name: "MySQL & JDBC", level: 84, category: "database" },

  // Tools & DevOps
  { name: "Docker & Containerization", level: 85, category: "tools" },
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Swagger (OpenAPI 3.0) / Postman", level: 88, category: "tools" },
  { name: "Render & Vercel", level: 85, category: "tools" },
];

export const experience: TimelineItem[] = [
  {
    id: "process-associate",
    title: "Process Associate – E-Pub Developer & Data Annotator",
    subtitle: "Tamil Nadu, India",
    period: "Feb 2026 – Present",
    description:
      "Developed and validated ePub 2/3 digital publications, maintaining 100% compliance with web standards and metadata accuracy. Annotated and QA-reviewed AI/ML training datasets, enhancing data quality for machine learning workflows. Led a team segment in medical billing data operations, consistently meeting productivity targets and workflow compliance.",
    tags: ["ePub 2/3", "AI/ML Data QA", "Data Annotation", "Standards Compliance", "Medical Billing"],
  },
  {
    id: "fullstack-intern",
    title: "Full Stack Developer Intern",
    subtitle: "Mass Mind Institute · Chennai, Tamil Nadu",
    period: "Oct 2025 – Dec 2025",
    description:
      "Completed a 7-month Java Full Stack Development training mastering Core Java, Spring Boot, REST APIs, and SQL database design. Developed responsive full-stack modules utilizing React.js for UI rendering and Spring Boot for backend microservices. Optimized relational database schemas and implemented JDBC connectivity for high-speed data retrieval.",
    tags: ["Core Java", "Spring Boot", "REST APIs", "React.js", "SQL", "JDBC"],
  },
];

export const education: TimelineItem[] = [
  {
    id: "btech-it",
    title: "Bachelor of Technology – Information Technology",
    subtitle: "Mookambigai College of Engineering · Pudukkottai, Tamil Nadu",
    period: "Aug 2019 – May 2023",
    description: "Graduated with CGPA: 7.09. Focused on software engineering, database management systems, web technologies, and decentralized architectures.",
    tags: ["B.Tech IT", "CGPA: 7.09"],
  },
];

export const projects: Project[] = [
  {
    id: "nexusforce-ai",
    title: "NexusForce AI",
    category: "multi-tenant",
    description:
      "Architected an enterprise-grade multi-tenant B2B operations engine featuring MongoDB ACID transactions and session locking to prevent inventory race conditions during high-concurrency order spikes. Integrated BullMQ with Upstash Redis worker threads to asynchronously process PDF invoices and dispatch email notifications (<50ms latencies). Designed a real-time Socket.io Operations Radar, implemented Redis sliding-window rate limiting for DDoS protection, and deployed via Docker Compose on Render and Vercel.",
    icon: "layers",
    tags: ["Node.js", "Express", "React", "Redis", "BullMQ", "MongoDB", "Socket.io", "Docker"],
    featured: true,
    metrics: [
      { label: "API Latency", value: "<50ms" },
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Event Queue", value: "BullMQ + Redis" },
      { label: "Deployment", value: "Docker Compose" },
    ],
    architectureHighlights: [
      "MongoDB ACID Transactions & Session Locking prevent inventory race conditions during concurrency spikes",
      "BullMQ + Upstash Redis async worker threads offload heavy PDF generation & email processing",
      "Redis sliding-window rate-limiting shields APIs against DDoS attacks",
      "Socket.io real-time Operations Radar streams live telemetry to executive dashboards",
    ],
    links: [
      { label: "Live Demo / API Docs", href: "#" },
    ],
  },
  {
    id: "blockchain-counterfeit",
    title: "Blockchain Counterfeit Product Detection System",
    category: "blockchain",
    description:
      "Developed a decentralized supply chain web solution leveraging Blockchain technology to verify product authenticity for online and offline retail sales. Created REST APIs for secure transaction recording and smart contract execution, ensuring complete data immutability and transparency.",
    icon: "shield",
    tags: ["Java", "Spring Boot", "Blockchain", "Smart Contracts", "SQL", "REST APIs"],
    featured: true,
    metrics: [
      { label: "Security", value: "Immutable Ledger" },
      { label: "Backend", value: "Spring Boot Microservices" },
      { label: "Data Integrity", value: "100% Verified" },
    ],
    architectureHighlights: [
      "Decentralized ledger consensus verifies product provenance from manufacturer to consumer",
      "Spring Boot RESTful microservices interact with smart contracts for instant validation",
      "Tamper-proof cryptographic hashes prevent counterfeit item injection into retail channels",
    ],
    links: [
      { label: "GitHub Repository", href: "https://github.com/Djpraveenkumar" },
    ],
  },
  {
    id: "natural-disaster-analysis",
    title: "AI-Based Natural Disaster Intensity Analysis",
    category: "ai",
    description:
      "Built a predictive web application analyzing environmental sensor telemetry to classify natural disaster severity using machine learning models. Created interactive real-time visual dashboards for environmental risk assessment and reporting.",
    icon: "activity",
    tags: ["Python", "AI/ML", "React.js", "Telemetry", "Interactive Dashboards"],
    metrics: [
      { label: "ML Model", value: "Predictive Analytics" },
      { label: "Data Feed", value: "Sensor Telemetry" },
      { label: "Visualization", value: "Real-time Charts" },
    ],
    architectureHighlights: [
      "Processes real-time environmental telemetry feeds to evaluate disaster risk vectors",
      "Machine learning classification model categorizes severity intensity levels automatically",
      "React.js dashboard displays geospatial charts and early warning notifications",
    ],
    links: [
      { label: "Live Dashboard", href: "#" },
    ],
  },
];

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Djpraveenkumar", icon: "github" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/praveen-kumar-full-stack-developer",
    icon: "linkedin",
  },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/djpravee_n", icon: "instagram" },
  { id: "twitter", label: "X / Twitter", href: "https://x.com/DjPraveenKumar5", icon: "twitter" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
