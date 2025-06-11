import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import { SavePopupProps } from '../types';
import { saveEntry } from '../utils/storage';
import { analyzeText } from '../utils/textAnalysis';

const SavePopup: React.FC<SavePopupProps> = ({ selection, onClose }) => {
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = async () => {
    if (selection && !isSaving) {
      setIsSaving(true);
      try {
        // Get the current tab's URL
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const url = tabs[0]?.url || '';
        
        // Analyze the text and generate metadata
        const textData = analyzeText(selection, url);
        
        // Save the entry
        await saveEntry(textData);
        
        // Close the popup
        onClose();
      } catch (error) {
        console.error('Error saving selection:', error);
      } finally {
        setIsSaving(false);
      }
    }
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50 w-80 animate-slideUp rounded-lg bg-white p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center text-lg font-semibold text-gray-900">
          <Save size={18} className="mr-2 text-blue-600" />
          Save Text
        </h3>
        <button
          onClick={onClose}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="mb-3 max-h-32 overflow-hidden rounded bg-gray-50 p-2 text-xs text-gray-600">
        {selection.substring(0, 150)}...
      </div>
      
      <div className="text-xs text-gray-500">
        <p>Words: ~{selection.split(/\s+/).length}</p>
      </div>
      
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors ${
            isSaving ? 'cursor-not-allowed opacity-70' : 'hover:bg-blue-700'
          }`}
        >
          {isSaving ? 'Saving...' : 'Save to Collection'}
        </button>
      </div>
    </div>
  );
};

export default SavePopup;