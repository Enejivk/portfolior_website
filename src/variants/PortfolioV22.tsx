import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { ArrowRight, Zap, Play, Cpu, Code } from "lucide-react";

/**
 * PortfolioV22: "Kinetic Flow"
 * Aesthetic: Kinetic Typography / Dark / High-Energy / Deep Neon Purples
 * Focus: Moving text overlays, diagonal layouts, and strong profile1 imagery.
 */
const PortfolioV22 = () => {
    return (
        <div className="min-h-screen bg-[#000000] text-[#ffffff] font-['Urbanist',sans-serif] selection:bg-[#7d3aff] selection:text-white overflow-x-hidden">
            {/* Kinetic Background Text */}
            <div className="fixed inset-0 pointer-events-none opacity-5 flex flex-col justify-center gap-12 -rotate-12 scale-[1.2]">
                 <div className="flex whitespace-nowrap text-[15vw] font-black italic tracking-tighter animate-marquee">
                    CREATIVE ARCHITECT ENGINEERING EXPERIENCES CREATIVE ARCHITECT 
                 </div>
                 <div className="flex whitespace-nowrap text-[15vw] font-black italic tracking-tighter animate-marquee-reverse text-transparent border-t-2 border-b-2 border-white/40">
                    DIGITAL DYNAMICS SYSTEM ARCHITECTURE LOGICAL FLOW 
                 </div>
                 <div className="flex whitespace-nowrap text-[15vw] font-black italic tracking-tighter animate-marquee">
                    REDEFINING BOUNDARIES TECHNICAL MASTERY 2024 EN.SYS
                 </div>
            </div>

            {/* Kinetic Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-10 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
                <div className="flex items-center gap-4 group cursor-default">
                    <Zap className="text-[#7d3aff] animate-pulse" size={24} />
                    <span className="text-xl font-black uppercase tracking-tighter italic group-hover:text-[#7d3aff] transition-colors">DYNAMICS.V22</span>
                </div>
                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">
                    <a href="#projects" className="hover:text-white transition-colors">Vault</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#7d3aff] border border-[#7d3aff] px-6 py-2 rounded-full hover:bg-[#7d3aff] hover:text-white transition-all">Command</a>
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto px-10 relative z-10 pt-48">
                {/* Horizontal Kinetic Hero */}
                <header className="grid lg:grid-cols-2 gap-20 items-center min-h-[70vh] mb-64">
                    <div className="space-y-16">
                         <div className="flex items-center gap-6">
                            <Play fill="#7d3aff" className="text-[#7d3aff]" size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-600">Initializing System Sequence</span>
                         </div>
                         <h1 className="text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase italic flex flex-col gap-6">
                             <span>Eneji</span>
                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7d3aff] to-[#a277ff] pr-4">Victor.</span>
                         </h1>
                         <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-xl italic pr-10 border-l border-white/10 pl-10">
                            {personalInfo.description}. Designing kinetic systems where performance meets pure art.
                         </p>
                         <div className="flex gap-12 items-center">
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                href={`mailto:${personalInfo.email}`} 
                                className="px-12 py-5 bg-[#7d3aff] text-white font-black uppercase tracking-widest text-xs flex items-center gap-6 rounded-2xl shadow-[0_0_40px_rgba(125,58,255,0.3)] hover:shadow-[0_0_60px_rgba(125,58,255,0.6)] transition-all"
                            >
                                TRANSMIT DATA <ArrowRight size={18} />
                            </motion.a>
                            <div className="flex gap-8 border-l border-white/5 pl-12">
                                <a href={personalInfo.github} className="text-zinc-600 hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest italic">GH</a>
                                <a href={personalInfo.linkedin} className="text-zinc-600 hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest italic">LI</a>
                            </div>
                         </div>
                    </div>

                    <div className="relative group lg:justify-self-end">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7d3aff] to-transparent opacity-20 blur-3xl rounded-full" />
                        <div className="w-[320px] h-[480px] md:w-[480px] md:h-[640px] rounded-[40px] border border-white/10 p-2 bg-gradient-to-br from-white/10 to-transparent relative shadow-2xl">
                             <div className="w-full h-full rounded-[36px] overflow-hidden relative group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 shadow-2xl">
                                 <img src={profile1} alt="Victor Profile 1" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" />
                                 <div className="absolute inset-0 bg-[#7d3aff]/10 mix-blend-color group-hover:bg-transparent transition-all duration-700" />
                                 <div className="absolute bottom-10 left-10 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent w-full">
                                      <p className="text-[10px] font-black uppercase tracking-widest text-[#7d3aff] mb-2">Subject // ARCH-ALPHA</p>
                                      <p className="text-2xl font-black italic tracking-tighter uppercase leading-none">High Fidelity <br /> Performance</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </header>

                {/* Grid Showdown Projects */}
                <section id="projects" className="py-40">
                     <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-16">
                         <div className="space-y-4 group">
                             <h2 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter flex items-center gap-8 group-hover:gap-16 transition-all">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-white">KINETIC</span> SHOWCASE
                             </h2>
                         </div>
                         <div className="flex gap-4 items-center text-zinc-700 font-black text-sm uppercase italic hidden lg:flex">
                             Collection // Alpha Series <Zap size={16} />
                         </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                         {projects.slice(0, 4).map((project, idx) => (
                             <motion.div 
                                key={project.id}
                                whileHover={{ y: -20 }}
                                className="group/project relative space-y-10"
                             >
                                <div className="aspect-[16/10] overflow-hidden rounded-[40px] border border-white/5 relative bg-zinc-900 shadow-2xl">
                                     <img src={project.image || `https://placehold.co/1200x800/000000/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover scale-110 group-hover/project:scale-100 transition-transform duration-[2s] grayscale brightness-50 group-hover/project:grayscale-0 group-hover/project:brightness-100" />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60 group-hover/project:opacity-20 transition-opacity" />
                                     <div className="absolute top-10 left-10 text-white font-black text-6xl italic opacity-5 group-hover/project:opacity-20 transition-opacity uppercase tracking-tighter">0{idx + 1}</div>
                                </div>
                                <div className="px-4 space-y-6">
                                     <div className="flex flex-wrap gap-3">
                                         {project.stacks.slice(0, 3).map(s => <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-white/10 px-4 py-1.5 rounded-full hover:border-[#7d3aff] hover:text-[#7d3aff] transition-colors">{s}</span>)}
                                     </div>
                                     <h3 className="text-4xl font-black italic uppercase tracking-tighter group-hover/project:text-[#7d3aff] transition-colors flex items-center gap-4">
                                         {project.name} <ArrowRight className="opacity-0 group-hover/project:opacity-100 -translate-x-10 group-hover/project:translate-x-0 transition-all" size={32} />
                                     </h3>
                                     <p className="text-zinc-500 text-lg font-medium leading-relaxed italic line-clamp-2 pr-10">"{project.description}"</p>
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </section>

                {/* Industrial Timeline Experience */}
                <section className="py-40 border-t border-white/5">
                     <div className="grid lg:grid-cols-3 gap-24">
                         <div className="lg:col-span-1 space-y-10 group">
                             <Cpu className="text-[#7d3aff]" size={40} />
                             <h2 className="text-4xl font-black uppercase italic tracking-tighter">Processing History</h2>
                             <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.4em] leading-loose pr-20">The systematic record of high-compliance engineering and visual architectural evolution.</p>
                         </div>
                         <div className="lg:col-span-2 space-y-12">
                             {experience.map(exp => (
                                 <div key={exp.company} className="p-12 border border-white/5 bg-[#050505] rounded-[48px] overflow-hidden relative group shadow-2xl hover:border-white/20 transition-all">
                                     <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity group-hover:rotate-12 duration-1000">
                                         <Code size={160} />
                                     </div>
                                     <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
                                         <div className="space-y-4">
                                              <span className="text-[10px] uppercase font-black tracking-widest text-[#7d3aff] px-4 py-1 border border-[#7d3aff]/20 rounded-full">{exp.period}</span>
                                              <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white">{exp.title}</h4>
                                         </div>
                                         <span className="text-xs uppercase font-black text-zinc-600 border-b border-white/5 pb-4 italic h-fit tracking-widest">{exp.company}</span>
                                     </div>
                                     <p className="text-zinc-500 text-lg font-medium italic lowercase leading-relaxed pr-10">"{exp.description}"</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                {/* High Voltage Footer */}
                <footer className="py-64 text-center relative flex flex-col items-center">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#7d3aff]/10 rounded-full blur-[250px] pointer-events-none" />
                     <Zap size={60} className="text-[#7d3aff] mb-20 animate-bounce" />
                     <h2 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase mb-20">Lethal Energy.</h2>
                     <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-5xl font-black text-white italic underline underline-offset-[24px] decoration-[#7d3aff] decoration-[12px] hover:decoration-white transition-all transform hover:skew-x-[-12deg] duration-700 block break-all mb-40 lowercase">
                        {personalInfo.email}
                     </a>
                     <div className="flex flex-col md:flex-row justify-between w-full pt-20 border-t border-white/5 gap-12 items-center">
                         <div className="flex gap-12 text-[10px] font-black uppercase tracking-[1em] text-zinc-800">
                             <a href={personalInfo.github} className="hover:text-white transition-colors underline decoration-[#7d3aff]">GH</a>
                             <a href={personalInfo.linkedin} className="hover:text-white transition-colors underline decoration-[#7d3aff]">LI</a>
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 italic">2024 © EN.DYNAMICS SYSTEMS // V.ENGINE</span>
                     </div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV22;
