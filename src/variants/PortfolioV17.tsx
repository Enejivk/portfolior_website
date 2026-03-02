import { motion } from "framer-motion";
import { personalInfo, projects, experience } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";
import { Palmtree, Moon, Sun, Music, Camera, Zap } from "lucide-react";

/**
 * PortfolioV17: "Outrun Oasis"
 * Aesthetic: Vaporwave / Cyber Retrowave / Neon Purples + Cyans
 * Focus: High nostalgia, pixel-art hints, and vibrant gradients.
 */
const PortfolioV17 = () => {
    return (
        <div className="min-h-screen bg-[#0d0221] text-[#f6019d] font-['Space_Mono',monospace] selection:bg-[#24173e] selection:text-[#2de2e6] overflow-x-hidden">
            {/* Animated Grid Background Layer */}
            <div className="fixed inset-0 pointer-events-none opacity-20" style={{ 
                backgroundImage: `linear-gradient(#2de2e6 1px, transparent 1px), linear-gradient(90deg, #2de2e6 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                perspective: '500px',
                transform: 'rotateX(60deg) scale(2.4)'
            }} />

            {/* Sticky Navigation / Header Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0221]/90 border-b-2 border-[#2de2e6]/30 px-6 py-4 flex justify-between items-center backdrop-blur-xl">
                 <div className="flex gap-4 items-center">
                    <Zap className="text-[#2de2e6]" size={20} />
                    <span className="text-sm font-black italic tracking-tighter text-[#2de2e6]">VECTOR_OS // v0.92</span>
                 </div>
                 <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest hidden md:flex">
                    <a href="#projects" className="hover:text-white transition-colors">Data_Banks</a>
                    <a href="#history" className="hover:text-white transition-colors">Archive</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#2de2e6] border border-[#2de2e6] px-4 py-1.5 hover:bg-[#2de2e6] hover:text-black transition-all">Transmit</a>
                 </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-32 relative z-10">
                {/* Hero Section */}
                <header className="flex flex-col items-center text-center mb-40">
                    <div className="relative mb-16 group">
                         {/* Sun Gradient */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-transparent via-[#f6019d] to-[#ff6d00] opacity-30 blur-3xl group-hover:scale-125 transition-transform duration-[3s]" />
                         <div className="w-56 h-56 rounded-full border-4 border-[#2de2e6] p-2 relative z-10 overflow-hidden shadow-[0_0_40px_rgba(45,226,230,0.4)]">
                             <img src={profileImg} alt="Vaporwave Avatar" className="w-full h-full object-cover grayscale brightness-125 contrast-125 sepia-[0.4] hue-rotate-[280deg]" />
                         </div>
                         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0d0221] border-2 border-[#f6019d] px-6 py-2 text-[10px] font-black uppercase text-white shadow-[0_0_20px_#f6019d]">
                            ADMINISTRATOR
                         </div>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-b from-[#f6019d] via-[#9700cc] to-[#2de2e6] leading-none drop-shadow-[0_4px_10px_rgba(45,226,230,0.5)]">
                        {personalInfo.name.split(" ")[0]}<br />
                        <span className="text-white text-4xl md:text-6xl not-italic tracking-[0.2em]">{personalInfo.name.split(" ")[1]}</span>
                    </h1>
                    
                    <p className="text-zinc-400 text-lg md:text-2xl font-light uppercase tracking-[0.3em] max-w-2xl mx-auto mb-16 leading-relaxed">
                        Digital architect creating futuristic experiences in a nostalgic world.
                    </p>

                    <div className="flex flex-wrap justify-center gap-12 text-[#2de2e6]">
                         <div className="flex flex-col items-center gap-2 group cursor-default">
                             <Palmtree size={32} className="group-hover:translate-y-[-4px] transition-transform" />
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Creative</span>
                         </div>
                         <div className="flex flex-col items-center gap-2 group cursor-default">
                             <Music size={32} className="group-hover:translate-y-[-4px] transition-transform" />
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Frequency</span>
                         </div>
                         <div className="flex flex-col items-center gap-2 group cursor-default">
                             <Camera size={32} className="group-hover:translate-y-[-4px] transition-transform" />
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Vision</span>
                         </div>
                    </div>
                </header>

                {/* Vertical Projects Archive */}
                <section id="projects" className="py-20 border-t-2 border-[#2de2e6]/10 mb-40">
                    <div className="flex items-center gap-6 mb-32">
                        <div className="h-[2px] w-20 bg-gradient-to-r from-[#f6019d] to-[#2de2e6]" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter flex items-center gap-6">
                            DATA_BANKS <span className="text-zinc-700 text-sm not-italic font-bold tracking-widest">[ SECTOR_07 ]</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-40">
                        {projects.slice(0, 4).map((project, idx) => (
                            <motion.div 
                                key={project.id}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="aspect-video mb-10 overflow-hidden relative border-4 border-[#2de2e6]/20 group-hover:border-[#f6019d] transition-colors duration-700">
                                     <img src={project.image || `https://placehold.co/800x450/0d0221/2de2e6?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                     <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] to-transparent opacity-60" />
                                     <div className="absolute top-4 right-4 text-[10px] font-black uppercase text-[#2de2e6] tracking-widest bg-black/60 px-3 py-1 border border-[#2de2e6]/20">NODE_{idx + 1}</div>
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#2de2e6] transition-colors italic">{project.name}</h3>
                                <p className="text-zinc-500 text-sm uppercase font-bold tracking-widest leading-relaxed mb-8 max-w-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.stacks.map(s => <span key={s} className="text-[#f6019d] text-[10px] uppercase font-black border border-[#f6019d]/30 px-3 py-1 group-hover:bg-[#f6019d]/10 transition-all">{s}</span>)}
                                </div>
                                <a href={project.link} className="inline-flex items-center gap-4 text-[#2de2e6] text-xs font-black uppercase tracking-widest group-hover:gap-8 transition-all group-hover:underline">
                                    INITIATE_PROCEDURE &gt;&gt;
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Experience History */}
                <section id="history" className="bg-[#190933]/50 p-10 md:p-20 border-2 border-[#f6019d]/20 rounded-3xl relative overflow-hidden backdrop-blur-md">
                     <div className="absolute top-0 right-0 p-8">
                         <Moon className="text-[#f6019d] opacity-20" size={100} />
                     </div>
                     <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-20 text-white flex items-center gap-6">
                        LEGACY_ARCHIVE <Sun className="text-[#ff6d00]" size={24} />
                     </h2>
                     <div className="space-y-20 relative z-10">
                         {experience.map(exp => (
                             <div key={exp.company} className="grid md:grid-cols-4 gap-8">
                                 <div className="col-span-1 border-r border-[#2de2e6]/20 pr-8">
                                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 py-2 border-b border-[#2de2e6]/20 block mb-4">{exp.period}</span>
                                     <h4 className="text-lg font-black uppercase text-[#2de2e6] italic tracking-tight">{exp.company}</h4>
                                 </div>
                                 <div className="col-span-3">
                                     <h4 className="text-2xl font-black uppercase text-white mb-6 tracking-tighter">{exp.title}</h4>
                                     <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl font-bold italic tracking-wide lowercase">{exp.description}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                </section>

                {/* Footer Section */}
                <footer className="mt-40 pt-40 border-t-2 border-[#2de2e6]/20 text-center relative">
                     <div className="grid md:grid-cols-3 gap-12 mb-40 text-left">
                         <div className="space-y-6">
                             <span className="text-[10px] font-black uppercase tracking-widest text-[#f6019d]">Comm_Links</span>
                             <div className="flex flex-col gap-4 text-white text-xs font-bold uppercase tracking-widest">
                                 <a href={personalInfo.github} className="hover:text-[#2de2e6] transition-colors">GitHub / Source</a>
                                 <a href={personalInfo.linkedin} className="hover:text-[#2de2e6] transition-colors">LinkedIn / Connect</a>
                             </div>
                         </div>
                         <div className="md:col-span-2 text-right">
                             <a href={`mailto:${personalInfo.email}`} className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2de2e6] to-[#f6019d] hover:brightness-125 transition-all block break-all mb-10">
                                {personalInfo.email}
                             </a>
                             <p className="text-[10px] font-black uppercase tracking-[1em] text-zinc-600">Established // 2024 EN_STUDIO</p>
                         </div>
                     </div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV17;
