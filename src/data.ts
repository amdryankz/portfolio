import { Brain, Code2, Database, Languages, Layout, Server } from "lucide-react";
import type { PersonalInfo, Skill, Project, Experience, Education } from "./types";

const placeholderHero = "/assets/photo-1.webp";
const placeholderAbout = "/assets/photo-2.webp";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Ryan",
  shortBio: "Building scalable web applications with a focus on high-performance backends, distributed systems, and seamless AI-driven user experiences.",
  longBio: "I am a Fullstack Developer with 1.5+ years of professional experience building enterprise-grade applications across multiple industries. With a Bachelor of Informatics (GPA 3.77/4.00) and intensive training from the Hacktiv8 Fullstack JavaScript Program, I specialize in TypeScript, Next.js, Fastify, Hono.js, and PHP/Laravel. I have deep expertise in distributed systems, browser automation, and AI integration (LangChain, OpenAI), and experience designing scalable backend architectures with message queues (RabbitMQ, PgBoss).",
  heroImage: placeholderHero,
  aboutImage: placeholderAbout,
  social: {
    github: "https://github.com/amdryankz",
    linkedin: "https://www.linkedin.com/in/ahmad-chairiansyah-5b98b1180/",
    email: "mailto:ahmad.chairiansyah@gmail.com",
    whatsapp: "https://wa.me/6282260683030",
    cv: "/assets/ahmad-chairiansyah-cv.pdf",
  },
};

