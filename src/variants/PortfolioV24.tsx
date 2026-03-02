import { motion } from "framer-motion";
import { personalInfo, projects } from "../data/portfolio";
import profile1 from "../assets/profile1.jpg";
import { Sparkles, Eye, Layers, Compass, ExternalLink, Globe, Smartphone, Monitor } from "lucide-react";

/**
 * PortfolioV24: "Ethereal Glass"
 * Aesthetic: Frosted Glass / Light / Organic Glows / Mint & Soft Pink accents
 * Focus: High transparency, blurring, and "profile1" in a soft, glowing environment.
 */
const PortfolioV24 = () => {
    return (
        <div className="min-h-screen bg-[#f0f4f8] text-[#1a2b3c] font-['Outfit',sans-serif] selection:bg-[#c2f3e8] selection:text-black overflow-x-hidden relative">
            {/* Organic Glow Backgrounds */}
            <div className="fixed top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#c2f3e8]/40 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#ffe4e1]/40 rounded-full blur-[150px] -z-10" />

            {/* Glass Navigation */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-12 py-6 bg-white/40 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl flex items-center gap-16">
                <div className="flex items-center gap-3 group">
                    <Sparkles className="text-[#4fd1c5] fill-[#4fd1c5]/20 animate-spin-slow" size={20} />
                    <span className="text-xl font-bold tracking-tight text-slate-800">Ethereal.V24</span>
                </div>
                <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <a href="#about" className="hover:text-black transition-colors">Vision</a>
                    <a href="#projects" className="hover:text-black transition-colors">Creation</a>
                    <a href={`mailto:${personalInfo.email}`} className="text-[#4fd1c5] border-b-2 border-[#4fd1c5] hover:border-black hover:text-black transition-all">Connect</a>
                </div>
            </nav>

            <main className="max-w-[1300px] mx-auto px-8 relative z-10 pt-48">
                {/* Hero: The Soft Launch */}
                <header className="flex flex-col items-center text-center gap-16 mb-64">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative group pt-10"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-125 group-hover:bg-[#4fd1c5]/10 transition-all duration-1000" />
                        <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-[100px] md:rounded-[140px] overflow-hidden border-[12px] border-white/60 shadow-2xl rotate-[5deg] group-hover:rotate-0 transition-all duration-[2s]">
                             <img src={profile1} alt="Victor Profile 1" className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                             <div className="absolute inset-0 bg-[#4fd1c5]/5 mix-blend-soft-light group-hover:bg-transparent transition-all duration-1000" />
                        </div>
                    </motion.div>

                    <div className="space-y-10 max-w-4xl">
                        <div className="flex items-center justify-center gap-4 text-[#4fd1c5] font-bold tracking-[0.4em] text-[10px] uppercase italic">
                            Digital Product Artisan <Globe size={14} />
                        </div>
                        <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight leading-[0.9] text-slate-900 flex flex-col items-center gap-4">
                            <span>Eneji Victor</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-[#4fd1c5] to-slate-200 block px-4 italic font-medium">Fullstack Architect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            {personalInfo.description}. Currently manifesting high-performance digital aesthetics that feel like light.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
                            <motion.a 
                                whileHover={{ scale: 1.05, y: -5 }}
                                href={`mailto:${personalInfo.email}`} 
                                className="px-14 py-5 bg-[#1a2b3c] text-white font-bold rounded-[30px] shadow-2xl shadow-slate-300 flex items-center gap-6 hover:shadow-[#4fd1c5]/20 hover:bg-slate-800 transition-all"
                            >
                                START CONVERSATION <Compass size={18} />
                            </motion.a>
                            <div className="flex gap-10">
                                <a href={personalInfo.github} className="text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold text-[10px] tracking-widest border-b border-transparent hover:border-slate-900 pb-2">GITHUB</a>
                                <a href={personalInfo.linkedin} className="text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold text-[10px] tracking-widest border-b border-transparent hover:border-slate-900 pb-2">LINKEDIN</a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* About: The Vision */}
                <section id="about" className="mb-80">
                     <div className="grid lg:grid-cols-2 gap-32 items-center bg-white/30 backdrop-blur-xl border border-white/50 p-16 md:p-32 rounded-[80px] shadow-2xl shadow-slate-200">
                         <div className="space-y-10">
                             <div className="w-20 h-2 bg-gradient-to-r from-[#4fd1c5] to-transparent rounded-full" />
                             <h2 className="text-5xl font-bold tracking-tight text-slate-900">Transcending boundaries.</h2>
                             <p className="text-xl text-slate-500 font-medium leading-relaxed italic pr-10">
                                {personalInfo.description} Focus is on the intersection of technical robustness and visual weightlessness.
                             </p>
                             <div className="grid grid-cols-2 gap-10">
                                 <div className="space-y-4">
                                     <Eye className="text-[#4fd1c5]" size={32} />
                                     <h4 className="text-lg font-bold text-slate-900">Clarity</h4>
                                     <p className="text-slate-400 text-sm italic font-medium">Building with transparent logic and clean architecture.</p>
                                 </div>
                                 <div className="space-y-4">
                                     <Layers className="text-[#4fd1c5]" size={32} />
                                     <h4 className="text-lg font-bold text-slate-900">Depth</h4>
                                     <p className="text-slate-400 text-sm italic font-medium">Engineering layers of high-performance interactivity.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="grid grid-cols-2 gap-8 relative group">
                             <div className="absolute inset-0 bg-[#4fd1c5]/10 scale-110 blur-[100px] rounded-full -z-10 animate-pulse" />
                             <div className="aspect-square bg-white shadow-2xl rounded-[40px] flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform hover:bg-[#c2f3e8]/20 group">
                                 <Monitor size={48} className="text-[#4fd1c5] group-hover:scale-125 transition-transform" />
                             </div>
                             <div className="aspect-square bg-white shadow-2xl rounded-[40px] flex items-center justify-center rotate-3 hover:translate-y-[-20px] transition-transform hover:bg-[#ffe4e1]/20 group">
                                 <Smartphone size={48} className="text-slate-800 opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                             </div>
                         </div>
                     </div>
                </section>

                {/* Projects: The Lightbox */}
                <section id="projects" className="mb-80">
                     <div className="flex flex-col items-center mb-40 text-center gap-4">
                         <span className="text-xs font-bold uppercase tracking-[0.5em] text-[#4fd1c5]">Manifestation</span>
                         <h2 className="text-6xl font-bold tracking-tight text-slate-900 border-b-8 border-white/60 pb-8 px-10 rounded-full">Selected Creation.</h2>
                     </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                         {projects.slice(0, 6).map((project) => (
                             <motion.div 
                                key={project.id}
                                whileHover={{ y: -15 }}
                                className="group relative bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[50px] shadow-2xl shadow-slate-200 transition-all cursor-none"
                             >
                                <div className="aspect-video bg-slate-100 rounded-[40px] mb-10 overflow-hidden relative shadow-inner">
                                    <img src={project.image || `https://placehold.co/1200x800/000000/ffffff?text=${encodeURIComponent(project.name)}`} alt={project.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] mix-blend-multiply opacity-80" />
                                    <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/40 backdrop-blur-2xl border border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                                         <ExternalLink size={20} className="text-slate-800" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 flex items-baseline gap-4 group-hover:text-[#4fd1c5] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium italic line-clamp-2">"{project.description}"</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stacks.slice(0, 3).map(s => <span key={s} className="px-5 py-1.5 bg-white/60 text-[10px] font-bold uppercase tracking-widest text-[#4fd1c5] border border-white/80 rounded-full">{s}</span>)}
                                    </div>
                                </div>
                             </motion.div>
                         ))}
                     </div>
                </section>

                {/* Final Connection Footer */}
                <footer className="py-64 text-center">
                    <div className="max-w-5xl mx-auto space-y-16">
                         <div className="inline-block p-12 bg-white/30 backdrop-blur-[80px] border border-white/60 rounded-[80px] shadow-2xl relative">
                             <div className="absolute inset-0 bg-gradient-to-br from-[#4fd1c5]/20 to-transparent blur-3xl rounded-[80px] -z-10" />
                             <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-10">Manifesting Dreams.</h2>
                             <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-3xl font-bold text-[#4fd1c5] hover:text-slate-900 transition-all italic border-b-4 border-[#4fd1c5]/30 hover:border-slate-900 pb-4">
                                {personalInfo.email}
                             </a>
                         </div>
                         <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 text-slate-400 font-bold uppercase tracking-widest text-[10px] border-t border-slate-200">
                             <div className="flex gap-12">
                                 <a href={personalInfo.github} className="hover:text-[#4fd1c5] transition-colors">GH.EXE</a>
                                 <a href={personalInfo.linkedin} className="hover:text-[#4fd1c5] transition-colors">LI.DYNAMICS</a>
                             </div>
                             <span>2024 © ETHEREAL_LABS BY VICTOR</span>
                         </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default PortfolioV24;
