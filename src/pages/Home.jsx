import { motion } from "framer-motion";
import { Hero } from "../components/Sections/Hero";
import { About } from "../components/Sections/About";
import { Skills } from "../components/Sections/Skills";
import { Experience } from "../components/Sections/Experience";
import { Projects } from "../components/Sections/Projects";
import { Certifications } from "../components/Sections/Certifications";
import { Achievements } from "../components/Sections/Achievements";
import { Education } from "../components/Sections/Education";
import { Contact } from "../components/Sections/Contact";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full relative"
    >
      {/* Glow backgrounds aligned across pages */}
      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-glow-blue opacity-50 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-glow-purple opacity-50 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[60%] left-10 w-[500px] h-[500px] bg-glow-cyan opacity-40 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[80%] right-10 w-[500px] h-[500px] bg-glow-purple opacity-50 blur-3xl pointer-events-none z-0" />

      {/* Main page segments */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
    </motion.div>
  );
};
