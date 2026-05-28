import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Certifications = () => {
  const featuredAchievements = [
    {
      title: "AIR 2026 International Research Paper Presentation",
      badge: "International Conference",
      detail: "Presented research paper at AIR 2026 International Conference on AI and Robotics.",
      topic: "LinkShield: A Multi-Layered Phishing Detection System Using Deterministic Heuristics and Content Parsing",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Real-World Full Stack Library Management System",
      badge: "Real-World Deployment",
      detail: "Successfully developed and deployed a production-level library management system for Hindu Vidyalaya School.",
      topic: "Production-grade system featuring custom dashboards with Chart.js, FullCalendar scheduling, and automated barcode-based tracking.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const certificationsList = [
    {
      title: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      date: "2024",
      skills: ["Ethical Hacking", "Network Security", "Vulnerabilities"],
      btnText: "Verify Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-blue-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Cybersecurity – Skill India Digital Hub",
      issuer: "Skill India",
      date: "2024",
      skills: ["Threat Detection", "IAM Security", "Cryptography"],
      btnText: "Verify Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-cyan-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Oracle Certification",
      issuer: "Oracle",
      date: "2024",
      skills: ["Java SE", "OOP Databases", "Backend Dev"],
      btnText: "Verify Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-red-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Adobe India Hackathon Participation",
      issuer: "Adobe India",
      date: "2024",
      skills: ["Full Stack", "Rapid Prototyping", "Product Dev"],
      btnText: "View Credential",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-indigo-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "TATA Forage",
      issuer: "TATA Group / Forage",
      date: "2024",
      skills: ["Job Simulation", "Data Analytics", "Enterprise Security"],
      btnText: "Verify Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-purple-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Teachnook Cybersecurity Internship",
      issuer: "Teachnook",
      date: "2024",
      skills: ["Network Security", "Threat Hunting", "Pentesting"],
      btnText: "Verify Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-blue-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Ethical Hacking Virtual Internship",
      issuer: "EduSkills Academy / NIP",
      date: "Apr - Jun 2025",
      skills: ["Ethical Hacking", "Vulnerability Assessment", "Cybersecurity"],
      btnText: "View Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-slate-900/25 via-blue-500 to-cyan-400"
    },
    {
      title: "Database Management Systems (RDBMS) & Microsoft Fabric SQL",
      issuer: "Udemy",
      date: "May 15, 2026",
      skills: ["RDBMS", "SQL", "Data Management"],
      btnText: "View Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-cyan-600/25 via-slate-900 to-slate-950"
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Aug 17, 2025",
      skills: ["Cloud Foundations", "OCI", "Oracle Infrastructure"],
      btnText: "View Certificate",
      url: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      color: "from-orange-500/25 via-slate-900 to-slate-950"
    }
  ];

  return (
    <motion.section
      className="max-container relative overflow-hidden rounded-3xl bg-white/40 border border-white/20 shadow-xl backdrop-blur-sm p-6 sm:p-12 md:p-16 my-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SEO
        title="Certifications | Kilaparthi Rahul"
        description="View professional certifications and featured achievements showcasing my cybersecurity, research, and software development journey."
      />

      {/* Decorative premium background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-50/50 via-white to-blue-50/20 opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-20 right-10 -z-10 w-72 h-72 rounded-full bg-blue-400/10 blur-[80px]" />
      <div className="absolute bottom-20 left-10 -z-10 w-96 h-96 rounded-full bg-indigo-300/10 blur-[100px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/25"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="head-text">
            My{" "}
            <motion.span
              className="blue-gradient_text font-semibold drop-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Certifications
            </motion.span>
          </h1>
          <p className="text-slate-600 mt-2 text-lg font-medium">
            Professional certifications and achievements showcasing my cybersecurity, research, and software development journey.
          </p>
        </motion.div>

        {/* Featured Achievements Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-7 bg-blue-600 rounded-full"></span>
            Featured Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAchievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative flex flex-col h-full bg-slate-950 border border-blue-500/20 p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.04)] hover:shadow-[0_0_30px_rgba(0,198,255,0.12)] hover:border-cyan-500/35 transition-all duration-300 group overflow-hidden"
              >
                {/* Visual grid accent lines inside the dark card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none" />

                <div className="flex justify-between items-start gap-4 mb-4 relative z-10">
                  <span className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full whitespace-nowrap">
                    {ach.badge}
                  </span>
                  <div className="p-2.5 bg-slate-900 border border-white/5 rounded-xl shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {ach.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">
                  {ach.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                  {ach.detail}
                </p>

                <div className="mt-auto bg-slate-900/60 border border-white/5 p-4 rounded-xl text-xs text-slate-400 font-mono leading-relaxed relative z-10">
                  <span className="text-cyan-400 font-semibold">Scope / Details:</span> {ach.topic}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-7 bg-blue-600 rounded-full"></span>
            Professional Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsList.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 90,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col h-full bg-white/70 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:border-blue-400/35 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300 group"
              >
                {/* Certificate Preview mockup */}
                <div className={`relative w-full h-32 rounded-xl bg-gradient-to-tr ${cert.color} overflow-hidden border border-white/10 flex flex-col items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.01]`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:8px_8px] opacity-40 pointer-events-none" />

                  <svg className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] mb-1.5 transition-transform duration-500 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase select-none">VERIFIED CREDENTIAL</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer & Date badge */}
                <div className="flex items-center justify-between gap-2 mb-3 mt-1">
                  <span className="text-xs font-semibold text-slate-500">
                    {cert.issuer}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full select-none">
                    {cert.date}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-medium text-slate-600 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded-md select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative group/btn overflow-hidden rounded-xl p-[1px] focus:outline-none transition-all duration-300 active:scale-98"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-800 text-xs font-bold transition-all duration-300 group-hover/btn:bg-transparent group-hover/btn:text-white">
                    <span>{cert.btnText}</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
