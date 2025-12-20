import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { fadeInUp } from "../constants/animations";
import { SKILLS } from "../data";

export const Skills: React.FC = () => {
  return (
    <SectionWrapper
      id="skills"
      className="bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I leverage to
          build scalable, high-performance digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5, borderColor: "var(--color-blue-400)" }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all"
          >
            <skill.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {skill.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900/50 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
