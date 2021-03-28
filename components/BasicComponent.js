import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../atoms/CustomButton";

export default function BasicComponent() {
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
      <CustomButton onPress={onPress} buttonText="커스텀버튼" />
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
