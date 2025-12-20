import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { TimelineItem } from "./TimelineItem";
import { fadeInUp } from "../constants/animations";
import { EDUCATION } from "../data";

export const Education: React.FC = () => {
  return (
    <SectionWrapper
      id="education"
      className="bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12"
      >
        Education
      </motion.h2>
      <div className="space-y-8 max-w-4xl">
        {EDUCATION.map((edu, index) => (
          <TimelineItem key={index} data={edu} icon={GraduationCap} />
        ))}
      </div>
    </SectionWrapper>
  );
};
