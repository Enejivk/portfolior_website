import React, { useState, useEffect } from 'react';
import { Plus, Palette } from 'lucide-react';
import { TabsProps, Flashcard } from '../types';
import { updateAnswer, updateFlashcards } from '../utils/storage';
import { generateFlashcardsFromText } from '../utils/textAnalysis';

const COLORS = [
  'bg-blue-100 hover:bg-blue-200',
  'bg-green-100 hover:bg-green-200',
  'bg-purple-100 hover:bg-purple-200',
  'bg-pink-100 hover:bg-pink-200',
  'bg-yellow-100 hover:bg-yellow-200',
  'bg-orange-100 hover:bg-orange-200',
];

interface ExtendedTabsProps extends TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CardTabs: React.FC<ExtendedTabsProps> = ({ entry, activeTab, onTabChange }) => {
  const [answers, setAnswers] = useState<string[]>(entry.answers || []);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(entry.flashcards || []);
  const [isFlipped, setIsFlipped] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (flashcards.length === 0) {
      const generatedCards = generateFlashcardsFromText(entry.content);
      setFlashcards(generatedCards);
      updateFlashcards(entry.id, generatedCards);
    }
  }, [entry.content, entry.id, flashcards.length]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    updateAnswer(entry.id, index, value);
  };

  const generateFlashcard = () => {
    const newFlashcard: Flashcard = {
      id: Math.random().toString(36).substring(2),
      front: 'Front of card',
      back: 'Back of card',
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    const updatedFlashcards = [...flashcards, newFlashcard];
    setFlashcards(updatedFlashcards);
    updateFlashcards(entry.id, updatedFlashcards);
  };

  const updateFlashcard = (id: string, field: 'front' | 'back', value: string) => {
    const updatedFlashcards = flashcards.map(card =>
      card.id === id ? { ...card, [field]: value } : card
    );
    setFlashcards(updatedFlashcards);
    updateFlashcards(entry.id, updatedFlashcards);
  };

  const changeFlashcardColor = (id: string) => {
    const updatedFlashcards = flashcards.map(card => {
      if (card.id === id) {
        const currentIndex = COLORS.indexOf(card.color);
        const nextIndex = (currentIndex + 1) % COLORS.length;
        return { ...card, color: COLORS[nextIndex] };
      }
      return card;
    });
    setFlashcards(updatedFlashcards);
    updateFlashcards(entry.id, updatedFlashcards);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200">
        <nav className="-mb-px flex space-x-4">
          <button
            onClick={() => onTabChange('content')}
            className={`pb-2 pt-1 px-1 text-sm font-medium ${
              activeTab === 'content'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Content
          </button>
          <button
            onClick={() => onTabChange('summary')}
            className={`pb-2 pt-1 px-1 text-sm font-medium ${
              activeTab === 'summary'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => onTabChange('quiz')}
            className={`pb-2 pt-1 px-1 text-sm font-medium ${
              activeTab === 'quiz'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Quiz
          </button>
          <button
            onClick={() => onTabChange('flashcards')}
            className={`pb-2 pt-1 px-1 text-sm font-medium ${
              activeTab === 'flashcards'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Flashcards
          </button>
        </nav>
      </div>

      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        {activeTab === 'content' && (
          <div className="text-sm leading-relaxed text-gray-700">
            {entry.content}
          </div>
        )}

        {activeTab === 'summary' && (
          <div className="text-sm leading-relaxed text-gray-700">
            <p>{entry.summary}</p>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-4">
            {entry.questions.map((question, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-3">
                <p className="mb-2 text-sm font-medium text-gray-800">{question}</p>
                <textarea
                  value={answers[index] || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  placeholder="Write your answer here..."
                  className="w-full resize-none rounded border border-gray-300 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  rows={3}
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'flashcards' && (
          <div className="space-y-4">
            <div className="flex justify-between">
              <button
                onClick={generateFlashcard}
                className="flex items-center space-x-1 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                <Plus size={16} />
                <span>Add Flashcard</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {flashcards.map((card) => (
                <div
                  key={card.id}
                  className={`group relative min-h-[200px] cursor-pointer rounded-xl p-6 ${card.color} transition-all duration-300`}
                  onClick={() => setIsFlipped({ ...isFlipped, [card.id]: !isFlipped[card.id] })}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      changeFlashcardColor(card.id);
                    }}
                    className="absolute right-2 top-2 rounded-full p-1 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Palette size={16} />
                  </button>
                  <div className="relative h-full perspective-1000">
                    <div
                      className={`backface-hidden absolute inset-0 transform transition-all duration-300 ${
                        isFlipped[card.id] ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'
                      }`}
                    >
                      <textarea
                        value={card.front}
                        onChange={(e) => updateFlashcard(card.id, 'front', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Front of card"
                        className="h-full w-full resize-none bg-transparent text-center text-lg focus:outline-none"
                      />
                    </div>
                    <div
                      className={`backface-hidden absolute inset-0 transform transition-all duration-300 ${
                        isFlipped[card.id] ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'
                      }`}
                    >
                      <textarea
                        value={card.back}
                        onChange={(e) => updateFlashcard(card.id, 'back', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Back of card"
                        className="h-full w-full resize-none bg-transparent text-center text-lg focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTabs;