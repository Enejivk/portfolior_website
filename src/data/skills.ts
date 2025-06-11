export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  proficiency: number; // 0-100
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', proficiency: 95 },
      { name: 'TypeScript', proficiency: 92 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'Redux/Zustand', proficiency: 88 },
      { name: 'Vue.js', proficiency: 85 },
      { name: 'WebGL/Three.js', proficiency: 75 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js/Express', proficiency: 94 },
      { name: 'Python/Django', proficiency: 88 },
      { name: 'Java/Spring Boot', proficiency: 85 },
      { name: 'GraphQL', proficiency: 87 },
      { name: 'Microservices', proficiency: 86 },
      { name: 'WebSockets', proficiency: 82 },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', proficiency: 92 },
      { name: 'MongoDB', proficiency: 90 },
      { name: 'Redis', proficiency: 85 },
      { name: 'AWS Services', proficiency: 88 },
      { name: 'Docker/K8s', proficiency: 86 },
      { name: 'Firebase', proficiency: 84 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git/GitHub', proficiency: 95 },
      { name: 'CI/CD Pipelines', proficiency: 88 },
      { name: 'Jest/Testing', proficiency: 90 },
      { name: 'Linux/Shell', proficiency: 85 },
      { name: 'Monitoring', proficiency: 82 },
      { name: 'Security', proficiency: 84 },
    ],
  },
];