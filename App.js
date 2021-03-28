import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [content, setContent] = useState("");

  const onChange = useCallback((text) => {
    setContent(text);
  }, []);

  const onPress = useCallback(() => {
    Alert.alert(content);
  }, [content]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="텍스트를 입력해주세요!"
        value={content}
        onChangeText={onChange}
      />
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
    padding: 16,
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
  input: {
    width: "100%",
    textAlign: "center",
    margin: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#CCC",
    height: 32,
  },
});
