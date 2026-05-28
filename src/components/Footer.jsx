import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins mt-20">
      {/* Premium Gradient Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="footer-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm text-center sm:text-left">
          © 2026 <strong className="font-semibold text-slate-800">Kilaparthi Rahul</strong>. All rights reserved.
        </p>

        <div className="flex gap-4 justify-center items-center">
          {socialLinks.map((link) => {
            const isExternal = link.link.startsWith("http");
            const content = (
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            );
            
            const className = "w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-500 hover:to-cyan-400 hover:border-transparent hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] group";

            return isExternal ? (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={link.name} to={link.link} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
