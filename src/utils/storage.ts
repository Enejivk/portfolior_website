import { TextEntry, Flashcard } from '../types';

// Generate a random id
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

// Get all entries from storage
export const getAllEntries = async (): Promise<TextEntry[]> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      resolve(result.textEntries || []);
    });
  });
};

// Save a new entry
export const saveEntry = async (entry: Omit<TextEntry, 'id' | 'date'>): Promise<TextEntry> => {
  const newEntry: TextEntry = {
    ...entry,
    id: generateId(),
    date: new Date().toISOString(),
    answers: Array(entry.questions.length).fill(''),
    flashcards: []
  };

  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      const entries = result.textEntries || [];
      const updatedEntries = [...entries, newEntry];
      
      chrome.storage.local.set({ textEntries: updatedEntries }, () => {
        resolve(newEntry);
      });
    });
  });
};

// Update an existing entry
export const updateEntry = async (updatedEntry: TextEntry): Promise<TextEntry> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      const entries = result.textEntries || [];
      const updatedEntries = entries.map((entry: TextEntry) => 
        entry.id === updatedEntry.id ? updatedEntry : entry
      );
      
      chrome.storage.local.set({ textEntries: updatedEntries }, () => {
        resolve(updatedEntry);
      });
    });
  });
};

// Delete an entry
export const deleteEntry = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      const entries = result.textEntries || [];
      const updatedEntries = entries.filter((entry: TextEntry) => entry.id !== id);
      
      chrome.storage.local.set({ textEntries: updatedEntries }, () => {
        resolve();
      });
    });
  });
};

// Update answer for a question
export const updateAnswer = async (entryId: string, questionIndex: number, answer: string): Promise<TextEntry> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      const entries = result.textEntries || [];
      const entryIndex = entries.findIndex((entry: TextEntry) => entry.id === entryId);
      
      if (entryIndex !== -1) {
        const entry = entries[entryIndex];
        const updatedAnswers = [...entry.answers];
        updatedAnswers[questionIndex] = answer;
        
        const updatedEntry = {
          ...entry,
          answers: updatedAnswers
        };
        
        const updatedEntries = [...entries];
        updatedEntries[entryIndex] = updatedEntry;
        
        chrome.storage.local.set({ textEntries: updatedEntries }, () => {
          resolve(updatedEntry);
        });
      }
    });
  });
};

// Update flashcards for an entry
export const updateFlashcards = async (entryId: string, flashcards: Flashcard[]): Promise<TextEntry> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(['textEntries'], (result) => {
      const entries = result.textEntries || [];
      const entryIndex = entries.findIndex((entry: TextEntry) => entry.id === entryId);
      
      if (entryIndex !== -1) {
        const entry = entries[entryIndex];
        const updatedEntry = {
          ...entry,
          flashcards
        };
        
        const updatedEntries = [...entries];
        updatedEntries[entryIndex] = updatedEntry;
        
        chrome.storage.local.set({ textEntries: updatedEntries }, () => {
          resolve(updatedEntry);
        });
      }
    });
  });
};