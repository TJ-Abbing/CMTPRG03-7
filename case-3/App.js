import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize : 100}}>Counter</Text>
      <StatusBar style="auto" />

      <View style={styles.fixToText}>
        <Button
          title="-"
          onPress={() => Alert.alert('Subtracted 1')}
        />
        <Button
          title="+"
          onPress={() => Alert.alert('Added 1')}
        />
      </View>
          <Button
          title="Reset"
          onPress={() => Alert.alert('Counter reset')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
