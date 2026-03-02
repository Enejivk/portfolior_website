import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Activity, Database, Cpu, Server, BarChart3, ArrowRight, Shield, CircleDot } from "lucide-react";

/**
 * PortfolioV30: "Quantum Grid"
 * Aesthetic: Data-dense system dashboard, teal (#14b8a6) + charcoal (#111827),
 * matrix-like precision, stat counters, modular grid cards, and HUD overlays.
 */
const PortfolioV30 = () => {
  return (
    <div className="min-h-screen bg-[#111827] text-[#e5e7eb] font-['JetBrains_Mono',monospace] selection:bg-[#14b8a6] selection:text-black overflow-x-hidden">
      {/* Subtle dot matrix */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(circle,#14b8a6_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Status bar top */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent z-50" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center bg-[#111827]/80 backdrop-blur-2xl border-b border-[#14b8a6]/5">
        <div className="flex items-center gap-4">
          <Activity size={18} className="text-[#14b8a6]" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#14b8a6]/70">QTM.030</span>
          <span className="text-[8px] px-3 py-1 bg-[#14b8a6]/10 border border-[#14b8a6]/20 rounded text-[#14b8a6] uppercase tracking-widest">Live</span>
        </div>
        <div className="flex gap-6 items-center text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#modules" className="text-[#e5e7eb]/20 hover:text-[#14b8a6] transition-colors">Modules</a>
          <a href="#sys" className="text-[#e5e7eb]/20 hover:text-[#14b8a6] transition-colors">Sys.Log</a>
          <a href={`mailto:${personalInfo.email}`} className="text-black bg-[#14b8a6] px-5 py-2 rounded-lg hover:bg-[#14b8a6]/80 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.15)]">Uplink</a>
        </div>
      </nav>

      <main className="max-w-[1500px] mx-auto px-8 pt-32 relative z-10">
        {/* Hero — System Dashboard */}
        <header className="grid lg:grid-cols-12 gap-6 min-h-[85vh] items-start mb-32 pt-16">
          {/* Main info panel */}
          <div className="lg:col-span-7 bg-[#1a2332] border border-white/5 rounded-2xl p-10 md:p-14 space-y-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CircleDot size={12} className="text-[#14b8a6] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#14b8a6]/60">System / Active / Primary Node</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/10">ID:EN-V030</span>
            </div>
            <h1 className="text-5xl md:text-[6.5rem] font-bold leading-[0.85] tracking-tighter">
              Eneji<br />
              <span className="text-[#14b8a6]">Victor.</span>
            </h1>
            <p className="text-base text-[#e5e7eb]/30 leading-relaxed max-w-xl border-l-2 border-[#14b8a6]/20 pl-6">
              {personalInfo.description}. Architecting high-throughput systems with quantum-level precision across the full stack.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              {[
                { label: "Projects", value: `${projects.length}+`, icon: Database },
                { label: "Uptime", value: "99.9%", icon: Server },
                { label: "Systems", value: "Full-Stack", icon: Cpu },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111827] border border-white/5 rounded-xl p-5 space-y-3">
                  <stat.icon size={16} className="text-[#14b8a6]/50" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/20">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 bg-[#14b8a6] text-black font-bold uppercase text-[10px] tracking-widest rounded-xl flex items-center gap-3 shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all"
              >
                OPEN CHANNEL <ArrowRight size={14} />
              </motion.a>
              <a href={personalInfo.github} className="px-6 py-4 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white hover:border-white/30 transition-all">GitHub</a>
              <a href={personalInfo.linkedin} className="px-6 py-4 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white hover:border-white/30 transition-all">LinkedIn</a>
            </div>
          </div>

          {/* Profile + side panels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile card */}
            <div className="bg-[#1a2332] border border-white/5 rounded-2xl p-4 relative group overflow-hidden">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] group-hover:brightness-[0.9] transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-[#111827]/30" />
                {/* HUD overlay elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-[8px] uppercase tracking-widest text-[#14b8a6]">CAM.01</div>
                  <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-[8px] uppercase tracking-widest text-white/30">REC</div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-[#14b8a6]/60 mb-1">Subject Verified</p>
                    <p className="text-sm font-bold">E.VICTOR // PRIMARY</p>
                  </div>
                  <Shield size={18} className="text-[#14b8a6]/30" />
                </div>
              </div>
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a2332] border border-white/5 rounded-2xl p-6 space-y-3">
                <BarChart3 size={18} className="text-[#14b8a6]/40" />
                <p className="text-lg font-bold text-white">React</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#14b8a6] rounded-full" />
                </div>
                <p className="text-[8px] uppercase tracking-widest text-white/15">Frontend // 92%</p>
              </div>
              <div className="bg-[#1a2332] border border-white/5 rounded-2xl p-6 space-y-3">
                <BarChart3 size={18} className="text-[#14b8a6]/40" />
                <p className="text-lg font-bold text-white">Python</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-[#14b8a6] rounded-full" />
                </div>
                <p className="text-[8px] uppercase tracking-widest text-white/15">Backend // 88%</p>
              </div>
            </div>
          </div>
        </header>

        {/* Modules — Projects */}
        <section id="modules" className="py-32 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#14b8a6]">Active Modules</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Deployed<br />Systems.</h2>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/15">
              <Database size={12} className="text-[#14b8a6]" /> {projects.length} Entries
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 6).map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="group bg-[#1a2332] border border-white/5 rounded-2xl overflow-hidden hover:border-[#14b8a6]/20 transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || `https://placehold.co/800x500/111827/14b8a6?text=${encodeURIComponent(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-[1.5s]"
                  />
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-[8px] font-bold uppercase tracking-widest text-[#14b8a6]/50">MOD.0{idx + 1}</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[#14b8a6] transition-colors">{project.name}</h3>
                  <p className="text-white/20 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.slice(0, 3).map((s) => (
                      <span key={s} className="px-3 py-1 bg-white/5 text-[8px] font-bold uppercase tracking-widest text-[#14b8a6]/50 rounded">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* System Log — Experience */}
        <section id="sys" className="py-32 border-t border-white/5">
          <div className="mb-20 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#14b8a6]">System Log</span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Runtime<br />History.</h2>
          </div>

          <div className="space-y-2">
            {experience.map((exp) => (
              <div key={exp.company} className="group bg-[#1a2332] border border-white/5 p-8 rounded-xl hover:border-[#14b8a6]/20 transition-all flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#14b8a6]">{exp.period}</span>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/10 group-hover:text-white/30 transition-colors">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight group-hover:text-[#14b8a6] transition-colors">{exp.title}</h4>
                  <p className="text-white/20 text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer — Terminal */}
        <footer className="py-32 border-t border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#14b8a6]/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/20 rounded-lg">
              <Activity size={14} className="text-[#14b8a6] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#14b8a6]">Channel Open</span>
            </div>
            <h2 className="text-4xl md:text-[8rem] font-bold tracking-tighter leading-[0.8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5">Uplink.</span>
            </h2>
            <a href={`mailto:${personalInfo.email}`} className="text-lg md:text-3xl font-bold text-[#14b8a6] border-b-2 border-[#14b8a6]/20 hover:border-[#14b8a6] pb-2 transition-all inline-block">
              {personalInfo.email}
            </a>
            <div className="flex justify-between items-center pt-20 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.5em] text-white/10">
              <div className="flex gap-10">
                <a href={personalInfo.github} className="hover:text-[#14b8a6] transition-colors">GitHub</a>
                <a href={personalInfo.linkedin} className="hover:text-[#14b8a6] transition-colors">LinkedIn</a>
              </div>
              <span>© 2026 QTM.SYSTEMS // NODE.030</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV30;
