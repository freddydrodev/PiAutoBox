import React from "react";
import { View, StyleSheet } from "react-native";
import { MapView } from "expo";
import {
  PRIMARY_COLOR,
  rnSquare,
  TEXT_COLOR,
  rnSetPosition
} from "../../tools";
import MyIcon from "../common/MyIcon";

const { Marker } = MapView;

const StationMarker = ({ latitude, longitude }) => {
  const { markerStyle } = styles;

  return (
    <Marker
      coordinate={{ latitude, longitude }}
      title="string"
      description="ici"
    >
      <View style={markerStyle}>
        <MyIcon name="filling-station" size={16} color={TEXT_COLOR} />
      </View>
    </Marker>
  );
};

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
  }
});
