import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { TimelineItem } from "./TimelineItem";
import { fadeInUp } from "../constants/animations";
import { EXPERIENCE } from "../data";

export const Experience: React.FC = () => {
  return (
    <SectionWrapper
      id="experience"
      className="bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12"
      >
        Work Experience
      </motion.h2>
      <div className="space-y-8 max-w-4xl">
        {EXPERIENCE.map((exp, index) => (
          <TimelineItem key={index} data={exp} icon={Briefcase} />
        ))}
      </div>
    </SectionWrapper>
  );
};
