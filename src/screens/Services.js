import React, { Component } from "react";
import { View, Text, Tabs, Tab, ScrollableTab } from "native-base";
import { MapView } from "expo";
import StationMarker from "../components/maps/StationMarker";
import mapStyle from "../config/mapStyle.json";
const { Marker } = MapView;

class Services extends Component {
  state = {
    initialRegion: {
      latitude: this.round(5.5756173, 3),
      longitude: this.round(-0.2555073, 3),
      latitudeFinal: this.round(5.5756173 - 0.01, 3),
      longitudeFinal: this.round(-0.2555073 - 0.01, 3)
    }
  };

  initialRegion = () => ({
    ...this.getRegionForCoordinates([
      {
        latitude: 5.5756173,
        longitude: -0.2555073
      },
      {
        latitude: latitudeFinal,
        longitude: longitudeFinal
      }
    ])
  });

  round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }
  render() {
    const {
      latitude,
      longitude,
      latitudeFinal,
      longitudeFinal
    } = this.state.initialRegion;

    console.log(this.state.initialRegion);
    console.log(
      this.getRegionForCoordinates([
        {
          latitude: 5.5756173,
          longitude: -0.2555073
        },
        {
          latitude: latitudeFinal,
          longitude: longitudeFinal
        }
      ])
    );

    return (
      <MapView
        showsUserLocation
        followsUserLocation
        showsMyLocationButton
        onPress={loc => alert("ok")}
        style={{ flex: 1 }}
        customMapStyle={mapStyle}
      >
        {/* <Marker
              coordinate={{ latitude, longitude }}
              title="string"
              description="ici"
            >
              <StationMarker />
            </Marker> */}
      </MapView>
    );
  }

  getRegionForCoordinates(points) {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;

    // init first point
    (point => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map(point => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = maxX - minX;
    const deltaY = maxY - minY;

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }
}

export default Services;
