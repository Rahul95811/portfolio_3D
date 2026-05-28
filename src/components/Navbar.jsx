import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.webp";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = ({ isActive }) =>
    `relative py-1.5 font-semibold transition-colors duration-300 ${
      isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
    }`;

  const renderLink = (to, label) => (
    <NavLink to={to} className={linkStyle}>
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-20 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center sm:px-16 px-8">
        <NavLink to="/" className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-108 transition-all duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.2)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <img src={logo} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
        </NavLink>
        {/* Desktop nav */}
        <nav className="hidden sm:flex text-lg gap-8 font-semibold">
          {renderLink("/about", "About")}
          {renderLink("/experience", "Experience")}
          {renderLink("/projects", "Projects")}
          {renderLink("/education", "Education")}
          {renderLink("/certifications", "Certifications")}
          {renderLink("/contact", "Contact")}
        </nav>
        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
          <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
          <span className="block w-7 h-1 bg-black rounded"></span>
        </button>
      </div>
      {/* Mobile menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
};

export default Navbar;
