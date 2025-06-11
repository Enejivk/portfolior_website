import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            
            // Animate skill bars when section is visible
            if (entry.target === sectionRef.current) {
              skillBarsRef.current.forEach(bar => {
                if (bar) {
                  bar.style.width = bar.dataset.width || '0%';
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-[rgb(10,15,25)] opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-[rgb(15,23,42)] p-6 rounded-lg border border-gray-800 shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-2.5 overflow-hidden">
                      <div
                        ref={el => skillBarsRef.current[categoryIndex * 10 + skillIndex] = el}
                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: '0%',
                          backgroundColor: getSkillColor(skill.proficiency),
                          boxShadow: `0 0 10px ${getSkillColor(skill.proficiency)}`,
                        }}
                        data-width={`${skill.proficiency}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
            <p className="text-gray-400">Other technologies and tools I'm proficient with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'GitHub Actions', 'Jest', 'Webpack', 
              'VS Code', 'Storybook', 'Figma', 'Linux', 'REST APIs', 'GraphQL'
            ].map((tool) => (
              <div 
                key={tool}
                className="px-4 py-2 bg-[rgb(15,23,42)] text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-default border border-gray-800"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill bar colors based on proficiency
const getSkillColor = (proficiency: number): string => {
  if (proficiency >= 90) return '#22c55e'; // green
  if (proficiency >= 80) return '#3b82f6'; // blue
  if (proficiency >= 70) return '#8b5cf6'; // purple
  if (proficiency >= 60) return '#f59e0b'; // amber
  return '#ef4444'; // red
};

export default Skills;