import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Zap, Radio, Wifi, BatteryCharging, ArrowRight, ChevronRight } from "lucide-react";

/**
 * PortfolioV28: "Neon Tokyo"
 * Aesthetic: Japanese cyberpunk, hot pink (#ff2d7b) + deep navy (#0a0e27),
 * glitch-inspired accents, neon glow, grid underlays, and katakana flavor text.
 */
const PortfolioV28 = () => {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-['Space_Grotesk',sans-serif] selection:bg-[#ff2d7b] selection:text-white overflow-x-hidden">
      {/* Neon grid underlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ff2d7b_1px,transparent_1px),linear-gradient(to_bottom,#ff2d7b_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top neon bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2d7b] to-transparent z-50 opacity-60" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-8 flex justify-between items-center bg-[#0a0e27]/60 backdrop-blur-2xl border-b border-[#ff2d7b]/5">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#ff2d7b] flex items-center justify-center shadow-[0_0_20px_rgba(255,45,123,0.4)]">
            <Zap size={16} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.3em] uppercase">NEON.028</span>
            <span className="text-[8px] tracking-[0.5em] uppercase text-[#ff2d7b]/50">ネオン・トーキョー</span>
          </div>
        </div>
        <div className="flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="#district" className="text-white/30 hover:text-[#ff2d7b] transition-colors">District</a>
          <a href="#log" className="text-white/30 hover:text-[#ff2d7b] transition-colors">Log</a>
          <a href={`mailto:${personalInfo.email}`} className="text-[#ff2d7b] border border-[#ff2d7b]/40 px-5 py-2 rounded-lg hover:bg-[#ff2d7b] hover:text-white shadow-[0_0_15px_rgba(255,45,123,0.1)] hover:shadow-[0_0_30px_rgba(255,45,123,0.3)] transition-all">Ping</a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-10 pt-48 relative z-10">
        {/* Hero */}
        <header className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh] mb-64">
          <div className="lg:col-span-7 space-y-14">
            <div className="flex items-center gap-4">
              <Radio size={14} className="text-[#ff2d7b] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#ff2d7b]/60">SYS.ONLINE // エネジ・ビクター</span>
            </div>
            <h1 className="text-7xl md:text-[9rem] font-bold leading-[0.8] tracking-tighter uppercase">
              <span className="block">Eneji</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d7b] to-[#ff6b9d] italic">Victor.</span>
            </h1>
            <p className="text-xl text-white/30 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff2d7b]/20 pl-8">
              {personalInfo.description}. Building neon-lit digital experiences that pulse with energy and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={`mailto:${personalInfo.email}`}
                className="px-10 py-5 bg-[#ff2d7b] text-white font-bold uppercase text-xs tracking-widest rounded-xl flex items-center gap-4 shadow-[0_0_40px_rgba(255,45,123,0.25)] hover:shadow-[0_0_60px_rgba(255,45,123,0.4)] transition-all"
              >
                ESTABLISH LINK <ArrowRight size={16} />
              </motion.a>
              <div className="flex gap-6 items-center pl-4">
                <a href={personalInfo.github} className="text-white/20 hover:text-[#ff2d7b] font-bold text-[10px] uppercase tracking-widest transition-colors">GH</a>
                <span className="text-white/10">|</span>
                <a href={personalInfo.linkedin} className="text-white/20 hover:text-[#ff2d7b] font-bold text-[10px] uppercase tracking-widest transition-colors">LI</a>
              </div>
            </div>
            {/* Status bar */}
            <div className="flex gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/15">
                <Wifi size={12} className="text-[#ff2d7b]" /> Signal: Strong
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/15">
                <BatteryCharging size={12} className="text-[#ff2d7b]" /> Status: Active
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            {/* Neon frame glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#ff2d7b] to-[#ff6b9d] rounded-[40px] opacity-20 blur-xl group-hover:opacity-40 transition-all" />
            <div className="relative aspect-[3/4] rounded-[36px] overflow-hidden border border-[#ff2d7b]/20 shadow-2xl bg-[#0f1535]">
              <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover brightness-[0.8] contrast-[1.2] group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-[#0a0e27]/40" />
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,45,123,0.01)_50%)] bg-[size:100%_4px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-[#ff2d7b]/50 mb-1">ターゲット認証済み</p>
                  <p className="text-xl font-bold uppercase tracking-tight">NODE.ACTIVE</p>
                </div>
                <div className="w-12 h-12 rounded-xl border border-[#ff2d7b]/30 flex items-center justify-center bg-[#ff2d7b]/10 backdrop-blur-sm">
                  <Zap size={20} className="text-[#ff2d7b]" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects — District */}
        <section id="district" className="py-40 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#ff2d7b]">ディストリクト</span>
              <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase">Digital<br />District.</h2>
            </div>
            <p className="text-white/20 text-sm max-w-xs text-right">High-fidelity deployments across the neon grid. Each node, a story.</p>
          </div>

          <div className="space-y-4">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ x: 10 }}
                className="group flex flex-col lg:flex-row items-stretch bg-[#0f1535] border border-white/5 rounded-3xl overflow-hidden hover:border-[#ff2d7b]/20 transition-all"
              >
                <div className="lg:w-[400px] aspect-video lg:aspect-auto overflow-hidden relative flex-shrink-0">
                  <img
                    src={project.image || `https://placehold.co/800x600/0a0e27/ff2d7b?text=${encodeURIComponent(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-[1.5s]"
                  />
                  <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-[#ff2d7b]/40">BLK.0{idx + 1}</div>
                </div>
                <div className="flex-1 p-10 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-[#ff2d7b] transition-colors uppercase">{project.name}</h3>
                    <p className="text-white/25 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.stacks.map((s) => (
                      <span key={s} className="px-4 py-1.5 bg-[#ff2d7b]/5 border border-[#ff2d7b]/10 text-[10px] font-bold uppercase tracking-widest text-[#ff2d7b]/60 rounded-lg">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center px-8 text-white/10 group-hover:text-[#ff2d7b] transition-colors">
                  <ChevronRight size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience — Log */}
        <section id="log" className="py-40 border-t border-white/5">
          <div className="mb-32 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#ff2d7b]">経験ログ</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">Node<br />History.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {experience.map((exp) => (
              <div key={exp.company} className="group p-10 bg-[#0f1535] border border-white/5 rounded-3xl hover:border-[#ff2d7b]/20 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2d7b]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#ff2d7b]">{exp.period}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/15 group-hover:text-white/40 transition-colors">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight group-hover:text-[#ff2d7b] transition-colors">{exp.title}</h4>
                  <p className="text-white/25 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-64 text-center border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff2d7b]/5 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[1em] text-[#ff2d7b]/40 mb-12">接続を確立する</p>
            <h2 className="text-5xl md:text-[10rem] font-bold tracking-tighter uppercase mb-16 leading-[0.8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">Connect.</span>
            </h2>
            <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-4xl font-bold text-[#ff2d7b] border-b-4 border-[#ff2d7b]/20 hover:border-[#ff2d7b] pb-3 transition-all inline-block shadow-[0_4px_30px_rgba(255,45,123,0.1)] hover:shadow-[0_4px_40px_rgba(255,45,123,0.3)]">
              {personalInfo.email}
            </a>
            <div className="flex justify-between items-center mt-40 pt-16 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">
              <div className="flex gap-12">
                <a href={personalInfo.github} className="hover:text-[#ff2d7b] transition-colors">GitHub</a>
                <a href={personalInfo.linkedin} className="hover:text-[#ff2d7b] transition-colors">LinkedIn</a>
              </div>
              <span>© 2026 — ネオン・ラボ v028</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV28;
