import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, skills, education, experience, projects } from "../data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Menu,
  X,
  Code2,
  Database,
  Cloud,
  Download,
  CheckCircle,
} from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Mobile Menu
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isOpen ? 1 : 0 }}
    className={`fixed inset-0 z-50 bg-white ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
  >
    <div className="p-6">
      <div className="flex justify-end">
        <button onClick={onClose} className="p-2">
          <X size={24} className="text-zinc-900" />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-8 mt-20">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="text-2xl font-semibold text-zinc-900 hover:text-emerald-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </motion.div>
);

// Navigation
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-zinc-900"
          >
            Eneji<span className="text-emerald-600">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="hidden sm:flex px-5 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Get in Touch
            </motion.a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2"
            >
              <Menu size={24} className="text-zinc-900" />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-zinc-50 to-white">
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-3xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[2px] bg-emerald-500" />
          <span className="text-emerald-600 font-medium">Hello, I'm</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6">
          {personalInfo.name}
        </motion.h1>

        <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl text-zinc-600 mb-8">
          {personalInfo.title}{" "}
          <span className="text-emerald-600">specializing in React & Python</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
          {personalInfo.description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-emerald-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-zinc-200 text-zinc-700 rounded-full font-medium hover:border-zinc-300 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12">
          <span className="text-sm text-zinc-400">Find me on</span>
          <div className="flex gap-4">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-emerald-500" />
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">
              Building digital products with passion and precision
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              {personalInfo.aboutDescription}
            </p>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              My goal is to build applications that not only work well but also delight users.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-900 text-zinc-900 rounded-full font-medium hover:bg-zinc-900 hover:text-white transition-all"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6">
            {[
              { value: "3+", label: "Years Experience", color: "emerald" },
              { value: "15+", label: "Projects Completed", color: "blue" },
              { value: "10+", label: "Happy Clients", color: "amber" },
              { value: "100%", label: "Satisfaction Rate", color: "rose" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 text-center hover:border-zinc-200 transition-colors"
              >
                <span className={`text-4xl font-bold text-${stat.color}-600`} style={{ color: stat.color === 'emerald' ? '#059669' : stat.color === 'blue' ? '#2563eb' : stat.color === 'amber' ? '#d97706' : '#e11d48' }}>
                  {stat.value}
                </span>
                <span className="block text-sm text-zinc-500 mt-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => {
  const categories = [
    { title: "Frontend Development", icon: Code2, skills: skills.frontend, color: "#059669" },
    { title: "Backend Development", icon: Database, skills: skills.backend, color: "#2563eb" },
    { title: "DevOps & Cloud", icon: Cloud, skills: skills.devops, color: "#7c3aed" },
  ];

  return (
    <section id="skills" className="py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-emerald-500" />
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Skills</span>
              <span className="w-8 h-[2px] bg-emerald-500" />
            </div>
            <h2 className="text-4xl font-bold text-zinc-900">Technical Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ title, icon: Icon, skills: skillList, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl border border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={28} style={{ color }} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-6">{title}</h3>
                <ul className="space-y-3">
                  {skillList.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3 text-zinc-600">
                      <CheckCircle size={16} style={{ color }} />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => (
  <section id="experience" className="py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-emerald-500" />
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Career</span>
            <span className="w-8 h-[2px] bg-emerald-500" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-900">Experience & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-emerald-500 rounded-full" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-emerald-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-zinc-900">{exp.title}</h4>
                    <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-zinc-500">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-zinc-900">{edu.title}</h4>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-zinc-600 mb-2">{edu.school}</p>
                  {edu.description && <p className="text-sm text-zinc-500">{edu.description}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section id="projects" className="py-32 bg-zinc-50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-emerald-500" />
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <span className="w-8 h-[2px] bg-emerald-500" />
          </div>
          <h2 className="text-4xl font-bold text-zinc-900">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all"
            >
              <div className="aspect-video overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x450/f4f4f5/059669?text=${encodeURIComponent(project.name)}`;
                  }}
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-500 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stacks.slice(0, 4).map((stack) => (
                    <span key={stack} className="px-3 py-1 bg-zinc-100 rounded-lg text-xs text-zinc-600">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
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
                      className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-800"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-32 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-emerald-500" />
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">Contact</span>
          <span className="w-8 h-[2px] bg-emerald-500" />
        </motion.div>

        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Let's Work Together
        </motion.h2>

        <motion.p variants={fadeUp} className="text-zinc-500 mb-12 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-medium flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
          >
            <Mail size={20} />
            {personalInfo.email}
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="w-full sm:w-auto px-8 py-4 border-2 border-zinc-200 text-zinc-700 rounded-full font-medium flex items-center justify-center gap-3 hover:border-zinc-300 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-zinc-100 bg-white">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
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
            className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// Main Component
const PortfolioV3 = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
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

export default PortfolioV3;
