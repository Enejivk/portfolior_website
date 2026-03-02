import { motion } from "framer-motion";
import { personalInfo, skills, education, experience, projects } from "../data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  MousePointer2,
  Terminal,
  Palette,
  Rocket,
  Star,
} from "lucide-react";

// Animation variants
const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Bento Card Component
const BentoCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover="hover"
    variants={cardHover}
    className={`bg-zinc-900 border-2 border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

// Navigation
const Navigation = () => (
  <motion.nav
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
  >
    <div className="flex items-center gap-2 px-2 py-2 bg-zinc-900/90 backdrop-blur-xl border-2 border-zinc-800 rounded-full">
      {["About", "Skills", "Work", "Contact"].map((item, index) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            index === 0 ? "bg-lime-400 text-zinc-900" : "text-zinc-400 hover:text-white"
          }`}
        >
          {item}
        </motion.a>
      ))}
    </div>
  </motion.nav>
);

// Hero Section with Bento Grid
const HeroSection = () => (
  <section className="min-h-screen pt-28 pb-16 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[140px]">
        {/* Main Hero Card */}
        <BentoCard className="col-span-12 md:col-span-8 row-span-3 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-lime-400 text-sm font-medium">Available for hire</span>
            </motion.div>
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-lime-400">{personalInfo.name}</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 mt-6"
          >
            {personalInfo.title} — building modern web apps with React & Python
          </motion.p>
        </BentoCard>

        {/* Profile Card */}
        <BentoCard className="col-span-6 md:col-span-4 row-span-2 relative overflow-hidden" delay={0.1}>
          <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-emerald-500" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-zinc-900 flex items-center justify-center text-3xl md:text-4xl font-bold text-lime-400 border-4 border-zinc-900">
                EV
              </div>
              <p className="text-zinc-900 font-bold mt-3">{personalInfo.title}</p>
            </div>
          </div>
        </BentoCard>

        {/* Social Links */}
        <BentoCard className="col-span-6 md:col-span-4 row-span-1 p-6" delay={0.2}>
          <div className="h-full flex items-center justify-between">
            <span className="text-zinc-500">Connect</span>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:bg-zinc-700 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* CTA Card */}
        <BentoCard className="col-span-12 md:col-span-4 row-span-1" delay={0.3}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="h-full p-6 bg-lime-400 flex items-center justify-between"
          >
            <span className="text-zinc-900 font-bold text-lg">Let's work together</span>
            <ArrowUpRight size={24} className="text-zinc-900" />
          </motion.a>
        </BentoCard>

        {/* Stats Cards */}
        {[
          { value: "3+", label: "Years Exp", icon: Star },
          { value: "15+", label: "Projects", icon: Rocket },
        ].map((stat, index) => (
          <BentoCard key={stat.label} className="col-span-6 md:col-span-4 row-span-1 p-6" delay={0.4 + index * 0.1}>
            <div className="h-full flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-lime-400">{stat.value}</span>
                <span className="block text-sm text-zinc-500 mt-1">{stat.label}</span>
              </div>
              <stat.icon size={24} className="text-zinc-700" />
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <BentoCard className="col-span-12 md:col-span-8 row-span-2 p-8 md:p-12">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Turning coffee into code since 2020
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            {personalInfo.aboutDescription}
          </p>
          <p className="text-zinc-500 leading-relaxed">
            I specialize in building full-stack applications using React and Python, with a strong 
            focus on clean architecture and exceptional user experiences.
          </p>
        </BentoCard>

        <BentoCard className="col-span-6 md:col-span-4 row-span-1 p-6 bg-gradient-to-br from-violet-600 to-indigo-600 border-0">
          <div className="h-full flex flex-col justify-between">
            <Terminal size={32} className="text-white/80" />
            <div>
              <span className="text-white/60 text-sm">Stack</span>
              <p className="text-white font-bold">React + Python</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="col-span-6 md:col-span-4 row-span-1 p-6 bg-gradient-to-br from-rose-600 to-pink-600 border-0">
          <div className="h-full flex flex-col justify-between">
            <Palette size={32} className="text-white/80" />
            <div>
              <span className="text-white/60 text-sm">Focus</span>
              <p className="text-white font-bold">Full-Stack Dev</p>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textReveal}
        className="mb-12"
      >
        <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">Skills</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-4">
        {[
          { title: "Frontend", skills: skills.frontend, color: "lime", span: "col-span-12 md:col-span-4" },
          { title: "Backend", skills: skills.backend, color: "violet", span: "col-span-12 md:col-span-4" },
          { title: "DevOps", skills: skills.devops, color: "cyan", span: "col-span-12 md:col-span-4" },
        ].map(({ title, skills: skillList, color, span }, index) => (
          <BentoCard key={title} className={`${span} p-8`} delay={index * 0.1}>
            <div className={`text-${color}-400 font-bold mb-6`} style={{ color: color === 'lime' ? '#a3e635' : color === 'violet' ? '#a78bfa' : '#22d3ee' }}>
              {title}
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-zinc-800 rounded-xl text-sm font-medium text-zinc-300 hover:bg-zinc-700 transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
);

// Experience Section
const ExperienceSection = () => (
  <section className="py-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textReveal}
        className="mb-12"
      >
        <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">Journey</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Experience & Education</h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-4">
        {/* Experience */}
        <BentoCard className="col-span-12 lg:col-span-6 p-8">
          <h3 className="text-xl font-bold text-lime-400 mb-6 flex items-center gap-3">
            <MousePointer2 size={20} />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-white">{exp.title}</h4>
                    <p className="text-zinc-400 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </BentoCard>

        {/* Education */}
        <BentoCard className="col-span-12 lg:col-span-6 p-8">
          <h3 className="text-xl font-bold text-violet-400 mb-6 flex items-center gap-3">
            <Star size={20} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-white">{edu.title}</h4>
                    <p className="text-zinc-400 text-sm">{edu.school}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-violet-400/10 text-violet-400 rounded-full">
                    {edu.period}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-zinc-500 text-sm mt-2">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </BentoCard>
      </div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section id="work" className="py-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textReveal}
        className="mb-12"
      >
        <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Featured Work</h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-4">
        {projects.map((project, index) => (
          <BentoCard
            key={project.id}
            className={`${
              index === 0 ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-6 lg:col-span-4"
            } group`}
            delay={index * 0.1}
          >
            <div className="aspect-video overflow-hidden bg-zinc-800">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x450/18181b/a3e635?text=${encodeURIComponent(project.name)}`;
                }}
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-lime-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stacks.slice(0, 3).map((stack) => (
                  <span key={stack} className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">
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
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm font-medium text-lime-400"
                  >
                    <ExternalLink size={14} />
                    View
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-400"
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                )}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <BentoCard className="col-span-12 md:col-span-8 p-8 md:p-12">
          <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Let's build something <span className="text-lime-400">awesome</span> together
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl">
            Have a project in mind? Let's talk about how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-lime-400 text-zinc-900 rounded-xl font-bold flex items-center gap-3"
            >
              <Mail size={20} />
              {personalInfo.email}
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-zinc-800 rounded-xl font-bold flex items-center gap-3 hover:bg-zinc-700"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </BentoCard>

        <BentoCard className="col-span-12 md:col-span-4 p-0 overflow-hidden">
          <div className="h-full min-h-[200px] bg-gradient-to-br from-lime-400 via-emerald-400 to-cyan-400 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="text-7xl"
            >
              👋
            </motion.div>
          </div>
        </BentoCard>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-8 px-4 md:px-6 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-lime-400">EV</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-500 text-sm">© {new Date().getFullYear()} {personalInfo.name}</span>
      </div>
      <div className="flex gap-4">
        {[
          { icon: Github, href: personalInfo.github },
          { icon: Linkedin, href: personalInfo.linkedin },
          { icon: Mail, href: `mailto:${personalInfo.email}` },
        ].map(({ icon: Icon, href }) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            whileHover={{ y: -4 }}
            className="text-zinc-600 hover:text-lime-400 transition-colors"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

// Main Component
const PortfolioV4 = () => {
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

export default PortfolioV4;
