import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";
import { View, Text, Toast, Picker } from "native-base";
import { MapView, Permissions, Location, Constants } from "expo";
import StationMarker from "../components/maps/StationMarker";
import mapStyle from "../config/mapStyle.json";
import { rnSetPosition, TEXT_COLOR, LIGHT_TEXT_COLOR, rnFill } from "../tools";

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
          style={{ position: "absolute", ...rnFill, zIndex: -1 }}
          showsUserLocation
          followsUserLocation
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
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            top: Constants.statusBarHeight,
            left: 0
          }}
        >
          <View
            style={{
              // elevation: 15,
              width: Dimensions.get("window").width,
              padding: 20,
              flex: 1,
              borderRadius: 5
            }}
          >
            <Picker
              note
              mode="dropdown"
              style={{
                flex: 1,
                height: 50,
                // margin: 10,
                width: null,
                backgroundColor: "white",
                elevation: 15
              }}
            >
              <Picker.Item label="assurance" value="assurance" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
        </View>
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

const mapStateToProps = ({ Services }) => ({ Services });
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
