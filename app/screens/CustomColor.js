import React from "react";
import { View, Text } from "react-native";
import ColorSelector from "../components/ColorSelector";
import { useState } from "react";

export default function CustomColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
        }}
      >
        <ColorSelector title="red" Fcolor="red" Scolor="tomato" />
        <ColorSelector title="green" Fcolor="green" Scolor="lightgreen" />
        <ColorSelector title="blue" Fcolor="blue" />
      </View>
      <View
        style={{
          marginTop: 70,
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
      ></View>
    </View>
  );
}
