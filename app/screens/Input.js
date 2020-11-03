import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  return (
    <View>
      <Text>password</Text>
      <TextInput
        onChangeText={(newValue) => setInput(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputbox}
        value={input}
      />
      {input.length <= 4 ? <Text>password not long enough </Text> : null}
      <Text>the password is : {input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
