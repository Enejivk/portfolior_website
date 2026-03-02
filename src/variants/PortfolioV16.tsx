import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { Terminal, Command, Cpu, Hash, Activity } from "lucide-react";

/**
 * PortfolioV16: "Root System"
 * Aesthetic: Low-fi / Terminal / ASCII / Matrix Green
 * Focus: Raw command-line vibe with monospace font.
 */
const PortfolioV16 = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black p-4 md:p-10">
            <div className="max-w-6xl mx-auto border border-[#00ff41]/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.1)]">
                {/* Simulated Terminal Header */}
                <div className="bg-[#111] border-b border-[#00ff41]/20 p-4 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                        <Terminal size={12} /> session@portfoliov16: ~base
                    </div>
                </div>

                <div className="p-6 md:p-12 space-y-20">
                    {/* Hero Section */}
                    <header className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-block border border-[#00ff41] px-4 py-1 text-xs animate-pulse">
                                [ STATUS: OPERATIONAL ]
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
                                <span className="opacity-50">#</span> {personalInfo.name}
                            </h1>
                            <div className="flex gap-4 items-center">
                                <div className="h-px flex-1 bg-[#00ff41]/20" />
                                <span className="text-[10px] uppercase tracking-[0.3em]">Developer.sys</span>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                                &gt; {personalInfo.description}. Initializing architecture... Done.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={`mailto:${personalInfo.email}`} className="bg-[#00ff41] text-black px-6 py-2 font-bold hover:bg-white transition-colors">
                                    ./contact_me.sh
                                </a>
                                <a href={personalInfo.github} className="border border-[#00ff41] px-6 py-2 hover:bg-[#00ff41]/10 transition-colors">
                                    cd GitHub/
                                </a>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#00ff41]/10 animate-pulse pointer-events-none" />
                            <div className="border-2 border-[#00ff41] p-2 relative">
                                <img 
                                    src={profileImg} 
                                    alt="Admin" 
                                    className="w-full h-[400px] object-cover grayscale brightness-50 sepia-[0.5] hue-rotate-[100deg] contrast-[1.2]" 
                                />
                                <div className="absolute bottom-4 right-4 bg-[#050505] border border-[#00ff41] p-4 text-[10px] uppercase">
                                    <p className="border-b border-[#00ff41]/20 pb-1 mb-2">Metadata</p>
                                    <p>LOC: 0x9AF2</p>
                                    <p>UPTIME: 100%</p>
                                    <p>ROLE: ARCHITECT</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* System Stats (Skill indicators) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[#00ff41]/10">
                        {['LATENCY: 12ms', 'MEM: 16.2GB', 'KERNEL: 6.2.0', 'ENV: PROD'].map(stat => (
                            <div key={stat} className="flex items-center gap-3 text-[10px] opacity-60">
                                <Activity size={14} /> {stat}
                            </div>
                        ))}
                    </div>

                    {/* Directories (Projects) */}
                    <section id="work" className="space-y-12">
                        <h2 className="text-2xl font-bold uppercase flex items-center gap-4 text-white">
                            <Hash size={24} className="text-[#00ff41]" /> build_logs/
                        </h2>
                        <div className="grid gap-6">
                            {projects.slice(0, 3).map((project, idx) => (
                                <motion.div 
                                    key={project.id}
                                    whileHover={{ x: 10 }}
                                    className="border border-[#00ff41]/20 p-6 group hover:border-[#00ff41] transition-all bg-[#080808]"
                                >
                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                        <div className="space-y-4 flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#00ff41]">0{idx + 1}</span>
                                                <h3 className="text-xl font-bold uppercase">{project.name}</h3>
                                            </div>
                                            <p className="opacity-60 text-sm leading-relaxed lowercase">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 text-[10px]">
                                                {project.stacks.map(s => <span key={s} className="bg-[#00ff41]/10 border border-[#00ff41]/20 px-2 py-0.5">[{s}]</span>)}
                                            </div>
                                        </div>
                                        <div className="flex items-end gap-4">
                                            <a href={project.link} className="text-[10px] border border-[#00ff41]/50 px-4 py-2 hover:bg-[#00ff41] hover:text-black transition-all font-bold">
                                                VIEW_EXEC
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Command History (Experience) */}
                    <section className="space-y-12">
                        <h2 className="text-2xl font-bold uppercase flex items-center gap-4 text-white">
                            <Command size={24} className="text-[#00ff41]" /> exec_history/
                        </h2>
                        <div className="space-y-8 border-l border-[#00ff41]/20 pl-8 ml-4">
                            {experience.map(exp => (
                                <div key={exp.company} className="relative">
                                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00ff41]" />
                                    <p className="text-[10px] opacity-40 mb-1">{exp.period}</p>
                                    <h4 className="text-lg font-bold uppercase text-white">{exp.title}</h4>
                                    <p className="text-[#00ff41] text-xs underline mb-4">{exp.company}</p>
                                    <p className="opacity-60 text-sm italic">"{exp.description}"</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Terminal Footer */}
                <footer className="border-t border-[#00ff41]/20 p-12 bg-[#080808] text-center">
                    <div className="flex justify-center gap-12 text-[10px] mb-12">
                        <a href={personalInfo.github} className="hover:text-white transition-colors">GITHUB</a>
                        <a href={personalInfo.linkedin} className="hover:text-white transition-colors">LINKEDIN</a>
                    </div>
                    <Cpu size={32} className="mx-auto mb-8 opacity-20 animate-spin-slow" />
                    <p className="text-[10px] opacity-30 mt-8 tracking-[0.5em]">SYSTEM DISCONNECT // END OF LINE</p>
                </footer>
            </div>
        </div>
    );
};

export default PortfolioV16;
