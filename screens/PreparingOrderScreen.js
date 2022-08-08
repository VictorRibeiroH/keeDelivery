import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight }}
      className="bg-[#FFF] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/loading.gif")}
        animation="slideInUp"
        iterationCuont={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00CCBB] font-bold text-center"
      >
        Esperando confirmar seu pedido
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
