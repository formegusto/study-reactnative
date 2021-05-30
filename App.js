import React from "react";
import { SafeAreaView } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <TodoItem title="밥 먹기" done={true} />
      <TodoItem title="시리얼 먹기" done={false} />
    </SafeAreaView>
  );
}

/*
  SafeAreaView : 
    상태바를 제외한 안전한 부분에 뷰를 배치 시켜주는 컴포넌트
*/
