import React from 'react';
import { BookMarked, Bookmark, LayoutGrid } from 'lucide-react';
import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ subjects, selectedSubject, onSubjectSelect }) => {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white p-4">
      <div className="flex items-center space-x-2 pb-6">
        <BookMarked className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-900">Text Collector</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        <button
          onClick={() => onSubjectSelect(null)}
          className={`flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-left text-sm 
            ${!selectedSubject ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          <LayoutGrid size={18} />
          <span>All Collections</span>
        </button>
        
        {subjects.length > 0 && (
          <div className="pt-4">
            <h2 className="mb-2 px-3 text-xs font-semibold uppercase text-gray-500">
              Subjects
            </h2>
            <div className="space-y-1">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => onSubjectSelect(subject)}
                  className={`flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-left text-sm
                    ${selectedSubject === subject ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Bookmark size={18} />
                  <span>{subject}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      <div className="mt-auto rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
        <p>Select text (500+ words) on any webpage to save it for later.</p>
      </div>
    </div>
  );
};

export default Sidebar;