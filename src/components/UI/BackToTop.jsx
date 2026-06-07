import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // SVG parameters for radial progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-card hover:bg-slate-800 border border-slate-700/60 z-[99] flex items-center justify-center text-cyan-400 active:scale-95 transition-all shadow-xl interactive-hover group"
          aria-label="Back to Top"
        >
          {/* Radial Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r={radius}
              className="stroke-slate-800 fill-none"
              strokeWidth="3"
            />
            <motion.circle
              cx="25"
              cy="25"
              r={radius}
              className="stroke-cyan-400 fill-none"
              strokeWidth="3"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </svg>

          {/* Up Arrow Icon */}
          <ArrowUp className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
