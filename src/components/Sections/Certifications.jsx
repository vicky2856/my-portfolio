import { motion } from "framer-motion";
import { Cloud, Globe, Award, ShieldCheck } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Certifications = () => {
  const { certifications } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Cloud":
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-400" />;
      case "Award":
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Award className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Certifications & <span className="text-gradient-primary">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <GlassCard
              key={idx}
              delay={idx * 0.15}
              className="p-6 relative group overflow-hidden border border-slate-800/80 hover:border-blue-500/25 flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-700/5 to-transparent rounded-bl-2xl transition-all duration-300 group-hover:from-blue-500/10" />

              <div>
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110">
                  {getIcon(cert.icon)}
                </div>

                {/* Name */}
                <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-xs sm:text-sm font-medium text-slate-400 mb-1">
                  {cert.issuer}
                </p>
                {/* Date */}
                <p className="text-[11px] font-mono text-slate-500 mb-6 uppercase">
                  Issued: {cert.date}
                </p>
              </div>

              {/* Verify Badge */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-800/60 mt-auto text-slate-500 group-hover:text-slate-400 transition-colors">
                <ShieldCheck className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" />
                <span className="text-[10px] font-semibold tracking-wider font-mono uppercase">
                  Verified credential
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
