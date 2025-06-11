import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Plus } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import CreateFlashcardModal from '@/components/CreateFlashcardModal';

export default function CreateScreen() {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCreateFlashcard = (flashcard: {
    title: string;
    content: string;
    category: string;
    hasCode: boolean;
    codeBlock?: string;
  }) => {
    // In a real app, we would send this to a backend
    console.log('New flashcard created:', flashcard);
    
    // Navigate back to the feed
    router.replace('/(tabs)');
  };

  // This screen serves mainly to open the modal, but in case the user
  // closes the modal, we show a button to reopen it
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Flashcard</Text>
      <Text style={styles.subtitle}>
        Share your knowledge with the community
      </Text>

      <TouchableOpacity 
        style={styles.createButtonContainer} 
        onPress={() => setModalVisible(true)}
      >
        <LinearGradient
          colors={[Colors.dark.buttonGradientStart, Colors.dark.buttonGradientEnd]}
          style={styles.createButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Plus color="white" size={24} />
          <Text style={styles.createButtonText}>Create Flashcard</Text>
        </LinearGradient>
      </TouchableOpacity>

      <CreateFlashcardModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          // Navigate back to feed when user cancels
          router.replace('/(tabs)');
        }}
        onCreateFlashcard={handleCreateFlashcard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#CCC',
    marginBottom: 40,
    textAlign: 'center',
  },
  createButtonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  createButton: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginLeft: 8,
  },
});