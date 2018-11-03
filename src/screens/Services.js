import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";
import { View, Text, Toast, H2 } from "native-base";
import { MapView, Permissions, Location, Constants } from "expo";
import StationMarker from "../components/maps/StationMarker";
import mapStyle from "../config/mapStyle.json";
import { rnSetPosition, LIGHT_TEXT_COLOR } from "../tools";
import ServiceTop from "../components/services/ServiceTop";
import ServiceBottom from "../components/services/ServiceBottom";
import ServiceReloadMap from "../components/services/ServiceReloadMap";
import ServiceMap from "../components/services/ServiceMap";

class Services extends Component {
  state = {
    location: null,
    errorMessage: null
  };

  render() {
    const { location } = this.state;

    return location ? (
      <View style={{ flex: 1 }}>
        <ServiceMap location={location} />
        <ServiceTop services={this.props.services} />
        <ServiceBottom availableServices={[]} />
      </View>
    ) : (
      <ServiceReloadMap refresh={this._getLocationAsync} />
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
    })
      .then(({ coords }) => ({
        longitude: coords.longitude,
        latitude: coords.latitude
      }))
      .catch(err => {
        console.log(err);
      });

    console.log("step loc");

    this.setState({ location });
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  // getRegionForCoordinates(points) {
  //   // points should be an array of { latitude: X, longitude: Y }
  //   let minX, maxX, minY, maxY;

  //   // init first point
  //   (point => {
  //     minX = point.latitude;
  //     maxX = point.latitude;
  //     minY = point.longitude;
  //     maxY = point.longitude;
  //   })(points[0]);

  //   // calculate rect
  //   points.map(point => {
  //     minX = Math.min(minX, point.latitude);
  //     maxX = Math.max(maxX, point.latitude);
  //     minY = Math.min(minY, point.longitude);
  //     maxY = Math.max(maxY, point.longitude);
  //   });

  //   const midX = (minX + maxX) / 2;
  //   const midY = (minY + maxY) / 2;
  //   const deltaX = maxX - minX;
  //   const deltaY = maxY - minY;

  //   return {
  //     latitude: midX,
  //     longitude: midY,
  //     latitudeDelta: deltaX,
  //     longitudeDelta: deltaY
  //   };
  // }
}

const mapStateToProps = ({ services }) => ({ services });
export default connect(mapStateToProps)(Services);

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
