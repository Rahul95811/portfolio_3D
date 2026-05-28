import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { arrow } from "../assets/icons";

// High-end floating card motion preset
const floatAnimation = {
  animate: {
    y: [0, -8, 0],
  },
  transition: {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeInfo = ({ currentStage }) => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  if (currentStage === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[88%] sm:max-w-xl mx-auto"
      >
        <motion.div
          className="bg-white/[0.06] backdrop-blur-[6px] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] shadow-md py-5 px-6 sm:py-6 sm:px-8 rounded-2xl flex flex-col items-center text-center gap-5 sm:gap-6"
          {...floatAnimation}
        >
          <div className="w-full bg-gradient-to-b from-slate-950/50 to-slate-950/25 p-5 sm:p-6 rounded-xl border border-white/5 flex flex-col gap-4">
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="text-lg sm:text-2xl font-light text-white"
            >
              Hi, I'm <span className="font-bold text-white">Rahul</span> 👋
            </motion.h1>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col gap-3"
            >
              <p className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(0,198,255,0.45)]">
                Cybersecurity Engineer &<br />Full Stack Developer
              </p>
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-md mx-auto">
                Building Secure & Intelligent Digital Experiences
                <span className="block text-xs text-white/70 mt-1 font-semibold">
                  Core CSE Student @ GITAM University
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 w-full"
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain invert" />
            </Link>
            <a
              href="/cv.pdf"
              download="Kilaparthi_Rahul_CV.pdf"
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/45 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-white/10 relative overflow-hidden group"
            >
              {/* Shine effect overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <span>Download Resume</span>
              
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
                animate={isResumeHovered ? { y: [0, 4, 0] } : { y: 0 }}
                transition={{ repeat: isResumeHovered ? Infinity : 0, duration: 0.8 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  if (currentStage === 2) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[88%] sm:max-w-lg mx-auto"
      >
        <motion.div
          className="bg-white/[0.06] backdrop-blur-[6px] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] shadow-md p-6 rounded-2xl flex flex-col items-center text-center gap-5 text-white"
          {...floatAnimation}
        >
          <div className="w-full bg-gradient-to-b from-slate-950/50 to-slate-950/25 p-5 rounded-xl border border-white/5">
            <p className="font-medium sm:text-lg leading-relaxed text-white/90">
              Completed cybersecurity internship <br /> & found vulnerabilities as a Bug Bounty Hunter
            </p>
          </div>

          <Link
            to="/about"
            className="w-full sm:w-auto px-6 py-2.5 bg-white text-blue-600 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-slate-100 transition-all shadow-md hover:scale-[1.03]"
          >
            Learn more
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  if (currentStage === 3) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[88%] sm:max-w-lg mx-auto"
      >
        <motion.div
          className="bg-white/[0.06] backdrop-blur-[6px] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] shadow-md p-6 rounded-2xl flex flex-col items-center text-center gap-5 text-white"
          {...floatAnimation}
        >
          <div className="w-full bg-gradient-to-b from-slate-950/50 to-slate-950/25 p-5 rounded-xl border border-white/5">
            <p className="font-medium sm:text-lg leading-relaxed text-white/90">
              Led multiple projects to success. <br /> Curious about the impact?
            </p>
          </div>

          <Link
            to="/projects"
            className="w-full sm:w-auto px-6 py-2.5 bg-white text-blue-600 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-slate-100 transition-all shadow-md hover:scale-[1.03]"
          >
            Visit my portfolio
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  if (currentStage === 4) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[88%] sm:max-w-lg mx-auto"
      >
        <motion.div
          className="bg-white/[0.06] backdrop-blur-[6px] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] shadow-md p-6 rounded-2xl flex flex-col items-center text-center gap-5 text-white"
          {...floatAnimation}
        >
          <div className="w-full bg-gradient-to-b from-slate-950/50 to-slate-950/25 p-5 rounded-xl border border-white/5">
            <p className="font-medium sm:text-lg leading-relaxed text-white/90">
              Need a project done or looking for a developer? <br /> I'm just a few keystrokes away.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-2.5 bg-white text-blue-600 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-slate-100 transition-all shadow-md hover:scale-[1.03]"
          >
            Let's talk
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return null;
};

export default HomeInfo;
