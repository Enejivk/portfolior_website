import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, projects, experience, openSource, skills } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Briefcase, GitBranch, Code2, ArrowRight, Mail, X, Play, Github, Globe, CheckCircle2 } from "lucide-react";

/**
 * PortfolioV26: "Noir Cinema"
 * Aesthetic: Film noir, cinematic widescreen framing, moody desaturated tones,
 * dramatic lighting with gold accent on near-black backgrounds.
 * Content: Real resume data — straightforward section labels.
 */

type Project = (typeof projects)[number];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const hasLiveLink = !!(project as any).link;
  const hasVideo = !!(project as any).videoDemo;
  const hasGithub = !!project.github;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-[#c9a84c]/10 shadow-[0_0_120px_rgba(201,168,76,0.08)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-[#d4c9a8]/40 hover:text-[#c9a84c] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Hero image */}
        <div className="aspect-[21/9] relative overflow-hidden">
          <img
            src={project.image || `https://placehold.co/1200x514/0a0a0a/c9a84c?text=${encodeURIComponent(project.name)}`}
            alt={project.name}
            className="w-full h-full object-cover grayscale-[0.4] brightness-[0.6] contrast-[1.2] sepia-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/40" />
          <div className="absolute bottom-8 left-10 right-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stacks.map((s) => (
                <span key={s} className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#c9a84c] bg-black/60 backdrop-blur-sm px-3 py-1 border border-[#c9a84c]/20">{s}</span>
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl tracking-tight italic text-white">{project.name}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 md:p-14 space-y-12">
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {hasLiveLink && (
              <a
                href={(project as any).link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#c9a84c] text-black font-sans font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-[#d4b85c] transition-colors"
              >
                <Globe size={16} /> Visit Live Site
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#c9a84c]/30 text-[#c9a84c] font-sans font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-[#c9a84c] hover:text-black transition-all"
              >
                <Github size={16} /> View Source
              </a>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]/60">About This Project</h3>
            <p className="text-[#d4c9a8]/60 font-sans text-base md:text-lg leading-relaxed max-w-3xl">
              {(project as any).longDescription || project.description}
            </p>
          </div>

          {/* Features */}
          {(project as any).features && (project as any).features.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]/60">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {(project as any).features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#c9a84c]/50 mt-0.5 shrink-0" />
                    <span className="text-[#d4c9a8]/50 font-sans text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {(project as any).challenges && (
            <div className="space-y-4">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]/60">Challenges & Solutions</h3>
              <p className="text-[#d4c9a8]/45 font-sans text-sm leading-relaxed max-w-3xl border-l-2 border-[#c9a84c]/15 pl-6">
                {(project as any).challenges}
              </p>
            </div>
          )}

          {/* Demo video (shown when no live link) */}
          {!hasLiveLink && hasVideo && (
            <div className="space-y-6">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]/60 flex items-center gap-3">
                <Play size={14} /> Demo Video
              </h3>
              <div className="aspect-video overflow-hidden border border-[#c9a84c]/10 bg-black">
                <iframe
                  src={(project as any).videoDemo}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`${project.name} demo`}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioV26 = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4c9a8] font-['DM_Serif_Display',serif] selection:bg-[#c9a84c] selection:text-black overflow-x-hidden">
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Film grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] z-50" />

      {/* Cinematic letterbox bars */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-black z-40" />
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-black z-40" />

      {/* Nav */}
      <nav className="fixed top-8 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Code2 className="text-[#c9a84c]" size={22} />
          <span className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-[#c9a84c]">EV</span>
        </div>
        <div className="flex gap-12 text-xs font-sans font-bold uppercase tracking-[0.4em] text-[#d4c9a8]/40">
          <a href="#experience" className="hover:text-[#c9a84c] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#c9a84c] transition-colors">Projects</a>
          <a href="#opensource" className="hover:text-[#c9a84c] transition-colors">Open Source</a>
          <a href={`mailto:${personalInfo.email}`} className="text-[#c9a84c] border border-[#c9a84c]/30 px-6 py-2 hover:bg-[#c9a84c] hover:text-black transition-all">Contact</a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-12 pt-48 relative z-10">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-24 items-center min-h-[80vh] mb-64">
          <div className="space-y-14">
            <h1 className="text-6xl md:text-[7.5rem] leading-[0.85] tracking-tight">
              Eneji<br />
              <span className="italic text-[#c9a84c]">Victor.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#d4c9a8]/50 font-sans font-medium leading-relaxed max-w-lg border-l-2 border-[#c9a84c]/20 pl-8">
              {personalInfo.title}. {personalInfo.description}.
            </p>

            {/* Skills strip */}
            <div className="flex flex-wrap gap-3">
              {skills.frontend.slice(0, 5).map((s) => (
                <span key={s.name} className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/40 border border-[#c9a84c]/10 px-4 py-1.5">{s.name}</span>
              ))}
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/40 border border-[#c9a84c]/10 px-4 py-1.5">Redux</span>
            </div>

            <div className="flex gap-8 items-center pt-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                href={`mailto:${personalInfo.email}`}
                className="px-10 py-5 bg-[#c9a84c] text-black font-sans font-black uppercase text-xs tracking-widest flex items-center gap-4 shadow-[0_0_60px_rgba(201,168,76,0.15)]"
              >
                Get in Touch <ArrowRight size={16} />
              </motion.a>
              <div className="flex gap-8 text-[#d4c9a8]/30 font-sans text-[10px] font-bold uppercase tracking-widest">
                <a href={personalInfo.github} className="hover:text-[#c9a84c] transition-colors border-b border-transparent hover:border-[#c9a84c] pb-1">GitHub</a>
                <a href={personalInfo.linkedin} className="hover:text-[#c9a84c] transition-colors border-b border-transparent hover:border-[#c9a84c] pb-1">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[1.3] sepia-[0.3] group-hover:grayscale-[0.3] group-hover:brightness-[0.8] transition-all duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
              <div className="absolute inset-0 border border-[#c9a84c]/10" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a84c]/5 to-transparent group-hover:from-[#c9a84c]/10 transition-all duration-1000" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]/60 mb-2">{personalInfo.title}</p>
                </div>
                <Mail size={24} className="text-[#c9a84c]/30" />
              </div>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section id="experience" className="py-40 border-t border-[#d4c9a8]/5">
          <div className="grid lg:grid-cols-3 gap-24">
            <div className="space-y-8">
              <Briefcase className="text-[#c9a84c]" size={36} />
              <h2 className="text-5xl tracking-tight italic">Experience.</h2>
              <p className="font-sans text-[#d4c9a8]/30 text-sm leading-relaxed italic">4+ years building dashboards, portals, and enterprise systems.</p>
            </div>
            <div className="lg:col-span-2 space-y-0 divide-y divide-[#d4c9a8]/5">
              {experience.map((exp) => (
                <div key={exp.company} className="py-16 group flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c]">{exp.period}</span>
                    <h4 className="text-3xl tracking-tight italic group-hover:text-[#c9a84c] transition-colors">{exp.title}</h4>
                    <p className="text-[#d4c9a8]/35 font-sans text-sm leading-relaxed max-w-xl">{exp.description}</p>
                  </div>
                  <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#d4c9a8]/20 group-hover:text-[#d4c9a8]/50 transition-colors whitespace-nowrap self-start pt-2">{exp.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-40 border-t border-[#d4c9a8]/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[1em] text-[#c9a84c]/60">Selected Work</span>
              <h2 className="text-6xl md:text-9xl tracking-tight italic">Projects.</h2>
            </div>
          </div>

          <div className="space-y-32">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ x: 20 }}
                onClick={() => setSelectedProject(project)}
                className="grid lg:grid-cols-12 gap-12 items-center group cursor-pointer"
              >
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[21/9] overflow-hidden relative bg-black shadow-2xl">
                    <img
                      src={project.image || `https://placehold.co/1200x514/0a0a0a/c9a84c?text=${encodeURIComponent(project.name)}`}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-[0.4] group-hover:brightness-75 transition-all duration-[2s] scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute top-6 left-6 font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/40">0{idx + 1}</div>
                    {/* Click hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9a84c] bg-black/70 backdrop-blur-sm px-6 py-3 border border-[#c9a84c]/30">View Details</span>
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${idx % 2 !== 0 ? "lg:order-1 lg:text-right" : ""} space-y-6`}>
                  <div className={`flex flex-wrap gap-3 ${idx % 2 !== 0 ? "justify-end" : ""}`}>
                    {project.stacks.slice(0, 3).map((s) => (
                      <span key={s} className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/40 border border-[#c9a84c]/10 px-4 py-1">{s}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl tracking-tight group-hover:text-[#c9a84c] transition-colors italic">{project.name}</h3>
                  <p className="text-[#d4c9a8]/40 font-sans text-base leading-relaxed">{project.description}</p>
                  <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? "justify-end" : ""}`}>
                    {(project as any).link && (
                      <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                        <Globe size={12} /> Live
                      </span>
                    )}
                    {project.github && (
                      <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                        <Github size={12} /> Source
                      </span>
                    )}
                    {(project as any).videoDemo && !(project as any).link && (
                      <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                        <Play size={12} /> Demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Source Contributions */}
        <section id="opensource" className="py-40 border-t border-[#d4c9a8]/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <GitBranch className="text-[#c9a84c]" size={36} />
              <h2 className="text-5xl md:text-8xl tracking-tight italic">Open Source.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {openSource.map((contrib) => (
              <div key={contrib.project} className="group p-10 border border-[#d4c9a8]/5 hover:border-[#c9a84c]/20 transition-all space-y-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl tracking-tight italic group-hover:text-[#c9a84c] transition-colors">{contrib.project}</h4>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#c9a84c]/50">{contrib.period}</span>
                </div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#d4c9a8]/20">{contrib.role}</p>
                <p className="text-[#d4c9a8]/35 font-sans text-sm leading-relaxed">{contrib.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-40 text-center border-t border-[#d4c9a8]/5">
          <h2 className="text-5xl md:text-[7rem] tracking-tight italic mb-12 leading-[0.85]">Let's Talk.</h2>
          <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-4xl italic text-[#c9a84c] border-b-2 border-[#c9a84c]/20 hover:border-[#c9a84c] pb-4 transition-all inline-block">
            {personalInfo.email}
          </a>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-40 pt-16 border-t border-[#d4c9a8]/5 font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#d4c9a8]/15 gap-6">
            <div className="flex gap-12">
              <a href={personalInfo.github} className="hover:text-[#c9a84c] transition-colors">GitHub</a>
              <a href={personalInfo.linkedin} className="hover:text-[#c9a84c] transition-colors">LinkedIn</a>
            </div>
            <span>© 2026 Eneji Victor</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV26;
