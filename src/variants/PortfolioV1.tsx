import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { personalInfo, skills, education, experience, projects } from "../data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Server,
  Cloud,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

// Navigation Component
const Navigation = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50"
  >
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
      >
        EV
      </motion.span>
      <div className="hidden md:flex items-center gap-8">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.a
        href={`mailto:${personalInfo.email}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-full text-sm font-medium transition-colors"
      >
        Hire Me
      </motion.a>
    </div>
  </motion.nav>
);

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background gradient orbs */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[128px]" />
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-xl md:text-2xl text-zinc-400 font-light">
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-zinc-500 max-w-2xl mx-auto mb-12 text-lg"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-100 transition-colors"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800/50 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: "#a78bfa" }}
            className="text-zinc-500 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: "#a78bfa" }}
            className="text-zinc-500 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -4, color: "#a78bfa" }}
            className="text-zinc-500 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} className="text-zinc-600" />
      </motion.div>
    </motion.div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="text-violet-400 font-medium mb-4 block">About Me</span>
          <h2 className="text-4xl font-bold mb-6">
            Crafting digital experiences with code and creativity
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            {personalInfo.aboutDescription}
          </p>
          <p className="text-zinc-500 leading-relaxed">
            With experience in both frontend and backend development, I create
            seamless, full-stack applications that prioritize performance and
            user experience.
          </p>
        </motion.div>

        <motion.div variants={scaleIn} className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 border border-zinc-800 p-8">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4">
                <div className="bg-zinc-800/50 rounded-2xl p-6 h-1/2 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-violet-400">3+</span>
                  <span className="text-zinc-500 text-sm">Years Experience</span>
                </div>
                <div className="bg-zinc-800/50 rounded-2xl p-6 h-1/2 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-fuchsia-400">15+</span>
                  <span className="text-zinc-500 text-sm">Projects Completed</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 rounded-2xl p-6 h-1/2 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-pink-400">10+</span>
                  <span className="text-zinc-500 text-sm">Technologies</span>
                </div>
                <div className="bg-zinc-800/50 rounded-2xl p-6 h-1/2 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-cyan-400">100%</span>
                  <span className="text-zinc-500 text-sm">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    { title: "Frontend", icon: Code, skills: skills.frontend, color: "violet" },
    { title: "Backend", icon: Server, skills: skills.backend, color: "fuchsia" },
    { title: "DevOps", icon: Cloud, skills: skills.devops, color: "cyan" },
  ];

  return (
    <section id="skills" className="py-32 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-medium mb-4 block">
            My Skills
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold">
            Technologies I Work With
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map(({ title, icon: Icon, skills: skillList, color }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-${color}-500/10 flex items-center justify-center mb-6`}
                style={{ backgroundColor: `rgb(139 92 246 / 0.1)` }}
              >
                <Icon className={`text-${color}-400`} size={28} style={{ color: color === 'violet' ? '#a78bfa' : color === 'fuchsia' ? '#e879f9' : '#22d3ee' }} />
              </div>
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-2 bg-zinc-800 rounded-lg text-sm text-zinc-400"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => (
  <section id="experience" className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.span variants={fadeInUp} className="text-violet-400 font-medium mb-4 block">
          My Journey
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold">
          Experience & Education
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-violet-400" size={24} />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-zinc-800 pb-6 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-violet-500 rounded-full -translate-x-[7px]" />
                <span className="text-sm text-violet-400 font-medium">{exp.period}</span>
                <h4 className="text-lg font-semibold mt-1">{exp.title}</h4>
                <p className="text-zinc-500">{exp.company}</p>
                <p className="text-zinc-600 text-sm mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-fuchsia-400" size={24} />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-zinc-800 pb-6 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-fuchsia-500 rounded-full -translate-x-[7px]" />
                <span className="text-sm text-fuchsia-400 font-medium">{edu.period}</span>
                <h4 className="text-lg font-semibold mt-1">{edu.title}</h4>
                <p className="text-zinc-500">{edu.school}</p>
                {edu.description && (
                  <p className="text-zinc-600 text-sm mt-2">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section id="projects" className="py-32 bg-zinc-900/50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.span variants={fadeInUp} className="text-violet-400 font-medium mb-4 block">
          My Work
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold">
          Featured Projects
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all"
          >
            <div className="aspect-video overflow-hidden bg-zinc-800">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x450/1f1f23/a78bfa?text=${encodeURIComponent(project.name)}`;
                }}
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stacks.slice(0, 4).map((stack) => (
                  <span key={stack} className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-500">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-32">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.span variants={fadeInUp} className="text-violet-400 font-medium mb-4 block">
          Get in Touch
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-zinc-500 mb-12 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? I'm always open to discussing
          new opportunities and ideas.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-full font-medium flex items-center justify-center gap-3 transition-colors"
          >
            <Mail size={20} />
            {personalInfo.email}
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 border border-zinc-700 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-zinc-800/50 transition-colors"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-zinc-800">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-zinc-600 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

// Main Portfolio Component
const PortfolioV1 = () => {
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

export default PortfolioV1;
