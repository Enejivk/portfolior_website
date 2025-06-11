import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Flashcard as FlashcardType } from '@/types/flashcard';
import { flashcards as allFlashcards } from '@/data/flashcards';
import { Bookmark, Heart, Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'saved' | 'created'>('saved');

  // Filter flashcards for demonstration
  const savedFlashcards = allFlashcards.filter((card, index) => index % 3 === 0);
  const createdFlashcards = allFlashcards.filter((card, index) => index % 4 === 0);

  const displayedFlashcards = activeTab === 'saved' ? savedFlashcards : createdFlashcards;

  const renderFlashcardItem = ({ item }: { item: FlashcardType }) => (
    <TouchableOpacity style={styles.flashcardItem}>
      <View style={styles.flashcardContent}>
        <Text style={styles.flashcardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.flashcardCategory}>{item.category}</Text>
        <View style={styles.flashcardStats}>
          <View style={styles.statItem}>
            <Heart size={16} color={Colors.dark.tint} />
            <Text style={styles.statText}>{item.likes}</Text>
          </View>
          {item.isBookmarked && (
            <Bookmark size={16} color={Colors.dark.tint} fill={Colors.dark.tint} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(138, 43, 226, 0.8)', 'transparent']}
        style={styles.headerGradient}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={Colors.dark.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Emily Johnson</Text>
        <Text style={styles.userBio}>Passionate about learning and sharing knowledge</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Flashcards</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>865</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statBlock}>
            <Text style={styles.statNumber}>30</Text>
            <Text style={styles.statLabel}>Days Streak</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
          onPress={() => setActiveTab('saved')}
        >
          <Text
            style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}
          >
            Saved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'created' && styles.activeTab]}
          onPress={() => setActiveTab('created')}
        >
          <Text
            style={[styles.tabText, activeTab === 'created' && styles.activeTabText]}
          >
            Created
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={displayedFlashcards}
        renderItem={renderFlashcardItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flashcardGrid}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>
            {activeTab === 'saved'
              ? 'No saved flashcards yet. Like flashcards to save them here!'
              : 'You haven\'t created any flashcards yet.'}
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  settingsButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.dark.tint,
  },
  username: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
    marginTop: 16,
  },
  userBio: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#CCCCCC',
    marginTop: 8,
    textAlign: 'center',
    maxWidth: '80%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    width: '90%',
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#CCCCCC',
    marginTop: 4,
  },
  verticalDivider: {
    height: 30,
    width: 1,
    backgroundColor: '#333333',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.dark.tint,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#CCCCCC',
  },
  activeTabText: {
    color: Colors.dark.text,
  },
  flashcardGrid: {
    padding: 12,
  },
  flashcardItem: {
    flex: 1,
    margin: 6,
    height: 160,
    backgroundColor: Colors.dark.cardBackground,
    borderRadius: 12,
    overflow: 'hidden',
  },
  flashcardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  flashcardTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
    marginBottom: 8,
  },
  flashcardCategory: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.dark.tint,
    marginBottom: 8,
  },
  flashcardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#CCCCCC',
    marginLeft: 4,
  },
  emptyListText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#CCCCCC',
    textAlign: 'center',
    marginTop: 40,
    paddingHorizontal: 24,
  },
});