import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { H1 } from "native-base";
import { Column as Col, Row } from "react-native-flexbox-grid";
import { connect } from "react-redux";
import { db } from "../../../config/base.js";
import {
  TEXT_COLOR,
  PRIMARY_COLOR,
  rnSetPosition,
  LIGHT_TEXT_COLOR,
  BG_LIGHT_COLOR,
  rnFill,
  SHADOW_PRIMARY_COLOR
} from "../../../tools";
import MyIcon from "../../common/MyIcon.js";
class Services extends Component {
  displayServices = () => {
    const { services } = this.props;
    const { length } = services;

    return (
      <Row size={12} style={{ paddingHorizontal: 20 }}>
        {services.map((service, index) => {
          const { name, icon } = service;
          const bgcolor = (index % 4) % 3 == 0 ? PRIMARY_COLOR : BG_LIGHT_COLOR;
          const sdcolor =
            (index % 4) % 3 == 0 ? SHADOW_PRIMARY_COLOR : TEXT_COLOR;
          const iconColor = (index % 4) % 3 == 0 ? "white" : TEXT_COLOR;
          return (
            <Col
              key={index}
              sm={6}
              style={{ paddingRight: 20, paddingBottom: 20 }}
            >
              <View
                style={{
                  borderTopLeftRadius: index == 0 ? 30 : 10,
                  borderTopRightRadius: index == 1 ? 30 : 10,
                  borderBottomRightRadius: index == length - 1 ? 30 : 10,
                  borderBottomLeftRadius:
                    index == length - 2 && index % 2 == 0 ? 30 : 10,
                  borderRadius: 10,
                  backgroundColor: bgcolor,
                  shadowColor: sdcolor,
                  shadowOpacity: (index % 4) % 3 == 0 ? 0.3 : 0.1,
                  shadowRadius: 5,
                  shadowOffset: { width: 5, height: 5 },
                  ...rnSetPosition(),
                  ...rnFill,
                  height: 150,
                  elevation: 15
                }}
              >
                <TouchableOpacity style={{ ...rnSetPosition() }}>
                  <MyIcon name={icon} size={50} color={iconColor} />
                  <Text
                    style={{
                      fontFamily: "font",
                      color: LIGHT_TEXT_COLOR,
                      marginTop: 10
                    }}
                  >
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            </Col>
          );
        })}
      </Row>
    );
  };

  render() {
    return (
      <View>
        <H1
          style={{ fontFamily: "font_light", color: TEXT_COLOR, padding: 20 }}
        >
          Que recherchez-vous?
        </H1>
        {this.props.services && this.displayServices()}
      </View>
    );
  }
}

const mapStateToProps = ({ services }) => ({ services });

export default connect(mapStateToProps)(Services);
