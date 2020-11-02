import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        color="tomato"
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>counter value is : {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
