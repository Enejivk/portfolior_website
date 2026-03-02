import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { Eye, Coffee, Github, Linkedin, MessageSquare, Square, Triangle, Circle } from "lucide-react";

/**
 * PortfolioV19: "Shadow Tactile"
 * Aesthetic: Neumorphism / Soft UI / Claymorphism
 * Focus: Depth through subtle shadows, soft pastel palette (Slate/Indigo), and tactile cards.
 */
const PortfolioV19 = () => {
    return (
        <div className="min-h-screen bg-[#e6ebf1] text-[#2d3748] font-['Quicksand',sans-serif] selection:bg-[#cbd5e0] selection:text-[#1a202c]">
            {/* Soft Header */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-[#e6ebf1] rounded-full shadow-[10px_10px_20px_#ced3d9,-10px_-10px_20px_#feffff] flex items-center gap-12 border border-white/40 backdrop-blur-sm">
                <span className="text-sm font-black uppercase tracking-widest text-[#4a5568]">EN.PROJECTS</span>
                <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                    <a href="#projects" className="hover:text-[#4299e1] transition-colors">Portfolio</a>
                    <a href="#experience" className="hover:text-[#4299e1] transition-colors">Journey</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#4299e1] transition-colors font-black underline decoration-cyan-400 decoration-2">Contact</a>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-48">
                {/* Tactical Hero */}
                <header className="grid lg:grid-cols-2 gap-20 items-center mb-64">
                    <div className="space-y-12">
                         <div className="flex gap-4 mb-4">
                             <Circle className="text-[#a0aec0]" size={16} fill="currentColor" />
                             <Triangle className="text-[#a0aec0] rotate-180" size={16} fill="currentColor" />
                             <Square className="text-[#a0aec0]" size={16} fill="currentColor" />
                         </div>
                         <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#2d3748] to-[#718096] mb-8">
                            Visual <br /> Precision
                         </h1>
                         <p className="text-xl md:text-2xl text-[#718096] leading-relaxed max-w-lg font-medium">
                            {personalInfo.description}. Building digital systems with refined depth and tactical clarity.
                         </p>
                         <div className="flex gap-8 items-center pt-8">
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`mailto:${personalInfo.email}`} 
                                className="px-10 py-5 bg-[#e6ebf1] rounded-2xl shadow-[8px_8px_16px_#ced3d9,-8px_-8px_16px_#feffff] text-sm font-black uppercase tracking-widest hover:shadow-[inset_6px_6px_12px_#ced3d9,inset_-6px_-6px_12px_#feffff] transition-all text-[#4299e1] border border-white/20"
                            >
                                Get in touch
                            </motion.a>
                            <div className="flex gap-6">
                                <a href={personalInfo.github} className="p-4 bg-[#e6ebf1] rounded-xl shadow-[6px_6px_12px_#ced3d9,-6px_-6px_12px_#feffff] text-[#718096] hover:text-[#2d3748] transition-colors border border-white/10"><Github size={20} /></a>
                                <a href={personalInfo.linkedin} className="p-4 bg-[#e6ebf1] rounded-xl shadow-[6px_6px_12px_#ced3d9,-6px_-6px_12px_#feffff] text-[#718096] hover:text-[#2d3748] transition-colors border border-white/10"><Linkedin size={20} /></a>
                            </div>
                         </div>
                    </div>

                    <div className="relative group flex justify-center lg:justify-end">
                         <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[60px] bg-[#e6ebf1] shadow-[20px_20px_60px_#ced3d9,-20px_-20px_60px_#feffff] p-8 group-hover:shadow-[inset_20px_20px_60px_#ced3d9,inset_-20px_-20px_60px_#feffff] transition-all duration-1000 border border-white/40 overflow-hidden relative">
                             <img src={profileImg} alt="Tactile Avatar" className="w-full h-full object-cover rounded-[40px] grayscale brightness-110 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000" />
                             <div className="absolute inset-0 bg-blue-500/5 mix-blend-soft-light group-hover:bg-transparent transition-all pointer-events-none" />
                         </div>
                         <div className="absolute top-10 right-10 p-6 bg-[#e6ebf1] shadow-[8px_8px_16px_#ced3d9,-8px_-8px_16px_#feffff] rounded-3xl border border-white/40 hidden lg:block group-hover:translate-x-10 transition-transform duration-700">
                             <Coffee className="text-[#4299e1]" />
                         </div>
                    </div>
                </header>

                {/* Tactile Project Grid */}
                <section id="projects" className="py-20 mb-64">
                    <div className="flex flex-col items-center mb-32">
                        <span className="text-xs font-black uppercase tracking-[0.6em] text-[#a0aec0] mb-6">Archive // List</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#2d3748]">Major Builds</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {projects.slice(0, 6).map((project) => (
                            <motion.div 
                                key={project.id}
                                whileHover={{ y: -10 }}
                                className="bg-[#e6ebf1] rounded-[48px] shadow-[12px_12px_24px_#ced3d9,-12px_-12px_24px_#feffff] p-8 border border-white/40 flex flex-col group hover:shadow-[16px_16px_32px_#ced3d9,-16px_-16px_32px_#feffff] transition-all duration-500"
                            >
                                <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-10 shadow-[inset_6px_6px_12px_#ced3d9,inset_-6px_-6px_12px_#feffff] p-4 bg-white/10 group-hover:p-0 transition-all duration-700 border border-white/20">
                                     <img src={project.image || `https://placehold.co/600x450/e6ebf1/2d3748?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover rounded-[20px] group-hover:rounded-none group-hover:scale-105 transition-all duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 px-2">{project.name}</h3>
                                <p className="text-sm text-[#718096] font-medium leading-relaxed mb-10 px-2 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-10 px-2">
                                    {project.stacks.slice(0, 3).map(s => <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-[#a0aec0] py-1 shadow-[inset_2px_2px_4px_#ced3d9,inset_-2px_-2px_4px_#feffff] px-4 rounded-full border border-white/10">{s}</span>)}
                                </div>
                                <div className="mt-auto px-2 pb-2">
                                     <a href={project.link} className="inline-flex items-center gap-4 text-xs font-black uppercase text-[#4299e1] hover:translate-x-4 transition-transform">
                                          View Outcome <Eye size={16} />
                                     </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Soft Experience Timeline */}
                <section id="experience" className="max-w-4xl mx-auto mb-64">
                    <div className="bg-[#e6ebf1] rounded-[60px] shadow-[20px_20px_40px_#ced3d9,-20px_-20px_40px_#feffff] p-12 md:p-20 border border-white/40">
                         <h2 className="text-3xl font-black uppercase tracking-tight text-[#2d3748] mb-20 text-center flex items-center justify-center gap-6">
                            <span className="h-px w-12 bg-[#ced3d9]" /> Operational History <span className="h-px w-12 bg-[#ced3d9]" />
                         </h2>
                         <div className="space-y-16">
                             {experience.map((exp, idx) => (
                                 <div key={exp.company} className="flex gap-10 group">
                                     <div className="flex flex-col items-center">
                                         <div className="w-12 h-12 rounded-2xl bg-[#e6ebf1] shadow-[4px_4px_8px_#ced3d9,-4px_-4px_8px_#feffff] border border-white/40 flex items-center justify-center text-[#4299e1] font-black group-hover:shadow-[inset_4px_4px_8px_#ced3d9,inset_-4px_-4px_8px_#feffff] transition-shadow duration-500">
                                            {idx + 1}
                                         </div>
                                         <div className="w-px flex-1 bg-gradient-to-b from-[#ced3d9] via-[#ced3d9] to-transparent my-4" />
                                     </div>
                                     <div className="pb-12 border-b border-[#ced3d9]/30 flex-1">
                                         <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                            <h4 className="text-2xl font-black text-[#2d3748] tracking-tight">{exp.title}</h4>
                                            <span className="text-[10px] font-bold uppercase py-2 px-6 bg-[#e6ebf1] rounded-full shadow-[inset_2px_2px_4px_#ced3d9,inset_-2px_-2px_4px_#feffff] text-[#718096] h-fit border border-white/10">{exp.period}</span>
                                         </div>
                                         <p className="text-[#4299e1] font-bold text-sm tracking-widest uppercase mb-6 italic">{exp.company}</p>
                                         <p className="text-[#718096] font-medium leading-relaxed max-w-2xl italic">"{exp.description}"</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                    </div>
                </section>

                {/* Tactical Footer */}
                <footer className="py-40 text-center flex flex-col items-center border-t border-[#ced3d9]/20">
                     <div className="w-24 h-24 bg-[#e6ebf1] rounded-[32px] shadow-[8px_8px_16px_#ced3d9,-8px_-8px_16px_#feffff] flex items-center justify-center mb-20 border border-white/40 hover:rotate-45 transition-transform duration-[1s]">
                         <MessageSquare className="text-[#4299e1]" size={32} />
                     </div>
                     <h2 className="text-4xl md:text-7xl font-black text-[#2d3748] tracking-tighter mb-16">Ready for <br /> Connection?</h2>
                     <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-4xl font-black text-[#4299e1] underline underline-offset-[16px] decoration-[#cbd5e0] decoration-4 hover:decoration-[#4299e1] transition-all block mb-40">
                        {personalInfo.email}
                     </a>
                     <div className="flex gap-12 text-[10px] items-center uppercase font-black tracking-[0.5em] text-[#a0aec0]">
                        <a href={personalInfo.github} className="hover:text-[#4299e1]">Github.sys</a>
                        <span className="w-2 h-2 rounded-full bg-[#ced3d9]" />
                        <a href={personalInfo.linkedin} className="hover:text-[#4299e1]">Linkedin.sys</a>
                     </div>
                     <p className="mt-40 text-[10px] font-bold text-[#cbd5e0] tracking-widest uppercase">EN.2024 — Tactual System Engineering</p>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV19;
