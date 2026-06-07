import { Mail, Code2, Terminal } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { portfolioData } from "../../data/portfolio";

export const Footer = () => {
  const { socials, personalInfo } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-5 h-5" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 py-12 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Left Side: Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 font-bold text-lg text-white cursor-pointer group mb-2"
          >
            <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-mono text-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm">
              vikram<span className="text-cyan-400 font-bold">.dev</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            {personalInfo.title}
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:scale-115 hover:border-slate-700 hover:text-white shadow-md shadow-black/20 ${social.color} interactive-hover`}
              title={social.name}
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-900 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
        <div>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <button onClick={() => handleNavClick("about")} className="hover:text-slate-300 transition-colors">About</button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-slate-300 transition-colors">Projects</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-slate-300 transition-colors">Contact</button>
        </div>
      </div>
    </footer>
  );
};
