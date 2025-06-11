export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'What services do you provide?',
    answer: 'I specialize in full-stack development, from creating responsive front-end interfaces to building robust back-end systems. My expertise includes web application development, API design, database architecture, and DevOps integration. I focus on delivering clean, maintainable code that solves real business problems.',
  },
  {
    question: 'How do I start working with you?',
    answer: 'The process begins with a consultation where we discuss your project needs, timeline, and budget. I\'ll then provide a detailed proposal outlining the scope, deliverables, and timeline. Once we agree on terms, I\'ll begin with the planning phase, providing regular updates throughout the development process. Contact me through the form below to schedule an initial consultation.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'I work with a variety of modern technologies depending on project requirements. On the frontend, I\'m proficient with React, TypeScript, and modern CSS frameworks. For backend development, I use Node.js, Python, and Java with various database solutions including PostgreSQL and MongoDB. I\'m also experienced with cloud platforms like AWS and Azure, and DevOps tools like Docker and Kubernetes.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple web application might take 4-6 weeks, while more complex systems could take 3-6 months. I provide detailed timelines during the proposal phase and maintain transparent communication throughout the project. I focus on delivering high-quality work rather than rushing to meet arbitrary deadlines.',
  },
  {
    question: 'Do you provide maintenance services?',
    answer: 'Yes, I offer ongoing maintenance and support services after project completion. This includes bug fixes, performance optimizations, security updates, and feature enhancements. I can provide either ad-hoc support or scheduled maintenance through a retainer agreement, ensuring your application remains up-to-date and secure.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I\'ve worked across various industries including finance, healthcare, e-commerce, education, and technology. My diverse experience allows me to understand different business domains and their unique technical requirements. This versatility helps me adapt quickly to new projects and provide industry-relevant solutions.',
  },
  {
    question: 'Do you offer code reviews or technical consulting?',
    answer: 'Yes, I offer code reviews and technical consulting services. Whether you need an expert opinion on your existing codebase, architecture recommendations, or guidance on technology selection, I can provide detailed analysis and actionable recommendations to improve your project\'s quality and performance.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer flexible pricing models including project-based fixed price quotes, hourly rates, and retainer agreements. Project-based pricing is determined by scope, complexity, and timeline. For ongoing work, I provide transparent hourly or monthly rates. I believe in providing fair, value-based pricing that reflects the quality of work delivered.',
  },
];