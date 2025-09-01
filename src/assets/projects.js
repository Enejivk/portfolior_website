// projects.js
import sountTubYoutubeAudioDownloader from "./sountTubYoutubeAudioDownloader.png";
import chatWithPdf from "./chatWithPdf.png";
import immigrationAiChat from "./immigrationaichat.png";
import noxMetal from "./NOX-METAL.png";

export const projects = [
  {
    id: 1,
    name: "NOX-METAL WAITLIST",
    image: noxMetal,
    description:
      "A premium waitlist system for a YC-backed startup that enhances user engagement through personalization.",
    longDescription:
      "Redesigned and implemented a premium, user-friendly waitlist system for a YC-backed startup. Unlike the previous version, which only captured emails, I enhanced the functionality to also collect users' names. This allowed for sending personalized email communications, improving engagement and creating a more professional user experience. The final solution was clean, modern, and aligned with the company's branding standards.",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Enhanced user data collection (names + emails)",
      "Sleek, animated UI with Framer Motion",
      "Modern, brand-aligned UI/UX design",
      "Improved conversion rate optimization",
      "Responsive design for all device sizes",
    ],
    challenges:
      "The main challenge was balancing the need for additional user information with maintaining a frictionless signup process. This was solved by implementing a thoughtful UI design with smooth animations and clear visual cues to guide users through the form while keeping it simple and approachable.",
    link: "https://nox-metal-waitlist.example.com",
    github: "https://github.com/yourusername/nox-metal-waitlist",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "Frontend",
  },
  {
    id: 2,
    name: "AI Chat Application for Immigrants",
    image: immigrationAiChat,
    description:
      "An AI-powered chat application designed to support immigrants with personalized, context-aware information.",
    longDescription:
      "Developed an AI-powered chat application designed specifically to support immigrants by providing personalized, context-aware responses. The system integrates real-time web search capabilities to deliver accurate and relevant information tailored to the unique challenges immigrants face, such as navigating local services, legal requirements, and cultural adaptation. This solution was one of the professional projects built for a company, showcasing the ability to design AI applications that combine natural language understanding, web integration, and user-centric design.",
    stacks: ["Python", "NLP", "React", "Node.js", "MongoDB", "OpenAI API"],
    features: [
      "Personalized, context-aware responses",
      "Real-time web search integration",
      "Information on local services and legal requirements",
      "Cultural adaptation assistance",
      "User-friendly interface designed for diverse users",
    ],
    challenges:
      "Creating an AI system that could understand the diverse and complex needs of immigrants while providing accurate, helpful information was challenging. This was addressed by implementing advanced natural language understanding and context retention capabilities, combined with reliable information sources.",
    link: "https://ai-immigration-assistant.example.com",
    github: "https://github.com/yourusername/immigration-ai-chat",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "AI",
  },
  {
    id: 3,
    name: "SountTub - YouTube Audio Downloader",
    image: sountTubYoutubeAudioDownloader,
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
      "The main challenge was handling large video files efficiently while ensuring a seamless user experience. This was solved by implementing optimized processing algorithms and leveraging AWS's scalable infrastructure.",
    link: "https://youtube-audio-downloader.example.com",
    github: "https://github.com/yourusername/youtube-audio-downloader",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "Fullstack",
  },
  {
    id: 4,
    name: "Chat with PDFs",
    image: chatWithPdf,
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
      "Implementing an effective way to extract and process PDF content for meaningful chat interactions was challenging. We solved this by creating a robust pipeline that combines document processing techniques with advanced AI capabilities.",
    link: "https://chat-with-pdfs.example.com",
    github: "https://github.com/yourusername/chat-with-pdfs",
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    category: "Fullstack",
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id));
};
