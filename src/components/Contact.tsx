import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { fadeInUp } from "../constants/animations";
import { PERSONAL_INFO } from "../data";

export const Contact: React.FC = () => {
  return (
    <SectionWrapper
      id="contact"
      className="bg-slate-50/50 dark:bg-slate-900/50  transition-colors duration-300"
    >
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
        <div className="bg-slate-50/50 dark:bg-slate-900/50  rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-12">
          <div className="text-center mb-8">
            <a
              href={PERSONAL_INFO.social.email}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-full font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-md hover:shadow-lg group"
            >
              <Mail className="group-hover:scale-110 transition-transform" />
              Send me an email
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              Or connect via
            </span>
            <div className="flex gap-3">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:border-slate-900 dark:hover:border-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL_INFO.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
