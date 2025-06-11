import { Code, Database, Globe, Layout, Terminal, GitBranch } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: any;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with inventory management, payment processing, and customer analytics.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    imageUrl: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce',
    icon: Globe,
    featured: true,
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard displaying real-time analytics with customizable charts and reporting features.',
    technologies: ['D3.js', 'React', 'TypeScript', 'Firebase', 'Material UI'],
    imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/dashboard',
    githubUrl: 'https://github.com/username/dashboard',
    icon: Database,
    featured: true,
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by machine learning that provides customer support and information retrieval.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSockets'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/chatbot',
    githubUrl: 'https://github.com/username/chatbot',
    icon: Terminal,
    featured: true,
  },
  {
    id: 'mobile-app',
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.',
    technologies: ['React Native', 'Redux', 'Node.js', 'GraphQL', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/fitness-app',
    githubUrl: 'https://github.com/username/fitness-app',
    icon: Layout,
    featured: false,
  },
  {
    id: 'blockchain',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform built on blockchain technology with identity verification.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/voting',
    githubUrl: 'https://github.com/username/voting',
    icon: Code,
    featured: false,
  },
  {
    id: 'devops-toolkit',
    title: 'DevOps Automation Toolkit',
    description: 'Collection of tools for CI/CD pipelines, infrastructure as code, and automated testing frameworks.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/devops',
    githubUrl: 'https://github.com/username/devops',
    icon: GitBranch,
    featured: false,
  },
];