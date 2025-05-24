// screens/ChatScreen.tsx
import { View, StyleSheet, FlatList } from 'react-native';
import HeaderCard from '../HeaderCard';
import { useState } from 'react';
import ChatBubble from '../ChatBubble';
import MessageInput from '../MessageInput';
import SystemMessageCard from '../SystemMessageCard';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', type: 'system', text: 'Welcome to Digital OPD!' },
    { id: '2', type: 'bot', text: 'How can I help you today?' },
  ]);

  const handleSend = (text: string) => {
    const newMsg = { id: Date.now().toString(), type: 'user', text };
    setMessages([...messages, newMsg]);
    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), type: 'bot', text: 'Got it! Let me check.' },
      ]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <HeaderCard name="John Doe" age={30} points={100} />
      <FlatList
        style={styles.chatList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.type === 'system' ? (
            <SystemMessageCard text={item.text} />
          ) : (
            <ChatBubble message={item.text} sender={item.type as 'bot' | 'user'} />
          )
        }
      />
      <MessageInput onSend={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
});
