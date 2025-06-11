import React from 'react';
import { Code, Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-white font-bold text-xl">DevPortfolio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building innovative solutions with clean, efficient code and thoughtful user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Experience</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@example.com" className="text-blue-500 hover:text-blue-400">contact@example.com</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Location:</span>
                <span>San Francisco, CA</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Availability:</span>
                <span className="text-green-500">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} DevPortfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;