import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons";

import Home from "./app/components/home.js";
import BackgroundImage from "./app/components/BackgroundImage.js";

class HomeScreen extends Component {
  render() {
    return (
      <BackgroundImage>
        <Home />
      </BackgroundImage>
    );
  }
}

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#65b3a9"
  }
);

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
