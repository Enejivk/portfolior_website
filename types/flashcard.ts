export interface Flashcard {
  id: string;
  title: string;
  content: string;
  category: string;
  hasCode: boolean;
  codeBlock?: string;
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface Category {
  id: string;
  name: string;
}