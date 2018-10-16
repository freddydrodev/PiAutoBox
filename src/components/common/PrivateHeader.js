import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Platform, Image, TouchableOpacity } from "react-native";
import { Header, Left, Title, Right, Body } from "native-base";
import { rnSetPadding, rnSetPosition, rnSquare, BG_COLOR } from "../../tools/";
class PrivateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headerStyle } = styles;
    return (
      <Header noShadow style={headerStyle}>
        <Left>
          <TouchableOpacity>
            <Image
              style={{ ...rnSquare(35), borderRadius: 20 }}
              source={require("../../../assets/Images/3.jpeg")}
            />
          </TouchableOpacity>
        </Left>
        <Body style={{ ...rnSetPosition("left") }}>
          <Title>PiAutoBox</Title>
        </Body>
        <Right>
          <TouchableOpacity style={{ ...rnSetPadding(10) }}>
            <Feather name="search" size={18} color="rgb(255,201,75)" />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

const Family = {
  fontFamily: "font_light"
};
const Color = {
  color: "rgb(255,201,75)"
};
// rgb(23, 25, 34)

const styles = StyleSheet.create({
  headerStyle: {
    ...rnSetPadding(30, "vertical"),
    backgroundColor: BG_COLOR,
    ...Platform.select({
      android: {
        paddingTop: 54,
        height: 94
      }
    })
  },
  titleStyle: {
    ...Family,
    ...Color,
    fontSize: 16
  }
});
export default PrivateHeader;
