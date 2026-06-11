import { motion } from "framer-motion";
import { fadeInUp } from "../constants/animations";
import { cn } from "../lib/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className,
      )}
    >
      <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <p
        className={cn(
          "text-slate-600 dark:text-slate-300 mt-4 max-w-xl text-sm leading-relaxed",
          align === "center" && "mx-auto",
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}
