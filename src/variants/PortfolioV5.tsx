import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, projects, experience, openSource, skills } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Briefcase, GitBranch, Code2, ArrowRight, Mail, X, Play, Github, Globe, CheckCircle2 } from "lucide-react";

/**
 * PortfolioV5: "Violet Dusk"
 * Deep charcoal (#0e0c12) with soft purple/lavender (#a88bcc) accents.
 * Dusky, contemplative, and modern — an ethereal tech aesthetic.
 */

type Project = (typeof projects)[number];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const hasLiveLink = !!(project as any).link;
  const hasVideo = !!(project as any).videoDemo;
  const hasGithub = !!project.github;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-[#110f18]/92 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#1a1725] border border-[#a88bcc]/20 shadow-[0_0_120px_rgba(168,139,204,0.1)]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 text-[#d0c8da]/60 hover:text-[#a88bcc] transition-colors"><X size={24} /></button>
        <div className="aspect-[21/9] relative overflow-hidden">
          <img src={project.image || `https://placehold.co/1200x514/1a1725/a88bcc?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] saturate-[0.8] hue-rotate-[10deg]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1725] via-transparent to-[#1a1725]/30" />
          <div className="absolute bottom-8 left-10 right-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stacks.map((s) => (<span key={s} className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#a88bcc] bg-[#1a1725]/70 backdrop-blur-sm px-3 py-1 border border-[#a88bcc]/30">{s}</span>))}
            </div>
            <h2 className="text-3xl md:text-5xl tracking-tight italic text-white/90">{project.name}</h2>
          </div>
        </div>
        <div className="p-10 md:p-14 space-y-12">
          <div className="flex flex-wrap gap-4">
            {hasLiveLink && <a href={(project as any).link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#a88bcc] text-[#0e0c12] font-sans font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-[#bea3dd] transition-colors"><Globe size={16} /> Visit Live Site</a>}
            {hasGithub && <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#a88bcc]/30 text-[#a88bcc] font-sans font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-[#a88bcc] hover:text-[#0e0c12] transition-all"><Github size={16} /> View Source</a>}
          </div>
          <div className="space-y-4">
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]/60">About This Project</h3>
            <p className="text-[#d0c8da]/70 font-sans text-base md:text-lg leading-relaxed max-w-3xl">{(project as any).longDescription || project.description}</p>
          </div>
          {(project as any).features && (project as any).features.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]/60">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {(project as any).features.map((f: string, i: number) => (<div key={i} className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#a88bcc]/70 mt-0.5 shrink-0" /><span className="text-[#d0c8da]/65 font-sans text-sm leading-relaxed">{f}</span></div>))}
              </div>
            </div>
          )}
          {(project as any).challenges && (
            <div className="space-y-4">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]/60">Challenges & Solutions</h3>
              <p className="text-[#d0c8da]/60 font-sans text-sm leading-relaxed max-w-3xl border-l-2 border-[#a88bcc]/30 pl-6">{(project as any).challenges}</p>
            </div>
          )}
          {!hasLiveLink && hasVideo && (
            <div className="space-y-6">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]/60 flex items-center gap-3"><Play size={14} /> Demo Video</h3>
              <div className="aspect-video overflow-hidden border border-[#a88bcc]/20 bg-[#110f18]">
                <iframe src={(project as any).videoDemo} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={`${project.name} demo`} />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioV5 = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-[#16131e] text-[#e4dff0] font-['DM_Serif_Display',serif] selection:bg-[#a88bcc] selection:text-[#0e0c12] overflow-x-hidden">
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      {/* Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] z-50" />

      {/* Accent bars */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a88bcc]/40 to-transparent z-40" />
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a88bcc]/40 to-transparent z-40" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Code2 className="text-[#a88bcc]" size={22} />
          <span className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-[#a88bcc]">EV</span>
        </div>
        <div className="flex gap-12 text-xs font-sans font-bold uppercase tracking-[0.4em] text-[#d0c8da]/50">
          <a href="#experience" className="hover:text-[#a88bcc] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#a88bcc] transition-colors">Projects</a>
          <a href="#opensource" className="hover:text-[#a88bcc] transition-colors">Open Source</a>
          <a href={`mailto:${personalInfo.email}`} className="text-[#a88bcc] border border-[#a88bcc]/30 px-6 py-2 hover:bg-[#a88bcc] hover:text-[#0e0c12] transition-all">Contact</a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-48 relative z-10">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-24 items-center min-h-[80vh] mb-64">
          <div className="space-y-14">
            <h1 className="text-6xl md:text-[7.5rem] leading-[0.85] tracking-tight">
              Eneji<br />
              <span className="italic text-[#a88bcc]">Victor.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#d0c8da]/65 font-sans font-medium leading-relaxed max-w-lg border-l-2 border-[#a88bcc]/35 pl-8">
              {personalInfo.title}. {personalInfo.description}.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.slice(0, 5).map((s) => (
                <span key={s.name} className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/60 border border-[#a88bcc]/20 px-4 py-1.5">{s.name}</span>
              ))}
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/60 border border-[#a88bcc]/20 px-4 py-1.5">Redux</span>
            </div>
            <div className="flex gap-8 items-center pt-4">
              <motion.a whileHover={{ scale: 1.04 }} href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-[#a88bcc] text-[#0e0c12] font-sans font-black uppercase text-xs tracking-widest flex items-center gap-4 shadow-[0_0_60px_rgba(168,139,204,0.15)]">
                Get in Touch <ArrowRight size={16} />
              </motion.a>
              <div className="flex gap-8 text-[#d0c8da]/45 font-sans text-[10px] font-bold uppercase tracking-widest">
                <a href={personalInfo.github} className="hover:text-[#a88bcc] transition-colors border-b border-transparent hover:border-[#a88bcc] pb-1">GitHub</a>
                <a href={personalInfo.linkedin} className="hover:text-[#a88bcc] transition-colors border-b border-transparent hover:border-[#a88bcc] pb-1">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover grayscale-[0.3] brightness-[0.75] contrast-[1.1] saturate-[0.85] hue-rotate-[10deg] group-hover:grayscale-[0.1] group-hover:brightness-[0.9] transition-all duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16131e] via-transparent to-[#16131e]/20" />
              <div className="absolute inset-0 bg-[#a88bcc]/[0.03] mix-blend-overlay" />
              <div className="absolute inset-0 border border-[#a88bcc]/10" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]/60">{personalInfo.title}</p>
                <Mail size={24} className="text-[#a88bcc]/30" />
              </div>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section id="experience" className="py-40 border-t border-[#d0c8da]/10">
          <div className="grid lg:grid-cols-3 gap-24">
            <div className="space-y-8">
              <Briefcase className="text-[#a88bcc]" size={36} />
              <h2 className="text-5xl tracking-tight italic">Experience.</h2>
              <p className="font-sans text-[#d0c8da]/45 text-sm leading-relaxed italic">4+ years building dashboards, portals, and enterprise systems.</p>
            </div>
            <div className="lg:col-span-2 space-y-0 divide-y divide-[#d0c8da]/10">
              {experience.map((exp) => (
                <div key={exp.company} className="py-16 group flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc]">{exp.period}</span>
                    <h4 className="text-3xl tracking-tight italic group-hover:text-[#a88bcc] transition-colors">{exp.title}</h4>
                    <p className="text-[#d0c8da]/50 font-sans text-sm leading-relaxed max-w-xl">{exp.description}</p>
                  </div>
                  <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#d0c8da]/30 group-hover:text-[#d0c8da]/55 transition-colors whitespace-nowrap self-start pt-2">{exp.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-40 border-t border-[#d0c8da]/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[1em] text-[#a88bcc]/50">Selected Work</span>
              <h2 className="text-6xl md:text-9xl tracking-tight italic">Projects.</h2>
            </div>
          </div>
          <div className="space-y-32">
            {projects.map((project, idx) => (
              <motion.div key={project.id} whileHover={{ x: 20 }} onClick={() => setSelectedProject(project)} className="grid lg:grid-cols-12 gap-12 items-center group cursor-pointer">
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[21/9] overflow-hidden relative bg-[#110f18] shadow-2xl">
                    <img src={project.image || `https://placehold.co/1200x514/1a1725/a88bcc?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover grayscale-[0.2] brightness-[0.65] contrast-[1.1] saturate-[0.8] hue-rotate-[10deg] group-hover:grayscale-[0.05] group-hover:brightness-[0.85] transition-all duration-[2s] scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#16131e]/40 to-transparent" />
                    <div className="absolute top-6 left-6 font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/60">0{idx + 1}</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#a88bcc] bg-[#16131e]/70 backdrop-blur-sm px-6 py-3 border border-[#a88bcc]/40">View Details</span>
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${idx % 2 !== 0 ? "lg:order-1 lg:text-right" : ""} space-y-6`}>
                  <div className={`flex flex-wrap gap-3 ${idx % 2 !== 0 ? "justify-end" : ""}`}>
                    {project.stacks.slice(0, 3).map((s) => (<span key={s} className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/60 border border-[#a88bcc]/20 px-4 py-1">{s}</span>))}
                  </div>
                  <h3 className="text-4xl md:text-5xl tracking-tight group-hover:text-[#a88bcc] transition-colors italic">{project.name}</h3>
                  <p className="text-[#d0c8da]/55 font-sans text-base leading-relaxed">{project.description}</p>
                  <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? "justify-end" : ""}`}>
                    {(project as any).link && <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/70"><Globe size={12} /> Live</span>}
                    {project.github && <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/70"><Github size={12} /> Source</span>}
                    {(project as any).videoDemo && !(project as any).link && <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#a88bcc]/70"><Play size={12} /> Demo</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section id="opensource" className="py-40 border-t border-[#d0c8da]/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <GitBranch className="text-[#a88bcc]" size={36} />
              <h2 className="text-5xl md:text-8xl tracking-tight italic">Open Source.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {openSource.map((contrib) => (
              <div key={contrib.project} className="group p-10 border border-[#d0c8da]/10 hover:border-[#a88bcc]/30 transition-all space-y-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl tracking-tight italic group-hover:text-[#a88bcc] transition-colors">{contrib.project}</h4>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#a88bcc]/65">{contrib.period}</span>
                </div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#d0c8da]/30">{contrib.role}</p>
                <p className="text-[#d0c8da]/50 font-sans text-sm leading-relaxed">{contrib.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-40 text-center border-t border-[#d0c8da]/10">
          <h2 className="text-5xl md:text-[7rem] tracking-tight italic mb-12 leading-[0.85]">Let's Talk.</h2>
          <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-4xl italic text-[#a88bcc] border-b-2 border-[#a88bcc]/20 hover:border-[#a88bcc] pb-4 transition-all inline-block">{personalInfo.email}</a>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-40 pt-16 border-t border-[#d0c8da]/10 font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#d0c8da]/30 gap-6">
            <div className="flex gap-12">
              <a href={personalInfo.github} className="hover:text-[#a88bcc] transition-colors">GitHub</a>
              <a href={personalInfo.linkedin} className="hover:text-[#a88bcc] transition-colors">LinkedIn</a>
            </div>
            <span>© 2026 Eneji Victor</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV5;
