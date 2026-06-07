import { motion } from "framer-motion";
import { GraduationCap, Users, Code2, CloudLightning } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";
import { StatCounter } from "../UI/StatCounter";

export const Achievements = () => {
  const { achievements } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6" />;
      case "Users":
        return <Users className="w-6 h-6" />;
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "CloudLightning":
        return <CloudLightning className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "purple":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "cyan":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
      case "pink":
        return "text-pink-400 bg-pink-500/10 border-pink-500/20";
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Key <span className="text-gradient-primary">Highlights</span> & Stats
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach, idx) => (
            <GlassCard
              key={idx}
              delay={idx * 0.1}
              className="p-6 text-center border border-slate-800/80 hover:border-blue-500/20 relative group overflow-hidden"
            >
              {/* Internal glow flare */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col items-center gap-4">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md ${getColorClasses(ach.color)}`}>
                  {getIcon(ach.icon)}
                </div>

                {/* Big number stat */}
                <h3 className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-gradient-primary">
                  <StatCounter
                    value={ach.value}
                    suffix={ach.suffix}
                    prefix={ach.prefix}
                    duration={1800}
                  />
                </h3>

                {/* Label text */}
                <p className="text-xs sm:text-sm font-medium text-slate-400 leading-normal max-w-[150px]">
                  {ach.label}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
