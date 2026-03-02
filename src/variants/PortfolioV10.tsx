import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, projects, experience, skills } from "../data/portfolio";
import { ArrowUpRight, LayoutGrid, Compass, PhoneCall } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const stagger: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const PortfolioV10 = () => {
  const summaries = [
    { label: "Strategy", body: "Mapping north-star outcomes to tangible releases." },
    { label: "Delivery", body: "Building atomic components that ship weekly." },
    { label: "Systems", body: "Design tokens + CI/CD pipelines for consistent rollouts." },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111]">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 font-['IBM_Plex_Sans',sans-serif]">
        {/* Intro grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={stagger} className="bg-white border border-black rounded-[32px] p-8 flex flex-col gap-6">
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-500">Portfolio 10</p>
            <div>
              <h1 className="mt-6 text-4xl font-bold">{personalInfo.name}</h1>
              <p className="mt-3 text-neutral-600">{personalInfo.title}</p>
              <p className="mt-4 text-neutral-500">{personalInfo.description}</p>
            </div>
            <div>
              <div className="rounded-[28px] border border-black/10 overflow-hidden">
                <img src={profileImg} alt="Portrait of Eneji Victor" className="w-full h-[260px] object-cover" />
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mt-3">Documented · 2026</p>
            </div>
          </motion.div>
          <motion.div variants={stagger} className="bg-black text-white rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-white/60">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold">10+ multi-industry deliveries</h2>
              <p className="mt-4 text-white/70">Partnering with founders, scale-ups, and open communities to ship reliable platforms.</p>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em]">
              Email <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <motion.div variants={stagger} className="bg-white rounded-[32px] border border-black p-8 space-y-4">
            {summaries.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">{item.label}</p>
                <p className="mt-2 text-lg">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skill matrix */}
        <section>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">Stacks</p>
              <h2 className="text-3xl font-semibold">Modular system inventory</h2>
            </div>
            <LayoutGrid />
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[skills.frontend, skills.backend, skills.devops].map((group, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="bg-white rounded-[28px] border border-black/10 p-6"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">Layer 0{index + 1}</p>
                <div className="mt-4 space-y-2">
                  {group.map((skill) => (
                    <div key={skill.name} className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-neutral-400">{(skill.icon || skill.name).toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="grid md:grid-cols-2 gap-6">
          {experience.map((exp) => (
            <motion.div
              key={exp.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="rounded-[28px] border border-black bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">{exp.period}</p>
              <h3 className="mt-4 text-2xl font-semibold">{exp.title}</h3>
              <p className="text-neutral-500">{exp.company}</p>
              <p className="mt-4 text-neutral-600">{exp.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Projects */}
        <section className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="rounded-[32px] border border-black bg-white p-6 md:p-8"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-neutral-400">
                <span>Module 0{idx + 1}</span>
                <span>{project.category}</span>
              </div>
              <div className="mt-4 grid md:grid-cols-[2fr,1fr] gap-6">
                <div>
                  <h3 className="text-3xl font-semibold">{project.name}</h3>
                  <p className="mt-4 text-neutral-600">{project.description}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-sm text-neutral-500">
                    {project.stacks.slice(0, 5).map((stack) => (
                      <span key={stack} className="mr-3">
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-sm">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Live <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Repo <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Contact */}
        <section className="rounded-[32px] border border-black bg-black text-white p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold">Ready for your next precise build.</h2>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Compass size={18} /> Remote / Global
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={18} /> Remote-friendly
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 bg-white text-black rounded-full font-semibold">
              {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white rounded-full">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioV10;
