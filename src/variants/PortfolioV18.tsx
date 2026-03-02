import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { ArrowDownLeft, ArrowUpRight, Plus, Hash, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * PortfolioV18: "Grid Modern"
 * Aesthetic: Swiss / Minimalist / Swiss Grid System / Red & White
 * Focus: High-quality typography (Inter/Space Grotesk), clear grids, and negative space.
 */
const PortfolioV18 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-zinc-900 font-['Inter',sans-serif] selection:bg-red-600 selection:text-white">
            {/* Minimal Sticky Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-6 flex justify-between items-center group">
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-2xl transition-transform group-hover:rotate-90 duration-500">E</div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">{personalInfo.name}</span>
                 </div>
                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-zinc-50 rounded-full transition-colors relative">
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                 </button>
            </nav>

            <main className="max-w-[1400px] mx-auto px-6 pt-32 lg:pt-48">
                {/* Hero section built on a grid */}
                <header className="grid lg:grid-cols-12 gap-y-20 gap-x-12 border-b border-zinc-100 pb-32">
                    <div className="lg:col-span-8 flex flex-col justify-end pr-8">
                         <div className="flex gap-4 items-center mb-10">
                            <Plus className="text-red-600" size={16} />
                            <span className="text-xs uppercase font-black tracking-widest text-zinc-400">Design Engineering System</span>
                         </div>
                         <h1 className="text-[12vw] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] mb-20 pr-10">
                            The <span className="text-red-600">Pure</span> Architect
                         </h1>
                         <div className="max-w-2xl text-xl md:text-3xl leading-[1.3] text-zinc-600 font-light pr-8">
                            {personalInfo.description}. Engineering with mathematical precision and minimalist philosophy.
                         </div>
                    </div>

                    <div className="lg:col-span-4 relative group self-end max-w-sm lg:max-w-none justify-self-center lg:justify-self-start">
                         <div className="overflow-hidden rounded-bl-[80px] rounded-tr-[80px] border border-zinc-100 shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                             <img src={profileImg} alt="Swiss Avatar" className="w-full h-[600px] object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 contrast-125" />
                         </div>
                         <div className="absolute top-12 -left-12 p-8 bg-zinc-900 text-white flex flex-col gap-4 shadow-2xl shadow-red-600/10 transition-transform duration-700 group-hover:translate-x-4">
                              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 border-b border-white/10 pb-4">Specialization</span>
                              <p className="text-2xl font-bold uppercase italic tracking-tighter">Technical Logic. <br />Visual Purity.</p>
                         </div>
                    </div>
                </header>

                {/* Vertical Showcase - Grid Row Style */}
                <section id="work" className="space-y-40 py-40">
                    <div className="flex justify-between items-end border-b border-zinc-100 pb-16">
                         <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter flex items-center gap-6">
                            Selected <ArrowDownLeft className="text-red-600" size={60} />
                         </h2>
                         <p className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 hidden lg:block">System Index // Collection 2024</p>
                    </div>

                    <div className="space-y-32">
                        {projects.slice(0, 3).map((project, idx) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid lg:grid-cols-12 gap-x-20 gap-y-12 items-start group"
                            >
                                <div className="lg:col-span-1 hidden lg:block">
                                     <span className="text-red-600 font-black text-2xl tracking-tighter py-4 border-b border-zinc-100 block">0{idx + 1}</span>
                                     <span className="text-[10px] uppercase font-bold text-zinc-300 pt-4 block tracking-widest leading-loose">Built with // {project.stacks.slice(0, 2).join(", ")}</span>
                                </div>
                                <div className="lg:col-span-6 relative overflow-hidden bg-zinc-50 border border-zinc-100 hover:border-red-600/30 transition-all duration-700">
                                     <img src={project.image || `https://placehold.co/800x600/ffffff/000000?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                                </div>
                                <div className="lg:col-span-5 space-y-10 py-10">
                                     <span className="text-xs uppercase font-black text-zinc-300 tracking-[0.8em]">Project_Module</span>
                                     <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter pr-4">{project.name}</h3>
                                     <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-md">{project.description}</p>
                                     <div className="flex flex-wrap gap-4 pt-4">
                                         {project.stacks.map(s => <span key={s} className="px-5 py-2 border border-zinc-100 rounded-full text-[10px] uppercase font-black text-zinc-400 hover:text-red-600 hover:border-red-600 transition-colors cursor-default">{s}</span>)}
                                     </div>
                                     <div className="pt-10">
                                         {project.link && (
                                            <a href={project.link} className="inline-flex items-center gap-6 group/btn">
                                                <span className="text-sm font-black uppercase tracking-widest pb-1 border-b-4 border-red-600 transition-all group-hover/btn:pr-10">View Result</span>
                                                <ArrowUpRight size={20} className="text-red-600 transition-transform group-hover/btn:translate-x-2" />
                                            </a>
                                         )}
                                     </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Experience - Grid Style */}
                <section className="py-40 border-t border-zinc-100 mb-40">
                     <div className="grid lg:grid-cols-4 gap-20">
                         <div className="lg:col-span-1 border-r border-zinc-100 pr-8">
                             <h2 className="text-5xl font-black uppercase tracking-tighter mb-10">History</h2>
                             <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.4em] leading-[2]">The professional evolution of a systematic mind across high-compliance industries.</p>
                         </div>
                         <div className="lg:col-span-3 space-y-24">
                             {experience.map(exp => (
                                 <div key={exp.company} className="grid md:grid-cols-12 gap-8 group">
                                     <div className="md:col-span-3">
                                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 block mb-2">{exp.period}</span>
                                         <h4 className="text-xl font-black uppercase text-red-600 tracking-tighter">{exp.company}</h4>
                                     </div>
                                     <div className="md:col-span-7">
                                         <h4 className="text-3xl font-black uppercase mb-6 tracking-tighter group-hover:translate-x-4 transition-transform duration-700">{exp.title}</h4>
                                         <p className="text-zinc-500 font-light leading-relaxed text-lg italic pr-4">{exp.description}</p>
                                     </div>
                                     <div className="md:col-span-2 flex justify-end items-start opacity-10 group-hover:opacity-100 transition-opacity">
                                         <Plus className="text-zinc-300" size={40} />
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                </section>

                {/* Direct High Contrast Footer */}
                <footer className="text-center py-40 bg-zinc-900 border-red-600 border-t-[20px] mb-20 group">
                    <div className="flex justify-center gap-12 mb-20 text-[10px] font-black uppercase tracking-[1em] text-zinc-500">
                        <a href={personalInfo.github} className="hover:text-red-500 transition-colors">GitHub</a>
                        <a href={personalInfo.linkedin} className="hover:text-red-500 transition-colors">LinkedIn</a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-red-500 transition-colors group-hover:text-white">Direct Connect</a>
                    </div>
                    <motion.a 
                        whileHover={{ scale: 0.98 }}
                        href={`mailto:${personalInfo.email}`} 
                        className="text-2xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter text-white hover:text-red-500 transition-all block break-all px-6 py-10"
                    >
                        {personalInfo.email}
                    </motion.a>
                    <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-center gap-20 items-center opacity-40">
                         <div className="flex gap-4 items-center uppercase font-black text-xs tracking-widest text-white">
                             <Hash size={16} /> EN_SYSTEM_COLLECTION
                         </div>
                         <div className="text-xs font-bold text-white uppercase tracking-[0.5em]">2024 © ALL RIGHTS RESERVED</div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV18;
