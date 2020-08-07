import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = ['Hi there!!!\r\n', 'How are you?'];
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.styleText}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  styleText: {
    fontSize: 20,
    color: 'red'
  }
});

export default ComponentsScreen;
