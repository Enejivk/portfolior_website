import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { ArrowUpRight, Palette, Command, Share2, Sparkles } from "lucide-react";

/**
 * PortfolioV21: "Abstract Canvas"
 * Aesthetic: High-Art / Gallery / Minimalist Beige & Deep Blue
 * Focus: Large negative space, artistic image placement, and fluid animations.
 */
const PortfolioV21 = () => {
    return (
        <div className="min-h-screen bg-[#f1efe7] text-[#1a1a1a] font-['Space_Grotesk',sans-serif] selection:bg-[#2d3436] selection:text-white overflow-x-hidden">
            {/* Minimal Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-10 flex justify-between items-center mix-blend-difference invert">
                <span className="text-xl font-black uppercase tracking-tighter italic">V.ARCHIVE</span>
                <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em]">
                    <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
                    <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
                    <a href={`mailto:${personalInfo.email}`} className="hover:opacity-50 transition-opacity underline decoration-2 underline-offset-8">Direct</a>
                </div>
            </nav>

            <main className="max-w-[1600px] mx-auto px-8 lg:px-20">
                {/* Hero section with floating profile image */}
                <header className="min-h-screen flex flex-col justify-center relative py-40">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-7 space-y-12">
                             <motion.div 
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-6"
                             >
                                <Sparkles className="text-[#3b4ecc]" size={20} />
                                <span className="text-[10px] uppercase font-black tracking-[0.6em] text-zinc-400 italic">Perspective // Series 01</span>
                             </motion.div>
                             <h1 className="text-[12vw] lg:text-[11.5rem] font-black leading-[0.75] tracking-tighter uppercase mb-20 text-[#1a1a1a]">
                                Eneji <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] to-[#3b4ecc] italic pl-4">Victor</span>
                             </h1>
                             <p className="text-xl md:text-3xl text-zinc-500 font-light leading-relaxed max-w-2xl border-l-[10px] border-[#3b4ecc] pl-10 lowercase">
                                "{personalInfo.description}. Engineering with raw aesthetic precision and logical flow."
                             </p>
                        </div>

                        <div className="lg:col-span-5 relative group">
                             <div className="absolute inset-0 bg-[#3b4ecc] translate-x-12 translate-y-12 rounded-[100px] -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000 opacity-20" />
                             <div className="overflow-hidden rounded-[100px] shadow-2xl relative">
                                 <img src={profile1} alt="Victor Profile 1" className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
                             </div>
                             <div className="absolute -bottom-10 -left-10 p-10 bg-white shadow-2xl rounded-full flex flex-col items-center justify-center border border-zinc-100 group-hover:rotate-[360deg] transition-transform duration-[3s]">
                                 <Palette className="text-[#3b4ecc] mb-2" />
                                 <span className="text-[8px] font-black uppercase tracking-widest">Mastery</span>
                             </div>
                        </div>
                    </div>
                </header>

                {/* Vertical Artistic Projects */}
                <section id="work" className="space-y-64 py-40 border-t border-zinc-200">
                    <div className="flex justify-between items-end mb-20">
                         <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic">Major.Artifacts</h2>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hidden lg:block">Architecture of logical synthesis</p>
                    </div>

                    <div className="space-y-80">
                         {projects.slice(0, 3).map((project, idx) => (
                             <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-12 gap-12 lg:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                             >
                                <div className={`lg:col-span-7 overflow-hidden rounded-[80px] group cursor-pointer shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                     <img src={project.image || `https://placehold.co/1200x800/1a1a1a/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full aspect-video object-cover group-hover:scale-105 transition-all duration-[1.5s] brightness-90 group-hover:brightness-100" />
                                </div>
                                <div className="lg:col-span-5 space-y-10 py-10">
                                     <div className="flex items-center gap-4">
                                         <span className="text-xs font-black uppercase tracking-widest text-[#3b4ecc]">Artifact 0{idx + 1}</span>
                                         <div className="h-px w-20 bg-zinc-200" />
                                     </div>
                                     <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{project.name}</h3>
                                     <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed italic pr-4 lowercase">"{project.description}"</p>
                                     <div className="flex flex-wrap gap-3">
                                         {project.stacks.slice(0, 4).map(s => <span key={s} className="px-5 py-2 bg-white rounded-full text-[10px] uppercase font-black text-zinc-400 hover:text-[#3b4ecc] transition-all border border-zinc-100">{s}</span>)}
                                     </div>
                                     <div className="pt-12">
                                         <a href={project.link} className="inline-flex items-center gap-6 group/btn">
                                             <span className="text-sm font-black uppercase tracking-widest pb-2 border-b-2 border-zinc-900 transition-all group-hover/btn:pr-12 group-hover/btn:border-[#3b4ecc]">View Discovery</span>
                                             <ArrowUpRight size={20} className="text-[#3b4ecc] transition-transform group-hover/btn:translate-x-2" />
                                         </a>
                                     </div>
                                </div>
                             </motion.div>
                         ))}
                    </div>
                </section>

                {/* Experience - Gallery Style */}
                <section className="py-40 bg-zinc-900 rounded-[100px] text-white p-12 lg:p-32 mb-40 overflow-hidden relative">
                     <div className="absolute top-0 right-0 p-20 opacity-10">
                         <Command size={180} />
                     </div>
                     <div className="max-w-4xl space-y-32 relative z-10">
                         <div className="space-y-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#3b4ecc]">Lineage // History</span>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Professional <br /> Sequence</h2>
                         </div>

                         <div className="space-y-20">
                             {experience.map(exp => (
                                 <div key={exp.company} className="pb-16 border-b border-white/5 last:border-0 group">
                                     <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                         <h4 className="text-3xl font-black uppercase tracking-tighter italic group-hover:text-[#3b4ecc] transition-colors">{exp.title}</h4>
                                         <span className="text-[10px] font-bold uppercase py-2 px-6 bg-white/5 rounded-full border border-white/10 tracking-widest">{exp.period}</span>
                                     </div>
                                     <p className="text-[#3b4ecc] font-black text-xs uppercase tracking-[0.4em] mb-8">{exp.company}</p>
                                     <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed lowercase max-w-2xl italic">"{exp.description}"</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                {/* Gallery Post Footer */}
                <footer className="text-center py-40 relative group">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b4ecc]/5 rounded-full blur-[160px] pointer-events-none group-hover:bg-[#3b4ecc]/10 transition-colors duration-1000" />
                     <Share2 className="mx-auto mb-16 text-[#3b4ecc]" size={40} />
                     <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 italic text-zinc-300">Infinite Connection</h2>
                     <a href={`mailto:${personalInfo.email}`} className="text-2xl md:text-5xl font-black text-zinc-900 underline underline-offset-[20px] decoration-[#3b4ecc] decoration-4 hover:decoration-zinc-900 transition-all block break-all mb-40 lowercase">
                        {personalInfo.email}
                     </a>
                     <div className="flex flex-col md:flex-row justify-center gap-12 items-center text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400">
                        <a href={personalInfo.github} className="hover:text-zinc-900 transition-colors">Github Archive</a>
                        <span className="w-2 h-2 rounded-full bg-zinc-200" />
                        <a href={personalInfo.linkedin} className="hover:text-zinc-900 transition-colors">Linkedin Archive</a>
                     </div>
                     <p className="mt-40 text-[9px] font-bold text-zinc-300 tracking-[1em] uppercase">Built with aesthetic purpose // 2024 EN.PROJECTS</p>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV21;
