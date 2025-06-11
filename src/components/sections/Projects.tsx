import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };
  
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
    
    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe project cards
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, [displayedProjects]);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-950 opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills and expertise.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => {
                setFilter('all');
                setVisibleProjects(3);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => {
                setFilter('featured');
                setVisibleProjects(3);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card opacity-0 transition-all duration-700 ease-in-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card hoverEffect>
                {project.imageUrl && (
                  <Card.Image src={project.imageUrl} alt={project.title} />
                )}
                <Card.Content>
                  <div className="flex items-start justify-between mb-3">
                    <Card.Title>{project.title}</Card.Title>
                    <project.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <Card.Description>{project.description}</Card.Description>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Content>
                <Card.Footer>
                  <div className="flex justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center"
                      >
                        <Github size={18} className="mr-1" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={18} className="ml-1" />
                      </a>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;