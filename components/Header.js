import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Ionicons name="ios-add" color="#FFF" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: "#333",
    fontSize: 32,
    fontWeight: "600",
  },
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
  },
});

export default Header;
