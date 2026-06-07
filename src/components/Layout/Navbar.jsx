import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Credentials" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for adding shadow/glass background density
      setIsScrolled(window.scrollY > 20);

      // Scroll progress indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[990] transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/70 border-b border-slate-800/60 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll indicator bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-900/50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white cursor-pointer group interactive-hover"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono shadow-md shadow-blue-500/10 group-hover:rotate-6 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            vikram<span className="text-cyan-400 font-bold">.dev</span>
          </span>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors interactive-hover ${
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-slate-800/40 border border-slate-700/30 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Hamburger Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white interactive-hover transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/20 text-cyan-400 pl-6"
                        : "text-slate-400 hover:text-white hover:bg-slate-900/40 border border-transparent"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
