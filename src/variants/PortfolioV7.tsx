import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, education, projects, skills } from "../data/portfolio";
import { NotebookPen, Quote, ArrowUpRight, Pin, BookOpenCheck, Palette, Globe } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PortfolioV7 = () => {
  return (
    <div className="min-h-screen bg-[#f8f3ed] text-[#2a1c12]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 font-serif">
        {/* Masthead */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border-y border-[#d2bfae] py-12"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] items-center">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-[#a1826a]">Portfolio volume 07</p>
              <h1 className="mt-6 text-5xl md:text-7xl leading-tight">{personalInfo.name}</h1>
              <p className="mt-4 text-xl max-w-3xl text-[#6b4b33]">{personalInfo.description}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 border border-[#d2bfae] rounded-full flex items-center gap-2">
                  <Pin size={16} /> Remote-first
                </span>
                <span className="px-4 py-2 border border-[#d2bfae] rounded-full flex items-center gap-2">
                  <NotebookPen size={16} /> Available for freelance
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[36px] border border-[#d2bfae] bg-[#fff9f3] shadow-xl overflow-hidden">
                <img src={profileImg} alt="Portrait of Eneji Victor" className="w-full h-[420px] object-cover" />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#2a1c12] text-white text-xs tracking-[0.4em] uppercase rounded-full">
                Issue portrait · 2026
              </span>
            </div>
          </div>
        </motion.header>

        {/* Quote */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-16 flex flex-col md:flex-row gap-10"
        >
          <Quote className="text-[#d2bfae]" size={64} />
          <div>
            <p className="text-3xl italic text-[#5d3c25]">
              "Each interface carries a narrative. I craft the structure, cadence, and typography so teams can communicate with clarity and grace."
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.4em] text-[#a1826a]">— {personalInfo.name}</p>
          </div>
        </motion.section>

        {/* Academic + Skills */}
        <section className="grid md:grid-cols-2 gap-12 border-y border-[#d2bfae] py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#a1826a]">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.school}>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b6937a]">{item.period}</p>
                  <h3 className="mt-2 text-2xl">{item.title}</h3>
                  <p className="text-[#6b4b33]">{item.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#a1826a]">Practices</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[skills.frontend, skills.backend, skills.devops]
                .flat()
                .slice(0, 8)
                .map((skill) => (
                  <div key={skill.name} className="border border-[#d2bfae] rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#b6937a]">{(skill.icon || skill.name).toUpperCase()}</p>
                    <p className="text-xl mt-2">{skill.name}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#a1826a]">Case studies</p>
              <h2 className="text-4xl mt-4">Selected builds</h2>
            </div>
            <Palette className="text-[#d2bfae]" />
          </div>
          <div className="mt-10 space-y-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-[#d2bfae] rounded-[2rem] p-8 bg-white"
              >
                <div className="flex justify-between text-xs uppercase tracking-[0.4em] text-[#b6937a]">
                  <span>Issue 0{index + 1}</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="mt-4 text-3xl">{project.name}</h3>
                <p className="mt-3 text-[#5d3c25]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#6b4b33]">
                  {project.stacks.slice(0, 5).map((stack) => (
                    <span key={stack} className="px-4 py-2 border border-[#d2bfae] rounded-full">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-6 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View project <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Repository <Globe size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-[#d2bfae] py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-xs uppercase tracking-[0.4em] text-[#a1826a]">Correspondence</p>
            <h2 className="mt-4 text-4xl">Let's craft your next editorial-grade product.</h2>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 border border-[#d2bfae] rounded-full flex items-center gap-2">
                {personalInfo.email}
                <ArrowUpRight size={16} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#d2bfae] rounded-full flex items-center gap-2">
                LinkedIn <BookOpenCheck size={16} />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioV7;
