import sountTubImg from "../assets/sountTubYoutubeAudioDownloader.png";
import chatWithPdfImg from "../assets/chatWithPdf.png";
import immigrationAiImg from "../assets/immigrationaichat.png";
import errlineImg from "../assets/Hero section.jpg";

// Portfolio Data
export const personalInfo = {
  name: "Eneji Victor",
  title: "Frontend Engineer (React Developer)",
  roles: [
    "React Developer",
    "Frontend Engineer",
    "TypeScript Developer",
    "UI Engineer",
  ],
  description:
    "React Developer with 4+ years building modern, responsive web applications — dashboards, portals, and enterprise systems",
  aboutDescription:
    "Performance-driven Frontend Engineer skilled in scalable front-end architecture, reusable components, and RESTful API integration. Focused on usability, speed, and maintainability.",
  email: "enejivic@gmail.com",
  phone: "+2347062166635",
  location: "Enugu, Nigeria",
  linkedin: "https://www.linkedin.com/in/enejivic/",
  github: "https://github.com/Enejivk",
};

export const skills = {
  frontend: [
    { name: "React.js", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Next.js", icon: "nextjs" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Bootstrap", icon: "bootstrap" },
  ],
  stateManagement: [
    { name: "React Hooks", icon: "react" },
    { name: "Context API", icon: "react" },
    { name: "Redux", icon: "redux" },
  ],
  tools: [
    { name: "RESTful APIs", icon: "api" },
    { name: "Git", icon: "git" },
    { name: "Postman", icon: "postman" },
    { name: "JSON", icon: "json" },
  ],
  // Backward-compatible aliases for other variants
  backend: [
    { name: "RESTful APIs", icon: "api" },
    { name: "Redux", icon: "redux" },
    { name: "Context API", icon: "react" },
    { name: "React Hooks", icon: "react" },
  ],
  devops: [
    { name: "Git", icon: "git" },
    { name: "Postman", icon: "postman" },
    { name: "JSON", icon: "json" },
  ],
};

export const education = [
  {
    title: "B.Sc. Computer Science",
    school: "Cross River State University of Technology",
    description: "",
    period: "",
  },
];

export const certifications = [
  "ALX Software Engineering Program",
  "freeCodeCamp – Responsive Web Design",
  "freeCodeCamp – JavaScript Algorithms and Data Structures",
];

export const experience = [
  {
    title: "React Developer / Frontend Engineer",
    company: "JustiGuide",
    description:
      "Built AI chat interface, document management dashboard, task management system, and AI-powered form auto-fill. Integrated RESTful APIs, optimized performance, and ensured responsive design across all devices.",
    period: "Jul 2024 – Present",
  },
  {
    title: "Frontend Engineer (React Developer)",
    company: "Ecobank",
    description:
      "Developed internal loan eligibility platform UI. Built dashboards displaying customer financial data — balances, transactions, salary inflow. Integrated real-time APIs for eligibility results and risk indicators.",
    period: "Aug 2023 – Jun 2024",
  },
  {
    title: "React Developer / Frontend Engineer",
    company: "Sentinel",
    description:
      "Built client and service provider dashboard for project management and payment verification. Implemented auth and role-based access UI. Managed state with Hooks, Context API, and Redux.",
    period: "Feb 2022 – Jul 2023",
  },
];

export const openSource = [
  {
    project: "Bubble.AI",
    role: "Frontend Contributor",
    period: "Dec 2025",
    description:
      "Improved responsive design across devices. Implemented text-to-speech interface for voice interaction.",
  },
  {
    project: "Zulip",
    role: "Frontend Contributor",
    period: "Nov 2025",
    description:
      "Improved UI layout for message features. Updated role-based UI behavior for cleaner interfaces.",
  },
  {
    project: "Cap",
    role: "Frontend Contributor",
    period: "Sept 2025",
    description:
      "Fixed overlap and spacing issues. Enhanced timeline editor with precision controls and visual feedback.",
  },
];

