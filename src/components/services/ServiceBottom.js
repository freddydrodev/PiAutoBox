import React, { Component } from "react";
import { View, Text, H2 } from "native-base";
import { TEXT_COLOR, LIGHT_TEXT_COLOR, PRIMARY_COLOR } from "../../tools";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView } from "react-native";
import ServiceCard from "../common/ServiceCard";

class ServiceBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: 0,
          flex: 1,
          left: 0
        }}
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </ScrollView>
    );
  }
}

export default ServiceBottom;
