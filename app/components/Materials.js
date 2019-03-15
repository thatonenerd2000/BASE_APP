import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class Materials extends Component {
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;
    return (
      <ScrollView style={{ backgroundColor: "#226764" }}>
        <TouchableOpacity>
          <View
            style={{
              height: vHeight / 5,
              width: "90%",
              margin: 10,
              marginTop: 50,
              marginLeft: 20,
              borderRadius: 20,
              flexDirection: "row",
              backgroundColor: "#729A98"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: vWidth / 10
              }}
            >
              <Icon
                size={vHeight / 10}
                name="utensils"
                style={{ color: "white" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                marginRight: vWidth / 5,
                textAlign: "center",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: "GillSans-Bold",
                  color: "white",
                  fontSize: vHeight / 35,
                  paddingBottom: 10,
                  textAlign: "center"
                }}
              >
                Lunch
              </Text>
              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 60,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                What's for lunch today?
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* //--------------------> */}
        <TouchableOpacity>
          <View
            style={{
              height: vHeight / 5,
              width: "90%",
              margin: 10,
              borderRadius: 20,
              marginLeft: 20,
              flexDirection: "row",
              backgroundColor: "#41817F"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: vWidth / 10
              }}
            >
              <Icon
                size={vHeight / 10}
                name="calendar-alt"
                style={{ color: "white" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                marginRight: vWidth / 5,
                textAlign: "center",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: "GillSans-Bold",
                  color: "white",
                  fontSize: vHeight / 45,
                  paddingBottom: 10,
                  textAlign: "center"
                }}
              >
                Calendar
              </Text>
              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 60,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                See the official BASE calendar schedule
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* //--------------------> */}
        <TouchableOpacity>
          <View
            style={{
              height: vHeight / 5,
              width: "90%",
              margin: 10,
              borderRadius: 20,
              marginLeft: 20,
              flexDirection: "row",
              backgroundColor: "#0D4D4B"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: vWidth / 10
              }}
            >
              <Icon
                size={vHeight / 10}
                name="globe"
                style={{ color: "white" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                marginRight: vWidth / 5,
                textAlign: "center",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: "GillSans-Bold",
                  color: "white",
                  fontSize: vHeight / 45,
                  paddingBottom: 10,
                  textAlign: "center"
                }}
              >
                BASE
              </Text>
              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 60,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                Visit the official website
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* //--------------------> */}
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Stay tuned BASE Alumni, feature will be released soon!!"
            );
          }}
        >
          <View
            style={{
              height: vHeight / 5,
              width: "90%",
              margin: 10,
              borderRadius: 20,
              marginLeft: 20,
              flexDirection: "row",
              backgroundColor: "#54525C"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: vWidth / 10
              }}
            >
              <Icon
                size={vHeight / 10}
                name="graduation-cap"
                style={{ color: "#2D2C31" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                marginRight: vWidth / 5,
                textAlign: "center",
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: "GillSans-Bold",
                  color: "#2D2C31",
                  fontSize: vHeight / 45,
                  paddingBottom: -20,
                  textAlign: "center"
                }}
              >
                Alumni Portal
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
