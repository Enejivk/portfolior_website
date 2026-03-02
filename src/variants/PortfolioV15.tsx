import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { MoveRight, Code, Layers, MessageSquare, Terminal, Eye } from "lucide-react";

const PortfolioV15 = () => {
    const slideIn: Variants = {
        hidden: { x: -40, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
    };

    return (
        <div className="min-h-screen bg-[#080808] text-white font-['Urbanist',sans-serif] selection:bg-blue-600/30 selection:text-blue-400 overflow-x-hidden">
            {/* Minimal Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-[#080808]/40">
                <span className="text-xl font-bold tracking-tighter uppercase">{personalInfo.name.split(" ").map(n => n[0]).join(".")}</span>
                <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                    <a href="#projects" className="hover:text-white transition-colors">Experience</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    <a href={personalInfo.github} className="hover:text-white transition-colors text-blue-500">Source</a>
                </div>
            </nav>

            {/* Split Screen Hero */}
            <header className="grid lg:grid-cols-12 min-h-screen pt-32 lg:pt-0">
                <div className="lg:col-span-7 flex flex-col justify-center px-8 lg:px-24 py-12 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
                    <motion.div initial="hidden" animate="visible" variants={slideIn} className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-10 group cursor-default">
                             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                             <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors italic">High Resolution Portfolio</span>
                        </div>
                        <h1 className="text-6xl md:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 flex flex-col">
                            <span>Aesthetic</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 pr-4">Craftsman</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-500 font-medium leading-relaxed mb-16 max-w-xl">
                            {personalInfo.description}. Engineering with high-fidelity vision and structured architecture.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all transform hover:translate-x-4">
                                START COLLAB <MoveRight size={16} />
                            </a>
                            <div className="h-px w-20 bg-white/10 hidden md:block" />
                            <div className="flex gap-6 items-center">
                                <a href={personalInfo.github} className="text-xs uppercase font-bold text-zinc-600 hover:text-white tracking-widest transition-colors">GitHub</a>
                                <a href={personalInfo.linkedin} className="text-xs uppercase font-bold text-zinc-600 hover:text-white tracking-widest transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
                    <div className="absolute inset-0 bg-blue-600/10 pointer-events-none group-hover:bg-blue-600/0 transition-colors duration-1000" />
                    <img 
                        src={profileImg} 
                        alt={personalInfo.name} 
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 contrast-[1.1] transition-all duration-1000 grayscale group-hover:grayscale-0 shadow-[inset_0px_0px_100px_rgba(0,0,0,0.8)]"
                    />
                    <div className="absolute bottom-20 left-0 -translate-x-1/2 p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] hidden lg:block group-hover:translate-x-4 transition-transform duration-1000">
                         <div className="flex items-center gap-8">
                             <div className="space-y-2">
                                 <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Expertise</p>
                                 <p className="text-2xl font-black uppercase tracking-tighter italic">Technical lead /<br />Fullstack Engineer</p>
                             </div>
                             <div className="w-16 h-16 rounded-full border border-blue-500/50 flex items-center justify-center p-3 animate-spin-slow">
                                  <Layers className="text-blue-500" />
                             </div>
                         </div>
                    </div>
                </div>
            </header>

            {/* Vertical Modular Projects */}
            <section id="projects" className="py-40 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto px-8 lg:px-24">
                     <div className="flex justify-between items-end mb-32 border-b border-white/10 pb-16">
                         <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase text-blue-500 tracking-[0.5em]">Inventory</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Case.Studies</h2>
                         </div>
                         <p className="text-zinc-500 uppercase font-bold text-[10px] tracking-widest hidden md:block">Scroll for details // 001 - 003</p>
                     </div>

                     <div className="space-y-64">
                         {projects.slice(0, 3).map((project, idx) => (
                             <motion.div 
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                                className="grid lg:grid-cols-2 gap-24 items-center group/project"
                             >
                                <div className="space-y-12">
                                     <div className="flex items-center gap-6">
                                         <span className="text-7xl font-black text-white/5 group-hover/project:text-blue-500 transition-colors">0{idx + 1}</span>
                                         <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{project.name}</h3>
                                     </div>
                                     <p className="text-zinc-400 text-xl font-medium leading-relaxed">{project.description}</p>
                                     <div className="flex flex-wrap gap-3">
                                         {project.stacks.map(s => <span key={s} className="px-5 py-2 border border-white/5 bg-white/5 rounded-full text-[10px] uppercase font-bold text-zinc-500 hover:text-white transition-colors">{s}</span>)}
                                     </div>
                                     <div className="pt-8">
                                         <a href={project.link} className="inline-flex items-center gap-4 px-8 py-4 border border-zinc-800 rounded-2xl group-hover/project:border-blue-500 group-hover/project:bg-blue-600/5 transition-all text-xs font-bold uppercase tracking-widest">
                                            View Outcome <Eye size={16} />
                                         </a>
                                     </div>
                                </div>
                                <div className="relative overflow-hidden rounded-[40px] bg-zinc-800/20 aspect-[4/3] border border-white/5 group-hover/project:border-blue-500/30 transition-all duration-1000">
                                     <img src={project.image || `https://placehold.co/800x600/080808/eeeeee?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover scale-110 group-hover/project:scale-100 transition-transform duration-[2s]" />
                                     <div className="absolute inset-0 bg-blue-900/10 mix-blend-color hover:bg-transparent transition-all duration-700" />
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </div>
            </section>

            {/* Micro Experience Section */}
            <section className="py-40 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-8 lg:px-24">
                     <div className="grid lg:grid-cols-4 gap-20">
                         <div className="lg:col-span-1">
                             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-8 items-center flex gap-4">
                                <Terminal size={14} /> Journey
                             </h2>
                             <p className="text-zinc-500 text-xs font-bold uppercase leading-loose tracking-widest">The evolution of a technical architect across specialized environments.</p>
                         </div>
                         <div className="lg:col-span-3 grid md:grid-cols-2 gap-12">
                             {experience.map(exp => (
                                 <div key={exp.company} className="p-10 border border-white/5 rounded-[40px] hover:border-blue-500/50 hover:bg-white/5 transition-all group">
                                     <div className="flex justify-between items-start mb-10">
                                         <Code className="text-blue-500 group-hover:scale-125 transition-transform" />
                                         <span className="text-[10px] font-black uppercase px-4 py-1.5 bg-zinc-900 rounded-full tracking-tighter text-zinc-400 group-hover:text-blue-400">{exp.period}</span>
                                     </div>
                                     <h4 className="text-xl font-black uppercase mb-4 tracking-tighter group-hover:translate-x-2 transition-transform">{exp.title}</h4>
                                     <p className="text-zinc-600 text-xs uppercase font-bold tracking-widest mb-6">{exp.company}</p>
                                     <p className="text-zinc-500 text-base font-medium leading-relaxed line-clamp-3">{exp.description}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            </section>

            {/* Direct Contact Footer */}
            <footer id="contact" className="py-40 relative overflow-hidden text-center bg-zinc-900/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-8 relative z-10">
                    <MessageSquare className="mx-auto mb-10 text-blue-500" size={40} />
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">Ready to Build?</h2>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        href={`mailto:${personalInfo.email}`} 
                        className="text-2xl md:text-4xl font-bold italic tracking-tighter underline underline-offset-[16px] decoration-blue-500 hover:text-blue-500 transition-all decoration-[8px]"
                    >
                        {personalInfo.email}
                    </motion.a>
                    <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">©{new Date().getFullYear()} EN.DESIGN — ALL RIGHTS RESERVED</span>
                         <div className="flex gap-8 items-center text-[10px] font-black uppercase tracking-widest text-blue-500">
                             <a href={personalInfo.github} className="hover:line-through">GH</a>
                             <a href={personalInfo.linkedin} className="hover:line-through">LI</a>
                             <a href="#" className="hover:line-through">TW</a>
                         </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioV15;
