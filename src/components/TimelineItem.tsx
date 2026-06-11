import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeInUp } from "../constants/animations";
import type { TimelineData } from "../types";

interface TimelineItemProps {
  data: TimelineData;
  icon: LucideIcon;
}

export const TimelineItem = ({
  data,
  icon: Icon,
}: TimelineItemProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-12 group will-change-transform"
    >
      {/* Vertical line — hidden on last item */}
      <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700/80 group-last:hidden group-hover:bg-blue-400 dark:group-hover:bg-blue-500/50 transition-colors duration-300" />

      {/* Icon marker */}
      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 group-hover:scale-110 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] z-10 transition-all duration-300 flex items-center justify-center">
        <Icon size={14} className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
      </div>

      <div className="relative overflow-hidden bg-white/80 dark:bg-slate-900/30 backdrop-blur-md p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700/80 shadow-sm group-hover:shadow-[0_12px_24px_-8px_rgba(59,130,246,0.12)] group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 group-hover:-translate-y-1 transition-all duration-300">
        {/* Soft radial blue gradient hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 dark:from-blue-950/0 dark:to-blue-950/0 group-hover:from-blue-50/10 group-hover:to-blue-50/10 dark:group-hover:from-blue-950/5 dark:group-hover:to-blue-950/5 rounded-xl transition-all duration-500 pointer-events-none" />

        {/* Header row */}
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {data.company || data.institution}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-0.5 flex items-center gap-2">
              {data.role || data.degree}
              {data.type && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/60">
                  {data.type}
                </span>
              )}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100/80 dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700/50 px-3 py-1.5 rounded-full shrink-0 self-start">
            <Calendar size={12} className="text-slate-400 dark:text-slate-400" />
            {data.period}
          </span>
        </div>

        {/* Description */}
        {data.description && (
          <div className="relative z-10">
            {Array.isArray(data.description) ? (
              <ul className="space-y-2 mt-3">
                {data.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mt-3">
                {data.description}
              </p>
            )}
          </div>
        )}

        {/* Tech Stack Badges */}
        {data.tags && data.tags.length > 0 && (
          <div className="relative z-10 flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/80 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:scale-105 transform"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
