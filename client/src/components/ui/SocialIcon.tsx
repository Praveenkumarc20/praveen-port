import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export type IconName = "github" | "linkedin" | "instagram" | "twitter";

const ICONS: Record<IconName, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
};

interface SocialIconProps {
  icon: IconName;
  size?: number;
}

export function SocialIcon({ icon, size = 20 }: SocialIconProps) {
  const Cmp = ICONS[icon];
  return <Cmp size={size} />;
}
