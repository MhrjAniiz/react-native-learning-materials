import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function ColorSelector({
  title,
  Fcolor,
  Scolor,
  onIncrease,
  onDecrease,
}) {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        onPress={() => onIncrease()}
        color={Fcolor}
        title={`more ${title}`}
      />
      <Button
        onPress={() => onDecrease()}
        color={Scolor}
        title={`less ${title}`}
      />
    </View>
  );
}
