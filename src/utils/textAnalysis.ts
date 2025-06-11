import { TextEntry, Flashcard } from '../types';

// Generate a title based on the content
export const generateTitle = (content: string): string => {
  // Extract the first sentence or first 50 characters
  const firstSentence = content.split(/[.!?]/, 1)[0].trim();
  if (firstSentence.length < 50) {
    return firstSentence;
  }
  return firstSentence.substring(0, 47) + '...';
};

// Determine the subject based on content keywords
export const determineSubject = (content: string): string => {
  const subjects = [
    { name: 'History', keywords: ['history', 'war', 'century', 'ancient', 'civilization', 'empire', 'revolution'] },
    { name: 'Science', keywords: ['science', 'physics', 'biology', 'chemistry', 'scientific', 'experiment', 'theory', 'hypothesis'] },
    { name: 'Technology', keywords: ['technology', 'computer', 'software', 'hardware', 'digital', 'internet', 'programming', 'algorithm'] },
    { name: 'Literature', keywords: ['literature', 'novel', 'author', 'character', 'fiction', 'poetry', 'writer', 'narrative'] },
    { name: 'Philosophy', keywords: ['philosophy', 'ethics', 'moral', 'existence', 'metaphysics', 'consciousness', 'reality'] },
    { name: 'Business', keywords: ['business', 'company', 'market', 'finance', 'economy', 'investment', 'management', 'strategy'] },
    { name: 'Health', keywords: ['health', 'medical', 'disease', 'treatment', 'patient', 'symptom', 'diagnosis', 'therapy'] },
    { name: 'Arts', keywords: ['art', 'painting', 'music', 'film', 'artist', 'creative', 'visual', 'design'] }
  ];

  const contentLower = content.toLowerCase();
  
  // Count occurrences of keywords for each subject
  const subjectScores = subjects.map(subject => {
    const score = subject.keywords.reduce((total, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = contentLower.match(regex);
      return total + (matches ? matches.length : 0);
    }, 0);
    return { name: subject.name, score };
  });
  
  // Sort by score and get the highest
  subjectScores.sort((a, b) => b.score - a.score);
  
  // If no significant matches found, return "General"
  if (subjectScores[0].score === 0) {
    return 'General';
  }
  
  return subjectScores[0].name;
};

// Generate a summary based on the content
export const generateSummary = (content: string): string => {
  // Simple summary: first paragraph or first 150 characters
  const firstParagraph = content.split('\n', 1)[0].trim();
  
  // If the paragraph is very short, try to get more content
  if (firstParagraph.length < 100) {
    return content.substring(0, 150).trim() + '...';
  }
  
  return firstParagraph.length > 200 
    ? firstParagraph.substring(0, 197) + '...'
    : firstParagraph;
};

// Generate questions based on the content
export const generateQuestions = (content: string): string[] => {
  // This is a simple implementation - in a real extension, this would use a proper AI service
  // For now, we'll generate generic questions based on the content length
  const contentLength = content.length;
  const numQuestions = Math.min(Math.floor(contentLength / 500), 5);
  
  const genericQuestions = [
    'What are the main ideas presented in this text?',
    'How would you summarize the key arguments?',
    'What evidence supports the main claims?',
    'How does this information relate to other topics you\'ve studied?',
    'What are potential counterarguments to the positions presented?'
  ];
  
  return genericQuestions.slice(0, numQuestions || 1);
};

// Generate flashcards from text content
export const generateFlashcardsFromText = (content: string): Flashcard[] => {
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const flashcards: Flashcard[] = [];
  const colors = [
    'bg-blue-100 hover:bg-blue-200',
    'bg-green-100 hover:bg-green-200',
    'bg-purple-100 hover:bg-purple-200',
    'bg-pink-100 hover:bg-pink-200',
    'bg-yellow-100 hover:bg-yellow-200',
    'bg-orange-100 hover:bg-orange-200',
  ];

  // Create concept-definition pairs
  for (let i = 0; i < sentences.length - 1; i += 2) {
    if (sentences[i].length > 20 && sentences[i + 1]?.length > 20) {
      flashcards.push({
        id: Math.random().toString(36).substring(2),
        front: sentences[i].trim(),
        back: sentences[i + 1].trim(),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  // Limit to 5 flashcards
  return flashcards.slice(0, 5);
};

// Analyze text and generate metadata
export const analyzeText = (content: string, source: string): Omit<TextEntry, 'id' | 'date' | 'answers'> => {
  return {
    title: generateTitle(content),
    content: content,
    subject: determineSubject(content),
    summary: generateSummary(content),
    questions: generateQuestions(content),
    source: source,
    flashcards: generateFlashcardsFromText(content)
  };
};