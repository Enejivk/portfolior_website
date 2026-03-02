import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { personalInfo, skills, education, experience, projects } from "../data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  Award,
} from "lucide-react";

// Animation variants
const slideIn: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Navigation
const Navigation = () => (
  <motion.nav
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-orange-500/25"
      >
        EV
      </motion.div>
      
      <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-xl rounded-full p-1.5 border border-white/10">
        {["About", "Skills", "Work", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.a
        href={`mailto:${personalInfo.email}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 bg-white text-zinc-900 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-white/10 transition-all flex items-center gap-2"
      >
        Let's Talk
        <ArrowUpRight size={16} />
      </motion.a>
    </div>
  </motion.nav>
);

// Hero Section - Split Screen Design
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Animated background shapes */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-pink-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/10 to-indigo-600/10 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div variants={slideIn} className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
              <Sparkles size={16} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Open to opportunities</span>
            </motion.div>

            <motion.h1 variants={slideIn} className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Creative
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Developer
              </span>
              & Designer
            </motion.h1>

            <motion.p variants={slideIn} className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Hi! I'm <span className="text-white font-semibold">{personalInfo.name}</span>. {personalInfo.description}
            </motion.p>

            <motion.div variants={slideIn} className="flex flex-wrap gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(251, 191, 36, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl font-semibold text-zinc-900 flex items-center gap-2"
              >
                View My Work
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div variants={slideIn} className="flex items-center gap-8 mt-12 pt-12 border-t border-zinc-800">
              {[
                { label: "Years Exp.", value: "3+" },
                { label: "Projects", value: "15+" },
                { label: "Clients", value: "10+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="block text-sm text-zinc-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative cards */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-gradient-to-br from-amber-500/90 to-orange-500/90 rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
              >
                <Zap size={32} className="text-white mb-3" />
                <p className="text-white font-semibold">Fast & Efficient</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-violet-500/90 to-indigo-500/90 rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
              >
                <Layers size={32} className="text-white mb-3" />
                <p className="text-white font-semibold">Full-Stack</p>
              </motion.div>

              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-6 flex items-center justify-center text-5xl font-bold text-white">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="text-zinc-400">{personalInfo.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-6 bottom-1/2 translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        {[
          { icon: Github, href: personalInfo.github },
          { icon: Linkedin, href: personalInfo.linkedin },
          { icon: Mail, href: `mailto:${personalInfo.email}` },
        ].map(({ icon: Icon, href }) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:border-amber-500/50 transition-colors"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => (
  <section id="about" className="py-32 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid lg:grid-cols-5 gap-16"
      >
        <motion.div variants={slideIn} className="lg:col-span-2">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Turning ideas into
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text"> digital reality</span>
          </h2>
        </motion.div>

        <motion.div variants={slideInRight} className="lg:col-span-3 space-y-6">
          <p className="text-lg text-zinc-400 leading-relaxed">
            {personalInfo.aboutDescription}
          </p>
          <p className="text-zinc-500 leading-relaxed">
            I specialize in creating seamless full-stack applications using React and Python, 
            with a strong foundation in DevOps practices. My approach combines clean code with 
            intuitive design to deliver exceptional user experiences.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            {[
              { icon: Award, title: "Quality First", desc: "Clean, maintainable code" },
              { icon: Zap, title: "Performance", desc: "Optimized for speed" },
              { icon: Layers, title: "Full-Stack", desc: "End-to-end solutions" },
              { icon: Sparkles, title: "Modern Tech", desc: "Latest frameworks" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-sm text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => {
  const allSkills = [...skills.frontend, ...skills.backend, ...skills.devops];
  
  return (
    <section id="skills" className="py-32 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-4xl font-bold mt-4">My Technical Arsenal</h2>
        </motion.div>
      </div>

      {/* Scrolling skills marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-900 to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-6"
        >
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl flex items-center gap-3"
            >
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-lg font-medium whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skill categories */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", skills: skills.frontend, gradient: "from-amber-500 to-orange-500" },
            { title: "Backend", skills: skills.backend, gradient: "from-rose-500 to-pink-500" },
            { title: "DevOps", skills: skills.devops, gradient: "from-violet-500 to-indigo-500" },
          ].map(({ title, skills: skillList, gradient }) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-zinc-800/30 border border-zinc-700/50 rounded-3xl p-8 hover:border-zinc-600 transition-all"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-sm font-semibold text-white mb-6`}>
                {title}
              </div>
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 text-zinc-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => (
  <section className="py-32 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Journey</span>
        <h2 className="text-4xl font-bold mt-4">Experience & Education</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <Zap size={20} className="text-zinc-900" />
            </span>
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-amber-500 before:rounded-full">
                <span className="text-amber-400 text-sm font-medium">{exp.period}</span>
                <h4 className="text-xl font-semibold mt-1">{exp.title}</h4>
                <p className="text-zinc-400 mt-1">{exp.company}</p>
                <p className="text-zinc-500 text-sm mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center">
              <Award size={20} className="text-zinc-900" />
            </span>
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-rose-500 before:rounded-full">
                <span className="text-rose-400 text-sm font-medium">{edu.period}</span>
                <h4 className="text-xl font-semibold mt-1">{edu.title}</h4>
                <p className="text-zinc-400 mt-1">{edu.school}</p>
                {edu.description && <p className="text-zinc-500 text-sm mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
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
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>
        </div>
        <p className="text-zinc-500 max-w-md">
          A selection of projects that showcase my skills in full-stack development and design.
        </p>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideIn : slideInRight}
            className="group"
          >
            <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-700/50">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x450/27272a/fbbf24?text=${encodeURIComponent(project.name)}`;
                    }}
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm mb-4">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{project.name}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stacks.slice(0, 5).map((stack) => (
                    <span key={stack} className="px-3 py-1 bg-zinc-800 rounded-lg text-sm text-zinc-400">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-900 rounded-xl font-semibold"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-xl font-semibold hover:border-zinc-600"
                    >
                      <Github size={18} />
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
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-[150px]" />
    </div>

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center"
      >
        <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          Let's Create Something
          <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
            Amazing Together
          </span>
        </h2>
        <p className="text-zinc-500 mb-12 max-w-xl mx-auto text-lg">
          Have a project idea or want to collaborate? I'm always excited to discuss new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(251, 191, 36, 0.3)" }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl font-semibold text-zinc-900 flex items-center justify-center gap-3"
          >
            <Mail size={20} />
            {personalInfo.email}
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-white/10"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-zinc-800 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white">
          EV
        </div>
        <span className="text-zinc-500">© {new Date().getFullYear()} {personalInfo.name}</span>
      </div>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: personalInfo.github },
          { icon: Linkedin, href: personalInfo.linkedin },
          { icon: Mail, href: `mailto:${personalInfo.email}` },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:bg-zinc-700 transition-all"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// Main Component
const PortfolioV2 = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioV2;
