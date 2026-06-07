export const portfolioData = {
  personalInfo: {
    name: "Vikram Singh",
    title: "Software Engineer | AWS Certified Cloud Practitioner | Full Stack Developer | AI Enthusiast",
    subtitle: "Software Engineer & AI Enthusiast",
    email: "vikram10386@gmail.com",
    phone: "+91 7668761156",
    github: "https://github.com/vicky2856",
    linkedin: "https://www.linkedin.com/in/vikram-singh-885142328/", // standard placeholder to link, user can customize
    leetcode: "https://leetcode.com/u/Vikram291/", // standard placeholder, user can customize
    location: "Ghaziabad, UP, India",
    shortIntro: "Passionate Computer Science student focused on Full Stack Development, Cloud Computing, AI, Machine Learning, and Problem Solving.",
    aboutContent: [
      "I am a B.Tech Computer Science student at KIET Group of Institutions with an outstanding CGPA of 8.51. I enjoy building scalable web applications, AI-powered solutions, and cloud-based systems.",
      "My core technical interest spans Full Stack Development, AWS Cloud, Machine Learning, Cybersecurity, and Software Engineering. I love solving algorithmic challenges and architecting clean, secure web applications.",
      "As an entrepreneurially-minded developer, I founded Inflora, an influencer-startup collaboration platform. Through this startup, I gained valuable, hands-on experience in leadership, product management, and full-stack product engineering."
    ],
    resumeUrl: "#" // Will trigger a dynamic resume generator or direct download
  },
  highlights: [
    { title: "8.51 CGPA", desc: "B.Tech Computer Science student", icon: "GraduationCap", color: "blue" },
    { title: "AWS Certified", desc: "Cloud Practitioner (CLF-C02)", icon: "Cloud", color: "cyan" },
    { title: "IBM AI & Cloud", desc: "SkillsBuild Intern Graduate", icon: "Cpu", color: "purple" },
    { title: "Founder of Inflora", desc: "1500+ Creators Network Built", icon: "TrendingUp", color: "pink" }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 75 }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "ReactJS", level: 92 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "Spring Framework", level: 85 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS (Amazon Web Services)", level: 85 },
        { name: "IBM Cloud", level: 70 }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "GitHub / Git", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 90 },
        { name: "pgAdmin", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Tableau", level: 75 }
      ]
    },
    {
      category: "Core Skills",
      items: [
        { name: "Data Structures & Algorithms (DSA)", level: 88 },
        { name: "Object-Oriented Programming (OOP)", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Machine Learning (ML)", level: 80 }
      ]
    }
  ],
  experience: [
    {
      role: "AI & Cloud Intern",
      company: "IBM SkillsBuild | Edunet Foundation | AICTE",
      duration: "Jun 2025 – Jul 2025",
      type: "Virtual Internship",
      responsibilities: [
        "Worked on advanced AI and Cloud technologies, researching and leveraging IBM Cloud services.",
        "Built hands-on, cloud-based AI/ML solutions focused on predictive analytics and natural language processing.",
        "Utilized AutoAI features and developed functional conversational chatbots to handle simulated user queries.",
        "Gained direct practical experience in orchestrating cloud workflows and managing data analytics pipelines."
      ]
    }
  ],
  projects: [
    {
      id: "inflora",
      title: "Inflora – Influencer & Startup Collaboration Platform",
      role: "Founder & Full-Stack Developer",
      duration: "Nov 2025 – Jan 2026",
      tech: ["ReactJS", "Spring Boot", "PostgreSQL", "Spring Security", "Hibernate JPA"],
      description: "A highly scalable full-stack influencer marketplace and collaboration platform connecting content creators with emerging startups.",
      features: [
        "Role-Based Access Control (RBAC) ensuring custom experiences for creators and startups.",
        "Secure User Authentication powered by Spring Security.",
        "Full Stack Architecture with decoupled React UI and Spring Boot REST API.",
        "Robust database structures leveraging PostgreSQL and Hibernate ORM.",
        "Automated build and deployments utilizing Vercel (frontend) and Render (backend) with CI/CD workflows."
      ],
      links: {
        demo: "https://inflora-demo.vercel.app", // Placeholder link
        github: "https://github.com/vikram10386/inflora"
      },
      image: "inflora"
    },
    {
      id: "travel-planner",
      title: "AI-Powered Travel Planner Agent",
      role: "Individual Developer",
      duration: "Jul 2025",
      tech: ["Node.js", "Express.js", "IBM watsonx.ai (Granite)", "OpenWeather API"],
      description: "An intelligent travel agent that generates customized, weather-aware travel itineraries for users.",
      features: [
        "Generates responsive, contextual travel schedules based on live weather patterns.",
        "Powered by IBM watsonx.ai (Granite Large Language Models) for smart text generation.",
        "Integrates OpenWeather API to retrieve real-time regional weather statistics.",
        "Built on Express and Node for lightweight, rapid API middleware responses."
      ],
      links: {
        demo: "https://ai-travel-planner.vercel.app", // Placeholder link
        github: "https://github.com/vikram10386/ai-travel-planner"
      },
      image: "travel-planner"
    },
    {
      id: "password-strength",
      title: "Password Strength Predictor",
      role: "Team Lead (Team Size: 2)",
      duration: "Apr 2026",
      tech: ["Machine Learning", "Logistic Regression", "Python", "Flask"],
      description: "A machine learning classification model designed to analyze and predict password complexity using structural features.",
      features: [
        "Classifies passwords into distinct levels: Weak, Medium, or Strong.",
        "Achieved a verified 92% accuracy rate in testing validations.",
        "Uses character-based tokenization, string length features, and frequency distributions.",
        "Employs Logistic Regression as the core prediction engine for ultra-fast, low-overhead inference."
      ],
      links: {
        github: "https://github.com/vikram10386/password-strength-predictor"
      },
      image: "password-strength"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "Feb 2026",
      credentialId: "AWS-CLF-C02-Vikram", // Mock/Sample ID
      icon: "Cloud"
    },
    {
      name: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "Apr 2026",
      credentialId: "CISCO-NE-2026",
      icon: "Globe"
    },
    {
      name: "IBM AI & Cloud Internship Certificate",
      issuer: "IBM SkillsBuild / Edunet Foundation",
      date: "Jul 2025",
      credentialId: "IBM-AI-CLOUD-2025",
      icon: "Award"
    }
  ],
  achievements: [
    { value: "8.51", label: "CGPA (B.Tech)", prefix: "", suffix: "", icon: "GraduationCap", color: "blue" },
    { value: "1500", label: "Creators Network Built", prefix: "", suffix: "+", icon: "Users", color: "purple" },
    { value: "3", label: "Major Production Projects", prefix: "", suffix: "+", icon: "Code2", color: "cyan" },
    { value: "AWS", label: "Certified Practitioner", prefix: "", suffix: "", icon: "CloudLightning", color: "pink" }
  ],
  education: [
    {
      institution: "KIET Group of Institutions",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2024 - 2028",
      grade: "8.51 CGPA",
      location: "Ghaziabad, UP"
    },
    {
      institution: "Kendriya Vidyalaya Etah",
      degree: "Class 12 (CBSE Board)",
      duration: "2023",
      grade: "86% Percentage",
      location: "Etah, UP"
    },
    {
      institution: "Kendriya Vidyalaya Etah",
      degree: "Class 10 (CBSE Board)",
      duration: "2021",
      grade: "94.6% Percentage",
      location: "Etah, UP"
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/vicky2856", icon: "Github", color: "hover:text-slate-300" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vikram-singh-885142328/", icon: "Linkedin", color: "hover:text-blue-500" },
    { name: "LeetCode", url: "https://leetcode.com/u/Vikram291/", icon: "Code2", color: "hover:text-amber-500" },
    { name: "Email", url: "mailto:vikram10386@gmail.com", icon: "Mail", color: "hover:text-rose-500" }
  ]
};
