import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CustomButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <View style={props.disabled ? styles.disabled : styles.box}>
        <Text style={styles.first}>
          {(props.buttonText && props.buttonText) || "시작하기"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    paddingBottom: 8,
    paddingTop: 8,
  },
  disabled: {
    flexDirection: "row",
    backgroundColor: "#9E9E9E",
    padding: 16,
  },
});

export default CustomButton;
