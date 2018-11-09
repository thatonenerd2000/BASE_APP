import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import BaseLogo from "../../media/logo.png";

export default class Logo extends Component {
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;
    return (
      <View
        style={{
          height: vHeight / 2,
          width: vWidth / 2,
          top: vHeight / 20,
          left: vWidth / 4
        }}
      >
        <Image
          source={BaseLogo}
          style={{
            resizeMode: "contain",
            flex: 1,
            height: "100%",
            width: "100%"
          }}
        />
      </View>
    );
  }
}
