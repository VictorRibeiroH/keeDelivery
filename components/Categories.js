import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Categoria"
      />
    </ScrollView>
  );
};

export default Categories;
