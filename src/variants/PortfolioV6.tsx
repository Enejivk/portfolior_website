import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, skills, projects, experience } from "../data/portfolio";
import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Sparkles, Shield, Flame } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const neonPillClasses = "px-4 py-2 border border-[#33ffcc]/40 rounded-full text-xs tracking-[0.25em] text-[#33ffcc] uppercase";

const PortfolioV6 = () => {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#33ffcc]/10 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#7c3bff]/20 blur-[180px] rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] items-center"
          >
            <div>
              <motion.span variants={item} className={neonPillClasses}>
                Full-stack architect
              </motion.span>
              <motion.h1
                variants={item}
                className="mt-8 text-4xl md:text-7xl font-black leading-tight tracking-tight"
              >
                {personalInfo.name}
                <span className="block text-transparent bg-gradient-to-r from-[#33ffcc] via-[#7c3bff] to-[#ff4fd8] bg-clip-text">
                  Designs resilient systems
                </span>
              </motion.h1>
              <motion.p variants={item} className="mt-6 text-lg text-zinc-400 max-w-2xl">
                {personalInfo.description}
              </motion.p>
              <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-[#33ffcc] text-black font-semibold rounded-full flex items-center gap-2"
                >
                  View radar
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-8 py-4 border border-white/30 rounded-full text-sm tracking-widest uppercase"
                >
                  Signal me
                </a>
              </motion.div>
            </div>
            <motion.div variants={item} className="relative max-w-sm mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#33ffcc]/20 via-[#7c3bff]/20 to-transparent blur-3xl" />
              <div className="relative rounded-[32px] border border-white/20 bg-black/60 backdrop-blur-xl p-4">
                <img
                  src={profileImg}
                  alt="Portrait of Eneji Victor"
                  className="w-full h-[420px] object-cover rounded-[24px]"
                />
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc-500">
                  <span>Human layer</span>
                  <span>EV/2026</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capability grid */}
      <section className="px-6 pb-20" id="skills">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: Sparkles, title: "Experience", value: "3+ yrs" },
            { icon: Cpu, title: "Stacks", value: `${skills.frontend.length + skills.backend.length + skills.devops.length}` },
            { icon: Shield, title: "Reliability", value: "99.9%" },
            { icon: Flame, title: "Ship speed", value: "Lightning" },
          ].map((cap) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <cap.icon className="text-[#33ffcc]" />
              <div className="mt-6 text-3xl font-black">{cap.value}</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">{cap.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech lanes */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {[skills.frontend, skills.backend, skills.devops].map((lane, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden border border-white/5 rounded-3xl"
            >
              <div className="px-6 py-4 border-b border-white/5 text-sm tracking-[0.3em] uppercase text-zinc-500">
                Track 0{idx + 1}
              </div>
              <div className="p-6 flex flex-wrap gap-3 bg-black/30">
                {lane.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 bg-white/5 rounded-full text-sm text-zinc-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className={neonPillClasses}>Operational log</span>
              <h2 className="mt-4 text-3xl font-bold">Featured deployments</h2>
            </div>
            <span className="text-zinc-500 text-sm uppercase tracking-[0.4em]">/{projects.length}</span>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent flex flex-col md:flex-row gap-6"
              >
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-2 text-zinc-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
                    {project.stacks.slice(0, 5).map((stack) => (
                      <span key={stack} className="px-3 py-1 border border-white/10 rounded-full">
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-end">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#33ffcc]"
                    >
                      Live <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400"
                    >
                      Repo <Github size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-white/10 rounded-3xl bg-black/40"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">LEG {idx + 1}</div>
              <h3 className="mt-3 text-2xl font-semibold">{exp.title}</h3>
              <p className="text-zinc-400">{exp.company}</p>
              <p className="mt-4 text-sm text-zinc-500">{exp.description}</p>
              <div className="mt-6 text-[#33ffcc] text-sm tracking-[0.4em]">{exp.period}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-[2.5rem] p-10 bg-black/60">
          <span className={neonPillClasses}>Comm link</span>
          <h2 className="mt-6 text-4xl font-bold">Open to new missions</h2>
          <p className="mt-4 text-zinc-400">Have an ambitious roadmap? Let's deploy it together.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold"
            >
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 rounded-full"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-zinc-400">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioV6;
