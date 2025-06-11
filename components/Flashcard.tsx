import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useAnimatedStyle,
  interpolate,
  useSharedValue
} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { Flashcard as FlashcardType } from '../types/flashcard';
import FlashcardContent from './FlashcardContent';
import SidebarButtons from './SidebarButtons';

interface FlashcardProps {
  item: FlashcardType;
  onLike: () => void;
  onShare: () => void;
  onQuiz: () => void;
  onBookmark: () => void;
  index: number;
  translateY: Animated.SharedValue<number>;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function Flashcard({
  item,
  onLike,
  onShare,
  onQuiz,
  onBookmark,
  index,
  translateY
}: FlashcardProps) {
  const inputRange = [(index - 1) * SCREEN_HEIGHT, index * SCREEN_HEIGHT, (index + 1) * SCREEN_HEIGHT];
  
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      inputRange,
      [0, 1, 0]
    );
    
    const scale = interpolate(
      translateY.value,
      inputRange,
      [0.8, 1, 0.8]
    );
    
    return {
      opacity,
      transform: [{ scale }]
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <LinearGradient
        colors={['rgba(0,0,0,0.2)', Colors.dark.cardBackground, Colors.dark.cardBackground]}
        style={styles.gradientBackground}
      />
      <FlashcardContent
        title={item.title}
        content={item.content}
        hasCode={item.hasCode}
        codeBlock={item.codeBlock}
      />
      <SidebarButtons
        likes={item.likes}
        isLiked={item.isLiked}
        isBookmarked={item.isBookmarked}
        onLike={onLike}
        onShare={onShare}
        onQuiz={onQuiz}
        onBookmark={onBookmark}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: Colors.dark.cardBackground,
    justifyContent: 'center',
    position: 'relative',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});