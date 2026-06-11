import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "../constants/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className = "",
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} ref={ref} className={`py-24 relative ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
