export interface Skill {
  name: string;
  icon?: string;
  category: "ai" | "backend" | "frontend" | "database" | "tools" | string;
  badge?: string;
  level?: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "multi-tenant" | "blockchain" | "ai" | "web-design";
  description: string;
  icon: "shield" | "flame" | "map" | "globe" | "cpu" | "layers" | "activity";
  tags: string[];
  metrics?: { label: string; value: string }[];
  architectureHighlights?: string[];
  links: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "twitter";
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ContactStatus = "idle" | "submitting" | "success" | "error";