export const projects = [
  {
    id: 0,
    name: "Errline - Domestic Flight Booking Platform",
    image: errlineImg,
    description:
      "A Nigerian domestic flight booking platform that lets users compare prices, discover routes, and book affordable local flights from trusted airlines.",
    longDescription:
      "Errline is a domestic flight booking platform designed to simplify air travel across Nigeria. Users can compare fares from every major Nigerian airline in one place, discover popular routes, and book flights in under 3 minutes. The platform features a smart flight search engine with one-way booking, passenger management, transparent pricing with full tax breakdowns, flash sale promotions, and an upcoming mobile app for iOS and Android. Built with a modern Next.js stack for performance and SEO optimization.",
    stacks: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    features: [
      "Flight search and price comparison across Nigerian airlines",
      "Popular route discovery with fare previews",
      "Transparent pricing with tax and fee breakdowns",
      "Flash sale promotions and special offers",
      "Instant booking confirmation in under 3 minutes",
      "Newsletter subscription for deal alerts",
      "Mobile app coming soon (iOS & Android)",
    ],
    challenges:
      "Building a responsive, high-performance flight search and comparison engine that aggregates real-time fares from multiple Nigerian airlines while maintaining a seamless user experience and transparent pricing.",
    link: "https://errline.com/home",
    github: "",
    videoDemo: "",
    category: "Web Development",
  },
  {
    id: 0,
    name: "Blockchair Website & AI Integration",
    image:
      "https://www.ablyazov.dev/_next/image?url=%2Fblockchair.webp&w=3840&q=75",
    description:
      "Led the redesign of blockchair.com and developed innovative features including a Telegram mini-app and AI playground for blockchain data analysis.",
    longDescription:
      "As part of a four-member team, spearheaded the complete redesign and optimization of blockchair.com, a high-traffic blockchain explorer serving over 3 million unique monthly visitors. The project encompassed a full rewrite using PHP/Laravel/Blade stack, development of a React-based Telegram mini-app for native crypto wallet integration, and creation of an AI playground showcasing our in-house LLM's capabilities with real-time blockchain data.",
    stacks: [
      "PHP",
      "Laravel",
      "Blade",
      "React",
      "AI/LLM Integration",
      "Telegram Bot API",
      "Blockchain",
    ],
    features: [
      "Complete website redesign and optimization",
      "Telegram mini-app for native crypto wallet integration",
      "AI playground with real-time blockchain data",
      "High-traffic infrastructure (3M+ monthly visitors)",
      "In-house LLM integration",
      "Business demo tooling",
    ],
    challenges:
      "The main challenge was maintaining high performance and reliability while serving millions of monthly visitors and processing real-time blockchain data. This was achieved through careful optimization of the Laravel stack and implementation of efficient caching strategies.",
    link: "https://blockchair.com/",
    github: "",
    videoDemo: "",
    category: "Web Development & AI",
  },
  {
    id: 2,
    name: "AI Chat Application for Immigrants",
    image: immigrationAiImg,
    description:
      "An AI-powered chat application designed to support immigrants with personalized, context-aware information.",
    longDescription:
      "Developed an AI-powered chat application designed specifically to support immigrants by providing personalized, context-aware responses. The system integrates real-time web search capabilities to deliver accurate and relevant information tailored to the unique challenges immigrants face, such as navigating local services, legal requirements, and cultural adaptation.",
    stacks: ["Python", "NLP", "React", "Node.js", "MongoDB", "OpenAI API"],
    features: [
      "Personalized, context-aware responses",
      "Real-time web search integration",
      "Information on local services and legal requirements",
      "Cultural adaptation assistance",
      "User-friendly interface designed for diverse users",
    ],
    challenges:
      "Creating an AI system that could understand the diverse and complex needs of immigrants while providing accurate, helpful information. Addressed by implementing advanced natural language understanding and context retention capabilities.",
    link: "",
    github: "",
    videoDemo:
      "https://drive.google.com/file/d/1vEJMNHkfj-04qQCkWUcmGg53vy2JcYIR/preview",
    category: "AI",
  },
  {
    id: 3,
    name: "SountTub - YouTube Audio Downloader",
    image: sountTubImg,
    description:
      "A full-stack application that converts YouTube videos into downloadable audio files.",
    longDescription:
      "SountTub is a full-stack application that allows users to convert YouTube videos into downloadable audio files with a simple paste-link-and-download experience. The backend efficiently handles requests and processes large video files, while the clean Solid.js frontend provides an intuitive user interface.",
    stacks: ["Solid.js", "Tailwind CSS", "FastAPI", "AWS EC2", "AWS S3"],
    features: [
      "Simple paste-link-and-download experience",
      "Efficient processing of large video files",
      "Clean and responsive user interface",
      "Secure file storage on AWS S3",
      "Scalable infrastructure for high availability",
    ],
    challenges:
      "The main challenge was handling large video files efficiently while ensuring a seamless user experience. Solved by implementing optimized processing algorithms and leveraging AWS's scalable infrastructure.",
    link: "",
    github: "https://github.com/Enejivk/soundTube_frontend.git",
    videoDemo:
      "https://drive.google.com/file/d/1p3Isdv7Um8Ibczxjc62sVYP5FT9Jimgo/preview",
    category: "Fullstack",
  },
  {
    id: 4,
    name: "Chat with PDFs",
    image: chatWithPdfImg,
    description:
      "A full-stack application that enables users to upload PDFs and chat with their content.",
    longDescription:
      "Chat with PDFs is an innovative application that enhances document accessibility by allowing users to upload PDFs and interact with their content through a chat interface. The app features secure authentication with Google, JWT session management, and leverages OpenAI API and ChromaDB for advanced chat interactions.",
    stacks: [
      "React",
      "FastAPI",
      "Tailwind CSS",
      "JWT",
      "SQLite",
      "OpenAI API",
      "ChromaDB",
    ],
    features: [
      "Secure authentication with Google",
      "Session management using JWT",
      "Advanced chat interactions with PDF content",
      "Document upload and management",
      "Integration with OpenAI API and ChromaDB",
    ],
    challenges:
      "Implementing an effective way to extract and process PDF content for meaningful chat interactions. Solved by creating a robust pipeline that combines document processing techniques with advanced AI capabilities.",
    link: "",
    github: "https://github.com/Enejivk/chatwithpdf.git",
    videoDemo:
      "https://drive.google.com/file/d/1bwoSbHLFIccWxS-oqCDyg7yBSHLouuUC/preview",
    category: "Fullstack",
  },
];

export const navItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];
