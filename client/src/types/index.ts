export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
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
  category: "multi-tenant" | "blockchain" | "ai";
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
}

export type ContactStatus = "idle" | "submitting" | "success" | "error";
