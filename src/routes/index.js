import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { connect } from "react-redux";
import Home from "../screens/Home.js";
import Services from "../screens/Services.js";
import Login from "../screens/Login.js";
import Registration from "../screens/Registration.js";
import { PRIMARY_COLOR, TEXT_COLOR } from "../tools/index.js";
import Feather from "@expo/vector-icons/Feather";
import { updateServices, selectService } from "../actions/index.js";
import { db } from "../config/base.js";
import { Text } from "native-base";

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

class MainFlow extends Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await db.listenTo("services", {
      context: this,
      then: services => {
        this.props.selectService(services[0].key);
        this.props.updateServices(services);
      },
      asArray: true,
      onFailure: err => console.warn
    });

    this.setState({ isReady: true });
  }
  render() {
    return this.state.isReady ? <Flows /> : <Text>okok</Text>;
  }
}

export default connect(
  null,
  { updateServices, selectService }
)(MainFlow);
