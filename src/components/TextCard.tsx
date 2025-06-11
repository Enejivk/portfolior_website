import React from 'react';
import { Calendar, ExternalLink, X, BookOpen, Brain, Car as Cards } from 'lucide-react';
import { CardProps } from '../types';
import CardTabs from './CardTabs';

interface TextCardProps extends CardProps {
  isExpanded: boolean;
  onCardClick: () => void;
}

const TextCard: React.FC<TextCardProps> = ({ entry, isExpanded, onCardClick }) => {
  const [activeTab, setActiveTab] = React.useState('content');
  
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleTabClick = (tab: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExpanded) {
      onCardClick();
    }
    setActiveTab(tab);
  };

  if (isExpanded) {
    return (
      <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-lg">
        <div className="flex items-start justify-between border-b border-gray-100 p-4">
          <div>
            <div className="mb-2 flex items-center space-x-2">
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                {entry.subject}
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <Calendar size={12} className="mr-1" />
                {formattedDate}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{entry.title}</h2>
            {entry.source && (
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <ExternalLink size={12} className="mr-1" />
                <span className="truncate">{entry.source}</span>
              </div>
            )}
          </div>
          <button
            onClick={onCardClick}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <CardTabs entry={entry} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
          {entry.subject}
        </span>
        <div className="flex items-center text-xs text-gray-500">
          <Calendar size={12} className="mr-1" />
          {formattedDate}
        </div>
      </div>
      <div onClick={onCardClick} className="cursor-pointer">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">{entry.title}</h2>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">{entry.summary}</p>
        {entry.source && (
          <div className="flex items-center text-xs text-gray-500">
            <ExternalLink size={12} className="mr-1" />
            <span className="truncate">{entry.source}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-end space-x-2 border-t border-gray-100 pt-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <button
          onClick={(e) => handleTabClick('content', e)}
          className="flex items-center space-x-1 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100"
        >
          <BookOpen size={14} />
          <span>Read</span>
        </button>
        <button
          onClick={(e) => handleTabClick('quiz', e)}
          className="flex items-center space-x-1 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100"
        >
          <Brain size={14} />
          <span>Quiz</span>
        </button>
        <button
          onClick={(e) => handleTabClick('flashcards', e)}
          className="flex items-center space-x-1 rounded-lg px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100"
        >
          <Cards size={14} />
          <span>Cards</span>
        </button>
      </div>
    </div>
  );
};

export default TextCard;