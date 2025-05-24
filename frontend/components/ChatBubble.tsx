import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, sender, points }: { message: string; sender: 'bot' | 'user'; points?: number }) => {
  const isUser = sender === 'user';
  return (
    <View style={[styles.container, isUser ? styles.alignEnd : styles.alignStart]}>
      <View style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble
      ]}>
        <Text style={styles.message}>{message}</Text>
        {points !== undefined && (
          <Text style={styles.points}>{points} Points</Text>
        )}
      </View>
    </View>
  );
};
export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#DBEAFE', // blue-100
  },
  botBubble: {
    backgroundColor: '#F3F4F6', // gray-100
  },
  message: {
    fontSize: 14,
  },
  points: {
    fontSize: 12,
    textAlign: 'right',
    color: '#9CA3AF', // gray-400
    marginTop: 4,
  },
});
