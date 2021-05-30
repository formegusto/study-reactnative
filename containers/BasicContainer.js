import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import BasicComponent from "../components/BasicComponent";

function BasicContainer() {
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!content.length) setDisabled(true);
    else setDisabled(false);
  }, [content]);

  const onChange = useCallback((text) => {
    setContent(text);
  }, []);

  const onPress = useCallback(() => {
    Alert.alert(content);
  }, [content]);

  return (
    <BasicComponent
      onChange={onChange}
      onPress={onPress}
      content={content}
      disabled={disabled}
    />
  );
}

export default BasicContainer;
