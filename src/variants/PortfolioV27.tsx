import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Map, Mountain, Compass, Wind, TreePine, ArrowUpRight } from "lucide-react";

/**
 * PortfolioV27: "Topographic"
 * Aesthetic: Cartography-inspired, contour lines, earth tones (sage, clay, sand),
 * exploration metaphors — maps, elevation, terrain.
 */
const PortfolioV27 = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2d3b2d] font-['IBM_Plex_Sans',sans-serif] selection:bg-[#7b9971] selection:text-white overflow-x-hidden">
      {/* Topographic contour background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="#2d3b2d" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="70" ry="45" fill="none" stroke="#2d3b2d" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="50" ry="30" fill="none" stroke="#2d3b2d" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="30" ry="18" fill="none" stroke="#2d3b2d" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="12" ry="7" fill="none" stroke="#2d3b2d" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center bg-[#f5f0e8]/80 backdrop-blur-xl border-b border-[#2d3b2d]/5">
        <div className="flex items-center gap-3">
          <Compass className="text-[#7b9971]" size={22} />
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#2d3b2d]/60">TERRAIN / 027</span>
        </div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-[#2d3b2d]/40">
          <a href="#survey" className="hover:text-[#2d3b2d] transition-colors">Survey</a>
          <a href="#routes" className="hover:text-[#2d3b2d] transition-colors">Routes</a>
          <a href={`mailto:${personalInfo.email}`} className="text-white bg-[#2d3b2d] px-6 py-2 rounded-full hover:bg-[#7b9971] transition-colors">Signal</a>
        </div>
      </nav>

      <main className="max-w-[1300px] mx-auto px-12 pt-48 relative z-10">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-24 items-center min-h-[75vh] mb-64">
          <div className="space-y-14">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#7b9971]/10 border border-[#7b9971]/20 rounded-full">
              <Map size={14} className="text-[#7b9971]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#7b9971]">Coordinates: 6.45° N, 3.39° E</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.85] tracking-tight">
              Eneji<br />
              <span className="text-[#7b9971] italic">Victor.</span>
            </h1>
            <p className="text-xl text-[#2d3b2d]/50 font-medium leading-relaxed max-w-lg">
              {personalInfo.description}. Mapping uncharted territories in digital product design and full-stack engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={`mailto:${personalInfo.email}`}
                className="px-10 py-5 bg-[#2d3b2d] text-[#f5f0e8] font-bold uppercase text-xs tracking-widest rounded-2xl flex items-center gap-4 shadow-xl shadow-[#2d3b2d]/10"
              >
                BEGIN EXPEDITION <Wind size={16} />
              </motion.a>
              <div className="flex gap-8 items-center">
                <a href={personalInfo.github} className="text-[#2d3b2d]/30 hover:text-[#2d3b2d] font-bold text-[10px] uppercase tracking-widest transition-colors">GH</a>
                <a href={personalInfo.linkedin} className="text-[#2d3b2d]/30 hover:text-[#2d3b2d] font-bold text-[10px] uppercase tracking-widest transition-colors">LI</a>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Contour frame around image */}
            <div className="absolute -inset-6 rounded-[60px] border-2 border-dashed border-[#7b9971]/15 group-hover:border-[#7b9971]/30 transition-colors" />
            <div className="absolute -inset-12 rounded-[70px] border border-dashed border-[#7b9971]/8" />
            <div className="aspect-[4/5] rounded-[50px] overflow-hidden shadow-2xl shadow-[#2d3b2d]/10 relative">
              <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 group-hover:scale-105 transition-all duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e8] via-transparent to-transparent opacity-30" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div className="bg-[#f5f0e8]/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#7b9971] mb-1">Elevation</p>
                  <p className="text-lg font-bold text-[#2d3b2d]">Peak Performance</p>
                </div>
                <Mountain size={28} className="text-[#7b9971]/40" />
              </div>
            </div>
          </div>
        </header>

        {/* Survey — Projects */}
        <section id="survey" className="py-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-[#2d3b2d]/5 pb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#7b9971]">Survey Report</span>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Mapped<br />Terrain.</h2>
            </div>
            <TreePine size={48} className="text-[#7b9971]/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group bg-white/50 backdrop-blur-sm border border-[#2d3b2d]/5 p-10 rounded-[40px] shadow-lg shadow-[#2d3b2d]/5 hover:shadow-xl hover:border-[#7b9971]/20 transition-all"
              >
                <div className="aspect-video rounded-[30px] overflow-hidden mb-8 relative bg-[#eae5da]">
                  <img
                    src={project.image || `https://placehold.co/1200x800/eae5da/2d3b2d?text=${encodeURIComponent(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover sepia-[0.2] group-hover:sepia-0 group-hover:scale-105 transition-all duration-[1.5s]"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight size={18} className="text-[#2d3b2d]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#7b9971]">
                    <Map size={12} /> Sector {idx + 1}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-[#7b9971] transition-colors">{project.name}</h3>
                  <p className="text-[#2d3b2d]/40 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stacks.slice(0, 3).map((s) => (
                      <span key={s} className="px-4 py-1.5 bg-[#7b9971]/8 text-[10px] font-bold uppercase tracking-widest text-[#7b9971] rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Routes — Experience */}
        <section id="routes" className="py-40 border-t border-[#2d3b2d]/5">
          <div className="mb-32 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[1em] text-[#7b9971]">Route Log</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight">Trail<br />History.</h2>
          </div>

          <div className="relative">
            {/* Vertical trail line */}
            <div className="absolute top-0 bottom-0 left-6 w-px bg-[#7b9971]/15" />
            <div className="space-y-0">
              {experience.map((exp) => (
                <div key={exp.company} className="relative pl-20 py-16 group border-b border-[#2d3b2d]/5 last:border-0">
                  {/* Trail marker */}
                  <div className="absolute left-3 top-20 w-7 h-7 rounded-full border-2 border-[#7b9971]/30 bg-[#f5f0e8] group-hover:bg-[#7b9971] group-hover:border-[#7b9971] transition-all flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#7b9971] group-hover:bg-white transition-colors" />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#7b9971]">{exp.period}</span>
                      <h4 className="text-3xl font-bold tracking-tight group-hover:text-[#7b9971] transition-colors">{exp.title}</h4>
                      <p className="text-[#2d3b2d]/40 text-lg leading-relaxed max-w-xl">{exp.description}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2d3b2d]/20 group-hover:text-[#2d3b2d]/50 transition-colors whitespace-nowrap">{exp.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer — Base Camp */}
        <footer className="py-64 text-center border-t border-[#2d3b2d]/5">
          <Compass size={48} className="text-[#7b9971]/30 mx-auto mb-16 animate-spin" style={{ animationDuration: "20s" }} />
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-12">Base Camp.</h2>
          <p className="text-[#2d3b2d]/40 text-lg mb-12 max-w-md mx-auto">Ready to explore new terrain together? Drop coordinates below.</p>
          <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-4xl font-bold text-[#7b9971] border-b-4 border-[#7b9971]/20 hover:border-[#7b9971] pb-3 transition-all inline-block">
            {personalInfo.email}
          </a>
          <div className="flex justify-between items-center mt-40 pt-16 border-t border-[#2d3b2d]/5 text-[10px] font-bold uppercase tracking-[0.5em] text-[#2d3b2d]/15">
            <div className="flex gap-12">
              <a href={personalInfo.github} className="hover:text-[#7b9971] transition-colors">GitHub</a>
              <a href={personalInfo.linkedin} className="hover:text-[#7b9971] transition-colors">LinkedIn</a>
            </div>
            <span>© 2026 Topographic Labs</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV27;
