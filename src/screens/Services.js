import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Toast } from "native-base";
import { MapView, Permissions, Location, Constants } from "expo";
import StationMarker from "../components/maps/StationMarker";
import mapStyle from "../config/mapStyle.json";
import { rnSetPosition, TEXT_COLOR, LIGHT_TEXT_COLOR } from "../tools";

class Services extends Component {
  state = {
    location: null,
    errorMessage: null
  };

  render() {
    const { location } = this.state;
    const { map, container } = styles;

    return location ? (
      <View style={{ flex: 1 }}>
        <MapView
          showsUserLocation
          followsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006
          }}
          onPress={loc => alert("ok")}
          style={{ flex: 1 }}
          customMapStyle={mapStyle}
        />
      </View>
    ) : (
      <View style={{ flex: 1, ...rnSetPosition() }}>
        <TouchableOpacity
          light
          rounded
          small
          style={{
            marginTop: 20,
            backgroundColor: "#ededed",
            padding: 10,
            borderRadius: 5
          }}
          onPress={this._getLocationAsync}
        >
          <Text
            style={{
              fontFamily: "font",
              fontSize: 20,
              color: LIGHT_TEXT_COLOR
            }}
          >
            Actualiser Carte
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _getLocationAsync = async () => {
    Toast.show({
      text: "Chargement de google maps!",
      buttonText: "Okay",
      duration: 5000,
      position: "bottom"
    });

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("not granted");
    }

    console.log("step g");

    const location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    }).then(({ coords }) => ({
      longitude: coords.longitude,
      latitude: coords.latitude
    }));

    console.log("step loc");

    this.setState({ location });
  };

  componentDidMount() {
    this._getLocationAsync();
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
