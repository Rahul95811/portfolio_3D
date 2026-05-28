import { motion } from "framer-motion";
import { linkedin } from "../assets/icons";
import { CTA, SEO } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Projects | Kilaparthi Rahul"
        description="Explore my portfolio of cybersecurity, bug hunting, and full-stack software development projects."
        name="Kilaparthi Rahul"
        type="website"
      />

      <motion.h1
        className="head-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My{" "}
        <motion.span
          className="blue-gradient_text drop-shadow font-semibold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Projects
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-slate-700 mt-2 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
            }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-48 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.exploreUrl && (
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.exploreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 relative group overflow-hidden rounded-xl p-[1px] focus:outline-none transition-all duration-300 active:scale-95 hover:scale-[1.03]"
                  >
                    {/* Glowing outer border gradient */}
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[2px] group-hover:blur-[6px] group-hover:shadow-[0_0_20px_rgba(0,198,255,0.4)]"></span>
                    
                    {/* Inner button container */}
                    <span className="relative flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950 text-white font-semibold transition-colors duration-300 group-hover:bg-slate-950/80">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
                      />
                      <span className="text-base tracking-wide">Explore Project</span>
                      
                      {/* Animated chevron arrow */}
                      <svg
                        className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <CTA />
    </motion.section>
  );
};

export default Projects;
