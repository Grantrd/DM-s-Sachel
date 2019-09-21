import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Hello to you sir.");
  return (
    <View style={styles.container}>
      <Text> {outputText} </Text>
      <Button title = "Press Here "  onPress = {() => setOutputText("Hello to you puto.")} />
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
});
