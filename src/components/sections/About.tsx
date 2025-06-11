import React, { useEffect, useRef } from 'react';
import { Code, GitBranch, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-[rgb(2,6,15)] opacity-0 transition-opacity duration-700 ease-in-out relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-purple-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* Replace the URL with your actual photo */}
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-1 -left-1 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-0 right-0 lg:-right-8 bg-gray-800 p-3 rounded-full shadow-lg transform rotate-12">
              <Code className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute bottom-8 -left-4 bg-gray-800 p-3 rounded-full shadow-lg transform -rotate-12">
              <GitBranch className="w-6 h-6 text-purple-500" />
            </div>
            <div className="absolute top-1/2 -right-6 bg-gray-800 p-3 rounded-full shadow-lg">
              <Coffee className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a passionate Software Engineer with a deep love for creating elegant solutions to complex problems. With expertise in full-stack development, I specialize in building scalable web applications that make a real impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-white font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">7+ Years</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-white font-semibold mb-2">Projects</h3>
                <p className="text-gray-400">50+ Completed</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <h3 className="text-white font-semibold mb-2">Availability</h3>
                <p className="text-green-500">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;