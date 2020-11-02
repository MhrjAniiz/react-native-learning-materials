import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function List() {
  const friends = [
    {
      name: "friend1",
      age: 5,
    },
    {
      name: "friend2",
      age: 5,
    },
    {
      name: "friend3",
      age: 5,
    },
    {
      name: "friend4",
      age: 5,
    },
    {
      name: "friend5",
      age: 5,
    },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={Styles.textStyle}>
            {item.name} -> age-{item.age}
          </Text>
        );
      }}
    />
  );
}

const Styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
