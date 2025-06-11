import React, { useEffect, useRef } from 'react';
import { experiences } from '../../data/experience';
import { Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    timelineItemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-950 opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in the software industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-700 pl-8 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.position}`}
                ref={el => timelineItemsRef.current[index] = el}
                className="mb-12 relative opacity-0 transition-all duration-700 ease-in-out"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-900"></div>
                
                {/* Date badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{exp.startDate} — {exp.endDate}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                <p className="text-blue-500 font-medium mb-4">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <Award size={16} className="mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;