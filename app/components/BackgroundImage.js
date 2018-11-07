import React, { Component } from "react";
import { AppRegistry, Text, View, Image, StyleSheet } from "react-native";

import bgimg from "../../media/bg.jpg";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    zIndex: -1,
    position: "absolute"
  }
});

export default class BackgroundImage extends Component {
  render() {
    return <Image source={bgimg} style={styles.backgroundimage} />;
  }
}
