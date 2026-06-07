import { motion } from "framer-motion";
import { GraduationCap, Cloud, Cpu, TrendingUp } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const About = () => {
  const { personalInfo, highlights } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6" />;
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",
          glow: "group-hover:shadow-blue-500/10"
        };
      case "cyan":
        return {
          icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
          glow: "group-hover:shadow-cyan-500/10"
        };
      case "purple":
        return {
          icon: "text-purple-400 bg-purple-500/10 border-purple-500/20",
          glow: "group-hover:shadow-purple-500/10"
        };
      case "pink":
        return {
          icon: "text-pink-400 bg-pink-500/10 border-pink-500/20",
          glow: "group-hover:shadow-pink-500/10"
        };
      default:
        return {
          icon: "text-slate-400 bg-slate-500/10 border-slate-500/20",
          glow: "group-hover:shadow-slate-500/10"
        };
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-glow-purple pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            About <span className="text-gradient-primary">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-white font-mono"
            >
              &gt; Engineering scalable, smart products
            </motion.h3>

            {personalInfo.aboutContent.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Quick Education callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3 mt-4"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mt-0.5 flex-shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">KIET Group of Institutions</h4>
                <p className="text-xs text-slate-400">Pursuing B.Tech Computer Science & Engineering (2024 - 2028)</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {highlights.map((highlight, index) => {
              const colorClasses = getColorClasses(highlight.color);
              return (
                <GlassCard
                  key={index}
                  delay={index * 0.15}
                  className="p-6 relative group overflow-hidden"
                >
                  {/* Decorative card gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-slate-900/10 z-0" />
                  
                  {/* Glowing light source */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-current opacity-[0.02] group-hover:opacity-[0.06] rounded-full blur-xl transition-opacity duration-300" style={{ color: highlight.color === 'blue' ? '#3b82f6' : highlight.color === 'cyan' ? '#06b6d4' : highlight.color === 'purple' ? '#8b5cf6' : '#ec4899' }} />

                  <div className="relative z-10 flex flex-col gap-4">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-sm ${colorClasses.icon}`}>
                      {getIcon(highlight.icon)}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
