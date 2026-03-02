import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo, skills, education, experience, projects } from "../data/portfolio";
import { Github, Linkedin, Mail, MoveUpRight, Circle, Minus } from "lucide-react";

// Animation variants
const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2 } },
};

// Marquee Component
const Marquee = ({ text, direction = 1 }: { text: string; direction?: number }) => (
  <div className="overflow-hidden py-4 border-y border-zinc-800">
    <motion.div
      animate={{ x: direction > 0 ? [0, -1920] : [-1920, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="flex whitespace-nowrap"
    >
      {Array(10)
        .fill(text)
        .map((t, i) => (
          <span key={i} className="text-6xl md:text-8xl font-bold text-zinc-800 mx-8">
            {t}
          </span>
        ))}
    </motion.div>
  </div>
);

// Navigation
const Navigation = () => (
  <motion.nav
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
  >
    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-black text-white tracking-tighter"
      >
        EV©
      </motion.span>
      
      <div className="hidden md:flex items-center gap-12">
        {["Work", "About", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="text-sm text-white font-medium tracking-wider uppercase"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.a
        href={`mailto:${personalInfo.email}`}
        whileHover={{ scale: 1.05 }}
        className="text-sm text-white font-medium tracking-wider uppercase flex items-center gap-2"
      >
        <Circle size={8} fill="currentColor" />
        Hire Me
      </motion.a>
    </div>
  </motion.nav>
);

// Hero Section
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden bg-zinc-950">
      {/* Large background text */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-black text-zinc-900/50 select-none">
          DEV
        </span>
      </motion.div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={reveal} className="mb-8">
              <span className="text-zinc-500 text-lg tracking-wider">FULL-STACK DEVELOPER</span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter"
            >
              {personalInfo.name.split(' ').map((word, i) => (
                <span key={i} className="block">
                  <span className={i === 1 ? "text-transparent [-webkit-text-stroke:2px_white]" : ""}>
                    {word}
                  </span>
                </span>
              ))}
            </motion.h1>

            <motion.div variants={lineExpand} className="h-px bg-white/20 my-12 origin-left" />

            <motion.div variants={reveal} className="grid md:grid-cols-2 gap-8 items-end">
              <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                {personalInfo.description}
              </p>
              <div className="flex justify-start md:justify-end gap-6">
                {[
                  { icon: Github, href: personalInfo.github },
                  { icon: Linkedin, href: personalInfo.linkedin },
                  { icon: Mail, href: `mailto:${personalInfo.email}` },
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
          <Minus size={16} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Marquee Section
const MarqueeSection = () => (
  <div className="bg-zinc-950 py-8">
    <Marquee text="REACT • PYTHON • TYPESCRIPT • FASTAPI •" />
  </div>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-32 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={reveal} className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-zinc-500 text-sm uppercase tracking-widest">About</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
              The Story
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl text-zinc-300 leading-relaxed mb-8">
              {personalInfo.aboutDescription}
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              With expertise spanning front-end and back-end development, I create 
              cohesive digital experiences that prioritize both form and function. 
              My approach combines technical precision with creative problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={reveal} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-zinc-800">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Projects Delivered" },
            { value: "10+", label: "Technologies" },
            { value: "∞", label: "Cups of Coffee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <span className="text-5xl md:text-6xl font-black text-white">{stat.value}</span>
              <span className="block text-zinc-600 mt-2 text-sm uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => (
  <section id="skills" className="py-32 bg-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
      >
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Expertise</h2>
          <span className="text-zinc-600 text-sm uppercase tracking-widest hidden md:block">Technologies</span>
        </div>

        <div className="space-y-4">
          {[
            { title: "Frontend", skills: skills.frontend },
            { title: "Backend", skills: skills.backend },
            { title: "DevOps", skills: skills.devops },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-between py-8 border-b border-zinc-800 hover:border-white/30 transition-colors">
                <div className="flex items-center gap-8">
                  <span className="text-zinc-600 text-sm font-mono">0{index + 1}</span>
                  <h3 className="text-2xl md:text-4xl font-bold group-hover:text-white/80 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 border border-zinc-700 text-sm text-zinc-400 group-hover:border-zinc-600 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Experience Section
const ExperienceSection = () => (
  <section className="py-32 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
      >
        <div className="grid md:grid-cols-2 gap-20">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
              <span className="w-12 h-px bg-white" />
              Experience
            </h3>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-zinc-600 text-sm font-mono">{exp.period}</span>
                  <h4 className="text-2xl font-bold mt-2">{exp.title}</h4>
                  <p className="text-zinc-500 mt-1">{exp.company}</p>
                  <p className="text-zinc-600 text-sm mt-3">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
              <span className="w-12 h-px bg-white" />
              Education
            </h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-zinc-600 text-sm font-mono">{edu.period}</span>
                  <h4 className="text-2xl font-bold mt-2">{edu.title}</h4>
                  <p className="text-zinc-500 mt-1">{edu.school}</p>
                  {edu.description && (
                    <p className="text-zinc-600 text-sm mt-3">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section id="work" className="py-32 bg-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        className="mb-20"
      >
        <span className="text-zinc-600 text-sm uppercase tracking-widest">Selected Work</span>
        <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tight">Projects</h2>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/18181b/ffffff?text=${encodeURIComponent(project.name)}`;
                    }}
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <span className="text-zinc-600 text-sm font-mono">0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-black mt-4 mb-6 leading-tight group-hover:text-zinc-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-500 text-lg mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stacks.slice(0, 4).map((stack) => (
                    <span key={stack} className="text-xs uppercase tracking-wider text-zinc-600 border border-zinc-800 px-3 py-1">
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-2 text-white font-medium group/link"
                    >
                      View Project
                      <MoveUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-2 text-zinc-500 font-medium"
                    >
                      <Github size={16} />
                      Source
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
    {/* Large background text */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
      <span className="text-[30vw] font-black">HI</span>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={reveal} className="text-center max-w-4xl mx-auto">
          <span className="text-zinc-600 text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mt-6 mb-8 tracking-tight">
            Let's Create
            <span className="block text-transparent [-webkit-text-stroke:2px_white]">
              Together
            </span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12 max-w-xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-12 py-5 bg-white text-zinc-900 font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors"
            >
              <Mail size={20} />
              {personalInfo.email}
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-12 py-5 border-2 border-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-zinc-900 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-12 border-t border-zinc-800 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-4xl font-black tracking-tighter">EV©</span>
          <p className="text-zinc-600 mt-2">© {new Date().getFullYear()} {personalInfo.name}</p>
        </div>
        
        <div className="flex items-center gap-8">
          {[
            { icon: Github, href: personalInfo.github, label: "Github" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              whileHover={{ y: -4 }}
              className="text-zinc-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <Icon size={18} />
              <span className="hidden md:inline text-sm uppercase tracking-wider">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// Main Component
const PortfolioV5 = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioV5;
