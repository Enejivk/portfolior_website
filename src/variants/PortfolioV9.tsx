import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, skills, projects, education } from "../data/portfolio";
import { ArrowUpRight, Award, Target, Trophy, Zap } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const slide: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] } },
};

const PortfolioV9 = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,128,0.15),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-20">
          {/* Hero */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={slide}
            className="rounded-[32px] overflow-hidden border border-white/10"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-gradient-to-br from-[#ff0055] via-[#ff7a18] to-[#ffd200] text-black">
                <p className="uppercase tracking-[0.5em] text-xs">/Variant 09</p>
                <h1 className="mt-6 text-4xl md:text-5xl font-black leading-tight">{personalInfo.name}</h1>
                <p className="mt-4 text-lg">{personalInfo.description}</p>
                <div className="mt-6 flex gap-4 text-sm">
                  <span className="flex items-center gap-2"><Trophy size={16} /> Product builder</span>
                  <span className="flex items-center gap-2"><Zap size={16} /> Fast delivery</span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-10 inline-flex items-center gap-3 px-6 py-3 border border-black rounded-full text-sm uppercase tracking-[0.4em]"
                >
                  Contact
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="p-10 bg-[#0d0d0d] flex flex-col gap-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[linear-gradient(120deg,rgba(255,0,128,0.25),transparent_60%)] blur-3xl" />
                  <div className="relative rounded-[28px] border border-white/10 overflow-hidden">
                    <img src={profileImg} alt="Portrait of Eneji Victor" className="w-full h-[320px] object-cover" />
                  </div>
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border border-white/20 text-xs uppercase tracking-[0.4em] text-white/70">
                    EV · kinetic
                  </span>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-[0.4em]">Mission</p>
                  <p className="mt-4 text-2xl">
                    I build energetic software surfaces for ambitious brands who want momentum.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { title: "Projects", value: projects.length },
                    { title: "Stacks", value: skills.frontend.length + skills.backend.length + skills.devops.length },
                    { title: "Education", value: education.length },
                    { title: "Focus", value: "Impact" },
                  ].map((stat) => (
                    <div key={stat.title} className="border border-white/10 rounded-2xl py-6">
                      <div className="text-3xl font-black">{stat.value}</div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skill stripes */}
          <section className="space-y-6">
            {[skills.frontend, skills.backend, skills.devops].map((group, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slide}
                className="relative overflow-hidden rounded-[28px] border border-white/10"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="relative p-6 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 border border-white/30 rounded-full text-xs uppercase tracking-[0.4em] text-white/70">
                    Layer 0{idx + 1}
                  </span>
                  {group.map((skill) => (
                    <span key={skill.name} className="px-4 py-2 bg-white/5 rounded-full text-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Projects */}
          <section className="space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slide}
                className="grid md:grid-cols-[1fr,2fr] gap-6 items-center"
              >
                <div className="h-full rounded-[24px] border border-white/10 p-6 flex flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/60">Case 0{index + 1}</div>
                  <div>
                    <p className="text-sm text-white/60">{project.category}</p>
                    <h3 className="text-3xl font-semibold mt-3">{project.name}</h3>
                  </div>
                  <div className="flex gap-4 text-sm text-white/70">
                    {project.stacks.slice(0, 4).map((stack) => (
                      <span key={stack}>{stack}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 p-6">
                  <p className="text-white/70">{project.description}</p>
                  <div className="mt-6 flex gap-6 text-sm">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#ff7a18]"
                      >
                        Visit <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70"
                      >
                        Code <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Credentials */}
          <section className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Strategy", text: "Clear priorities anchored in measurable outcomes." },
              { icon: Award, title: "Craft", text: "Detail-obsessed execution with maintainable systems." },
              { icon: Trophy, title: "Leadership", text: "Guiding teams through bold releases and pivots." },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slide}
                className="rounded-[24px] border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent"
              >
                <card.icon className="text-[#ff7a18]" />
                <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/70">{card.text}</p>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioV9;
