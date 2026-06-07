import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Code2, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import confetti from "canvas-confetti";
import { portfolioData } from "../../data/portfolio";
import { GlassCard } from "../UI/GlassCard";

export const Contact = () => {
  const { socials, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("loading");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Trigger premium celebration confetti burst!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3B82F6", "#8B5CF6", "#06B6D4"]
      });

      setTimeout(() => setStatus("idle"), 5000);
    }, 1800);
  };

  const getSocialIcon = (iconName) => {
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
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 left-1/3 w-[45vw] h-[45vw] bg-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Get In <span className="text-gradient-primary">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <GlassCard className="p-8 border border-slate-800/80 hover:border-blue-500/10 flex-grow relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl" />
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Let's Discuss Projects
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  Whether you have an internship request, placement opportunity, startup proposal, or just want to connect, feel free to drop a message or reach out.
                </p>

                {/* Info List */}
                <div className="flex flex-col gap-6 text-sm sm:text-base mb-8">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link interactive-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover/link:scale-105 transition-transform flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Email me</p>
                      <span className="text-xs sm:text-sm font-medium">{personalInfo.email}</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group/link interactive-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover/link:scale-105 transition-transform flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Call me</p>
                      <span className="text-xs sm:text-sm font-medium">{personalInfo.phone}</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Base Location</p>
                      <span className="text-xs sm:text-sm font-medium">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connection Icons Row */}
              <div>
                <h4 className="text-[10px] uppercase font-mono text-slate-500 tracking-wider mb-4">
                  Find me on platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:scale-115 hover:border-slate-700 hover:text-white shadow-md ${social.color} interactive-hover`}
                      title={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 h-full">
            <GlassCard className="p-8 border border-slate-800/80 hover:border-purple-500/10 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
                
                {/* Double inputs (Name & Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider pl-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vikram Singh"
                      className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800/80 focus:border-cyan-500/60 focus:bg-slate-950 text-white placeholder-slate-600 text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 interactive-hover"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider pl-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@domain.com"
                      className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800/80 focus:border-cyan-500/60 focus:bg-slate-950 text-white placeholder-slate-600 text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 interactive-hover"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider pl-1">
                    Subject Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship / Startup Opportunity"
                    className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800/80 focus:border-cyan-500/60 focus:bg-slate-950 text-white placeholder-slate-600 text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 interactive-hover"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 flex-grow">
                  <label htmlFor="message" className="text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider pl-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Vikram, I would like to collaborate..."
                    className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800/80 focus:border-cyan-500/60 focus:bg-slate-950 text-white placeholder-slate-600 text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-500/20 resize-none flex-grow interactive-hover"
                    required
                  />
                </div>

                {/* Status Banners */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Message sent successfully! Confetti triggered. Vikram will connect soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Please fill all the required input fields before sending.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-60 shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2.5 interactive-hover mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching logs...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
