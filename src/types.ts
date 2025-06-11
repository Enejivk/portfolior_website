import React from 'react';

export interface TextEntry {
  id: string;
  title: string;
  content: string;
  subject: string;
  summary: string;
  questions: string[];
  answers: string[];
  source: string;
  date: string;
  flashcards?: Flashcard[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  color: string;
}

export interface CardProps {
  entry: TextEntry;
}

export interface SidebarProps {
  subjects: string[];
  selectedSubject: string | null;
  onSubjectSelect: (subject: string | null) => void;
}

export interface CardListProps {
  entries: TextEntry[];
  expandedEntry: TextEntry | null;
  onCardClick: (entry: TextEntry) => void;
}

export interface SavePopupProps {
  selection: string;
  onClose: () => void;
}

export interface TabsProps {
  entry: TextEntry;
}