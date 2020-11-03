import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("counter")}>
          <Text style={styles.link}>Go to Counter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listButton}>
        <TouchableOpacity onPress={() => navigation.navigate("imageScreen")}>
          <Text style={styles.link}>Go to ImageScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("list")}>
          <Text style={styles.link}>Go to list</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listButton}>
        <TouchableOpacity onPress={() => navigation.navigate("color")}>
          <Text style={styles.link}>Go to color</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.navigate("custom")}>
          <Text style={styles.link}>Go to customcolor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Input")}>
          <Text style={styles.link}>Go to Input</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 30,
    backgroundColor: "#fc5c65",
  },

  listButton: {
    width: "100%",
    height: 30,
    backgroundColor: "gold",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  link: {
    textAlign: "center",
    fontSize: 20,
    padding: 2,
    color: "white",
  },
});
