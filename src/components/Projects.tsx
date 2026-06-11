import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp } from "../constants/animations";
import { PROJECTS } from "../data";
import { cn } from "../lib/cn";

export const Projects = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProjectIdx(index);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredProjectIdx(null);
  };

  const displayedProjectIdx = hoveredProjectIdx !== null ? hoveredProjectIdx : activeProjectIdx;
  const currentProject = PROJECTS[displayedProjectIdx];

  return (
    <SectionWrapper
      id="projects"
      className="bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      {/* Header */}
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        description="An interactive showcase of my fullstack applications, showcasing system architecture, backend integrations, and UI details."
        className="mb-16"
      />

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Side: Premium Project Navigator (Vertical List on Desktop, Horizontal Scroll on Mobile) */}
        <div
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none shrink-0 snap-x w-full"
        >
          {PROJECTS.map((project, index) => {
            const isSelected = activeProjectIdx === index;
            const isCurrent = displayedProjectIdx === index;
            const displayIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.button
                variants={fadeInUp}
                key={project.title}
                onClick={() => {
                  setActiveProjectIdx(index);
                  setHoveredProjectIdx(null);
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                className={cn(
                  "group relative p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 border-2 select-none shrink-0 snap-start min-w-[200px] lg:min-w-0 w-[240px] lg:w-full",
                  isCurrent
                    ? "text-blue-600 dark:text-blue-400 border-transparent"
                    : "bg-white/45 dark:bg-slate-900/20 text-slate-700 dark:text-slate-400 border-slate-100 dark:border-slate-800/50 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 hover:border-slate-200 dark:hover:border-slate-700",
                )}
              >
                {/* Sliding Active Background */}
                {isCurrent && (
                  <motion.div
                    layoutId="activeProjectBg"
                    className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 border-2 border-blue-200/50 dark:border-blue-800/40 rounded-2xl z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Numeric Index */}
                <span
                  className={cn(
                    "text-xs font-mono font-bold transition-colors duration-300 relative z-10",
                    isCurrent
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400",
                  )}
                >
                  {isSelected && (
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                  {displayIndex}
                </span>

                {/* Text Labels */}
                <div className="flex flex-col gap-0.5 overflow-hidden relative z-10">
                  <span
                    className={cn(
                      "font-bold text-sm tracking-wide transition-colors duration-300 line-clamp-1",
                      isCurrent
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white",
                    )}
                  >
                    {project.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 line-clamp-1">
                    {project.tags.slice(0, 2).join(" • ")}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Side: Showcase Display Panel */}
        <motion.div variants={fadeInUp} className="lg:col-span-8 w-full h-[620px] sm:h-[640px] lg:h-[620px] shrink-0 bg-white/80 dark:bg-slate-900/30 backdrop-blur-md rounded-3xl border-2 border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(59,130,246,0.15)] hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 p-6 md:p-8 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayedProjectIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } }}
              className="w-full h-full flex flex-col gap-6 md:gap-8 min-h-0"
            >
              {/* Image Showcase Container */}
              <div className="relative overflow-hidden h-[180px] sm:h-[220px] lg:h-[260px] bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-slate-100 dark:border-slate-800/60 group/image shrink-0">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Details & Info Block */}
              <div className="flex flex-col flex-1 justify-between gap-6 min-h-0">
                <div className="min-h-0 flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-slate-200/30 dark:border-slate-800/50 pb-5 shrink-0">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {currentProject.title}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase mt-1">
                        Featured Project
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2.5">
                      {currentProject.github !== "#" && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/30 dark:border-slate-700 text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-300"
                          aria-label={`View ${currentProject.title} source code on GitHub`}
                        >
                          <Github size={14} />
                          Repository
                        </a>
                      )}
                      {currentProject.link !== "#" && (
                        <a
                          href={currentProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-300 group/link"
                          aria-label={`View ${currentProject.title} live demo`}
                        >
                          Live Demo
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed md:text-base font-normal overflow-y-auto pr-1 scrollbar-thin flex-1">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack Tags Grid */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-200/30 dark:border-slate-800/50 mt-4 shrink-0">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-slate-500/5 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/50 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-[1.03] transform select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
