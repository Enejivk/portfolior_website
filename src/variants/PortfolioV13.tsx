import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, skills, projects } from "../data/portfolio";
import { Github, Linkedin, ArrowUpRight, Code, ShieldCheck, Zap } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const PortfolioV13 = () => {
    const slideIn: Variants = {
        hidden: { x: -40, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-[#0d0d1e] text-[#e1e1fb] font-['Space_Mono',monospace]">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 w-full h-20 border-b border-[#30305a] bg-[#0d0d1e]/80 backdrop-blur-md z-50 px-8 flex items-center justify-between">
                <div className="text-xl font-bold tracking-[0.3em] flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    USER_PORTAL: EV/2026
                </div>
                <div className="hidden lg:flex gap-10 text-xs tracking-[0.2em] text-[#8080c0]">
                    <a href="#projects" className="hover:text-white transition-colors">/SYSTEM_LOG</a>
                    <a href="#stack" className="hover:text-white transition-colors">/INFRASTRUCTURE</a>
                    <a href="#contact" className="hover:text-white transition-colors">/COMM_LINK</a>
                </div>
            </nav>

            <main className="pt-20 px-8 lg:px-16">
                {/* Visual Interface Hero */}
                <section className="grid lg:grid-cols-2 gap-px bg-[#30305a] mt-12 border border-[#30305a]">
                    <div className="bg-[#0d0d1e] p-12 flex flex-col justify-center">
                        <motion.div initial="hidden" animate="visible" variants={slideIn}>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                                <span className="text-[#8080c0]">INITIALIZING:</span><br />
                                {personalInfo.name}
                            </h1>
                            <p className="max-w-xl text-lg text-[#8080c0] leading-relaxed mb-10">
                                {personalInfo.description}. Specialized in high-uptime systems and modular front-end architecture.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="p-4 border border-[#30305a] rounded-lg bg-[#1a1a3a]">
                                    <ShieldCheck className="text-indigo-400 mb-3" />
                                    <p className="text-[10px] uppercase font-bold text-[#8080c0]">Security Score</p>
                                    <p className="text-lg font-bold uppercase">A+ Robust</p>
                                </div>
                                <div className="p-4 border border-[#30305a] rounded-lg bg-[#1a1a3a]">
                                    <Code className="text-indigo-400 mb-3" />
                                    <p className="text-[10px] uppercase font-bold text-[#8080c0]">Logic Syntax</p>
                                    <p className="text-lg font-bold uppercase">Optimized</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href={personalInfo.github} className="w-12 h-12 border border-[#30305a] flex items-center justify-center hover:bg-[#30305a] transition-all"><Github size={20} /></a>
                                <a href={personalInfo.linkedin} className="w-12 h-12 border border-[#30305a] flex items-center justify-center hover:bg-[#30305a] transition-all"><Linkedin size={20} /></a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="bg-[#0a0a1a] relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#30305a 1px, transparent 1px), linear-gradient(90deg, #30305a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 p-6 border-2 border-indigo-500/30 rounded-full"
                        >
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#30305a]">
                                <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale brightness-95 contrast-110 hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-full">
                                SYSTEM_OPTIMIZED: v2.0
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* System Activity (Projects) */}
                <section id="projects" className="py-24">
                    <div className="flex items-center gap-6 mb-16">
                        <span className="text-xs font-bold text-[#8080c0] px-4 py-2 border border-[#30305a]">0x02 SYSTEM_LOGS</span>
                        <div className="h-px bg-[#30305a] flex-1" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.slice(0, 6).map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                                className="group bg-[#1a1a3a] border border-[#30305a] p-8 hover:border-indigo-500 transition-colors"
                            >
                                <div className="text-[10px] text-[#8080c0] mb-6 flex justify-between items-center">
                                    <span>TRACK_ID: 00{idx + 1}</span>
                                    <Zap size={10} className="text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-indigo-300 transition-all">{project.name}</h3>
                                <p className="text-sm text-[#8080c0] leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stacks.slice(0, 3).map(s => <span key={s} className="px-2 py-1 text-[9px] bg-[#0d0d1e] border border-[#30305a] text-[#8080c0]">{s}</span>)}
                                </div>
                                {project.link && (
                                    <a href={project.link} className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase hover:gap-4 transition-all pb-1 border-b border-transparent hover:border-indigo-400">
                                        EXECUTE_CODE <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Infrastructure (Skills) */}
                <section id="stack" className="py-24 border-t border-[#30305a]">
                    <h2 className="text-2xl font-bold uppercase mb-16 tracking-widest">Base_Infrastructure</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, list]) => (
                            <div key={category} className="space-y-4">
                                <h4 className="text-xs font-black uppercase text-indigo-400 opacity-60 px-4 py-1 border-l-2 border-indigo-400">{category}</h4>
                                <div className="space-y-2">
                                    {list.map(s => (
                                        <div key={s.name} className="p-4 bg-[#1a1a3a] border border-white/5 text-sm uppercase font-bold tracking-tight">
                                            {s.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comm Link Footer */}
                <footer id="contact" className="py-40 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <span className="text-xs uppercase tracking-[0.5em] text-[#8080c0] block mb-8">Establish Connection</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:text-indigo-400 transition-all">
                        {personalInfo.email}
                    </a>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV13;
