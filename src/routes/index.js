import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Home.js";
import Services from "../screens/Services.js";
import Login from "../screens/Login.js";
import Registration from "../screens/Registration.js";
import { PRIMARY_COLOR, TEXT_COLOR } from "../tools/index.js";
import Feather from "@expo/vector-icons/Feather";

//Auth flow
const AuthFlow = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: {}
  },
  registration: {
    screen: Registration
  }
});
//Public flow

//Private flow
const PrivateFlow = createBottomTabNavigator(
  {
    services: {
      screen: Services,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Feather name="layers" color={tintColor} size={20} />
        )
      }
    },
    home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Feather name="home" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    backBehavior: "initialRoute",
    tabBarOptions: {
      activeTintColor: TEXT_COLOR,
      inactiveTintColor: "white",
      activeBackgroundColor: PRIMARY_COLOR,
      inactiveBackgroundColor: PRIMARY_COLOR,
      labelStyle: {
        fontFamily: "font"
      },
      style: {
        borderTopWidth: 0,
        elevation: 20
      }
    }
  }
);
//Main flow
const Flows = createSwitchNavigator({
  privateFlow: PrivateFlow,
  authFlow: AuthFlow
});

export default class MainFlow extends Component {
  render() {
    return <Flows />;
  }
}
