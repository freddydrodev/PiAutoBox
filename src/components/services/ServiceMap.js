import React from "react";
import { MapView } from "expo";
import mapStyle from "../../config/mapStyle.json";
import { rnFill } from "../../tools/utils.js";
import MapViewDirections from "../../tools/MapViewDirections.js";

const origin = { latitude: 5.5771556, longitude: -0.2574945 };
const destination = { latitude: 5.6771556, longitude: -0.3574945 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDIYekVGFZ7z7llooI3CgzB9oCNo5ROBtA";

const ServiceMap = ({ location, markers }) => {
  console.log(location);
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
      loadingEnabled={true}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
};

export default ServiceMap;
