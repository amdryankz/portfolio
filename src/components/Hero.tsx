import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { staggerContainer, fadeInUp, scaleUp } from "../constants/animations";
import { PERSONAL_INFO } from "../data";

export const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 pt-20 md:pt-0 transition-colors duration-300"
    >
      {/* Background Decoration */}
      <motion.div
        style={{ y }}
        className="absolute top-[-20%] right-[-10%] w-160 h-160 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 md:opacity-70 -z-10"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-[-20%] left-[-10%] w-140 h-140 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-50 md:opacity-70 -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
          >
            Hi, I'm {PERSONAL_INFO.name}. |<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 ml-2">
              Fullstack Developer
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-300 md:max-w-lg mb-8 leading-relaxed"
          >
            {PERSONAL_INFO.shortBio}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.social.cv}
                download
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition-all flex items-center gap-2 group"
              >
                Download CV{" "}
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium hover:border-slate-900 dark:hover:border-blue-500 transition-all"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-3 mt-4 sm:mt-0 sm:ml-4">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-md md:h-112">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-indigo-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-12 opacity-30 blur-lg animate-pulse" />
            <img
              src={PERSONAL_INFO.heroImage}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white dark:border-slate-800 shadow-xl relative z-10 hover:rotate-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
