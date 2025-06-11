import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, Share2, Bookmark as BookmarkIcon, CircleHelp as HelpCircle } from 'lucide-react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Colors from '../constants/Colors';

interface SidebarButtonsProps {
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  onLike: () => void;
  onShare: () => void;
  onQuiz: () => void;
  onBookmark: () => void;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function SidebarButtons({
  likes,
  isLiked,
  isBookmarked,
  onLike,
  onShare,
  onQuiz,
  onBookmark,
}: SidebarButtonsProps) {
  const heartAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          scale: withSpring(isLiked ? 1.2 : 1, { 
            damping: 10, 
            stiffness: 100 
          }) 
        }
      ],
    };
  });

  const bookmarkAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          scale: withSpring(isBookmarked ? 1.2 : 1, { 
            damping: 10, 
            stiffness: 100 
          }) 
        }
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AnimatedTouchable
          style={[styles.iconButton, heartAnimatedStyle]}
          onPress={onLike}
        >
          <Heart
            size={28}
            color={isLiked ? Colors.dark.tint : Colors.dark.text}
            fill={isLiked ? Colors.dark.tint : 'transparent'}
          />
        </AnimatedTouchable>
        <Text style={styles.buttonText}>{likes}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onShare}>
          <Share2 size={28} color={Colors.dark.text} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Share</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onQuiz}>
          <HelpCircle size={28} color={Colors.dark.text} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Quiz</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AnimatedTouchable
          style={[styles.iconButton, bookmarkAnimatedStyle]}
          onPress={onBookmark}
        >
          <BookmarkIcon
            size={28}
            color={isBookmarked ? Colors.dark.tint : Colors.dark.text}
            fill={isBookmarked ? Colors.dark.tint : 'transparent'}
          />
        </AnimatedTouchable>
        <Text style={styles.buttonText}>Save</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 8,
    bottom: 100,
    alignItems: 'center',
    zIndex: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  buttonText: {
    color: Colors.dark.text,
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
});