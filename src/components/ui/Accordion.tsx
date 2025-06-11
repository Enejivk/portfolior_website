import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) onToggle();
  };

  return (
    <div className={`border-b border-gray-800 ${className}`}>
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={handleToggle}
        aria-expanded={isExpanded}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        <span className="ml-4 flex-shrink-0 text-gray-400">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2 px-4 text-gray-400">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return <div className={`rounded-lg overflow-hidden ${className}`}>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;