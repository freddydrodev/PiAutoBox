import React from "react";
import { MapView } from "expo";
import mapStyle from "../../config/mapStyle.json";
import { rnFill } from "../../tools/utils.js";

const ServiceMap = ({ location, markers }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation
      followsUserLocation
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006
      }}
      customMapStyle={mapStyle}
    />
  );
};

export default ServiceMap;
