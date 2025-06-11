import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { X } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { categories } from '../data/flashcards';

interface CreateFlashcardModalProps {
  visible: boolean;
  onClose: () => void;
  onCreateFlashcard: (flashcard: {
    title: string;
    content: string;
    category: string;
    hasCode: boolean;
    codeBlock?: string;
  }) => void;
}

export default function CreateFlashcardModal({
  visible,
  onClose,
  onCreateFlashcard,
}: CreateFlashcardModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(categories[0].name);
  const [hasCode, setHasCode] = useState(false);
  const [codeBlock, setCodeBlock] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    onCreateFlashcard({
      title,
      content,
      category,
      hasCode,
      codeBlock: hasCode ? codeBlock : undefined,
    });

    // Reset form
    setTitle('');
    setContent('');
    setCategory(categories[0].name);
    setHasCode(false);
    setCodeBlock('');

    onClose();
  };

  const toggleHasCode = () => {
    setHasCode(!hasCode);
    if (!hasCode) {
      setCodeBlock('');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create New Flashcard</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X size={24} color={Colors.dark.text} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter flashcard title"
              placeholderTextColor="#666"
            />

            <Text style={styles.label}>Content</Text>
            <TextInput
              style={[styles.input, styles.contentInput]}
              value={content}
              onChangeText={setContent}
              placeholder="Enter flashcard content"
              placeholderTextColor="#666"
              multiline
            />

            <Text style={styles.label}>Category</Text>
            <View style={styles.categoryContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((cat) => (
                  <TouchableOpacity
                    key={cat.id}
                    style={[
                      styles.categoryButton,
                      category === cat.name && styles.selectedCategoryButton,
                    ]}
                    onPress={() => setCategory(cat.name)}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        category === cat.name && styles.selectedCategoryText,
                      ]}
                    >
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.codeToggleContainer}>
              <Text style={styles.label}>Include Code Block</Text>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  hasCode && styles.toggleButtonActive,
                ]}
                onPress={toggleHasCode}
              >
                <View
                  style={[
                    styles.toggleCircle,
                    hasCode && styles.toggleCircleActive,
                  ]}
                />
              </TouchableOpacity>
            </View>

            {hasCode && (
              <>
                <Text style={styles.label}>Code Block</Text>
                <TextInput
                  style={[styles.input, styles.codeInput]}
                  value={codeBlock}
                  onChangeText={setCodeBlock}
                  placeholder="Enter code here"
                  placeholderTextColor="#666"
                  multiline
                  fontFamily="SpaceMono"
                />
              </>
            )}

            <TouchableOpacity
              style={styles.submitButtonContainer}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={[
                  Colors.dark.buttonGradientStart,
                  Colors.dark.buttonGradientEnd,
                ]}
                style={styles.submitButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.submitButtonText}>Create Flashcard</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.dark.modalBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '90%',
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
  scrollContainer: {
    maxHeight: '80%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.dark.text,
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    color: Colors.dark.text,
    fontFamily: 'Inter-Regular',
    marginBottom: 16,
  },
  contentInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  codeInput: {
    minHeight: 150,
    textAlignVertical: 'top',
    fontFamily: 'SpaceMono',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#333',
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: Colors.dark.tint,
  },
  categoryText: {
    color: Colors.dark.text,
    fontFamily: 'Inter-Medium',
  },
  selectedCategoryText: {
    color: 'white',
  },
  codeToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleButton: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#333',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleButtonActive: {
    backgroundColor: Colors.dark.tint,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  toggleCircleActive: {
    alignSelf: 'flex-end',
  },
  submitButtonContainer: {
    marginVertical: 24,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
});