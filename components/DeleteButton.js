import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function DeleteButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>삭제</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#FE5746",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
  },
});

export default DeleteButton;
