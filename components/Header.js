import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 16,
  },
  title: {
    color: "#333",
    fontSize: 32,
    fontWeight: "600",
  },
});

export default Header;
