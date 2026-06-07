import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Work <span className="text-gradient-primary">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Vertical central line (left aligned on small screens, centered on large) */}
          <div className="timeline-line" />

          {/* Experience list */}
          <div className="flex flex-col gap-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-stretch md:justify-between">
                
                {/* Timeline node circle */}
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-6 w-[18px] h-[18px] rounded-full bg-slate-900 border-4 border-cyan-400 z-10 shadow-[0_0_8px_#06b6d4] animate-pulse" />

                {/* Left side spacer / content (Large screens only) */}
                <div className="hidden md:flex md:w-[45%] flex-col justify-center items-end text-right pr-8">
                  <span className="text-sm font-semibold font-mono text-cyan-400">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Right side: main glass details card */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0 md:ml-auto">
                  <GlassCard
                    delay={index * 0.2}
                    className="p-6 relative hover:border-blue-500/30 group"
                  >
                    {/* Floating Glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl" />

                    {/* Small layout metadata for mobile views */}
                    <div className="flex flex-col md:hidden mb-3">
                      <span className="text-xs font-semibold font-mono text-cyan-400 uppercase tracking-wider mb-1">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Title & Info */}
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 flex-shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <ul className="flex flex-col gap-2.5 text-slate-300 text-xs sm:text-sm pl-0">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
