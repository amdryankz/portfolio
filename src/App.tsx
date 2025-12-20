import React from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
} from "./components";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen overflow-x-hidden scroll-smooth transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
