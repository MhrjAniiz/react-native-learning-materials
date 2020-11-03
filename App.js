import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageScreen from "./app/screens/ImageScreen";
import Counter from "./app/screens/Counter";
import List from "./app/screens/List";
import ColorScreen from "./app/screens/ColorScreen";
import CustomColor from "./app/screens/CustomColor";
import Input from "./app/screens/Input";

const stackNavigation = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stackNavigation.Navigator>
        <stackNavigation.Screen
          options={{ headerShown: false }}
          name="home"
          component={WelcomeScreen}
        />
        <stackNavigation.Screen name="counter" component={Counter} />
        <stackNavigation.Screen name="imageScreen" component={ImageScreen} />
        <stackNavigation.Screen name="list" component={List} />
        <stackNavigation.Screen name="color" component={ColorScreen} />
        <stackNavigation.Screen name="custom" component={CustomColor} />
        <stackNavigation.Screen name="Input" component={Input} />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}
