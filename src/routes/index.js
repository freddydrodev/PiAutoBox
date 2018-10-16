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

//Auth flow
const AuthFlow = createStackNavigator({
  login: {
    screen: Login
  },
  registration: {
    screen: Registration
  }
});
//Public flow

//Private flow
const PrivateFlow = createBottomTabNavigator({
  home: {
    screen: Home
  },
  services: {
    screen: Services,
    navigationOptions: {}
  }
});
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
