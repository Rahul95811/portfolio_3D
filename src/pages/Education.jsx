import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { certifications } from "../constants";

const Education = () => {
  const icons = [
    // Graduation Cap SVG for B.Tech
    <svg key="grad" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14L12 20" />
    </svg>,
    // Book SVG for Intermediate
    <svg key="book" className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    // School Building SVG for Secondary
    <svg key="school" className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ];

  return (
    <motion.section
      className="max-container relative overflow-hidden rounded-3xl bg-white/40 border border-white/20 shadow-xl backdrop-blur-sm p-6 sm:p-12 md:p-16 my-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SEO 
        title="Education | Kilaparthi Rahul" 
        description="View the academic background and educational milestones of Kilaparthi Rahul."
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
        <motion.h1
          className="head-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My{" "}
          <motion.span
            className="blue-gradient_text font-semibold drop-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Education
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-slate-600 mt-2 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My academic journey and educational milestones.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col h-full bg-white/70 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:border-blue-400/35 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              {/* Card Header: Icon & Year Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl shadow-inner flex items-center justify-center">
                  {icons[index]}
                </div>
                <span className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500"></span>
                  <span className="relative px-3.5 py-1 text-xs font-semibold text-white bg-slate-900/90 rounded-full select-none whitespace-nowrap">
                    {cert.date}
                  </span>
                </span>
              </div>

              {/* Title & Institution */}
              <h3 className="text-xl font-bold text-slate-800 mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="blue-gradient_text font-bold text-sm mb-2">
                {cert.org}
              </p>

              {/* Location (if any) */}
              {cert.location && (
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{cert.location}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Grade info at bottom */}
              <div className="mt-auto pt-4 border-t border-slate-100/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {cert.gradeType}
                </span>
                <span className="px-3 py-1.5 text-sm font-extrabold text-blue-600 bg-blue-50/70 rounded-xl border border-blue-100/50 shadow-sm">
                  {cert.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
