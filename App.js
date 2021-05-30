import React from "react";
import { SafeAreaView } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
}

/*
  SafeAreaView : 
    상태바를 제외한 안전한 부분에 뷰를 배치 시켜주는 컴포넌트
*/
