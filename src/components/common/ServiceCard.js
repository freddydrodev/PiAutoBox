import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, H2, Button, Icon } from "native-base";
import { TEXT_COLOR, LIGHT_TEXT_COLOR, PRIMARY_COLOR } from "../../tools";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

const Star = ({ active }) => (
  <Feather
    name="star"
    color={active ? PRIMARY_COLOR : LIGHT_TEXT_COLOR}
    style={{ marginRight: 1 }}
  />
);

const Heart = ({ active }) => (
  <AntDesign
    name={active ? "heart" : "hearto"}
    size={18}
    color={active ? PRIMARY_COLOR : LIGHT_TEXT_COLOR}
  />
);

class ServiceCard extends Component {
  render() {
    const {
      containerStyle,
      topStyle,
      nameStyle,
      locationStyle,
      reviewContainerStyle,
      noteStyle,
      starContainrStyle,
      reviewStyle,
      bottomStyle,
      durationStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <TouchableOpacity>
          <View style={topStyle}>
            <View>
              <H2 style={nameStyle}>Heben Auto Ecole</H2>
              <Text style={locationStyle}>Angre 8eme Tranche</Text>
              <View style={reviewContainerStyle}>
                <Text style={noteStyle}>(4.4)</Text>
                <View style={starContainrStyle}>
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star />
                </View>
                <Text style={reviewStyle}>16 votes</Text>
              </View>
            </View>
            <Heart />
          </View>
          <View style={bottomStyle}>
            <View style={reviewContainerStyle}>
              <Ionicons name="ios-car" size={20} color={LIGHT_TEXT_COLOR} />
              <Text style={durationStyle}>9min</Text>
            </View>
            <Button
              primary
              rounded
              iconRight
              small
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Text style={{ fontFamily: "font", color: TEXT_COLOR }}>
                Direction
              </Text>
              <Icon
                type="MaterialIcons"
                name="directions"
                style={{ color: TEXT_COLOR }}
              />
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ServiceCard;

const styles = StyleSheet.create({
  containerStyle: {
    width: 280,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 15,
    backgroundColor: "rgba(255,255,255,.9)"
  },
  topStyle: {
    paddingBottom: 10,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomStyle: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameStyle: { fontFamily: "font_bold", color: TEXT_COLOR },
  locationStyle: {
    marginBottom: 10,
    fontFamily: "font",
    color: LIGHT_TEXT_COLOR
  },
  reviewContainerStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  noteStyle: {
    marginRight: 5,
    fontFamily: "font",
    color: PRIMARY_COLOR
  },
  starContainrStyle: {
    flexDirection: "row",
    marginRight: 5
  },
  reviewStyle: { fontFamily: "font", color: LIGHT_TEXT_COLOR },
  durationStyle: {
    fontFamily: "font",
    marginLeft: 10,
    color: LIGHT_TEXT_COLOR
  }
});
