import type { FAQItem, Project, ServiceItem, Skill, SocialLink, TimelineItem } from "@/types";

export const profile = {
  name: "Praveen Kumar C",
  location: "Tiruchirappalli, Tamil Nadu, India",
  role: "Full Stack Developer & Generative AI Engineer",
  taglines: [
    "Full Stack Developer",
    "Generative AI & Agent Engineer",
    "FastAPI & Spring Boot Architect",
    "Multi-Tenant SaaS Engineer",
    "React.js & Next.js Developer"
  ],
  email: "djpraveenkumar5@gmail.com",
  phone: "+91 8903164053",
  resumeUrl: "/files/Praveenupdate.pdf",
  avatar: "/images/profile-headshot.png",
  logo: "/images/logo.png",
  heroImage: "/images/profile-headshot.png",
  about: [
    "Full Stack Developer & Generative AI Engineer at Senchola Technology Solutions in Tiruchirappalli, Tamil Nadu, engineering production web applications, autonomous AI agents, enterprise multi-tenant SaaS products, and high-concurrency microservices.",
    "Proven expertise architecting Retrieval-Augmented Generation (RAG) pipelines, LangChain and LangGraph agentic workflows, LLM API integrations, and scalable RESTful backends using Python, FastAPI, Java, Spring Boot, and Node.js.",
    "Extensive experience engineering high-performance frontend interfaces with React.js, Next.js, TypeScript, and Tailwind CSS, complemented by enterprise relational persistence across PostgreSQL and MySQL, vector database indexing, Redis caching, and Docker containerization."
  ],
};

export const coursework = [
  "Generative AI & LLMs",
  "AI Agents (LangChain & LangGraph)",
  "RAG & Vector Databases",
  "FastAPI & Python Microservices",
  "Java & Spring Boot 3",
  "B2B SaaS Engineering",
  "Multi-Tenant Architecture",
  "React.js & Next.js 14",
  "PostgreSQL & MySQL Systems",
  "Docker Containerization & Linux",
  "RESTful APIs & OpenAPI 3.0",
  "Software Testing & QA"
];

