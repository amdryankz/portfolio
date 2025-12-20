import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { fadeInUp } from "../constants/animations";
import { PROJECTS } from "../data";

export const Projects: React.FC = () => {
  return (
    <SectionWrapper
      id="projects"
      className=" bg-slate-50/50 dark:bg-slate-900/50  transition-colors duration-300"
    >
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4">
          A curated collection of my work, showcasing my expertise in full-stack
          development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Project Image Container */}
            <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with links on hover (Desktop) */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white rounded-full text-slate-900 hover:text-blue-600 transition-colors"
                    aria-label="Source Code"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                {/* Mobile Links */}
                <div className="flex gap-3 md:hidden">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="Source Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
