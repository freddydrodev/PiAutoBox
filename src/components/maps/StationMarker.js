import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  PRIMARY_COLOR,
  rnSquare,
  TEXT_COLOR,
  rnSetPosition
} from "../../tools";
import MyIcon from "../common/MyIcon";

class StationMarker extends Component {
  render() {
    const { markerStyle, markerInnerStyle } = styles;
    return (
      <View style={markerStyle}>
        <MyIcon name="filling-station" size={16} color={TEXT_COLOR} />
      </View>
    );
  }
}

export default StationMarker;

const styles = StyleSheet.create({
  markerStyle: {
    borderColor: "rgba(255,228,21, .3)",
    borderWidth: 5,
    ...rnSquare(40),
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR,
    padding: 5,
    ...rnSetPosition()
  },
  markerInnerStyle: {
    flex: 1
  }
});
