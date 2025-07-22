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
      { name: 'React', proficiency: 95 },
      { name: 'TypeScript', proficiency: 92 },
      { name: 'Tailwind CSS', proficiency: 70 },
      { name: 'Redux/Zustand', proficiency: 88 }
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js/Express', proficiency: 94 },
      { name: 'Python/Fastapi', proficiency: 88 },
      { name: 'Microservices', proficiency: 86 },
      { name: 'WebSockets', proficiency: 82 },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', proficiency: 92 },
      { name: 'Redis', proficiency: 85 },
      { name: 'AWS Services', proficiency: 88 },
      { name: 'Docker/K8s', proficiency: 86 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git/GitHub', proficiency: 95 },
      { name: 'CI/CD Pipelines', proficiency: 88 },
      { name: 'Jest/Testing', proficiency: 90 },
      { name: 'Linux/Shell', proficiency: 85 },
    ],
  },
];