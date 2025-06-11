import React from 'react';
import { BookOpen } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex h-80 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center">
      <BookOpen className="mb-3 h-12 w-12 text-gray-400" />
      <h3 className="mb-1 text-lg font-medium text-gray-900">No saved content</h3>
      <p className="max-w-md text-sm text-gray-500">
        Highlight text (500+ words) on any webpage and save it to your collection.
        Your saved content will appear here.
      </p>
    </div>
  );
};

export default EmptyState;