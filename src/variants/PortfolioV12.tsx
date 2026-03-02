import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import { Github, Linkedin, ArrowUpRight, Palette } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const PortfolioV12 = () => {
  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#1c1c1c] font-['Space_Grotesk',sans-serif]">
      {/* Editorial Header */}
      <header className="px-6 py-12 border-b border-black/10 flex justify-between items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#999] mb-4 block">Selected Archive</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">{personalInfo.name}</h1>
        </div>
        <div className="hidden md:flex flex-col items-end text-sm uppercase tracking-wider text-[#666]">
          <span>{personalInfo.title}</span>
          <span>© 2026 Edition</span>
        </div>
      </header>

      <main className="px-6 space-y-24 py-20 pb-40">
        {/* Large Image Layout */}
        <section className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
          <div className="relative group overflow-hidden bg-[#e9e9e9]">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-square md:aspect-video"
            >
              <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-xs uppercase tracking-[0.4em] opacity-80 mb-2 block">Personal Identity</span>
              <p className="text-2xl font-light italic opacity-90 max-w-lg">
                "Code is the medium through which I refine and deliver value, one modular component at a time."
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-between py-4">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-[#444] mb-12">
                {personalInfo.description}. With a focused commitment to clean, performant software, I bridge the gap between complex logic and graceful user intent.
              </p>
              <div className="space-y-4 text-sm font-medium border-t border-black/5 pt-8">
                <div className="flex items-center gap-3"><Palette size={16} /> UI Design System Focus</div>
                <div className="flex items-center gap-3"><Github size={16} /> OSS Contribution History</div>
                <div className="flex items-center gap-3"><Linkedin size={16} /> Engineering Leadership</div>
              </div>
            </div>
            <div className="mt-12 flex gap-4">
              <a href={`mailto:${personalInfo.email}`} className="flex-1 bg-black text-white p-4 text-center rounded-sm font-bold hover:bg-neutral-800 transition-colors uppercase tracking-widest text-xs">
                Inquire now
              </a>
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold">Case Studies</h2>
            <div className="h-px bg-black/10 flex-1" />
          </div>
          <div className="space-y-20">
            {projects.slice(1, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textReveal}
                className="grid lg:grid-cols-[1fr,1.5fr] gap-12 group"
              >
                <div className="flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.4em] text-[#999] mb-4">Volume 0{idx + 1}</span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase group-hover:italic transition-all duration-500">{project.name}</h3>
                  <div className="flex gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.link && <a href={project.link} className="flex items-center gap-2 text-sm uppercase font-bold border-b-2 border-black pb-1">Visit site <ArrowUpRight size={14} /></a>}
                  </div>
                </div>
                <div className="border-l border-black/5 pl-12 space-y-6">
                  <p className="text-[#333] text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map(s => <span key={s} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-neutral-100 rounded-full">{s}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="bg-white border border-black/5 rounded-3xl p-10 md:p-20 shadow-sm">
           <h2 className="text-2xl font-bold uppercase mb-16 tracking-tighter">Timeline Evolution</h2>
           <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.company} className="grid md:grid-cols-4 gap-4 items-start pb-12 border-b border-black/5">
                <span className="text-xs uppercase tracking-[0.4em] text-[#999] mt-2">{exp.period}</span>
                <div className="md:col-span-2">
                  <h4 className="text-2xl font-bold">{exp.title}</h4>
                  <p className="text-sm text-[#777] mt-1">{exp.company}</p>
                </div>
                <p className="text-sm text-[#444] leading-relaxed">{exp.description}</p>
              </div>
            ))}
           </div>
        </section>

        {/* Dynamic Footer Link */}
        <section className="text-center pt-24">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={`mailto:${personalInfo.email}`}
            className="text-2xl md:text-4xl underline underline-offset-[12px] decoration-1 hover:decoration-2 transition-all font-light"
          >
            {personalInfo.email}
          </motion.a>
        </section>
      </main>
    </div>
  );
};

export default PortfolioV12;
