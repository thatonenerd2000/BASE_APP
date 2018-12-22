import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from "./app/components/home.js";
import BackgroundImage from "./app/components/BackgroundImage.js";
import FadeAnimation from "./app/components/animations/fadeAnimation.js";

class HomeScreen extends Component {
  // tabs = [
  //   {
  //     key: "Home",
  //     icon: "home",
  //     label: "Home",
  //     barColor: "#B71C1C",
  //     pressColor: "rgba(255, 255, 255, 0.16)"
  //   },
  //   {
  //     key: "Announcements",
  //     icon: "bullhorn",
  //     label: "Announcements",
  //     barColor: "#388E3C",
  //     pressColor: "rgba(255, 255, 255, 0.16)"
  //   },
  //   {
  //     key: "Calendar",
  //     icon: "calendar",
  //     label: "Calendar",
  //     barColor: "#E64A19",
  //     pressColor: "rgba(255, 255, 255, 0.16)"
  //   },
  //   {
  //     key: "Contact",
  //     icon: "comments",
  //     label: "Contact",
  //     barColor: "#a0c4ff",
  //     pressColor: "rgba(255, 255, 255, 0.16)"
  //   }
  // ];

  // renderIcon = icon => ({ isActive }) => (
  //   <Icon size={24} color="white" name={icon} />
  // );

  // renderTab = ({ tab, isActive }) => (
  //   <FullTab
  //     isActive={isActive}
  //     key={tab.key}
  //     label={tab.label}
  //     renderIcon={this.renderIcon(tab.icon)}
  //   />
  // );

  render() {
    return (
      // <View style={{ flex: 1, position: "relative", top: 0 }}>
      //   <View style={{ flex: 1 }}>
      <BackgroundImage>
        <Home />
      </BackgroundImage>
      //   </View>
      //   <FadeAnimation delay={0}>
      //     <BottomNavigation
      //       onTabPress={newTab => this.setState({ activeTab: newTab.key })}
      //       renderTab={this.renderTab}
      //       tabs={this.tabs}
      //     />
      //   </FadeAnimation>
      // </View>
    );
  }
}

class AnnouncementScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", top: 200 }}>
          This is going to be the Announcement Screen
        </Text>
      </View>
    );
  }
}

class MaterialScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", top: 200 }}>
          This is going to be the Materials Screen
        </Text>
      </View>
    );
  }
}

class ContactScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", top: 200 }}>
          This is going to be the Contact Screen
        </Text>
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarLabel: <Text style={{ color: "white" }}>Home</Text>,
        barStyle: { backgroundColor: "#B71C1C" },
        tabBarIcon: <Icon size={24} name="home" style={{ color: "white" }} />
      }
    },
    Announcement: {
      screen: AnnouncementScreen,
      navigationOptions: {
        title: "Announcement",
        tabBarLabel: <Text style={{ color: "white" }}>Announcements</Text>,
        barStyle: { backgroundColor: "#388E3C" },
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
        barStyle: { backgroundColor: "#E64A19" },
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
        barStyle: { backgroundColor: "#a0c4ff" },
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

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
