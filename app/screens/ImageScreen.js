import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../assets/forest.jpg")}
        imageScore="5"
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../assets/mountain.jpg")}
        imageScore="10"
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../assets/beach.jpg")}
        imageScore="8"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
