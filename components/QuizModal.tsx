import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { X } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { Flashcard } from '../types/flashcard';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  withSequence,
  withTiming,
  runOnJS
} from 'react-native-reanimated';

interface QuizModalProps {
  visible: boolean;
  onClose: () => void;
  flashcard: Flashcard;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function QuizModal({
  visible,
  onClose,
  flashcard,
}: QuizModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const shake = useSharedValue(0);

  // Generate a simple quiz from the flashcard content
  const correctAnswer = 0; // For demo purposes, we'll always make option 0 correct
  const options = [
    'This is the correct answer based on the flashcard content',
    'This is an incorrect answer option',
    'This is another wrong answer option',
    'This is the third wrong answer option',
  ];

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
    
    if (index !== correctAnswer) {
      shake.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 }, () => {
          runOnJS(setShowResult)(true);
        })
      );
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shake.value }],
    };
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Quiz Question</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X size={24} color={Colors.dark.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.questionText}>
              What is the main concept described in this flashcard?
            </Text>

            <Animated.View style={animatedStyle}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedAnswer === index && 
                      (index === correctAnswer 
                        ? styles.correctOption 
                        : styles.incorrectOption),
                    showResult && index === correctAnswer && styles.correctOption
                  ]}
                  onPress={() => !showResult && handleSelectAnswer(index)}
                  disabled={showResult}
                >
                  <Text 
                    style={[
                      styles.optionText,
                      selectedAnswer === index && styles.selectedOptionText,
                      (showResult && index === correctAnswer) && styles.selectedOptionText
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </Animated.View>

            {showResult && (
              <View style={styles.resultContainer}>
                <Text style={[
                  styles.resultText,
                  selectedAnswer === correctAnswer ? styles.correctText : styles.incorrectText
                ]}>
                  {selectedAnswer === correctAnswer 
                    ? 'Correct! Great job!' 
                    : 'Incorrect. Try again!'}
                </Text>
                
                <TouchableOpacity
                  style={styles.resetButton}
                  onPress={handleReset}
                >
                  <Text style={styles.resetButtonText}>Try Another Question</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  modalContent: {
    backgroundColor: Colors.dark.modalBackground,
    borderRadius: 24,
    padding: 20,
    width: '100%',
    maxWidth: 500,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
  },
  closeButton: {
    padding: 8,
  },
  contentContainer: {
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: Colors.dark.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#333',
    width: SCREEN_WIDTH * 0.8 - 40,
    maxWidth: 400,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    color: Colors.dark.text,
    fontFamily: 'Inter-Regular',
  },
  selectedOptionText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
  },
  correctOption: {
    backgroundColor: Colors.dark.success,
  },
  incorrectOption: {
    backgroundColor: Colors.dark.error,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 24,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  correctText: {
    color: Colors.dark.success,
  },
  incorrectText: {
    color: Colors.dark.error,
  },
  resetButton: {
    backgroundColor: Colors.dark.tint,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  resetButtonText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
  },
});