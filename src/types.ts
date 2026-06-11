import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  shortBio: string;
  longBio: string;
  heroImage: string;
  aboutImage: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
    cv: string;
  };
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  tools: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string | string[];
  tags?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string | string[];
}

export interface TimelineData {
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  period: string;
  type?: string;
  description?: string | string[];
  tags?: string[];
}

export interface NavLink {
  name: string;
  href: string;
}
