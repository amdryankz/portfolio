import React from "react";
import { PERSONAL_INFO } from "../data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>{PERSONAL_INFO.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