export const SKILLS: Skill[] = [
  {
    name: "Backend Development",
    icon: Server,
    tools: ["Node.js", "Hono.js", "Fastify", "Express.js", "Laravel", "GraphQL", "Apollo Server", "Zod", "Pino", "RabbitMQ", "PgBoss", "Puppeteer"]
  },
  {
    name: "Frontend Development",
    icon: Layout,
    tools: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Redux", "Zustand", "TanStack", "Apollo Client", "Shadcn/UI"]
  },
  {
    name: "Database Solutions",
    icon: Database,
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Kysely", "Drizzle", "Sequelize", "Qdrant"]
  },
  {
    name: "AI & Modern Tech",
    icon: Brain,
    tools: ["OpenAI API", "LangChain", "Google GenAI", "ElevenLabs", "Socket.io", "Prometheus"]
  },
  {
    name: "Development Tools",
    icon: Code2,
    tools: ["Docker", "AWS (S3)", "Git", "GitHub", "Nx", "Postman", "Figma"]
  },
  {
    name: "Programming Languages",
    icon: Languages,
    tools: ["TypeScript", "JavaScript", "PHP", "Kotlin"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "OPTIMA",
    description: "An AI career assistant providing end-to-end support through CV analysis, job matching, interview practice, and offer evaluation.",
    image: "/assets/optima.webp",
    tags: ["Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "Google Gemini API",
      "ElevenLabs API",
      "AWS S3",
      "Shadcn/UI"],
    link: "https://karir-flow.vercel.app",
    github: "https://github.com/amdryankz/karir-flow",
  },
  {
    title: "Travel Itinerary Planner",
    description: "A modern web application for planning, organizing, and managing your travel itineraries with AI-powered features.",
    image: "/assets/travel.webp",
    tags: ["React",
      "Tailwind",
      "Leaflet",
      "Express",
      "Jest",
      "PostgreSQL",
      "Sequelize",
      "Google Gemini API",
      "Google Maps API",
    ],
    link: "https://travel-itinerary-planner-pi.vercel.app",
    github: "https://github.com/amdryankz/travel-itinerary-planner",
  },
  {
    title: "Al Safwa Hotel",
    description: "A web-based application that covers a comprehensive hotel workflow, from reservations, guest management, transactions, to financial reporting and automated testing.",
    image: "/assets/hotel.webp",
    tags: ["Laravel", "Tailwind", "MySQL", "Alpine.js", "Pest"],
    link: "https://alsafwa-hotel.vercel.app",
    github: "https://github.com/amdryankz/alsafwa-hotel",
  },
  {
    title: "Dungeon Master AI",
    description: "An interactive adventure that enables users to engage in dynamic storytelling with an AI Dungeon Master and supports real-time multiplayer interactions.",
    image: "/assets/dnd.webp",
    tags: ["React", "Socket.io", "Tailwind", "Express", "Google Gemini API", "Node.js"],
    link: "https://dnd-ai-project.vercel.app",
    github: "https://github.com/mini-dnd/dnd-ai-project/tree/main",
  },
  {
    title: "Blublu eCommerce",
    description: "A web application built to simulate a modern online shopping experience.",
    image: "/assets/blublu.webp",
    tags: ["Next.js", "React", "MongoDB", "Redis", "Zod"],
    link: "https://blublu-ecommerce.vercel.app",
    github: "#",
  },
  {
    title: "Beasiswa",
    description: "Web-based scholarship management system built with Laravel to streamline applications and administration.",
    image: "/assets/scholar.webp",
    tags: ["Laravel", "Vite", "Tailwind", "MySQL", "Alpine.js", "Pest", "Flowbite", "jQuery"],
    link: "#",
    github: "https://github.com/amdryankz/pengajuan-beasiswa",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "PT Neuron Teknologi Indonesia",
    role: "Fullstack Developer",
    period: "February 2026 - Present",
    type: "Full-time",
    description: [
      "Build and maintain a Social Media Automation Platform (Nx monorepo) using Next.js, Fastify, PostgreSQL, and Redis, supporting automated interactions across 8+ social media platforms.",
      "Develop distributed task queue system with PgBoss and browser automation workers using Puppeteer with stealth capabilities and proxy rotation.",
      "Implement campaign management dashboard and real-time queue monitoring with Prometheus metrics for system observability.",
      "Integrate OpenAI API for AI-powered contextual content generation with configurable tones and multi-platform targeting.",
    ],
    tags: ["Next.js", "Fastify", "PostgreSQL", "Redis", "PgBoss", "Puppeteer", "Prometheus", "OpenAI", "TypeScript"],
  },
  {
    company: "Nodewave",
    role: "Backend Engineer",
    period: "August 2024 - May 2026",
    type: "Full-time",
    description: [
      "Develop and maintain backend systems for 3 enterprise applications across different industries (construction, transportation, water utility) using TypeScript/Hono and PHP/Laravel with PostgreSQL and MySQL.",
      "Implement document workflow system with digital signature integration, multi-level access control, and RabbitMQ-based background processing for a major Indonesian infrastructure company.",
      "Build AI-powered features including RAG chatbot (LangChain + Qdrant), driver performance recommendations, and Japanese speech-to-text integration for a taxi fleet management platform.",
      "Design financial/accounting modules following Indonesian government standards including double-entry bookkeeping, fixed asset depreciation, and automated report generation.",
    ],
    tags: ["TypeScript", "Hono.js", "Laravel", "PostgreSQL", "MySQL", "RabbitMQ", "LangChain", "Qdrant", "Alpine.js"],
  },
  {
    company: "Syiah Kuala University",
    role: "Backend Engineer",
    period: "August 2023 - December 2023",
    type: "Internship",
    description: [
      "Architected and developed a Scholarship Management System using Laravel 10, serving 13 faculties with role-based access control for admins, faculty operators, and students.",
      "Designed database schema with flexible JSON-based per-faculty quota allocation, ULID primary keys, and dual-guard authentication system.",
      "Implemented end-to-end scholarship workflow including document upload/validation, multi-stage approval process, and automated PDF/Excel report generation.",
      "Coordinated with frontend developers and academic staff to digitize manual paper-based scholarship processes, enabling online applications and real-time status tracking.",
    ],
    tags: ["Laravel", "MySQL", "Alpine.js", "jQuery", "Vite"],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Hacktiv8",
    degree: "Full Stack JavaScript Immersive Program",
    period: "September 2025 - December 2025",
  },
  {
    institution: "Syiah Kuala University",
    degree: "Bachelor of Informatics",
    period: "2020 - 2024",
  },
  {
    institution: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    degree: "Mobile Development Cohort",
    period: "February 2023 - July 2023",
  },
];