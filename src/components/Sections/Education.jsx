import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Academic <span className="text-gradient-primary">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Outer Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical central connection line */}
          <div className="timeline-line" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline central node marker */}
                  <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-6 w-[18px] h-[18px] rounded-full bg-slate-900 border-4 border-purple-500 z-10 shadow-[0_0_8px_#8b5cf6]" />

                  {/* Left Column: Metadata (Desktop alignment matches staggered order) */}
                  <div
                    className={`hidden md:flex md:w-[45%] flex-col justify-center ${
                      isEven ? "items-end text-right pr-8" : "items-start text-left pl-8"
                    }`}
                  >
                    <span className="text-sm font-semibold font-mono text-cyan-400">
                      {edu.grade}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Right Column: Glass Content Card */}
                  <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? "md:pl-0" : "md:pr-0"}`}>
                    <GlassCard
                      delay={index * 0.15}
                      className="p-6 border border-slate-800/80 hover:border-purple-500/25 relative group"
                    >
                      {/* Floating visual blur glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-3xl" />

                      {/* Mobile metadata header */}
                      <div className="flex flex-col md:hidden mb-3">
                        <span className="text-xs font-semibold font-mono text-cyan-400 uppercase tracking-wider mb-1">
                          {edu.grade}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {/* Academic Heading */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 flex-shrink-0">
                          {index === 0 ? (
                            <GraduationCap className="w-5 h-5" />
                          ) : (
                            <School className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-slate-400 mb-2 leading-relaxed">
                            {edu.degree}
                          </p>
                          
                          {/* Location tag */}
                          <div className="flex items-center gap-1 text-[11px] text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-slate-600" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
