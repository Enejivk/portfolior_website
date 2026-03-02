import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { HardHat, Hammer, Mountain, Mail, Github, Linkedin, ArrowUpRight, Box } from "lucide-react";

/**
 * PortfolioV23: "Industrial Monolith"
 * Aesthetic: Industrial / Concrete / Brutalist / Monochromatic with hints of Construction Orange
 * Focus: Heavy borders, raw typography, and "profile1" with high-contrast shadows.
 */
const PortfolioV23 = () => {
    return (
        <div className="min-h-screen bg-[#111111] text-[#e5e5e5] font-['Space Mono',monospace] selection:bg-[#ff6b00] selection:text-black overflow-x-hidden border-[24px] border-[#0a0a0a]">
            {/* Structural Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-12 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto bg-[#0a0a0a] border border-white/5 p-6 flex items-center gap-6 shadow-2xl">
                    <div className="w-10 h-10 bg-[#ff6b00] rounded-sm flex items-center justify-center">
                        <Box size={20} className="text-black" />
                    </div>
                    <span className="text-lg font-black uppercase tracking-[0.3em]">MONOLITH / V.23</span>
                </div>
                <div className="pointer-events-auto flex flex-col gap-4 bg-[#0a0a0a] border border-white/5 p-6 shadow-2xl">
                    <a href="#work" className="text-xs font-bold uppercase tracking-widest hover:text-[#ff6b00] transition-colors flex items-center justify-between gap-10 border-b border-white/5 pb-4">SITE-WORK <ArrowUpRight size={14} /></a>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold uppercase tracking-widest hover:text-[#ff6b00] transition-colors flex items-center justify-between gap-10">CONTACT <ArrowUpRight size={14} /></a>
                </div>
            </nav>

            {/* Industrial Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] mix-blend-overlay" />

            <main className="max-w-[1500px] mx-auto px-10 pt-48 relative z-10">
                {/* Hero: The Construction */}
                <header className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-end mb-80">
                    <div className="lg:col-span-7 space-y-16">
                         <div className="flex gap-4 items-center">
                            <HardHat size={16} className="text-[#ff6b00]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">PHASE // INITIALIZATION</span>
                         </div>
                         <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
                             ARCH<span className="text-[#ff6b00]">ITECT</span> <br /> 
                             OF <br />
                             CODE.
                         </h1>
                         <p className="text-xl md:text-3xl text-zinc-400 font-medium max-w-2xl leading-relaxed border-l-[12px] border-[#ff6b00] pl-10 italic">
                             {personalInfo.description}. Building digital structures that outlast the trends.
                         </p>
                    </div>

                    <div className="lg:col-span-5 relative">
                         <div className="absolute -top-10 -left-10 w-full h-full bg-[#ff6b00] opacity-10 blur-3xl -z-10" />
                         <div className="relative border-[1px] border-white/10 p-4 bg-[#0a0a0a] shadow-2xl">
                             <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                 <img src={profile1} alt="Victor Profile 1" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]" />
                                 <div className="absolute inset-0 border-[20px] border-[#0a0a0a]" />
                                 <div className="absolute top-10 right-10 flex gap-4">
                                      <a href={personalInfo.github} className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#ff6b00] transition-colors"><Github size={18} /></a>
                                      <a href={personalInfo.linkedin} className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#ff6b00] transition-colors"><Linkedin size={18} /></a>
                                 </div>
                             </div>
                             <div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                                 <span>SUBJECT // ENEJI VICTOR</span>
                                 <span>2024 REGISTRY</span>
                             </div>
                         </div>
                    </div>
                </header>

                {/* Heavy Work Sections */}
                <section id="work" className="mb-80">
                     <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12 border-b-[8px] border-[#0a0a0a] pb-24">
                         <div className="space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">CATALOG // 01</span>
                            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white">SELECTED <br /> BUILDS.</h2>
                         </div>
                         <div className="max-w-md text-zinc-500 font-medium italic text-lg leading-relaxed text-right md:text-left">
                             "A showcase of technical durability and visual structural integrity across multiple platforms."
                         </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-[4px] bg-[#0a0a0a] border border-[#0a0a0a]">
                         {projects.slice(0, 4).map((project) => (
                             <motion.div 
                                key={project.id}
                                whileHover={{ scale: 0.98 }}
                                className="group bg-[#111111] p-16 space-y-12 relative overflow-hidden transition-all duration-500 cursor-none"
                             >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 group-hover:text-[#ff6b00] transition-all">
                                    <ArrowUpRight size={48} />
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">PROJ_REF: {project.id}</span>
                                    <h3 className="text-5xl font-black uppercase tracking-tighter group-hover:text-[#ff6b00] transition-colors">{project.name}</h3>
                                </div>
                                <div className="aspect-video bg-[#0a0a0a] border border-white/5 relative group-hover:border-[#ff6b00]/20 transition-colors overflow-hidden grayscale group-hover:grayscale-0">
                                     <img src={project.image || `https://placehold.co/1200x800/000000/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-8">
                                    <p className="text-zinc-500 text-lg leading-relaxed italic">{project.description}</p>
                                    <div className="flex flex-wrap gap-4">
                                        {project.stacks.map(s => <span key={s} className="px-6 py-2 border border-white/5 bg-[#0a0a0a] text-[10px] font-bold uppercase tracking-[0.2em] group-hover:border-[#ff6b00]/40 transition-colors">{s}</span>)}
                                    </div>
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </section>

                {/* Excavated Experience */}
                <section className="mb-80">
                     <div className="grid md:grid-cols-2 gap-24 items-start">
                         <div className="sticky top-48 space-y-12">
                             <Mountain size={64} className="text-[#ff6b00]" />
                             <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">GEOLOGICAL <br /> TIMELINE.</h2>
                             <p className="text-zinc-500 text-xl font-medium max-w-md italic leading-relaxed">Excavating years of experience in product architecture and lead development.</p>
                         </div>
                         <div className="divide-y divide-white/10 border-t border-white/10">
                             {experience.map((exp) => (
                                 <div key={exp.company} className="py-20 group">
                                     <div className="flex justify-between items-start mb-8">
                                         <div className="space-y-4">
                                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff6b00]">{exp.period}</span>
                                              <h4 className="text-4xl font-black uppercase tracking-tighter text-white">{exp.title}</h4>
                                         </div>
                                         <Hammer size={24} className="opacity-10 group-hover:opacity-100 group-hover:text-[#ff6b00] transition-all" />
                                     </div>
                                     <h5 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 border-b border-white/5 pb-8">{exp.company}</h5>
                                     <p className="text-zinc-500 text-lg leading-relaxed italic max-w-xl group-hover:text-zinc-300 transition-colors">"{exp.description}"</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                {/* Final Monolith Footer */}
                <footer className="py-64 bg-[#0a0a0a] -mx-10 px-10 border-t border-[#ff6b00]/20 text-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-[#ff6b00]" />
                     <div className="space-y-16 relative z-10 flex flex-col items-center">
                         <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white italic">LET'S BUILD <br /> SOMETHING <br /> RIGID.</h2>
                         <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-5xl font-black text-[#ff6b00] border-b-[8px] border-[#ff6b00] hover:bg-[#ff6b00] hover:text-black transition-all px-12 py-6 italic flex items-center gap-10">
                            DEPLOY REQ <Mail size={40} />
                         </a>
                         <div className="flex gap-20 text-zinc-600 font-bold uppercase tracking-[0.5em] text-[10px] pt-40 border-t border-white/5 w-full justify-between items-center">
                             <div className="flex gap-12">
                                 <a href={personalInfo.github} className="hover:text-white">GH_ACCESS</a>
                                 <a href={personalInfo.linkedin} className="hover:text-white">LI_ACCESS</a>
                             </div>
                             <span>2024 © MONOLITH_SYSTEMS</span>
                         </div>
                     </div>
                     <div className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 text-[30vw] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter italic">BUILD</div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV23;
