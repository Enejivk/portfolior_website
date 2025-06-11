import { Flashcard, Category } from '../types/flashcard';

export const categories: Category[] = [
  { id: '1', name: 'All' },
  { id: '2', name: 'JavaScript' },
  { id: '3', name: 'React Native' },
  { id: '4', name: 'CSS' },
  { id: '5', name: 'Python' },
  { id: '6', name: 'History' },
  { id: '7', name: 'Science' },
];

export const flashcards: Flashcard[] = [
  {
    id: '1',
    title: 'JavaScript Array Methods',
    content: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    category: 'JavaScript',
    hasCode: true,
    codeBlock: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// doubled: [2, 4, 6, 8, 10]`,
    likes: 127,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '2',
    title: 'React Hooks',
    content: 'useState is a Hook that lets you add React state to function components. It returns a stateful value and a function to update it.',
    category: 'React Native',
    hasCode: true,
    codeBlock: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
    likes: 236,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '3',
    title: 'CSS Flexbox',
    content: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.',
    category: 'CSS',
    hasCode: true,
    codeBlock: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}`,
    likes: 189,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '4',
    title: 'Python List Comprehension',
    content: 'List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.',
    category: 'Python',
    hasCode: true,
    codeBlock: `# Create a list of squares
squares = [x**2 for x in range(10)]
# Result: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Filter even numbers
even_numbers = [x for x in range(20) if x % 2 == 0]
# Result: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`,
    likes: 156,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '5',
    title: 'The Renaissance Period',
    content: 'The Renaissance was a period of European cultural, artistic, political, and scientific "rebirth" after the Middle Ages. The Renaissance is typically considered to have begun in the 14th century in Florence, Italy, and later spread to the rest of Europe.',
    category: 'History',
    hasCode: false,
    likes: 112,
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '6',
    title: 'Laws of Thermodynamics',
    content: 'The First Law of Thermodynamics states that energy cannot be created or destroyed, only transferred or converted from one form to another. The total energy of an isolated system remains constant.',
    category: 'Science',
    hasCode: false,
    likes: 98,
    isLiked: false,
    isBookmarked: false
  },
];