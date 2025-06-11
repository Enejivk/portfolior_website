import React from 'react';
import { CardListProps } from '../types';
import TextCard from './TextCard';

const CardList: React.FC<CardListProps> = ({ entries, expandedEntry, onCardClick }) => {
  if (expandedEntry) {
    return (
      <div className="h-full animate-fadeIn">
        <TextCard
          entry={expandedEntry}
          isExpanded={true}
          onCardClick={() => onCardClick(expandedEntry)}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {entries.map((entry) => (
        <TextCard
          key={entry.id}
          entry={entry}
          isExpanded={false}
          onCardClick={() => onCardClick(entry)}
        />
      ))}
    </div>
  );
};

export default CardList;