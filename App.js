import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

import Logo from "./app/components/Logo.js";
import BackgroundImage from "./app/components/BackgroundImage.js";

export default class Base extends Component {
  render() {
    return (
      <View>
        <BackgroundImage />
        <Logo />
      </View>
    );
  }
}

AppRegistry.registerComponent("Base", () => Base);
