import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import Colors from '../constants/Colors';

interface FlashcardContentProps {
  title: string;
  content: string;
  hasCode: boolean;
  codeBlock?: string;
}

export default function FlashcardContent({
  title,
  content,
  hasCode,
  codeBlock,
}: FlashcardContentProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        
        {hasCode && codeBlock && (
          <View style={styles.codeContainer}>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              fontSize={16}
              highlighter="hljs"
              customStyle={styles.codeHighlighter}
            >
              {codeBlock}
            </SyntaxHighlighter>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.dark.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: Colors.dark.text,
    marginBottom: 24,
    lineHeight: 27,
    textAlign: 'center',
  },
  codeContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 16,
  },
  codeHighlighter: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: Colors.dark.codeBackground,
  },
});