import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { ArrowDown, Github, Linkedin, MessageCircle, Boxes, Shield, Activity } from "lucide-react";

/**
 * PortfolioV20: "Obsidian Slate"
 * Aesthetic: Dark / Immersive / High-End / Modern / Subtle Animations
 * Focus: Sophisticated dark aesthetics with high-grade shadows and deep content layering.
 */
const PortfolioV20 = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-[#fafafa] font-['Geist_Sans',sans-serif] selection:bg-zinc-800 selection:text-white selection:bg-opacity-50">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-[100] px-10 py-8 flex justify-between items-center bg-[#0a0a0b]/10 backdrop-blur-3xl border-b border-white/5 shadow-2xl">
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-600 flex items-center justify-center p-2 shadow-2xl">
                         <div className="w-full h-full bg-[#0a0a0b] rounded-xl flex items-center justify-center text-xs font-black italic">V</div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 hidden lg:block">System // ARCH_O_V20</span>
                </div>
                <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <a href="#projects" className="hover:text-white transition-colors">Archive</a>
                    <a href="#about" className="hover:text-white transition-colors">Core</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-white bg-white/5 border border-white/5 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Direct_Line</a>
                </div>
            </nav>

            {/* Immersive Hero */}
            <header className="min-h-screen flex flex-col justify-center px-10 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none" />
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center relative z-10 py-32">
                    <div className="space-y-12">
                         <div className="flex items-center gap-4">
                             <div className="h-px w-20 bg-white/10" />
                             <span className="text-[10px] uppercase font-black tracking-[1em] text-zinc-600 animate-pulse">Establishing Connection</span>
                         </div>
                         <h1 className="text-7xl md:text-[9.5rem] font-bold leading-[0.75] tracking-tighter mb-12 uppercase flex flex-col items-start gap-4">
                             <span className="text-zinc-500 italic font-black">Digital</span>
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-600">Architect</span>
                         </h1>
                         <p className="max-w-xl text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic pr-12">
                            "{personalInfo.description}. Engineering at the intersection of logical modularity and visual silence."
                         </p>
                         <div className="pt-8 flex flex-wrap gap-8 items-center">
                            <a href="#projects" className="group flex items-center gap-6 text-sm font-black uppercase tracking-widest border border-white/10 px-8 py-4 rounded-3xl hover:bg-white hover:text-[#0a0a0b] transition-all">
                                Explore Archive <ArrowDown size={18} className="group-hover:translate-y-2 transition-transform" />
                            </a>
                            <div className="flex gap-8 pl-8 border-l border-white/5">
                                <a href={personalInfo.github} className="text-zinc-600 hover:text-white transition-colors"><Github size={20} /></a>
                                <a href={personalInfo.linkedin} className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            </div>
                         </div>
                    </div>

                    <div className="relative group lg:justify-self-end">
                        <div className="absolute inset-x-0 -bottom-12 top-12 bg-zinc-400/10 rounded-[60px] blur-3xl pointer-events-none group-hover:bg-zinc-100/10 transition-colors duration-1000" />
                        <div className="w-[320px] h-[480px] md:w-[480px] md:h-[640px] rounded-[60px] overflow-hidden border border-white/10 relative p-4 bg-zinc-900/40 backdrop-blur-3xl shadow-2xl">
                             <img src={profileImg} alt="V20 Hero" className="w-full h-full object-cover rounded-[48px] brightness-[0.8] grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:rotate-2 group-hover:scale-105" />
                        </div>
                        <div className="absolute bottom-16 -right-12 p-8 bg-[#0a0a0b] rounded-[40px] border border-white/5 shadow-2xl hidden md:block group-hover:-translate-x-8 transition-transform duration-700">
                             <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl p-2 animate-spin-slow">
                                     <Boxes className="text-black" />
                                 </div>
                                 <div className="space-y-1">
                                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Core Method</p>
                                    <p className="text-xl font-black uppercase italic tracking-tighter">Unified Sytems</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Subtle Modules (Stats) */}
            <div className="py-20 bg-zinc-900/10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
                     {[
                        { label: 'Integrity', icon: Shield, value: '99%' },
                        { label: 'Latency', icon: Activity, value: '0.2ms' },
                        { label: 'Architecture', icon: Boxes, value: 'Global' },
                        { label: 'Protocol', icon: Boxes, value: 'HTTPS/3' }
                     ].map(mod => (
                        <div key={mod.label} className="flex items-center gap-6 group cursor-default">
                             <mod.icon className="text-zinc-700 group-hover:text-white transition-colors" size={24} />
                             <div className="space-y-1">
                                 <p className="text-zinc-600 uppercase font-black text-[9px] tracking-widest">{mod.label}</p>
                                 <p className="text-lg font-bold uppercase tracking-tighter text-zinc-400 group-hover:text-white">{mod.value}</p>
                             </div>
                        </div>
                     ))}
                </div>
            </div>

            {/* Detailed Projects Archive */}
            <section id="projects" className="py-40">
                <div className="max-w-7xl mx-auto px-10">
                     <div className="flex justify-between items-end mb-32 border-b border-white/5 pb-16">
                         <div className="space-y-4">
                             <span className="text-xs uppercase font-black text-zinc-700 tracking-[1em]">Collection 04</span>
                             <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">Selected Outcomes</h2>
                         </div>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 hidden lg:block italic">Displaying 01 — 03 // 2024 Index</p>
                     </div>

                     <div className="space-y-40">
                         {projects.slice(0, 3).map((project, idx) => (
                             <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="grid lg:grid-cols-2 gap-24 items-center group/project"
                             >
                                <div className={`space-y-12 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                     <div className="flex items-center gap-8">
                                         <span className="text-6xl md:text-9xl font-black text-white/5 opacity-50 group-hover/project:text-zinc-100 transition-colors duration-1000 pr-4">0{idx + 1}</span>
                                         <div className="h-px w-24 bg-white/10 hidden md:block" />
                                         <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">{project.name}</h3>
                                     </div>
                                     <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl pr-10">{project.description}</p>
                                     <div className="flex flex-wrap gap-4 pt-4">
                                         {project.stacks.map(s => <span key={s} className="px-6 py-2 border border-white/5 rounded-full text-[10px] uppercase font-black text-zinc-600 hover:text-white hover:border-white transition-all cursor-default">{s}</span>)}
                                     </div>
                                     <div className="pt-8">
                                         <a href={project.link} className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest underline underline-offset-[16px] decoration-zinc-800 decoration-4 hover:decoration-white transition-all">
                                            View Outcome Case Study +
                                         </a>
                                     </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-[80px] p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/5 shadow-2xl transition-all duration-1000 group-hover/project:p-0">
                                     <div className="overflow-hidden rounded-[76px] lg:h-[600px]">
                                        <img src={project.image || `https://placehold.co/800x600/0a0a0b/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover grayscale opacity-60 group-hover/project:opacity-100 group-hover/project:scale-105 group-hover/project:grayscale-0 transition-all duration-[2s]" />
                                     </div>
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </div>
            </section>

            {/* Immersive Experience Section */}
            <section className="bg-zinc-900/5 py-40 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-10">
                     <div className="grid lg:grid-cols-4 gap-24">
                         <div className="lg:col-span-1 space-y-10 group">
                             <div className="w-16 h-16 rounded-full border border-zinc-900 flex items-center justify-center p-4 bg-zinc-950 shadow-2xl group-hover:border-zinc-500 transition-colors">
                                <Activity className="text-zinc-500 group-hover:text-white" />
                             </div>
                             <h2 className="text-4xl font-black uppercase tracking-tighter">Journey.log</h2>
                             <p className="text-[10px] text-zinc-700 font-bold uppercase leading-loose tracking-[0.3em]">The chronogical sequence of technical execution across high-performance environments.</p>
                         </div>
                         <div className="lg:col-span-3 grid md:grid-cols-2 gap-12 pt-20">
                             {experience.map(exp => (
                                 <div key={exp.company} className="p-12 border border-white/5 rounded-[48px] bg-[#0c0c0d] hover:bg-[#111112] transition-all hover:translate-y-[-10px] group shadow-2xl overflow-hidden relative">
                                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                         <Boxes size={80} />
                                     </div>
                                     <div className="flex justify-between items-start mb-12 relative z-10">
                                         <span className="text-[9px] font-black uppercase px-6 py-2 bg-zinc-900 text-zinc-500 rounded-full border border-white/5 tracking-widest">{exp.period}</span>
                                     </div>
                                     <h4 className="text-2xl font-black uppercase mb-6 tracking-tighter italic text-zinc-200">{exp.title}</h4>
                                     <p className="text-zinc-600 uppercase font-black text-[10px] tracking-widest mb-10 pb-6 border-b border-white/5">{exp.company}</p>
                                     <p className="text-zinc-500 font-light leading-relaxed text-lg line-clamp-3 italic opacity-60">"{exp.description}"</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            </section>

            {/* Direct Contact Footer */}
            <footer className="py-64 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/[0.01] rounded-full blur-[250px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-10 relative z-10 flex flex-col items-center">
                    <MessageCircle size={40} className="mb-12 text-zinc-800" />
                    <h2 className="text-5xl md:text-[9rem] font-bold tracking-tighter mb-20 uppercase italic pr-4">Collaborate?</h2>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        href={`mailto:${personalInfo.email}`} 
                        className="text-2xl md:text-5xl font-bold underline underline-offset-[24px] decoration-zinc-900 decoration-[12px] hover:decoration-white transition-all transform hover:skew-x-[-10deg] duration-700 block break-all mb-40"
                    >
                        {personalInfo.email}
                    </motion.a>
                    <div className="flex flex-col md:flex-row justify-between w-full pt-16 border-t border-white/5 gap-12 items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-800">EN.ARCHITECT ©{new Date().getFullYear()}</span>
                        <div className="flex gap-12 text-[10px] font-black uppercase text-zinc-600 tracking-widest">
                            <a href={personalInfo.github} className="hover:text-white">GH</a>
                            <a href={personalInfo.linkedin} className="hover:text-white">LI</a>
                            <a href={`mailto:${personalInfo.email}`} className="hover:text-white">ML</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioV20;
