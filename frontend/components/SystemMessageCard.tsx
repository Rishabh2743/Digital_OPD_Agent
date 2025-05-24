// components/SystemMessageCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SystemMessageCardProps {
  text: string;
}

const SystemMessageCard: React.FC<SystemMessageCardProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SystemMessageCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: '80%',
  },
  text: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
});
