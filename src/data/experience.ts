export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Tech Innovations Inc.',
    position: 'Senior Software Engineer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Leading development of cloud-based enterprise solutions for Fortune 500 clients.',
    achievements: [
      'Architected and implemented a microservices platform that reduced system downtimes by 75%',
      'Led a team of 5 engineers in delivering critical features ahead of schedule',
      'Implemented CI/CD pipelines that decreased deployment times by 60%',
      'Mentored junior developers through code reviews and pair programming sessions',
    ],
  },
  {
    company: 'DataSphere Solutions',
    position: 'Software Engineer',
    startDate: 'Mar 2019',
    endDate: 'Dec 2021',
    description: 'Developed data visualization tools and analytics platforms for business intelligence.',
    achievements: [
      'Built real-time analytics dashboard used by over 10,000 daily active users',
      'Optimized database queries resulting in 40% faster application performance',
      'Collaborated with UX team to improve user interfaces based on customer feedback',
      'Implemented automated testing that caught 95% of bugs before production',
    ],
  },
  {
    company: 'CodeCraft Studios',
    position: 'Frontend Developer',
    startDate: 'Jun 2017',
    endDate: 'Feb 2019',
    description: 'Created responsive web applications and user interfaces for various client projects.',
    achievements: [
      'Developed mobile-first responsive designs for 15+ client websites',
      'Reduced load times by 35% through code optimization and asset management',
      'Implemented accessibility features meeting WCAG 2.1 standards',
      'Contributed to open-source libraries used within the company',
    ],
  },
  {
    company: 'Nexus Software Labs',
    position: 'Junior Developer',
    startDate: 'Aug 2015',
    endDate: 'May 2017',
    description: 'Assisted in development of web applications and internal tools.',
    achievements: [
      'Built internal tool that automated reporting processes saving 10+ hours weekly',
      'Participated in agile development cycles with daily standups and sprint planning',
      'Learned and implemented new technologies to improve legacy systems',
      'Fixed over 200 bugs in existing codebase',
    ],
  },
];