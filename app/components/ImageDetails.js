import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImageDetails({ title, imageSource, imageScore }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
