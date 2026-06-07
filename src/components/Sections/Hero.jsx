import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Cloud, Cpu, Code2, Database } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import avatar from "../../assets/avatar.jpg";

export const Hero = () => {
  const { personalInfo } = portfolioData;

  const titles = [
    "Software Engineer",
    "AWS Certified Cloud Practitioner",
    "Full Stack Developer",
    "AI Enthusiast"
  ];

  const typedTitle = useTypingEffect(titles, 70, 40, 2000);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Helper to generate a text-based resume file dynamically to download!
  const generateAndDownloadResume = () => {
    const resumeText = `
VIKRAM SINGH
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
GitHub: ${personalInfo.github} | Location: ${personalInfo.location}

==================================================
SUMMARY
Passionate Computer Science student focused on Full Stack Development, Cloud Computing, AI, Machine Learning, and Problem Solving.

==================================================
EDUCATION
- KIET Group of Institutions
  B.Tech in Computer Science & Engineering (2024 - 2028)
  CGPA: 8.51
- Kendriya Vidyalaya Etah
  Class 12 CBSE (2023) | Grade: 86%
  Class 10 CBSE (2021) | Grade: 94.6%

==================================================
TECHNICAL SKILLS
- Programming: C, Java, Python
- Web Development: ReactJS, HTML, CSS, JavaScript, Spring, Spring Boot
- Databases: SQL, MySQL, PostgreSQL
- Cloud: AWS (Certified Cloud Practitioner CLF-C02), IBM Cloud
- Tools: VS Code, IntelliJ IDEA, pgAdmin, GitHub, Power BI, Tableau
- Core: DSA, OOPs, Problem Solving, Machine Learning

==================================================
EXPERIENCE / INTERNSHIPS
- AI & Cloud Intern | IBM SkillsBuild (Jun 2025 - Jul 2025)
  * Completed virtual internship on AI, ML, Cloud Computing, and Data Analytics.
  * Built hands-on AI/ML solutions, chatbot development, AutoAI, and cloud workflows.

==================================================
PROJECTS
- Inflora (Founder & Full-Stack Developer) - Nov 2025 - Jan 2026
  * Built full-stack influencer marketplace using ReactJS, Spring Boot, and PostgreSQL.
  * Implemented secure authentication and RBAC using Spring Security and Hibernate JPA.
- AI-Powered Travel Planner Agent (Individual Developer) - Jul 2025
  * AI-powered travel itinerary creator using IBM watsonx.ai (Granite) and OpenWeather API.
- Password Strength Predictor (Team Lead) - Apr 2026
  * Trained ML model (Logistic Regression) classifying passwords (92% accuracy).

==================================================
CERTIFICATIONS
- AWS Certified Cloud Practitioner (CLF-C02) - Amazon Web Services
- Networking Essentials - Cisco Networking Academy
- IBM AI & Cloud Internship Certificate
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Vikram_Singh_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs sm:text-sm font-mono mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Available for Internships & Placement Roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4"
          >
            Hi, I am{" "}
            <span className="text-gradient-primary">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-8 sm:h-12 mb-6"
          >
            <p className="text-lg sm:text-2xl text-slate-300 font-mono typing-cursor">
              {typedTitle}
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            {personalInfo.shortIntro}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-blue-500/20 w-full sm:w-auto flex items-center justify-center gap-2 group interactive-hover"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={generateAndDownloadResume}
              className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-semibold text-sm hover:bg-slate-800 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 interactive-hover"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-slate-700/60 text-slate-400 hover:text-white font-semibold text-sm hover:border-slate-500 transition-all w-full sm:w-auto flex items-center justify-center gap-2 interactive-hover"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </motion.div>
        </div>

        {/* Right Side: Animated Image Placeholder / Visual */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[360px] sm:h-[450px] w-full">
          
          {/* Background Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-slate-700/60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-dotted border-blue-500/20"
          />

          {/* Central Glass Globe (Avatar Placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full glass-card flex flex-col justify-center items-center relative overflow-hidden group border border-slate-600/40 shadow-2xl interactive-hover animate-glow"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-70 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.25),rgba(15,23,42,0))] z-10 pointer-events-none" />
            
            {/* Profile Image */}
            <img 
              src={avatar} 
              alt={personalInfo.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
            />
            
            {/* Glowing overlay text on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end items-center pb-4">
              <span className="font-mono text-[10px] sm:text-xs text-cyan-300 tracking-widest uppercase font-semibold">
                {personalInfo.name}
              </span>
              <span className="text-[8px] sm:text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-1">
                Portfolio Profile
              </span>
            </div>
            
            {/* Interactive scanline */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/30 shadow-[0_0_10px_#06B6D4] animate-pulse z-30" style={{ animationDuration: '3s' }} />
          </motion.div>

          {/* Orbiting Floating Icons */}
          
          {/* AWS Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-6 sm:top-14 sm:right-12 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-amber-500 border border-amber-500/20 shadow-md interactive-hover"
            title="AWS Certified Cloud Practitioner"
          >
            <Cloud className="w-6 h-6" />
          </motion.div>

          {/* React Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-8 sm:bottom-16 sm:right-14 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-blue-400 border border-blue-400/20 shadow-md interactive-hover"
            title="React JS Developer"
          >
            <Code2 className="w-6 h-6" />
          </motion.div>

          {/* Spring Boot / Backend Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-12 left-8 sm:top-16 sm:left-14 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-emerald-400 border border-emerald-400/20 shadow-md interactive-hover"
            title="Spring Boot / Java"
          >
            <Cpu className="w-6 h-6" />
          </motion.div>

          {/* Python / AI Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-12 left-10 sm:bottom-20 sm:left-16 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-purple-400 border border-purple-400/20 shadow-md interactive-hover"
            title="Machine Learning & Python"
          >
            <Database className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
