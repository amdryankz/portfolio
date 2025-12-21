import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeInUp } from "../constants/animations";
import type { TimelineData } from "../types";

interface TimelineItemProps {
  data: TimelineData;
  icon: LucideIcon;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  data,
  icon: Icon,
}) => (
  <motion.div
    variants={fadeInUp}
    className="relative pl-12 group will-change-transform"
  >
    {/* Vertical Line */}
    <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 group-last:bottom-auto group-last:h-full" />

    {/* Icon Marker */}
    <div className="absolute left-0 top-2 w-8 h-8 bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 rounded-full flex items-center justify-center z-10 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
    </div>

    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm group-hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {data.company || data.institution}
        </h3>
        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
          {data.period}
        </span>
      </div>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
        {data.role || data.degree}{" "}
        {data.type && (
          <span className="text-slate-400 dark:text-slate-500 font-normal text-sm">
            • {data.type}
          </span>
        )}
      </p>
      {Array.isArray(data.description) ? (
        <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {data.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
          {data.description}
        </p>
      )}
    </div>
  </motion.div>
);
