import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "Initializing system credentials...",
    "Loading technical stacks (Java, ReactJS, Spring Boot)...",
    "Fetching database services (PostgreSQL, MySQL)...",
    "Verifying AWS Cloud Practitioner certifications...",
    "Loading Inflora startup modules...",
    "Securing AI & Machine learning packages...",
    "Compiling developer portfolio portfolioData...",
    "Ready. Welcome to Vikram's Workspace."
  ];

  useEffect(() => {
    const duration = 2400; // Total loading time
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Progress-based log index calculation
    const progressThreshold = 100 / logs.length;
    const currentLog = Math.min(
      Math.floor(progress / progressThreshold),
      logs.length - 1
    );
    setLogIndex(currentLog);
  }, [progress, logs.length]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#0F172A] z-[99999] flex flex-col items-center justify-center p-6 text-left"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full max-w-lg glass-card p-6 rounded-xl border border-slate-700/60 font-mono text-xs sm:text-sm text-slate-300 relative overflow-hidden shadow-2xl">
        {/* Decorative corner glows */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] text-slate-500">vikram@portfolio: ~/workspace</span>
        </div>

        {/* Terminal Logs */}
        <div className="h-28 overflow-hidden flex flex-col justify-end gap-1.5 text-slate-400">
          {logs.slice(0, logIndex).map((log, index) => (
            <div key={index} className="opacity-40 flex">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>{log}</span>
            </div>
          ))}
          <div className="flex font-semibold text-cyan-300">
            <span className="animate-pulse mr-2">&gt;</span>
            <span>{logs[logIndex]}</span>
          </div>
        </div>

        {/* Progress Bar & Percent */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2 font-mono text-[10px] text-slate-500">
            <span>COMPILING PORTFOLIO ASSETS</span>
            <span className="text-cyan-400 font-bold text-xs">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
