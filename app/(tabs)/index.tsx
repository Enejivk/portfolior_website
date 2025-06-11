import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, Dimensions, Share } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Colors from '@/constants/Colors';
import { flashcards as initialFlashcards, categories } from '@/data/flashcards';
import { Flashcard as FlashcardType } from '@/types/flashcard';
import Flashcard from '@/components/Flashcard';
import TopNavigation from '@/components/TopNavigation';
import QuizModal from '@/components/QuizModal';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function FlashcardFeed() {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(initialFlashcards);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quizModalVisible, setQuizModalVisible] = useState(false);
  const [currentFlashcard, setCurrentFlashcard] = useState<FlashcardType>(flashcards[0]);
  const translateY = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);

  const filteredFlashcards = selectedCategory === 'All'
    ? flashcards
    : flashcards.filter(card => card.category === selectedCategory);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateY.value = event.contentOffset.y;
    },
  });

  const handleLike = useCallback((id: string) => {
    setFlashcards(prev => 
      prev.map(card => 
        card.id === id 
          ? { 
              ...card, 
              isLiked: !card.isLiked,
              likes: card.isLiked ? card.likes - 1 : card.likes + 1 
            }
          : card
      )
    );
  }, []);

  const handleShare = useCallback(async (card: FlashcardType) => {
    try {
      await Share.share({
        message: `Check out this flashcard: ${card.title}\n\n${card.content}`,
      });
    } catch (error) {
      console.error('Error sharing flashcard:', error);
    }
  }, []);

  const handleQuiz = useCallback((card: FlashcardType) => {
    setCurrentFlashcard(card);
    setQuizModalVisible(true);
  }, []);

  const handleBookmark = useCallback((id: string) => {
    setFlashcards(prev => 
      prev.map(card => 
        card.id === id 
          ? { ...card, isBookmarked: !card.isBookmarked }
          : card
      )
    );
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Reset to top when category changes
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigation 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <AnimatedFlatList
        ref={flatListRef}
        data={filteredFlashcards}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Flashcard
            item={item}
            index={index}
            translateY={translateY}
            onLike={() => handleLike(item.id)}
            onShare={() => handleShare(item)}
            onQuiz={() => handleQuiz(item)}
            onBookmark={() => handleBookmark(item.id)}
          />
        )}
        onScroll={scrollHandler}
        pagingEnabled
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
      />

      <QuizModal
        visible={quizModalVisible}
        onClose={() => setQuizModalVisible(false)}
        flashcard={currentFlashcard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});