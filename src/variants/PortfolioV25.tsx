import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Maximize2, Minimize2, Terminal, Radio, Shield, Send, Hash, Zap } from "lucide-react";

/**
 * PortfolioV25: "Geometric Depth"
 * Aesthetic: 3D Layering / Deep Shadows / Z-Index Play / Slate & Electric Yellow
 * Focus: Slanted sections, heavy dropshadows, and "profile1" integrated into a complex 3D grid.
 */
const PortfolioV25 = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-['Space Grotesk',sans-serif] selection:bg-[#e2ff3b] selection:text-black overflow-x-hidden relative">
            {/* 3D Grid Overlay */}
            <div className="fixed inset-0 pointer-events-none perspective-[1000px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(60deg)_translateY(-100%)] opacity-20" />
            </div>

            {/* Static Header */}
            <nav className="fixed top-0 left-0 right-0 z-[100] p-10 flex justify-between items-center mix-blend-difference">
                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#e2ff3b] rounded-xl rotate-12 group-hover:rotate-0 transition-all flex items-center justify-center">
                        <Hash className="text-black" size={20} />
                    </div>
                </div>
                <div className="flex gap-16 text-[10px] uppercase font-bold tracking-[0.4em] text-white">
                    <a href="#projects" className="hover:text-[#e2ff3b] transition-colors border-b border-white pb-2 hover:border-[#e2ff3b]">Vault</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#e2ff3b] border border-[#e2ff3b] px-6 py-2 rounded-xl hover:bg-[#e2ff3b] hover:text-black transition-all">Command</a>
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto px-10 relative z-10 pt-48 pb-32">
                {/* Hero: The Z-Index Play */}
                <header className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-96">
                    <div className="lg:col-span-1 border-r border-slate-800 h-full hidden lg:flex flex-col justify-end gap-12 py-10 opacity-40">
                         <div className="-rotate-90 origin-right whitespace-nowrap text-[10px] font-bold uppercase tracking-[1em] translate-x-12 translate-y-[-100px]">SYSTEM ARCHITECTURE // 2024</div>
                    </div>

                    <div className="lg:col-span-6 space-y-16">
                         <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#e2ff3b]/10 border border-[#e2ff3b]/20 rounded-full">
                            <Zap className="text-[#e2ff3b]" size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e2ff3b]">Protocol initialized: Victor.Main</span>
                         </div>
                         <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.8] uppercase flex flex-col gap-4">
                             <span>Eneji</span>
                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ff3b] to-white italic font-black">Victor.</span>
                         </h1>
                         <p className="text-xl md:text-3xl text-slate-400 font-medium max-w-xl leading-relaxed italic border-l-8 border-slate-800 pl-10 pr-10">
                            {personalInfo.description}. Engineering 3D digital experiences with deep structural integrity.
                         </p>
                         <div className="flex flex-col md:flex-row gap-8 pt-8">
                             <a href={`mailto:${personalInfo.email}`} className="px-14 py-6 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-[20px_20px_0_rgba(226,255,59,1)] hover:shadow-[10px_10px_0_rgba(226,255,59,1)] hover:translate-x-2 hover:translate-y-2 transition-all flex items-center gap-6">
                                SEND DATA PACKET <Send size={18} />
                             </a>
                             <div className="flex items-center gap-10 pl-10 lg:border-l border-slate-800">
                                 <a href={personalInfo.github} className="w-14 h-14 rounded-2xl border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors"><Maximize2 size={20} className="text-[#e2ff3b]" /></a>
                                 <a href={personalInfo.linkedin} className="w-14 h-14 rounded-2xl border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-colors"><Minimize2 size={20} className="text-[#e2ff3b]" /></a>
                             </div>
                         </div>
                    </div>

                    <div className="lg:col-span-5 relative group mt-40 lg:mt-0">
                         <div className="absolute inset-0 bg-[#e2ff3b] rotate-[10deg] rounded-[60px] blur-[120px] opacity-10 group-hover:opacity-20 transition-all pointer-events-none" />
                         <div className="relative aspect-[3/4] bg-slate-900 rounded-[60px] border border-slate-800 shadow-[40px_40px_80px_rgba(0,0,0,0.5)] overflow-hidden [transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)] group-hover:rotate-0 transition-all duration-1000 group">
                             <img src={profile1} alt="Victor Profile 1" className="w-full h-full object-cover grayscale brightness-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                             <div className="absolute bottom-12 left-12 space-y-4">
                                 <div className="flex items-center gap-4 text-[#e2ff3b] text-[10px] font-bold uppercase tracking-[0.5em] group-hover:tracking-[1em] transition-all duration-700">
                                      <Terminal size={12} /> STATUS: ACTIVE
                                 </div>
                                 <h4 className="text-4xl font-black uppercase tracking-tighter italic">V.ENGINE.ALPHA</h4>
                             </div>
                             {/* 3D Decorators */}
                             <div className="absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-[#e2ff3b] opacity-40" />
                         </div>
                    </div>
                </header>

                {/* Layered Work Sections */}
                <section id="projects" className="mb-80 relative">
                     <div className="sticky top-48 z-20 mb-32 flex flex-col md:flex-row justify-between items-end bg-[#0f1710]/0 backdrop-blur-sm p-4 rounded-3xl">
                         <h2 className="text-5xl md:text-[12rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#1e293b,white)] leading-[0.8] mb-8 md:mb-0">VAULT.</h2>
                         <div className="flex gap-4 items-center bg-[#e2ff3b] text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest italic shadow-2xl">
                             04 DEPLOYMENTS <Radio className="animate-pulse" size={16} />
                         </div>
                     </div>

                     <div className="space-y-[20vh] relative z-10">
                         {projects.slice(0, 4).map((project, idx) => (
                             <motion.div 
                                key={project.id}
                                className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                             >
                                <div className={`lg:col-span-7 ${idx % 2 === 0 ? '' : 'lg:order-2'} group relative`}>
                                     <div className="aspect-[16/10] bg-slate-800 rounded-[50px] border border-slate-700 overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2">
                                         <img src={project.image || `https://placehold.co/1200x800/000000/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-[2s] grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100" />
                                         <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-100 group-hover:opacity-40 transition-opacity" />
                                     </div>
                                     <div className="absolute -top-10 -left-10 text-white font-black text-9xl italic opacity-5 group-hover:opacity-20 transition-opacity select-none">{idx + 1}</div>
                                </div>
                                <div className={`lg:col-span-5 ${idx % 2 === 0 ? '' : 'lg:order-1'} space-y-10 group`}>
                                     <div className="flex flex-wrap gap-4">
                                         {project.stacks.map(s => <span key={s} className="px-5 py-2 border border-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-xl hover:border-[#e2ff3b] hover:text-[#e2ff3b] transition-colors">{s}</span>)}
                                     </div>
                                     <div className="space-y-4">
                                         <h3 className="text-5xl font-black uppercase tracking-tighter italic group-hover:text-[#e2ff3b] transition-colors">{project.name}</h3>
                                         <p className="text-zinc-500 text-xl leading-relaxed italic pr-20">"{project.description}"</p>
                                     </div>
                                     <a href="#" className="inline-flex items-center gap-6 text-[#e2ff3b] font-black uppercase text-xs tracking-[0.4em] group-hover:gap-12 transition-all">
                                         EXPLORE CORE <Maximize2 size={24} />
                                     </a>
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </section>

                {/* Secure Experience Ledger */}
                <section className="mb-80 border-t border-slate-800 pt-32 relative">
                     <div className="grid lg:grid-cols-4 gap-24 items-start">
                         <div className="lg:col-span-1 space-y-12 sticky top-48">
                             <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center rotate-[15deg]">
                                 <Shield className="text-[#e2ff3b]" size={36} />
                             </div>
                             <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">TRUSTED <br /> SYSTEMS.</h2>
                             <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em] leading-loose pr-10 italic">Certified engineering history across multiple high-security environments.</p>
                         </div>
                         <div className="lg:col-span-3 space-y-[2px] bg-slate-800 border border-slate-800">
                             {experience.map(exp => (
                                 <div key={exp.company} className="bg-[#0f172a] p-16 flex flex-col md:flex-row justify-between rounded-lg group hover:bg-[#1e293b] transition-all">
                                     <div className="space-y-6">
                                         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#e2ff3b]">{exp.period}</span>
                                         <h4 className="text-4xl font-black uppercase tracking-tighter italic">{exp.title}</h4>
                                         <p className="text-slate-500 text-lg leading-relaxed italic max-w-2xl">"{exp.description}"</p>
                                     </div>
                                     <div className="text-right flex flex-col justify-between mt-8 md:mt-0">
                                         <span className="text-xs font-black uppercase tracking-widest text-slate-700 group-hover:text-white transition-colors">{exp.company}</span>
                                         <div className="w-12 h-1 bg-[#e2ff3b] ml-auto mt-10 rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                {/* Isometric Footer */}
                <footer className="py-40 border-t border-slate-800 flex flex-col items-center bg-[#0a0f1d] -mx-10 px-10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e2ff3b]/5 rounded-full blur-[150px]" />
                     <div className="space-y-16 text-center relative z-10 w-full">
                         <h2 className="text-6xl md:text-[15rem] font-bold uppercase tracking-tighter italic text-transparent bg-clip-text bg-[linear-gradient(to_bottom,white,transparent)] leading-[0.7]">CONNECT.</h2>
                         <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-5xl font-black text-white hover:text-[#e2ff3b] transition-all italic border-b-[20px] border-[#e2ff3b]/10 hover:border-[#e2ff3b] pb-4 block break-all">
                            {personalInfo.email}
                         </a>
                         <div className="flex flex-col md:flex-row justify-between w-full pt-40 gap-12 font-bold uppercase tracking-[0.4em] text-[10px] text-slate-700">
                             <div className="flex gap-12">
                                 <a href={personalInfo.github} className="hover:text-white transition-colors">GH_REPOS</a>
                                 <a href={personalInfo.linkedin} className="hover:text-white transition-colors">LI_PROFILE</a>
                             </div>
                             <span>2024 © DEPTH_STUDIOS BY EN.V</span>
                         </div>
                     </div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV25;
