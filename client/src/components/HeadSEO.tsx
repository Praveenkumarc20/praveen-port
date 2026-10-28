import { useEffect } from "react";
import { profile } from "@/data/content";

interface HeadSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export function HeadSEO({
  title = `${profile.name} | Full Stack Developer & Generative AI Engineer | Tiruchirappalli, Tamil Nadu`,
  description = `${profile.name} — Full Stack Developer & Generative AI Engineer at Senchola Technology Solutions in Tiruchirappalli, Tamil Nadu, India. Specializing in Python, FastAPI, Java, Spring Boot, React.js, Next.js, LangChain, LangGraph, RAG, PostgreSQL, and Multi-Tenant SaaS systems.`,
  keywords = "Praveen Kumar C, Praveen Kumar, Full Stack Developer Tiruchirappalli, Generative AI Engineer India, AI Agent Developer, LangChain, LangGraph, RAG Systems, Python Developer, FastAPI, Java Developer, Spring Boot 3, React Developer, Next.js Developer, Multi-Tenant SaaS Engineer, Senchola Technology Solutions, WhatsApp CRM, wacrm, PostgreSQL, MySQL, Docker, Linux, Tamil Nadu Developer, Software Engineer Portfolio",
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