export const skills: Skill[] = [
  // 1. Artificial Intelligence & Generative AI (ai)
  { name: "Generative AI", icon: "generative", category: "ai", badge: "GenAI & LLMs" },
  { name: "Large Language Models (LLMs)", icon: "llm", category: "ai", badge: "Transformer Models" },
  { name: "LangChain", icon: "langchain", category: "ai", badge: "Agent Framework" },
  { name: "LangGraph", icon: "langgraph", category: "ai", badge: "Stateful Workflows" },
  { name: "AI Agent Development", icon: "agent", category: "ai", badge: "Autonomous Systems" },
  { name: "Retrieval-Augmented Generation (RAG)", icon: "rag", category: "ai", badge: "Knowledge Retrieval" },
  { name: "Prompt Engineering", icon: "prompt", category: "ai", badge: "Few-Shot & ReAct" },
  { name: "Text Embeddings", icon: "embedding", category: "ai", badge: "Semantic Vectors" },
  { name: "Semantic Search", icon: "semantic", category: "ai", badge: "Contextual Querying" },
  { name: "Vector Databases", icon: "vector", category: "ai", badge: "ChromaDB & Pinecone" },
  { name: "Function Calling / Tool Calling", icon: "function", category: "ai", badge: "Tool Execution" },
  { name: "Structured Outputs", icon: "structured", category: "ai", badge: "Pydantic & JSON" },
  { name: "LLM API Integration", icon: "llmapi", category: "ai", badge: "OpenAI & Anthropic" },
  { name: "AI Chatbot Development", icon: "chatbot", category: "ai", badge: "Conversational UI" },
  { name: "Workflow Automation", icon: "workflow", category: "ai", badge: "Event-Driven" },
  { name: "Document Processing", icon: "document", category: "ai", badge: "Parser & Chunking" },

  // 2. Backend Development & APIs (backend)
  { name: "Python", icon: "python", category: "backend", badge: "Core Language" },
  { name: "FastAPI", icon: "fastapi", category: "backend", badge: "High-Perf Async" },
  { name: "Java", icon: "java", category: "backend", badge: "OOP & Enterprise" },
  { name: "Spring Boot", icon: "spring", category: "backend", badge: "Microservices" },
  { name: "REST API Development", icon: "rest", category: "backend", badge: "HTTP & OpenAPI" },
  { name: "API Integration", icon: "apiintegration", category: "backend", badge: "Cloud & Webhooks" },
  { name: "Node.js", icon: "node", category: "backend", badge: "V8 Runtime" },
  { name: "Express.js", icon: "express", category: "backend", badge: "Middleware Engine" },

  // 3. Frontend & Web Engineering (frontend)
  { name: "React.js", icon: "react", category: "frontend", badge: "Component UI" },
  { name: "Next.js", icon: "next", category: "frontend", badge: "SSR & Full-Stack" },
  { name: "TypeScript", icon: "typescript", category: "frontend", badge: "Type Safety" },
  { name: "JavaScript (ES6+)", icon: "javascript", category: "frontend", badge: "Modern Web" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend", badge: "Utility Styling" },
  { name: "HTML5 & Web Standards", icon: "html", category: "frontend", badge: "Semantic Markup" },
  { name: "WordPress", icon: "wordpress", category: "frontend", badge: "CMS Architecture" },
  { name: "Elementor", icon: "elementor", category: "frontend", badge: "Visual Design" },

  // 4. Databases & Data Storage (database)
  { name: "PostgreSQL", icon: "postgres", category: "database", badge: "Advanced Relational" },
  { name: "MySQL", icon: "mysql", category: "database", badge: "RDBMS & Indexing" },
  { name: "Vector Databases", icon: "vector", category: "database", badge: "Vector Embeddings" },
  { name: "MongoDB", icon: "mongo", category: "database", badge: "Document Store" },
  { name: "Redis", icon: "redis", category: "database", badge: "In-Memory & Cache" },
  { name: "SQL", icon: "sql", category: "database", badge: "Query Optimization" },

  // 5. Tools, DevOps & Cloud Technologies (tools)
  { name: "Git & GitHub", icon: "github", category: "tools", badge: "Version Control" },
  { name: "Docker", icon: "docker", category: "tools", badge: "Containers" },
  { name: "Linux", icon: "linux", category: "tools", badge: "OS & Shell Scripting" },
  { name: "Cloud Deployment", icon: "cloud", category: "tools", badge: "CI/CD & Cloud" },
  { name: "API Testing", icon: "testing", category: "tools", badge: "Automated QA" },
  { name: "Postman", icon: "postman", category: "tools", badge: "API Testing Suite" },
  { name: "Vercel", icon: "vercel", category: "tools", badge: "Edge Deployments" },
];

export const experience: TimelineItem[] = [
  {
    id: "senchola-fullstack",
    title: "Full Stack Developer & AI Engineer — SaaS & Web Solutions",
    subtitle: "Senchola Technology Solutions · Tiruchirappalli, Tamil Nadu, India",
    period: "Aug 2026 – Present",
    description:
      "Working as a Full Stack Developer & AI Engineer architecting scalable B2B SaaS products, enterprise WhatsApp CRM platforms, autonomous AI agent pipelines, and high-performance client websites. Lead full-stack engineering across Python/FastAPI, Java/Spring Boot, React.js, and Next.js. Engineer multi-tenant databases with PostgreSQL and MySQL, implement RAG systems and LLM integrations, and maintain production infrastructure with Docker, Linux, and proactive IT troubleshooting.",
    tags: [
      "Generative AI & LLMs",
      "LangChain & LangGraph",
      "FastAPI & Python",
      "B2B SaaS Engineering",
      "WhatsApp CRM (wacrm)",
      "Java & Spring Boot",
      "React.js & Next.js",
      "PostgreSQL & MySQL",
      "Docker & Linux",
      "REST APIs & Webhooks",
      "IT Support & Maintenance",
    ],
  },
  {
    id: "process-associate",
    title: "Process Associate – E-Pub Developer & Data Annotator",
    subtitle: "Tamil Nadu, India",
    period: "Jul 2024 – Jun 2025",
    description:
      "Specialized in digital publishing workflows, XML/HTML DOM structural validation, and supervised machine learning dataset annotation. Ensured rigorous compliance with global publishing accessibility standards (WCAG, EPUB3) and verified training dataset integrity for downstream NLP models.",
    tags: ["E-Pub3", "XML Schema", "HTML5 DOM", "Data Annotation", "Quality Assurance", "Regex Validation"],
  },
  {
    id: "mookambigai-college",
    title: "B.Tech in Information Technology",
    subtitle: "Mookambigai College of Engineering · Tamil Nadu, India",
    period: "2020 – 2024",
    description:
      "Graduated with a CGPA of 7.09. Rigorous coursework encompassing Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Database Management Systems (SQL), Operating Systems, Computer Networks, and Cloud Computing.",
    tags: ["Data Structures", "OOP (Java)", "DBMS (SQL)", "Operating Systems", "Computer Networks", "Software Engineering"],
  },
];

export const projects: Project[] = [
  {
    id: "wacrm-whatsapp",
    title: "wacrm — Enterprise WhatsApp CRM Platform",
    category: "multi-tenant",
    description:
      "Engineered an enterprise WhatsApp CRM platform powering centralized business conversations, multi-agent shared inboxes, automated customer journeys, and high-throughput broadcast campaigns. Built with Spring Boot microservices, Java, React.js, and Meta WhatsApp Business Cloud APIs, featuring granular role-based access control (RBAC), Kanban sales pipelines, automated webhook event listeners, and MySQL multi-tenant relational persistence.",
    icon: "layers",
    tags: ["WhatsApp Business API", "Java", "Spring Boot", "React.js", "MySQL", "Multi-Tenant", "Webhooks", "REST APIs"],
    featured: true,
    metrics: [
      { label: "Platform", value: "WhatsApp CRM" },
      { label: "Architecture", value: "Multi-Agent Inbox" },
      { label: "Backend", value: "Spring Boot Microservices" },
      { label: "Pipeline", value: "Kanban Sales CRM" },
    ],
    architectureHighlights: [
      "Integrated Meta WhatsApp Business Cloud API webhooks with HMAC-SHA256 signature verification for instant message ingestion",
      "Architected multi-agent shared inbox with automated ticket routing, tag management, and custom quick-reply templates",
      "Engineered Kanban-style sales pipeline with drag-and-drop opportunity stage progression and audit logging",
      "Implemented broadcast campaign dispatch engine supporting personalized message templates and delivery telemetry",
      "Designed tenant-isolated MySQL database schema preventing cross-tenant data leakage across client organizations",
    ],
    links: [
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
    ],
  },
  {
    id: "verna-construction",
    title: "Verna Construction Corporate Portal",
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
    title: "NexusForce AI — Multi-Tenant Operations Engine",
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
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
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
      { label: "GitHub Repository", href: "https://github.com/Praveenkumarc20/praveen-port" },
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
    id: "generative-ai-agents",
    title: "Generative AI & Autonomous AI Agents",
    description:
      "Architect and deploy production-grade RAG pipelines, LangChain and LangGraph multi-agent systems, semantic vector search, and LLM API integrations with structured outputs and automated tool calling.",
    tags: ["Generative AI & LLMs", "LangChain & LangGraph", "RAG & Vector DBs", "Prompt Engineering"],
    icon: "cpu",
  },
  {
    id: "full-stack-web",
    title: "Full-Stack Web & SaaS Engineering",
    description:
      "Build responsive, high-performance web applications and multi-tenant B2B SaaS products using React.js, Next.js, FastAPI, Java, and Spring Boot with scalable relational and document persistence.",
    tags: ["React.js & Next.js", "FastAPI & Python", "Java & Spring Boot", "Multi-Tenant Architecture"],
    icon: "code",
  },
  {
    id: "backend-microservices",
    title: "Backend APIs & Microservices",
    description:
      "Engineer secure, high-concurrency RESTful microservices, event-driven async queues (BullMQ + Redis), WebSocket telemetry, and database optimizations with PostgreSQL and MySQL.",
    tags: ["FastAPI & Python", "Spring Boot Microservices", "RESTful APIs", "PostgreSQL & MySQL"],
    icon: "layers",
  },
  {
    id: "websites-support",
    title: "Corporate Websites & Production Support",
    description:
      "Develop responsive business portals using modern frameworks or WordPress/Elementor, paired with proactive debugging, database optimization, and continuous IT support in production environments.",
    tags: ["WordPress & Elementor", "Responsive UI/UX", "Database Optimization", "IT Support & Maintenance"],
    icon: "globe",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "01. Who is Praveen Kumar C and where is he located?",
    answer:
      "Praveen Kumar C is a Full Stack Developer & Generative AI Engineer based in Tiruchirappalli (Trichy), Tamil Nadu, India. He currently works at Senchola Technology Solutions, specializing in building autonomous AI agents, RAG systems, B2B SaaS products, enterprise WhatsApp CRM platforms, and high-performance microservices.",
  },
  {
    id: "faq-2",
    question: "02. What AI, Generative AI, and Agentic frameworks do you specialize in?",
    answer:
      "Praveen specializes in Generative AI architectures, Large Language Models (LLMs), LangChain, LangGraph stateful multi-agent workflows, Retrieval-Augmented Generation (RAG), vector database indexing (ChromaDB, Pinecone, PGVector), text embeddings, prompt engineering, structured outputs (Pydantic/JSON Schema), and function/tool calling.",
  },
  {
    id: "faq-3",
    question: "03. What backend frameworks and databases do you develop with?",
    answer:
      "For backend systems, Praveen engineers high-performance microservices and RESTful APIs using Python (FastAPI), Java (Spring Boot 3), and Node.js (Express). For data persistence, he works extensively with PostgreSQL, MySQL relational indexing, Vector Databases, MongoDB ACID transactions, and Redis caching.",
  },
  {
    id: "faq-4",
    question: "04. What frontend technologies and website platforms do you build with?",
    answer:
      "Praveen builds modern, responsive client interfaces with React.js, Next.js, TypeScript, JavaScript (ES6+), and Tailwind CSS. He also has proven expertise in corporate CMS website customization using WordPress, Astra Theme, Elementor, and custom CSS.",
  },
  {
    id: "faq-5",
    question: "05. What is your role at Senchola Technology Solutions?",
    answer:
      "At Senchola Technology Solutions in Tiruchirappalli, Praveen contributes as a Full Stack Developer & AI Engineer across multiple commercial systems, including the WhatsApp CRM (wacrm) platform, Verna Construction website, Trichypreneurs portal, custom business CRMs, and proactive production IT maintenance.",
  },
  {
    id: "faq-6",
    question: "06. Are you available for full-time roles, remote positions, or consulting?",
    answer:
      "Yes, Praveen is actively open to full-time engineering opportunities, remote developer roles, and consulting engagements in Full Stack Development, Generative AI engineering, and SaaS backend architecture. Contact him directly via email at djpraveenkumar5@gmail.com or call +91 8903164053.",
  },
];


export const education: TimelineItem[] = [
  {
    id: "btech-it",
    title: "Bachelor of Technology – Information Technology",
    subtitle: "Mookambigai College of Engineering · Pudukkottai, Tamil Nadu",
    period: "Aug 2019 – May 2023",
    description: "Graduated with CGPA: 7.09. Focused on software engineering, database management systems, web technologies, and decentralized architectures.",
    tags: ["B.Tech IT", "CGPA: 7.09", "Data Structures", "DBMS (SQL)"],
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
