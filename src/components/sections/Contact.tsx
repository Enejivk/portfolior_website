import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-950 opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">(+1) 555-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-400">Mon - Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-900/20 border border-green-800 text-green-500 rounded-md p-4 mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="mt-1">I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-700'
                      } rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${
                      formErrors.subject ? 'border-red-500' : 'border-gray-700'
                    } rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send size={18} />}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;