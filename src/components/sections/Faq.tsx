import React, { useEffect, useRef, useState } from 'react';
import { HelpCircle, Send, Search, Brain, Lightbulb, Image } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { profile } from '../../data/profile';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const suggestedPrompts = [
  "Tell me about your skills",
  "What's your work experience?",
  "What technologies do you use?",
  "How do you handle project management?",
  "What's your development process?",
  "Tell me about your biggest project"
];

const Faq: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      content: 'Hi! I\'m an AI assistant that can tell you about my skills, experience, and work process. Feel free to ask anything or try one of the suggested prompts below!' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  const generateResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();
    
    if (normalizedQuery.includes('skill') || normalizedQuery.includes('can you do')) {
      return profile.skills.summary;
    }
    
    if (normalizedQuery.includes('experience') || normalizedQuery.includes('work')) {
      return profile.experience.summary;
    }
    
    if (normalizedQuery.includes('about') || normalizedQuery.includes('who') || normalizedQuery.includes('background')) {
      return profile.summary;
    }
    
    return "I can tell you about my skills, experience, or background. What would you like to know?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };
  
  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 bg-gray-900 opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center text-blue-500 mb-4">
                <HelpCircle size={24} className="mr-2" />
                <span className="text-sm font-medium uppercase tracking-wider">Chat Assistant</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ask Me Anything</h2>
              <p className="text-gray-400 mb-8">
                Have questions about my experience, skills, or work process? Chat with my AI assistant to learn more!
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              {/* Chat interface */}
              <div className="flex flex-col h-[600px]">
                {/* Message area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 text-gray-200'
                        }`}
                      >
                        <ReactMarkdown className="prose prose-invert prose-sm">
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-gray-200 rounded-lg p-3">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested prompts */}
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {suggestedPrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => handlePromptClick(prompt)}
                        className="text-sm bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input area */}
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything..."
                        className="w-full bg-gray-800 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                        <button type="button" className="p-1 text-gray-400 hover:text-gray-300">
                          <Search size={18} />
                        </button>
                        <button type="button" className="p-1 text-gray-400 hover:text-gray-300">
                          <Brain size={18} />
                        </button>
                        <button type="button" className="p-1 text-gray-400 hover:text-gray-300">
                          <Lightbulb size={18} />
                        </button>
                        <button type="button" className="p-1 text-gray-400 hover:text-gray-300">
                          <Image size={18} />
                        </button>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;