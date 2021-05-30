import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TodoItem({ title, done }) {
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <TouchableOpacity
          style={done ? styles.done : styles.check}
          activeOpacity={0.8}
        >
          <FontAwesome
            name="check"
            color={done ? "#FFF" : "#E0E0E0"}
            size={14}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFF",
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  title: {
    fontSize: 16,
    color: "#424242",
  },
  check: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
  },
  done: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#6830CF",
    borderRadius: 14,
  },
});

export default TodoItem;
