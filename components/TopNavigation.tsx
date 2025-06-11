import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import Colors from '../constants/Colors';
import { categories } from '../data/flashcards';
import { Category } from '../types/flashcard';

interface TopNavigationProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function TopNavigation({ selectedCategory, onCategoryChange }: TopNavigationProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategorySelect = (category: string) => {
    onCategoryChange(category);
    setModalVisible(false);
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategorySelect(item.name)}
    >
      <Text style={[
        styles.categoryText,
        selectedCategory === item.name && styles.selectedCategoryText
      ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.categorySelector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.categoryText}>{selectedCategory}</Text>
        <ChevronDown size={16} color={Colors.dark.text} />
      </TouchableOpacity>
      
      <Text style={styles.logoText}>FlashTok</Text>
      
      <View style={styles.placeholder}>
        {/* This view helps with centering the logo text */}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              style={styles.categoryList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  categorySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: Colors.dark.text,
    marginRight: 4,
    fontFamily: 'Inter-Medium',
  },
  selectedCategoryText: {
    color: Colors.dark.tint,
    fontFamily: 'Inter-Bold',
  },
  logoText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.dark.text,
  },
  placeholder: {
    width: 80, // Match width of category selector for balance
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.dark.modalOverlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: Colors.dark.modalBackground,
    borderRadius: 12,
    padding: 16,
    maxHeight: '60%',
  },
  modalTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.dark.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  categoryList: {
    width: '100%',
  },
  categoryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.separator,
  },
});