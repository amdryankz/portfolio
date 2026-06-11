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
  CustomCursor,
} from "./components";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <CustomCursor />
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen overflow-x-hidden scroll-smooth transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default App;
