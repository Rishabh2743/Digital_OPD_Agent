import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreScreen = ({ score, onNext }: { score: number; onNext: () => void }) => (
  <View style={styles.container}>
    <Text style={styles.title}>✅ Your Score</Text>
    <Text style={styles.score}>{score}/10 Points</Text>
    <View style={styles.section}>
      <Text style={styles.sectionText}>🧪 Lab Tests: 2/4</Text>
      <Text style={styles.sectionText}>🧠 Diagnosis: 5/6</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={onNext}>
      <Text style={styles.buttonText}>Next Patient</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  score: {
    fontSize: 32,
    color: '#2563eb',
    marginBottom: 24,
  },
  section: {
    width: '100%',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
