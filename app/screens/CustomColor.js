import React from "react";
import { View, Text } from "react-native";
import ColorSelector from "../components/ColorSelector";
import { useState } from "react";

export default function CustomColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

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
        <ColorSelector
          title="red"
          onIncrease={() => setColor("red", COLOR_INCREMENT)}
          onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
          Fcolor="red"
          Scolor="tomato"
        />
        <ColorSelector
          title="green"
          Fcolor="green"
          Scolor="lightgreen"
          onIncrease={() => setColor("green", COLOR_INCREMENT)}
          onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        />
        <ColorSelector
          title="blue"
          Fcolor="blue"
          onIncrease={() => setColor("blue", COLOR_INCREMENT)}
          onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        />
      </View>
      <View
        style={{
          marginTop: 70,
          width: 200,
          height: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
}
