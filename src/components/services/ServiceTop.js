import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Constants } from "expo";
import { View, H1 } from "native-base";
import { LIGHT_TEXT_COLOR, rnSetMargin } from "../../tools";
import ServicesList from "./ServicesList.js";

const ServiceTop = ({ services }) => {
  const { containerStyle, h1Style } = styles;
  return (
    <View style={containerStyle}>
      <H1 style={h1Style}>Services</H1>
      {services && <ServicesList services={services} />}
    </View>
  );
};

export default ServiceTop;

const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    zIndex: 10,
    top: Constants.statusBarHeight,
    left: 0,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  h1Style: {
    fontFamily: "font_bold",
    fontSize: 30,
    color: LIGHT_TEXT_COLOR,
    ...rnSetMargin(),
    marginBottom: 0
  }
});
