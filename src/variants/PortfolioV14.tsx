import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import { Github, Linkedin, ArrowUpRight, Award } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const PortfolioV14 = () => {
    const slideY: Variants = {
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="min-h-screen bg-[#111111] text-[#eeeeee] font-['Space_Grotesk',sans-serif]">
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Asymmetric Header */}
                <header className="grid lg:grid-cols-2 gap-12 items-end mb-24 border-b border-white/5 pb-20">
                    <motion.div initial="hidden" animate="visible" variants={slideY}>
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-12 h-px bg-rose-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.6em] text-rose-500">Mastery Series</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            {personalInfo.name.split(" ")[0]}<br />
                            <span className="text-zinc-500">{personalInfo.name.split(" ")[1]}</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-lg leading-relaxed lowercase mb-12">
                           "{personalInfo.description}. Engineering with raw aesthetic precision and logical flow."
                        </p>
                        <div className="flex gap-4">
                            <a href={`mailto:${personalInfo.email}`} className="px-10 py-4 bg-[#eeeeee] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-rose-500 transition-colors">Contact</a>
                            <div className="flex gap-4 items-center pl-6">
                                <a href={personalInfo.github} className="text-zinc-500 hover:text-white transition-colors"><Github /></a>
                                <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-white transition-colors"><Linkedin /></a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative group lg:justify-self-end">
                        <div className="w-[320px] h-[480px] md:w-[400px] md:h-[560px] overflow-hidden rounded-[40px] border border-white/10 group-hover:border-rose-500 transition-colors duration-1000 shadow-2xl">
                           <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2s]" />
                        </div>
                        <div className="absolute top-12 -right-12 p-8 bg-[#1a1a1a] border border-white/5 rounded-3xl shadow-2xl backdrop-blur-xl group-hover:-translate-y-4 transition-transform duration-700">
                             <Award className="text-rose-500 mb-4" />
                             <p className="text-xs uppercase font-black text-zinc-500">Engineering</p>
                             <p className="text-xl font-bold uppercase tracking-tighter underline decoration-rose-500">Specialist</p>
                        </div>
                    </div>
                </header>

                {/* Vertical Showcase Column (Projects) */}
                <section id="work" className="space-y-40 mb-40">
                    <h2 className="text-sm font-black uppercase tracking-[0.8em] text-zinc-600 mb-20 text-center">Selected_Builds</h2>
                    {projects.slice(0, 3).map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideY}
                            className={`grid lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className={`overflow-hidden rounded-[60px] bg-zinc-900 border border-white/5 hover:border-rose-500/30 transition-colors duration-1000 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[4/3] group cursor-pointer relative">
                                     <img src={project.image || `https://placehold.co/800x600/18181b/eeeeee?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                                     <div className="absolute inset-0 bg-rose-500/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
                                </div>
                            </div>
                            <div className="space-y-8">
                                <span className="text-xs uppercase font-black text-rose-500 tracking-[0.5em]">Module Case 0{idx + 1}</span>
                                <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tight">{project.name}</h3>
                                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.stacks.slice(0, 5).map(s => <span key={s} className="px-5 py-2 border border-white/10 rounded-full text-[10px] uppercase font-bold text-zinc-500 tracking-widest">{s}</span>)}
                                </div>
                                {project.link && (
                                    <a href={project.link} className="inline-flex items-center gap-4 text-xs font-black uppercase text-rose-500 hover:gap-8 transition-all tracking-[0.5em] pt-8">
                                       Launch Project <ArrowUpRight size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Legacy Archive (Experience) */}
                <section className="bg-white/5 p-12 md:p-20 rounded-[60px] border border-white/5 mb-40">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-black uppercase mb-8 underline decoration-rose-500 decoration-8 underline-offset-8">Legacy</h2>
                            <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wider">A history of professional execution across industries.</p>
                        </div>
                        <div className="lg:col-span-2 space-y-12">
                            {experience.map(exp => (
                                <div key={exp.company} className="pb-12 border-b border-white/5 last:border-0 group">
                                     <div className="flex justify-between items-start mb-6">
                                        <h4 className="text-2xl font-bold uppercase group-hover:text-rose-500 transition-colors tracking-tighter">{exp.title}</h4>
                                        <span className="text-[10px] font-black uppercase text-zinc-600 bg-white/5 px-4 py-2 rounded-full tracking-widest">{exp.period}</span>
                                     </div>
                                     <p className="text-zinc-500 text-sm max-w-xl font-light uppercase tracking-widest">{exp.company} // {exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Direct High Contrast Footer */}
                <footer className="text-center py-40 border-t border-white/5">
                    <div className="flex justify-center gap-12 mb-20 text-xs font-black uppercase tracking-[1em] text-zinc-500">
                        <a href={personalInfo.github} className="hover:text-rose-500 transition-colors">GitHub</a>
                        <a href={personalInfo.linkedin} className="hover:text-rose-500 transition-colors">LinkedIn</a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-rose-500 transition-colors">Mail</a>
                    </div>
                    <motion.a 
                        whileHover={{ scale: 0.98 }}
                        href={`mailto:${personalInfo.email}`} 
                        className="text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter hover:text-rose-500 transition-all block break-all"
                    >
                        {personalInfo.email}
                    </motion.a>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV14;
