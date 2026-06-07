import { motion } from "framer-motion";
import { Code2, Terminal, Database, Cloud, Settings, Brain } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Skills = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case "Web Development":
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case "Databases":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case "Tools & Platforms":
        return <Settings className="w-5 h-5 text-pink-400" />;
      case "Core Skills":
        return <Brain className="w-5 h-5 text-rose-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] bg-glow-blue pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[30vw] h-[30vw] bg-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Technical <span className="text-gradient-primary">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, catIdx) => (
            <GlassCard
              key={cat.category}
              delay={catIdx * 0.1}
              className="p-6 relative group overflow-hidden"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/20 to-transparent pointer-events-none" />
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Progress Bars List */}
              <div className="flex flex-col gap-5">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    {/* Bar background */}
                    <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                      {/* Bar fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
