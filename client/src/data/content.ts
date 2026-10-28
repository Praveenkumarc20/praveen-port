import type { FAQItem, Project, ServiceItem, Skill, SocialLink, TimelineItem } from "@/types";

export const profile = {
  name: "Praveen Kumar C",
  location: "Tamil Nadu, India",
  role: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "SaaS Product Engineer",
    "Multi-Tenant Architect",
    "Java & Spring Boot Developer"
  ],
  email: "djpraveenkumar5@gmail.com",
  phone: "+91 8903164053",
  resumeUrl: "/files/Praveenupdate.pdf",
  avatar: "/images/profile-headshot.png",
  logo: "/images/logo.png",
  heroImage: "/images/profile-headshot.png",
  about: [
    "Full Stack Developer at Senchola Technology Solutions (Tiruchirappalli), actively building scalable B2B SaaS products, enterprise CRM platforms, backend integrations, and production web applications.",
    "Hands-on expertise engineering multi-tenant SaaS solutions including the WhatsApp CRM (wacrm) platform, Verna Construction corporate portal, Trichypreneurs web systems, and custom business CRM workflows using React.js, Java/Spring Boot, Node.js, and MySQL relational persistence.",
    "Experienced in designing multi-tenant data schemas, integrating secure RESTful APIs, optimizing database queries, and providing reliable IT support and application troubleshooting across production SaaS environments."
  ],
};

export const coursework = [
  "B2B SaaS Engineering",
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
  { name: "React.js & Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend" },
  { name: "Tailwind CSS & CSS3", level: 90, category: "frontend" },
  { name: "HTML5 & Web Standards", level: 95, category: "frontend" },
  { name: "WordPress & Elementor", level: 86, category: "frontend" },
  
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
    id: "senchola-fullstack",
    title: "Full Stack Developer — SaaS & Web Solutions",
    subtitle: "Senchola Technology Solutions · Tiruchirappalli, Tamil Nadu",
    period: "Aug 2026 – Present",
    description:
      "Working as a Full Stack Developer architecting and building scalable B2B SaaS products, enterprise CRM solutions, and business websites. Spearhead frontend UI development and backend REST API integrations for multi-tenant SaaS platforms, notably WhatsApp CRM (wacrm) and custom business CRM workflows. Customize and maintain responsive client web portals including Verna Construction and Trichypreneurs using modern web frameworks and WordPress/Elementor. Manage MySQL database operations, tenant data isolation, application performance optimization, debugging, and continuous IT infrastructure maintenance.",
    tags: [
      "B2B SaaS Products",
      "Multi-Tenant Architecture",
      "Full Stack Development",
      "WhatsApp CRM",
      "Java & Spring Boot",
      "React.js",
      "WordPress & Elementor",
      "MySQL",
      "REST APIs",
      "IT Support & Maintenance",
    ],
  },
  {
    id: "process-associate",
    title: "Process Associate – E-Pub Developer & Data Annotator",
    subtitle: "Tamil Nadu, India",
    period: "Feb 2026 – Jul 2026",
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
    id: "wacrm-whatsapp-crm",
    title: "wacrm — WhatsApp CRM & Engagement Platform",
    category: "multi-tenant",
    description:
      "Enterprise-grade WhatsApp CRM platform designed to unify customer interactions, lead pipelines, and team collaboration. Engineered a modular Spring Boot 3.x layered backend with React.js, secured via Spring Security & stateless JWT, backed by MySQL relational persistence, and integrated with Meta WhatsApp Business Platform APIs & Webhooks for real-time messaging.",
    icon: "layers",
    tags: ["Java 21", "Spring Boot 3", "React.js", "Spring Security", "JWT", "MySQL", "Hibernate", "WhatsApp API", "REST APIs"],
    featured: true,
    metrics: [
      { label: "Backend", value: "Spring Boot 3 & Java 21" },
      { label: "Auth & Security", value: "JWT + RBAC" },
      { label: "Database", value: "MySQL 8 + JPA" },
      { label: "Integration", value: "WhatsApp Cloud API" },
    ],
    architectureHighlights: [
      "Layered architecture separating Controller, Service, Repository, DTO, and Global Exception Handling",
      "Stateless Spring Security with JWT tokens, BCrypt hashing, and role-based access control (RBAC)",
      "Meta WhatsApp Business API integration with secure Webhook signature verification for real-time event ingestion",
      "Normalized MySQL relational schema managed via Spring Data JPA with transactional consistency",
      "Interactive React.js dashboard for Kanban sales pipelines, contact tagging, and campaign analytics",
    ],
    links: [
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
    ],
  },
  {
    id: "verna-construction",
    title: "Verna Construction Corporate Website",
    category: "web-design",
    description:
      "Designed and developed a responsive corporate web portal for Verna Construction featuring customized Astra theme architecture, Elementor page hierarchies, and ElementsKit UI components. Built with brand identity standards (deep green #004741 and cream #F0EDE4), transparent header navigation, custom CSS layout refinements, and Contact Form 7 integration for customer inquiries.",
    icon: "globe",
    tags: ["WordPress", "Elementor", "Astra Theme", "ElementsKit", "Custom CSS", "Responsive Design", "UI/UX", "Contact Form 7"],
    featured: true,
    metrics: [
      { label: "Platform", value: "WordPress CMS" },
      { label: "Design System", value: "Elementor + Astra" },
      { label: "Styling", value: "Custom CSS & UI/UX" },
      { label: "Lead Gen", value: "Contact Form 7" },
    ],
    architectureHighlights: [
      "Customized Astra theme and ElementsKit transparent header navigation with sticky scroll transitions",
      "Engineered responsive multi-section page layouts with Elementor maintaining visual hierarchy",
      "Developed custom CSS overrides for brand typography, spacing, and two-tone color palette (#004741 & #F0EDE4)",
      "Configured Contact Form 7 with server-side validation and automated email notification dispatch",
      "Optimized mobile responsiveness and cross-browser rendering across desktop, tablet, and mobile breakpoints",
    ],
    links: [
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
    ],
  },
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
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
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
  { id: "github", label: "GitHub", href: "https://github.com/Praveenkumarc20", icon: "github" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/praveen-kumar-full-stack-developer",
    icon: "linkedin",
  },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/djpravee_n", icon: "instagram" },
  { id: "twitter", label: "X / Twitter", href: "https://x.com/DjPraveenKumar5", icon: "twitter" },
];

