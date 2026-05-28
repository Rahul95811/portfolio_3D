import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTA, SEO } from "../components";
import { skills } from "../constants";
import avatar from "../assets/images/avatar.png";

const About = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showWave, setShowWave] = useState(false);
  const [isCvHovered, setIsCvHovered] = useState(false);

  useEffect(() => {
    const t1 = "Hello, I'm ";
    const t2 = "Rahul";
    let i = 0;
    const interval1 = setInterval(() => {
      setText1(t1.slice(0, i + 1));
      i++;
      if (i >= t1.length) {
        clearInterval(interval1);
        let j = 0;
        const interval2 = setInterval(() => {
          setText2(t2.slice(0, j + 1));
          j++;
          if (j >= t2.length) {
            clearInterval(interval2);
            setShowWave(true);
          }
        }, 150);
      }
    }, 80);
    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <motion.section
      className="max-container relative overflow-hidden rounded-3xl bg-white/40 border border-white/20 shadow-xl backdrop-blur-sm p-6 sm:p-12 md:p-16 my-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SEO
        title="About | Kilaparthi Rahul"
        description="Learn about Kilaparthi Rahul's journey, skills, and professional experience in cybersecurity, bug hunting, and software engineering."
        name="Kilaparthi Rahul"
        type="profile"
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

      {/* Main hero grid */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full my-8">
        {/* Left side info */}
        <div className="flex-1 flex flex-col gap-6 text-slate-700 max-w-lg lg:max-w-xl">
          <motion.h1
            className="head-text flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>{text1}</span>
            <motion.span
              className="blue-gradient_text font-semibold drop-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text2}
            </motion.span>
            {showWave && (
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="ml-1 inline-block"
              >
                👋
              </motion.span>
            )}
            <motion.span
              className="inline-block w-[3px] h-[0.8em] bg-blue-500 ml-1 align-middle"
              animate={{ opacity: showWave ? 0 : [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </motion.h1>

          <motion.div
            className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-slate-600 text-justify"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              I’m a B.Tech Computer Science and Engineering student at GITAM University specializing in Cybersecurity and Full Stack Development. I have hands-on experience in vulnerability assessment, bug bounty practices, and building secure web applications.
            </p>
            <p>
              My work includes satellite-based environmental data analysis, where I process satellite AOD records using geospatial and time-series techniques. This research-oriented background has strengthened my data-driven problem solving and automation skills.
            </p>
            <p>
              I enjoy building secure, scalable solutions. My interests range from ethical hacking and penetration testing to modern frontend development, always bridging the gap between security and premium interactive design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-2"
          >
            <motion.a
              href="/cv.pdf"
              download="Kilaparthi_Rahul_CV.pdf"
              onMouseEnter={() => setIsCvHovered(true)}
              onMouseLeave={() => setIsCvHovered(false)}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] cursor-pointer relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <span>Download CV</span>
              
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
                animate={isCvHovered ? { y: [0, 4, 0] } : { y: 0 }}
                transition={{ repeat: isCvHovered ? Infinity : 0, duration: 0.8 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Right side avatar */}
        <div className="flex-1 flex justify-center items-center w-full lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group w-72 h-72 sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex justify-center items-center"
          >
            {/* Ambient outer glowing background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-700 -z-10" />

            {/* Radar / Target rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-blue-500/25 rounded-full scale-[1.03]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-cyan-400/20 rounded-full scale-[1.08]"
            />

            {/* Glowing corner brackets (futuristic HUD detail) */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/50 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg" />

            {/* Frosted Glass Frame with subtle float */}
            <motion.div 
              className="w-full h-full rounded-3xl p-3 bg-white/5 backdrop-blur-sm border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center relative overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Scanline overlay effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05))] bg-[size:100%_4px] pointer-events-none opacity-40" />
              <img
                src={avatar}
                alt="Rahul Kilaparthi"
                className="w-full h-full object-cover rounded-2xl shadow-inner group-hover:scale-[1.03] transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16" />

      {/* Skills Section */}
      <div className="py-8 flex flex-col items-center">
        <h3 className="subhead-text self-start">My Skills</h3>

        <div className="mt-12 flex flex-wrap gap-10 justify-center w-full">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card w-24 h-24 sm:w-28 sm:h-28 flex flex-col justify-center items-center p-3 relative cursor-pointer"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain mb-2 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              />
              <span className="text-xs font-semibold text-slate-800 text-center select-none">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </motion.section>
  );
};

export default About;
