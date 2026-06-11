import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { staggerContainer, fadeInUp } from "../constants/animations";
import { PERSONAL_INFO } from "../data";
import { Zap, Layers, Bot, ArrowRight } from "lucide-react";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "3", label: "Industries Served" },
  { value: "10+", label: "Projects Shipped" },
];

const highlights = [
  {
    icon: Layers,
    title: "Fullstack & Distributed Systems",
    desc: "Building scalable monorepos with Next.js, Fastify, RabbitMQ & PgBoss.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "LangChain RAG, OpenAI API, and AI-powered content generation pipelines.",
  },
  {
    icon: Zap,
    title: "Browser Automation",
    desc: "Puppeteer with stealth, proxy rotation, and real-time Prometheus monitoring.",
  },
];

export const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="bg-slate-100/50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* ── Image Column ── */}
        <motion.div
          variants={fadeInUp}
          className="relative md:pr-6 will-change-transform"
        >
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-slate-900/50 aspect-4/3">
            <img
              src={PERSONAL_INFO.aboutImage}
              alt="About Me"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* gradient overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent" />
          </div>

          {/* Floating stat strip */}
          <div className="absolute -bottom-6 left-4 right-4 md:left-auto md:right-10 md:w-72 bg-white/80 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-slate-900/60 border-2 border-slate-200 dark:border-slate-700/80 px-5 py-4 flex justify-between gap-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative square */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-3xl -z-10 hidden md:block" />
        </motion.div>

        {/* ── Text Column ── */}
        <motion.div variants={fadeInUp} className="mt-12 md:mt-0">
          {/* Label */}
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Crafting backends &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
              AI-powered
            </span>{" "}
            experiences
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
            Fullstack Developer with{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              1.5+ years
            </span>{" "}
            building enterprise-grade applications across construction,
            transportation, and water utility industries. I hold a{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Bachelor of Informatics (GPA 3.77)
            </span>{" "}
            and completed the Hacktiv8 Fullstack JS Immersive Program.
          </p>

          {/* Key highlights */}
          <ul className="space-y-4 mb-8">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700/80 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 group"
              >
                <span className="mt-0.5 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                    {title}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-blue-600 text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-blue-700 transition-all shadow-md hover:shadow-lg group"
          >
            Let's Connect
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
