import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LIGHT_TEXT_COLOR, rnSetPosition } from "../../tools";

const ServiceReloadMap = ({ refresh }) => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={refresh}>
        <Text style={textStyle}>Actualiser Carte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceReloadMap;

const styles = StyleSheet.create({
  containerStyle: { flex: 1, ...rnSetPosition() },
  textStyle: { fontFamily: "font", fontSize: 20, color: LIGHT_TEXT_COLOR }
});
