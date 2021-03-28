import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const onPress = useCallback(() => {
    Alert.alert("React Native Hi!");
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.box}>
          <Text style={styles.first}>시작하기</Text>
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#6830CF",
    padding: 16,
  },
  first: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "600",
    padding: 16,
  },
});
