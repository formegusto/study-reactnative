import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Hello! React</Text>
        <Text>Hello! React Native!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    margin: 64,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});
