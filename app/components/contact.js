import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

export default class Contact extends Component {
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;
    return (
      <ScrollView>
        <TouchableOpacity>
          <LinearGradient
            colors={["#6FBEFF", "#0180FF"]}
            style={{
              height: vHeight / 3,
              backgroundColor: "#4C99CF",
              flexDirection: "row"
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
                name="phone"
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
                  fontSize: vHeight / 25,
                  paddingBottom: 10,
                  textAlign: "center"
                }}
              >
                Phone
              </Text>
              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 50,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                Contact our main office.
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={["#457CB7", "#2a4c70"]}
            style={{
              height: vHeight / 3,
              backgroundColor: "#4976AB",
              flexDirection: "row"
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
              <Icon size={vHeight / 10} name="at" style={{ color: "white" }} />
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
                  fontSize: vHeight / 25,
                  paddingBottom: 10,
                  marginLeft: 5,
                  textAlign: "center"
                }}
              >
                Email
              </Text>

              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 50,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                Write an email to our main office staff.
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={["#61529C", "#4b4172"]}
            style={{
              height: vHeight / 3,
              backgroundColor: "#595385",
              flexDirection: "row"
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
                name="location-arrow"
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
                  marginLeft: 5,
                  textAlign: "center"
                }}
              >
                Location
              </Text>

              <Text
                style={{
                  fontFamily: "Gill Sans",
                  color: "white",
                  fontSize: vHeight / 50,
                  textAlign: "center",
                  paddingTop: 10
                }}
              >
                Visit us!!
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={["#5D4172", "#483259"]}
            style={{
              height: vHeight / 3,
              backgroundColor: "#524365",
              flexDirection: "row"
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
                name="lock"
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
                  marginLeft: 5,
                  textAlign: "center"
                }}
              >
                Admin
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
