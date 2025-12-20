import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { fadeInUp } from "../constants/animations";
import { PERSONAL_INFO } from "../data";

export const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      className="bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div variants={fadeInUp} className="relative md:pr-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-slate-900/50 aspect-4/3">
            <img
              src={PERSONAL_INFO.aboutImage}
              alt="About Me"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>
          {/* Decorative square */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-3xl -z-10 hidden md:block" />
        </motion.div>

        {/* Text Column */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            {PERSONAL_INFO.longBio}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {/* Statistics */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                1+
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Years Experience
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                10+
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Projects Completed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
