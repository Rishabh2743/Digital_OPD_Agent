import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderCard = ({ name, age, points }: { name: string; age: number; points: number }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.nameText}>MR. {name} ({age} Y/O)</Text>
    </View>
    <View style={styles.pointsContainer}>
      <Text style={styles.pointsText}>{points} Points</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6', // Tailwind bg-blue-500
    padding: 16, // Tailwind p-4
    borderBottomLeftRadius: 24, // Tailwind rounded-b-3xl
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    color: '#fff', // Tailwind text-white
    fontSize: 14, // Tailwind text-sm
  },
  pointsContainer: {
    backgroundColor: '#fff', // Tailwind bg-white
    paddingHorizontal: 8, // Tailwind px-2
    paddingVertical: 4, // Tailwind py-1
    borderRadius: 16, // Tailwind rounded-xl
  },
  pointsText: {
    color: '#3B82F6', // Tailwind text-blue-500
    fontWeight: 'bold', // Tailwind font-bold
  },
});

export default HeaderCard;
