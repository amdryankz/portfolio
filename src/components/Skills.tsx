import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { staggerContainer, fadeInUp } from "../constants/animations";
import { SKILLS } from "../data";
import { cn } from "../lib/cn";

// NOTE: Classes are fully spelled out (not interpolated) because Tailwind's
// compiler requires static analysis of class names for tree-shaking.
const accentColors = [
  {
    iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    pill: "bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 border border-blue-100/50 dark:border-blue-900/30 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-800",
    border: "border-blue-200 dark:border-blue-800",
    shadow: "shadow-blue-500/5",
    glow: "from-blue-500/10 to-indigo-500/5",
  },
  {
    iconBg: "bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    pill: "bg-violet-50/50 dark:bg-violet-950/20 text-violet-700 dark:text-violet-300 border border-violet-100/50 dark:border-violet-900/30 hover:bg-violet-100/50 dark:hover:bg-violet-900/30 hover:border-violet-300 dark:hover:border-violet-800",
    border: "border-violet-200 dark:border-violet-800",
    shadow: "shadow-violet-500/5",
    glow: "from-violet-500/10 to-purple-500/5",
  },
  {
    iconBg: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    pill: "bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100/50 dark:border-emerald-900/30 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-800",
    border: "border-emerald-200 dark:border-emerald-800",
    shadow: "shadow-emerald-500/5",
    glow: "from-emerald-500/10 to-teal-500/5",
  },
  {
    iconBg: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    pill: "bg-amber-50/50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 border border-amber-100/50 dark:border-amber-900/30 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 hover:border-amber-300 dark:hover:border-amber-500",
    border: "border-amber-200 dark:border-amber-800",
    shadow: "shadow-amber-500/5",
    glow: "from-amber-500/10 to-orange-500/5",
  },
  {
    iconBg: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
    pill: "bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300 border border-rose-100/50 dark:border-rose-900/30 hover:bg-rose-100/50 dark:hover:bg-rose-900/30 hover:border-rose-300 dark:hover:border-rose-800",
    border: "border-rose-200 dark:border-rose-800",
    shadow: "shadow-rose-500/5",
    glow: "from-rose-500/10 to-pink-500/5",
  },
  {
    iconBg: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
    pill: "bg-cyan-50/50 dark:bg-cyan-950/20 text-cyan-700 dark:text-cyan-300 border border-cyan-100/50 dark:border-cyan-900/30 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/30 hover:border-cyan-300 dark:hover:border-cyan-800",
    border: "border-cyan-200 dark:border-cyan-800",
    shadow: "shadow-cyan-500/5",
    glow: "from-cyan-500/10 to-blue-500/5",
  },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Active category is hovered one if present (ignoring -1 which clears highlight), otherwise the selected/clicked one
  const activeCategoryIdx =
    hoveredCategory !== null
      ? (hoveredCategory === -1 ? null : hoveredCategory)
      : selectedCategory;

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 120); // 120ms debounce to bridge gaps between buttons
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleCategoryClick = (index: number) => {
    if (selectedCategory === index) {
      setSelectedCategory(null); // Click again to clear/reset filter
    } else {
      setSelectedCategory(index);
    }
  };

  return (
    <SectionWrapper
      id="skills"
      className="bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden !py-16 md:!py-20"
    >
      {/* Header */}
      <SectionHeader
        label="Tech Stack"
        title="Technical Skills"
        description="Technologies and tools I leverage to build scalable, high-performance solutions."
        className="mb-12 text-center md:text-left"
      />

      {/* Category filters */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-10">
        <button
          onClick={() => setSelectedCategory(null)}
          onMouseEnter={() => handleMouseEnter(-1)}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "px-4.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer",
            selectedCategory === null
              ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600",
          )}
        >
          All Categories
        </button>
        {SKILLS.map((skill, index) => {
          const isActive = selectedCategory === index;
          return (
            <button
              key={skill.name}
              onClick={() => handleCategoryClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "px-4.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600",
              )}
            >
              {skill.name}
            </button>
          );
        })}
      </motion.div>

      {/* Grid representation */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILLS.map((skill, skillIndex) => {
          const a = accentColors[skillIndex % accentColors.length];
          
          // Determine if there is any active filter
          const isAnyFilterActive = activeCategoryIdx !== null;
          
          // Is this specific card highlighted?
          const isCardHighlighted = activeCategoryIdx === skillIndex;
          
          // If a filter is active and this card is NOT highlighted, we dim it
          const shouldDimCard = isAnyFilterActive && !isCardHighlighted;

          return (
             <div
              key={skill.name}
              className={cn(
                "relative group rounded-2xl p-5 bg-white/80 dark:bg-slate-900/30 backdrop-blur-md border-2 shadow-xs transition-all duration-300 flex flex-col justify-between overflow-hidden",
                shouldDimCard
                  ? "opacity-20 border-slate-200 dark:border-slate-700/80"
                  : isCardHighlighted
                  ? `opacity-100 shadow-md ${a.border}`
                  : "opacity-100 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600",
              )}
            >
              {/* Glow background on highlighted card */}
              <div className={cn(
                "absolute -inset-px bg-gradient-to-br transition-opacity duration-500 -z-10",
                a.glow,
                isCardHighlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )} />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className={cn(
                    "p-2.5 rounded-xl transition-transform duration-300",
                    a.iconBg,
                    (isCardHighlighted ? "scale-110" : "group-hover:scale-110"),
                  )}>
                    <skill.icon size={18} />
                  </span>
                  <h3 className="font-bold text-slate-800 dark:text-white text-base tracking-wide">
                    {skill.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className={cn(
                        "px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all duration-200 hover:scale-105",
                        a.pill,
                      )}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
