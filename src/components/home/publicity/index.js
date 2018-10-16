import React, { Component } from "react";
import { Dimensions, ImageBackground } from "react-native";
import { View, Text, Grid, Row, Col, Button, Icon } from "native-base";
import Carousel from "react-native-snap-carousel";
import {
  IMG_1,
  IMG_2,
  IMG_3,
  PRIMARY_COLOR,
  rnSetMargin,
  TEXT_COLOR,
  rnSetPosition
} from "../../../tools";

class Publicity extends Component {
  state = {
    entries: [
      {
        key: "a",
        userId: "a",
        image: IMG_1,
        service: "Lavage",
        phone: "+25501234567",
        location: "Angre Cite GESTOCI",
        title: "ici"
      },
      {
        key: "b",
        userId: "b",
        image: IMG_2,
        service: "Auto-Ecole",
        phone: "+25501234567",
        location: "Cocody Cite des Arts",
        title: "laba"
      },
      {
        key: "c",
        userId: "c",
        image: IMG_3,
        service: "Vulcanisateur",
        phone: "+25508976543",
        location: "Angre 7eme tranche",
        title: "au coin"
      }
    ]
  };
  _renderItem({ item, index }) {
    const { key, userId, service, phone, location, image } = item;
    return (
      <ImageBackground
        key={key}
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: 250 }}
      >
        <Grid>
          <Row
            size={4}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: "row-reverse",
              width: null,
              flex: 1
            }}
          >
            <Col
              style={{
                alignItems: "center",
                width: null,
                flex: 1,
                paddingVertical: 10
              }}
            >
              <Button light small iconLeft rounded>
                <Icon type="Feather" name="box" />
                <Text
                  style={{
                    fontFamily: "font",
                    fontSize: 13,
                    color: TEXT_COLOR
                  }}
                >
                  in {service}
                </Text>
              </Button>
            </Col>
          </Row>
          <Row
            size={1}
            style={{
              alignItems: "flex-end",
              paddingHorizontal: 20,
              paddingVertical: 10
            }}
          >
            <Col>
              <Button
                small
                full
                iconLeft
                style={{ backgroundColor: PRIMARY_COLOR, borderRadius: 0 }}
              >
                <Icon type="Feather" name="phone" />
                <Text
                  style={{
                    fontFamily: "font",
                    fontSize: 11,
                    color: TEXT_COLOR
                  }}
                >
                  {phone}
                </Text>
              </Button>
            </Col>
            <Col>
              <Button
                small
                full
                iconLeft
                style={{ backgroundColor: PRIMARY_COLOR, borderRadius: 0 }}
              >
                <Icon type="Feather" name="navigation" />
                <Text
                  style={{
                    fontFamily: "font",
                    fontSize: 11,
                    color: TEXT_COLOR
                  }}
                >
                  Direction
                </Text>
              </Button>
            </Col>
            <Col>
              <Button
                small
                full
                iconLeft
                style={{ backgroundColor: PRIMARY_COLOR, borderRadius: 0 }}
              >
                <Icon type="Feather" name="user" />
                <Text
                  style={{
                    fontFamily: "font",
                    fontSize: 11,
                    color: TEXT_COLOR
                  }}
                >
                  See Profile
                </Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        autoplay
        loop
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
      />
    );
  }
}

export default Publicity;
