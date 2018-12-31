import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";

export default class Announcements extends Component {
  constructor(props) {
    super(props);
    this.getTimeSinceDate = this.getTimeSinceDate.bind(this);
    this.getTimeSincePost = this.getTimeSincePost.bind(this);
    this.state = {
      announcements: []
    };
  }
  //Brights Algorithm
  getTimeSinceDate = dateThen => {
    var dateNow = Date.now();

    var diff = dateNow - dateThen; // milliseconds

    var time = {
      years: Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12)),
      months: Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)) % 30,
      hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(diff / (1000 * 60)) % 60,
      seconds: Math.floor(diff / 1000) % 60
    };

    return time;
  };

  getTimeSincePost = dateThen => {
    var time = this.getTimeSinceDate(dateThen);

    if (time.years > 0) return <Text>Posted {time.years} years ago</Text>;
    else if (time.months > 0)
      return <Text>Posted {time.months} months ago</Text>;
    else if (time.days > 0) return <Text>Posted {time.days} days ago</Text>;
    else if (time.hours > 0) return <Text>Posted {time.hours} hours ago</Text>;
    else if (time.minutes > 0)
      return <Text>Posted {time.minutes} minutes ago</Text>;
    else if (time.seconds > 0)
      return <Text>Posted {time.seconds} seconds ago</Text>;
    else return "Posted just now";
  };

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .database()
      .ref("baseApp/Announcements")
      .once(
        "value",
        data => {
          let temp = [];
          var keys = Object.keys(data.val());
          for (var i = 0; i < keys.length; i++) {
            // this.state.subjects.push(data.val()[keys[i]].Subject);
            // this.state.content.push(data.val()[keys[i]].Content);
            temp.push(data.val()[keys[i]]);
          }
          temp.reverse();
          this.setState({
            announcements: temp
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let announcement = this.state.announcements.map(sub => {
      return (
        <TouchableOpacity>
          <View
            style={{
              margin: 5,
              borderStyle: "solid",
              borderWidth: 2,
              borderRadius: 20,
              padding: 25,
              backgroundColor: "#0e141d",
              height: null,
              textAlign: "left"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
                color: "white"
              }}
            >
              {sub.Subject}
            </Text>
            <Text style={{ textAlign: "left", color: "#42bff4", fontSize: 10 }}>
              {sub.PostedDate}
            </Text>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                marginTop: 10
              }}
            />
            <Text
              style={{
                textAlign: "left",
                color: "white",
                marginTop: 10
              }}
            >
              {sub.Content}
            </Text>
            <Text
              style={{
                textAlign: "left",
                color: "white",
                fontSize: 10,
                marginTop: 5,
                color: "grey"
              }}
            >
              {this.getTimeSincePost(sub.CompareDate)}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={{ paddingTop: 20, flex: 1, backgroundColor: "black" }}>
        {announcement}
        {this.props.children}
      </ScrollView>
    );
  }
}

console.disableYellowBox = true;
