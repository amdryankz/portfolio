import { Brain, Code2, Database, Languages, Layout, Server } from "lucide-react";

const placeholderHero = "/src/assets/photo-1.JPG";
const placeholderAbout = "/src/assets/photo-2.JPG";

export const PERSONAL_INFO = {
  name: "Ryan",
  shortBio: "Building scalable web applications with a focus on high-performance backends and seamless AI-driven user experiences.",
  longBio: "I am a Fullstack Developer with a solid background in backend engineering and a passion for creating efficient, high-quality web applications. With a Bachelor of Informatics (GPA 3.77/4.00) and intensive training from the Hacktiv8 Fullstack JavaScript Program, I specialize in building robust systems using TypeScript, React, and Node.js.",
  heroImage: placeholderHero,
  aboutImage: placeholderAbout,
  social: {
    github: "https://github.com/amdryankz",
    linkedin: "https://www.linkedin.com/in/ahmad-chairiansyah-5b98b1180/",
    email: "mailto:ahmad.chairiansyah@gmail.com",
    whatsapp: "https://wa.me/082260683030",
    cv: "/src/assets/Ahmad Chairiansyah CV.pdf",
  },
};

export const SKILLS = [
  {
    name: "Backend Development",
    icon: Server,
    tools: ["Node.js", "Hono.js", "Express.js", "Laravel", "GraphQL", "Zod", "Apollo Server", "Jest", "Pest"]
  },
  {
    name: "Frontend Development",
    icon: Layout,
    tools: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Redux", "Shadcn/UI", "Apollo Client"]
  },
  {
    name: "Database Solutions",
    icon: Database,
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle", "Redis", "Sequelize"]
  },
  {
    name: "AI & Modern Tech",
    icon: Brain,
    tools: ["Google GenAI", "ElevenLabs", "Socket.io"]
  },
  {
    name: "Development Tools",
    icon: Code2,
    tools: ["Docker", "AWS", "Git", "Postman", "Figma", "GitHub"]
  },
  {
    name: "Programming Languages",
    icon: Languages,
    tools: ["TypeScript", "JavaScript", "PHP", "Kotlin"]
  }
];

export const PROJECTS = [
  {
    title: "OPTIMA",
    description: "An AI career assistant providing end-to-end support through CV analysis, job matching, interview practice, and offer evaluation.",
    image: "/src/assets/optima.png",
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
    image: "/src/assets/travel.png",
    tags: ["React",
      "Tailwind ",
      "Leaflet",
      "Express",
      "Jest",
      "PostgreSQL",
      "Sequelize",
      "Google Gemini API",
      "Google Maps API",
    ]
    ,
    link: "https://travel-itinerary-planner-pi.vercel.app",
    github: "https://github.com/amdryankz/travel-itinerary-planner",
  },
  {
    title: "Al Safwa Hotel",
    description: "A web-based application that covers a comprehensive hotel workflow, from reservations, guest management, transactions, to financial reporting and automated testing.",
    image: "/src/assets/hotel.png",
    tags: ["Laravel", "Tailwind", "MySQL", "Alpine.js", "Pest"],
    link: "https://alsafwa-hotel.vercel.app",
    github: "https://github.com/amdryankz/alsafwa-hotel",
  },
  {
    title: "Dungeon Master AI",
    description: "An interactive adventure that enables users to engage in dynamic storytelling with an AI Dungeon Master and supports real-time multiplayer interactions.",
    image: "/src/assets/dnd.png",
    tags: ["React", "Socket.io", "Tailwind", "Express", "Google Gemini API", "Node.js"],
    link: "https://dnd-ai-project.vercel.app",
    github: "https://github.com/mini-dnd/dnd-ai-project/tree/main",
  },
  {
    title: "Blublu eCommerce",
    description: "A web application built to simulate a modern online shopping experience.",
    image: "/src/assets/blublu.png",
    tags: ["Next.js", "React", "MongoDB", "Redis", "Zod"],
    link: "https://blublu-ecommerce.vercel.app",
    github: "#",
  },
  {
    title: "Beasiswa",
    description: "Web-based scholarship management system built with Laravel to streamline applications and administration.",
    image: "/src/assets/scholar.png",
    tags: ["Laravel", "Vite", "Tailwind", "MySQL", "Alpine.js", "Pest", "Flowbite", "jQuery"],
    link: "#",
    github: "https://github.com/amdryankz/pengajuan-beasiswa",
  },
];

export const EXPERIENCE = [
  {
    company: "Nodewave",
    role: "Backend Engineer",
    period: "August 2024 - Present",
    type: "Full-time",
    description: [
      "Develop high-performance backend systems using TypeScript and Hono.js, ensuring scalability and adherence to project specifications.",
      "Collaborate with cross-functional teams to translate business requirements into robust technical features and API endpoints.",
      "Conduct rigorous system testing and debugging to optimize performance, ensuring system reliability."
    ],
  },
  {
    company: "Syiah Kuala University",
    role: "Backend Engineer",
    period: "August 2023 - December 2023",
    type: "Internship",
    description: [
      "Architected and developed a comprehensive Scholarship Management System using PHP and Laravel.",
      "Coordinated effectively with frontend developers and academic staff to ensure seamless system integration and timely deployment.",
      "Analyzed user requirements to design an efficient database schema and system logic, replacing manual administrative workflows."
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Hacktiv8",
    degree: "Fullstack JavaScript Immersive Program",
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