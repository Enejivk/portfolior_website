import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, projects } from "../data/portfolio";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const PortfolioV11 = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-orange-500 selection:text-black">
      {/* Sidebar Nav */}
      <nav className="fixed left-0 top-0 h-full w-20 border-r border-white/10 flex flex-col items-center py-8 gap-8 z-50 bg-[#0a0a0a]">
        <div className="text-orange-500 font-bold text-xl">EV</div>
        <div className="flex-1 flex flex-col justify-center gap-12 [writing-mode:vertical-lr] text-xs uppercase tracking-[0.3em] text-zinc-500">
          <a href="#work" className="hover:text-white transition-colors">Projects</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="pl-20">
        {/* Brutalist Hero */}
        <section className="min-h-screen flex items-center px-12 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={container}>
              <motion.p variants={item} className="text-orange-500 mb-4 tracking-[0.5em] uppercase text-sm">
                Available for build // 2026
              </motion.p>
              <motion.h1 variants={item} className="text-6xl md:text-8xl font-black uppercase leading-[0.9]">
                {personalInfo.name.split(" ")[0]}<br />
                <span className="text-zinc-800 [-webkit-text-stroke:1px_#444]">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </motion.h1>
              <motion.div variants={item} className="mt-8 p-6 border-l-4 border-orange-500 bg-white/5 max-w-xl">
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {personalInfo.description}. Engineering high-performance digital interfaces with raw precision and modular logic.
                </p>
              </motion.div>
              <motion.div variants={item} className="mt-10 flex gap-6">
                <a href={personalInfo.github} className="hover:text-orange-500 transition-colors"><Github /></a>
                <a href={personalInfo.linkedin} className="hover:text-orange-500 transition-colors"><Linkedin /></a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-orange-500 transition-colors"><Mail /></a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 border-2 border-orange-500/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 overflow-hidden">
                <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="work" className="py-24 px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 uppercase italic">Selected_Output</h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="bg-[#0a0a0a] p-10 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-500" />
                <span className="text-xs text-zinc-600 mb-4 block">[{project.category}]</span>
                <h3 className="text-2xl font-bold mb-4 uppercase">{project.name}</h3>
                <p className="text-zinc-500 mb-8 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stacks.slice(0, 3).map(s => (
                    <span key={s} className="px-2 py-1 bg-zinc-900 text-[10px] text-zinc-400 border border-white/5 uppercase">{s}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="inline-flex items-center gap-2 text-orange-500 text-sm font-bold group-hover:gap-4 transition-all">
                    LIVE_PREVIEW <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Unified Footer */}
        <footer id="contact" className="py-24 px-12 border-t border-white/10 text-center">
          <p className="text-zinc-500 mb-4 uppercase tracking-[0.3em]">Protocol active</p>
          <a href={`mailto:${personalInfo.email}`} className="text-4xl md:text-6xl font-black hover:text-orange-500 transition-colors break-all">
            {personalInfo.email}
          </a>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV11;
