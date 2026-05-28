import { motion } from "framer-motion";

import { SEO } from "../components";

const Contact = () => {
  const contactCards = [
    {
      title: "Email",
      value: "rahulkilaparthi7@gmail.com",
      description: "Send an email",
      href: "mailto:rahulkilaparthi7@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "kilaparthi-rahul-63b13a293",
      description: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
      external: true,
    },
    {
      title: "GitHub",
      value: "github.com/Rahulkilaparthi",
      description: "View my projects",
      href: "https://github.com/Rahulkilaparthi",
      external: true,
    },
    {
      title: "Location",
      value: "Visakhapatnam, India",
      description: "Available for remote work",
    },
  ];

  return (
    <section className="relative overflow-hidden max-container py-20">
      <SEO
        title="Contact | Kilaparthi Rahul"
        description="Get in touch with Kilaparthi Rahul for cybersecurity and software engineering collaborations"
        name="Kilaparthi Rahul"
        type="website"
      />

      <div className="grid lg:grid-cols-1 gap-10 items-start">
        <motion.div
          className="relative rounded-[40px] border border-white/30 bg-white/30 p-10 shadow-2xl shadow-slate-900/5 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-500/10">
            <span>✈️</span>
            Let's Connect
          </span>
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Let's Build Something <span className="blue-gradient_text">Secure</span> Together
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            I'm open to collaborations, internships, cybersecurity projects, and innovative development opportunities. Reach out if you want to build secure systems, smart applications, or research-driven products.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => {
              const content = (
                <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-900 break-all">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{card.description}</p>
                </div>
              );

              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : "_self"}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={card.title}>{content}</div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[32px] border border-white/40 bg-blue-500/10 p-6 text-slate-950 shadow-xl shadow-blue-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Currently Available For</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {['Internships', 'Full-time Roles', 'Freelance Projects', 'Collaborations'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
