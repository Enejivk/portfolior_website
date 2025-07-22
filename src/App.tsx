import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import VideoPresentation from './components/sections/VideoPresentation';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';


function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'DevPortfolio | Software Engineer';

    // Custom cursor - add for desktop only
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      
      const cursorDot = document.createElement('div');
      cursorDot.className = 'cursor-dot';
      document.body.appendChild(cursorDot);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
      
      // Add hover effect for links and buttons
      const handleMouseEnter = () => {
        cursor.classList.add('cursor-expanded');
      };
      
      const handleMouseLeave = () => {
        cursor.classList.remove('cursor-expanded');
      };
      
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      
      // Cleanup
      return () => {
        document.body.removeChild(cursor);
        document.body.removeChild(cursorDot);
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);
  
  return (
    <div className="bg-gray-950 min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <About />
      <VideoPresentation />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;