export const services: ServiceItem[] = [
  {
    id: "full-stack-web",
    title: "Full-Stack Web Development",
    description:
      "Build responsive production web applications with React.js, Node.js, Java, and Spring Boot, focusing on clean architecture and high performance.",
    tags: ["React.js & Next.js", "TypeScript & JavaScript", "Node.js & Express", "Java & Spring Boot"],
    icon: "code",
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant SaaS & CRM",
    description:
      "Engineer scalable B2B SaaS products, enterprise CRM platforms, and secure tenant-isolated data schemas with granular role-based access control.",
    tags: ["Multi-Tenant Architecture", "WhatsApp CRM", "JWT & RBAC", "MongoDB & MySQL"],
    icon: "layers",
  },
  {
    id: "event-driven-backend",
    title: "Event-Driven Backend Systems",
    description:
      "Build RESTful microservices and asynchronous processing pipelines for reliable production systems using background queues and real-time streaming.",
    tags: ["RESTful APIs", "Redis & BullMQ", "Socket.io", "MongoDB ACID Transactions"],
    icon: "cpu",
  },
  {
    id: "websites-support",
    title: "Websites & Production Support",
    description:
      "Develop responsive business websites and maintain dependable web applications and infrastructure with proactive debugging and optimization.",
    tags: ["WordPress & Elementor", "Responsive Web Design", "Database Optimization", "IT Support & Maintenance"],
    icon: "globe",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "01. Who is Praveen Kumar C?",
    answer:
      "Praveen Kumar C is a Full Stack Developer & Systems Architect currently working at Senchola Technology Solutions in Tiruchirappalli, Tamil Nadu, India. He specializes in building scalable B2B SaaS applications, enterprise WhatsApp CRM platforms, responsive corporate websites, and secure RESTful microservices.",
  },
  {
    id: "faq-2",
    question: "02. What technologies do you work with?",
    answer:
      "Praveen specializes in Java 21, Spring Boot 3, React.js, Next.js, TypeScript, Node.js & Express, MySQL, MongoDB with ACID transactions, Redis & BullMQ event queues, Socket.io, Docker containerization, and CMS development using WordPress and Elementor.",
  },
  {
    id: "faq-3",
    question: "03. Are you available for roles and consulting?",
    answer:
      "Yes, Praveen is available for full-time Full Stack Developer roles, B2B SaaS consulting, and technical web engineering collaborations. Reach out through the contact form or email djpraveenkumar5@gmail.com.",
  },
  {
    id: "faq-4",
    question: "04. What kinds of projects have you built?",
    answer:
      "Praveen has engineered enterprise WhatsApp CRM platforms (wacrm), Verna Construction corporate portals, multi-tenant B2B operations engines (NexusForce AI), blockchain counterfeit prevention systems, and AI-driven telemetry analytics applications.",
  },
  {
    id: "faq-5",
    question: "05. What is your educational background?",
    answer:
      "Praveen holds a Bachelor of Technology (B.Tech) in Information Technology from Mookambigai College of Engineering (Pudukkottai, Tamil Nadu) with a CGPA of 7.09, supplemented by intensive training in Full Stack Software Engineering.",
  },
  {
    id: "faq-6",
    question: "06. How can I contact you?",
    answer:
      "You can contact Praveen directly via email at djpraveenkumar5@gmail.com, call or WhatsApp at +91 8903164053, connect on LinkedIn at linkedin.com/in/praveen-kumar-full-stack-developer, or submit the contact form on this site.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;
