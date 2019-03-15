import React, { Component } from "react";
import { AppRegistry, Text, View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SplashScreen from "react-native-splash-screen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from "./app/components/home.js";
import Announcements from "./app/components/announcements.js";
import Contact from "./app/components/contact.js";
import BackgroundImage from "./app/components/BackgroundImage.js";
import Materials from "./app/components/Materials.js";

class HomeScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <BackgroundImage>
        <StatusBar hidden={true} />
        <Home />
      </BackgroundImage>
    );
  }
}

class AnnouncementScreen extends Component {
  render() {
    return (
      <Announcements>
        <StatusBar hidden={true} />
      </Announcements>
    );
  }
}

class MaterialScreen extends Component {
  render() {
    return <Materials />;
  }
}

class ContactScreen extends Component {
  render() {
    return <Contact />;
  }
}

// class AdminPage extends Component {
//   render() {
//     return <Text>Hi</Text>;
//   }
// }

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
        barStyle: { backgroundColor: "#281b39" },
        tabBarIcon: <Icon size={24} name="home" style={{ color: "white" }} />
      }
    },
    Announcement: {
      screen: AnnouncementScreen,
      navigationOptions: {
        title: "Announcement",
        tabBarLabel: <Text style={{ color: "white" }}>Announcements</Text>,
        barStyle: { backgroundColor: "#0e141d" },
        tabBarIcon: (
          <Icon size={24} name="bullhorn" style={{ color: "white" }} />
        )
      }
    },
    Material: {
      screen: MaterialScreen,
      navigationOptions: {
        title: "Materials",
        tabBarLabel: <Text style={{ color: "white" }}>Materials</Text>,
        barStyle: { backgroundColor: "#0D4D4B" },
        tabBarIcon: (
          <Icon size={24} name="calendar" style={{ color: "white" }} />
        )
      }
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        title: "Contact",
        tabBarLabel: <Text style={{ color: "white" }}>Contact</Text>,
        barStyle: { backgroundColor: "#524365" },
        tabBarIcon: (
          <Icon size={24} name="comments" style={{ color: "white" }} />
        )
      }
    }
  },

  {
    shifting: true,
    labeled: true
  }
);
