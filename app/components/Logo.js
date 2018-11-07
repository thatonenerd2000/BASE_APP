import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import BaseLogo from "../../media/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={BaseLogo} />
      </View>
    );
  }
}
