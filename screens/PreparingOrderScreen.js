import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight }}
      className="bg-[#00CCBB] flex-1 justify-center items-center"
    ></SafeAreaView>
  );
};

export default PreparingOrderScreen;
