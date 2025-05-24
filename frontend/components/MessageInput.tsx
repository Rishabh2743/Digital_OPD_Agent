import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#e5e7eb', // Tailwind's border-gray-200
        paddingHorizontal: 8,   // Tailwind's px-2
        paddingVertical: 12,    // Tailwind's py-3
      }}
    >
      <TextInput
        style={{
          flex: 1,
          backgroundColor: '#f3f4f6', // Tailwind's bg-gray-100
          borderRadius: 9999,         // Tailwind's rounded-full
          paddingHorizontal: 16,      // Tailwind's px-4
          paddingVertical: 8,         // Tailwind's py-2
        }}
        placeholder="Enter your response"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={() => { onSend(text); setText(''); }}>
        <Ionicons name="send" size={24} color="blue" className="ml-2" />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;