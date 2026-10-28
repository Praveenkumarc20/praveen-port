import { useEffect } from "react";
import { profile } from "@/data/content";

interface HeadSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export function HeadSEO({
  title = `${profile.name} | Full Stack Developer & Systems Architect`,
  description = `${profile.name} — Full Stack Developer & Systems Architect at Senchola Technology Solutions. Specializing in B2B SaaS, WhatsApp CRM, Java, Spring Boot, React.js, Next.js, TypeScript, and MySQL multi-tenant architectures.`,
  keywords = "Praveen Kumar C, Praveen Kumar, Full Stack Developer, Systems Architect, Senchola Technology Solutions, WhatsApp CRM, wacrm, SaaS Product Engineer, Java Developer, Spring Boot, React Developer, Next.js Developer, Multi-Tenant Architecture, Tiruchirappalli Developer, Tamil Nadu Developer, Software Engineer Portfolio, MySQL, Redis, BullMQ",
  canonicalUrl = "https://praveenkumar.dev/",
}: HeadSEOProps) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper to update meta property or name
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    updateMeta("meta[name='description']", description);
    updateMeta("meta[name='keywords']", keywords);
    updateMeta("meta[property='og:title']", title);
    updateMeta("meta[property='og:description']", description);
    updateMeta("meta[name='twitter:title']", title);
    updateMeta("meta[name='twitter:description']", description);

    // Update Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null;
}
