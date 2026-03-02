import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Feather, BookOpen, PenTool, Bookmark, Quote, ArrowRight } from "lucide-react";

/**
 * PortfolioV29: "Paper Fold"
 * Aesthetic: Origami / Stationery craft — warm cream (#faf7f0), deep charcoal text,
 * a single terracotta accent (#c46843), fold-shadow effects, and tactile textures.
 */
const PortfolioV29 = () => {
  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#1c1917] font-['Newsreader',serif] selection:bg-[#c46843] selection:text-white overflow-x-hidden">
      {/* Subtle paper texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center bg-[#faf7f0]/80 backdrop-blur-xl border-b border-[#1c1917]/5">
        <div className="flex items-center gap-3">
          <Feather className="text-[#c46843]" size={20} />
          <span className="font-sans text-sm font-bold tracking-[0.3em] uppercase text-[#1c1917]/40">Folio / 029</span>
        </div>
        <div className="flex gap-10 text-xs font-sans font-medium uppercase tracking-[0.3em] text-[#1c1917]/30">
          <a href="#works" className="hover:text-[#1c1917] transition-colors">Works</a>
          <a href="#chapters" className="hover:text-[#1c1917] transition-colors">Chapters</a>
          <a href={`mailto:${personalInfo.email}`} className="text-[#c46843] hover:text-[#1c1917] transition-colors">Write</a>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-12 pt-48 relative z-10">
        {/* Hero — The Cover Page */}
        <header className="flex flex-col lg:flex-row gap-24 items-center min-h-[80vh] mb-64">
          <div className="flex-1 space-y-14">
            <div className="flex items-center gap-3">
              <BookOpen size={16} className="text-[#c46843]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[1em] text-[#c46843]/60">Volume I — Opening</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] leading-[0.9] tracking-tight">
              Eneji<br />
              <em className="text-[#c46843]">Victor.</em>
            </h1>
            <p className="text-xl text-[#1c1917]/40 font-sans font-normal leading-[1.8] max-w-lg">
              {personalInfo.description}. Crafting digital manuscripts — each line of code a carefully folded intention, each interface a page worth reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={`mailto:${personalInfo.email}`}
                className="px-10 py-5 bg-[#1c1917] text-[#faf7f0] font-sans font-bold uppercase text-xs tracking-widest rounded-xl flex items-center gap-4 shadow-xl shadow-[#1c1917]/10"
              >
                Begin Correspondence <PenTool size={14} />
              </motion.a>
              <div className="flex items-center gap-6">
                <a href={personalInfo.github} className="text-[#1c1917]/20 hover:text-[#1c1917] font-sans text-[10px] font-bold uppercase tracking-widest transition-colors">GH</a>
                <a href={personalInfo.linkedin} className="text-[#1c1917]/20 hover:text-[#1c1917] font-sans text-[10px] font-bold uppercase tracking-widest transition-colors">LI</a>
              </div>
            </div>
          </div>

          {/* Profile as a "mounted photo" */}
          <div className="relative group flex-shrink-0">
            {/* Paper shadow layers */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#e8e3d9] rounded-[30px] rotate-2" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#ddd8cc] rounded-[30px] rotate-[4deg]" />
            <div className="relative w-[320px] md:w-[400px] aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl shadow-[#1c1917]/10 border border-[#1c1917]/5 bg-white p-3">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                <img src={profile1} alt="Eneji Victor" className="w-full h-full object-cover sepia-[0.08] group-hover:sepia-0 group-hover:scale-105 transition-all duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f0]/60 to-transparent opacity-40" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-xl shadow-sm">
                  <p className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#c46843] mb-0.5">Subject</p>
                  <p className="text-sm font-bold text-[#1c1917]">Victor, E.</p>
                </div>
                <Bookmark size={20} className="text-[#c46843]/30" />
              </div>
            </div>
          </div>
        </header>

        {/* Works — Folded Panels */}
        <section id="works" className="py-40 border-t border-[#1c1917]/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[1em] text-[#c46843]">Collection</span>
              <h2 className="text-5xl md:text-8xl tracking-tight">Selected<br /><em>Works.</em></h2>
            </div>
            <Quote size={40} className="text-[#1c1917]/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, rotate: -0.5 }}
                className="group bg-white border border-[#1c1917]/5 rounded-[30px] p-8 shadow-lg shadow-[#1c1917]/5 hover:shadow-xl hover:shadow-[#c46843]/5 transition-all relative overflow-hidden"
              >
                {/* Fold corner effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#faf7f0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#f0ebe0] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="aspect-[16/10] rounded-[22px] overflow-hidden mb-8 bg-[#f5f0e8] relative">
                  <img
                    src={project.image || `https://placehold.co/1200x800/faf7f0/1c1917?text=${encodeURIComponent(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 group-hover:scale-105 transition-all duration-[1.5s]"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-widest text-[#c46843]/60">
                    <Bookmark size={10} /> Page {idx + 1}
                  </div>
                  <h3 className="text-3xl tracking-tight group-hover:text-[#c46843] transition-colors italic">{project.name}</h3>
                  <p className="text-[#1c1917]/35 font-sans text-sm leading-relaxed line-clamp-2">"{project.description}"</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stacks.slice(0, 3).map((s) => (
                      <span key={s} className="px-4 py-1 bg-[#faf7f0] font-sans text-[9px] font-bold uppercase tracking-widest text-[#1c1917]/30 rounded-full border border-[#1c1917]/5">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience — Chapters */}
        <section id="chapters" className="py-40 border-t border-[#1c1917]/5">
          <div className="grid lg:grid-cols-3 gap-24">
            <div className="space-y-8">
              <PenTool size={32} className="text-[#c46843]" />
              <h2 className="text-4xl tracking-tight italic">The<br />Chapters.</h2>
              <p className="font-sans text-[#1c1917]/30 text-sm leading-relaxed">Each chapter marks a period of growth, craft, and dedication to the written art of code.</p>
            </div>
            <div className="lg:col-span-2 divide-y divide-[#1c1917]/5">
              {experience.map((exp) => (
                <div key={exp.company} className="py-16 group">
                  <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                    <div className="space-y-3">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#c46843]">{exp.period}</span>
                      <h4 className="text-3xl tracking-tight italic group-hover:text-[#c46843] transition-colors">{exp.title}</h4>
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#1c1917]/15 group-hover:text-[#1c1917]/40 transition-colors whitespace-nowrap self-start pt-2">{exp.company}</span>
                  </div>
                  <p className="text-[#1c1917]/30 font-sans text-base leading-relaxed max-w-xl">"{exp.description}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer — Postscript */}
        <footer className="py-64 text-center border-t border-[#1c1917]/5">
          <Feather size={36} className="text-[#c46843]/30 mx-auto mb-12" />
          <h2 className="text-5xl md:text-8xl tracking-tight italic mb-12">Postscript.</h2>
          <p className="text-[#1c1917]/30 font-sans text-lg max-w-md mx-auto mb-12 leading-relaxed">Every great work begins with a single line. Let's write the next chapter together.</p>
          <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-3xl text-[#c46843] italic border-b-2 border-[#c46843]/20 hover:border-[#c46843] pb-2 transition-all inline-flex items-center gap-4">
            {personalInfo.email} <ArrowRight size={24} />
          </a>
          <div className="flex justify-between items-center mt-40 pt-16 border-t border-[#1c1917]/5 font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#1c1917]/10">
            <div className="flex gap-12">
              <a href={personalInfo.github} className="hover:text-[#c46843] transition-colors">GitHub</a>
              <a href={personalInfo.linkedin} className="hover:text-[#c46843] transition-colors">LinkedIn</a>
            </div>
            <span>© 2026 Paper Fold Press</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioV29;
