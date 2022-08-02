import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddinghorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurantes */}
        <RestaurantCard
          id={123}
          imgUrl="https://seeklogo.com/images/K/kfc-logo-81CF66A86D-seeklogo.com.png"
          title="KFC"
          rating={4.1}
          genre="Lanches"
          address="Av Sete de Setembro, 2775"
          short_description="O KFC é uma rede de restaurantes americana fundada em 1952 pelo Coronel Sanders, criador da receita mundialmente famosa à base de 11 ingredientes secretos"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://seeklogo.com/images/S/Subway-logo-FE7952F639-seeklogo.com.png"
          title="Subways"
          rating={4.3}
          genre="Japonesa"
          address="Curitiba endereço 123"
          short_description="Descrição restaurante"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="pbL pizzaria"
          rating={4.5}
          genre="Japonesa"
          address="Curitiba endereço 123"
          short_description="Descrição restaurante"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushii"
          rating={4.5}
          genre="Japonesa"
          address="Curitiba endereço 123"
          short_description="Descrição restaurante"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
