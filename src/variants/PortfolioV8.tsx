import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, skills, projects, experience } from "../data/portfolio";
import { Layers, CircleDashed, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const PortfolioV8 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-72 h-72 bg-sky-500/40 blur-[120px] top-10 left-10 rounded-full" />
          <div className="absolute w-96 h-96 bg-fuchsia-500/30 blur-[160px] bottom-0 right-0 rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Hero */}
          <motion.section initial="hidden" animate="visible" variants={fadeIn} className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <div className="flex flex-wrap gap-6 items-center text-sm uppercase tracking-[0.4em] text-white/70">
              <span>Portfolio 08</span>
              <span className="h-px w-16 bg-white/30" />
              <span>Remote-first</span>
            </div>
            <div className="mt-8 grid md:grid-cols-[1.6fr,1fr] gap-8 items-center">
              <div>
                <p className="text-lg text-white/70">{personalInfo.title}</p>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">{personalInfo.name}</h1>
                <p className="mt-6 text-white/70 max-w-xl">{personalInfo.description}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2">
                    Explore work <ArrowUpRight size={18} />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 rounded-full border border-white/30">
                    Contact
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/40 via-fuchsia-500/30 to-transparent blur-2xl" />
                  <div className="relative rounded-[32px] border border-white/20 overflow-hidden">
                    <img src={profileImg} alt="Portrait of Eneji Victor" className="w-full h-[360px] object-cover" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs uppercase tracking-[0.4em]">
                    EV · 2026
                  </div>
                </div>
                <div className="space-y-4">
                  {["Frontend architecture", "Data visualization", "Cloud-native UI"].map((item) => (
                    <div key={item} className="p-4 rounded-2xl border border-white/10 bg-white/5">
                      <p className="text-sm text-white/60">Capability</p>
                      <p className="text-xl font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <section className="mt-16 grid md:grid-cols-3 gap-6">
            {["Frontend", "Backend", "DevOps"].map((group, idx) => {
              const list = [skills.frontend, skills.backend, skills.devops][idx];
              return (
                <motion.div
                  key={group}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <div className="flex items-center gap-3 text-white/70">
                    <Layers size={18} />
                    <p className="uppercase tracking-[0.4em] text-xs">{group}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <span key={skill.name} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </section>

          {/* Experience */}
          <section className="mt-16 grid md:grid-cols-2 gap-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6"
              >
                <div className="text-xs uppercase tracking-[0.4em] text-white/60">{exp.period}</div>
                <h3 className="mt-3 text-2xl font-semibold">{exp.title}</h3>
                <p className="text-white/70">{exp.company}</p>
                <p className="mt-4 text-white/60">{exp.description}</p>
              </motion.div>
            ))}
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16 space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10"
              >
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.4em] text-white/60">
                  <span>Project 0{index + 1}</span>
                  <CircleDashed size={18} />
                </div>
                <div className="mt-6 grid md:grid-cols-[1.5fr,1fr] gap-8">
                  <div>
                    <p className="text-white/60 text-sm">{project.category}</p>
                    <h3 className="mt-2 text-3xl font-semibold">{project.name}</h3>
                    <p className="mt-3 text-white/70">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
                      {project.stacks.slice(0, 6).map((stack) => (
                        <span key={stack} className="px-3 py-1 rounded-full border border-white/20">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white"
                      >
                        Live site <ArrowUpRight size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70"
                      >
                        Repository <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Contact */}
          <section className="mt-20 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">Stay in touch</p>
            <h2 className="mt-4 text-4xl font-semibold">Let's collaborate on your next glassy interface.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${personalInfo.email}`} className="px-8 py-3 rounded-full bg-white text-black font-semibold">
                Email me
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-white/30"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-6 text-white/70">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioV8;
