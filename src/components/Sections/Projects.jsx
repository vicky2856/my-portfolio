import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info, Shield, Compass, BarChart3, X, CheckCircle } from "lucide-react";
import { Github } from "../UI/BrandIcons";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Custom vector previews for each project to make the cards look premium
  const renderProjectVisual = (id) => {
    switch (id) {
      case "inflora":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-indigo-900/60 to-purple-950/60 flex items-center justify-center relative overflow-hidden">
            {/* Abstract dashboard dashboard layout */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="w-[85%] h-[80%] rounded-lg border border-slate-700/50 bg-slate-900/80 p-3 flex flex-col gap-2 translate-y-4 transition-transform group-hover:translate-y-2 duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">inflora // marketplace</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded p-1.5 flex flex-col items-center">
                  <span className="text-[9px] text-slate-500">Creators</span>
                  <span className="text-xs font-bold text-white">1.5k+</span>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded p-1.5 flex flex-col items-center">
                  <span className="text-[9px] text-slate-500">Campaigns</span>
                  <span className="text-xs font-bold text-white">320+</span>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded p-1.5 flex flex-col items-center">
                  <span className="text-[9px] text-slate-500">Success Rate</span>
                  <span className="text-xs font-bold text-white">98%</span>
                </div>
              </div>
              <div className="mt-1.5 h-8 bg-slate-950/50 rounded border border-slate-800/80 flex items-center px-2 justify-between">
                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[9px] text-slate-400 font-mono">auth_session: active</span>
                </div>
                <div className="text-[9px] font-semibold text-indigo-300 font-mono">RBAC Enabled</div>
              </div>
            </div>
          </div>
        );
      case "travel-planner":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-cyan-950/60 to-blue-950/60 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="w-[85%] h-[80%] rounded-lg border border-slate-700/50 bg-slate-900/80 p-3 flex flex-col gap-2 translate-y-4 transition-transform group-hover:translate-y-2 duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">ai_agent // travel_planner</span>
                <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              </div>
              <div className="flex flex-col gap-1.5 mt-1 font-mono text-[9px]">
                <div className="p-1 bg-cyan-500/5 border border-cyan-500/10 rounded flex justify-between items-center text-slate-300">
                  <span>Destination: Rome, Italy</span>
                  <span className="text-amber-400">☀️ 28°C</span>
                </div>
                <div className="p-1 bg-blue-500/5 border border-blue-500/10 rounded text-slate-400 leading-normal">
                  &gt; Watsonx Granite: Generative itinerary parsed successfully.
                </div>
                <div className="flex gap-1 mt-1 justify-end">
                  <span className="px-1 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] font-semibold">Granite LLM</span>
                  <span className="px-1 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[8px] font-semibold">Weather API</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "password-strength":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-purple-950/60 to-rose-950/60 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="w-[85%] h-[80%] rounded-lg border border-slate-700/50 bg-slate-900/80 p-3 flex flex-col gap-2 translate-y-4 transition-transform group-hover:translate-y-2 duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">ml_model // password_predictor</span>
                <Shield className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div className="flex items-center justify-center gap-4 mt-2">
                <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/30 flex items-center justify-center">
                  <div className="absolute inset-1 rounded-full border border-dashed border-emerald-500/50" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400">92% Acc</span>
                </div>
                <div className="flex flex-col gap-1 font-mono text-[9px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Logistic Regression</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Length & Character Analysis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Output: STRONG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-slate-950 flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-slate-700" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Major <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <GlassCard
              key={project.id}
              delay={idx * 0.15}
              className="group overflow-hidden flex flex-col h-full border border-slate-800/80 hover:border-blue-500/20"
            >
              {/* Project Preview Diagram */}
              {renderProjectVisual(project.id)}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-semibold text-cyan-400/90 tracking-wide font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Role/Date info */}
                <p className="text-[11px] font-medium text-slate-500 mb-3 uppercase tracking-wider font-mono">
                  {project.role} | {project.duration}
                </p>

                {/* Short Description */}
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold text-xs transition-all hover:bg-blue-600 flex items-center gap-1.5 interactive-hover"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5 interactive-hover"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>

                  {/* Details Button (always show or specifically for project 3, here we enable for all to give maximum details) */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/40 text-slate-400 hover:text-white font-semibold text-xs hover:bg-slate-800 transition-all flex items-center gap-1 interactive-hover ml-auto"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-full z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white interactive-hover transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <span className="text-[10px] font-semibold text-cyan-400 tracking-widest font-mono uppercase">
                  Project Deep Dive
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono uppercase mb-6">
                  {activeModalProject.role} &bull; {activeModalProject.duration}
                </p>

                {/* Tech breakdown */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-cyan-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    Project Description
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3.5 font-mono">
                    Core Accomplishments & Features
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
                    {activeModalProject.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4.5 h-4.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  {activeModalProject.links.demo && (
                    <a
                      href={activeModalProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-blue-500 text-white font-semibold text-xs hover:bg-blue-600 flex items-center gap-1.5 transition-all interactive-hover"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                  
                  <a
                    href={activeModalProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs hover:bg-slate-850 flex items-center gap-1.5 transition-all interactive-hover"
                  >
                    <Github className="w-4 h-4" />
                    Source Repository
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
