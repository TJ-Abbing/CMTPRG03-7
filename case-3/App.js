import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const initialCounterValue = 0
  const [counter, setCount] = useState(initialCounterValue)

  return (
    <View style={styles.container}>
      <Text style={{fontSize : 100}}>{counter}</Text>
      <StatusBar style="auto" />

      <View style={styles.fixToText}>
        <Button
          title="-"
          onPress={() => setCount(counter - 1)}
        />
        <Button
          title="+"
          onPress={() => setCount(counter + 1)}
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
