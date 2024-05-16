import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Study Planner App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    header: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color : '#fff',
    fontSize: 23,
    textAlign: 'center',
  }
});
